import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { after, before, test } from 'node:test';

import { loadData, prepareData } from '../src/loadData.ts';
import { logger } from '../src/logger.ts';
import { ParquetFileReader } from '../src/ParquetFileReader.ts';
import type { TrainData } from '../src/schema.ts';

const oldLogLevel = logger.level;

before(() => { logger.level = 'silent'; });
after(() => { logger.level = oldLogLevel; });

function fixture(): TrainData {
  return {
    id: 'example',
    question: 'Example question?',
    answer: 'PRIVATE_REFERENCE_ANSWER',
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
}

test('keeps reference labels out of model inputs while preserving every passage and sentence', () => {
  const row = fixture();
  const { questions, answerKey } = prepareData([row]);

  assert.deepEqual(questions, [{ id: row.id, question: row.question, context: row.context }]);
  assert.deepEqual(answerKey, [{ id: row.id, answer: row.answer, supporting_facts: row.supporting_facts }]);
  assert.ok(!JSON.stringify(questions).includes(row.answer));
  assert.ok(!Object.hasOwn(questions[0], 'supporting_facts'));
});

test('stops on unusable selected questions instead of silently changing the sample', () => {
  const row = fixture();

  assert.throws(() => prepareData([{ ...row, answer: '' }]), /Missing question, answer, or context/);
  assert.throws(() => prepareData([{ ...row, context: { title: ['A'], sentences: [] } }]), /Missing question, answer, or context/);
  assert.throws(() => prepareData([{ ...row, supporting_facts: { title: ['Source A'], sent_id: [99] } }]), /Invalid supporting sentence/);
  assert.throws(() => prepareData([row, row]), /duplicate question ID/);
});

const dataset = new URL('../data/validation-00000-of-00001.parquet', import.meta.url);

test('loads the first ten real rows and a separate later batch in original order', {
  skip: !existsSync(dataset),
}, async () => {
  const source = await new ParquetFileReader({ filePath: fileURLToPath(dataset) }).read(12);
  const development = await loadData();
  const later = await loadData(2, 10);

  assert.deepEqual(development, prepareData(source.slice(0, 10)));
  assert.deepEqual(later, prepareData(source.slice(10, 12)));
  assert.equal(development.questions.length, 10);

  const developmentIds = new Set(development.questions.map(question => question.id));
  assert.ok(later.questions.every(question => !developmentIds.has(question.id)));
});
