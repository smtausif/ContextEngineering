import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { after, before, test } from 'node:test';

import { buildPrompt } from '../src/buildPrompt.ts';
import { loadData } from '../src/loadData.ts';
import { logger } from '../src/logger.ts';
import { retrieveContext } from '../src/strategies/rag/retrieveContext.ts';
import type { Context } from '../src/schema.ts';

const oldLogLevel = logger.level;

before(() => { logger.level = 'silent'; });
after(() => { logger.level = oldLogLevel; });

const context: Context = {
  title: ['Banana orchard', 'Astronomy guide', 'Banana shipping'],
  sentences: [
    ['This is the opening sentence.', 'Banana trees grow in warm climates.'],
    ['Stars and galaxies are observed through telescopes.'],
    ['Banana shipments travel in refrigerated containers.'],
  ],
};

test('selects relevant passages without changing source text, sentence indices, or input order', () => {
  const original = structuredClone(context);
  const selected = retrieveContext('banana', context, 2);

  assert.deepEqual(new Set(selected.title), new Set(['Banana orchard', 'Banana shipping']));

  selected.title.forEach((title, i) => {
    assert.deepEqual(selected.sentences[i], context.sentences[context.title.indexOf(title)]);
  });

  const messages = buildPrompt({ question: 'banana', context: selected });

  assert.ok(messages[1].content.includes('[0] This is the opening sentence.'));
  assert.ok(messages[1].content.includes('[1] Banana trees grow in warm climates.'));
  assert.deepEqual(context, original);
});

test('breaks equal-score ties in source order', () => {
  const tied: Context = {
    title: ['Alpha', 'Bravo', 'Charlie'],
    sentences: [['needle'], ['needle'], ['needle']],
  };

  assert.deepEqual(retrieveContext('needle', tied, 2).title, ['Alpha', 'Bravo']);
});

test('returns only available matches without padding or inventing passages', () => {
  assert.equal(retrieveContext('banana', context, 20).title.length, 2);
  assert.deepEqual(retrieveContext('unmatchedwordxyz', context), { title: [], sentences: [] });
  assert.deepEqual(retrieveContext('', context), { title: [], sentences: [] });
  assert.deepEqual(retrieveContext('banana', { title: [], sentences: [] }), { title: [], sentences: [] });

  for (const topK of [0, -1, 0.5, Infinity]) {
    assert.throws(() => retrieveContext('banana', context, topK), /positive integer/);
  }
});

const dataset = new URL('../data/validation-00000-of-00001.parquet', import.meta.url);

test('feeds a real retrieved context into the shared prompt builder without reference labels', {
  skip: !existsSync(dataset),
}, async () => {
  const { questions, answerKey } = await loadData(1);
  const question = questions[0];
  const selected = retrieveContext(question.question, question.context);
  const messages = buildPrompt({ ...question, context: selected });

  assert.ok(selected.title.length > 0 && selected.title.length <= 4);
  assert.equal(messages[2].content, `QUESTION\n${question.question}`);

  // Evaluate this development example only after retrieval; labels are never search inputs.
  assert.ok(answerKey[0].supporting_facts.title.every(title => selected.title.includes(title)));

  selected.title.forEach((title, i) => {
    assert.deepEqual(selected.sentences[i], question.context.sentences[question.context.title.indexOf(title)]);
    assert.ok(messages[1].content.includes(`Title: ${title}\n`));
  });

  assert.ok(!Object.hasOwn(selected, 'answer'));
  assert.ok(!Object.hasOwn(selected, 'supporting_facts'));
});
