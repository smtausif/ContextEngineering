import { readFile, writeFile } from 'node:fs/promises';
import { parseArgs } from 'node:util';
import { summarizeResults, parseResults } from '../../src/summarizeResults.ts';
import type { SavedResult, Scores } from '../../src/schema.ts';
import { CONDITIONS, requireValid, ROOT, type Condition } from './pilot.ts';
import { getUsage } from '../../src/usage.ts';

export type NoiseRecord = SavedResult & { condition: Condition; repetition: number; manifestHash: string;
  question: string; expectedAnswer: string; endToEndLatencyMs: number; scores: Scores | null };

export function compare(records: NoiseRecord[], questionIds: string[], repetitions: number) {
  requireValid(new Set(records.map(r => r.runId)).size <= 1 && new Set(records.map(r => r.manifestHash)).size <= 1,
    'Reports must contain one run and manifest');
  const keys = records.map(r => `${r.questionId}/${r.condition}/${r.repetition}`);
  requireValid(new Set(keys).size === keys.length, 'Duplicate attempt');
  for (const r of records) requireValid(CONDITIONS.includes(r.condition) && questionIds.includes(r.questionId) &&
    Number.isSafeInteger(r.repetition) && r.repetition >= 1 && r.repetition <= repetitions, 'Unexpected attempt');
  const aggregate = CONDITIONS.map(condition => {
    const selected = records.filter(r => r.condition === condition);
    const summaries = summarizeResults(selected);
    requireValid(summaries.length <= 1, 'Mixed model/settings in condition');
    return { condition, plannedAttempts: questionIds.length * repetitions,
      missingAttempts: questionIds.length * repetitions - selected.length, summary: summaries[0] ?? null };
  });
  const perQuestion = questionIds.map(questionId => {
    const cells = CONDITIONS.map(condition => {
      const selected = records.filter(r => r.questionId === questionId && r.condition === condition);
      return { condition, answers: selected.map(r => ({ repetition: r.repetition, status: r.status, answer: r.output })),
        summary: summarizeResults(selected)[0] ?? null };
    });
    const pairedChanges = (['irrelevant', 'conflicting'] as const).map(condition => {
      const pairs = records.filter(r => r.questionId === questionId && r.condition === condition && r.status === 'completed' && r.scores)
        .flatMap(noisy => {
          const clean = records.find(r => r.questionId === questionId && r.condition === 'clean' && r.repetition === noisy.repetition && r.status === 'completed' && r.scores);
          return clean ? [{ clean, noisy }] : [];
        });
      const signed = (metric: 'exactMatch' | 'tokenF1' | 'citationF1') => pairs.length
        ? pairs.reduce((n, p) => n + p.noisy.scores![metric] - p.clean.scores![metric], 0) / pairs.length : null;
      const difference = (field: (r: NoiseRecord) => number | null | undefined) => {
        const diffs = pairs.flatMap(p => { const a = field(p.clean), b = field(p.noisy); return a == null || b == null ? [] : [b - a]; });
        return { measuredPairs: diffs.length, mean: diffs.length ? diffs.reduce((a, b) => a + b, 0) / diffs.length : null };
      };
      return { condition, completedPairs: pairs.length, accuracyDelta: signed('exactMatch'), answerF1Delta: signed('tokenF1'),
        citationF1Delta: signed('citationF1'), latencyMsDelta: difference(r => r.endToEndLatencyMs),
        inputTokensDelta: difference(r => getUsage(r)?.prompt_tokens),
        outputTokensDelta: difference(r => getUsage(r)?.completion_tokens),
        totalTokensDelta: difference(r => getUsage(r)?.total_tokens),
        costUSDDelta: difference(r => getUsage(r)?.cost) };
    });
    return { questionId, cells, pairedChanges };
  });
  return { aggregate, perQuestion };
}

export function renderReport(report: ReturnType<typeof compare>) {
  const show = (v: number | null | undefined) => v == null ? '—' : Number(v.toFixed(6)).toString();
  const rows = report.aggregate.map(({ condition, plannedAttempts, missingAttempts, summary: s }) =>
    `| ${condition} | ${plannedAttempts - missingAttempts}/${plannedAttempts} | ${s?.scoredAttempts ?? 0} | ${s?.failed ?? 0} | ${show(s?.answerAccuracy)} | ${show(s?.answerF1)} | ${show(s?.citationF1)} | ${show(s?.endToEndLatency.meanMs)} | ${show(s?.tokens.prompt)} | ${show(s?.tokens.completion)} | ${show(s?.tokens.total)} | ${show(s?.cost.totalReported)} |`);
  return ['# Clean versus noisy context pilot', '',
    'No live measurements are implied by empty cells. Accuracy and F1 range from 0 to 1. Costs are provider-reported USD; missing costs remain unknown. Latency includes measured failures. Quality includes only completed, scored attempts. Token and cost totals include failed calls when reported.', '',
    '| Condition | Attempts/planned | Scored | Failed | Accuracy | Answer F1 | Citation F1 | Mean end-to-end ms | Input tokens | Output tokens | Total tokens | Cost USD |',
    '|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|', ...rows, '',
    'Per-question paired changes below are noisy minus clean for the same repetition. Failed or missing pairs are excluded and coverage is shown. Full answers, token/cost changes, missing measurements, and mean/median latency are in comparison.json.', '',
    '| Question ID | Irrelevant Δaccuracy | Irrelevant Δcitation F1 | Pairs | Conflicting Δaccuracy | Conflicting Δcitation F1 | Pairs |',
    '|---|---:|---:|---:|---:|---:|---:|',
    ...report.perQuestion.map(q => `| ${q.questionId} | ${show(q.pairedChanges[0].accuracyDelta)} | ${show(q.pairedChanges[0].citationF1Delta)} | ${q.pairedChanges[0].completedPairs} | ${show(q.pairedChanges[1].accuracyDelta)} | ${show(q.pairedChanges[1].citationF1Delta)} | ${q.pairedChanges[1].completedPairs} |`), '',
    'Interpretation limits: 20 purposively selected questions, one distinct curated unrelated passage per question, synthetic contradictions, fixed appended noise, complete gold-selected passages, and possible automatic provider caching. This is a controlled pilot, not a representative estimate for all HotpotQA questions. No significance claim is made.', ''].join('\n');
}

export async function writeReport(directory: URL, records: NoiseRecord[], questionIds: string[], repetitions: number) {
  const report = compare(records, questionIds, repetitions);
  await writeFile(new URL('comparison.json', directory), JSON.stringify(report, null, 2) + '\n');
  await writeFile(new URL('comparison.md', directory), renderReport(report));
}

if (import.meta.main) {
  const { values } = parseArgs({ options: { run: { type: 'string' } } });
  requireValid(values.run && /^[a-zA-Z0-9-]+$/.test(values.run), 'Use --run RUN_ID');
  const directory = new URL(`results/${values.run}/`, ROOT);
  const plan = JSON.parse(await readFile(new URL('plan.json', directory), 'utf8'));
  const records = parseResults(await readFile(new URL('runs.jsonl', directory), 'utf8')) as NoiseRecord[];
  requireValid(records.every(r => r.manifestHash === plan.manifestHash), 'Manifest mismatch');
  await writeReport(directory, records, plan.manifest.questionIds, plan.repetitions);
  console.log('Wrote isolated comparison report.');
}
