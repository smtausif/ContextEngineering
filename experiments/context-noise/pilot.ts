import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ParquetFileReader } from '../../src/ParquetFileReader.ts';
import { prepareData } from '../../src/loadData.ts';
import { normalizeAnswer } from '../../src/evaluation.ts';
import { buildFullContextPrompt } from '../../src/strategies/full-context/fullContext.ts';
import type { Context, TrainData } from '../../src/schema.ts';

export const ROOT = new URL('./', import.meta.url);
export const DATASET = new URL('../../data/distractor-validation.parquet', import.meta.url);
export const CONDITIONS = ['clean', 'irrelevant', 'conflicting'] as const;
export type Condition = typeof CONDITIONS[number];
export const SETTINGS = { model: 'google/gemini-3.1-flash-lite', provider: 'google-ai-studio',
  temperature: 0, max_tokens: 1024 } as const;
export const PRICING = { checked: '2026-11-23', inputPerMillionUSD: 0.25, outputPerMillionUSD: 1.50,
  source: 'https://openrouter.ai/google/gemini-3.1-flash-lite',
  availability: 'Public model/provider listing verified; account access and inference not tested.' };

export type Fixture = { questionId: string; rowIndex: number; question: string; goldAnswer: string;
  evidenceTitle: string; sentenceId: number; sourceSentence: string; trueValue: string; falseValue: string;
  title: string; sentences: string[]; rationale: string; review: { status: string; method: string };
  irrelevant: { title: string; sentences: string[]; review: { status: string; rationale: string } } };
export const hash = (value: unknown) => createHash('sha256').update(JSON.stringify(value)).digest('hex');
export const words = (text: string) => text.trim().split(/\s+/).length;
export function requireValid(ok: unknown, message: string): asserts ok {
  if (!ok) throw new Error(message);
}

/** Gold labels are used only for offline selection and validation, never passed to answering. */
export function variants(row: TrainData, fixture: Fixture): Record<Condition, Context> {
  requireValid(row.id === fixture.questionId && row.question === fixture.question && row.answer === fixture.goldAnswer,
    'Fixture no longer matches dataset');
  prepareData([row]);
  const indices = row.context.title.flatMap((title, i) => row.supporting_facts.title.includes(title) ? [i] : []);
  const clean = { title: indices.map(i => row.context.title[i]), sentences: indices.map(i => [...row.context.sentences[i]]) };
  const source = row.context.sentences[row.context.title.indexOf(fixture.evidenceTitle)]?.[fixture.sentenceId];
  requireValid(source === fixture.sourceSentence && source.includes(fixture.trueValue), 'Evidence changed');
  requireValid(row.supporting_facts.title.some((t, i) => t === fixture.evidenceTitle && row.supporting_facts.sent_id[i] === fixture.sentenceId),
    'Contradiction must target labeled evidence');
  requireValid(fixture.review.status === 'agent-reviewed' && fixture.rationale.length > 30, 'Missing semantic review');
  requireValid(fixture.trueValue !== fixture.falseValue && fixture.sentences[0].includes(fixture.falseValue), 'Invalid replacement');
  const irrelevant = fixture.irrelevant;
  requireValid(irrelevant.review.status === 'agent-reviewed' && irrelevant.review.rationale.length > 30, 'Missing irrelevance review');
  requireValid(words(irrelevant.sentences.join(' ')) >= 70 && words(irrelevant.sentences.join(' ')) <= 100, 'Irrelevant passage must be 70–100 words');
  const irrelevantText = normalizeAnswer(irrelevant.title + ' ' + irrelevant.sentences.join(' '));
  requireValid(!irrelevantText.includes(normalizeAnswer(row.answer)), 'Irrelevant text contains answer');
  // Conservative lexical guard plus curated topic review; lexical tests alone cannot prove irrelevance.
  requireValid(!clean.title.some(title => irrelevantText.includes(normalizeAnswer(title))), 'Irrelevant text mentions evidence subject');
  const append = (extra: { title: string; sentences: string[] }): Context => {
    requireValid(!clean.title.includes(extra.title), 'Added title collision');
    return { title: [...clean.title, extra.title], sentences: [...clean.sentences.map(s => [...s]), [...extra.sentences]] };
  };
  return { clean, irrelevant: append(irrelevant), conflicting: append(fixture) };
}

export async function loadPilot() {
  const fixtureText = await readFile(new URL('fixtures.json', ROOT), 'utf8');
  const { version, fixtures } = JSON.parse(fixtureText) as { version: string; fixtures: Fixture[] };
  requireValid(fixtures.length === 20 && new Set(fixtures.map(f => f.questionId)).size === 20, 'Pilot requires 20 unique fixtures');
  requireValid(new Set(fixtures.map(f => f.irrelevant.title)).size === 20 &&
    new Set(fixtures.map(f => f.irrelevant.sentences.join(' '))).size === 20, 'Pilot requires 20 distinct unrelated passages');
  const rows = await new ParquetFileReader({ filePath: fileURLToPath(DATASET) }).read();
  const eligible = rows.filter(row => {
    try { prepareData([row]); return new Set(row.context.title).size === row.context.title.length; } catch { return false; }
  });
  requireValid(new Set(rows.map(r => r.id)).size === rows.length, 'Duplicate dataset IDs');
  const samples = fixtures.map(fixture => {
    const row = rows[fixture.rowIndex];
    requireValid(eligible.some(r => r.id === fixture.questionId), 'Selected question is not eligible');
    return { row, fixture, contexts: variants(row, fixture) };
  });
  const datasetHash = createHash('sha256').update(await readFile(DATASET)).digest('hex');
  const implementationFiles = ['pilot.ts', 'answer.ts', 'run.ts', 'report.ts', 'create-fixtures.ts', 'irrelevant.ts', '../../src/buildPrompt.ts',
    '../../src/callModel.ts', '../../src/evaluation.ts', '../../src/schema.ts', '../../src/usage.ts',
    '../../src/results.ts', '../../src/strategies/full-context/fullContext.ts', '../../src/summarizeResults.ts',
    '../../src/loadData.ts', '../../src/ParquetFileReader.ts', '../../package-lock.json'];
  const implementationHashes = Object.fromEntries(await Promise.all(implementationFiles.map(async path =>
    [path, createHash('sha256').update(await readFile(new URL(path, ROOT))).digest('hex')])));
  const manifest = { version, dataset: 'data/distractor-validation.parquet', datasetHash,
    implementationHashes,
    datasetRows: rows.length, supportEligibleRows: eligible.length, selectedQuestions: samples.length,
    questionIds: samples.map(s => s.row.id), fixtureHash: hash(JSON.parse(fixtureText)), settings: SETTINGS,
    irrelevantHash: hash(fixtures.map(f => f.irrelevant)), contextHashes: samples.map(s => ({ id: s.row.id,
      ...Object.fromEntries(CONDITIONS.map(c => [c, hash(s.contexts[c])])) })) };
  return { samples, manifest, manifestHash: hash(manifest) };
}

export function estimate(samples: Awaited<ReturnType<typeof loadPilot>>['samples'], repetitions: number) {
  const byCondition = CONDITIONS.map(condition => {
    const requests = samples.length * repetitions;
    // Transparent heuristic, not a model tokenizer or billing quote. Includes prompt and schema allowance.
    const inputTokens = samples.reduce((n, s) => n + Math.ceil(JSON.stringify(buildFullContextPrompt({
      question: s.row.question, context: s.contexts[condition] })).length / 4) + 200, 0) * repetitions;
    const outputTokens = requests * 256;
    return { condition, requests, estimatedInputTokens: inputTokens, assumedOutputTokens: outputTokens,
      estimatedUSD: (inputTokens * PRICING.inputPerMillionUSD + outputTokens * PRICING.outputPerMillionUSD) / 1e6,
      outputAllowanceScenarioUSD: (inputTokens * PRICING.inputPerMillionUSD + requests * SETTINGS.max_tokens * PRICING.outputPerMillionUSD) / 1e6 };
  });
  return { pricing: PRICING, repetitions, byCondition,
    requests: byCondition.reduce((n, c) => n + c.requests, 0),
    estimatedUSD: byCondition.reduce((n, c) => n + c.estimatedUSD, 0),
    outputAllowanceScenarioUSD: byCondition.reduce((n, c) => n + c.outputAllowanceScenarioUSD, 0),
    caveat: 'Characters/4 plus 200 input tokens/request; 256 output tokens/request assumed. 1024-token output scenario is not a guaranteed cost cap. No cache discounts or account fees assumed. Actual usage/cost may differ.' };
}
