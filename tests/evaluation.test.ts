import assert from 'node:assert/strict';
import { test } from 'node:test';

import { evaluateAnswer, evaluateCitations, evaluateResult, normalizeAnswer } from '../src/evaluation.ts';

test('normalization follows HotpotQA punctuation, article, case, and whitespace rules', () => {
  assert.equal(normalizeAnswer('  The, QUICK!  an A fox.\n'), 'quick fox');
  assert.equal(normalizeAnswer("Arthur's Magazine"), 'arthurs magazine');
  assert.equal(normalizeAnswer('U.S.-based'), 'usbased');
  assert.equal(normalizeAnswer('alpha—beta'), 'alpha—beta');
  assert.equal(normalizeAnswer('theé αthe the'), 'theé αthe');
});

test('normalized exact match and partial token overlap remain separate measurements', () => {
  assert.deepEqual(evaluateAnswer('The Delhi!', 'delhi'), {
    answerCorrectness: 'Y', exactMatch: 1, tokenF1: 1,
  });
  assert.deepEqual(evaluateAnswer('New York City', 'New York'), {
    answerCorrectness: 'N', exactMatch: 0, tokenF1: 0.8,
  });
  assert.equal(evaluateAnswer('London', 'Delhi').tokenF1, 0);
  assert.equal(evaluateAnswer('Yorkshire', 'York').tokenF1, 0);
});

test('token F1 counts repeated words using multiset overlap', () => {
  assert.ok(Math.abs(evaluateAnswer('red red blue', 'red blue blue').tokenF1 - 2 / 3) < 1e-12);
  assert.ok(Math.abs(evaluateAnswer('red red red', 'red').tokenF1 - 0.5) < 1e-12);
});

test('yes/no/noanswer labels get no partial credit when the normalized category differs', () => {
  for (const category of ['yes', 'no', 'noanswer']) {
    assert.equal(evaluateAnswer(category.toUpperCase() + '!', category).tokenF1, 1);
    assert.equal(evaluateAnswer(category + ' explanation', category).tokenF1, 0);
    assert.equal(evaluateAnswer(category, category + ' explanation').tokenF1, 0);
  }
  assert.deepEqual(evaluateAnswer('yes', 'no'), {
    answerCorrectness: 'N', exactMatch: 0, tokenF1: 0,
  });
  assert.equal(evaluateAnswer('Yes, they were both American.', 'yes').exactMatch, 0);
});

test('empty normalized answers retain the reference evaluator zero-overlap convention', () => {
  assert.deepEqual(evaluateAnswer('', 'Delhi'), {
    answerCorrectness: 'N', exactMatch: 0, tokenF1: 0,
  });
  assert.deepEqual(evaluateAnswer('the', 'a'), {
    answerCorrectness: 'Y', exactMatch: 1, tokenF1: 0,
  });
});

test('citations must match both the exact passage title and original sentence ID', () => {
  const expected = { title: ['Source A', 'Source B'], sent_id: [2, 0] };
  assert.deepEqual(evaluateCitations([
    { title: 'Source B', sentence_id: 0 },
    { title: 'Source A', sentence_id: 2 },
  ], expected), { citationPrecision: 1, citationRecall: 1, citationF1: 1 });

  assert.deepEqual(evaluateCitations([
    { title: 'Source A', sentence_id: 1 },
  ], expected), { citationPrecision: 0, citationRecall: 0, citationF1: 0 });

  assert.equal(evaluateCitations([{ title: 'source A', sentence_id: 2 }], expected).citationF1, 0);
  assert.equal(evaluateCitations([{ title: 'The Source A', sentence_id: 2 }], expected).citationF1, 0);
});

test('duplicate citations do not inflate scores and invented citations count against precision', () => {
  const citations = [
    { title: 'Source A', sentence_id: 2 },
    { title: 'Source A', sentence_id: 2 },
    { title: 'Invented', sentence_id: 0 },
  ];
  const expected = { title: ['Source A', 'Source A', 'Source B'], sent_id: [2, 2, 0] };
  assert.deepEqual(evaluateCitations(citations, expected), {
    citationPrecision: 0.5, citationRecall: 0.5, citationF1: 0.5,
  });
});

test('missing supporting sentences reduce recall while extra wrong sentences reduce precision', () => {
  const expected = { title: ['A', 'A'], sent_id: [0, 1] };
  const partial = evaluateCitations([{ title: 'A', sentence_id: 0 }], expected);
  assert.equal(partial.citationPrecision, 1);
  assert.equal(partial.citationRecall, 0.5);
  assert.ok(Math.abs(partial.citationF1 - 2 / 3) < 1e-12);

  const extra = evaluateCitations([
    { title: 'A', sentence_id: 0 }, { title: 'A', sentence_id: 1 }, { title: 'A', sentence_id: 99 },
  ], expected);
  assert.equal(extra.citationPrecision, 2 / 3);
  assert.equal(extra.citationRecall, 1);
});

test('empty citation sets score zero and malformed reference columns are rejected', () => {
  const zeros = { citationPrecision: 0, citationRecall: 0, citationF1: 0 };
  assert.deepEqual(evaluateCitations([], { title: ['A'], sent_id: [0] }), zeros);
  assert.deepEqual(evaluateCitations([], { title: [], sent_id: [] }), zeros);
  assert.deepEqual(evaluateCitations([{ title: 'A', sentence_id: 0 }], { title: [], sent_id: [] }), zeros);
  assert.throws(() => evaluateCitations([], { title: ['A'], sent_id: [] }), RangeError);
});

test('combined scoring accepts the loader reference shape and does not change either input', () => {
  const output = {
    answer: 'The copper!',
    supporting_facts: [{ title: 'Source [A], "record"', sentence_id: 2 }],
  };
  const reference = {
    id: 'example', answer: 'copper',
    supporting_facts: { title: ['Source [A], "record"'], sent_id: [2] },
  };
  const original = structuredClone({ output, reference });

  assert.deepEqual(evaluateResult(output, reference), {
    answerCorrectness: 'Y', exactMatch: 1, tokenF1: 1,
    citationPrecision: 1, citationRecall: 1, citationF1: 1,
  });
  assert.deepEqual({ output, reference }, original);
});

test('absent parsed output has no fabricated zero scores', () => {
  assert.equal(evaluateResult(null, {
    answer: 'yes', supporting_facts: { title: ['Source A'], sent_id: [0] },
  }), null);
});
