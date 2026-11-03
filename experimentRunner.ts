import { createHash, randomUUID } from 'node:crypto';
import { performance } from 'node:perf_hooks';
import { summarization } from './summarization.ts';
import { parseArgs } from 'node:util';
import { fileURLToPath } from 'node:url';
import { AIClient, AIClientError } from './aiClient.ts';
import { ParquetFileReader } from './ParquetFileReader.ts';
import { caching, cachingLimitation } from './caching.ts';
import { fullContext } from './fullContext.ts';
import { expandContext } from './contextExpansion.ts';
import { cacheHitRate, evaluateAnswer, evaluateCitations } from './evaluation.ts';
import { ResultsWriter, type ResultsSink } from './resultsWriter.ts';
import type { TrainData } from './schema.ts';
import {
  parseAnswer, prepareFullContext, resolveConfiguration, type CacheMode, type CompletionClient,
  type ModelConfiguration, type Strategy, type StrategyInput, type StrategyName,
  type StrategyResult, type SupportedModel,
  RESPONSE_FORMAT_VERSION, type ExtractionStatus,
} from './strategy.ts';

export const DATASET_FILE = 'data/train-00000-of-00002.parquet';
export const ROUND_MODELS = {
  1: 'google/gemini-2.5-flash-lite',
  2: 'openai/gpt-4.1-mini',
} as const;
export interface ExperimentOptions {
  configuration: ModelConfiguration;
  questionIds: string[];
  strategies?: StrategyName[];
  repetitions?: number;
  cachingMode?: 'explicit' | 'implicit';
  /** Defaults to true. A live call requires explicit dryRun: false. */
  dryRun?: boolean;
  /** Optional output destination; the new schema defaults to results/results-v3.csv. */
  outputFile?: string;
  /** Experimental size only, not a token threshold. Default 0 preserves the original collection. */
  additionalContextPassages?: number;
}
export interface StrategyRegistration {
  run: Strategy;
  cacheMode: CacheMode;
  /** Pure local check: return a reason if this configuration cannot run. */
  preflight?: (input: StrategyInput) => string | null;
}
export interface RunnerDependencies {
  /** Test seam only. The production loader has no alternate dataset-path option. */
  loadDataset?: () => Promise<TrainData[]>;
  createClient?: () => CompletionClient;
  /** Future methods plug in here; built-in methods cannot be overwritten. */
  additionalStrategies?: Partial<Record<StrategyName, StrategyRegistration>>;
  /** Tests use an isolated writer or in-memory sink; production appends results/results-v3.csv. */
  resultsWriter?: ResultsSink;
}
export interface ExperimentError {
  kind: string;
  message: string;
  status: number | null;
  retryAfterSeconds: number | null;
}
export interface CompletionCall {
  requestSequenceNumber: number;
  startedAt: string;
  questionRequestNumber: number;
  strategyRequestNumber: number;
  cacheReadTokens: number | null;
  cacheWriteTokens: number | null;
  cacheReadFraction: number | null;
  reportedCostUsd: number | null;
}
export interface ExperimentCostSummary {
  totalReportedCostUsd: number | null;
  knownReportedCostUsd: number;
  completionCalls: number;
  missingCostCalls: number;
}
export interface ExperimentResult {
  runId: string;
  resultsSchemaVersion: 'fair-order-v3';
  questionIndex: number;
  strategyOrder: StrategyName[];
  strategyPosition: number;
  attemptSequenceNumber: number;
  /** Completion call order, not cache state; null for dry/unsupported attempts. */
  requestSequenceNumber: number | null;
  requestStartedAt: string | null;
  requestPhase: 'first' | 'repeated' | null;
  questionRequestPhase: 'first' | 'repeated' | null;
  cachePolicy: 'automatic_allowed' | 'explicit_requested';
  sharedPromptFingerprint: string;
  completionCalls: CompletionCall[];
  attemptReportedCostUsd: number | null;
  cumulativeReportedCostUsd: number | null;
  cumulativeKnownCostUsd: number | null;
  cumulativeMissingCostCalls: number | null;
  /** UTC ISO timestamp when this attempt finished (or its dry-run plan was yielded). */
  timestamp: string;
  datasetFile: typeof DATASET_FILE;
  /** Hashes IDs, questions, and original contexts; excludes model and strategy. */
  selectionFingerprint: string;
  sourceFingerprint: string;
  round: 1 | 2;
  questionId: string;
  question: string;
  expectedAnswer: string;
  modelId: SupportedModel;
  configuration: Required<ModelConfiguration>;
  strategy: StrategyName;
  repetition: number;
  dryRun: boolean;
  cacheMode: CacheMode;
  status: 'dry_run' | 'completed' | 'unsupported' | 'failed';
  reason: string | null;
  generatedAnswer: string | null;
  rawResponse: string | null;
  explanation: string | null;
  responseFormatVersion: typeof RESPONSE_FORMAT_VERSION;
  answerExtractionStatus: ExtractionStatus | null;
  citationExtractionStatus: ExtractionStatus | null;
  citations: string[] | null;
  preparationTimeSeconds: number | null;
  apiLatencySeconds: number | null;
  totalResponseTimeSeconds: number | null;
  promptTokens: number | null;
  completionTokens: number | null;
  totalTokens: number | null;
  cachedTokens: number | null;
  cacheReadTokens: number | null;
  cacheReadFraction: number | null;
  cacheWriteTokens: number | null;
  cacheHit: boolean | null;
  reportedCostUsd: number | null;
  costSource: 'reported' | 'missing';
  answerCorrectness: 'Y' | 'N' | null;
  exactMatch: 0 | 1 | null;
  tokenF1: number | null;
  citationPrecision: number | null;
  citationRecall: number | null;
  citationF1: number | null;
  cacheHitRate: number | null;
  /** Separate from model errors: a persistence failure stops later attempts. */
  persistenceError: string | null;
  error: ExperimentError | null;
  /** Retains raw answers, IDs, parsing flags, missing metrics, warnings, and future strategy data. */
  strategyResult: StrategyResult | null;
  warnings: string[];
}

/** Alternate just the comparison pair's slots; future strategy positions remain stable. */
export function orderStrategies(strategies: readonly StrategyName[], questionIndex: number): StrategyName[] {
  const ordered = [...strategies];
  const slots = ordered.flatMap((name, i) => name === 'full_context' || name === 'caching' ? [i] : []);
  if (ordered.includes('full_context') && ordered.includes('caching')) {
    ordered[slots[0]] = questionIndex % 2 === 0 ? 'full_context' : 'caching';
    ordered[slots[1]] = questionIndex % 2 === 0 ? 'caching' : 'full_context';
  }
  return ordered;
}

/** Every completion, including first requests and preparation calls, contributes its reported cost.
 * usage.cost already includes provider-reported cache creation charges: do not add a token estimate.
 */
export function summarizeExperimentCosts(rows: Iterable<Pick<ExperimentResult, 'completionCalls'>>): ExperimentCostSummary {
  let knownReportedCostUsd = 0, completionCalls = 0, missingCostCalls = 0;
  for (const row of rows) for (const call of row.completionCalls) {
    completionCalls++;
    if (call.reportedCostUsd === null) missingCostCalls++;
    else knownReportedCostUsd += call.reportedCostUsd;
  }
  return { totalReportedCostUsd: missingCostCalls ? null : knownReportedCostUsd,
    knownReportedCostUsd, completionCalls, missingCostCalls };
}

function hash(value: unknown): string {
  return createHash('sha256').update(JSON.stringify(value)).digest('hex');
}
function safeError(error: unknown): ExperimentError {
  if (error instanceof AIClientError) return {
    kind: error.kind, message: error.message, status: error.status,
    retryAfterSeconds: error.retryAfterSeconds,
  };
  // Arbitrary strategy errors may contain prompts or secrets. Do not serialize them.
  return { kind: 'strategy', message: 'Strategy execution failed; no retry was attempted.',
    status: null, retryAfterSeconds: null };
}
async function loadAgreedDataset(): Promise<TrainData[]> {
  try {
    return await new ParquetFileReader({ filePath: fileURLToPath(new URL(`./${DATASET_FILE}`, import.meta.url)) }).read();
  } catch {
    throw new Error(`Unable to read the agreed dataset: ${DATASET_FILE}.`);
  }
}

/** Sequential, pull-based execution. Errors yield one failed result and stop the run.
 * No API client is constructed in dry runs. No retries or model switches occur.
 */
export async function* runExperiment(
  options: ExperimentOptions, dependencies: RunnerDependencies = {},
): AsyncGenerator<ExperimentResult> {
  const configuration = resolveConfiguration(options.configuration);
  const questionIds = [...options.questionIds];
  const strategies = [...(options.strategies ?? ['full_context', 'caching'])];
  const repetitions = options.repetitions ?? 1;
  const dryRun = options.dryRun ?? true;
  const cachingMode = options.cachingMode ?? 'explicit';
  const outputFile = options.outputFile;
  const additionalContextPassages = options.additionalContextPassages ?? 0;
  if (!questionIds.length || questionIds.some(id => typeof id !== 'string' || !id.trim()) ||
    new Set(questionIds).size !== questionIds.length) throw new Error('Select nonempty, unique question IDs.');
  if (!strategies.length || new Set(strategies).size !== strategies.length) throw new Error('Select unique strategies.');
  if (!Number.isSafeInteger(repetitions) || repetitions <= 0) throw new Error('Repetitions must be a positive safe integer.');
  if (typeof dryRun !== 'boolean' || !['explicit', 'implicit'].includes(cachingMode)) throw new Error('Invalid execution or cache mode.');
  if (outputFile !== undefined && (typeof outputFile !== 'string' || !outputFile.trim())) throw new Error('Output file must not be empty.');
  if (!Number.isSafeInteger(additionalContextPassages) || additionalContextPassages < 0) throw new Error('Additional passage count must be a non-negative safe integer.');
  const registry: Partial<Record<StrategyName, StrategyRegistration>> = {
    full_context: { run: fullContext, cacheMode: 'none_requested' },
    summarization: { run: summarization, cacheMode: 'none_requested' },
    caching: { run: (input, client) => caching({ ...input, cachingMode }, client),
      cacheMode: cachingMode, preflight: input => cachingLimitation({ ...input, cachingMode }) },
  };
  for (const [name, registration] of Object.entries(dependencies.additionalStrategies ?? {})) {
    if (!['rag', 'summarization', 'hybrid'].includes(name) || !registration) {
      throw new Error('Only RAG, Summarization, and Hybrid can be registered as additional strategies.');
    }
    registry[name as StrategyName] = registration;
  }
  for (const name of strategies) {
    if (!Object.hasOwn(registry, name) || !registry[name]) throw new Error(`Strategy is not registered: ${name}.`);
  }

  // Validate the complete selection before constructing a client or executing any strategy.
  const rows = await (dependencies.loadDataset ?? loadAgreedDataset)();
  const requested = new Set(questionIds);
  const selected = new Map<string, TrainData>();
  for (const row of rows) {
    if (!requested.has(row.id)) continue;
    if (selected.has(row.id)) throw new Error('Selected dataset IDs are duplicated in the agreed shard.');
    selected.set(row.id, row);
  }
  if (selected.size !== questionIds.length) throw new Error('One or more selected question IDs were not found in the agreed shard.');
  const samples = questionIds.map(id => {
    const row = selected.get(id)!;
    if (typeof row.answer !== 'string' || !row.answer.trim()) throw new Error('A selected question has no expected answer.');
    // Copy only allowlisted fields; gold labels are kept in a separate evaluation record.
    const input: StrategyInput = structuredClone({ question: {
      id: row.id, question: row.question, context: row.context,
    }, configuration });
    let prepared = prepareFullContext(input); // Reuse input validation, with no model calls.
    if (additionalContextPassages > 0) {
      input.question.context = expandContext(input.question, rows, additionalContextPassages).context;
      prepared = prepareFullContext(input);
    }
    const goldTitles = row.supporting_facts?.title;
    return { input, expectedAnswer: row.answer, sourceFingerprint: hash(input.question),
      sharedPromptFingerprint: prepared.promptFingerprint,
      // Evaluation-only data, never attached to StrategyInput or an AIRequest.
      goldSupportingTitles: Array.isArray(goldTitles) && goldTitles.every(title => typeof title === 'string')
        ? [...goldTitles] : null };
  });
  const selectionFingerprint = hash(samples.map(sample => sample.input.question));
  const runId = randomUUID();
  const writer = dryRun ? undefined : dependencies.resultsWriter ?? new ResultsWriter(outputFile);
  // Fail before any paid call if the output cannot be initialized safely.
  await writer?.initialize?.();
  let client: CompletionClient | undefined;
  let attemptSequence = 0, requestSequence = 0;
  let cumulativeKnownCost = 0, cumulativeMissingCosts = 0;
  const questionRequests = new Map<string, number>();
  const strategyRequests = new Map<string, number>();
  // Alternate the pair by selected-question index; repetitions stay adjacent within each strategy.
  for (const [questionIndex, sample] of samples.entries()) {
    const strategyOrder = orderStrategies(strategies, questionIndex);
    for (const [strategyIndex, name] of strategyOrder.entries()) {
      const registration = registry[name]!;
      for (let repetition = 1; repetition <= repetitions; repetition++) {
        const input = structuredClone(sample.input);
        const row: ExperimentResult = {
          runId, timestamp: '', datasetFile: DATASET_FILE, selectionFingerprint,
          resultsSchemaVersion: 'fair-order-v3', questionIndex: questionIndex + 1,
          strategyOrder: [...strategyOrder], strategyPosition: strategyIndex + 1,
          attemptSequenceNumber: ++attemptSequence, requestSequenceNumber: null,
          requestStartedAt: null, requestPhase: null, questionRequestPhase: null,
          cachePolicy: registration.cacheMode === 'explicit' ? 'explicit_requested' : 'automatic_allowed',
          sharedPromptFingerprint: sample.sharedPromptFingerprint, completionCalls: [],
          attemptReportedCostUsd: null, cumulativeReportedCostUsd: null,
          cumulativeKnownCostUsd: null, cumulativeMissingCostCalls: null,
          sourceFingerprint: sample.sourceFingerprint,
          round: configuration.model === ROUND_MODELS[1] ? 1 : 2,
          questionId: input.question.id, question: input.question.question,
          expectedAnswer: sample.expectedAnswer, modelId: configuration.model,
          configuration: { ...configuration }, strategy: name, repetition, dryRun,
          cacheMode: registration.cacheMode, status: 'dry_run', reason: null,
          generatedAnswer: null, citations: null, preparationTimeSeconds: null,
          rawResponse: null, explanation: null, responseFormatVersion: RESPONSE_FORMAT_VERSION,
          answerExtractionStatus: null, citationExtractionStatus: null,
          apiLatencySeconds: null, totalResponseTimeSeconds: null,
          promptTokens: null, completionTokens: null, totalTokens: null,
          cachedTokens: null, cacheWriteTokens: null, cacheHit: null,
          cacheReadTokens: null, cacheReadFraction: null,
          reportedCostUsd: null, costSource: 'missing', error: null, strategyResult: null,
          answerCorrectness: null, exactMatch: null, tokenF1: null,
          citationPrecision: null, citationRecall: null, citationF1: null, cacheHitRate: null,
          persistenceError: null,
          warnings: ['Full Context permits automatic caching. Alternating order does not eliminate cache carryover from earlier requests. First/repeated labels describe execution, not cache state.'],
        };
        if (additionalContextPassages > 0) row.warnings.push(`Experimental expansion: ${additionalContextPassages} additional passages appended in shard order; context fingerprints identify the expanded collection.`);
        const started = performance.now();
        try {
          const limitation = registration.preflight?.(structuredClone(input));
          if (limitation) {
            row.status = 'unsupported';
            row.reason = limitation;
          } else if (!dryRun) {
            client ??= (dependencies.createClient ?? (() => new AIClient()))();
            const measuredClient: CompletionClient = { complete: async request => {
              if (request.model !== configuration.model || request.temperature !== configuration.temperature ||
                request.maxOutputTokens !== configuration.maxOutputTokens) {
                throw new Error('Strategy changed shared model settings before dispatch.');
              }
              if (name === 'full_context' || name === 'caching') {
                if (!Array.isArray(request.userPrompt) ||
                  hash([request.systemPrompt, ...request.userPrompt.map(block => block.text)]) !== sample.sharedPromptFingerprint) {
                  throw new Error('Comparison strategy changed the shared question, context, or instructions.');
                }
              }
              const strategyKey = JSON.stringify([input.question.id, name]);
              const questionRequestNumber = (questionRequests.get(sample.input.question.id) ?? 0) + 1;
              const strategyRequestNumber = (strategyRequests.get(strategyKey) ?? 0) + 1;
              questionRequests.set(sample.input.question.id, questionRequestNumber);
              strategyRequests.set(strategyKey, strategyRequestNumber);
              const call: CompletionCall = { requestSequenceNumber: ++requestSequence,
                startedAt: new Date().toISOString(), questionRequestNumber, strategyRequestNumber,
                cacheReadTokens: null, cacheWriteTokens: null, cacheReadFraction: null, reportedCostUsd: null };
              row.completionCalls.push(call);
              if (row.requestSequenceNumber === null) {
                row.requestSequenceNumber = call.requestSequenceNumber;
                row.requestStartedAt = call.startedAt;
                row.requestPhase = strategyRequestNumber === 1 ? 'first' : 'repeated';
                row.questionRequestPhase = questionRequestNumber === 1 ? 'first' : 'repeated';
              }
              const response = await client!.complete(request);
              call.cacheReadTokens = response.cachedTokens;
              call.cacheWriteTokens = response.cacheWriteTokens;
              call.cacheReadFraction = cacheHitRate(response.cachedTokens, response.promptTokens);
              call.reportedCostUsd = typeof response.costUsd === 'number' && Number.isFinite(response.costUsd) && response.costUsd >= 0
                ? response.costUsd : null;
              return response;
            } };
            const result = await registration.run(input, measuredClient);
            row.strategyResult = result;
            if (result.questionId !== row.questionId || result.strategy !== name || result.cacheMode !== row.cacheMode) {
              throw new Error('Strategy returned mismatched experiment identifiers.');
            }
            row.status = result.status;
            if (result.status === 'unsupported') row.reason = result.reason;
            else {
              if ((Object.keys(configuration) as Array<keyof typeof configuration>)
                .some(key => result.configuration[key] !== configuration[key])) {
                throw new Error('Strategy returned different model settings.');
              }
              if ((name === 'full_context' || name === 'caching') && result.promptFingerprint !== sample.sharedPromptFingerprint) {
                throw new Error('Comparison result prompt fingerprint does not match the shared input.');
              }
              const response = result.response;
              // Parse the original output here as well: future adapters cannot bypass extraction safeguards.
              const parsed = parseAnswer(response.answer);
              row.generatedAnswer = parsed.answer;
              row.rawResponse = response.answer;
              row.explanation = parsed.explanation;
              row.answerExtractionStatus = parsed.answerExtractionStatus;
              row.citationExtractionStatus = parsed.citationExtractionStatus;
              row.citations = parsed.citations;
              row.preparationTimeSeconds = result.contextPreparationTimeSeconds;
              row.apiLatencySeconds = response.responseTimeSeconds;
              row.totalResponseTimeSeconds = result.totalResponseTimeSeconds;
              row.promptTokens = response.promptTokens;
              row.completionTokens = response.completionTokens;
              row.totalTokens = response.totalTokens;
              row.cachedTokens = response.cachedTokens;
              row.cacheWriteTokens = response.cacheWriteTokens;
              row.cacheHit = response.cacheHit;
              row.reportedCostUsd = response.costUsd;
              row.costSource = response.costSource;
              row.warnings.push(...result.warnings);
            }
          }
        } catch (error) {
          row.status = 'failed';
          row.error = safeError(error);
          row.totalResponseTimeSeconds = (performance.now() - started) / 1000;
          if (error instanceof AIClientError) row.apiLatencySeconds = error.responseTimeSeconds;
          row.warnings.push('Failed requests may still incur charges; unavailable costs remain null. Run stopped without retrying.');
        }
        row.timestamp = new Date().toISOString();
        if (row.status === 'completed' && row.answerExtractionStatus === 'valid' && row.generatedAnswer !== null) {
          Object.assign(row, evaluateAnswer(row.generatedAnswer, sample.expectedAnswer));
        }
        if (row.status === 'completed') {
          if (sample.goldSupportingTitles !== null) {
            Object.assign(row, evaluateCitations(row.citations ?? [], sample.goldSupportingTitles));
          } else row.warnings.push('Gold supporting titles are unavailable; citation scores remain null.');
        }
        row.cacheHitRate = cacheHitRate(row.cachedTokens, row.promptTokens);
        row.cacheReadTokens = row.cachedTokens;
        row.cacheReadFraction = row.cacheHitRate;
        if (!dryRun) {
          const costs = summarizeExperimentCosts([row]);
          row.attemptReportedCostUsd = costs.completionCalls ? costs.totalReportedCostUsd : null;
          cumulativeKnownCost += costs.knownReportedCostUsd;
          cumulativeMissingCosts += costs.missingCostCalls;
          row.cumulativeKnownCostUsd = cumulativeKnownCost;
          row.cumulativeMissingCostCalls = cumulativeMissingCosts;
          row.cumulativeReportedCostUsd = cumulativeMissingCosts ? null : cumulativeKnownCost;
        }
        try {
          await writer?.append(row);
        } catch {
          row.persistenceError = 'CSV append failed; experiment stopped without retrying. Preserve this structured result before rerunning.';
          row.warnings.push(row.persistenceError);
        }
        yield row;
        if (row.status === 'failed' || row.persistenceError) return;
      }
    }
  }
}

export const RUNNER_HELP = `Usage: node experimentRunner.ts --round 1 --question-ids ID1,ID2 [options]
  --round 1|2                 Select exactly one model round (or use --model)
  --model MODEL_ID            Explicit model ID instead of --round
  --question-ids ID1,ID2       Required IDs from ${DATASET_FILE}, in desired order
  --strategies LIST           Default: full_context,caching
  --repetitions N             Default: 1 per question and strategy
  --cache-mode explicit|implicit   Default: explicit; GPT-4.1-mini explicit is unsupported
  --temperature NUMBER        Default: 0
  --max-output-tokens N       Default: 512
  --timeout-ms N              Default: 120000
  --provider SLUG             Optional provider override, shared by all strategies
  --output-file PATH          Optional new-schema CSV path; default results/results-v3.csv
  --additional-context-passages N  Experimental expansion from the agreed shard; default 0
  --dry-run                   Default; no API client or strategy execution
  --live                      Execute potentially billable calls; no automatic retries
  --help                      Show this help without loading data or credentials
Output: one JSON result per line to stdout. Live attempts append the selected CSV path.
Dry runs never create or write CSV files.
Full Context / Caching order alternates by selected question; --repetitions applies equally to both.
`;

export function parseRunnerArguments(args: string[]): ExperimentOptions | 'help' {
  const { values } = parseArgs({ args, strict: true, allowPositionals: false, options: {
    round: { type: 'string' }, model: { type: 'string' }, 'question-ids': { type: 'string' },
    strategies: { type: 'string' }, repetitions: { type: 'string' }, 'cache-mode': { type: 'string' },
    temperature: { type: 'string' }, 'max-output-tokens': { type: 'string' },
    'timeout-ms': { type: 'string' }, provider: { type: 'string' },
    'output-file': { type: 'string' }, 'additional-context-passages': { type: 'string' },
    'dry-run': { type: 'boolean' }, live: { type: 'boolean' }, help: { type: 'boolean' },
  } });
  if (values.help) return 'help';
  if (Boolean(values.round) === Boolean(values.model)) throw new Error('Specify exactly one of --round or --model.');
  if (values.round && !['1', '2'].includes(values.round)) throw new Error('Round must be 1 or 2.');
  if (values.live && values['dry-run']) throw new Error('Choose --dry-run or --live, not both.');
  if (!values['question-ids']) throw new Error('--question-ids is required.');
  const model = values.model ?? ROUND_MODELS[Number(values.round) as 1 | 2];
  const number = (value: string | undefined, fallback: number) => {
    if (value !== undefined && !value.trim()) throw new Error('Numeric options must not be empty.');
    return value === undefined ? fallback : Number(value);
  };
  const configuration = resolveConfiguration({ model: model as SupportedModel,
    temperature: number(values.temperature, 0), maxOutputTokens: number(values['max-output-tokens'], 512),
    timeoutMs: number(values['timeout-ms'], 120000), provider: values.provider });
  if (values['cache-mode'] && !['explicit', 'implicit'].includes(values['cache-mode'])) throw new Error('Invalid cache mode.');
  return { configuration, questionIds: values['question-ids'].split(',').map(id => id.trim()),
    strategies: values.strategies?.split(',').map(name => name.trim()) as StrategyName[] | undefined,
    repetitions: number(values.repetitions, 1), cachingMode: values['cache-mode'] as 'explicit' | 'implicit' | undefined,
    outputFile: values['output-file'], additionalContextPassages: number(values['additional-context-passages'], 0),
    dryRun: !values.live };
}

if (import.meta.main) {
  try {
    const options = parseRunnerArguments(process.argv.slice(2));
    if (options === 'help') process.stdout.write(RUNNER_HELP);
    else for await (const result of runExperiment(options)) {
      process.stdout.write(`${JSON.stringify(result)}\n`);
      if (result.status === 'failed' || result.status === 'unsupported' || result.persistenceError) process.exitCode = 1;
    }
  } catch (error) {
    // Local errors contain only configuration/dataset information; never print stack/env data.
    process.stderr.write(`${error instanceof Error ? error.message : 'Experiment could not start.'}\n`);
    process.exitCode = 1;
  }
}
