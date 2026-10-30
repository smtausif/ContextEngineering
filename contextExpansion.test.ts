import assert from 'node:assert/strict';
import { test } from 'node:test';
import { expandContext } from './contextExpansion.ts';
import { prepareFullContext } from './strategy.ts';
import type { TrainData } from './schema.ts';

const original: TrainData = {
  id: 'target', question: 'Target question?', answer: 'GOLD_TARGET', type: 'bridge', level: 'medium',
  supporting_facts: { title: ['GOLD_LABEL'], sent_id: [99] },
  context: { title: ['Original'], sentences: [['Original sentence.', ' Keep whitespace.']] },
};
const donor: TrainData = { ...original, id: 'donor', question: 'DONOR_QUESTION_NOT_SENT',
  answer: 'GOLD_DONOR', context: { title: ['Original', 'Extra A', 'Extra B'],
    sentences: [['Conflicting passage must be skipped.'], ['Additional sentence A.'], ['Additional sentence B.']] } };

test('expansion preserves all originals, appends deterministic unique titles, and records provenance', () => {
  const before = structuredClone([original, donor]);
  const expanded = expandContext(original, [original, donor], 2);
  assert.deepEqual(expanded.context.title, ['Original', 'Extra A', 'Extra B']);
  assert.deepEqual(expanded.context.sentences[0], original.context.sentences[0]);
  assert.deepEqual(expanded.addedPassages, [
    { donorQuestionId: 'donor', donorContextIndex: 1, title: 'Extra A' },
    { donorQuestionId: 'donor', donorContextIndex: 2, title: 'Extra B' },
  ]);
  assert.deepEqual([original, donor], before);
  assert.deepEqual(expandContext(original, [original, donor], 2), expanded);
});

test('expanded prompt includes passage text but never donor questions, answers, or gold labels', () => {
  const expanded = expandContext(original, [original, donor], 2);
  const prepared = prepareFullContext({ question: { id: original.id, question: original.question, context: expanded.context },
    configuration: { model: 'google/gemini-2.5-flash-lite' } });
  const serialized = JSON.stringify(prepared.request);
  assert.ok(serialized.includes('Additional sentence A.'));
  assert.ok(!serialized.includes('GOLD_'));
  assert.ok(!serialized.includes('DONOR_QUESTION_NOT_SENT'));
  assert.ok(!serialized.includes('Conflicting passage'));
});

test('zero expansion leaves source content equal without sharing mutable arrays', () => {
  const expanded = expandContext(original, [original, donor], 0);
  assert.deepEqual(expanded.context, original.context);
  expanded.context.sentences[0].push('New sentence');
  assert.equal(original.context.sentences[0].length, 2);
});

test('invalid expansion sizes and insufficient unique sources fail instead of silently changing the size', () => {
  for (const count of [-1, 0.5, NaN, Infinity]) assert.throws(() => expandContext(original, [donor], count), RangeError);
  assert.throws(() => expandContext(original, [original, donor], 3), RangeError);
});
