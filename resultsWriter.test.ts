import assert from 'node:assert/strict';
import { mkdtemp, readFile, rm, stat, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';
import { AIClientError, type AIRequest, type AIResponse } from './aiClient.ts';
import { runExperiment, type ExperimentResult, type RunnerDependencies } from './experimentRunner.ts';
import { CSV_COLUMNS, DEFAULT_RESULTS_FILE, ResultsWriter, escapeCsv, resultToCsvRow } from './resultsWriter.ts';
import type { TrainData } from './schema.ts';

const sample: TrainData = {
  id: 'csv-test', question: 'Which city, exactly?', answer: 'GOLD_ANSWER_NOT_IN_PROMPT',
  type: 'bridge', level: 'medium',
  supporting_facts: { title: ['GOLD_ONLY_LABEL', 'Source A', 'Source A'], sent_id: [999, 0, 1] },
  context: { title: ['Source A', 'Distractor'], sentences: [['Evidence only.'], ['More evidence.']] },
};
const options = { configuration: { model: 'google/gemini-2.5-flash-lite' as const },
  questionIds: ['csv-test'], strategies: ['full_context'] as ['full_context'], repetitions: 1, dryRun: false };
function mockResponse(request: AIRequest): AIResponse {
  assert.ok(!JSON.stringify(request).includes('GOLD_'));
  return {
    answer: `Final Answer: ${sample.answer}\nExplanation: A detailed explanation, preserved in full.\nCitations: ["Source A"]`,
    requestedModelId: request.model, modelId: request.model, provider: 'Mock', requestId: 'offline-id',
    finishReason: 'stop', responseTimeSeconds: 0.125, promptTokens: 100, completionTokens: 0,
    totalTokens: 100, cachedTokens: 25, cacheWriteTokens: null, cacheHit: true,
    costUsd: 0, costSource: 'reported', missingMetrics: ['cacheWriteTokens'],
  };
}
async function collect(overrides: Partial<typeof options> = {}, dependencies: RunnerDependencies = {}) {
  const rows: ExperimentResult[] = [];
  for await (const row of runExperiment({ ...options, ...overrides }, {
    loadDataset: async () => structuredClone([sample]),
    createClient: () => ({ complete: async request => mockResponse(request) }),
    resultsWriter: { append: async () => {} }, ...dependencies,
  })) rows.push(row);
  return rows;
}
async function temp(work: (path: string) => Promise<void>) {
  const root = await mkdtemp(join(tmpdir(), 'context-results-test-'));
  try { await work(join(root, 'results', 'results.csv')); }
  finally { await rm(root, { recursive: true, force: true }); }
}
// Independent CSV reader for round-trip tests, including quoted multiline fields.
function parseCsv(text: string): string[][] {
  const rows: string[][] = []; let row: string[] = []; let cell = ''; let quoted = false;
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '"') {
      if (quoted && text[i + 1] === '"') { cell += '"'; i++; }
      else quoted = !quoted;
    } else if (char === ',' && !quoted) { row.push(cell); cell = ''; }
    else if (char === '\n' && !quoted) {
      row.push(cell.endsWith('\r') ? cell.slice(0, -1) : cell); rows.push(row); row = []; cell = '';
    } else cell += char;
  }
  assert.equal(quoted, false);
  return rows;
}
function records(text: string) {
  const [header, ...rows] = parseCsv(text);
  for (const row of rows) assert.equal(row.length, header.length);
  return rows.map(row => Object.fromEntries(header.map((name, i) => [name, row[i]])));
}

test('CSV escaping round-trips commas, quotes, CR/LF, and JSON citation lists', async () => {
  const [row] = await collect();
  row.question = 'A comma, a "quote"\nand another\r\nline';
  row.citations = ['Title, with comma', 'Title "quoted"'];
  const parsed = records(CSV_COLUMNS.join(',') + '\r\n' + resultToCsvRow(row) + '\r\n')[0];
  assert.equal(parsed.question, row.question);
  assert.deepEqual(JSON.parse(parsed.extracted_citations), row.citations);
  assert.equal(escapeCsv(null), '');
  assert.equal(escapeCsv(0), '0');
  assert.equal(escapeCsv(false), 'false');
});

test('writer creates one header, appends across instances/runs, and never overwrites prior rows', async () => temp(async path => {
  const writer = new ResultsWriter(path);
  const first = await collect({}, { resultsWriter: writer });
  const before = await readFile(path, 'utf8');
  const second = await collect({}, { resultsWriter: new ResultsWriter(path) });
  const after = await readFile(path, 'utf8');
  assert.ok(after.startsWith(before));
  const rows = records(after);
  assert.equal(rows.length, 2);
  assert.notEqual(first[0].runId, second[0].runId);
  assert.equal(rows[0].run_id, first[0].runId);
  assert.equal(rows[1].run_id, second[0].runId);
  assert.ok(Number.isFinite(Date.parse(rows[0].timestamp)));
  assert.equal(rows[0].answer_correctness, 'Y');
  assert.equal(rows[0].exact_match, '1');
  assert.equal(rows[0].token_f1, '1');
  assert.equal(rows[0].citation_precision, '1');
  assert.equal(rows[0].citation_recall, '0.5');
  assert.equal(Number(rows[0].citation_correctness_score), 2 / 3);
  assert.equal(rows[0].api_latency_ms, '125');
  assert.equal(rows[0].cache_hit_rate, '0.25');
  assert.equal(rows[0].raw_response, first[0].strategyResult?.response?.answer);
  assert.equal(rows[0].generated_answer, sample.answer);
  assert.equal(rows[0].answer_extraction_status, 'valid');
  assert.equal(rows[0].response_format_version, 'final-answer-v2');
}));

test('missing measurements serialize empty while measured zeros and false remain explicit', async () => {
  const [row] = await collect();
  row.cachedTokens = 0; row.cacheHit = false; row.cacheHitRate = 0; row.apiLatencySeconds = null;
  const record = records(CSV_COLUMNS.join(',') + '\r\n' + resultToCsvRow(row) + '\r\n')[0];
  assert.equal(record.completion_tokens, '0');
  assert.equal(record.reported_cost_usd, '0');
  assert.equal(record.cached_tokens, '0');
  assert.equal(record.cache_hit_rate, '0');
  assert.equal(record.cache_hit, 'false');
  assert.equal(record.cache_write_tokens, '');
  assert.equal(record.api_latency_ms, '');
});

test('failed attempts are saved once with blank scores and stop without retries', async () => temp(async path => {
  let calls = 0;
  const results = await collect({ repetitions: 3 }, { resultsWriter: new ResultsWriter(path), createClient: () => ({
    async complete() { calls++; throw new AIClientError('Rate limited.', 'rate_limit', 429, 2, 0.2); },
  }) });
  assert.equal(calls, 1);
  assert.equal(results.length, 1);
  const [row] = records(await readFile(path, 'utf8'));
  assert.equal(row.status, 'failed');
  assert.equal(JSON.parse(row.error_details).status, 429);
  assert.equal(row.answer_correctness, '');
  assert.equal(row.token_f1, '');
  assert.equal(row.citation_correctness_score, '');
  assert.equal(row.reported_cost_usd, '');
}));

test('unsupported caching is saved without a model call and has no answer scores', async () => temp(async path => {
  const results: ExperimentResult[] = [];
  for await (const row of runExperiment({ ...options, configuration: { model: 'openai/gpt-4.1-mini' }, strategies: ['caching'] }, {
    loadDataset: async () => [sample], resultsWriter: new ResultsWriter(path),
    createClient: () => { assert.fail('unsupported configuration made an API client'); },
  })) results.push(row);
  const [row] = records(await readFile(path, 'utf8'));
  assert.equal(row.status, 'unsupported');
  assert.ok(row.unsupported_reason.includes('GPT-4.1-mini'));
  assert.equal(row.exact_match, '');
  assert.equal(row.caching_mode, 'explicit');
  assert.equal(results[0].cacheHitRate, null);
}));

test('dry-run never initializes a sink or creates results directory, even for unsupported plans', async () => temp(async path => {
  const sink = { initialize: async () => { assert.fail('dry run initialized output'); },
    append: async () => { assert.fail('dry run appended output'); } };
  const rows = await collect({ dryRun: true }, { resultsWriter: sink });
  assert.equal(rows[0].answerCorrectness, null);
  for await (const row of runExperiment({ ...options, dryRun: true,
    configuration: { model: 'openai/gpt-4.1-mini' }, strategies: ['caching'],
  }, { loadDataset: async () => [sample], resultsWriter: sink,
    createClient: () => { assert.fail('dry run constructed a client'); } })) {
    assert.equal(row.status, 'unsupported');
  }
  await new ResultsWriter(path).append(rows[0]);
  await assert.rejects(stat(path), { code: 'ENOENT' });
  await assert.rejects(stat(join(path, '..')), { code: 'ENOENT' });
}));

test('writer allowlist and redaction prevent credentials and arbitrary metadata from reaching CSV', async () => {
  const prior = process.env.OPENROUTER_API_KEY;
  const priorSecret = process.env.TEST_OTHER_SECRET;
  process.env.OPENROUTER_API_KEY = 'sk-or-v1-offline-secret-123456789';
  process.env.TEST_OTHER_SECRET = 'private-value-for-test';
  try {
    const [row] = await collect();
    row.generatedAnswer = `Echo ${process.env.OPENROUTER_API_KEY} and ${process.env.TEST_OTHER_SECRET}`;
    row.rawResponse = `Final Answer: ${process.env.OPENROUTER_API_KEY}\nExplanation: ${process.env.TEST_OTHER_SECRET}\nCitations: []`;
    row.error = { kind: 'test', message: `Bearer abcdefghijklmnop ${process.env.OPENROUTER_API_KEY}`, status: null, retryAfterSeconds: null };
    Object.assign(row, { Authorization: 'HIDDEN_ARBITRARY_METADATA' });
    const csv = resultToCsvRow(row);
    assert.ok(!csv.includes(process.env.OPENROUTER_API_KEY));
    assert.ok(!csv.includes(process.env.TEST_OTHER_SECRET));
    assert.ok(!csv.includes('abcdefghijklmnop'));
    assert.ok(!csv.includes('HIDDEN_ARBITRARY_METADATA'));
    assert.ok(csv.includes('[REDACTED]'));
  } finally {
    if (prior === undefined) delete process.env.OPENROUTER_API_KEY; else process.env.OPENROUTER_API_KEY = prior;
    if (priorSecret === undefined) delete process.env.TEST_OTHER_SECRET; else process.env.TEST_OTHER_SECRET = priorSecret;
  }
});

test('incompatible existing CSV stops before any API call and preserves the file', async () => temp(async path => {
  await new ResultsWriter(path).initialize();
  await writeFile(path, 'incompatible,header\nexisting,data\n');
  await assert.rejects(collect({}, { resultsWriter: new ResultsWriter(path),
    createClient: () => { assert.fail('incompatible CSV allowed a paid call'); } }));
  assert.equal(await readFile(path, 'utf8'), 'incompatible,header\nexisting,data\n');
}));

test('append failure preserves structured results and prevents further calls', async () => {
  let calls = 0;
  const rows = await collect({ repetitions: 3 }, {
    createClient: () => ({ complete: async request => { calls++; return mockResponse(request); } }),
    resultsWriter: { append: async () => { throw new Error('private filesystem detail'); } },
  });
  assert.equal(calls, 1);
  assert.equal(rows.length, 1);
  assert.equal(rows[0].status, 'completed');
  assert.equal(rows[0].answerCorrectness, 'Y');
  assert.ok(rows[0].persistenceError?.includes('stopped'));
  assert.ok(!JSON.stringify(rows).includes('private filesystem detail'));
});

test('writers serialize same-process appends with a single header', async () => temp(async path => {
  const [row] = await collect();
  await Promise.all([new ResultsWriter(path).append(row), new ResultsWriter(path).append({ ...row, repetition: 2 })]);
  assert.equal(records(await readFile(path, 'utf8')).length, 2);
}));

test('partial trailing rows are preserved and block subsequent appends', async () => temp(async path => {
  const writer = new ResultsWriter(path);
  await writer.initialize();
  const partial = await readFile(path, 'utf8') + 'incomplete record';
  await writeFile(path, partial);
  const [row] = await collect();
  await assert.rejects(writer.append(row));
  assert.equal(await readFile(path, 'utf8'), partial);
}));

test('no extracted citations receives zero with known gold titles, not a missing score', async () => {
  const rows = await collect({}, { createClient: () => ({ complete: async request => ({ ...mockResponse(request),
    answer: 'Final Answer: Other answer\nExplanation: Evidence.\nCitations: []',
  }) }) });
  assert.equal(rows[0].citationF1, 0);
  assert.equal(rows[0].answerCorrectness, 'N');
  assert.equal(rows[0].exactMatch, 0);
});

test('explained answer scores only its Final Answer while CSV preserves the complete response', async () => temp(async path => {
  const raw = `Final Answer: ${sample.answer}\r\n\r\nExplanation: More words, "quoted" text and detail.\r\nCitations: ["Source A"]`;
  const [row] = await collect({}, { resultsWriter: new ResultsWriter(path), createClient: () => ({
    complete: async request => ({ ...mockResponse(request), answer: raw }),
  }) });
  assert.equal(row.exactMatch, 1);
  assert.equal(row.tokenF1, 1);
  assert.equal(row.answerCorrectness, 'Y');
  assert.equal(row.generatedAnswer, sample.answer);
  assert.equal(row.rawResponse, raw);
  const [record] = records(await readFile(path, 'utf8'));
  assert.equal(record.raw_response, raw);
  assert.equal(record.generated_answer, sample.answer);
  assert.equal(record.explanation, 'More words, "quoted" text and detail.');
}));

test('failed Final Answer extraction never awards EM/F1, even if raw output contains the gold answer', async () => temp(async path => {
  for (const raw of [sample.answer, `Explanation: ${sample.answer}\nCitations: ["Source A"]`,
    `Final Answer: \nExplanation: ${sample.answer}\nCitations: ["Source A"]`,
    `Final Answer: ${sample.answer}\nFinal Answer: ${sample.answer}\nExplanation: Evidence.\nCitations: ["Source A"]`]) {
    const [row] = await collect({}, { resultsWriter: new ResultsWriter(path), createClient: () => ({
      complete: async request => ({ ...mockResponse(request), answer: raw }),
    }) });
    assert.equal(row.generatedAnswer, null);
    assert.equal(row.answerCorrectness, null);
    assert.equal(row.exactMatch, null);
    assert.equal(row.tokenF1, null);
    assert.equal(row.rawResponse, raw);
    assert.notEqual(row.answerExtractionStatus, 'valid');
    if (raw.includes('Citations:')) assert.ok(row.citationF1 !== null && row.citationF1 > 0);
  }
  const saved = records(await readFile(path, 'utf8'));
  assert.equal(saved.length, 4);
  assert.ok(saved.every(row => row.generated_answer === '' && row.exact_match === '' && row.token_f1 === '' && row.answer_correctness === ''));
}));

test('new default CSV has a separate versioned path and refuses an old-schema file', async () => temp(async path => {
  assert.ok(DEFAULT_RESULTS_FILE.replaceAll('\\', '/').endsWith('/results/results-v3.csv'));
  await new ResultsWriter(path).initialize();
  const legacy = CSV_COLUMNS.slice(0, 40).join(',') + '\r\nlegacy-data\r\n';
  await writeFile(path, legacy);
  await assert.rejects(new ResultsWriter(path).initialize());
  assert.equal(await readFile(path, 'utf8'), legacy);
}));

test('configurable output file uses the existing schema without changing the default', async () => temp(async path => {
  const saved: ExperimentResult[] = [];
  for await (const row of runExperiment({ ...options, outputFile: path }, {
    loadDataset: async () => [sample], createClient: () => ({ complete: async request => mockResponse(request) }),
  })) saved.push(row);
  assert.equal(records(await readFile(path, 'utf8')).length, 1);
  assert.ok(DEFAULT_RESULTS_FILE.replaceAll('\\', '/').endsWith('/results/results-v3.csv'));
  const second = join(path, '..', 'dry-run-output.csv');
  for await (const row of runExperiment({ ...options, dryRun: true, outputFile: second }, {
    loadDataset: async () => [sample], createClient: () => { assert.fail('dry run constructed a client'); },
  })) assert.equal(row.status, 'dry_run');
  await assert.rejects(stat(second), { code: 'ENOENT' });
}));

test('v3 CSV preserves ordering, cache aliases, request phases, and complete running costs', async () => temp(async path => {
  const rows = await collect({ repetitions: 2 }, { resultsWriter: new ResultsWriter(path) });
  const saved = records(await readFile(path, 'utf8'));
  assert.equal(saved[0].results_schema_version, 'fair-order-v3');
  assert.deepEqual(JSON.parse(saved[0].strategy_order), ['full_context']);
  assert.equal(saved[0].question_index, '1');
  assert.equal(saved[0].strategy_position, '1');
  assert.deepEqual(saved.map(r => r.request_sequence_number), ['1', '2']);
  assert.deepEqual(saved.map(r => r.request_phase), ['first', 'repeated']);
  assert.deepEqual(saved.map(r => r.question_request_phase), ['first', 'repeated']);
  assert.equal(saved[0].cache_policy, 'automatic_allowed');
  assert.equal(saved[0].cache_read_tokens, '25');
  assert.equal(saved[0].cache_write_tokens, '');
  assert.equal(saved[0].cache_read_fraction, '0.25');
  assert.equal(saved[1].cumulative_reported_cost_usd, '0');
  assert.equal(saved[1].cumulative_missing_cost_calls, '0');
  assert.equal(JSON.parse(saved[0].completion_calls)[0].reportedCostUsd, 0);
  assert.equal(saved[0].shared_prompt_fingerprint, rows[0].sharedPromptFingerprint);
}));
