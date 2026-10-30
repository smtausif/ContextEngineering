import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { AIClient, AIClientError, type AIRequest } from './aiClient.ts';

const fakeKey = 'offline-test-key-not-a-real-credential';
const previousKey = process.env.OPENROUTER_API_KEY;
before(() => { process.env.OPENROUTER_API_KEY = fakeKey; });
after(() => {
  if (previousKey === undefined) delete process.env.OPENROUTER_API_KEY;
  else process.env.OPENROUTER_API_KEY = previousKey;
});
const request: AIRequest = {
  model: 'test/offline-model', systemPrompt: 'Use supplied evidence.', userPrompt: 'A test question.',
  temperature: 0, maxOutputTokens: 100,
};
function completion(extra: Record<string, unknown> = {}) {
  return { id: 'gen-test', model: 'test/returned-model', provider: 'Test Provider',
    choices: [{ message: { content: 'Answer with [document:0].' }, finish_reason: 'stop' }], ...extra };
}
function client(transport: typeof fetch) {
  return new AIClient({ envFile: false, fetchImpl: transport });
}

test('sends model/settings and cache extensions; preserves measured zero values', async () => {
  let calls = 0;
  const api = client(async (url, init) => {
    calls++;
    assert.equal(url, 'https://openrouter.ai/api/v1/chat/completions');
    assert.equal(new Headers(init?.headers).get('Authorization'), `Bearer ${fakeKey}`);
    assert.equal(new Headers(init?.headers).get('X-OpenRouter-Cache'), 'false');
    const body = JSON.parse(String(init?.body));
    assert.equal(body.model, request.model);
    assert.equal(body.temperature, 0);
    assert.equal(body.max_completion_tokens, 100);
    assert.equal(body.stream, false);
    assert.equal(body.messages[0].content[0].cache_control.type, 'ephemeral');
    assert.deepEqual(body.provider, { order: ['Test Provider'], allow_fallbacks: false });
    assert.equal(init?.redirect, 'error');
    return Response.json(completion({ usage: { prompt_tokens: 10, completion_tokens: 0, total_tokens: 10,
      cost: 0, prompt_tokens_details: { cached_tokens: 0, cache_write_tokens: 10 } } }));
  });
  assert.equal(calls, 0);
  const result = await api.complete({ ...request,
    systemPrompt: [{ type: 'text', text: 'Evidence', cache_control: { type: 'ephemeral' } }],
    providerOptions: { provider: { order: ['Test Provider'], allow_fallbacks: false } },
  });
  assert.equal(calls, 1);
  assert.equal(result.answer, 'Answer with [document:0].');
  assert.equal(result.requestId, 'gen-test');
  assert.equal(result.modelId, 'test/returned-model');
  assert.equal(result.requestedModelId, request.model);
  assert.equal(result.completionTokens, 0);
  assert.equal(result.cachedTokens, 0);
  assert.equal(result.cacheHit, false);
  assert.equal(result.costUsd, 0);
  assert.equal(result.costSource, 'reported');
  assert.deepEqual(result.missingMetrics, []);
  assert.ok(result.responseTimeSeconds >= 0);
  assert.ok(!JSON.stringify(api).includes(fakeKey));
});

test('missing and invalid metrics remain null, with no cost estimates or inferred totals', async () => {
  const result = await client(async () => Response.json(completion({ usage: {
    prompt_tokens: -1, completion_tokens: '4', cost: null,
  } }))).complete(request);
  assert.equal(result.promptTokens, null);
  assert.equal(result.completionTokens, null);
  assert.equal(result.totalTokens, null);
  assert.equal(result.cachedTokens, null);
  assert.equal(result.cacheHit, null);
  assert.equal(result.costUsd, null);
  assert.equal(result.costSource, 'missing');
  assert.equal(result.missingMetrics.length, 6);
});

test('cache hits derive from reported cache reads, not cache writes', async () => {
  const result = await client(async () => Response.json(completion({ usage: {
    cost: 0.001, prompt_tokens_details: { cached_tokens: 12 },
  } }))).complete(request);
  assert.equal(result.cacheHit, true);
  assert.equal(result.cachedTokens, 12);
  assert.equal(result.costUsd, 0.001);
});

test('rate limits expose retry delay without retrying or leaking the API error body', async () => {
  let calls = 0;
  await assert.rejects(client(async () => {
    calls++;
    return Response.json({ error: { message: fakeKey } }, { status: 429, headers: { 'Retry-After': '7' } });
  }).complete(request), error => {
    assert.ok(error instanceof AIClientError);
    assert.equal(error.kind, 'rate_limit');
    assert.equal(error.status, 429);
    assert.equal(error.retryAfterSeconds, 7);
    assert.ok(!String(error).includes(fakeKey));
    return true;
  });
  assert.equal(calls, 1);
});

test('handles HTTP errors, embedded errors, invalid JSON, and missing text', async () => {
  for (const [response, kind] of [
    [Response.json({}, { status: 401 }), 'api'],
    [Response.json({}, { status: 504 }), 'timeout'],
    [Response.json({ error: { code: 429, message: fakeKey } }), 'rate_limit'],
    [new Response('not JSON'), 'invalid_response'],
    [Response.json({ choices: [] }), 'invalid_response'],
  ] as const) {
    await assert.rejects(client(async () => response).complete(request), error =>
      error instanceof AIClientError && error.kind === kind && !String(error).includes(fakeKey));
  }
});

test('network failures do not expose raw error details', async () => {
  await assert.rejects(client(async () => { throw new Error(fakeKey); }).complete(request), error =>
    error instanceof AIClientError && error.kind === 'network' && !String(error).includes(fakeKey));
});

test('timeout aborts a pending request', async () => {
  const api = client(async (_url, init) => new Promise((_resolve, reject) => {
    init?.signal?.addEventListener('abort', () => reject(new Error('aborted')), { once: true });
  }));
  await assert.rejects(api.complete({ ...request, timeoutMs: 10 }), error =>
    error instanceof AIClientError && error.kind === 'timeout' && error.responseTimeSeconds !== null);
});

test('timeout also covers reading the response body', async () => {
  const api = client(async (_url, init) => new Response(new ReadableStream({
    start(controller) {
      init?.signal?.addEventListener('abort', () => controller.error(new Error('aborted')), { once: true });
    },
  })));
  await assert.rejects(api.complete({ ...request, timeoutMs: 10 }), error =>
    error instanceof AIClientError && error.kind === 'timeout');
});

test('invalid input is rejected before any transport call', async () => {
  const api = client(async () => { assert.fail('must not call transport'); });
  for (const invalid of [
    { temperature: -1 }, { maxOutputTokens: 0 }, { timeoutMs: 0 },
    { providerOptions: { stream: true } }, { userPrompt: '' },
  ]) {
    await assert.rejects(api.complete({ ...request, ...invalid }), error =>
      error instanceof AIClientError && error.kind === 'validation');
  }
});

test('missing key produces a clear configuration error', () => {
  delete process.env.OPENROUTER_API_KEY;
  try {
    assert.throws(() => new AIClient({ envFile: false }), error =>
      error instanceof AIClientError && error.kind === 'configuration');
  } finally {
    process.env.OPENROUTER_API_KEY = fakeKey;
  }
});
