import { randomUUID } from 'node:crypto';
import { appendFile, mkdir } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import { parseArgs } from 'node:util';

import { evaluateResult } from './evaluation.ts';
import { DATASET_FILE, loadData } from './loadData.ts';
import { logger } from './logger.ts';
import { CacheModeSchema, type QuestionInput } from './schema.ts';
import { cacheMetrics } from './usage.ts';
import { caching } from './strategies/caching/caching.ts';
import { fullContext } from './strategies/full-context/fullContext.ts';
import { hybrid } from './strategies/hybrid/hybrid.ts';
import { callRag } from './strategies/rag/callRag.ts';
import { DEFAULT_TOP_K, TITLE_BOOST } from './strategies/rag/retrieveContext.ts';
import { summarization } from './strategies/summarization/summarization.ts';

try {
  const { values, positionals } = parseArgs({
    allowPositionals: true,
    options: {
      count: { type: 'string', default: '1' },
      start: { type: 'string', default: '0' },
      repetitions: { type: 'string', default: '1' },
      'cache-mode': { type: 'string' },
    },
  });

  const strategy = positionals[0] ?? 'full_context';
  const count = Number(values.count);
  const start = Number(values.start);
  const repetitions = Number(values.repetitions);
  const cacheMode = CacheModeSchema.safeParse(values['cache-mode'] ?? 'explicit');

  if (!cacheMode.success || (values['cache-mode'] && strategy !== 'caching')) {
    throw new Error('Use --cache-mode explicit or implicit with the caching strategy.');
  }

  const strategies = {
    full_context: fullContext,
    caching: (question: QuestionInput) => caching(question, cacheMode.data),
    rag: callRag,
    summarization,
    hybrid,
  };

  if (positionals.length > 1 || !Object.hasOwn(strategies, strategy)) {
    throw new Error(`Choose ${Object.keys(strategies).join(', ')}.`);
  }
  const run = strategies[strategy as keyof typeof strategies];
  const usesRetrieval = strategy === 'rag' || strategy === 'hybrid';

  if (!Number.isSafeInteger(repetitions) || repetitions <= 0) {
    throw new Error('repetitions must be a positive integer.');
  }

  const { questions, answerKey } = await loadData(count, start);
  const referenceById = new Map(answerKey.map(reference => [reference.id, reference]));
  const samples = questions.map(question => {
    const reference = referenceById.get(question.id);
    if (!reference) throw new Error(`Missing reference answer for ${question.id}.`);
    return { question, reference };
  });

  const runId = randomUUID();
  const directory = new URL('../results/', import.meta.url);

  logger.info({ runId, strategy, count, start, repetitions }, 'Starting question batch.');

  batch: for (const [questionIndex, { question, reference }] of samples.entries()) {
    logger.info({
      runId, questionId: question.id, questionNumber: questionIndex + 1, questionCount: count,
    }, 'Running batch question.');

    // Record every repetition, including setup calls, failures, and unsupported configurations.
    for (let repetition = 1; repetition <= repetitions; repetition++) {
      const started = performance.now();
      const result = await run(question);
      const endToEndLatencyMs = performance.now() - started;
      const scores = result.status === 'completed'
        ? evaluateResult(result.output, reference) : null;
      const toolCalls = result.toolCalls;
      const selectedTitles = result.selectedTitles;
      const cache = cacheMetrics(result.usage);
      const retrievedTitles = [...new Set(toolCalls.flatMap(call => call.selectedTitles))];
      const retrievalMs = usesRetrieval
        ? toolCalls.reduce((total, call) => total + call.retrievalMs, 0)
        : null;

      const record = {
        ...result,
        scores,
        runId,
        batchStart: start,
        batchCount: count,
        rowIndex: start + questionIndex,
        questionId: question.id,
        dataset: DATASET_FILE,
        strategy: strategy === 'rag' ? 'rag_tool' : strategy,
        repetition,
        availablePassages: question.context.title.length,
        includedPassages: selectedTitles.length,
        cacheHit: cache.cacheHit,
        cacheReadFraction: cache.cacheReadFraction,
        retrieval: usesRetrieval ? {
          method: 'minisearch', topK: DEFAULT_TOP_K, titleBoost: TITLE_BOOST, selectedTitles: retrievedTitles,
        } : null,
        retrievalMs,
        endToEndLatencyMs,
        toolCalls,
      };

      await mkdir(directory, { recursive: true });
      await appendFile(new URL('runs.jsonl', directory), JSON.stringify(record) + '\n');
      logger.info({ runId, questionId: question.id, strategy, repetition, status: result.status, scores }, 'Saved strategy attempt.');

      console.log(JSON.stringify({
        runId,
        questionId: question.id,
        questionNumber: questionIndex + 1,
        questionCount: count,
        strategy: record.strategy,
        repetition,
        status: result.status,
        output: result.output,
        scores,
        includedPassages: selectedTitles.length,
        modelCallCount: result.modelCalls.length,
        retrievalMs,
        endToEndLatencyMs,
        latencyMs: result.latencyMs,
        usage: result.usage,
        cacheHit: record.cacheHit,
        warnings: result.warnings,
        error: result.error,
      }, null, 2));

      if (result.status !== 'completed') {
        if (result.status === 'failed') process.exitCode = 1;
        // Stop the entire batch after a failed or unsupported attempt.
        logger.warn({ runId, questionId: question.id, status: result.status }, 'Stopped question batch.');
        break batch;
      }
    }
  }
} catch (cause) {
  logger.error({
    error: cause instanceof Error ? cause.message : 'Unknown error',
  }, 'Could not run the question batch.');

  process.exitCode = 1;
}
