import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

import { logger } from './logger.ts';
import { normalizeSavedResult } from './results.ts';
import { SavedResultSchema, type SavedResult, type Scores } from './schema.ts';
import { cacheMetrics, getUsage, meanMeasurements, measurement, sumMeasurements } from './usage.ts';

export type { SavedResult } from './schema.ts';

function latency(values: unknown[]) {
  const known = values.map(measurement).filter(value => value !== null).sort((a, b) => a - b);
  const middle = Math.floor(known.length / 2);

  return {
    measuredAttempts: known.length,
    meanMs: meanMeasurements(known),
    medianMs: known.length ? (known.length % 2 ? known[middle] : (known[middle - 1] + known[middle]) / 2) : null,
  };
}

/** Stop on malformed JSON or metadata rather than silently dropping an experimental result. */
export function parseResults(text: string): SavedResult[] {
  const records: SavedResult[] = [];

  for (const [index, line] of text.replace(/^\uFEFF/, '').split(/\r?\n/).entries()) {
    if (!line.trim()) continue;
    try {
      records.push(SavedResultSchema.parse(JSON.parse(line)));
    } catch {
      throw new Error(`Invalid result record on line ${index + 1}.`);
    }
  }

  return records;
}

/** Summarize attempts within each batch/strategy/model, keeping distinct datasets and cache modes apart. */
export function summarizeResults(records: SavedResult[]) {
  const groups = Map.groupBy(records.map(normalizeSavedResult), record =>
    JSON.stringify([record.runId, record.strategy, record.model, record.dataset, record.cacheMode]));

  return [...groups.values()].map(group => {
    const first = group[0];
    const byStatus = Map.groupBy(group, record => record.status);
    const completed = byStatus.get('completed') ?? [];
    const failed = byStatus.get('failed') ?? [];
    const measured = [...completed, ...failed];
    const scored = completed.flatMap(record => record.scores ? [record.scores] : []);
    const meanScore = (field: Exclude<keyof Scores, 'answerCorrectness'>) =>
      meanMeasurements(scored.map(scores => scores[field]));

    // Prefer individual calls: top-level RAG/summary usage already contains their totals.
    const calls = group.flatMap(record => record.modelCalls);
    const usage = calls.map(getUsage);
    const costs = usage.map(item => item?.cost ?? null);
    const knownCosts = costs.filter(value => value !== null);
    const cache = usage.map(cacheMetrics);
    const knownReads = cache.filter(item => item.cacheHit !== null);
    const cacheHits = knownReads.filter(item => item.cacheHit).length;
    const questionIds = [...new Set(group.map(record => record.questionId))];

    return {
      runId: first.runId,
      strategy: first.strategy,
      model: first.model,
      dataset: first.dataset,
      cacheMode: first.cacheMode,
      reportedProviders: [...new Set(group.flatMap(record => record.provider ? [record.provider] : []))],
      questionIds,
      uniqueQuestions: questionIds.length,
      attempts: group.length,
      completed: completed.length,
      failed: failed.length,
      unsupported: byStatus.get('unsupported')?.length ?? 0,
      unknownStatus: byStatus.get('unknown')?.length ?? 0,
      scoredAttempts: scored.length,
      unscoredCompleted: completed.length - scored.length,
      answerAccuracy: meanScore('exactMatch'),
      answerF1: meanScore('tokenF1'),
      citationPrecision: meanScore('citationPrecision'),
      citationRecall: meanScore('citationRecall'),
      citationF1: meanScore('citationF1'),
      latency: latency(measured.map(record => record.latencyMs)),
      endToEndLatency: latency(measured.map(record => record.endToEndLatencyMs)),
      modelCalls: calls.length,
      tokens: {
        prompt: sumMeasurements(usage.map(item => item?.prompt_tokens)),
        completion: sumMeasurements(usage.map(item => item?.completion_tokens)),
        total: sumMeasurements(usage.map(item => item?.total_tokens)),
        incompleteCalls: usage.filter(item => [item?.prompt_tokens, item?.completion_tokens, item?.total_tokens]
          .some(value => value == null)).length,
      },
      cost: {
        totalReported: sumMeasurements(costs),
        knownSubtotal: sumMeasurements(knownCosts) ?? 0,
        missingCalls: calls.length - knownCosts.length,
      },
      cache: {
        hits: cacheHits,
        measuredCalls: knownReads.length,
        missingCalls: calls.length - knownReads.length,
        hitRate: knownReads.length ? cacheHits / knownReads.length : null,
        readTokens: sumMeasurements(cache.map(item => item.readTokens)),
        writeTokens: sumMeasurements(cache.map(item => item.writeTokens)),
      },
    };
  });
}

if (import.meta.main) {
  try {
    const { values } = parseArgs({ options: { 'run-id': { type: 'string' } } });
    const input = new URL('../results/runs.jsonl', import.meta.url);
    const records = parseResults(await readFile(input, 'utf8'))
      .filter(record => values['run-id'] === undefined || record.runId === values['run-id']);
    if (values['run-id'] !== undefined && !records.length) throw new Error('No saved results match that run ID.');

    const groups = summarizeResults(records);
    const output = new URL('../results/summary.json', import.meta.url);
    await mkdir(new URL('.', output), { recursive: true });
    await writeFile(output, JSON.stringify({
      generatedAt: new Date().toISOString(), input: fileURLToPath(input),
      runId: values['run-id'] ?? null, records: records.length, groups,
    }, null, 2) + '\n');

    const percent = (value: number | null) => value === null ? '-' : `${(value * 100).toFixed(1)}%`;
    console.table(groups.map(group => ({
      Batch: group.runId?.slice(0, 8) ?? 'legacy',
      Strategy: group.strategy,
      Model: group.model ?? 'unknown',
      Attempts: group.attempts,
      Failed: group.failed,
      Scored: group.scoredAttempts,
      Accuracy: percent(group.answerAccuracy),
      'Citation F1': group.citationF1?.toFixed(3) ?? '-',
      'Mean ms': group.latency.meanMs?.toFixed(0) ?? '-',
      Tokens: group.tokens.total ?? '-',
      Cost: group.cost.totalReported?.toFixed(8) ??
        (group.cost.missingCalls ? `${group.cost.knownSubtotal.toFixed(8)} + unknown` : '-'),
      'Cache hit': percent(group.cache.hitRate),
    })));
    logger.info({ records: records.length, groups: groups.length, file: 'results/summary.json' }, 'Saved results summary.');
  } catch (cause) {
    logger.error({ error: cause instanceof Error ? cause.message : 'Unknown error' }, 'Could not summarize results.');
    process.exitCode = 1;
  }
}
