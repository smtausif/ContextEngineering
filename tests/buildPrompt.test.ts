import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';

import { buildPrompt, buildRagPrompt, formatContext } from '../src/buildPrompt.ts';
import { logger } from '../src/logger.ts';
import { SearchContextTool, type TrainData } from '../src/schema.ts';

const oldLogLevel = logger.level;

before(() => { logger.level = 'silent'; });
after(() => { logger.level = oldLogLevel; });

const row: TrainData = {
  id: 'example',
  question: 'What connects the two sources?',
  answer: 'PRIVATE_ANSWER',
  type: 'bridge',
  level: 'medium',
  context: {
    title: ['Source A', 'Source B'],
    sentences: [['First sentence.', ' Second sentence.'], ['Other evidence.']],
  },
  supporting_facts: {
    title: ['Source A', 'Source B'],
    sent_id: [1, 0],
  },
};

test('summary source IDs are opt-in and preserve original titles, spacing, and indices', () => {
  const before = structuredClone(row.context);
  const standard = formatContext(row.context);
  const numbered = formatContext(row.context, true);

  assert.equal(standard, 'CONTEXT\n\nTitle: Source A\n[0] First sentence.\n[1]  Second sentence.\n\nTitle: Source B\n[0] Other evidence.');
  assert.equal(numbered.replaceAll(/Source ID: \d+\n/g, ''), standard);
  assert.ok(numbered.includes('Source ID: 0\nTitle: Source A'));
  assert.ok(numbered.includes('Source ID: 1\nTitle: Source B'));
  assert.deepEqual(row.context, before);
});

test('preserves all passages and original sentence indices without including gold labels', () => {
  const before = structuredClone(row);

  // Even when passed a complete dataset row, the builder reads only question and context.
  const messages = buildPrompt(row);

  assert.deepEqual(messages.map(message => message.role), ['system', 'user', 'user']);
  assert.ok(messages[1].content.includes('Title: Source A\n[0] First sentence.\n[1]  Second sentence.'));
  assert.ok(messages[1].content.includes('Title: Source B\n[0] Other evidence.'));
  assert.equal(messages[2].content, `QUESTION\n${row.question}`);
  assert.ok(!JSON.stringify(messages).includes(row.answer));
  assert.ok(!JSON.stringify(messages).includes('"sent_id"'));
  assert.deepEqual(row, before);
});

test('instructions and context remain identical when only the question changes', () => {
  const first = buildPrompt(row);
  const differentQuestion = { ...row, id: 'different-id', question: 'A different question?' };
  const second = buildPrompt(differentQuestion);

  assert.deepEqual(first.slice(0, 2), second.slice(0, 2));
  assert.notEqual(first[2].content, second[2].content);
});

test('tool-based RAG starts with instructions and the question, without source passages', () => {
  const messages = buildRagPrompt(row.question);

  assert.deepEqual(messages.map(message => message.role), ['system', 'user']);
  assert.ok(messages[0].content.includes(`The only available tool is "${SearchContextTool.function.name}"`));
  assert.ok(messages[0].content.includes('reply only "ready"'));
  assert.ok(!messages[0].content.includes('supporting_facts'));
  assert.ok(!messages[0].content.includes('yes/no'));
  assert.equal(messages[1].content, `QUESTION\n${row.question}`);
  assert.ok(!JSON.stringify(messages).includes('First sentence.'));
});

test('a normal question-only prompt does not ask other strategies to use a tool', () => {
  const messages = buildPrompt({ question: row.question });

  assert.deepEqual(messages.map(message => message.role), ['system', 'user']);
  assert.ok(!messages[0].content.includes('search_context'));
});

test('answer instructions preserve specificity, categorical answers, and the insufficient-evidence option', () => {
  const normal = buildPrompt(row);

  assert.ok(normal[0].content.includes('concise but complete'));
  assert.ok(normal[0].content.includes('Preserve full names, specific locations, dates, numbers, and relevant qualifiers'));
  assert.ok(normal[0].content.includes('Do not replace them with broader terms or new abbreviations'));
  assert.ok(normal[0].content.includes('the answer field must contain only "yes" or "no", without an explanation'));
  assert.ok(normal[0].content.includes('If evidence is insufficient, answer "insufficient evidence"'));
});
