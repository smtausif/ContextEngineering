import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';

import { callRag, MAX_SEARCH_ROUNDS } from '../src/strategies/rag/callRag.ts';
import { logger } from '../src/logger.ts';
import { buildPrompt } from '../src/buildPrompt.ts';
import type { Context } from '../src/schema.ts';

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

const searchContext: Context = {
  title: ['Atlas record', 'Unrelated page'],
  sentences: [
    ['EVIDENCE_ONLY_AFTER_SEARCH', 'The codeword is copper.'],
    ['Unrelated background material.'],
  ],
};

const searchCompletion = (queries = ['Atlas']) => ({
  model: 'offline/model-from-env',
  usage,
  choices: [{
    finish_reason: 'tool_calls',
    message: {
      role: 'assistant',
      content: null,
      tool_calls: queries.map((query, i) => ({
        id: `search-${i}`,
        type: 'function',
        function: { name: 'search_context', arguments: JSON.stringify({ query }) },
      })),
    },
  }],
});

test('requires a search and keeps planning prose separate from the structured answer', async t => {
  let requests = 0;
  const expected = {
    answer: 'copper',
    supporting_facts: [{ title: 'Atlas record', sentence_id: 1 }],
  };

  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    const request = JSON.parse(init.body as string);

    if (requests === 1) {
      assert.deepEqual(Object.keys(request).sort(), ['messages', 'model', 'tool_choice', 'tools']);
      assert.equal(request.tool_choice, 'required');
      assert.equal(request.tools[0].function.name, 'search_context');
      assert.equal(request.messages.length, 2);
      assert.ok(!JSON.stringify(request).includes('EVIDENCE_ONLY_AFTER_SEARCH'));

      return respond(searchCompletion());
    }

    if (requests === 2) {
      const result = request.messages.find((message: { role: string }) => message.role === 'tool');
      assert.equal(result.tool_call_id, 'search-0');
      assert.ok(result.content.includes('[1] The codeword is copper.'));
      assert.ok(!result.content.includes('Unrelated background material.'));
      assert.equal(request.tool_choice, 'auto');
      assert.equal(request.response_format, undefined);
      return respond(completion('No. The sources describe different neighborhoods.'));
    }

    assert.deepEqual(Object.keys(request).sort(), ['messages', 'model', 'response_format']);
    assert.equal(request.response_format.json_schema.name, 'hotpotqa_answer');
    assert.deepEqual(request.messages, buildPrompt({
      question: 'What is the Atlas codeword?',
      context: { title: ['Atlas record'], sentences: [searchContext.sentences[0]] },
    }));
    assert.ok(!JSON.stringify(request).includes('No. The sources describe different neighborhoods.'));
    return respond(completion(JSON.stringify(expected)));
  });

  const result = await callRag({ question: 'What is the Atlas codeword?', context: searchContext });

  assert.equal(requests, 3);
  assert.equal(result.modelCalls.length, 3);
  assert.equal(result.modelCalls[1].output, null);
  assert.equal(result.modelCalls[1].error, null);
  assert.equal(result.toolCalls[0].query, 'Atlas');
  assert.deepEqual(result.toolCalls[0].selectedTitles, ['Atlas record']);
  assert.deepEqual(result.output, expected);
  assert.equal(result.usage?.prompt_tokens, usage.prompt_tokens * 3);
  assert.equal(result.usage?.completion_tokens, usage.completion_tokens * 3);
  assert.equal((result.usage as { cost: number }).cost, usage.cost * 3);
  assert.equal(result.error, null);
});

test('rejects an answer that bypasses the required search', async t => {
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    return respond(completion());
  });

  const result = await callRag({ question: 'What is the codeword?', context: searchContext });

  assert.equal(requests, 1);
  assert.equal(result.output, null);
  assert.match(result.error!, /required tool was not called/);
  assert.deepEqual(result.usage, usage);
});

test('answers every search in a tool turn and can finish without another search', async t => {
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;

    if (requests === 1) {
      return respond(searchCompletion(['Atlas', 'Unrelated']));
    }

    const request = JSON.parse(init.body as string);
    const toolMessages = request.messages.filter((message: { role: string }) => message.role === 'tool');

    if (requests === 2) {
      assert.deepEqual(toolMessages.map((message: { tool_call_id: string }) => message.tool_call_id), ['search-0', 'search-1']);
    } else {
      assert.equal(toolMessages.length, 0);
      for (const title of searchContext.title) {
        assert.equal(request.messages[1].content.split(`Title: ${title}\n`).length - 1, 1);
      }
    }

    return respond(completion());
  });

  const result = await callRag({ question: 'Compare the records.', context: searchContext });

  assert.equal(requests, 3);
  assert.equal(result.toolCalls.length, 2);
  assert.equal(result.error, null);
});

test('rejects unsupported tools or invalid search arguments before requesting an answer', async t => {
  for (const invalid of [
    { name: 'other_tool', arguments: '{"query":"Atlas"}' },
    { name: 'search_context', arguments: '{"query":3}' },
    { name: 'search_context', arguments: 'not JSON' },
  ]) {
    let requests = 0;
    const body = searchCompletion();
    body.choices[0].message.tool_calls[0].function = invalid;

    const mock = t.mock.method(globalThis, 'fetch', async () => {
      requests++;
      return respond(body);
    });

    const result = await callRag({ question: 'What is the codeword?', context: searchContext });

    assert.equal(requests, 1);
    assert.equal(result.output, null);
    assert.match(result.error!, /Search round 1:/);
    if (invalid.name !== 'search_context') {
      assert.ok(result.error!.includes('Unsupported tool "other_tool"; expected "search_context"'));
    } else {
      assert.ok(result.error!.includes('Invalid arguments for "search_context"'));
    }
    assert.deepEqual(result.usage, usage);
    mock.mock.restore();
  }
});

test('keeps both planning-call usages and marks totals unknown when the final request fails', async t => {
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    if (requests === 1) return respond(searchCompletion());
    if (requests === 2) return respond(completion('ready'));
    return respond({ error: { message: 'Fixture final request failed' } }, 500);
  });

  const result = await callRag({ question: 'What is the codeword?', context: searchContext });

  assert.equal(requests, 3);
  assert.equal(result.output, null);
  assert.match(result.error!, /HTTP 500/);
  assert.match(result.error!, /^RAG answer:/);
  assert.equal(result.modelCalls.length, 3);
  assert.deepEqual(result.modelCalls[0].usage, usage);
  assert.deepEqual(result.modelCalls[1].usage, usage);
  assert.deepEqual(result.modelCalls[2].rawResponse, { message: 'Fixture final request failed' });
  assert.equal(result.usage?.total_tokens, null);
  assert.equal((result.usage as { cost: number | null }).cost, null);
});

test('uses an entity discovered in the first results for a follow-up search, then answers within the limit', async t => {
  const context: Context = {
    title: ['Harbour Lights (film)', 'Mara Vale'],
    sentences: [['Harbour Lights was directed by Mara Vale.'], ['Mara Vale is based in Toronto.']],
  };
  const expected = {
    answer: 'Toronto',
    supporting_facts: context.title.map(title => ({ title, sentence_id: 0 })),
  };
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    const request = JSON.parse(init.body as string);
    requests++;

    if (requests === 1) {
      assert.equal(request.tool_choice, 'required');
      assert.ok(!JSON.stringify(request).includes('Mara Vale'));
      return respond(searchCompletion(['Harbour Lights director']));
    }

    const results = request.messages.filter((message: { role: string }) => message.role === 'tool');
    if (requests === 2) {
      assert.ok(results[0].content.includes('directed by Mara Vale'));
      assert.equal(request.tool_choice, 'auto');
      assert.ok(!JSON.stringify(request).includes('Toronto'));
      const followUp = searchCompletion(['Mara Vale location']);
      followUp.choices[0].message.tool_calls[0].id = 'follow-up-search';
      return respond(followUp);
    }

    assert.equal(request.tools, undefined);
    assert.equal(request.tool_choice, undefined);
    assert.equal(request.response_format.json_schema.name, 'hotpotqa_answer');
    assert.equal(results.length, 0);
    assert.deepEqual(request.messages, buildPrompt({ question: 'Where is the director of Harbour Lights based?', context }));
    for (const title of context.title) {
      assert.equal(request.messages[1].content.split(`Title: ${title}\n`).length - 1, 1);
    }
    assert.ok(!JSON.stringify(request.messages).includes('tool_calls'));
    assert.ok(!request.messages[0].content.includes('search_context'));
    return respond(completion(JSON.stringify(expected)));
  });

  const result = await callRag({ question: 'Where is the director of Harbour Lights based?', context });

  assert.equal(MAX_SEARCH_ROUNDS, 2);
  assert.equal(requests, 3);
  assert.equal(result.status, 'completed');
  assert.deepEqual(result.output, expected);
  assert.deepEqual(result.toolCalls.map(call => call.query), ['Harbour Lights director', 'Mara Vale location']);
  assert.deepEqual(result.modelCalls.map(call => call.request.messages.length), [2, 4, 3]);
  assert.equal(result.usage?.total_tokens, usage.total_tokens * 3);
  assert.equal(result.usage?.cost, usage.cost * 3);
});

test('does not execute a third search round even if the final response requests another tool', async t => {
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    const request = JSON.parse(init.body as string);
    if (requests === 3) assert.equal(request.tools, undefined);
    assert.ok(requests <= 3, 'Model requests must stay bounded.');
    return respond(searchCompletion());
  });

  const result = await callRag({ question: 'What is the codeword?', context: searchContext });

  assert.equal(requests, 3);
  assert.equal(result.status, 'failed');
  assert.match(result.error!, /did not finish normally/);
  assert.equal(result.output, null);
  assert.equal(result.toolCalls.length, 2);
  assert.equal(result.modelCalls.length, 3);
  assert.equal(result.usage?.cost, usage.cost * 3);
});

test('rejects invalid follow-up search arguments while preserving earlier retrieval and both calls', async t => {
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    const response = searchCompletion();
    if (requests === 2) response.choices[0].message.tool_calls[0].function.arguments = '{"query":3}';
    return respond(response);
  });

  const result = await callRag({ question: 'What is the codeword?', context: searchContext });

  assert.equal(requests, 2);
  assert.equal(result.status, 'failed');
  assert.equal(result.output, null);
  assert.match(result.error!, /Search round 2: Invalid arguments for "search_context"/);
  assert.equal(result.toolCalls.length, 1);
  assert.equal(result.modelCalls.length, 2);
  assert.equal(result.usage?.total_tokens, usage.total_tokens * 2);
});

test('an unexpected follow-up tool is rejected with its name, expected name, and search round', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    const response = searchCompletion();
    if (requests === 2) response.choices[0].message.tool_calls[0].function.name = 'search_query';
    return respond(response);
  });

  const result = await callRag({ question: 'What is the codeword?', context: searchContext });
  assert.equal(requests, 2);
  assert.equal(result.status, 'failed');
  assert.equal(result.error, 'Search round 2: Unsupported tool "search_query"; expected "search_context".');
  assert.equal(result.toolCalls.length, 1);
  assert.equal(result.modelCalls.length, 2);
  assert.equal(result.output, null);
  assert.equal(result.usage?.cost, usage.cost * 2);
});
