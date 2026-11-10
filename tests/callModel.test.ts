import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';

import { callModel } from '../src/callModel.ts';
import { logger } from '../src/logger.ts';
import { buildPrompt, type PromptMessage } from '../src/buildPrompt.ts';
import { SearchContextTool } from '../src/schema.ts';

const oldKey = process.env.OPENROUTER_API_KEY;
const oldModel = process.env.OPENROUTER_MODEL;
const oldProvider = process.env.OPENROUTER_PROVIDER;
const oldLogLevel = logger.level;

before(() => {
  process.env.OPENROUTER_API_KEY = 'offline-test-key';
  process.env.OPENROUTER_MODEL = 'offline/model-from-env';
  delete process.env.OPENROUTER_PROVIDER;
  logger.level = 'silent';
});

after(() => {
  if (oldKey === undefined) {
    delete process.env.OPENROUTER_API_KEY;
  } else {
    process.env.OPENROUTER_API_KEY = oldKey;
  }

  if (oldModel === undefined) {
    delete process.env.OPENROUTER_MODEL;
  } else {
    process.env.OPENROUTER_MODEL = oldModel;
  }

  logger.level = oldLogLevel;
  if (oldProvider === undefined) delete process.env.OPENROUTER_PROVIDER;
  else process.env.OPENROUTER_PROVIDER = oldProvider;
});

const messages: PromptMessage[] = [{ role: 'user', content: 'An offline test question.' }];

const answer = {
  answer: 'yes',
  supporting_facts: [{ title: 'Source A', sentence_id: 0 }],
};

const usage = {
  prompt_tokens: 100,
  completion_tokens: 20,
  total_tokens: 120,
  prompt_tokens_details: { cached_tokens: 0 },
  cost: 0.001,
};

const completion = (content = JSON.stringify(answer), finish_reason = 'stop') => ({
  model: 'inception/mercury-2.5',
  provider: 'Offline fixture',
  usage,
  choices: [{ finish_reason, message: { content } }],
});

const respond = (body: unknown, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

test('sends only model, messages, and the Zod response format; preserves output and usage', async t => {
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async (url: string, init: RequestInit) => {
    requests++;
    assert.equal(url, 'https://openrouter.ai/api/v1/chat/completions');

    const request = JSON.parse(init.body as string);

    assert.deepEqual(Object.keys(request).sort(), ['messages', 'model', 'response_format']);
    assert.deepEqual(request.messages, messages);
    assert.equal(request.model, 'offline/model-from-env');
    assert.equal(request.response_format.json_schema.strict, true);

    const schema = request.response_format.json_schema.schema;

    assert.deepEqual(schema.required, ['answer', 'supporting_facts']);
    assert.equal(schema.additionalProperties, false);
    assert.equal(schema.properties.supporting_facts.items.properties.sentence_id.type, 'integer');
    assert.ok(init.signal instanceof AbortSignal);

    return respond(completion());
  });

  const result = await callModel(messages);

  assert.equal(requests, 1);
  assert.deepEqual(result.output, answer);
  assert.deepEqual(result.usage, usage);
  assert.equal(result.error, null);
  assert.ok(result.latencyMs >= 0);
  assert.ok(!JSON.stringify(result).includes('offline-test-key'));
});

test('keeps usage and raw output when a completion is truncated or does not match the schema', async t => {
  const invalidCompletions = [
    completion(JSON.stringify(answer), 'length'),
    completion('not JSON'),
    completion('{"answer":"yes","supporting_facts":[["Source A",0]]}'),
    completion('{"answer":"yes","supporting_facts":[{"title":"Source A","sentence_id":-1}]}'),
    completion('{"answer":"yes","supporting_facts":[{"title":"Source A","sentence_id":"0"}]}'),
    completion('{"answer":"yes","supporting_facts":[],"extra":"unexpected field"}'),
  ];

  for (const body of invalidCompletions) {
    const mock = t.mock.method(globalThis, 'fetch', async () => respond(body));
    const result = await callModel(messages);

    assert.equal(result.output, null);
    assert.ok(result.error);
    assert.deepEqual(result.usage, usage);
    assert.deepEqual(result.rawResponse, body);

    mock.mock.restore();
  }
});

test('records HTTP and network failures without retrying', async t => {
  let requests = 0;

  const http = t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    return respond({ error: { message: 'Fixture schema unsupported' } }, 400);
  });

  const rejected = await callModel(messages);

  assert.match(rejected.error!, /HTTP 400/);
  assert.equal(rejected.usage, null);
  http.mock.restore();

  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    throw new Error('Fixture network failure');
  });

  const failed = await callModel(messages);

  assert.match(failed.error!, /Connection error/);
  assert.equal(failed.rawResponse, null);
  assert.equal(requests, 2);
});

test('summary mode validates numeric source IDs and retains the original draft receipt', async t => {
  const draft = { notes: [{ source_id: 1, sentence_id: 4, text: 'Evidence note.' }] };
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    const request = JSON.parse(init.body as string);
    assert.deepEqual(Object.keys(request).sort(), ['messages', 'model', 'response_format']);
    assert.equal(request.response_format.json_schema.name, 'context_summary');
    const noteSchema = request.response_format.json_schema.schema.properties.notes.items;
    assert.deepEqual(noteSchema.required, ['source_id', 'sentence_id', 'text']);
    assert.equal(noteSchema.additionalProperties, false);
    assert.equal(noteSchema.properties.source_id.type, 'integer');
    assert.equal(noteSchema.properties.title, undefined);
    return respond(completion(JSON.stringify(draft)));
  });

  const result = await callModel(messages, { response: 'summary' });
  assert.equal(result.error, null);
  assert.equal(result.output, null);
  assert.deepEqual(result.summary, draft);
  assert.deepEqual(result.usage, usage);
});

test('a missing key fails before sending a request', async t => {
  delete process.env.OPENROUTER_API_KEY;

  t.mock.method(globalThis, 'fetch', async () => { assert.fail('No request should be sent.'); });

  try {
    await assert.rejects(callModel(messages), /Set OPENROUTER_API_KEY/);
  } finally {
    process.env.OPENROUTER_API_KEY = 'offline-test-key';
  }
});

test('a normal question-only prompt makes one answer request with no tools', async t => {
  let requests = 0;
  const prompt = buildPrompt({ question: 'A question from another group strategy?' });

  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    const request = JSON.parse(init.body as string);

    assert.ok(!Object.hasOwn(request, 'tools'));
    assert.ok(!Object.hasOwn(request, 'tool_choice'));
    assert.ok(!request.messages[0].content.includes('search_context'));

    return respond(completion());
  });

  const result = await callModel(prompt);

  assert.equal(requests, 1);
  assert.deepEqual(result.output, answer);
  assert.equal(result.error, null);
});

test('tools are attached only through the explicit option and use the shared definition', async t => {
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    const request = JSON.parse(init.body as string);

    assert.equal(request.tool_choice, 'required');
    assert.deepEqual(request.tools, JSON.parse(JSON.stringify([SearchContextTool])));

    return respond({
      ...completion(),
      choices: [{
        finish_reason: 'tool_calls',
        message: {
          role: 'assistant',
          content: null,
          tool_calls: [{
            id: 'search-0',
            type: 'function',
            function: { name: SearchContextTool.function.name, arguments: '{"query":"Atlas"}' },
          }],
        },
      }],
    });
  });

  const result = await callModel(messages, { tools: [SearchContextTool] });

  assert.equal(result.error, null);
  assert.equal(result.output, null);
  assert.equal(result.message?.tool_calls?.length, 1);
});

test('an optional tool turn accepts planning prose or a tool call without treating either as a final answer', async t => {
  const toolResponse = {
    ...completion(),
    choices: [{ finish_reason: 'tool_calls', message: {
      role: 'assistant', content: null, tool_calls: [{
        id: 'follow-up', type: 'function',
        function: { name: 'search_context', arguments: '{"query":"Atlas"}' },
      }],
    } }],
  };

  for (const response of [completion('No. The neighborhoods are different.'), toolResponse]) {
    const mock = t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
      const request = JSON.parse(init.body as string);
      assert.equal(request.tool_choice, 'auto');
      assert.equal(request.response_format, undefined);
      assert.deepEqual(request.tools, JSON.parse(JSON.stringify([SearchContextTool])));
      return respond(response);
    });

    const result = await callModel(messages, { tools: [SearchContextTool], toolChoice: 'auto' });
    assert.equal(result.error, null);
    assert.equal(result.output, null);
    assert.deepEqual(result.rawResponse, response);
    mock.mock.restore();
  }
});

test('optional planning turns reject empty responses, refusals, truncation, and malformed tool completions', async t => {
  for (const response of [
    completion(''),
    completion('   '),
    completion(JSON.stringify(answer), 'length'),
    { ...completion(), choices: [{ finish_reason: 'stop', message: { content: null } }] },
    { ...completion(), choices: [{ finish_reason: 'stop', message: { content: 'ready', refusal: 'Refused' } }] },
    { ...completion(), choices: [{ finish_reason: 'tool_calls', message: { tool_calls: [] } }] },
  ]) {
    const mock = t.mock.method(globalThis, 'fetch', async () => respond(response));
    const result = await callModel(messages, { tools: [SearchContextTool], toolChoice: 'auto' });
    assert.equal(result.output, null);
    assert.ok(result.error);
    assert.deepEqual(result.rawResponse, response);
    assert.deepEqual(result.usage, usage);
    mock.mock.restore();
  }
});
