import { randomUUID } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile, appendFile } from 'node:fs/promises';
import { performance } from 'node:perf_hooks';
import { parseArgs } from 'node:util';
import { formatContext } from '../../src/buildPrompt.ts';
import { evaluateResult } from '../../src/evaluation.ts';
import { getUsage } from '../../src/usage.ts';
import { CONDITIONS, SETTINGS, ROOT, loadPilot, estimate, hash, requireValid, words } from './pilot.ts';
import { answerWithControls } from './answer.ts';
import { writeReport, type NoiseRecord } from './report.ts';

export async function main(args = process.argv.slice(2)) {
  const { values } = parseArgs({ args, options: { 'dry-run': { type: 'boolean' }, live: { type: 'boolean' },
    repetitions: { type: 'string', default: '1' }, 'reviewed-manifest': { type: 'string' } } });
  requireValid(!(values.live && values['dry-run']), 'Choose dry-run or live');
  const repetitions = Number(values.repetitions);
  requireValid(Number.isSafeInteger(repetitions) && repetitions > 0, 'Invalid repetitions');
  const branch = execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim();
  requireValid(branch === 'clean-vs-noisy-context', 'Run only on clean-vs-noisy-context');
  const pilot = await loadPilot();
  const budget = estimate(pilot.samples, repetitions);
  const plan = { manifest: pilot.manifest, manifestHash: pilot.manifestHash, repetitions, budget,
    sourceCommit: execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim(),
    order: 'Question order fixed; condition order rotates by question index plus repetition index to limit order bias.' };
  console.log(JSON.stringify({ mode: values.live ? 'live' : 'dry-run', ...plan }, null, 2));
  if (!values.live) {
    const directory = new URL('artifacts/', ROOT);
    await mkdir(directory, { recursive: true });
    await writeFile(new URL('plan.json', directory), JSON.stringify(plan, null, 2) + '\n');
    await writeFile(new URL('contexts.json', directory), JSON.stringify(pilot.samples.map(s => ({
      questionId: s.row.id, question: s.row.question, contexts: s.contexts,
      addedWordCounts: { irrelevant: words(s.contexts.irrelevant.sentences.at(-1)!.join(' ')),
        conflicting: words(s.contexts.conflicting.sentences.at(-1)!.join(' ')) } })), null, 2) + '\n');
    const review = pilot.samples.map(s => `QUESTION ${s.row.id}\n${s.row.question}\n\n` +
      CONDITIONS.map(c => `CONDITION ${c}\n${formatContext(s.contexts[c])}`).join('\n\n') +
      `\n\nREVIEW ONLY: ${s.fixture.rationale}\nOriginal: ${s.fixture.sourceSentence}\nChanged claim: ${s.fixture.sentences[0]}\nIrrelevance review: ${s.fixture.irrelevant.review.rationale}\n` ).join('\n\n');
    await writeFile(new URL('review.txt', directory), review);
    await writeReport(directory, [], pilot.manifest.questionIds, repetitions);
    // A compact example is printed; every complete context is in review.txt and contexts.json.
    const sample = pilot.samples.find(s => s.fixture.rowIndex === 26)!;
    console.log(`SAMPLE QUESTION: ${sample.row.question}`);
    for (const c of CONDITIONS) console.log(`\n${c.toUpperCase()}\n${formatContext(sample.contexts[c])}`);
    console.log(`\nOffline artifacts: experiments/context-noise/artifacts/\nManifest: ${pilot.manifestHash}`);
    return;
  }
  requireValid(values['reviewed-manifest'] === pilot.manifestHash, 'Review dry-run fixtures and supply the exact --reviewed-manifest hash');
  requireValid(process.env.OPENROUTER_API_KEY?.trim(), 'Missing OPENROUTER_API_KEY');
  // Pin configuration locally rather than changing the shared model client or .env.
  process.env.OPENROUTER_MODEL = SETTINGS.model;
  process.env.OPENROUTER_PROVIDER = SETTINGS.provider;
  const runId = randomUUID();
  const directory = new URL(`results/${runId}/`, ROOT);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('plan.json', directory), JSON.stringify(plan, null, 2) + '\n');
  await writeFile(new URL('runs.jsonl', directory), '');
  const records: NoiseRecord[] = [];
  try {
    for (const [index, sample] of pilot.samples.entries()) {
      for (let repetition = 1; repetition <= repetitions; repetition++) {
        const offset = (index + repetition - 1) % CONDITIONS.length;
        const order = [...CONDITIONS.slice(offset), ...CONDITIONS.slice(0, offset)];
        for (const condition of order) {
          const input = { question: sample.row.question, context: sample.contexts[condition] };
          const started = performance.now();
          const { result, payloads } = await answerWithControls(input);
          const endToEndLatencyMs = performance.now() - started;
          // Persist only credential-free request bodies and selected measurement fields.
          const record: NoiseRecord = {
            runId, manifestHash: pilot.manifestHash, strategy: 'full_context', condition, repetition,
            dataset: pilot.manifest.dataset, questionId: sample.row.id, question: input.question,
            expectedAnswer: sample.row.answer, expectedSupportingFacts: sample.row.supporting_facts,
            settings: SETTINGS, model: result.model, provider: result.provider, cacheMode: result.cacheMode,
            status: result.status, error: result.error, output: result.output,
            scores: result.status === 'completed' ? evaluateResult(result.output, sample.row) : null,
            startedAt: result.startedAt, latencyMs: result.latencyMs, endToEndLatencyMs,
            usage: result.usage, modelCalls: result.modelCalls.map(c => ({ usage: getUsage(c), latencyMs: c.latencyMs })),
            requests: payloads, contextHash: hash(input.context), warnings: result.warnings,
          };
          await appendFile(new URL('runs.jsonl', directory), JSON.stringify(record) + '\n');
          records.push(record);
          console.log(JSON.stringify({ runId, questionId: record.questionId, condition, repetition, status: record.status }));
          requireValid(result.status === 'completed', 'Attempt failed; stopped without retry. Partial report will be saved.');
        }
      }
    }
  } finally { await writeReport(directory, records, pilot.manifest.questionIds, repetitions); }
}

if (import.meta.main) main().catch(() => {
  // Do not echo arbitrary transport errors or environment values.
  console.error('Context-noise command stopped. Check arguments, branch, dataset, reviewed manifest, or saved attempt status. No automatic retries.');
  process.exitCode = 1;
});
