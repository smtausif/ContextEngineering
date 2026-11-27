import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';

import { logger } from '../src/logger.ts';
import { hybrid } from '../src/strategies/hybrid/hybrid.ts';

const envNames = ['OPENROUTER_API_KEY', 'OPENROUTER_MODEL', 'OPENROUTER_PROVIDER'] as const;
const originalEnv = envNames.map(name => process.env[name]);
const oldLogLevel = logger.level;

before(() => {
  process.env.OPENROUTER_API_KEY = 'offline-hybrid-key';
  process.env.OPENROUTER_MODEL = 'offline/hybrid-model';
  delete process.env.OPENROUTER_PROVIDER;
  logger.level = 'silent';
});

after(() => {
  envNames.forEach((name, index) => {
    if (originalEnv[index] === undefined) delete process.env[name];
    else process.env[name] = originalEnv[index];
  });
  logger.level = oldLogLevel;
});

const question = {
  question: 'Where is the director of Harbour Lights based?',
  answer: 'PRIVATE_GOLD_ANSWER',
  supporting_facts: { title: ['PRIVATE_GOLD_TITLE'], sent_id: [999] },
  context: {
    title: ['Harbour Lights (film)', 'Mara Vale', 'Unrelated Archive'],
    sentences: [
      ['DISCARDED_FILM_OPENING', 'Harbour Lights was directed by Mara Vale.'],
      ['DISCARDED_BIO_OPENING', 'Mara Vale is based in Toronto.'],
      ['UNRETRIEVED_BACKGROUND_ONLY'],
    ],
  },
};
const notes = {
  notes: [
    { title: 'Harbour Lights (film)', sentence_id: 1, text: 'The director is Mara Vale.' },
    { title: 'Mara Vale', sentence_id: 1, text: 'Mara Vale is based in Toronto.' },
  ],
};
const answer = {
  answer: 'Toronto',
  supporting_facts: notes.notes.map(({ title, sentence_id }) => ({ title, sentence_id })),
};
const draft = { notes: notes.notes.map(({ sentence_id, text }, source_id) => ({ source_id, sentence_id, text })) };
const usage = {
  prompt_tokens: 100, completion_tokens: 20, total_tokens: 120, cost: 0.001,
  prompt_tokens_details: { cached_tokens: 0, cache_write_tokens: 0 },
};

function completion(content: unknown) {
  return { model: 'offline/hybrid-model', usage,
    choices: [{ finish_reason: 'stop', message: { role: 'assistant', content:
      typeof content === 'string' ? content : JSON.stringify(content) } }],
  };
}

function search(query = 'Harbour Lights director', id = 'search-1') {
  return { model: 'offline/hybrid-model', usage,
    choices: [{ finish_reason: 'tool_calls', message: { role: 'assistant', content: null,
      tool_calls: [{ id, type: 'function', function: {
        name: 'search_context', arguments: JSON.stringify({ query }),
      } }],
    } }],
  };
}

function respond(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

test('retrieves with a follow-up, summarizes unique retrieved passages, and answers only from notes', async t => {
  let requests = 0;
  const original = structuredClone(question);

  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    const request = JSON.parse(init.body as string);
    assert.equal(request.model, 'offline/hybrid-model');
    assert.ok(!JSON.stringify(request).includes('PRIVATE_GOLD'));

    if (requests === 1) {
      assert.equal(request.tool_choice, 'required');
      assert.ok(!JSON.stringify(request).includes('Mara Vale'));
      return respond(search());
    }
    if (requests === 2) {
      assert.equal(request.tool_choice, 'auto');
      assert.ok(JSON.stringify(request).includes('directed by Mara Vale'));
      assert.ok(!JSON.stringify(request).includes('Toronto'));
      return respond(search('Mara Vale location', 'search-2'));
    }

    assert.equal(request.tools, undefined);
    assert.ok(!JSON.stringify(request).includes('UNRETRIEVED_BACKGROUND_ONLY'));
    if (requests === 3) {
      assert.equal(request.response_format.json_schema.name, 'context_summary');
      assert.ok(!JSON.stringify(request).includes(question.question));
      assert.equal(request.messages[1].content.split('Title: Harbour Lights (film)').length - 1, 1);
      assert.ok(request.messages[1].content.includes('[1] Mara Vale is based in Toronto.'));
      assert.ok(request.messages[1].content.includes('Source ID: 0\nTitle: Harbour Lights (film)'));
      assert.ok(request.messages[1].content.includes('Source ID: 1\nTitle: Mara Vale'));
      return respond(completion(draft));
    }

    assert.equal(requests, 4, 'No unused RAG answer or additional model requests.');
    assert.equal(request.response_format.json_schema.name, 'hotpotqa_answer');
    assert.ok(request.messages[1].content.includes('[1] The director is Mara Vale.'));
    assert.ok(!JSON.stringify(request).includes('DISCARDED_FILM_OPENING'));
    assert.ok(!JSON.stringify(request).includes('DISCARDED_BIO_OPENING'));
    return respond(completion(answer));
  });

  const result = await hybrid(question);
  assert.equal(requests, 4);
  assert.equal(result.status, 'completed');
  assert.deepEqual(result.output, answer);
  assert.deepEqual(result.summary, notes);
  assert.deepEqual(result.selectedTitles, ['Harbour Lights (film)', 'Mara Vale']);
  assert.equal(result.toolCalls.length, 2);
  assert.equal(result.modelCalls.length, 4);
  assert.deepEqual(result.modelCalls.slice(0, 2).map(call => call.request.messages.length), [2, 4]);
  assert.equal(result.usage?.total_tokens, usage.total_tokens * 4);
  assert.equal(result.usage?.cost, usage.cost * 4);
  assert.equal(result.warnings.length, 2);
  assert.deepEqual(question, original);
});

test('a failed follow-up stops before summarization and preserves the earlier search receipt', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    return requests === 1 ? respond(search())
      : respond({ error: { message: 'Offline follow-up failure' } }, 500);
  });

  const result = await hybrid(question);
  assert.equal(requests, 2);
  assert.equal(result.status, 'failed');
  assert.match(result.error!, /HTTP 500/);
  assert.equal(result.output, null);
  assert.equal(result.summary, null);
  assert.equal(result.toolCalls.length, 1);
  assert.equal(result.modelCalls.length, 2);
  assert.deepEqual(result.modelCalls[0].usage, usage);
  assert.equal(result.usage?.cost, null);
});

test('hybrid resolves IDs in retrieved order rather than original dataset order', async t => {
  const input = {
    question: 'Where is the archivist based?',
    context: {
      title: ['Unretrieved', 'Neafie &amp; Levy', 'Étude archive'],
      sentences: [['UNRETRIEVED_ONLY'], ['The shipyard has an archivist.'], ['The archivist is based in Toronto.']],
    },
  };
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    const request = JSON.parse(init.body as string);
    requests++;
    if (requests === 1) return respond(search('Étude'));
    if (requests === 2) return respond(search('Neafie', 'search-2'));
    assert.ok(!JSON.stringify(request).includes('UNRETRIEVED_ONLY'));
    if (requests === 3) {
      assert.ok(request.messages[1].content.includes('Source ID: 0\nTitle: Étude archive'));
      assert.ok(request.messages[1].content.includes('Source ID: 1\nTitle: Neafie &amp; Levy'));
      return respond(completion({ notes: [
        { source_id: 1, sentence_id: 0, text: 'The shipyard has an archivist.' },
        { source_id: 0, sentence_id: 0, text: 'The archivist is based in Toronto.' },
      ] }));
    }
    assert.equal(request.messages[1].content, 'CONTEXT SUMMARIES\n\nTitle: Neafie &amp; Levy\n[0] The shipyard has an archivist.\n\nTitle: Étude archive\n[0] The archivist is based in Toronto.');
    return respond(completion({ answer: 'Toronto', supporting_facts: [] }));
  });

  const result = await hybrid(input);
  assert.equal(result.status, 'completed');
  assert.equal(requests, 4);
  assert.deepEqual(result.selectedTitles, ['Neafie &amp; Levy', 'Étude archive']);
  assert.deepEqual(result.summary?.notes.map(note => note.title), result.selectedTitles);
  assert.equal(result.usage?.cost, usage.cost * 4);
});

test('hybrid rejects a response that bypasses the initial required search', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    return respond(completion(answer));
  });

  const result = await hybrid(question);
  assert.equal(requests, 1);
  assert.equal(result.status, 'failed');
  assert.equal(result.output, null);
  assert.match(result.error!, /required tool was not called/);
});

test('a summary referencing an unretrieved source stops before answering and retains all preparation costs', async t => {
  let requests = 0;
  const invalid = { notes: [{ source_id: 2, sentence_id: 0, text: 'Unsupported summary.' }] };
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    if (requests === 1) return respond(search());
    if (requests === 2) return respond(completion('ready'));
    return respond(completion(invalid));
  });

  const result = await hybrid(question);
  assert.equal(requests, 3);
  assert.equal(result.status, 'failed');
  assert.match(result.error!, /Invalid summary source_id 2; supplied source count is 1/);
  assert.equal(result.output, null);
  assert.equal(result.summary, null);
  assert.deepEqual(result.modelCalls[2].summary, invalid);
  assert.equal(result.modelCalls.length, 3);
  assert.equal(result.usage?.cost, usage.cost * 3);
});

test('empty retrieval stays empty through summarization without sending the full source collection', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    const request = JSON.parse(init.body as string);
    assert.ok(!JSON.stringify(request).includes('DISCARDED_FILM_OPENING'));
    if (requests === 1) return respond(search('zzzxnonexistent'));
    if (requests === 2) return respond(completion('ready'));
    if (requests === 3) {
      assert.equal(request.messages[1].content, 'CONTEXT\n\n');
      return respond(completion({ notes: [] }));
    }
    return respond(completion({ answer: 'insufficient evidence', supporting_facts: [] }));
  });

  const result = await hybrid(question);
  assert.equal(requests, 4);
  assert.equal(result.status, 'completed');
  assert.equal(result.output?.answer, 'insufficient evidence');
  assert.deepEqual(result.selectedTitles, []);
  assert.deepEqual(result.toolCalls[0].selectedTitles, []);
});

test('a final-answer failure preserves search and summary calls with incomplete total cost', async t => {
  let requests = 0;
  const selectedNotes = { notes: [notes.notes[0]] };
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    if (requests === 1) return respond(search());
    if (requests === 2) return respond(completion('ready'));
    if (requests === 3) return respond(completion({ notes: [draft.notes[0]] }));
    return respond({ error: { message: 'Offline answer failure' } }, 500);
  });

  const result = await hybrid(question);
  assert.equal(requests, 4);
  assert.equal(result.status, 'failed');
  assert.equal(result.output, null);
  assert.deepEqual(result.summary, selectedNotes);
  assert.equal(result.modelCalls.length, 4);
  assert.deepEqual(result.modelCalls[2].usage, usage);
  assert.equal(result.usage?.cost, null);
  assert.deepEqual(result.selectedTitles, ['Harbour Lights (film)']);
});
