import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ANSWER_INSTRUCTIONS, parseAnswer } from './strategy.ts';

test('extracts only Final Answer, keeping explanation and exact citation titles separate', () => {
  const result = parseAnswer('Final Answer: Arthur\'s Magazine\n\nExplanation: Arthur\'s Magazine began in 1844; First for Women began in 1989.\n\nCitations: ["Arthur\'s Magazine", "First for Women"]');
  assert.equal(result.answer, "Arthur's Magazine");
  assert.ok(result.explanation?.includes('1989'));
  assert.deepEqual(result.citations, ["Arthur's Magazine", 'First for Women']);
  assert.equal(result.outputFormatValid, true);
  assert.equal(result.answerExtractionStatus, 'valid');
});

test('accepts CRLF, heading case/spacing differences, and an optional text code fence', () => {
  const result = parseAnswer('```text\r\n final answer : YES\r\n explanation: Evidence.\r\n citations: []\r\n```');
  assert.equal(result.answer, 'YES');
  assert.equal(result.outputFormatValid, true);
});

test('missing Final Answer never falls back to raw text, legacy JSON, explanation, or citations', () => {
  for (const raw of ['Delhi', '{"answer":"Delhi","citations":[]}',
    'Explanation: Delhi\nCitations: ["Delhi"]', 'Answer: Delhi\nExplanation: Evidence.\nCitations: []', '']) {
    const parsed = parseAnswer(raw);
    assert.equal(parsed.answer, null);
    assert.equal(parsed.answerExtractionStatus, 'missing');
    assert.equal(parsed.outputFormatValid, false);
  }
});

test('empty, duplicate, multiline, and placeholder Final Answer fields are malformed', () => {
  for (const value of ['', '\nDelhi', 'Delhi\nextra explanation', '[short answer only]', '[ ]',
    'Delhi\nFinal Answer: London', 'Delhi Explanation: extra explanation']) {
    const parsed = parseAnswer(`Final Answer: ${value}\nExplanation: Delhi is mentioned.\nCitations: ["Source"]`);
    assert.equal(parsed.answer, null, value);
    assert.equal(parsed.answerExtractionStatus, 'malformed', value);
    assert.equal(parsed.outputFormatValid, false);
    // Citation scoring still has independently extracted data.
    assert.deepEqual(parsed.citations, ['Source']);
  }
});

test('citation JSON preserves punctuation, commas, quotes, and brackets inside titles', () => {
  const titles = ['Title, with comma', 'Title "quoted"', 'Title [bracketed]', "Arthur's Magazine"];
  const result = parseAnswer(`Final Answer: Delhi\nExplanation: Evidence.\nCitations: ${JSON.stringify(titles, null, 2)}`);
  assert.deepEqual(result.citations, titles);
  assert.equal(result.citationExtractionStatus, 'valid');
  assert.equal(result.outputFormatValid, true);
});

test('missing or malformed citations are flagged without corrupting a valid Final Answer', () => {
  for (const suffix of ['', '\nCitations: Source A, Source B', '\nCitations: [1]',
    '\nCitations: [""]', '\nCitations: ["Source"]\nCitations: ["Other"]']) {
    const parsed = parseAnswer(`Final Answer: Delhi\nExplanation: Evidence.${suffix}`);
    assert.equal(parsed.answer, 'Delhi');
    assert.deepEqual(parsed.citations, []);
    assert.notEqual(parsed.citationExtractionStatus, 'valid');
    assert.equal(parsed.outputFormatValid, false);
  }
});

test('missing Explanation affects format validity independently of answer extraction', () => {
  const parsed = parseAnswer('Final Answer: Delhi\nCitations: []');
  assert.equal(parsed.answerExtractionStatus, 'valid');
  assert.equal(parsed.explanation, null);
  assert.equal(parsed.outputFormatValid, false);
});

test('shared instructions specify all three fields and unambiguous exact-title citations', () => {
  assert.ok(ANSWER_INSTRUCTIONS.includes('Final Answer: [short answer only]'));
  assert.ok(ANSWER_INSTRUCTIONS.includes('Explanation: [brief explanation]'));
  assert.ok(ANSWER_INSTRUCTIONS.includes('Citations: [supporting passage titles]'));
  assert.ok(ANSWER_INSTRUCTIONS.includes('JSON array of exact title strings'));
});
