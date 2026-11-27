import assert from 'node:assert/strict';
import { after, before, beforeEach, test } from 'node:test';

import { logger } from '../src/logger.ts';
import { caching } from '../src/strategies/caching/caching.ts';
import { fullContext } from '../src/strategies/full-context/fullContext.ts';
import { summarization } from '../src/strategies/summarization/summarization.ts';

const envNames = ['OPENROUTER_API_KEY', 'OPENROUTER_MODEL', 'OPENROUTER_PROVIDER'] as const;
const originalEnv = envNames.map(name => process.env[name]);
const oldLogLevel = logger.level;

before(() => { logger.level = 'silent'; });
beforeEach(() => {
  process.env.OPENROUTER_API_KEY = 'offline-strategy-key';
  process.env.OPENROUTER_MODEL = 'inception/mercury-2.5';
  delete process.env.OPENROUTER_PROVIDER;
});
after(() => {
  envNames.forEach((name, index) => {
    if (originalEnv[index] === undefined) delete process.env[name];
    else process.env[name] = originalEnv[index];
  });
  logger.level = oldLogLevel;
});

const question = {
  id: 'offline-example',
  question: 'Which codeword belongs to Atlas?',
  answer: 'PRIVATE_REFERENCE_ANSWER',
  supporting_facts: { title: ['PRIVATE_REFERENCE_TITLE'], sent_id: [999] },
  context: {
    title: ['Atlas record', 'Unrelated source'],
    sentences: [
      ['DISCARDED_INTRODUCTION', '  Preserve original spacing.', 'The documented Atlas codeword is copper.'],
      ['ORIGINAL_DISTRACTOR_TEXT'],
    ],
  },
};
const notes = { notes: [{ title: 'Atlas record', sentence_id: 2, text: 'The Atlas code is copper.' }] };
const draft = { notes: [{ source_id: 0, sentence_id: 2, text: notes.notes[0].text }] };
const answer = { answer: 'copper', supporting_facts: [{ title: 'Atlas record', sentence_id: 2 }] };
const usage = {
  prompt_tokens: 100, completion_tokens: 20, total_tokens: 120, cost: 0.001,
  prompt_tokens_details: { cached_tokens: 0, cache_write_tokens: 0 },
};

function completion(content: unknown = answer, finish_reason = 'stop') {
  return new Response(JSON.stringify({
    model: process.env.OPENROUTER_MODEL,
    usage,
    choices: [{ finish_reason, message: {
      role: 'assistant', content: typeof content === 'string' ? content : JSON.stringify(content),
    } }],
  }), { headers: { 'Content-Type': 'application/json' } });
}

test('full context sends every original passage and sentence, with no labels or tool policy', async t => {
  const before = structuredClone(question);
  let requests = 0;

  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    const request = JSON.parse(init.body as string);
    assert.equal(request.messages.length, 3);
    assert.equal(request.messages[1].content[0].type, 'text');
    assert.ok(request.messages[1].content[0].text.includes('[1]   Preserve original spacing.'));
    assert.ok(request.messages[1].content[0].text.includes('[2] The documented Atlas codeword is copper.'));
    assert.ok(request.messages[1].content[0].text.includes('ORIGINAL_DISTRACTOR_TEXT'));
    assert.ok(!JSON.stringify(request).includes('PRIVATE_REFERENCE'));
    assert.deepEqual(Object.keys(request).sort(), ['messages', 'model', 'response_format']);
    assert.equal(new Headers(init.headers).get('X-OpenRouter-Cache'), 'false');
    return completion();
  });

  const result = await fullContext(question);
  assert.equal(requests, 1);
  assert.equal(result.status, 'completed');
  assert.deepEqual(result.output, answer);
  assert.deepEqual(result.selectedTitles, question.context.title);
  assert.deepEqual(question, before);
});

test('explicit caching changes only the source cache marker and keeps the same provider and schema', async t => {
  process.env.OPENROUTER_MODEL = 'google/gemini-3.1-flash-lite';
  process.env.OPENROUTER_PROVIDER = 'google-ai-studio';
  const bodies: Record<string, any>[] = [];
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    bodies.push(JSON.parse(init.body as string));
    return completion();
  });

  await fullContext(question);
  const result = await caching(question);
  assert.equal(result.status, 'completed');
  assert.equal(result.cacheMode, 'explicit');
  assert.deepEqual(bodies[0].provider, {
    only: ['google-ai-studio'], allow_fallbacks: false, require_parameters: true,
  });
  assert.deepEqual(bodies[1].messages[1].content[0].cache_control, { type: 'ephemeral' });
  assert.equal(bodies[1].messages[2].cache_control, undefined);
  const unmarked = structuredClone(bodies[1]);
  delete unmarked.messages[1].content[0].cache_control;
  assert.deepEqual(unmarked, bodies[0]);
  assert.equal(bodies[1].temperature, undefined);
  assert.equal(bodies[1].max_completion_tokens, undefined);
  assert.equal(bodies[1].response_format.json_schema.name, 'hotpotqa_answer');
});

test('implicit caching remains an ordinary full-context request for the environment model', async t => {
  const bodies: unknown[] = [];
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    bodies.push(JSON.parse(init.body as string));
    return completion();
  });

  await fullContext(question);
  const result = await caching(question, 'implicit');
  assert.equal(result.status, 'completed');
  assert.equal(result.cacheMode, 'implicit');
  assert.deepEqual(bodies[0], bodies[1]);
  assert.ok(result.warnings[0].includes('Observational'));
});

test('unsupported explicit cache configurations make no model requests or silent substitutions', async t => {
  t.mock.method(globalThis, 'fetch', async () => { assert.fail('No API call expected.'); });
  delete process.env.OPENROUTER_API_KEY;

  for (const [model, provider] of [
    ['inception/mercury-2.5', ''],
    ['openai/gpt-4.1-mini', 'openai'],
    ['google/gemini-2.5-flash-lite', 'google-ai-studio'],
    ['google/gemini-3.1-flash-lite', 'unverified-provider'],
    ['google/gemini-3.1-flash-lite', ''],
  ]) {
    process.env.OPENROUTER_MODEL = model;
    process.env.OPENROUTER_PROVIDER = provider;
    const result = await caching(question);
    assert.equal(result.status, 'unsupported');
    assert.equal(result.model, model);
    assert.equal(result.modelCalls.length, 0);
    assert.equal(result.output, null);
  }
});

test('summarization uses only source notes for the answer and preserves original sentence IDs', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    const request = JSON.parse(init.body as string);
    assert.ok(!JSON.stringify(request).includes('PRIVATE_REFERENCE'));
    assert.ok(!Object.hasOwn(request, 'tools'));

    if (requests === 1) {
      assert.equal(request.response_format.json_schema.name, 'context_summary');
      assert.ok(!JSON.stringify(request).includes(question.question));
      assert.ok(request.messages[1].content.includes('ORIGINAL_DISTRACTOR_TEXT'));
      assert.ok(request.messages[1].content.includes('Source ID: 0\nTitle: Atlas record'));
      assert.ok(request.messages[1].content.includes('Source ID: 1\nTitle: Unrelated source'));
      return completion(draft);
    }

    assert.equal(request.response_format.json_schema.name, 'hotpotqa_answer');
    assert.ok(request.messages[1].content.includes('[2] The Atlas code is copper.'));
    assert.ok(!JSON.stringify(request).includes('ORIGINAL_DISTRACTOR_TEXT'));
    assert.ok(!JSON.stringify(request).includes('DISCARDED_INTRODUCTION'));
    assert.equal(request.messages[2].content, `QUESTION\n${question.question}`);
    return completion();
  });

  const result = await summarization(question);
  assert.equal(result.status, 'completed');
  assert.equal(requests, 2);
  assert.deepEqual(result.output, answer);
  assert.deepEqual(result.summary, notes);
  assert.deepEqual(result.modelCalls[0].summary, draft);
  assert.deepEqual(result.selectedTitles, ['Atlas record']);
  assert.equal(result.modelCalls.length, 2);
  assert.equal(result.usage?.total_tokens, usage.total_tokens * 2);
  assert.equal((result.usage as { cost: number }).cost, usage.cost * 2);
});

test('invalid summary references or schema stop before answering and retain preparation usage', async t => {
  for (const body of [
    { notes: [{ ...draft.notes[0], source_id: 99 }] },
    { notes: [{ ...draft.notes[0], source_id: -1 }] },
    { notes: [{ ...draft.notes[0], source_id: 0.5 }] },
    { notes: [{ ...draft.notes[0], source_id: '0' }] },
    { notes: [{ ...draft.notes[0], sentence_id: 99 }] },
    { notes: [{ ...draft.notes[0], sentence_id: -1 }] },
    { notes: [{ ...draft.notes[0], sentence_id: '2' }] },
    { notes: [{ source_id: 0, sentence_id: 2 }] },
    { notes: [{ ...draft.notes[0], text: '' }] },
    notes,
    'not JSON',
  ]) {
    let requests = 0;
    const mock = t.mock.method(globalThis, 'fetch', async () => {
      requests++;
      return completion(body);
    });
    const result = await summarization(question);
    assert.equal(requests, 1);
    assert.equal(result.status, 'failed');
    assert.equal(result.output, null);
    assert.ok(result.error);
    assert.equal(result.summary, null);
    assert.deepEqual(result.usage, usage);
    mock.mock.restore();
  }
});

test('a truncated summary is not used for an answer', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    return completion(draft, 'length');
  });
  const result = await summarization(question);
  assert.equal(requests, 1);
  assert.equal(result.status, 'failed');
  assert.match(result.error!, /did not finish normally/);
  assert.deepEqual(result.usage, usage);
});

test('source IDs restore encoded and Unicode titles even when notes are returned out of order', async t => {
  const input = {
    question: 'Which records are connected?',
    context: {
      title: ['Neafie &amp; Levy', 'Étude — archive'],
      sentences: [['First original sentence.', 'Second original sentence.'], ['Related evidence.']],
    },
  };
  const original = structuredClone(input);
  const wireNotes = { notes: [
    { source_id: 1, sentence_id: 0, text: 'Related evidence.' },
    { source_id: 0, sentence_id: 1, text: 'Second original sentence.' },
  ] };
  const resolved = { notes: [
    { title: 'Étude — archive', sentence_id: 0, text: 'Related evidence.' },
    { title: 'Neafie &amp; Levy', sentence_id: 1, text: 'Second original sentence.' },
  ] };
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    if (++requests === 1) return completion(wireNotes);
    const request = JSON.parse(init.body as string);
    assert.equal(request.messages[1].content, 'CONTEXT SUMMARIES\n\nTitle: Étude — archive\n[0] Related evidence.\n\nTitle: Neafie &amp; Levy\n[1] Second original sentence.');
    return completion({ answer: 'connected', supporting_facts: [] });
  });

  const result = await summarization(input);
  assert.equal(result.status, 'completed');
  assert.equal(requests, 2);
  assert.deepEqual(result.summary, resolved);
  assert.deepEqual(result.modelCalls[0].summary, wireNotes);
  assert.deepEqual(input, original);
});

test('invalid summary IDs identify the failed reference and retain the raw draft', async t => {
  for (const [context, note, expected] of [
    [question.context, { source_id: 2, sentence_id: 0, text: 'Invalid source.' }, /source_id 2; supplied source count is 2/],
    [question.context, { source_id: 1, sentence_id: 2, text: 'Invalid sentence.' }, /sentence_id 2 for source_id 1; original sentence count is 1/],
    [{ title: [], sentences: [] }, { source_id: 0, sentence_id: 0, text: 'No source exists.' }, /source_id 0; supplied source count is 0/],
  ] as [typeof question.context, typeof draft.notes[0], RegExp][]) {
    const wireNotes = { notes: [note] };
    let requests = 0;
    const mock = t.mock.method(globalThis, 'fetch', async () => {
      requests++;
      return completion(wireNotes);
    });
    const result = await summarization({ question: question.question, context: structuredClone(context) });
    assert.equal(requests, 1);
    assert.equal(result.status, 'failed');
    assert.match(result.error!, expected);
    assert.equal(result.summary, null);
    assert.deepEqual(result.modelCalls[0].summary, wireNotes);
    assert.deepEqual(result.usage, usage);
    mock.mock.restore();
  }
});

test('a failed answer keeps the summary call and marks unreported total costs unknown', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    return requests === 1 ? completion(draft) : new Response(JSON.stringify({
      error: { message: 'Offline final request failed' },
    }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  });
  const result = await summarization(question);
  assert.equal(requests, 2);
  assert.equal(result.status, 'failed');
  assert.equal(result.modelCalls.length, 2);
  assert.deepEqual(result.modelCalls[0].usage, usage);
  assert.deepEqual(result.summary, notes);
  assert.equal(result.usage?.total_tokens, null);
  assert.equal((result.usage as { cost: number | null }).cost, null);
});

test('empty summary notes do not fall back to sending the original passages', async t => {
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async (_url: string, init: RequestInit) => {
    requests++;
    if (requests === 1) return completion({ notes: [] });
    const body = JSON.parse(init.body as string);
    assert.ok(!JSON.stringify(body).includes('ORIGINAL_DISTRACTOR_TEXT'));
    return completion({ answer: 'insufficient evidence', supporting_facts: [] });
  });
  const result = await summarization(question);
  assert.equal(result.status, 'completed');
  assert.equal(requests, 2);
  assert.deepEqual(result.selectedTitles, []);
  assert.equal(result.output?.answer, 'insufficient evidence');
});
