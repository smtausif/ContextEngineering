import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { ParquetFileReader } from './ParquetFileReader.ts';
import { runExperiment, ROUND_MODELS } from './experimentRunner.ts';
import { ANCHOR_ID, SELECTION_DATASET, STRATUM_QUOTAS, datasetSha256,
  selectFinalQuestions, sha256, validateQuestion, type FrozenQuestion } from './selectFinalQuestions.ts';
import type { TrainData } from './schema.ts';
import type { StrategyRegistration } from './experimentRunner.ts';
import type { StrategyInput } from './strategy.ts';

function fixtures(): TrainData[] {
  return Object.keys(STRATUM_QUOTAS).flatMap(category => {
    const [type, level] = category.split('/');
    return Array.from({ length: 10 }, (_, index) => ({
      id: category === 'comparison/medium' && index === 0 ? ANCHOR_ID : `${category}/${index}`,
      question: 'Fixture question?', answer: 'Fixture answer', type, level,
      context: { title: ['Document A', 'Document B'], sentences: [['Sentence A.'], ['Sentence B.']] },
      supporting_facts: { title: ['Document A', 'Document B'], sent_id: [0, 0] },
    }));
  });
}

test('selects exactly 50 unique IDs with fixed quotas and a validated anchor first', () => {
  const selection = selectFinalQuestions(fixtures());
  assert.equal(selection.questions.length, 50);
  assert.equal(new Set(selection.questions.map(row => row.questionId)).size, 50);
  assert.equal(selection.questions[0].questionId, ANCHOR_ID);
  assert.equal(selection.anchorIncluded, true);
  assert.deepEqual(selection.questions.map(row => row.selectionPosition), Array.from({ length: 50 }, (_, i) => i + 1));
  for (const [category, count] of Object.entries(STRATUM_QUOTAS)) {
    assert.equal(selection.questions.filter(row => `${row.type}/${row.difficulty}` === category).length, count);
  }
  assert.ok(selection.questions.every(row => Object.keys(row).sort().join(',') === 'difficulty,questionId,selectionPosition,type'));
});

test('fixed seed is independent of input record order and does not mutate records', () => {
  const records = fixtures();
  const before = structuredClone(records);
  const original = selectFinalQuestions(records).questions;
  assert.deepEqual(selectFinalQuestions([...records].reverse()).questions, original);
  assert.deepEqual(records, before);
});

test('checks expected answers, source alignment, titles, and supporting sentence indices', () => {
  const base = fixtures()[0];
  assert.deepEqual(validateQuestion(base), []);
  for (const answer of ['', '   ', 'the', '!!!']) assert.ok(validateQuestion({ ...base, answer }).includes('invalid_expected_answer'));
  assert.ok(validateQuestion({ ...base, supporting_facts: { title: ['Missing'], sent_id: [0] } }).includes('supporting_title_missing'));
  for (const index of [-1, 0.5, 1, NaN]) {
    assert.ok(validateQuestion({ ...base, supporting_facts: { title: ['Document A'], sent_id: [index] } }).includes('supporting_sentence_out_of_range'));
  }
  assert.ok(validateQuestion({ ...base, supporting_facts: { title: ['Document A'], sent_id: [] } }).includes('invalid_supporting_facts'));
  assert.ok(validateQuestion({ ...base, context: { title: ['A', 'A'], sentences: [['Evidence.'], ['Evidence.']] } }).includes('duplicate_context_title'));
  assert.ok(validateQuestion({ ...base, context: { title: ['Document A'], sentences: [[' ']] },
    supporting_facts: { title: ['Document A'], sent_id: [0] } }).includes('empty_supporting_sentence'));
});

test('ambiguous duplicate IDs are excluded entirely instead of silently choosing a record', () => {
  const records = fixtures();
  const duplicate = { ...structuredClone(records[0]), id: 'duplicate-extra' };
  const selected = selectFinalQuestions([...records, duplicate, structuredClone(duplicate)]);
  assert.equal(selected.exclusions.filter(row => row.questionId === duplicate.id).length, 2);
  assert.ok(!selected.questions.some(row => row.questionId === duplicate.id));
});

test('an invalid anchor is excluded and its quota is filled from valid candidates', () => {
  const records = fixtures();
  records.find(row => row.id === ANCHOR_ID)!.supporting_facts.sent_id[0] = 999;
  const selection = selectFinalQuestions(records);
  assert.equal(selection.anchorIncluded, false);
  assert.equal(selection.questions.length, 50);
  assert.ok(!selection.questions.some(row => row.questionId === ANCHOR_ID));
});

test('insufficient valid records in a stratum fail instead of silently changing quotas', () => {
  const records = fixtures().filter(row => row.id !== 'bridge/easy/0');
  assert.throws(() => selectFinalQuestions(records), /Insufficient eligible questions in bridge\/easy/);
});

test('frozen local manifest matches the shard and preserves IDs/source collections for both models and all five method interfaces', {
  skip: !existsSync(SELECTION_DATASET) || !existsSync('data/final-50-questions.json'),
}, async () => {
  const protectedPaths = ['results/results.csv', 'results/results-v2.csv', 'results/caching-tests.csv', 'results/final-results.csv'];
  const before = protectedPaths.map(path => existsSync(path) ? readFileSync(path) : null);
  const manifest = JSON.parse(readFileSync('data/final-50-questions.json', 'utf8')) as {
    dataset: { path: string; sha256: string; rowCount: number };
    selection: { orderedIdsSha256: string };
    questions: FrozenQuestion[];
  };
  assert.equal(manifest.dataset.path, SELECTION_DATASET);
  assert.equal(await datasetSha256(new URL(`./${SELECTION_DATASET}`, import.meta.url)), manifest.dataset.sha256);
  const records = await new ParquetFileReader({ filePath: SELECTION_DATASET }).read();
  assert.equal(records.length, manifest.dataset.rowCount);
  const reproduced = selectFinalQuestions(records);
  assert.deepEqual(reproduced.questions, manifest.questions);
  const ids = manifest.questions.map(row => row.questionId);
  assert.equal(sha256(JSON.stringify(ids)), manifest.selection.orderedIdsSha256);
  const byId = new Map(records.map(row => [row.id, row]));
  assert.ok(ids.every(id => validateQuestion(byId.get(id)!).length === 0));
  let preflightCount = 0;
  const placeholder: StrategyRegistration = { cacheMode: 'none_requested',
    preflight: (input: StrategyInput) => {
      assert.deepEqual(Object.keys(input.question).sort(), ['context', 'id', 'question']);
      assert.ok(!Object.hasOwn(input.question, 'answer'));
      assert.ok(!Object.hasOwn(input.question, 'supporting_facts'));
      preflightCount++;
      return null;
    }, run: async () => { assert.fail('Dry-run must not execute any strategy.'); } };
  const fingerprints: Array<Map<string, string>> = [];
  for (const model of [ROUND_MODELS[1], ROUND_MODELS[2]]) {
    const seen = new Map<string, string>();
    let count = 0, unsupported = 0;
    for await (const row of runExperiment({ configuration: { model }, questionIds: ids,
      strategies: ['full_context', 'caching', 'rag', 'summarization', 'hybrid'], repetitions: 1,
      additionalContextPassages: 20, dryRun: true,
    }, { loadDataset: async () => records,
      createClient: () => { assert.fail('Selection verification must not construct an API client.'); },
      resultsWriter: { initialize: async () => { assert.fail('Dry-run must not initialize CSV.'); },
        append: async () => { assert.fail('Dry-run must not append CSV.'); } },
      additionalStrategies: { rag: placeholder, summarization: placeholder, hybrid: placeholder },
    })) {
      count++;
      if (row.status === 'unsupported') unsupported++;
      else assert.equal(row.status, 'dry_run');
      if (seen.has(row.questionId)) assert.equal(seen.get(row.questionId), row.sourceFingerprint);
      seen.set(row.questionId, row.sourceFingerprint);
      assert.equal(row.requestSequenceNumber, null);
    }
    assert.equal(count, 250);
    assert.equal(unsupported, model === ROUND_MODELS[2] ? 50 : 0);
    assert.deepEqual([...seen.keys()], ids);
    fingerprints.push(seen);
  }
  assert.deepEqual(fingerprints[0], fingerprints[1]);
  assert.equal(preflightCount, 300);
  protectedPaths.forEach((path, i) => assert.deepEqual(existsSync(path) ? readFileSync(path) : null, before[i]));
});
