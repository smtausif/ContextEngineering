import assert from 'node:assert/strict';
import { test } from 'node:test';
import { cacheHitRate, evaluateAnswer, evaluateCitations, normalizeAnswer } from './evaluation.ts';

test('normalization lowercases and removes ASCII punctuation, articles, and excess whitespace', () => {
  assert.equal(normalizeAnswer('  The, QUICK!  an A fox.\n'), 'quick fox');
  assert.equal(normalizeAnswer("Arthur's Magazine"), 'arthurs magazine');
  assert.equal(normalizeAnswer('U.S.-based'), 'usbased');
  assert.equal(normalizeAnswer('alpha—beta'), 'alpha—beta'); // Official ASCII punctuation convention.
});
test('correctness requires normalized EM, while token F1 permits partial overlap', () => {
  assert.deepEqual(evaluateAnswer('The Delhi!', 'delhi'), { answerCorrectness: 'Y', exactMatch: 1, tokenF1: 1 });
  const partial = evaluateAnswer('New York City', 'New York');
  assert.equal(partial.answerCorrectness, 'N');
  assert.equal(partial.exactMatch, 0);
  assert.equal(partial.tokenF1, 0.8);
  assert.equal(evaluateAnswer('London', 'Delhi').tokenF1, 0);
});
test('token overlap is a multiset intersection, not a set or substring match', () => {
  assert.ok(Math.abs(evaluateAnswer('red red blue', 'red blue blue').tokenF1 - 2 / 3) < 1e-12);
  assert.equal(evaluateAnswer('Yorkshire', 'York').tokenF1, 0);
});
test('yes/no/noanswer scoring matches HotpotQA category handling', () => {
  for (const answer of ['yes', 'no', 'noanswer']) {
    assert.equal(evaluateAnswer(answer.toUpperCase() + '!', answer).exactMatch, 1);
    assert.equal(evaluateAnswer(answer, answer).tokenF1, 1);
    assert.equal(evaluateAnswer(answer + ' explanation', answer).tokenF1, 0);
    assert.equal(evaluateAnswer(answer, answer + ' explanation').tokenF1, 0);
  }
  assert.deepEqual(evaluateAnswer('yes', 'no'), { answerCorrectness: 'N', exactMatch: 0, tokenF1: 0 });
});
test('empty normalized strings follow reference EM and zero-overlap F1 conventions', () => {
  assert.deepEqual(evaluateAnswer('', 'Delhi'), { answerCorrectness: 'N', exactMatch: 0, tokenF1: 0 });
  assert.deepEqual(evaluateAnswer('the', 'a'), { answerCorrectness: 'Y', exactMatch: 1, tokenF1: 0 });
});
test('title scoring deduplicates predictions and supporting sentences, and penalizes invented titles', () => {
  assert.deepEqual(evaluateCitations(['A', 'A', 'Invented'], ['A', 'A', 'B']), {
    citationPrecision: 0.5, citationRecall: 0.5, citationF1: 0.5,
  });
  assert.deepEqual(evaluateCitations(['A', 'B'], ['A', 'B']), { citationPrecision: 1, citationRecall: 1, citationF1: 1 });
  assert.deepEqual(evaluateCitations([], ['A']), { citationPrecision: 0, citationRecall: 0, citationF1: 0 });
  assert.equal(evaluateCitations(['a'], ['A']).citationF1, 0);
  assert.equal(evaluateCitations(['The A'], ['A']).citationF1, 0);
});
test('cache token fraction preserves missing values and zero, and rejects invalid denominators', () => {
  assert.equal(cacheHitRate(25, 100), 0.25);
  assert.equal(cacheHitRate(0, 100), 0);
  assert.equal(cacheHitRate(null, 100), null);
  assert.equal(cacheHitRate(0, null), null);
  assert.equal(cacheHitRate(0, 0), null);
  assert.equal(cacheHitRate(101, 100), null);
  assert.equal(cacheHitRate(-1, 100), null);
});
