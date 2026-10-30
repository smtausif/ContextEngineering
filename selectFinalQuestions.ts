import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { ParquetFileReader } from './ParquetFileReader.ts';
import { normalizeAnswer } from './evaluation.ts';
import type { TrainData } from './schema.ts';

export const SELECTION_SEED = 'context-engineering-final-50-v1';
export const ANCHOR_ID = '5a7a06935542990198eaf050';
export const SELECTION_DATASET = 'data/train-00000-of-00002.parquet';
export const STRATUM_QUOTAS = {
  'bridge/easy': 10, 'bridge/medium': 10, 'bridge/hard': 10,
  'comparison/easy': 7, 'comparison/medium': 7, 'comparison/hard': 6,
} as const;
type Stratum = keyof typeof STRATUM_QUOTAS;
export interface FrozenQuestion {
  selectionPosition: number;
  questionId: string;
  type: string;
  difficulty: string;
}
export const sha256 = (text: string) => createHash('sha256').update(text).digest('hex');
const compareText = (a: string, b: string) => a < b ? -1 : a > b ? 1 : 0;

/** Structural validation of dataset gold labels, not independent semantic fact-checking. */
export function validateQuestion(row: TrainData): string[] {
  const reasons = new Set<string>();
  if (typeof row.id !== 'string' || !row.id.trim()) reasons.add('invalid_id');
  if (typeof row.question !== 'string' || !row.question.trim()) reasons.add('empty_question');
  if (typeof row.answer !== 'string' || !row.answer.trim() || !normalizeAnswer(row.answer)) reasons.add('invalid_expected_answer');
  if (!Object.hasOwn(STRATUM_QUOTAS, `${row.type}/${row.level}`)) reasons.add('unsupported_category');
  const context = row.context;
  if (!context || !Array.isArray(context.title) || !Array.isArray(context.sentences) ||
    !context.title.length || context.title.length !== context.sentences.length ||
    context.title.some(title => typeof title !== 'string' || !title.trim()) ||
    context.sentences.some(sentences => !Array.isArray(sentences) || sentences.some(sentence => typeof sentence !== 'string'))) {
    reasons.add('invalid_context');
  } else if (new Set(context.title).size !== context.title.length) reasons.add('duplicate_context_title');
  const facts = row.supporting_facts;
  if (!facts || !Array.isArray(facts.title) || !Array.isArray(facts.sent_id) ||
    !facts.title.length || facts.title.length !== facts.sent_id.length) reasons.add('invalid_supporting_facts');
  else if (!reasons.has('invalid_context')) {
    for (let i = 0; i < facts.title.length; i++) {
      const documentIndex = context.title.indexOf(facts.title[i]);
      const sentenceIndex = facts.sent_id[i];
      if (documentIndex < 0) reasons.add('supporting_title_missing');
      else if (!Number.isSafeInteger(sentenceIndex) || sentenceIndex < 0 ||
        sentenceIndex >= context.sentences[documentIndex].length) reasons.add('supporting_sentence_out_of_range');
      else if (!context.sentences[documentIndex][sentenceIndex].trim()) reasons.add('empty_supporting_sentence');
    }
  }
  return [...reasons];
}

export function selectFinalQuestions(rows: readonly TrainData[]) {
  const available: Record<string, number> = {}, eligibleCounts: Record<string, number> = {};
  const exclusions: Array<{ questionId: string; reasons: string[] }> = [];
  const idCounts = new Map<string, number>();
  for (const row of rows) idCounts.set(row.id, (idCounts.get(row.id) ?? 0) + 1);
  const eligible: TrainData[] = [];
  for (const row of rows) {
    const category = `${row.type}/${row.level}`;
    available[category] = (available[category] ?? 0) + 1;
    const reasons = validateQuestion(row);
    if ((idCounts.get(row.id) ?? 0) !== 1) reasons.push('duplicate_dataset_id');
    if (reasons.length) exclusions.push({ questionId: row.id, reasons });
    else { eligible.push(row); eligibleCounts[category] = (eligibleCounts[category] ?? 0) + 1; }
  }
  const anchor = eligible.find(row => row.id === ANCHOR_ID);
  const chosen: TrainData[] = anchor ? [anchor] : [];
  const ranked = (purpose: string) => (a: TrainData, b: TrainData) =>
    compareText(sha256(`${SELECTION_SEED}\0${purpose}\0${a.id}`), sha256(`${SELECTION_SEED}\0${purpose}\0${b.id}`)) || compareText(a.id, b.id);
  for (const category of Object.keys(STRATUM_QUOTAS) as Stratum[]) {
    const anchorOccupiesSlot = anchor && `${anchor.type}/${anchor.level}` === category ? 1 : 0;
    const required = STRATUM_QUOTAS[category] - anchorOccupiesSlot;
    const candidates = eligible.filter(row => `${row.type}/${row.level}` === category && row.id !== anchor?.id).sort(ranked('select'));
    if (candidates.length < required) throw new Error(`Insufficient eligible questions in ${category}.`);
    chosen.push(...candidates.slice(0, required));
  }
  const ordered = [...(anchor ? [anchor] : []), ...chosen.filter(row => row.id !== anchor?.id).sort(ranked('order'))];
  if (ordered.length !== 50 || new Set(ordered.map(row => row.id)).size !== 50) throw new Error('Selection must contain exactly 50 unique IDs.');
  const questions: FrozenQuestion[] = ordered.map((row, i) => ({
    selectionPosition: i + 1, questionId: row.id, type: row.type, difficulty: row.level,
  }));
  return { questions, available, eligibleCounts, exclusions, eligibleCount: eligible.length,
    anchorIncluded: Boolean(anchor), selectedSupportingReferences: ordered.reduce((sum, row) => sum + row.supporting_facts.title.length, 0) };
}

export async function datasetSha256(path: URL): Promise<string> {
  const digest = createHash('sha256');
  for await (const chunk of createReadStream(path)) digest.update(chunk);
  return digest.digest('hex');
}

/** Idempotent: never overwrite a previously frozen artifact with different bytes. */
async function saveFrozen(path: URL, contents: string) {
  try { await writeFile(path, contents, { flag: 'wx' }); }
  catch (error) {
    if ((error as NodeJS.ErrnoException).code !== 'EEXIST') throw error;
    if (await readFile(path, 'utf8') !== contents) throw new Error('Frozen selection artifact differs; existing file was not overwritten.');
  }
}

export async function prepareSelection() {
  const path = new URL(`./${SELECTION_DATASET}`, import.meta.url);
  const rows = await new ParquetFileReader({ filePath: fileURLToPath(path) }).read();
  const result = selectFinalQuestions(rows);
  const datasetHash = await datasetSha256(path);
  const idsHash = sha256(JSON.stringify(result.questions.map(question => question.questionId)));
  const manifest = {
    schemaVersion: 1,
    dataset: { path: SELECTION_DATASET, sha256: datasetHash, rowCount: rows.length },
    selection: { method: 'stratified-sha256-v1', seed: SELECTION_SEED, count: 50,
      quotas: STRATUM_QUOTAS, anchorQuestionId: ANCHOR_ID, anchorIncluded: result.anchorIncluded,
      orderedIdsSha256: idsHash },
    questions: result.questions,
  };
  const reasonCounts: Record<string, number> = {};
  for (const exclusion of result.exclusions) for (const reason of exclusion.reasons) reasonCounts[reason] = (reasonCounts[reason] ?? 0) + 1;
  const table = Object.entries(STRATUM_QUOTAS).map(([category, count]) =>
    `| ${category} | ${result.available[category] ?? 0} | ${result.eligibleCounts[category] ?? 0} | ${count} |`).join('\n');
  const summary = `# Frozen final 50-question HotpotQA selection

Dataset: \`${SELECTION_DATASET}\` (${rows.length} records). No other shard or split was used.
Dataset SHA-256: \`${datasetHash}\`.
Ordered-ID SHA-256: \`${idsHash}\`.

## Reproducible method

Run \`node selectFinalQuestions.ts\` from the repository to reproduce/verify both artifacts.
The script reads Ashwin's existing Parquet reader without changing it. It creates files only
if absent, accepts identical existing contents, and refuses to overwrite different artifacts.

First validate every record, then apply fixed type/difficulty quotas. Within each stratum,
rank by ascending SHA-256 of seed + NUL + "select" + NUL + question ID; break ties by ID
using JavaScript code-unit comparison. Seed: \`${SELECTION_SEED}\`.
The previously tested anchor \`${ANCHOR_ID}\` is ${result.anchorIncluded ? 'valid and included at position 1' : 'ineligible and excluded'}.
If included, it consumes one slot in its stratum. Rank the other chosen IDs with the same
seed and the purpose string "order" instead of "select" to mix their final order.
No random state, model responses, latency, costs, or answer performance influence selection.

This is a deliberately balanced stratified sample: 30 bridge / 20 comparison, and
17 easy / 17 medium / 16 hard. It is not proportional to HotpotQA's population distribution.
Report results by type/difficulty alongside pooled results. The forced, previously tested
anchor makes one item familiar; identify it when describing final-sample limitations.

## Distribution and validation

| Type/difficulty | Available | Eligible | Selected |
| --- | ---: | ---: | ---: |
${table}
| Total | ${rows.length} | ${result.eligibleCount} | 50 |

Excluded records: ${result.exclusions.length}.
Exclusion reason counts (one row may have multiple reasons): \`${JSON.stringify(reasonCounts)}\`.
Excluded IDs/reasons: \`${JSON.stringify(result.exclusions)}\`.

All selected IDs are unique, positions are exactly 1–50, question text and expected answers
are nonempty, and answers remain nonempty after the existing HotpotQA normalization.
Context titles/sentence arrays are aligned, titles are unique, and all sentences are strings.
Every gold supporting title resolves to its corresponding source document; every sentence
index is a nonnegative safe integer in bounds and resolves to a nonempty sentence.
All ${result.selectedSupportingReferences} selected supporting references passed.

These are structural validity checks, not an independent semantic verification of every
HotpotQA annotation. Multi-hop answers need not appear verbatim in one evidence sentence.
The expected answers and supporting facts remain in the dataset for evaluation only;
neither is stored in the frozen manifest or passed to strategy inputs.

## Runner use without modifying the runner

The runner accepts \`questionIds\` / \`--question-ids\` in the supplied order. It has no
\`--question-file\` argument, so it does not directly open this manifest. The smallest adapter
is to map its entries to IDs (no runner source change required):

\`\`\`ts
import { readFile } from 'node:fs/promises';
import { runExperiment } from './experimentRunner.ts';
const frozen = JSON.parse(await readFile('data/final-50-questions.json', 'utf8'));
const questionIds = frozen.questions.map((entry: { questionId: string }) => entry.questionId);
for await (const row of runExperiment({
  configuration: { model: 'google/gemini-2.5-flash-lite', temperature: 0, maxOutputTokens: 512 },
  questionIds, strategies: ['full_context', 'caching'], repetitions: 1,
  additionalContextPassages: 20, dryRun: true,
})) {
  console.log(JSON.stringify({ questionId: row.questionId, strategy: row.strategy, status: row.status }));
}
\`\`\`

Use the same array and order in both model rounds and every method. This preserves the
runner's alternating Full Context/Caching order (25 questions each first). Keep the same
context-expansion option as well; \`20\` retains the expanded collection protocol. Model IDs
remain \`google/gemini-2.5-flash-lite\` and \`openai/gpt-4.1-mini\`.
RAG, Summarization, and Hybrid must be registered when implemented; they receive the same
original source collection and must not receive gold passages as retrieval inputs.
GPT-4.1-mini explicit caching remains unsupported; ID compatibility does not remove that limitation.

The manifest and this report are allowlisted in Git while Parquet files remain ignored.
No API calls, experiment-result writes, dataset modifications, commits, or pushes are part of selection.
`;
  await saveFrozen(new URL('./data/final-50-questions.json', import.meta.url), JSON.stringify(manifest, null, 2) + '\n');
  await saveFrozen(new URL('./data/final-50-selection-summary.md', import.meta.url), summary);
  return { manifest, validation: { eligible: result.eligibleCount, excluded: result.exclusions.length,
    reasonCounts, selectedSupportingReferences: result.selectedSupportingReferences } };
}

if (import.meta.main) {
  try { console.log(JSON.stringify(await prepareSelection(), null, 2)); }
  catch (error) { console.error(error instanceof Error ? error.message : 'Selection failed.'); process.exitCode = 1; }
}
