import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { test } from 'node:test';
import { AIClient, AIClientError, type AIRequest, type AIResponse } from './aiClient.ts';
import { fullContext } from './fullContext.ts';
import { caching, repeatCaching } from './caching.ts';
import { ParquetFileReader } from './ParquetFileReader.ts';
import type { TrainData } from './schema.ts';
import {
  parseAnswer, prepareFullContext, type CompletionClient, type StrategyInput,
  type SupportedModel,
} from './strategy.ts';

const sample: TrainData = {
  id: 'offline-question', question: 'Where is Example Group headquartered?',
  answer: 'GOLD_ANSWER_DO_NOT_SEND', type: 'bridge', level: 'medium',
  supporting_facts: { title: ['GOLD_SUPPORT_DO_NOT_SEND'], sent_id: [999] },
  context: { title: ['Family', 'Example Group', 'Distractor [with brackets]'],
    sentences: [['Family founded Example Group.', '  Keep whitespace.'],
      ['Example Group is headquartered in Delhi.'], ['Unrelated sentence.', 'More unrelated text.']] },
};
function input(model: SupportedModel = 'google/gemini-2.5-flash-lite'): StrategyInput {
  return { question: structuredClone(sample), configuration: { model, temperature: 0.2, maxOutputTokens: 256 } };
}
function response(overrides: Partial<AIResponse> = {}): AIResponse {
  return {
    answer: 'Final Answer: Delhi\nExplanation: The sources connect the family and its company.\nCitations: ["Family", "Example Group"]',
    requestedModelId: 'google/gemini-2.5-flash-lite', modelId: 'google/gemini-2.5-flash-lite',
    provider: 'Google AI Studio', requestId: 'offline-generation', finishReason: 'stop',
    responseTimeSeconds: 0.25, promptTokens: 100, completionTokens: 10, totalTokens: 110,
    cachedTokens: 0, cacheWriteTokens: null, cacheHit: false, costUsd: 0.001,
    costSource: 'reported', missingMetrics: ['cacheWriteTokens'], ...overrides,
  };
}
function recorder(results: AIResponse[] = [response()]) {
  const requests: AIRequest[] = [];
  const client: CompletionClient = { async complete(request) {
    requests.push(structuredClone(request));
    const result = results[requests.length - 1];
    assert.ok(result, 'unexpected extra request');
    return result;
  } };
  return { client, requests };
}

test('Full Context includes every sentence in order and never sends gold fields', async () => {
  const run = input();
  const before = structuredClone(run);
  const { client, requests } = recorder();
  const result = await fullContext(run, client);
  assert.equal(requests.length, 1);
  const request = requests[0];
  assert.ok(Array.isArray(request.userPrompt));
  const documents = JSON.parse(request.userPrompt[0].text.replace('Source passages (JSON):\n', '').trim());
  assert.deepEqual(documents, sample.context.title.map((title, i) => ({ title, sentences: sample.context.sentences[i] })));
  assert.equal(request.userPrompt[1].text, `Question:\n${sample.question}`);
  assert.ok(!JSON.stringify(request).includes('GOLD_'));
  assert.deepEqual(run, before);
  assert.equal(result.status, 'completed');
  if (result.status !== 'completed') return;
  assert.equal(result.answer, 'Delhi');
  assert.deepEqual(result.citations, ['Family', 'Example Group']);
  assert.deepEqual(result.unknownCitationTitles, []);
  assert.equal(result.response.costUsd, 0.001);
  assert.ok(result.contextPreparationTimeSeconds >= 0);
  assert.ok(result.totalResponseTimeSeconds >= result.contextPreparationTimeSeconds);
  assert.ok(result.warnings.some(w => w.includes('uncached baseline')));
});

test('Gemini explicit caching changes only the context cache marker', async () => {
  const { client, requests } = recorder([response(), response()]);
  const full = await fullContext(input(), client);
  const cached = await caching(input(), client);
  assert.equal(full.status, 'completed');
  assert.equal(cached.status, 'completed');
  if (full.status !== 'completed' || cached.status !== 'completed') return;
  assert.equal(full.promptFingerprint, cached.promptFingerprint);
  assert.deepEqual(full.configuration, cached.configuration);
  const marked = structuredClone(requests[1]);
  assert.ok(Array.isArray(marked.userPrompt));
  assert.deepEqual(marked.userPrompt[0].cache_control, { type: 'ephemeral' });
  assert.equal(marked.userPrompt[1].cache_control, undefined);
  delete marked.userPrompt[0].cache_control;
  assert.deepEqual(marked, requests[0]);
  assert.deepEqual(marked.providerOptions?.transforms, []);
  assert.equal(cached.response.cacheHit, false);
  assert.ok(cached.warnings.some(w => w.includes('no cache hit')));
});

test('GPT-4.1-mini explicit caching is unsupported and never calls the client', async () => {
  const { client, requests } = recorder([]);
  const result = await caching(input('openai/gpt-4.1-mini'), client);
  assert.equal(result.status, 'unsupported');
  assert.equal(result.response, null);
  assert.equal(requests.length, 0);
});

test('both model IDs support explicit opt-in automatic reuse with identical baseline requests', async () => {
  for (const model of ['google/gemini-2.5-flash-lite', 'openai/gpt-4.1-mini'] as const) {
    const { client, requests } = recorder([response({ modelId: model }), response({ modelId: model })]);
    await fullContext(input(model), client);
    const result = await caching({ ...input(model), cachingMode: 'implicit' }, client);
    assert.equal(result.status, 'completed');
    assert.deepEqual(requests[0], requests[1]);
    if (result.status === 'completed') assert.ok(result.warnings.some(w => w.includes('Observational')));
  }
});

test('unknown explicit-cache provider is reported without silently switching providers', async () => {
  const run = input();
  run.configuration.provider = 'unverified-provider';
  const { client, requests } = recorder([]);
  assert.equal((await caching(run, client)).status, 'unsupported');
  assert.equal(requests.length, 0);
});

test('repetitions expose each cost and zero/unknown/hit measurements without hidden warmups', async () => {
  const { client, requests } = recorder([
    response(), response({ cachedTokens: null, cacheHit: null }), response({ cachedTokens: 80, cacheHit: true }),
  ]);
  const run = input();
  const iterator = repeatCaching(run, client, 3);
  assert.equal(requests.length, 0);
  const results = [];
  for await (const result of iterator) {
    results.push(result);
    run.question.question = 'Changing the caller input must not change later repeats.';
  }
  assert.equal(requests.length, 3);
  assert.deepEqual(requests[0], requests[1]);
  assert.deepEqual(requests[1], requests[2]);
  assert.deepEqual(results.map(r => r.repetition), [1, 2, 3]);
  assert.deepEqual(results.map(r => r.response?.cacheHit), [false, null, true]);
  assert.deepEqual(results.map(r => r.response?.costUsd), [0.001, 0.001, 0.001]);
});

test('stopping repetition consumption prevents additional API calls', async () => {
  const { client, requests } = recorder();
  for await (const result of repeatCaching(input(), client, 5)) {
    assert.equal(result.repetition, 1);
    break;
  }
  assert.equal(requests.length, 1);
});

test('repetition errors stop immediately, preserving already-yielded results', async () => {
  let calls = 0;
  const error = new AIClientError('Rate limited.', 'rate_limit', 429);
  const client: CompletionClient = { async complete() {
    calls++;
    if (calls === 2) throw error;
    return response();
  } };
  const iterator = repeatCaching(input(), client, 5);
  assert.equal((await iterator.next()).value?.status, 'completed');
  await assert.rejects(iterator.next(), e => e === error);
  assert.equal((await iterator.next()).done, true);
  assert.equal(calls, 2);
});

test('unsupported repetitions stop once; invalid counts and contexts make no calls', async () => {
  const { client, requests } = recorder([]);
  const results = [];
  for await (const r of repeatCaching(input('openai/gpt-4.1-mini'), client, 4)) results.push(r);
  assert.equal(results.length, 1);
  await assert.rejects(repeatCaching(input(), client, 0).next(), RangeError);
  const run = input();
  run.question.context.sentences.pop();
  await assert.rejects(fullContext(run, client), TypeError);
  assert.equal(requests.length, 0);
});

test('malformed output is preserved; hallucinated titles and truncation are flagged', async () => {
  assert.equal(parseAnswer('plain answer').answer, null);
  assert.equal(parseAnswer('plain answer').answerExtractionStatus, 'missing');
  assert.equal(parseAnswer('```text\nFinal Answer: Delhi\nExplanation: Evidence.\nCitations: []\n```').outputFormatValid, true);
  const { client } = recorder([response({ answer: 'Final Answer: Delhi\nExplanation: Evidence.\nCitations: ["Invented"]', finishReason: 'length' })]);
  const result = await fullContext(input(), client);
  assert.equal(result.status, 'completed');
  if (result.status !== 'completed') return;
  assert.deepEqual(result.unknownCitationTitles, ['Invented']);
  assert.ok(result.warnings.some(w => w.includes('truncated')));
});

test('real AIClient serialization remains offline and returns actual-shaped cache measurements', async () => {
  const original = process.env.OPENROUTER_API_KEY;
  process.env.OPENROUTER_API_KEY = 'fake-offline-key';
  try {
    let calls = 0;
    const client = new AIClient({ envFile: false, fetchImpl: async (_url, init) => {
      calls++;
      assert.equal(new Headers(init?.headers).get('X-OpenRouter-Cache'), 'false');
      const body = JSON.parse(String(init?.body));
      assert.equal(body.messages[1].content[0].cache_control.type, 'ephemeral');
      assert.equal(body.temperature, 0.2);
      assert.equal(body.max_completion_tokens, 256);
      assert.deepEqual(body.provider.only, ['google-ai-studio']);
      assert.equal(body.provider.allow_fallbacks, false);
      assert.equal(body.provider.require_parameters, true);
      return Response.json({ model: body.model, id: 'offline-id', choices: [{ message: {
        content: 'Final Answer: Delhi\nExplanation: Evidence.\nCitations: ["Example Group"]',
      }, finish_reason: 'stop' }], usage: { prompt_tokens: 2400, completion_tokens: 20, total_tokens: 2420,
        prompt_tokens_details: { cached_tokens: 2048, cache_write_tokens: 0 }, cost: 0.00004 } });
    } });
    const result = await caching(input(), client);
    assert.equal(result.response?.cachedTokens, 2048);
    assert.equal(result.response?.cacheHit, true);
    assert.equal(result.response?.costUsd, 0.00004);
    assert.equal(calls, 1);
  } finally {
    if (original === undefined) delete process.env.OPENROUTER_API_KEY;
    else process.env.OPENROUTER_API_KEY = original;
  }
});

test('agreed Parquet shard integrates without modifying the reader or losing passages', {
  skip: !existsSync('./data/train-00000-of-00002.parquet'),
}, async () => {
  const rows = await new ParquetFileReader({ filePath: './data/train-00000-of-00002.parquet' }).read(10);
  assert.equal(rows.length, 10);
  for (const row of rows) {
    const prepared = prepareFullContext({ question: row, configuration: input().configuration });
    assert.ok(Array.isArray(prepared.request.userPrompt));
    const blocks = prepared.request.userPrompt;
    const documents = JSON.parse(blocks[0].text.replace('Source passages (JSON):\n', '').trim());
    assert.deepEqual(documents, row.context.title.map((title, i) => ({ title, sentences: row.context.sentences[i] })));
    assert.equal(blocks[1].text, `Question:\n${row.question}`);
    assert.ok(!Object.hasOwn(prepared.request, 'answer'));
    assert.ok(!Object.hasOwn(prepared.request, 'supporting_facts'));
  }
});
