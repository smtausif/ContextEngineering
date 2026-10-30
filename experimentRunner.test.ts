import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { after, test } from 'node:test';
import { AIClientError, type AIRequest, type AIResponse } from './aiClient.ts';
import {
  DATASET_FILE, ROUND_MODELS, orderStrategies, parseRunnerArguments, runExperiment, summarizeExperimentCosts,
  type ExperimentOptions, type ExperimentResult, type RunnerDependencies,
} from './experimentRunner.ts';
import type { TrainData } from './schema.ts';
import { executePrepared, prepareFullContext, type CompletionClient } from './strategy.ts';

const protectedResults = ['results/results.csv', 'results/results-v2.csv', 'results/caching-tests.csv', 'results/final-results.csv'];
const savedResults = protectedResults.map(path => existsSync(path) ? readFileSync(path) : null);
after(() => {
  protectedResults.forEach((path, i) => assert.deepEqual(existsSync(path) ? readFileSync(path) : null, savedResults[i],
    `Offline tests changed protected results: ${path}`));
});

const samples: TrainData[] = ['a', 'b'].map(id => ({
  id, question: `Question ${id}?`, answer: `GOLD_ANSWER_${id}`,
  type: 'bridge', level: 'medium',
  supporting_facts: { title: [`GOLD_LABEL_${id}`], sent_id: [999] },
  context: { title: [`Source ${id}`, `Distractor ${id}`], sentences: [
    [`Evidence ${id}.`, ' Keep exact whitespace.'], ['Unrelated sentence.'],
  ] },
}));
function options(overrides: Partial<ExperimentOptions> = {}): ExperimentOptions {
  return { configuration: { model: ROUND_MODELS[1], temperature: 0.1, maxOutputTokens: 123 },
    questionIds: ['b', 'a'], strategies: ['full_context', 'caching'], repetitions: 2,
    dryRun: false, ...overrides };
}
function fakeClient() {
  const requests: AIRequest[] = [];
  let active = 0;
  let maxActive = 0;
  const client: CompletionClient = { async complete(request): Promise<AIResponse> {
    active++;
    maxActive = Math.max(active, maxActive);
    requests.push(structuredClone(request));
    await new Promise(resolve => setTimeout(resolve, 1));
    active--;
    return {
      answer: 'Final Answer: Mock answer\nExplanation: Mock evidence.\nCitations: ["Source b"]',
      requestedModelId: request.model, modelId: request.model, requestId: `mock-${requests.length}`,
      provider: 'Mock Provider', finishReason: 'stop', responseTimeSeconds: 0.05,
      promptTokens: 100, completionTokens: 10, totalTokens: 110,
      cachedTokens: requests.length % 2 ? 0 : null, cacheWriteTokens: null,
      cacheHit: requests.length % 2 ? false : null, costUsd: requests.length % 2 ? 0 : null,
      costSource: requests.length % 2 ? 'reported' : 'missing', missingMetrics: [],
    };
  } };
  return { client, requests, maxActive: () => maxActive };
}
async function collect(opts: ExperimentOptions, deps: RunnerDependencies = {}) {
  const results: ExperimentResult[] = [];
  for await (const result of runExperiment(opts, { loadDataset: async () => structuredClone(samples),
    resultsWriter: { append: async () => {} }, ...deps })) {
    results.push(result);
  }
  return results;
}

test('sequential runner uses every selected ID/strategy/repetition with identical original sources', async () => {
  const mock = fakeClient();
  let loads = 0;
  const results = await collect(options(), { createClient: () => mock.client,
    loadDataset: async () => { loads++; return structuredClone(samples); } });
  assert.equal(loads, 1);
  assert.equal(mock.maxActive(), 1);
  assert.equal(results.length, 8);
  assert.equal(mock.requests.length, 8);
  assert.deepEqual(results.map(r => [r.questionId, r.strategy, r.repetition]), [
    ['b', 'full_context', 1], ['b', 'full_context', 2], ['b', 'caching', 1], ['b', 'caching', 2],
    ['a', 'caching', 1], ['a', 'caching', 2], ['a', 'full_context', 1], ['a', 'full_context', 2],
  ]);
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    assert.equal(result.status, 'completed');
    assert.equal(result.expectedAnswer, `GOLD_ANSWER_${result.questionId}`);
    assert.equal(result.question, `Question ${result.questionId}?`);
    const request = mock.requests[i];
    assert.equal(request.model, ROUND_MODELS[1]);
    assert.equal(request.temperature, 0.1);
    assert.equal(request.maxOutputTokens, 123);
    assert.ok(!JSON.stringify(request).includes('GOLD_'));
    assert.ok(Array.isArray(request.userPrompt));
    const documents = JSON.parse(request.userPrompt[0].text.replace('Source passages (JSON):\n', '').trim());
    const source = samples.find(s => s.id === result.questionId)!;
    assert.deepEqual(documents, source.context.title.map((title, j) => ({ title, sentences: source.context.sentences[j] })));
    assert.equal(result.apiLatencySeconds, 0.05);
    assert.ok(result.preparationTimeSeconds !== null && result.preparationTimeSeconds >= 0);
  }
  assert.equal(new Set(results.map(r => r.selectionFingerprint)).size, 1);
  assert.equal(new Set(results.slice(0, 4).map(r => r.sourceFingerprint)).size, 1);
});

test('both rounds preserve selection/source fingerprints and never automatically switch model', async () => {
  const outputs = [];
  for (const model of [ROUND_MODELS[1], ROUND_MODELS[2]]) {
    const mock = fakeClient();
    const results = await collect(options({ configuration: { model }, cachingMode: 'implicit' }), {
      createClient: () => mock.client,
    });
    assert.ok(mock.requests.every(r => r.model === model));
    assert.ok(results.every(r => r.modelId === model));
    outputs.push(results);
  }
  assert.deepEqual(outputs[0].map(r => r.questionId), outputs[1].map(r => r.questionId));
  assert.deepEqual(outputs[0].map(r => r.sourceFingerprint), outputs[1].map(r => r.sourceFingerprint));
  assert.equal(outputs[0][0].selectionFingerprint, outputs[1][0].selectionFingerprint);
});

test('reported zero values and missing values remain distinguishable in flat results', async () => {
  const mock = fakeClient();
  const results = await collect(options({ questionIds: ['b'], strategies: ['full_context'] }), { createClient: () => mock.client });
  assert.equal(results[0].reportedCostUsd, 0);
  assert.equal(results[0].costSource, 'reported');
  assert.equal(results[0].cachedTokens, 0);
  assert.equal(results[0].cacheHit, false);
  assert.equal(results[1].reportedCostUsd, null);
  assert.equal(results[1].costSource, 'missing');
  assert.equal(results[1].cachedTokens, null);
  assert.equal(results[1].cacheHit, null);
});

test('dry-run is the default and never constructs a client or executes registered strategies', async () => {
  let executions = 0;
  const results = await collect(options({ dryRun: undefined, strategies: ['full_context', 'rag'] }), {
    createClient: () => { assert.fail('dry run constructed an API client'); },
    additionalStrategies: { rag: { cacheMode: 'none_requested', run: async () => {
      executions++;
      assert.fail('dry run executed a strategy');
    } } },
  });
  assert.equal(results.length, 8);
  assert.equal(executions, 0);
  assert.ok(results.every(r => r.status === 'dry_run' && r.promptTokens === null && r.reportedCostUsd === null));
});

test('GPT explicit caching is clearly unsupported in dry and live modes without constructing a client', async () => {
  for (const dryRun of [true, false]) {
    const results = await collect(options({ dryRun, configuration: { model: ROUND_MODELS[2] }, strategies: ['caching'] }), {
      createClient: () => { assert.fail('unsupported caching constructed a client'); },
    });
    assert.equal(results.length, 4);
    assert.ok(results.every(r => r.status === 'unsupported' && r.reason?.includes('GPT-4.1-mini') &&
      r.cacheMode === 'explicit' && r.reportedCostUsd === null));
  }
});

test('future strategy receives only source inputs and cannot mutate later samples/configuration', async () => {
  const mock = fakeClient();
  const seen: string[] = [];
  const results = await collect(options({ strategies: ['rag', 'full_context'], repetitions: 1 }), {
    createClient: () => mock.client,
    additionalStrategies: { rag: { cacheMode: 'none_requested', run: async (input, client) => {
      assert.deepEqual(Object.keys(input.question).sort(), ['context', 'id', 'question']);
      assert.ok(!JSON.stringify(input).includes('GOLD_'));
      seen.push(input.question.id);
      const prepared = prepareFullContext(input);
      input.question.context.title[0] = 'MUTATED';
      input.configuration.temperature = 1.9;
      return executePrepared(prepared, 'rag', 'none_requested', client, []);
    } } },
  });
  assert.deepEqual(seen, ['b', 'a']);
  assert.ok(results.every(r => r.status === 'completed'));
  for (const request of mock.requests) {
    assert.equal(request.temperature, 0.1);
    assert.ok(!JSON.stringify(request).includes('MUTATED'));
  }
});

test('Round 2 compares Full Context while preserving explicit-cache limitations without switching model', async () => {
  const mock = fakeClient();
  const results = await collect(options({ configuration: { model: ROUND_MODELS[2] }, questionIds: ['a'] }), {
    createClient: () => mock.client,
  });
  assert.deepEqual(results.map(r => r.status), ['completed', 'completed', 'unsupported', 'unsupported']);
  assert.equal(mock.requests.length, 2);
  assert.ok(mock.requests.every(r => r.model === ROUND_MODELS[2]));
});

test('first API failure is recorded and stops subsequent requests without retry', async () => {
  let calls = 0;
  const results = await collect(options(), { createClient: () => ({ async complete() {
    calls++;
    throw new AIClientError('OpenRouter rate limited the request.', 'rate_limit', 429, 7, 0.12);
  } }) });
  assert.equal(calls, 1);
  assert.equal(results.length, 1);
  assert.equal(results[0].status, 'failed');
  assert.equal(results[0].error?.status, 429);
  assert.equal(results[0].error?.retryAfterSeconds, 7);
  assert.equal(results[0].apiLatencySeconds, 0.12);
  assert.equal(results[0].reportedCostUsd, null);
  assert.equal(results[0].requestSequenceNumber, 1);
  assert.equal(results[0].requestPhase, 'first');
  assert.equal(results[0].cumulativeReportedCostUsd, null);
  assert.equal(results[0].cumulativeMissingCostCalls, 1);
});

test('unknown strategy exceptions cannot expose their raw message in result rows', async () => {
  const mock = fakeClient();
  const results = await collect(options({ strategies: ['hybrid'] }), {
    createClient: () => mock.client,
    additionalStrategies: { hybrid: { cacheMode: 'none_requested', run: async () => {
      throw new Error('SENSITIVE_ERROR_CONTENT');
    } } },
  });
  assert.equal(results[0].status, 'failed');
  assert.ok(!JSON.stringify(results).includes('SENSITIVE_ERROR_CONTENT'));
});

test('invalid, missing, and duplicate selections fail before a client can be created', async () => {
  const deps: RunnerDependencies = { createClient: () => { assert.fail('invalid plan created a client'); } };
  for (const overrides of [
    { questionIds: [] }, { questionIds: ['a', 'a'] }, { questionIds: ['not-in-shard'] },
    { repetitions: 0 }, { strategies: ['rag'] as const },
  ]) {
    await assert.rejects(collect(options(overrides as Partial<ExperimentOptions>), deps));
  }
  await assert.rejects(collect(options(), { ...deps, loadDataset: async () => [samples[0], samples[0], samples[1]] }));
  const invalid = structuredClone(samples);
  invalid[1].context.sentences.pop();
  await assert.rejects(collect(options(), { ...deps, loadDataset: async () => invalid }));
});

test('stopping result consumption prevents later calls; input options are snapshotted', async () => {
  const mock = fakeClient();
  const opts = options();
  const iterator = runExperiment(opts, { loadDataset: async () => structuredClone(samples), createClient: () => mock.client,
    resultsWriter: { append: async () => {} } });
  assert.equal(mock.requests.length, 0);
  await iterator.next();
  opts.questionIds.reverse();
  opts.configuration.model = ROUND_MODELS[2];
  await iterator.next();
  await iterator.return(undefined);
  assert.equal(mock.requests.length, 2);
  assert.ok(mock.requests.every(r => r.model === ROUND_MODELS[1]));
});

test('CLI parsing requires one model/round and supports explicit dry/live mode selection', () => {
  assert.equal(parseRunnerArguments(['--help']), 'help');
  const parsed = parseRunnerArguments(['--round', '2', '--question-ids', 'b,a', '--repetitions', '2']);
  assert.notEqual(parsed, 'help');
  if (parsed === 'help') return;
  assert.equal(parsed.configuration.model, ROUND_MODELS[2]);
  assert.deepEqual(parsed.questionIds, ['b', 'a']);
  assert.equal(parsed.dryRun, true);
  const live = parseRunnerArguments(['--model', ROUND_MODELS[1], '--question-ids', 'a', '--live']);
  assert.notEqual(live, 'help');
  if (live !== 'help') assert.equal(live.dryRun, false);
  assert.throws(() => parseRunnerArguments(['--round', '1', '--model', ROUND_MODELS[2], '--question-ids', 'a']));
  assert.throws(() => parseRunnerArguments(['--round', '3', '--question-ids', 'a']));
  assert.throws(() => parseRunnerArguments(['--round', '1', '--question-ids', 'a', '--live', '--dry-run']));
  assert.throws(() => parseRunnerArguments(['--round', '1', '--question-ids', 'a', '--dataset', 'other.parquet']));
  const expanded = parseRunnerArguments(['--round', '1', '--question-ids', 'a', '--output-file', 'results/caching-tests.csv', '--additional-context-passages', '20']);
  assert.notEqual(expanded, 'help');
  if (expanded !== 'help') {
    assert.equal(expanded.outputFile, 'results/caching-tests.csv');
    assert.equal(expanded.additionalContextPassages, 20);
    assert.equal(expanded.dryRun, true);
  }
});

test('runner gives all strategies the identical expanded collection and a distinct fingerprint', async () => {
  const normal = await collect(options({ dryRun: true, questionIds: ['a'], repetitions: 1 }));
  const mock = fakeClient();
  const expanded = await collect(options({ questionIds: ['a'], additionalContextPassages: 2 }), { createClient: () => mock.client });
  assert.equal(mock.requests.length, 4);
  assert.equal(new Set(expanded.map(row => row.sourceFingerprint)).size, 1);
  assert.notEqual(expanded[0].sourceFingerprint, normal[0].sourceFingerprint);
  const requests = structuredClone(mock.requests);
  for (const request of requests) {
    assert.ok(Array.isArray(request.userPrompt));
    delete request.userPrompt[0].cache_control;
    const documents = JSON.parse(request.userPrompt[0].text.replace('Source passages (JSON):\n', '').trim());
    assert.deepEqual(documents.map((doc: { title: string }) => doc.title), ['Source a', 'Distractor a', 'Source b', 'Distractor b']);
    assert.ok(!JSON.stringify(request).includes('GOLD_'));
  }
  assert.ok(requests.every(request => JSON.stringify(request) === JSON.stringify(requests[0])));
});

test('real terminal dry-run uses the agreed local shard and prints structured rows without credentials', {
  skip: !existsSync(DATASET_FILE),
}, () => {
  const output = execFileSync(process.execPath, ['experimentRunner.ts', '--round', '1', '--question-ids',
    '5a7a06935542990198eaf050', '--dry-run'], { encoding: 'utf8' });
  const results = output.trim().split('\n').map(line => JSON.parse(line) as ExperimentResult);
  assert.equal(results.length, 2);
  assert.ok(results.every(r => r.status === 'dry_run' && r.questionId === '5a7a06935542990198eaf050'));
  assert.ok(results.every(r => r.datasetFile === DATASET_FILE && r.apiLatencySeconds === null));
  assert.ok(results.every(r => r.expectedAnswer === "Arthur's Magazine"));
});

test('pair order alternates deterministically across three questions regardless of supplied pair order', () => {
  for (const pair of [['full_context', 'caching'], ['caching', 'full_context']] as const) {
    assert.deepEqual([0, 1, 2].map(i => orderStrategies(pair, i)), [
      ['full_context', 'caching'], ['caching', 'full_context'], ['full_context', 'caching'],
    ]);
  }
  assert.deepEqual(orderStrategies(['rag', 'caching', 'summarization', 'full_context', 'hybrid'], 0),
    ['rag', 'full_context', 'summarization', 'caching', 'hybrid']);
  assert.deepEqual(orderStrategies(['rag', 'caching'], 1), ['rag', 'caching']);
});

test('records actual request order and strategy/question first-repeat phases independently', async () => {
  const mock = fakeClient();
  const rows = await collect(options(), { createClient: () => mock.client });
  assert.deepEqual(rows.map(r => r.requestSequenceNumber), [1, 2, 3, 4, 5, 6, 7, 8]);
  assert.deepEqual(rows.map(r => r.attemptSequenceNumber), [1, 2, 3, 4, 5, 6, 7, 8]);
  assert.deepEqual(rows.map(r => r.requestPhase), ['first', 'repeated', 'first', 'repeated', 'first', 'repeated', 'first', 'repeated']);
  assert.deepEqual(rows.map(r => r.questionRequestPhase), ['first', 'repeated', 'repeated', 'repeated', 'first', 'repeated', 'repeated', 'repeated']);
  assert.deepEqual(rows.map(r => r.strategyPosition), [1, 1, 2, 2, 1, 1, 2, 2]);
  assert.deepEqual(rows.map(r => r.questionIndex), [1, 1, 1, 1, 2, 2, 2, 2]);
  assert.deepEqual(rows[4].strategyOrder, ['caching', 'full_context']);
  assert.ok(rows.every(r => Number.isFinite(Date.parse(r.requestStartedAt!))));
  assert.ok(rows.every(r => r.strategyResult?.status === 'completed' && r.sharedPromptFingerprint === r.strategyResult.promptFingerprint));
  assert.equal(rows[0].cachePolicy, 'automatic_allowed');
  assert.equal(rows[2].cachePolicy, 'explicit_requested');
});

test('dry and unsupported attempts have no fabricated actual request metadata or cache counts', async () => {
  const rows = await collect(options({ dryRun: true, configuration: { model: ROUND_MODELS[2] } }));
  assert.ok(rows.some(r => r.status === 'unsupported'));
  assert.ok(rows.every(r => r.requestSequenceNumber === null && r.requestPhase === null && r.requestStartedAt === null &&
    r.questionRequestPhase === null && r.cacheReadTokens === null && r.cacheWriteTokens === null && r.cacheReadFraction === null &&
    r.completionCalls.length === 0 && r.cumulativeReportedCostUsd === null));
});

test('unsupported cells do not consume request sequence numbers or warmup labels', async () => {
  const mock = fakeClient();
  const rows = await collect(options({ configuration: { model: ROUND_MODELS[2] } }), { createClient: () => mock.client });
  const completed = rows.filter(row => row.status === 'completed');
  const unsupported = rows.filter(row => row.status === 'unsupported');
  assert.deepEqual(completed.map(row => row.requestSequenceNumber), [1, 2, 3, 4]);
  assert.deepEqual(completed.map(row => row.questionRequestPhase), ['first', 'repeated', 'first', 'repeated']);
  assert.ok(unsupported.every(row => row.requestSequenceNumber === null && row.requestPhase === null));
});

test('cache reads, writes, fractions, and cache creation costs are distinct and include first requests', async () => {
  const mock = fakeClient();
  let index = 0;
  const rows = await collect(options({ questionIds: ['a'], strategies: ['caching'], repetitions: 2 }), {
    createClient: () => ({ complete: async request => ({ ...await mock.client.complete(request),
      cachedTokens: index === 0 ? 0 : 80, cacheWriteTokens: index === 0 ? 100 : 0,
      cacheHit: index !== 0, costUsd: index++ === 0 ? 0.01 : 0.001, costSource: 'reported',
    }) }),
  });
  assert.deepEqual(rows.map(r => [r.cacheReadTokens, r.cacheWriteTokens, r.cacheReadFraction]), [[0, 100, 0], [80, 0, 0.8]]);
  assert.equal(rows[0].cacheHit, false);
  assert.equal(rows[1].cacheHit, true);
  assert.equal(rows[0].attemptReportedCostUsd, 0.01);
  assert.ok(Math.abs(rows[1].cumulativeReportedCostUsd! - 0.011) < 1e-12);
  const costs = summarizeExperimentCosts(rows);
  assert.equal(costs.completionCalls, 2);
  assert.equal(costs.missingCostCalls, 0);
  assert.ok(Math.abs(costs.totalReportedCostUsd! - 0.011) < 1e-12);
});

test('unknown costs produce an incomplete total and an explicitly known subtotal', async () => {
  const mock = fakeClient();
  let index = 0;
  const rows = await collect(options({ questionIds: ['a'], strategies: ['full_context'] }), {
    createClient: () => ({ complete: async request => ({ ...await mock.client.complete(request),
      costUsd: index++ === 0 ? 0.01 : null,
    }) }),
  });
  assert.equal(rows[1].cumulativeReportedCostUsd, null);
  assert.equal(rows[1].cumulativeKnownCostUsd, 0.01);
  assert.equal(rows[1].cumulativeMissingCostCalls, 1);
  assert.equal(summarizeExperimentCosts(rows).totalReportedCostUsd, null);
});

test('future preparation calls are sequenced and included in the attempt and experiment costs', async () => {
  const mock = fakeClient();
  const rows = await collect(options({ questionIds: ['a'], strategies: ['summarization'], repetitions: 1 }), {
    createClient: () => ({ complete: async request => ({ ...await mock.client.complete(request), costUsd: 0.002 }) }),
    additionalStrategies: { summarization: { cacheMode: 'none_requested', run: async (input, client) => {
      const prepared = prepareFullContext(input);
      await client.complete(prepared.request); // Fake preparation call; no summarization algorithm implemented.
      return executePrepared(prepared, 'summarization', 'none_requested', client, []);
    } } },
  });
  assert.equal(rows[0].completionCalls.length, 2);
  assert.deepEqual(rows[0].completionCalls.map(call => call.requestSequenceNumber), [1, 2]);
  assert.equal(rows[0].reportedCostUsd, 0.002);
  assert.equal(rows[0].attemptReportedCostUsd, 0.004);
  assert.equal(rows[0].cumulativeReportedCostUsd, 0.004);
});
