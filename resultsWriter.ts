import { mkdir, open } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { ExperimentResult } from './experimentRunner.ts';

// New order/measurement schema; historical CSVs are never migrated or mixed with these rows.
export const DEFAULT_RESULTS_FILE = fileURLToPath(new URL('./results/results-v3.csv', import.meta.url));
export const CSV_COLUMNS = [
  'run_id', 'timestamp', 'question_id', 'question', 'expected_answer', 'model_id', 'strategy',
  'repetition', 'generated_answer', 'extracted_citations', 'answer_correctness', 'exact_match',
  'token_f1', 'citation_correctness_score', 'citation_precision', 'citation_recall',
  'context_preparation_ms', 'api_latency_ms', 'total_elapsed_ms', 'prompt_tokens',
  'completion_tokens', 'total_tokens', 'cached_tokens', 'cache_hit_rate', 'reported_cost_usd',
  'context_fingerprint', 'caching_mode', 'error_details', 'status', 'unsupported_reason',
  'selection_fingerprint', 'cost_source', 'cache_hit', 'cache_write_tokens', 'dataset_file',
  'temperature', 'max_output_tokens', 'provider', 'request_id', 'returned_model_id',
  'raw_response', 'explanation', 'answer_extraction_status', 'citation_extraction_status',
  'output_format_valid', 'response_format_version', 'prompt_fingerprint',
  'results_schema_version', 'question_index', 'strategy_order', 'strategy_position',
  'attempt_sequence_number', 'request_sequence_number', 'request_started_at',
  'request_phase', 'question_request_phase', 'cache_policy', 'cache_read_tokens', 'cache_read_fraction',
  'shared_prompt_fingerprint', 'completion_calls', 'attempt_reported_cost_usd',
  'cumulative_reported_cost_usd', 'cumulative_known_cost_usd', 'cumulative_missing_cost_calls',
] as const;

export function escapeCsv(value: string | number | boolean | null | undefined): string {
  if (value === null || value === undefined) return '';
  const text = String(value);
  return /[,"\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

/** Redact known environment secrets and common API/Bearer credential forms, including echoed output. */
function redact(text: string): string {
  let safe = text;
  const secrets = Object.entries(process.env)
    .filter(([name, value]) => /key|token|secret|password|credential/i.test(name) && value && value.length >= 6)
    .map(([, value]) => value!).sort((a, b) => b.length - a.length);
  for (const secret of secrets) safe = safe.split(secret).join('[REDACTED]');
  return safe.replace(/\bsk-(?:or-v1-)?[a-zA-Z0-9_-]{12,}\b/g, '[REDACTED]')
    .replace(/\bBearer\s+[a-zA-Z0-9._~+\/-]+=*/gi, 'Bearer [REDACTED]');
}
const ms = (seconds: number | null) => seconds === null ? null : seconds * 1000;

/** Explicit field allowlist: never serialize arbitrary strategy objects, prompts, or environment data. */
export function resultToCsvRow(row: ExperimentResult): string {
  const response = row.strategyResult?.status === 'completed' ? row.strategyResult.response : null;
  const values: Array<string | number | boolean | null> = [
    row.runId, row.timestamp, row.questionId, row.question, row.expectedAnswer, row.modelId,
    row.strategy, row.repetition, row.generatedAnswer,
    row.citations === null ? null : JSON.stringify(row.citations),
    row.answerCorrectness, row.exactMatch, row.tokenF1, row.citationF1, row.citationPrecision, row.citationRecall,
    ms(row.preparationTimeSeconds), ms(row.apiLatencySeconds), ms(row.totalResponseTimeSeconds),
    row.promptTokens, row.completionTokens, row.totalTokens, row.cachedTokens, row.cacheHitRate,
    row.reportedCostUsd, row.sourceFingerprint, row.cacheMode,
    row.error === null ? null : JSON.stringify({ kind: row.error.kind, message: row.error.message,
      status: row.error.status, retryAfterSeconds: row.error.retryAfterSeconds }),
    row.status, row.reason, row.selectionFingerprint, row.costSource, row.cacheHit, row.cacheWriteTokens,
    row.datasetFile, row.configuration.temperature, row.configuration.maxOutputTokens,
    response?.provider ?? row.configuration.provider, response?.requestId ?? null, response?.modelId ?? null,
    row.rawResponse, row.explanation, row.answerExtractionStatus, row.citationExtractionStatus,
    row.strategyResult?.status === 'completed' ? row.strategyResult.outputFormatValid : null,
    row.responseFormatVersion,
    row.strategyResult?.status === 'completed' ? row.strategyResult.promptFingerprint : null,
    row.resultsSchemaVersion, row.questionIndex, JSON.stringify(row.strategyOrder), row.strategyPosition,
    row.attemptSequenceNumber, row.requestSequenceNumber, row.requestStartedAt,
    row.requestPhase, row.questionRequestPhase, row.cachePolicy, row.cacheReadTokens, row.cacheReadFraction,
    row.sharedPromptFingerprint,
    row.completionCalls.length ? JSON.stringify(row.completionCalls.map(call => ({
      requestSequenceNumber: call.requestSequenceNumber, startedAt: call.startedAt,
      questionRequestNumber: call.questionRequestNumber, strategyRequestNumber: call.strategyRequestNumber,
      cacheReadTokens: call.cacheReadTokens, cacheWriteTokens: call.cacheWriteTokens,
      cacheReadFraction: call.cacheReadFraction, reportedCostUsd: call.reportedCostUsd,
    }))) : null,
    row.attemptReportedCostUsd, row.cumulativeReportedCostUsd,
    row.cumulativeKnownCostUsd, row.cumulativeMissingCostCalls,
  ];
  return values.map(value => escapeCsv(typeof value === 'string' ? redact(value) : value)).join(',');
}

export interface ResultsSink {
  initialize?(): Promise<void>;
  append(row: ExperimentResult): Promise<void>;
}

// Serialize writers to the same path within this process. Experiments use one terminal process at a time.
const pending = new Map<string, Promise<void>>();
function serialize(path: string, work: () => Promise<void>): Promise<void> {
  const next = (pending.get(path) ?? Promise.resolve()).catch(() => {}).then(work);
  pending.set(path, next);
  void next.finally(() => { if (pending.get(path) === next) pending.delete(path); }).catch(() => {});
  return next;
}

export class ResultsWriter implements ResultsSink {
  readonly path: string;
  constructor(path = DEFAULT_RESULTS_FILE) { this.path = resolve(path); }

  private async write(line?: string): Promise<void> {
    try {
      await mkdir(dirname(this.path), { recursive: true, mode: 0o700 });
      const file = await open(this.path, 'a+', 0o600);
      try {
        const stat = await file.stat();
        const header = CSV_COLUMNS.join(',') + '\r\n';
        if (stat.size === 0) await file.writeFile(header, 'utf8');
        else {
          const expected = Buffer.from(header);
          const actual = Buffer.alloc(expected.length);
          await file.read(actual, 0, actual.length, 0);
          if (!actual.equals(expected)) throw new Error('CSV header mismatch.');
          const last = Buffer.alloc(1);
          await file.read(last, 0, 1, stat.size - 1);
          if (last[0] !== 10) throw new Error('CSV has an incomplete trailing row.');
        }
        if (line !== undefined) await file.writeFile(line + '\r\n', 'utf8');
      } finally { await file.close(); }
    } catch {
      throw new Error('Could not append results CSV. Check permissions, header compatibility, and incomplete rows. Existing data was not overwritten.');
    }
  }

  initialize(): Promise<void> { return serialize(this.path, () => this.write()); }
  append(row: ExperimentResult): Promise<void> {
    if (row.dryRun || row.status === 'dry_run') return Promise.resolve();
    const line = resultToCsvRow(row);
    return serialize(this.path, () => this.write(line));
  }
}
