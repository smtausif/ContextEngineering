import assert from 'node:assert/strict';
import { test } from 'node:test';

import { parseResults, summarizeResults, type SavedResult } from '../src/summarizeResults.ts';

const perfect = {
  answerCorrectness: 'Y' as const, exactMatch: 1 as const, tokenF1: 1,
  citationPrecision: 1, citationRecall: 1, citationF1: 1,
};
const usage = {
  prompt_tokens: 100, completion_tokens: 20, total_tokens: 120, cost: 0.001,
  prompt_tokens_details: { cached_tokens: 0, cache_write_tokens: 0 },
};

function record(overrides: Partial<SavedResult> = {}): SavedResult {
  return {
    runId: 'batch-a', strategy: 'full_context', model: 'offline/model', provider: 'Provider A',
    dataset: 'validation.parquet', cacheMode: 'none_requested', questionId: 'q1',
    status: 'completed', output: { answer: 'yes' }, scores: perfect,
    latencyMs: 10, endToEndLatencyMs: 12, usage, modelCalls: [{ usage }],
    ...overrides,
  };
}

test('quality means use only completed scored attempts and expose missing-score coverage', () => {
  const zero = {
    answerCorrectness: 'N' as const, exactMatch: 0 as const, tokenF1: 0,
    citationPrecision: 0, citationRecall: 0, citationF1: 0,
  };
  const [summary] = summarizeResults([
    record(), record({ questionId: 'q2', scores: zero }),
    record({ questionId: 'q3', scores: null }),
    record({ questionId: 'q4', status: 'failed', scores: perfect, output: null, modelCalls: [{ usage: null }] }),
    record({ questionId: 'q5', status: 'unsupported', modelCalls: [], output: null }),
    record({ questionId: 'q6', status: null, output: null, modelCalls: [] }),
  ]);

  assert.equal(summary.attempts, 6);
  assert.equal(summary.uniqueQuestions, 6);
  assert.equal(summary.completed, 3);
  assert.equal(summary.failed, 1);
  assert.equal(summary.unsupported, 1);
  assert.equal(summary.unknownStatus, 1);
  assert.equal(summary.scoredAttempts, 2);
  assert.equal(summary.unscoredCompleted, 1);
  assert.equal(summary.answerAccuracy, 0.5);
  assert.equal(summary.answerF1, 0.5);
  assert.equal(summary.citationPrecision, 0.5);
  assert.equal(summary.citationRecall, 0.5);
  assert.equal(summary.citationF1, 0.5);
});

test('repetitions count as attempts while question coverage remains distinct', () => {
  const [summary] = summarizeResults([record(), record(), record({ questionId: 'q2' })]);
  assert.equal(summary.attempts, 3);
  assert.equal(summary.uniqueQuestions, 2);
  assert.deepEqual(summary.questionIds, ['q1', 'q2']);
});

test('grouping keeps batches, strategies, models, datasets, and cache modes apart', () => {
  const groups = summarizeResults([
    record(),
    record({ provider: 'Provider B', status: 'failed', error: 'offline failure', scores: null }),
    record({ runId: 'batch-b' }), record({ strategy: 'rag_tool' }),
    record({ model: 'other/model' }), record({ cacheMode: 'explicit' }),
    record({ dataset: 'training.parquet' }),
  ]);
  assert.equal(groups.length, 6);
  assert.equal(groups[0].attempts, 2);
  assert.equal(groups[0].failed, 1);
  assert.deepEqual(groups[0].reportedProviders, ['Provider A', 'Provider B']);
});

test('usage comes from every model call without double-counting the top-level aggregate', () => {
  const otherUsage = { ...usage, prompt_tokens: 60, completion_tokens: 10, total_tokens: 70, cost: 0.002 };
  const [summary] = summarizeResults([record({
    strategy: 'summarization',
    usage: { prompt_tokens: 999, completion_tokens: 999, total_tokens: 999, cost: 999 },
    modelCalls: [{ usage }, { rawResponse: { usage: otherUsage } }],
  })]);
  assert.equal(summary.modelCalls, 2);
  assert.deepEqual(summary.tokens, { prompt: 160, completion: 30, total: 190, incompleteCalls: 0 });
  assert.ok(Math.abs(summary.cost.totalReported! - 0.003) < 1e-12);
  assert.equal(summary.cost.knownSubtotal, summary.cost.totalReported);
  assert.equal(summary.cost.missingCalls, 0);
});

test('a failed later request retains known preparation costs and leaves complete totals unknown', () => {
  const [summary] = summarizeResults([record({
    strategy: 'rag_tool', status: 'failed', output: null, scores: null,
    modelCalls: [{ usage }, { usage: null }],
  })]);
  assert.equal(summary.failed, 1);
  assert.equal(summary.answerAccuracy, null);
  assert.equal(summary.tokens.total, null);
  assert.equal(summary.tokens.incompleteCalls, 1);
  assert.equal(summary.cost.totalReported, null);
  assert.equal(summary.cost.knownSubtotal, 0.001);
  assert.equal(summary.cost.missingCalls, 1);
});

test('cache hit rate is measured per call, separate from token fraction and unknown measurements', () => {
  const cached = { ...usage, prompt_tokens_details: { cached_tokens: 80, cache_write_tokens: 0 } };
  const saved = {
    ...record({ strategy: 'rag_tool', modelCalls: [{ usage: cached }, { usage }, { usage: null }] }),
    cacheHit: true, cacheReadFraction: 0.8,
  };
  const [summary] = summarizeResults([saved]);
  assert.deepEqual(summary.cache, {
    hits: 1, measuredCalls: 2, missingCalls: 1, hitRate: 0.5, readTokens: null, writeTokens: null,
  });
});

test('reported zero metrics stay zero; invalid or unreported metrics remain unknown', () => {
  const zero = { prompt_tokens: 0, completion_tokens: 0, total_tokens: 0, cost: 0,
    prompt_tokens_details: { cached_tokens: 0, cache_write_tokens: 0 } };
  const [known] = summarizeResults([record({ modelCalls: [{ usage: zero }] })]);
  assert.equal(known.tokens.total, 0);
  assert.equal(known.cost.totalReported, 0);
  assert.equal(known.cache.hitRate, 0);

  const [invalid] = summarizeResults([record({ modelCalls: [{ usage: {
    prompt_tokens: 10.5, completion_tokens: -1, total_tokens: Number.NaN, cost: -0.1,
    prompt_tokens_details: { cached_tokens: -1 },
  } }] })]);
  assert.equal(invalid.tokens.total, null);
  assert.equal(invalid.tokens.prompt, null);
  assert.equal(invalid.cost.totalReported, null);
  assert.equal(invalid.cost.missingCalls, 1);
  assert.equal(invalid.cache.hitRate, null);
});

test('cache counts larger than a reported prompt are not treated as observed hits', () => {
  const [summary] = summarizeResults([record({ modelCalls: [{ usage: {
    ...usage, prompt_tokens_details: { cached_tokens: 101, cache_write_tokens: 0 },
  } }] })]);
  assert.equal(summary.cache.hitRate, null);
  assert.equal(summary.cache.missingCalls, 1);
});

test('latency means and medians include measured failures but exclude unsupported and missing data', () => {
  const [summary] = summarizeResults([
    record({ latencyMs: 0, endToEndLatencyMs: 1 }),
    record({ latencyMs: 10, endToEndLatencyMs: null }),
    record({ latencyMs: 30, endToEndLatencyMs: 31, status: 'failed', scores: null }),
    record({ latencyMs: -1, endToEndLatencyMs: -1 }),
    record({ latencyMs: 0, endToEndLatencyMs: 0, status: 'unsupported', modelCalls: [] }),
  ]);
  assert.equal(summary.latency.measuredAttempts, 3);
  assert.equal(summary.latency.meanMs, 40 / 3);
  assert.equal(summary.latency.medianMs, 10);
  assert.deepEqual(summary.endToEndLatency, { measuredAttempts: 2, meanMs: 16, medianMs: 16 });
});

test('legacy single-call records use their saved usage and never invent accuracy scores', () => {
  const [summary] = summarizeResults([
    record({ runId: null, status: null, scores: undefined, modelCalls: undefined }),
    record({ runId: null, status: null, scores: null, output: null, error: 'offline failure', modelCalls: undefined }),
  ]);
  assert.equal(summary.runId, null);
  assert.equal(summary.completed, 1);
  assert.equal(summary.failed, 1);
  assert.equal(summary.modelCalls, 2);
  assert.equal(summary.scoredAttempts, 0);
  assert.equal(summary.answerAccuracy, null);
  assert.equal(summary.tokens.total, 240);
});

test('unsupported attempts create no synthetic calls, cost, cache hits, or latency measurements', () => {
  const [summary] = summarizeResults([record({ status: 'unsupported', modelCalls: [], output: null })]);
  assert.equal(summary.modelCalls, 0);
  assert.equal(summary.cost.totalReported, null);
  assert.equal(summary.cost.missingCalls, 0);
  assert.equal(summary.cache.hitRate, null);
  assert.equal(summary.latency.measuredAttempts, 0);
  assert.equal(summary.answerAccuracy, null);
});

test('invalid or partial score objects do not become valid scored attempts', () => {
  const [summary] = summarizeResults([
    record({ scores: { exactMatch: 1 } }),
    record({ scores: { ...perfect, citationF1: 1.5 } }),
  ]);
  assert.equal(summary.scoredAttempts, 0);
  assert.equal(summary.unscoredCompleted, 2);
  assert.equal(summary.answerAccuracy, null);
});

test('JSONL parser handles blank lines, CRLF, and a Windows BOM and reports malformed line numbers', () => {
  const line = JSON.stringify(record());
  assert.equal(parseResults('\uFEFF' + line + '\r\n\r\n' + line + '\r\n').length, 2);
  assert.throws(() => parseResults('\n' + line + '\nnot JSON'), /line 3/);
  for (const value of [null, [], {}, { questionId: 'q' },
    { strategy: 'rag', questionId: 'q', modelCalls: [1] },
    { strategy: 'rag', questionId: 'q', runId: 123 }]) {
    assert.throws(() => parseResults(JSON.stringify(value)), /line 1/);
  }
});

test('empty input creates no groups and summarization preserves the original saved records', () => {
  assert.deepEqual(parseResults('\n\r\n'), []);
  assert.deepEqual(summarizeResults([]), []);
  const records = [record(), record({ questionId: 'q2', latencyMs: 1 })];
  const original = structuredClone(records);
  summarizeResults(records);
  assert.deepEqual(records, original);
});
