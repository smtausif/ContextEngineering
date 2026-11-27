import assert from 'node:assert/strict';
import { test, before, after } from 'node:test';
import { readFile } from 'node:fs/promises';
import { buildFullContextPrompt } from '../../src/strategies/full-context/fullContext.ts';
import { normalizeAnswer } from '../../src/evaluation.ts';
import { logger } from '../../src/logger.ts';
import { CONDITIONS, SETTINGS, loadPilot, variants, estimate, words, ROOT } from './pilot.ts';
import { answerWithControls } from './answer.ts';
import { compare, renderReport, type NoiseRecord } from './report.ts';
import { main } from './run.ts';
import { createFixtures } from './create-fixtures.ts';
import { ParquetFileReader } from '../../src/ParquetFileReader.ts';

const pilot = await loadPilot();
const oldLog = logger.level;
before(() => { logger.level = 'silent'; });
after(() => { logger.level = oldLog; });

test('Distractor dataset is verified and all three conditions use the same 20 unique IDs', () => {
  assert.equal(pilot.manifest.datasetRows, 7405);
  assert.equal(pilot.manifest.supportEligibleRows, 7404);
  for (const c of CONDITIONS) assert.deepEqual(pilot.samples.map(s => ({ id: s.row.id, context: s.contexts[c] })).map(s => s.id), pilot.manifest.questionIds);
  assert.equal(new Set(pilot.manifest.questionIds).size, 20);
});

test('complete supporting passages, gold answers, questions and original sentence indices are unchanged', () => {
  for (const sample of pilot.samples) {
    const before = structuredClone(sample.row);
    const constructed = variants(sample.row, sample.fixture);
    for (const c of CONDITIONS) {
      const ctx = constructed[c];
      for (let i = 0; i < sample.row.supporting_facts.title.length; i++) {
        const title = sample.row.supporting_facts.title[i], sid = sample.row.supporting_facts.sent_id[i];
        const original = sample.row.context.sentences[sample.row.context.title.indexOf(title)];
        assert.deepEqual(ctx.sentences[ctx.title.indexOf(title)], original);
        assert.equal(ctx.sentences[ctx.title.indexOf(title)][sid], original[sid]);
      }
      assert.equal(new Set(ctx.title).size, ctx.title.length);
      assert.deepEqual(ctx.title.slice(0, constructed.clean.title.length), constructed.clean.title);
      assert.deepEqual(ctx.sentences.slice(0, constructed.clean.title.length), constructed.clean.sentences);
      const input = { question: sample.row.question, context: ctx };
      assert.deepEqual(Object.keys(input).sort(), ['context', 'question']);
      const requestText = JSON.stringify(buildFullContextPrompt(input));
      for (const label of ['"goldAnswer"', '"expectedAnswer"', '"rationale"', 'REVIEW ONLY', 'Irrelevance review:'])
        assert.ok(!requestText.includes(label));
      assert.ok(!requestText.includes(sample.fixture.rationale));
      assert.ok(!requestText.includes(sample.fixture.irrelevant.review.rationale));
    }
    assert.deepEqual(sample.row, before);
    assert.ok(constructed.clean.title.every(t => sample.row.supporting_facts.title.includes(t)));
    assert.equal(constructed.irrelevant.title.length, constructed.clean.title.length + 1);
    assert.equal(constructed.conflicting.title.length, constructed.clean.title.length + 1);
  }
});

test('twenty distinct curated unrelated passages are 70–100 words and contain no answers or evidence subjects', () => {
  const expectedTopics = ['Basalt textures', 'Bread dough structure', 'Rocky shore pools', 'Book binding materials',
    'Leaf gas exchange', 'Pottery glaze surfaces', 'Cloud droplets', 'Honeycomb structure', 'Sand dune movement',
    'Garden compost', 'Watercolor washes', 'Wood joints', 'Knitted fabric loops', 'Seed dispersal', 'Coral reef shelter',
    'Soap film colors', 'Basket weaving', 'Snow crystal growth', 'Ceramic tile setting', 'Mushroom gills'];
  assert.deepEqual(pilot.samples.map(s => s.fixture.irrelevant.title), expectedTopics);
  assert.equal(new Set(pilot.samples.map(s => s.fixture.irrelevant.sentences.join(' '))).size, 20);
  for (const s of pilot.samples) {
    const irrelevant = s.fixture.irrelevant;
    const text = normalizeAnswer(irrelevant.title + ' ' + irrelevant.sentences.join(' '));
    assert.ok(!text.includes(normalizeAnswer(s.row.answer)));
    for (const title of s.contexts.clean.title) assert.ok(!text.includes(normalizeAnswer(title)));
    assert.deepEqual(s.contexts.irrelevant.sentences.at(-1), irrelevant.sentences);
    assert.ok(words(s.fixture.sentences.join(' ')) >= 60 && words(s.fixture.sentences.join(' ')) <= 100);
    assert.ok(words(irrelevant.sentences.join(' ')) >= 70 && words(irrelevant.sentences.join(' ')) <= 100);
    assert.equal(irrelevant.review.status, 'agent-reviewed');
    assert.ok(irrelevant.review.rationale.length > 30);
  }
  // Each topic/claim was read against its paired question and complete gold passages.
  // These craft/natural-process descriptions assert nothing about those named subjects.
  // The lexical guards supplement this review; they do not prove general semantic irrelevance.
});

test('question 13 replaces the Russian Civil War case with complete, unambiguous Tosca evidence', () => {
  assert.ok(!pilot.samples.some(s => s.fixture.rowIndex === 35 || s.row.id === '5abf63f15542997ec76fd3ea'));
  const s = pilot.samples[12];
  assert.equal(s.row.id, '5a87c13f5542996e4f30890c');
  assert.equal(s.row.answer, 'Rome');
  assert.deepEqual(s.row.supporting_facts, { title: ['Tosca (1956 film)', 'Franco Corelli'], sent_id: [2, 2] });
  assert.match(s.contexts.clean.sentences[s.contexts.clean.title.indexOf('Tosca (1956 film)')][0], /Franco Corelli/);
  assert.match(s.fixture.sourceSentence, /made at Cinecittà in Rome/);
  assert.match(s.fixture.sentences[0], /production location was Milan rather than Rome/);
});

test('Apple Remote grammar is corrected while its keyboard contradiction is preserved', () => {
  const s = pilot.samples.find(s => s.fixture.rowIndex === 22)!;
  assert.match(s.fixture.sentences[0], /controlled by an Apple Remote or a USB game controller/);
  assert.ok(!s.fixture.sentences.join(' ').includes('the a USB'));
  assert.match(s.fixture.sentences[0], /Keyboard function keys cannot control this program/);
});

test('all 20 reviewed contradictions target exclusive answer-relevant relations, not arbitrary changed words', () => {
  // Independent semantic expectations: target row, false value, relation that must be exclusive.
  const expected = [
    [1, 'Secretary of the Treasury', 'Chief of Protocol'], [4, 'Albany, New York', 'Greenwich Village, New York City'],
    [5, 'SM Entertainment', 'YG Entertainment'], [7, '2,500 seated', '3,677 seated'],
    [12, '2001', '1999'], [14, 'from 1988 to 2011', 'from 1986 to 2013'],
    [16, 'Northern Athletic Conference', 'North Atlantic Conference'], [18, '1968 until 1973', '1969 until 1974'],
    [22, 'a USB game controller', 'keyboard function keys'], [24, "World's Best Defender", "World's Best Goalkeeper"],
    [26, '1848', '1838'], [31, 'Sapporo, Hokkaido', 'Fujioka, Gunma'],
    [53, 'Milan', 'Rome'], [36, '2004', '2000'], [39, 'Boston', 'New York City'],
    [41, 'Bengaluru', 'Mumbai'], [42, '1968', '1962'], [51, '1,162', '1,462'], [58, '45,124', '35,124'], [63, '921', '821'],
  ];
  for (const [i, s] of pilot.samples.entries()) {
    const [row, wrong, correct] = expected[i];
    assert.equal(s.fixture.rowIndex, row);
    assert.equal(s.fixture.trueValue, correct);
    assert.equal(s.fixture.falseValue, wrong);
    assert.ok(s.fixture.sourceSentence.includes(String(correct)));
    assert.ok(s.fixture.sentences[0].includes(String(wrong)));
    let expectedClaim = s.fixture.sourceSentence.replace(String(correct), String(wrong)).trim();
    if (row === 1) expectedClaim += ' She did not serve as Chief of Protocol.';
    if (row === 22) expectedClaim = expectedClaim.replace('the a USB game controller', 'a USB game controller') + ' Keyboard function keys cannot control this program.';
    if (row === 24) expectedClaim += " He did not receive the World's Best Goalkeeper award in those years.";
    if (row === 39) expectedClaim = 'Columbia University, established in 1754, has its main campus in Boston, Massachusetts. Its main campus is not in New York City.';
    if (row === 41) expectedClaim = expectedClaim.replace('Bengaluru, Maharashtra', 'Bengaluru, Karnataka');
    if (row === 53) expectedClaim = 'Tosca, the 1956 film starring Franco Corelli, was made in Milan. Its production location was Milan rather than Rome.';
    assert.equal(s.fixture.sentences[0], expectedClaim);
    assert.ok(s.fixture.rationale.length > 30);
    assert.equal(s.fixture.review.status, 'agent-reviewed');
  }
  assert.match(pilot.samples[0].fixture.sentences[0], /did not serve as Chief of Protocol/);
  assert.match(pilot.samples[8].fixture.sentences[0], /Keyboard function keys cannot control/);
  assert.match(pilot.samples[9].fixture.sentences[0], /did not receive the World's Best Goalkeeper/);
  assert.match(pilot.samples[14].fixture.sentences[0], /not in New York City/);
});

test('fixture construction, committed fixture regeneration, and manifests are deterministic', async () => {
  const again = await loadPilot();
  assert.deepEqual(again, pilot);
  const fixtureBytes = await readFile(new URL('fixtures.json', ROOT), 'utf8');
  const rows = await new ParquetFileReader({ filePath: 'data/distractor-validation.parquet' }).read(64);
  const regenerated = { version: 'pilot-v2', fixtures: createFixtures(rows) };
  assert.equal(JSON.stringify(regenerated, null, 2) + '\n', fixtureBytes);
  assert.deepEqual(createFixtures(rows), createFixtures(rows));
  for (const s of pilot.samples) assert.deepEqual(variants(s.row, s.fixture), variants(s.row, s.fixture));
  assert.equal(JSON.stringify(JSON.parse(fixtureBytes), null, 2) + '\n', fixtureBytes);
});

test('invalid fixture, unsupported evidence and title collisions fail closed', () => {
  const s = pilot.samples[0];
  assert.throws(() => variants(s.row, { ...s.fixture, goldAnswer: 'wrong' }));
  assert.throws(() => variants(s.row, { ...s.fixture, sentenceId: 999 }));
  assert.throws(() => variants(s.row, { ...s.fixture, title: s.contexts.clean.title[0] }));
  assert.throws(() => variants(s.row, { ...s.fixture, review: { status: 'unreviewed', method: '' } }));
  assert.throws(() => variants(s.row, { ...s.fixture, irrelevant: { ...s.fixture.irrelevant,
    sentences: [s.fixture.irrelevant.sentences[0] + ' ' + s.row.answer] } }), /contains answer/);
  assert.throws(() => variants(s.row, { ...s.fixture, irrelevant: { ...s.fixture.irrelevant,
    sentences: ['Too short.'] } }), /70–100/);
});

test('estimate counts one Full Context request per condition/question/repetition', () => {
  assert.equal(estimate(pilot.samples, 1).requests, 60);
  assert.equal(estimate(pilot.samples, 3).requests, 180);
  assert.ok(Math.abs(estimate(pilot.samples, 3).estimatedUSD - estimate(pilot.samples, 1).estimatedUSD * 3) < 1e-12);
});

test('Full Context adapter applies identical explicit settings and omits reference labels with one mocked request', async t => {
  const names = ['OPENROUTER_MODEL', 'OPENROUTER_PROVIDER', 'OPENROUTER_API_KEY'] as const;
  const old = names.map(n => process.env[n]);
  process.env.OPENROUTER_MODEL = SETTINGS.model;
  process.env.OPENROUTER_PROVIDER = SETTINGS.provider;
  process.env.OPENROUTER_API_KEY = 'offline-placeholder';
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async (_url: unknown, init: RequestInit | undefined) => {
    requests++;
    const payload = JSON.parse(init!.body as string);
    assert.equal(payload.temperature, 0);
    assert.equal(payload.max_tokens, 1024);
    assert.deepEqual(payload.provider, { only: [SETTINGS.provider], allow_fallbacks: false, require_parameters: true });
    assert.ok(!JSON.stringify(payload).includes('PRIVATE_REFERENCE'));
    return new Response(JSON.stringify({ model: SETTINGS.model, provider: 'Google AI Studio',
      usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15, cost: 0.00001 },
      choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: JSON.stringify({ answer: 'x', supporting_facts: [] }) } }] }),
    { status: 200, headers: { 'Content-Type': 'application/json' } });
  });
  const mocked = globalThis.fetch;
  try {
    const response = await answerWithControls({ question: 'Example?', context: { title: ['Source'], sentences: [['Fact.']] },
      ...{ goldAnswer: 'PRIVATE_REFERENCE' } });
    assert.equal(requests, 1);
    assert.equal(response.result.status, 'completed');
    assert.equal(response.result.modelCalls.length, 1);
    assert.equal(response.result.usage?.total_tokens, 15);
    assert.equal(response.payloads[0].temperature, 0);
    assert.equal(globalThis.fetch, mocked);
  } finally { names.forEach((n, i) => { if (old[i] === undefined) delete process.env[n]; else process.env[n] = old[i]; }); }
});

test('model failures preserve unknown usage, stop without retry, and restore transport', async t => {
  const names = ['OPENROUTER_MODEL', 'OPENROUTER_PROVIDER', 'OPENROUTER_API_KEY'] as const;
  const old = names.map(n => process.env[n]);
  process.env.OPENROUTER_MODEL = SETTINGS.model;
  process.env.OPENROUTER_PROVIDER = SETTINGS.provider;
  process.env.OPENROUTER_API_KEY = 'offline-placeholder';
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    requests++;
    return new Response(JSON.stringify({ error: { message: 'offline failure' } }),
      { status: 500, headers: { 'Content-Type': 'application/json' } });
  });
  const mocked = globalThis.fetch;
  try {
    const { result } = await answerWithControls({ question: 'Example?', context: { title: ['Source'], sentences: [['Fact.']] } });
    assert.equal(requests, 1);
    assert.equal(result.status, 'failed');
    assert.equal(result.usage, null);
    assert.equal(globalThis.fetch, mocked);
  } finally { names.forEach((n, i) => { if (old[i] === undefined) delete process.env[n]; else process.env[n] = old[i]; }); }
});

const scores = { answerCorrectness: 'Y' as const, exactMatch: 1 as const, tokenF1: 1, citationPrecision: 1, citationRecall: 1, citationF1: 1 };
const record = (overrides: Partial<NoiseRecord> = {}): NoiseRecord => ({ runId: 'offline', manifestHash: 'hash', questionId: 'q1',
  question: 'Q?', expectedAnswer: 'yes', strategy: 'full_context', condition: 'clean', repetition: 1,
  model: SETTINGS.model, dataset: 'distractor', status: 'completed', scores, output: { answer: 'yes' },
  endToEndLatencyMs: 10, usage: { prompt_tokens: 10, completion_tokens: 5, total_tokens: 15, cost: 0.01 }, ...overrides });

test('comparison includes all conditions and paired question changes without fabricating missing metrics', () => {
  const records = [record(), record({ condition: 'irrelevant', scores: { ...scores, exactMatch: 0, answerCorrectness: 'N', citationF1: 0.5 }, endToEndLatencyMs: 14 }),
    record({ condition: 'conflicting', status: 'failed', scores: null, usage: null })];
  const report = compare(records, ['q1'], 1);
  assert.equal(report.aggregate[0].summary?.answerAccuracy, 1);
  assert.equal(report.aggregate[1].summary?.answerAccuracy, 0);
  assert.equal(report.aggregate[2].summary?.cost.totalReported, null);
  assert.equal(report.perQuestion[0].pairedChanges[0].accuracyDelta, -1);
  assert.equal(report.perQuestion[0].pairedChanges[0].citationF1Delta, -0.5);
  assert.equal(report.perQuestion[0].pairedChanges[0].latencyMsDelta.mean, 4);
  assert.equal(report.perQuestion[0].pairedChanges[1].completedPairs, 0);
  assert.match(renderReport(compare([], ['q1'], 1)), /0\/1/);
  assert.throws(() => compare([record(), record()], ['q1'], 1));
  assert.throws(() => compare([record(), record({ runId: 'other', condition: 'irrelevant' })], ['q1'], 1));
});

test('dry-run cannot make network calls; live requires exact reviewed manifest before model requests', async t => {
  t.mock.method(globalThis, 'fetch', async () => { assert.fail('Network forbidden in offline validation'); });
  t.mock.method(console, 'log', () => {});
  await main(['--dry-run']);
  const contexts = JSON.parse(await readFile(new URL('artifacts/contexts.json', ROOT), 'utf8'));
  assert.equal(contexts.length, 20);
  assert.deepEqual(contexts.map((s: { questionId: string }) => s.questionId), pilot.manifest.questionIds);
  for (const sample of contexts) assert.deepEqual(Object.keys(sample.contexts), [...CONDITIONS]);
  const review = await readFile(new URL('artifacts/review.txt', ROOT), 'utf8');
  assert.ok(!review.includes('Russian Civil War'));
  assert.ok(!review.includes('the a USB game controller'));
  assert.equal((review.match(/Irrelevance review:/g) ?? []).length, 20);
  const plan = JSON.parse(await readFile(new URL('artifacts/plan.json', ROOT), 'utf8'));
  assert.equal(plan.manifestHash, pilot.manifestHash);
  await assert.rejects(main(['--live', '--reviewed-manifest', 'invalid']), /review/i);
});
