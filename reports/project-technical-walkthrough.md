# Context Engineering: Complete Project Development and Research Walkthrough

AIP444 · Seneca Polytechnic · Evidence snapshot: 2026-11-23 · Branch: clean-vs-noisy-context · Shared source commit: 36f912b.

Integrated HTML companion: [context-engineering-complete-research-report.html](context-engineering-complete-research-report.html). No paid execution or API calls were made for report preparation.

# PART 1: HOW WE BUILT THE PROJECT

## Read this first: evidence, scope and research questions

**VERIFIED FROM RESULTS** · Evidence: [S01](#s01), [S32](#s32), [S33](#s33), [S35](#s35), [S45](#s45), [S46](#s46)

This is the complete local walkthrough for the AIP444 Context Engineering research project at Seneca Polytechnic. It explains how context is prepared, how an LLM is asked a question, how its answer is checked, and what the saved experiments show. The technical walkthrough is integrated into this HTML report; the Markdown file contains the same core explanations and evidence tables for study and printing.

Two research questions must remain separate: (1) how five context-engineering strategies compare; (2) how adding unrelated or contradictory passages affects the existing Full Context baseline. The second question has a complete, audited 60-request run. The first has five implemented methods but its final five-method result records were not found in this checkout or inspected local Git refs.

The requested pre-existing HTML was absent: no reports/ directory, HTML file, or HTML-related Git history was found. This integrated document is therefore created at the requested canonical path rather than claiming to preserve an unseen previous dashboard. A separate 200-request Full Context/Caching comparison was found on another local branch and is explicitly labeled as such.

| Evidence label | How to read it |
|---|---|
| VERIFIED FROM CODE | A behavior implemented in the inspected source or test. This does not by itself establish successful live execution. |
| VERIFIED FROM RESULTS | A recorded observation or recalculation from saved responses. It is not an independent provider billing audit. |
| DOCUMENTED IN GIT | An actual commit, branch reference or local reflog entry. Commit time is not necessarily execution time. |
| INTERPRETATION | Our explanation, hypothesis or recommendation, tied to evidence but not proven by it. |
| NOT VERIFIED | Evidence is absent, ambiguous, merely reported by someone, or stale. |

No external APIs, experiment runs, branch switches, pushes or merges were used to build this report. All quantitative tables come from local saved records. Current experiment files and historical results were preserved. The report has no CDN dependencies or runtime network requests.

## Development timeline: from planning to final analysis

**DOCUMENTED IN GIT** · Evidence: [S45](#s45), [S01](#s01), [S42](#s42), [S32](#s32), [S33](#s33), [S31](#s31), [S46](#s46)

Dates below follow local Git author timestamps with their recorded UTC offsets, except saved-request timestamps, which are UTC. Several commits cluster within minutes on November 10; they establish recorded changes, not how long the work took. Earlier team branches are parallel development, not proof that every feature was merged in chronological order.

| Recorded date | Commit | Author | Change | Evidence |
|---|---|---|---|---|
| 2026-10-08T14:21:44-04:00 | d47c172 | SM Tausif | Initial commit: add research documents and test files | DOCUMENTED IN GIT |
| 2026-10-27T18:58:18-04:00 | d24750f | Ashwin Pandey | update .gitignore to include additional files and directories | DOCUMENTED IN GIT |
| 2026-10-27T18:59:03-04:00 | 6663ca1 | Ashwin Pandey | add ParquetFileReader and schema for training data | DOCUMENTED IN GIT |
| 2026-10-27T18:59:55-04:00 | 188fd05 | Ashwin Pandey | chore: initialize project with package.json, TypeScript configuration, and test file | DOCUMENTED IN GIT |
| 2026-10-27T19:02:17-04:00 | 710afa4 | Ashwin Pandey | Improve error handling | DOCUMENTED IN GIT |
| 2026-10-30T16:57:10-04:00 | f946e93 | SM Tausif | Implement full context, prompt caching, and experiment framework | DOCUMENTED IN GIT |
| 2026-11-02T20:50:56-05:00 | 9f47482 | HilanaMdawar | Add summarization strategy and offline tests | DOCUMENTED IN GIT |
| 2026-11-10T00:23:18-05:00 | 5d22fe0 | Ashwin Pandey | chore: organize project layout and configure dependencies | DOCUMENTED IN GIT |
| 2026-11-10T00:23:21-05:00 | b3d6d98 | Ashwin Pandey | feat: load HotpotQA questions with a separate answer key | DOCUMENTED IN GIT |
| 2026-11-10T00:23:25-05:00 | 4b1c942 | Ashwin Pandey | feat: build shared answer and search prompts | DOCUMENTED IN GIT |
| 2026-11-10T00:23:30-05:00 | 4ab751a | Ashwin Pandey | feat: call OpenRouter with the OpenAI SDK and Zod validation | DOCUMENTED IN GIT |
| 2026-11-10T00:23:33-05:00 | be13583 | Ashwin Pandey | feat: standardize strategy results and usage measurements | DOCUMENTED IN GIT |
| 2026-11-10T00:23:47-05:00 | 02a80f8 | Ashwin Pandey | feat: add the full-context strategy | DOCUMENTED IN GIT |
| 2026-11-10T00:23:50-05:00 | 4254067 | Ashwin Pandey | feat: add explicit and implicit prompt caching | DOCUMENTED IN GIT |
| 2026-11-10T00:23:53-05:00 | 88d9a66 | Ashwin Pandey | feat: summarize source passages with validated references | DOCUMENTED IN GIT |
| 2026-11-10T00:23:56-05:00 | 8e51959 | Ashwin Pandey | feat: retrieve passages with MiniSearch keyword ranking | DOCUMENTED IN GIT |
| 2026-11-10T00:23:59-05:00 | 0feac99 | Ashwin Pandey | feat: add tool-based RAG with a bounded follow-up search | DOCUMENTED IN GIT |
| 2026-11-10T00:24:38-05:00 | 1c494b8 | Ashwin Pandey | feat: combine RAG retrieval and summarization in hybrid | DOCUMENTED IN GIT |
| 2026-11-10T00:24:41-05:00 | ee20321 | Ashwin Pandey | feat: score answer text and supporting citations | DOCUMENTED IN GIT |
| 2026-11-10T00:24:44-05:00 | 6641f81 | Ashwin Pandey | feat: run question batches and save every attempt | DOCUMENTED IN GIT |
| 2026-11-10T00:24:47-05:00 | 0542a08 | Ashwin Pandey | feat: summarize saved experiment results | DOCUMENTED IN GIT |
| 2026-11-10T00:24:51-05:00 | fb1c66e | Ashwin Pandey | docs: add the project guide and explain the workflow visually | DOCUMENTED IN GIT |
| 2026-11-17T20:19:06-05:00 | 36f912b | Ashwin Pandey | feat: update answer instructions for clarity in response format | DOCUMENTED IN GIT |
| 2026-11-23T11:06:40-05:00 | aa11bbf | SM Tausif | Save full context and caching experiments | DOCUMENTED IN GIT |

| Later event | Date/evidence | What can be established |
|---|---|---|
| Branch creation | 2026-11-23 11:17:56 −05:00; local reflog | clean-vs-noisy-context was created from origin/rag-hybrid at 36f912b. |
| Noise implementation and first offline pilot | Before the saved run; source and session sequence | Separate files, 20 fixtures, three conditions, controlled adapter, tests and reports exist. No noise-specific commits: files are currently untracked. Exact edit times are NOT VERIFIED. |
| Fixture corrections | pilot-v2 source, tests, README; before live run | Russian Civil War case replaced by Tosca; Apple Remote grammar fixed; one repeated unrelated topic replaced by twenty distinct topics. Git does not retain the earlier untracked fixture version. |
| Offline validation | Fresh report-time checks, plus README | 13/13 pilot tests pass; TypeScript passes; original suite 72/74 with two dataset errors. |
| Noise live requests | 2026-11-23T16:42:55.837Z to 2026-11-23T16:43:38.778Z (last request start) | 60 completed requests, 20 questions × 3 conditions × 1 repetition. The last response occurs after the last start. |
| Result validation and reporting | Saved validation.json, comparison files, current analysis | All 60 cells present; scores and usage checked. Exact earlier audit/report creation times are not encoded as Git events. |
| Original five-strategy live benchmark | User reported completion; branch alignment note cites shared logs | 100 questions, one repetition and Gemini 3.1 Flash Lite are reported, but final run ID, exact provider, inputs and per-method final metrics remain unverified locally. |

**INTERPRETATION.** Initial evidence is a course guide, twenty campus-policy text files, ten local test questions, and a blank five-method spreadsheet committed on October 8. The later README and source establish HotpotQA as the implemented comparison dataset. A precise original planning meeting, initial hypotheses, editor choice and rationale for every package are not recorded. “We wanted to trade off evidence quality and resource use” is a reasonable interpretation of the implemented comparisons, not a quotation from that first commit.

## Tools and technologies actually evidenced

**VERIFIED FROM CODE** · Evidence: [S19](#s19), [S20](#s20), [S21](#s21), [S22](#s22), [S49](#s49), [S03](#s03), [S09](#s09), [S06](#s06), [S45](#s45), [S48](#s48)

A runtime executes code; a library supplies reusable functions; a service hosts the model. These are different roles. The report-time environment reports Node v24.21.0 and npm 11.19.0. Version ranges below are declared in package.json; the manifest hashes package-lock.json to identify the exact installed dependency graph used for reproducibility.

| Technology | What it does / actual use | Evidence files | Essential or optional; choice evidence |
|---|---|---|---|
| Node.js 24+ | Runs .ts entry points directly with built-in TypeScript support, filesystem, crypto, timers and test APIs. | README.md; package.json; node: imports | Essential runtime. README explicitly requests Node 24+. No Babel build pipeline is used. |
| TypeScript | Static types for contexts, calls and records; tsc checks code without emitting output. | tsconfig.json; src/schema.ts; package.json | Essential source/checking language. strict=true, NodeNext modules. Reason for choosing it is not documented. |
| npm | Installs locked dependencies and dispatches project scripts. | package.json; package-lock.json | Essential documented package workflow. |
| Git / GitHub remote | Local commits/branches; configured origin is github.com/smtausif/ContextEngineering.git. | git log; git branch -avv; git remote -v | Essential evidence/version control. Remote configuration does not prove that untracked noise code is published. |
| hyparquet ^1.31.5 | Reads selected Parquet rows from local files. | src/ParquetFileReader.ts | Essential loader dependency. |
| hyparquet-compressors ^1.1.2 | Provides decompressors used by parquetReadObjects. | src/ParquetFileReader.ts | Essential for the configured compressed-data reader. |
| MiniSearch ^7.2.0 | Local keyword index over titles and full passage text. | src/strategies/rag/retrieveContext.ts | Essential for RAG/Hybrid only. No embeddings or vector database are implemented. |
| OpenAI SDK ^7.47.0 | Sends Chat Completions JSON through an OpenRouter-compatible endpoint; Zod helpers build formats/tools. | src/callModel.ts; src/schema.ts | Essential configured API client; SDK name does not mean OpenAI provided the experimental model. |
| Zod ^4.6.7 | Validates structured model answers, summary drafts, usage and saved record metadata. | src/schema.ts; callModel.ts; summarizeResults.ts | Essential validation. A schema can validate shape, not truth. |
| Pino ^10.4.0 | Writes structured progress/error logs to stderr. | src/logger.ts | Operational logging; model answering could conceptually work without it, but current code imports it. |
| Node test and assert | Run assertions and mock fetch; no Jest or Vitest in the declared setup. | tests/*.test.ts; pilot.test.ts | Essential offline verification. |
| TypeScript ^7.0.2 / @types/node ^26.6.5 | Compiler and Node API type declarations. | package.json; tsconfig.json | Development/checking dependencies. |
| tsx ^4.23.15 | Installed optional TypeScript execution helper. | package.json | Present as dev dependency; current scripts invoke node, so actual use is NOT VERIFIED. |
| HotpotQA / Parquet | Questions, answer labels, supporting sentence references and Wikipedia-style context passages. | data/readme.md; src/schema.ts; data/*.parquet | Essential research data. Original reason for selection is not documented; labeled multi-hop evidence makes the implemented scoring possible. |
| JSON / JSONL | JSON stores one plan or fixture collection; JSONL stores one attempt per line for incremental append and later parsing. | fixtures.json; plan.json; runs.jsonl | Essential persisted data formats. No relational database is used. |
| VS Code | No editor session or project configuration establishes its use. .gitignore patterns alone are insufficient. | .gitignore | NOT VERIFIED; not required to reproduce the CLI. |
| Codex / AI assistance | The supplied development session includes agent-created experiment code, review and documentation; fixtures explicitly say agent-reviewed. | fixtures.json; create-fixtures.ts; session provenance | Session-supported assistance, not independently established by Git for the untracked work. Exact backend model/version and full prompt audit are NOT VERIFIED. |
| HTML / CSS / JavaScript / SVG | Self-contained report navigation, charts, expandable examples and printing. | reports/context-engineering-complete-research-report.html | Report presentation layer, not experimental model infrastructure. No web framework required. |
| Python standard library | Read DOCX/XLSX XML and assemble this report from local evidence. | Report preparation process | Documentation tool only; not the TypeScript experiment runtime. |

### API gateway, host and model are distinct

| Role | Actual identity | Where established |
|---|---|---|
| API gateway | OpenRouter, https://openrouter.ai/api/v1 | callModel constructs the SDK with this baseURL. |
| Requested serving route | google-ai-studio | SETTINGS.provider and provider.only in the noise request payloads. |
| Reported serving provider | Google AI Studio | All sixty saved response records. |
| Model developer / model family | Google / Gemini | Configured google/gemini-3.1-flash-lite identifier and local model documentation. No separate model-card validation in this report. |
| Requested and returned model identifier | google/gemini-3.1-flash-lite | Noise settings and saved model fields. |
| SDK author/package family | OpenAI SDK | Client transport library; it is not evidence that GPT answered these questions. |

The actual deployment used an OpenRouter key and gateway. We did not directly call the Google AI Studio API, train Gemini, host model weights, fine-tune a model, or build an embedding index. No documented model-selection study proves Gemini was the optimal choice; cost-conscious pilot sizing is documented, while broader choice motivations remain interpretation.

## Complete architecture and module communication

**VERIFIED FROM CODE** · Evidence: [S03](#s03), [S04](#s04), [S05](#s05), [S06](#s06), [S14](#s14), [S15](#s15), [S16](#s16), [S17](#s17), [S18](#s18), [S23](#s23), [S28](#s28), [S29](#s29)

**Dataset to comparison report:** HotpotQA Parquet → ParquetFileReader.read → loadData / loadPilot → prepareData → question + answerKey → fullContext / callRag / summarization / hybrid / caching → buildPrompt / formatContext → callModel → OpenRouter → Google AI Studio → JSON response → ModelAnswerSchema → evaluateResult + timing + getUsage → appendFile → runs.jsonl → summarizeResults / compare → reports

The answer key takes a separate evaluation path: it joins the parsed final answer only after model execution. In the noise experiment, gold supporting titles are also used offline to construct the clean passage set. This is a gold-selected, controlled evidence experiment, not an end-to-end retrieval test. Gold answers are never passed as answer-key metadata to the model; their text naturally appears in the evidence.

```text
src/
  ParquetFileReader.ts   local Parquet access
  schema.ts             types and Zod schemas
  loadData.ts           original validation loader / answer-key split
  buildPrompt.ts        common answer and search prompts
  callModel.ts          one API request and response validation
  results.ts            shared strategy result contract
  usage.ts              usage, cost and cache helpers
  evaluation.ts         normalized exact match / answer F1 / citation F1
  runQuestion.ts        original five-strategy CLI and JSONL logging
  summarizeResults.ts   original parsing / aggregation / fixed-path report CLI
  logger.ts             stderr logging and optional .env loading
  strategies/           full-context, caching, rag, summarization, hybrid
data/                   local Parquet files; ignored in Git except readme
tests/                  original offline software tests
scripts/inspectParquet.ts  manual data inspection, training file by default
doc/                    initial course materials, example corpus, flow diagram
results/                historical local CSVs; do not overwrite
experiments/context-noise/  isolated additional research
reports/                this integrated HTML and Markdown walkthrough
```

Each strategy accepts a QuestionInput containing question and context and returns createStrategyResult(...). That result keeps every model call, the final parsed output, status, usage, selected source titles, optional summary and tool traces. The runner adds experiment identity and scores. Shared interfaces make comparisons possible without maintaining five independent scorers.

## Dataset preparation and evidence preservation

**VERIFIED FROM CODE** · Evidence: [S02](#s02), [S03](#s03), [S04](#s04), [S23](#s23), [S26](#s26), [S32](#s32), [S38](#s38), [S48](#s48)

HotpotQA records contain id, question, answer, type, level, context and supporting_facts. Context uses parallel arrays: context.title[i] names a passage, and context.sentences[i] contains its ordered sentences. Supporting facts use parallel title and sent_id arrays. A sentence ID starts at zero; it identifies a sentence inside its named passage, not a position in the entire concatenated prompt.

Parquet is a compact column-oriented storage format. ParquetFileReader uses asyncBufferFromFile and parquetReadObjects with compressors; read(N) starts at row zero. The original loadData(count,start) reads start+count and slices, so it is not a random sampler and does not seek directly to start. Its default file is data/validation-00000-of-00001.parquet. Running npm run load-data exports the first ten questions and a separate answer key only after validation succeeds.

prepareData rejects missing or duplicate IDs, blank question/answer, mismatched passage arrays, missing gold facts, and out-of-range or empty gold sentences. It returns questions without answer or supporting_facts metadata and a separate answerKey. It is structural validation: a present sentence is not automatically a semantically correct annotation.

```json
{
  "id": "5a87c13f5542996e4f30890c",
  "question": "In what city did the \"Prince of tenors\" star in a film based on an opera by Giacomo Puccini?",
  "answer": "Rome",
  "supporting_facts": {
    "title": ["Tosca (1956 film)", "Franco Corelli"],
    "sent_id": [2, 2]
  }
}
```

The abbreviated record above is review data; answer and supporting_facts are not model-input fields. The model instead receives the question and formatted passages. In the pilot, all complete passages containing the gold titles are retained, including unlabeled sentences within those passages; this preserves original sentence numbering and the multi-hop chain.

| Local dataset | Actual role | Verification |
|---|---|---|
| validation-00000-of-00001.parquet | Original loader default | First row lacks Scott Derrickson [0] in its provided context; two real-data tests fail. Do not silently claim equivalence to the file Ashwin used successfully. |
| distractor-validation.parquet | Noise experiment source | 7,405 rows, 7,404 structurally eligible; all 20 selected cases valid. |
| train-00000-of-00002.parquet | Historical reader/CSV experiments | Present locally; older results use it. Not used for the final noise run. |
| train-00001-of-00002.parquet | Additional local training shard | Present locally; no evidence the noise run used it. |

Distractor data was preferred because its gold sentences could be checked in the supplied passages. One row, 5059 / 5ae61bfd5542992663a4f261, references Jimmy Butler (basketball) sentence 902 and is excluded from structural eligibility. No gold labels or dataset files were repaired. The saved plan identifies the actual bytes with SHA-256 c20b638ca82b21d04fe12e14ff417ad05153d4d215a65de54497fca4e972f7c6. Filename and hash establish local identity, not the exact upstream download provenance or dataset revision.

## How the experimental testing framework works

**VERIFIED FROM CODE** · Evidence: [S04](#s04), [S05](#s05), [S06](#s06), [S14](#s14), [S15](#s15), [S16](#s16), [S17](#s17), [S18](#s18), [S28](#s28), [S29](#s29), [S30](#s30), [S36](#s36), [S37](#s37), [S40](#s40)

| Stage | Actual function(s) | What a beginner should understand |
|---|---|---|
| Load questions | loadData or loadPilot → ParquetFileReader.read | Read the selected local records. Validate before spending money. |
| Keep labels separate | prepareData; referenceById in runQuestion.ts | Gold answers and evidence labels belong to evaluation, not model-request metadata. |
| Prepare evidence | Strategy function or variants | Choose all passages, retrieved passages, notes, or one of the three controlled contexts. |
| Construct messages | buildPrompt, buildRagPrompt, buildFullContextPrompt | A system message gives the rules; user messages provide context and question. |
| Call service | callModel; answerWithControls in noise pilot | Send structured request; time it; preserve usage and errors. |
| Parse response | JSON.parse → ModelAnswerSchema / SummaryDraftSchema | Reject invalid shapes; do not score an unparsed prose response as a valid answer. |
| Score | evaluateResult → evaluateAnswer + evaluateCitations | Compare the final parsed output to the unchanged reference labels. |
| Measure resources | performance.now, getUsage, combineUsage | Observe elapsed time locally; use provider-reported tokens and costs. |
| Persist attempts | appendFile(JSON.stringify(record)+newline) | Keep successful and failed attempts so coverage and cost are auditable. |
| Compare | summarizeResults / compare / writeReport | Aggregate with explicit denominators and retain per-question changes. |

### A. Offline software tests

Offline tests run code against known examples and fake model responses. Node test and strict assert check expected values. t.mock.method(globalThis, fetch, ...) replaces the network transport, so the real SDK can be tested without a paid request. Fake credentials are used for these tests. A passing test proves a checked behavior, not the quality of the real model.

### B. Live model evaluation

Live evaluation sends genuine questions to the model and records its measured behavior. The saved noise run is 60 real attempts. Deterministic contexts and temperature 0 help control comparisons, but hosted model outputs and service timings are not guaranteed to be bit-for-bit repeatable.

### C. Result validation

Result validation reads saved records without asking the model again. It checks the expected question × condition × repetition grid, statuses, response schemas, token/cost coverage, score recalculation, settings and manifest/context hashes. It can detect a missing result or corrupted score. It cannot establish a provider charge that was never recorded, or independently prove that every model citation is factually sufficient.

### Testing the evaluator itself

evaluateAnswer is tested on normalized equivalents, partial word overlap, repeated-word counts, yes/no/noanswer mismatches and empty normalized text. evaluateCitations is tested on exact title-and-index pairs, case sensitivity, duplicates, invented citations, missing gold citations and invalid reference array lengths. Aggregation tests ensure failed calls do not become correct or zero-cost calls and top-level totals are not counted twice. These known-answer tests are the evidence that the scoring implementation behaves as intended; they are not an independent verification against every upstream HotpotQA release.

## Source-code tour: important lines explained

**VERIFIED FROM CODE** · Evidence: [S04](#s04), [S06](#s06), [S14](#s14), [S16](#s16), [S17](#s17), [S23](#s23), [S27](#s27), [S28](#s28)

### Separate model inputs from references

```typescript
 51    return {
 52      questions: rows.map(({ id, question, context }) => ({
 53        id,
 54        question,
 55        context,
 56      })),
 57  
 58      answerKey: rows.map(({ id, answer, supporting_facts }) => ({
 59        id,
 60        answer,
 61        supporting_facts,
 62      })),
```

Exact excerpt: `src/loadData.ts`, lines 51–62. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 51 | Start the returned object. |
| 52–56 | Create a questions list with only id, question and context. This is the model-facing collection. |
| 58–62 | Create a separate answerKey list with id, expected answer and labeled supporting facts. This is used after generation. |

### One SDK attempt, a timeout and two different caches

```typescript
 41    const client = new OpenAI({
 42      apiKey,
 43      baseURL: 'https://openrouter.ai/api/v1',
 44      maxRetries: 0, // Keep one API attempt per recorded result.
 45      timeout: 60_000,
 46      // Measure provider prompt caching, rather than replaying entire cached answers.
 47      defaultHeaders: { 'X-OpenRouter-Cache': 'false' },
```

Exact excerpt: `src/callModel.ts`, lines 41–47. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 41 | Construct the OpenAI SDK client. |
| 42 | Supply the key from local environment memory; never include it in prompts or reports. |
| 43 | Route through OpenRouter rather than the OpenAI service endpoint. |
| 44 | Set automatic retries to zero, so one recorded attempt does not silently send extra requests. |
| 45 | Use a 60,000 ms timeout. |
| 46–47 | Disable the OpenRouter whole-response cache. This does not disable provider prefix caching. |

### Time the whole strategy, then score its final answer

```typescript
 77        const started = performance.now();
 78        const result = await run(question);
 79        const endToEndLatencyMs = performance.now() - started;
 80        const scores = result.status === 'completed'
 81          ? evaluateResult(result.output, reference) : null;
```

Exact excerpt: `src/runQuestion.ts`, lines 77–81. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 77 | Read a high-resolution local timer before strategy execution. |
| 78 | Wait for the selected strategy, including preparation model calls. |
| 79 | Subtract the starting timer to get strategy end-to-end milliseconds. |
| 80–81 | Score only completed attempts; failed attempts have null scores. Scoring is outside the measured interval. |

### Exact match is strict after normalization

```typescript
 15  export function evaluateAnswer(generated: string, expected: string): AnswerEvaluation {
 16    const prediction = normalizeAnswer(generated);
 17    const gold = normalizeAnswer(expected);
 18    const exactMatch = prediction === gold ? 1 : 0;
 19    const result: AnswerEvaluation = {
 20      answerCorrectness: exactMatch ? 'Y' : 'N',
 21      exactMatch,
 22      tokenF1: 0,
```

Exact excerpt: `src/evaluation.ts`, lines 15–22. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 15 | Accept generated and expected answer strings. |
| 16 | Normalize the generated answer using the shared rules. |
| 17 | Normalize the gold answer in the same way. |
| 18 | Assign one point only if the normalized strings are identical. |
| 19–22 | Build a result containing a Y/N indicator, exact-match value and initial word-overlap score. |

### Citation F1 compares sets, not repeated citation counts

```typescript
 68    // Sets prevent repeated copies of a citation from increasing its score.
 69    const predicted = new Set(citations.map(fact => JSON.stringify([fact.title, fact.sentence_id])));
 70    const gold = new Set(expected.title.map((title, i) => JSON.stringify([title, expected.sent_id[i]])));
 71    const common = [...predicted].filter(fact => gold.has(fact)).length;
 72    const citationPrecision = predicted.size ? common / predicted.size : 0;
 73    const citationRecall = gold.size ? common / gold.size : 0;
 74    const citationF1 = citationPrecision + citationRecall
 75      ? 2 * citationPrecision * citationRecall / (citationPrecision + citationRecall) : 0;
```

Exact excerpt: `src/evaluation.ts`, lines 68–75. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 68 | Explain why duplicate references should not earn extra credit. |
| 69 | Convert predicted title/index pairs into a unique set. |
| 70 | Create the gold unique set from parallel label arrays. |
| 71 | Count the pairs shared by the two sets. |
| 72 | Precision asks how many predicted pairs are gold. |
| 73 | Recall asks how many gold pairs were cited. |
| 74–75 | Compute the harmonic mean, or zero when there is no overlap. |

### Unknown usage stays unknown

```typescript
 16  export function sumMeasurements(values: unknown[]): number | null {
 17    const known = values.map(measurement);
 18    return known.length && known.every(value => value !== null)
 19      ? known.reduce((total, value) => total + value, 0) : null;
```

Exact excerpt: `src/usage.ts`, lines 16–19. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 16 | Receive candidate measurements to add. |
| 17 | Validate each measurement; unavailable/invalid values become null. |
| 18 | Require at least one measurement and require all values to be known. |
| 19 | Add known values; otherwise return null rather than misleading zero or a partial total. |

### Build clean and noisy contexts without renumbering evidence

```typescript
 34    prepareData([row]);
 35    const indices = row.context.title.flatMap((title, i) => row.supporting_facts.title.includes(title) ? [i] : []);
 36    const clean = { title: indices.map(i => row.context.title[i]), sentences: indices.map(i => [...row.context.sentences[i]]) };
 37    const source = row.context.sentences[row.context.title.indexOf(fixture.evidenceTitle)]?.[fixture.sentenceId];
 38    requireValid(source === fixture.sourceSentence && source.includes(fixture.trueValue), 'Evidence changed');
 39    requireValid(row.supporting_facts.title.some((t, i) => t === fixture.evidenceTitle && row.supporting_facts.sent_id[i] === fixture.sentenceId),
 40      'Contradiction must target labeled evidence');
```

Exact excerpt: `experiments/context-noise/pilot.ts`, lines 34–40. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 34 | Apply the existing source/reference validator. |
| 35 | Select passage positions whose titles appear in gold evidence. |
| 36 | Copy full sentence arrays at those positions; do not compact individual sentences. |
| 37 | Locate the exact evidence sentence targeted by the reviewed contradiction. |
| 38 | Require it to match the frozen original text and true value. |
| 39–40 | Require the targeted sentence to be an actual labeled supporting fact. |

### A manifest check is a consistency gate

```typescript
 47    requireValid(values['reviewed-manifest'] === pilot.manifestHash, 'Review dry-run fixtures and supply the exact --reviewed-manifest hash');
 48    requireValid(process.env.OPENROUTER_API_KEY?.trim(), 'Missing OPENROUTER_API_KEY');
 49    // Pin configuration locally rather than changing the shared model client or .env.
 50    process.env.OPENROUTER_MODEL = SETTINGS.model;
 51    process.env.OPENROUTER_PROVIDER = SETTINGS.provider;
```

Exact excerpt: `experiments/context-noise/run.ts`, lines 47–51. Numbers at left are source line numbers, not executable code.

| Line(s) | In plain English |
|---|---|
| 47 | Refuse live execution unless the supplied reviewed hash matches the freshly calculated manifest. |
| 48 | Require a locally configured key before sending anything. |
| 49 | Explain why configuration is pinned only for this isolated experiment. |
| 50 | Pin the requested Gemini identifier. |
| 51 | Pin the Google AI Studio provider route. |

The adapter in answer.ts temporarily replaces global fetch only around fullContext(input), inserts temperature:0 and max_tokens:1024 in the outgoing JSON, records that credential-free body, and restores fetch in a finally block. Because fetch is process-global, the adapter is designed for the sequential CLI, not concurrent invocations. This is an explicit implementation constraint, not a change to Ashwin’s strategy or client.

## A. Full Context

**VERIFIED FROM CODE** · Evidence: [S07](#s07), [S05](#s05), [S06](#s06), [S14](#s14), [S16](#s16), [S45](#s45), [S46](#s46)

Give the model every passage supplied for that question, rather than selecting or compressing them.

**INTERPRETATION.** Purpose and research hypothesis: A completeness baseline: retaining all evidence may avoid retrieval or compression losses, while including more text can cost more and expose the model to distractions.

**A. Full Context execution flow:** Question’s supplied passages → buildFullContextPrompt → callModel: answer → evaluateResult

fullContext(question) calls buildFullContextPrompt(question), which reuses buildPrompt. The context is a user text-block array before the user question; system instructions and structured-answer format are shared. One successful attempt makes one model request. selectedTitles lists every supplied passage.

**INTERPRETATION.** Expected advantages and disadvantages: No evidence-selection step can accidentally drop a source; one request makes the pipeline simple. More supplied text can raise input cost and make irrelevant evidence compete for attention. Automatic provider caching is still possible.

**VERIFIED FROM RESULTS.** Actual evidence and results: The original five-strategy benchmark Full Context score is unavailable. In the separate noise experiment’s clean condition, this function achieved 17/20 exact matches (85%), answer F1 0.941190 and citation F1 0.791190. Those are gold-selected clean-passage results, not a recovered original benchmark score.

**INTERPRETATION.** Git implementation anchor: 02a80f8. Lesson: compare final answer quality together with every preparation request, retained evidence and measured resource usage; do not infer a ranking from architecture alone.

## B. Retrieval-augmented generation (RAG)

**VERIFIED FROM CODE** · Evidence: [S11](#s11), [S05](#s05), [S06](#s06), [S14](#s14), [S16](#s16), [S45](#s45), [S46](#s46)

Ask the model to search a local collection, then answer from the passages its searches retrieve.

**INTERPRETATION.** Purpose and research hypothesis: Selecting useful passages may reduce final-answer context and distractions, but missed multi-hop evidence can reduce accuracy. Search planning has its own latency and billable tokens.

**B. Retrieval-augmented generation (RAG) execution flow:** Question → buildRagPrompt → Model plans search_context → MiniSearch top 4 per query → Second planning request → Unique retrieved full passages → Separate structured answer

searchWithTools makes two planning requests on success: first tool_choice required, second auto. Even when the second response simply says ready, it is a billed request. Each response can contain multiple search_context calls. SearchQuerySchema validates each JSON query and the exact tool name is checked. retrieveContext builds a MiniSearch index over title and joined sentence text, boosts titles by 2, ranks matches, breaks score ties by original passage position, and returns at most 4 full passages per query. The final set is the unique title union in discovery order, with original sentence arrays. callRag then uses buildPrompt to request the final answer without tools. Successful normal total: three model requests, not one.

**INTERPRETATION.** Expected advantages and disadvantages: The model can follow a newly discovered entity in the second search, useful for multi-hop questions. Search may miss synonyms, return no matches, or accumulate more than four unique passages across queries. The index is rebuilt per query; retrievalMs includes local indexing/search. This is keyword retrieval, not embeddings, semantic vector search, an internet search, or a global Wikipedia index.

**VERIFIED FROM RESULTS.** Actual evidence and results: No final original RAG measurements were found. Offline callRag and retrieval tests verify search requirements, bounded rounds, malformed query rejection, evidence preservation and preparation-call accounting. Do not report a measured RAG accuracy or claim lower total cost without its missing run records.

**INTERPRETATION.** Git implementation anchor: 0feac99. Lesson: compare final answer quality together with every preparation request, retained evidence and measured resource usage; do not infer a ranking from architecture alone.

## C. Summarization

**VERIFIED FROM CODE** · Evidence: [S12](#s12), [S05](#s05), [S06](#s06), [S14](#s14), [S16](#s16), [S45](#s45), [S46](#s46)

Make short notes from the passages, then ask the model to answer using those notes.

**INTERPRETATION.** Purpose and research hypothesis: Compressing context may make the answer request smaller, but generating the summary costs tokens and can omit or distort an important fact.

**C. Summarization execution flow:** All supplied passages → Summary model request → Validate source_id / sentence_id → Resolve exact source titles → Answer request using only notes

summarization sends SUMMARY_INSTRUCTIONS plus formatContext(context,true). This preparation request contains passages and numeric Source ID values, without the question. It asks for at most 250 words across note text fields. SummaryDraftSchema validates note shape. The implementation checks source IDs and sentence IDs against the supplied context, then restores exact source titles. Notes are grouped by title with their original sentence indices. A second call uses buildPrompt with CONTEXT SUMMARIES and the question; it receives the notes, not the original passages. Successful total: two model requests.

**INTERPRETATION.** Expected advantages and disadvantages: Compact notes may remove redundancy. However, the summary is not tailored to the question, may discard a needed bridge or qualifier, and can hallucinate or paraphrase incorrectly. The 250-word bound is a prompt instruction, not an enforced word-count check. Reference validity does not verify semantic fidelity. Empty notes do not trigger a hidden fallback to full context.

**VERIFIED FROM RESULTS.** Actual evidence and results: No final original summarization measurements were found. Tests verify source mapping, rejection of invalid IDs/truncated outputs, no gold metadata in requests, and preservation of summary-call cost when the answer call fails. Expected compression benefits are hypotheses, not measured conclusions here.

**INTERPRETATION.** Git implementation anchor: 88d9a66. Lesson: compare final answer quality together with every preparation request, retained evidence and measured resource usage; do not infer a ranking from architecture alone.

## D. Hybrid retrieval and summarization

**VERIFIED FROM CODE** · Evidence: [S13](#s13), [S05](#s05), [S06](#s06), [S14](#s14), [S16](#s16), [S45](#s45), [S46](#s46)

First retrieve a smaller evidence set, then summarize that set and answer from the notes.

**INTERPRETATION.** Purpose and research hypothesis: Combining selection and compression might give focused context, but a failure at either stage can lose evidence and the extra calls may outweigh final-input savings.

**D. Hybrid retrieval and summarization execution flow:** Question → shared RAG search → Unique retrieved passages → Existing summarization(question,subset) → Validated notes → Structured answer

hybrid calls searchWithTools(question), then passes only search.context to the existing summarization function. The original question is supplied to that function for its final answer call; the summary request itself still sees only passages. Hybrid concatenates the search modelCalls and summary modelCalls in one result, preserving all preparation usage and errors. There is no unused standalone RAG answer request. Successful total: two planning requests, one summary request and one answer request = four.

**INTERPRETATION.** Expected advantages and disadvantages: The question guides retrieval before the otherwise question-independent summary. Error propagation and usage aggregation are reused. Retrieval misses and summary distortion can compound. Hybrid selectedTitles refers to titles retained in notes; retrieved titles also remain in tool traces, so includedPassages should not be mistaken for the number originally available.

**VERIFIED FROM RESULTS.** Actual evidence and results: No final original hybrid measurements were found. hybrid.test.ts verifies four mocked requests, use of newly discovered entities, exact resolution in retrieved order, empty retrieval behavior, and preserved usage after a later failure. A more complex method is not automatically the best method.

**INTERPRETATION.** Git implementation anchor: 1c494b8. Lesson: compare final answer quality together with every preparation request, retained evidence and measured resource usage; do not infer a ranking from architecture alone.

## E. Prompt Caching

**VERIFIED FROM CODE** · Evidence: [S08](#s08), [S05](#s05), [S06](#s06), [S14](#s14), [S16](#s16), [S45](#s45), [S46](#s46)

Keep the same input text while requesting or observing reuse of a previously processed prompt prefix.

**INTERPRETATION.** Purpose and research hypothesis: Reused input processing may reduce cost or latency for repeated eligible text. It should not change the evidence content; actual benefit depends on provider support, prefix size, timing and previous cache state.

**E. Prompt Caching execution flow:** Same full-context prompt → Explicit marker or implicit observation → One answer request → Provider usage receipt → Cache reads and costs analyzed

caching reuses buildFullContextPrompt. Explicit mode adds cache_control:{type:ephemeral} only to the context text block. Current preflight permits google/gemini-3.1-flash-lite with google-ai-studio or google-vertex; otherwise it returns unsupported with no request. Implicit mode adds no marker and is the same request as Full Context. Each successful attempt has one model call. Context comes before the changing question to enable prefix reuse.

**INTERPRETATION.** Expected advantages and disadvantages: Text and scoring stay comparable to Full Context. A marker is a request, not proof of creation or reuse; a small prefix may not qualify. Full Context is not a verified cache-disabled baseline. Cache writes, reads, per-call hit rate, and read-token fraction are different quantities. Whole-response caching is separately disabled by the client.

**VERIFIED FROM RESULTS.** Actual evidence and results: No final five-method caching measurement is available. A distinct 100-question Full Context/Caching dataset on full-context-caching does exist: both methods score 71% exact match, and 99/100 caching calls report cache reads. Its caching calls cost less but are slower on average. This does not prove that the explicit marker alone caused the observed savings.

**INTERPRETATION.** Git implementation anchor: 4254067. Lesson: compare final answer quality together with every preparation request, retained evidence and measured resource usage; do not infer a ranking from architecture alone.

## Our additional branch: isolation and file-by-file design

**VERIFIED FROM CODE** · Evidence: [S23](#s23), [S24](#s24), [S25](#s25), [S26](#s26), [S27](#s27), [S28](#s28), [S29](#s29), [S30](#s30), [S31](#s31), [S45](#s45)

The remaining research task was evidence robustness, rather than repeating Ashwin’s five-strategy benchmark. The local reflog records creation from origin/rag-hybrid at 36f912b. Source files on that branch remain the reference implementation. At report creation, clean-vs-noisy-context still points to that same commit and experiments/context-noise is untracked; no noise-specific commit history can honestly be invented.

```text
experiments/context-noise/
  .gitignore           ignores generated artifacts/ and results/
  README.md            pilot protocol, review caveats and commands
  pilot.ts             context variants, eligibility, hashes, cost estimate
  create-fixtures.ts   fixed source-specific contradiction curation
  irrelevant.ts        twenty fixed row-to-topic unrelated passages
  fixtures.json        pilot-v2 review data, unchanged gold answers and source quotes
  answer.ts            scoped transport controls around existing fullContext
  run.ts               dry/live CLI, branch/hash gate, sequential requests, JSONL
  report.ts            condition aggregates and paired per-question changes
  pilot.test.ts        thirteen offline checks
  artifacts/           generated contexts.json, review.txt, plan and empty report
  results/4a93b88d-81b4-45ff-9444-348852054b1f/
    plan.json          exact manifest and estimated budget
    runs.jsonl         sixty recorded model responses and measurements
    comparison.json    aggregate / per-question machine-readable results
    comparison.md      generated comparison with later interpretation
    validation.json    post-run integrity checks and changed-answer examples
```

The branch reuses ParquetFileReader, prepareData, fullContext, prompt building, callModel, response schemas, evaluateResult, usage helpers and summarizeResults. It does not import the original executing CLI. Its own JSONL writer uses the same append pattern in a separate directory. answer.ts adds explicit temperature and output allowance locally because the unchanged shared client has no arguments for them.

The sequence evidenced by code, README, tests and this development session is: initial fixed 20-case pilot → offline review → replace ambiguous Russian Civil War item → fix Apple Remote article → replace repeated unrelated passage with twenty topics → regenerate fixtures/contexts/manifest → validate offline → user executes live run → analyze stored outputs. This ordering is documented in artifacts/session context, but precise pre-run edit timestamps and an earlier fixture diff are not verified by Git.

## Design of Clean, Irrelevant and Conflicting Context

**VERIFIED FROM CODE** · Evidence: [S23](#s23), [S24](#s24), [S25](#s25), [S26](#s26), [S28](#s28), [S30](#s30), [S32](#s32), [S47](#s47)

### A. Clean Context

variants selects complete passages whose titles occur in gold supporting facts, preserving source order and every sentence. It is the baseline because all labeled evidence is available without extra unrelated passages. It is a gold-selected clean baseline: it deliberately gives the model a helpful evidence subset. “Clean” does not mean only the individually labeled sentences or a guarantee of perfect answers.

### B. Clean plus irrelevant passages

irrelevant.ts contains twenty separately authored, fixed passages paired to dataset row indices by irrelevantForRow. They were curated during AI-assisted implementation and reviewed against the paired subjects; no model-generation API or random generator is invoked at runtime. Topics are natural processes or craft techniques, and actual lengths are 80–86 words, within the required 70–100 range. Each condition adds exactly one passage. variants checks length, distinct title, absence of normalized reference answer and absence of complete gold-passage subject titles. These are guards; semantic irrelevance is a curation judgment, not something string tests can prove.

### C. Clean plus conflicting passages

createFixtures encodes a source sentence, true value, false value and reason the relation is exclusive. For example, the same university’s founding year becomes 1848 rather than 1838; the same film’s production city becomes Milan rather than Rome. Some cases explicitly deny the original claim to avoid two compatible facts. The Apple Remote case keeps “Keyboard function keys cannot control this program.” The original correct passages are untouched; the false claim appears in a new neutral Reference entry NN passage. Added conflicting passages are 64–95 words, approximately rather than exactly matched to unrelated passage length.

Gold reference answers remain in fixtures for offline validation and scoring, outside model request metadata. The generated source statement can include the true value in a denial, which is intentional conflicting evidence, not accidental leakage of an answer-key field. Both condition names and review rationales are withheld from the model.

### Fairness and request count

All conditions use the same ordered set of 20 questions, references, model/provider, temperature 0, output allowance 1,024, prompt instructions, answer schema, scorer and repetition count. One Full Context request per question per condition produces 20 × 3 × 1 = 60 requests. Search and summary strategies are not rerun. Condition order rotates by question index plus repetition index, reducing a fixed-order confound while leaving noise appended in a fixed position. The pilot is purposively selected for reviewable facts, not randomly sampled for population estimates.

**Controlled additional experiment:** 20 verified questions → variants: clean / +unrelated / +contradiction → Same buildFullContextPrompt → Same controlled Gemini route → 60 separate answer requests → Paired comparison by question ID

## Execution, configuration and saved artifacts

**VERIFIED FROM CODE** · Evidence: [S06](#s06), [S17](#s17), [S21](#s21), [S22](#s22), [S27](#s27), [S28](#s28), [S32](#s32), [S33](#s33)

The saved noise request-start window is 2026-11-23T16:42:55.837Z to 2026-11-23T16:43:38.778Z. These are saved model-call start times; a final completion necessarily follows the last start. The run ID is 4a93b88d-81b4-45ff-9444-348852054b1f. Saved settings and payloads establish what was requested, but the exact shell command typed by the user is not logged. The command below is a code-equivalent reproduction command, not a fabricated terminal transcript.

### Environment and secret handling

OPENROUTER_API_KEY is read from environment memory. OPENROUTER_MODEL and OPENROUTER_PROVIDER are normally read by getModelSettings; the noise runner pins them explicitly for live execution. LOG_LEVEL controls stderr verbosity. .env is ignored by Git and .env.example contains a placeholder. No real key has been read into this report or embedded in HTML.

Important documentation correction: logger.ts loads a local .env if it exists. Therefore even a dry-run invocation can load environment settings indirectly when modules import the logger. Dry-run still sends no model request. The experiment README’s statement that dry-run does not load .env is too strong. Similarly, its “no live measurements” status and “account access not tested” wording reflect pre-run preparation; the saved successful run supersedes those status statements. Source code was left unchanged, and this report records the discrepancy.

### Paid command: display only, do not execute during report generation

```sh
node --env-file-if-exists=.env experiments/context-noise/run.ts --live --repetitions 1 --reviewed-manifest afdc4bdb41ca7a446c59441a42633f5b23db485ed171ba6efefb51a6d52a4938
```

The exact hash above belongs to this reviewed input/code manifest. If protected source, fixtures, dataset or lockfile changes, regenerate and review the dry-run plan and use its new hash. Reusing the old hash should fail before dispatch. Repetitions are supplied separately and recorded in the plan; the current manifest hash itself does not cryptographically bind that CLI repetition count.

### Free offline commands and expected outputs

```sh
npm run typecheck
node --test experiments/context-noise/pilot.test.ts
node experiments/context-noise/run.ts --dry-run --repetitions 1
node experiments/context-noise/report.ts --run 4a93b88d-81b4-45ff-9444-348852054b1f
```

The dry run writes artifacts/contexts.json, review.txt, plan.json and empty comparison templates. The report command reads saved runs.jsonl and plan.json and rewrites comparison.json/comparison.md without contacting the model. It overwrites a manually appended interpretation in comparison.md, so preserve narrative material in this complete research report. Neither command was run against the original historical output files while building this report.

## Testing and quality assurance: what each check protects

**VERIFIED FROM RESULTS** · Evidence: [S30](#s30), [S35](#s35), [S36](#s36), [S37](#s37), [S38](#s38), [S39](#s39), [S40](#s40), [S41](#s41), [S50](#s50), [S23](#s23), [S28](#s28), [S29](#s29)

| Check | Why it matters | Actual verification / limit |
|---|---|---|
| TypeScript checking | Catch inconsistent field names and types before running. | npm run typecheck passed at report creation. It is not a truth checker or a model-quality test. |
| Offline unit tests | Verify deterministic functions and fake API paths. | 13/13 pilot tests passed in a temporary copy; 72/74 original tests passed. All model transports used by tests are mocked. |
| Source validation | Avoid paying for a question whose labeled evidence is absent. | prepareData; every selected pilot case passes. One invalid Distractor row is excluded. |
| Same-ID grid | Avoid comparing different questions between conditions. | 20 unique IDs; exactly 60 question/condition/repetition keys; no duplicates or missing cells. |
| Reference/evidence invariants | Prevent noise construction from altering the correct answer or removing correct evidence. | Tests compare all complete supporting arrays and sentence indices; post-run reference fields and context hashes checked. |
| Reviewed contradictions / irrelevance | Ensure the intervention means what the study claims. | Independent expected substitutions in tests plus paired semantic review. Tests cannot prove arbitrary text is truly irrelevant or contradictory. |
| Deterministic regeneration | Avoid hidden random changes between review and execution. | createFixtures repeated output equals frozen formatted fixtures.json; repeated variants and manifests are identical. |
| Manifest hashing | Bind a review to a specific data/code configuration. | SHA-256 of serialized manifest, dataset bytes, fixture JSON, context JSON, source bytes and lockfile. All 60 rows share the saved hash. |
| Reviewed-manifest gate | Stop a changed context/code version before live dispatch. | run.ts compares supplied hash with current loadPilot manifest. This is a consistency check, not an authenticated signature proving who reviewed it. |
| Request checks | Verify actual settings rather than trusting descriptive metadata. | Saved request bodies use model, provider, temperature and output allowance from the plan; one request per attempt. |
| Response validation | Reject malformed output, refusals and truncation. | callModel checks finish_reason, refusal, JSON parsing and Zod schema. 60 saved final outputs are valid and nonempty. |
| Duplicate / missing detection | Ensure every planned cell exists exactly once. | compare validates duplicate keys and IDs; post-run audit checks the full expected grid. |
| Score recalculation | Detect a saved metric that disagrees with its answer/reference. | evaluateResult on each saved output reproduces all 60 saved score objects. |
| Usage/cost verification | Avoid treating missing telemetry as zero or double-counting calls. | All 60 have known prompt/completion/total/cost; per-call and attempt usage agree; token arithmetic checked. Provider billing ledger not audited. |
| API error detection | Keep transport errors distinct from wrong answers. | 0 failed statuses, 0 recorded errors; schema-invalid responses would fail before scoring. |
| Result preservation | Protect the original experiments while documenting. | Report-time SHA-256 comparison covers source, tests, experiment files and historical outputs; only reports/ is written. |

The 13 pilot test names cover: eligible dataset/ID grid; original evidence/reference preservation; twenty distinct unrelated passages; Tosca replacement; Apple Remote grammar; twenty contradiction expectations; deterministic regeneration; invalid fixture rejection; request/cost estimation; controlled mocked Full Context request; model failure/no retry; comparison/paired deltas; dry-run network prohibition and reviewed-hash rejection. The test that executes dry-run writes artifacts, so report-time verification ran an unchanged copy under /private/tmp instead of rewriting the real artifacts.

```text
Report-time offline verification:
  Node: v24.21.0; npm: 11.19.0
  npm run typecheck: PASS
  node --test /private/tmp/context-report-offline/experiments/context-noise/pilot.test.ts:
    tests 13, pass 13, fail 0
  node --test tests/*.test.ts:
    tests 74, pass 72, fail 2
  Both original failures:
    Invalid supporting sentence for 5a8b57f25542995d1e6f1371: Scott Derrickson [0].
```

The original failing tests are tests/loadData.test.ts (real-row loading) and tests/retrieveContext.test.ts (real retrieval prompt). The failures are caused by the current original validation file, not a demonstrated regression introduced by the noise experiment. We did not remove those checks or relabel the suite as all passing.

## Documented challenges, corrections and lessons

**VERIFIED FROM CODE** · Evidence: [S31](#s31), [S24](#s24), [S25](#s25), [S26](#s26), [S30](#s30), [S35](#s35), [S38](#s38), [S39](#s39), [S45](#s45), [S46](#s46), [S22](#s22)

| Issue / evidence | How discovered and why it matters | Actual response and lesson |
|---|---|---|
| Original validation evidence missing | Real-data loader and retrieval tests fail on Scott Derrickson [0]. Another-branch alignment notes document broader missing facts. | Kept original checks intact; selected the separate verified Distractor file for the noise pilot. Do not claim the two local files are interchangeable. |
| Distractor sentence 902 | Full-file eligibility validation detects an out-of-range supporting reference. | Exclude that row from eligibility, preserve file and gold labels. Structural checking precedes spending. |
| Russian Civil War question | User review flagged pilot question 13; selection and correction recorded in README/source/tests. | Replace with Tosca, whose complete passages identify the performer/film/production city. The exact reason the earlier wording was ambiguous is not independently encoded in Git. |
| Apple Remote grammar | User found “the a USB game controller” in a replacement string. | Explicit grammatical correction in createFixtures, regression test, denial of keyboard control retained. Semantic interventions still need proofreading. |
| Repeated irrelevant topic | User review found all initial cases shared paper folding. | Twenty fixed row/topic assignments, 80–86 words, with distinctness/length tests and per-case review. Earlier untracked version is not recoverable as a Git diff. |
| Cost uncertainty | Preparation estimate assumed 256 output tokens per answer and character-based input proxy. | Record estimates separately from actual provider usage.cost. Actual final total is $0.01525475, not the $0.0390125 estimate. |
| Historical methodology mismatch | Older CSVs use Gemini 2.5 and title-level citation output; another-branch alignment document explicitly distinguishes profiles. | Do not merge those scores with sentence-level noise results or label them as the final five-method benchmark. |
| Potential cache confounding | Full Context allows provider caching; cache markers alone do not establish reuse. | Record actual cache reads/writes; all noise reads are zero. Other-branch caching data remains a separate observational comparison. |
| Stale status documentation | README pre-run status says no live measurements; logger source contradicts “no .env load”. | This report uses saved records and actual logger behavior; experiment docs/code left unchanged under the reporting-only scope. |
| Missing final report/benchmark evidence | No existing HTML or five-strategy result records found locally. | Create integrated report at requested path and label missing quantitative cells. Never manufacture values to complete a chart. |

## Beginner-friendly reproducibility guide

**VERIFIED FROM CODE** · Evidence: [S01](#s01), [S19](#s19), [S20](#s20), [S21](#s21), [S22](#s22), [S23](#s23), [S28](#s28), [S29](#s29), [S32](#s32), [S45](#s45), [S46](#s46)

### 1. Obtain the exact project and dependencies

Use a terminal, Git, Node 24+ and npm. The editor is your choice. Start from the repository and branch shown in this report. Important publication limitation: the noise directory is currently untracked, so cloning the remote alone may not contain it. Obtain these experiment files and the private/local dataset bytes separately; do not assume they have been pushed.

```sh
git clone https://github.com/smtausif/ContextEngineering.git
cd ContextEngineering
# Inspect available branches; the untracked pilot files must also be supplied.
git branch -a
node --version
npm --version
npm ci
```

npm ci installs the versions in package-lock.json and may download packages; it is not a model request. It was not run while preparing this report. Keep the reviewed lockfile. Git commit 36f912b identifies the shared reference code; the saved manifest identifies the additional untracked implementation.

### 2. Supply and verify the dataset

Place the matching Distractor validation Parquet file at data/distractor-validation.parquet for the noise pilot. Use the saved dataset SHA-256 as the identity check; an unrelated file with the same name is not equivalent. data/readme.md points to HotpotQA on Hugging Face, but the exact original upstream revision and download command are not recorded. Obtain the exact original validation file before trying to reproduce Ashwin’s successful benchmark; the current default file fails its own evidence checks.

```sh
shasum -a 256 data/distractor-validation.parquet
# Expected: c20b638ca82b21d04fe12e14ff417ad05153d4d215a65de54497fca4e972f7c6
```

### 3. Configure locally without disclosing credentials

Copy .env.example to a local .env and insert a key privately. Do not paste the real value into reports, source, screenshots or shell history. The noise CLI uses the same model/provider as the saved plan, irrespective of a different local model preference. A reproduction of an original benchmark should preserve its recorded settings; these are unavailable for Ashwin’s final selected run beyond user-reported model/count/repetitions.

```dotenv
# Template only; replace the placeholder privately in .env.
OPENROUTER_API_KEY=YOUR_PRIVATE_KEY
OPENROUTER_MODEL=google/gemini-3.1-flash-lite
OPENROUTER_PROVIDER=google-ai-studio
LOG_LEVEL=info
```

### 4. Free offline preparation

```sh
npm run typecheck
npm test
node --test experiments/context-noise/pilot.test.ts
node experiments/context-noise/run.ts --dry-run --repetitions 1
```

Expect 13 passing pilot tests and sixty context variants, no measured model responses. The current original npm test suite has the documented two data failures; obtain matching evidence-complete original data instead of weakening validation. Inspect every source/changed claim in artifacts/review.txt, and use artifacts/plan.json for the new reviewed manifest. Dry-run/tests write offline artifacts, so copy them first if preservation is required.

### 5. Paid strategy commands: examples only, not an execution transcript

```sh
# PAID: do not run during report generation; validate original dataset first.
npm run ask -- --count 100 --start 0 --repetitions 1
npm run ask:rag -- --count 100 --start 0 --repetitions 1
npm run ask:summarization -- --count 100 --start 0 --repetitions 1
npm run ask:hybrid -- --count 100 --start 0 --repetitions 1
npm run ask:caching -- --count 100 --start 0 --repetitions 1
```

These are supported commands derived from package scripts and runner flags, not verified commands from the missing final benchmark. If all succeed at one repetition, their normal call counts are respectively 100, 300, 200, 400 and 100. Actual paid totals depend on successful progression and any failures; RAG/Hybrid preparation calls count too.

### 6. Paid noise command and safe result inspection

```sh
# PAID: only after reviewing inputs and receiving approval.
node --env-file-if-exists=.env experiments/context-noise/run.ts --live --repetitions 1 --reviewed-manifest afdc4bdb41ca7a446c59441a42633f5b23db485ed171ba6efefb51a6d52a4938
```

A new approved invocation creates a new UUID directory under experiments/context-noise/results/. It does not append to Ashwin’s results. A failed call is saved and stops the run without retry, and finally writes a partial report. There is no automatic resume in the noise runner; do not borrow another branch’s resume behavior. A timeout may have been billed even if local usage is unknown.

```sh
# OFFLINE: inspect the saved result files, then regenerate only that run's comparison.
node experiments/context-noise/report.ts --run 4a93b88d-81b4-45ff-9444-348852054b1f
# Original-run aggregation is offline, but writes the historical results/summary.json:
# npm run summarize -- --run-id ORIGINAL_RUN_ID
# Do not use that fixed-path writer when preserving historical outputs.
```

### 7. Troubleshooting

| Symptom | Check / response |
|---|---|
| Unsupported caching | Use the specifically supported model/provider combination. An explicit marker is still not proof of a hit. |
| Manifest rejected | Data, fixtures or protected implementation may have changed. Re-run dry preparation, review actual text, and use the matching hash; do not bypass the check. |
| Dataset evidence error | Wrong split/variant, a missing gold title or bad sentence index. Do not skip evidence validation or silently swap sources. |
| Missing key | Configure the local environment privately. Do not print the key to diagnose it. |
| HTTP error / timeout | Inspect saved status and available usage. Do not assume zero cost, add automatic retries, or silently switch providers. |
| Markdown report loses narrative | report.ts regenerates comparison.md. Keep extended interpretation in this complete report or preserve the prior file. |
| Original benchmark missing | Obtain the actual run JSONL, selected IDs, settings and summary; a blank spreadsheet is not a substitute. |

# PART 2: RESEARCH RESULTS AND FINAL ASSIGNMENT

## Five-strategy benchmark: verified implementation, missing final measurements

**NOT VERIFIED** · Evidence: [S01](#s01), [S07](#s07), [S08](#s08), [S09](#s09), [S10](#s10), [S11](#s11), [S12](#s12), [S13](#s13), [S43](#s43), [S45](#s45), [S46](#s46)

Ashwin’s completed five-strategy benchmark is reported in the supplied project context, but its final quantitative records were not found in this checkout or the inspected local branch snapshots. The spreadsheet is a blank recording template, not measured evidence. The other branch’s ashwin-final-run.json records user-confirmed 100 questions, one repetition and Gemini 3.1 Flash Lite, but runId, provider and validationSelectionFingerprint remain null. The final five-method accuracy, F1, token, cost and latency values cannot be reconstructed honestly from that metadata.

| Method | Successful calls/question from code | Final accuracy / Answer F1 / Citation F1 | Final latency / tokens / cost / cache |
|---|---|---|---|
| Full Context | 1 | NOT VERIFIED | NOT VERIFIED |
| RAG | 3 | NOT VERIFIED | NOT VERIFIED |
| Summarization | 2 | NOT VERIFIED | NOT VERIFIED |
| Hybrid | 4 | NOT VERIFIED | NOT VERIFIED |
| Prompt Caching | 1 | NOT VERIFIED | NOT VERIFIED |

To complete the original numerical comparison, supply its runs.jsonl or equivalent final export, run IDs, model/provider route, selected IDs/dataset identity, repetitions and prompt revision. The report intentionally leaves these cells unknown rather than plotting zero or substituting results from a different experiment.

## Separate archived Full Context/Caching comparison

**VERIFIED FROM RESULTS** · Evidence: [S46](#s46), [S18](#s18), [S16](#s16)

A different saved comparison exists in local branch full-context-caching at aa11bbf: results/exploratory-benchmark-af365f10-0a86-4e70-8b3e-84e525530381.jsonl. It contains 200 completed rows: 100 Full Context and 100 Caching, one repetition, Gemini 3.1 Flash Lite / Google AI Studio, Distractor first-100 selection. The branch documentation says generation temperature/output limits are omitted and order is Full Context then Caching for each question. Request starts span 2026-11-19T23:06:44.576Z to 2026-11-19T23:11:12.687Z. This is not a five-strategy benchmark.

| Method | Completed | Accuracy | Answer F1 | Citation F1 | Mean end-to-end ms | Input tokens | Output tokens | Total tokens | Reported USD | Cache hit rate |
|---|---|---|---|---|---|---|---|---|---|---|
| full_context | 100 | 71.0% | 0.8227 | 0.7587 | 781.82 | 205232 | 6724 | 211956 | 0.06139400 | 0.0% |
| caching | 100 | 71.0% | 0.8209 | 0.7590 | 1891.35 | 205331 | 6488 | 211819 | 0.03243420 | 99.0% |

For this separate sample, both methods achieve 71% exact match. Caching reports 99 hits out of 100 measured calls, with 202,098 cache-read tokens and the same reported cache-write total. These counters overlap and must not be added as disjoint prompt tokens. Reported cost falls from $0.061394 to $0.0324342 (47.17% lower), while mean end-to-end latency rises from 781.82 ms to 1,891.35 ms (141.92% higher). These are descriptive observations, not proof that caching must improve speed or that an explicit marker alone caused the cost difference.

The two archived costs sum to $0.0938282, covering this 200-request file only; earlier pilots and diagnostics are separate. Other-branch history also contains training-split CSV experiments with Gemini 2.5 Flash Lite and title-level citations. Their scores are not merged here. To inspect archived evidence without switching branches: git show full-context-caching: followed by the path above.

## Clean versus noisy context: final results

**VERIFIED FROM RESULTS** · Evidence: [S32](#s32), [S33](#s33), [S34](#s34), [S35](#s35)

All sixty expected requests completed successfully: twenty scored attempts per condition, zero recorded API errors, zero missing responses and complete core measurements. Every row matches the reviewed manifest afdc4bdb41ca7a446c59441a42633f5b23db485ed171ba6efefb51a6d52a4938. Actual route is Google AI Studio and returned model is google/gemini-3.1-flash-lite. Provider cache read/write counters are zero in all sixty calls.

| Condition | Correct | Accuracy | Answer F1 | Citation P | Citation R | Citation F1 | Mean ms | Median ms | Input tokens | Output tokens | Total tokens | Reported USD |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| clean | 17/20 | 85.0% | 0.9412 | 0.9375 | 0.7458 | 0.7912 | 735.85 | 711.95 | 14127 | 812 | 14939 | 0.00474975 |
| irrelevant | 17/20 | 85.0% | 0.9429 | 0.9375 | 0.7458 | 0.7912 | 731.39 | 716.60 | 16170 | 808 | 16978 | 0.00525450 |
| conflicting | 12/20 | 60.0% | 0.7262 | 0.7958 | 0.5917 | 0.6462 | 705.90 | 714.48 | 16460 | 757 | 17217 | 0.00525050 |

Totals across conditions are 49,134 tokens and $0.01525475 in provider-reported API cost. F1 values are macro means of per-attempt scores; latency is the mean of per-attempt end-to-end times. Token/cost columns are totals, not averages. The next chart uses only the verified noise data; an unavailable original benchmark is never represented as a zero-valued bar.

The HTML adds an interactive metric selector for accuracy, both F1 measures, latency, total tokens and total cost. The static table above is the printable and accessible numerical equivalent.

## Metrics and calculations: worked examples from saved outputs

**VERIFIED FROM CODE** · Evidence: [S14](#s14), [S16](#s16), [S18](#s18), [S33](#s33), [S34](#s34), [S35](#s35), [S32](#s32)

### 1. Answer accuracy / exact match

Accuracy = sum of per-attempt exactMatch / number of completed scored attempts. Clean has 17 exact matches / 20 = 0.85 = 85%. Conflicting has 12 / 20 = 60%. Normalize lowercase text, remove ASCII punctuation and the articles a/an/the, then collapse spaces. Do not silently remove words such as from, translate names, or use an LLM judge. Only equality after these rules earns exact-match credit.

### 2. Answer F1 and why 85% accuracy can coexist with 0.941 Answer F1

Answer F1 measures word overlap, counting repeated tokens as a multiset. Precision = overlapping token count / predicted token count; recall = overlapping count / gold token count; F1 = 2PR/(P+R). A wrong exact match can still share many words. Mismatched yes/no/noanswer categories get zero partial credit. The prompt’s insufficient evidence response is not specially converted into the evaluator category noanswer.

| Clean non-exact-match answer | Gold | Saved Answer F1 | Why it is not exact |
|---|---|---|---|
| United States ambassador to Ghana, United States ambassador to Czechoslovakia, and Chief of Protocol of the United States | Chief of Protocol | 0.300000 | Additional wording or missing reference word |
| 1986 to 2013 | from 1986 to 2013 | 0.857143 | Additional wording or missing reference word |
| Mumbai, Maharashtra | Mumbai | 0.666667 | Additional wording or missing reference word |

For Alex Ferguson, gold “from 1986 to 2013” has four words, while prediction “1986 to 2013” has three, with three shared. Precision=3/3=1; recall=3/4=0.75; F1=6/7≈0.857143, but exactMatch=0. For Mumbai versus Mumbai, Maharashtra, precision=1/2, recall=1, F1=2/3. Clean mean F1 = (17 × 1 + 0.3 + 6/7 + 2/3) / 20 = 0.941190476. Accuracy and word overlap answer different questions; neither alone measures semantic correctness perfectly.

### 3. Citation F1

Predicted and gold citations are unique (exact title, original sentence index) pairs. Title strings are not answer-normalized. Precision = matching pairs / predicted pairs; recall = matching pairs / gold pairs. For the clean Tosca response, the model cites four pairs, including both gold pairs plus two extra Tosca sentences. Precision=2/4=0.5, recall=2/2=1, F1=2/3≈0.666667. Some extra citations are relevant bridge evidence but are not labeled gold; the metric measures label agreement, not independent support quality.

### 4. Latency

Model latency in callModel surrounds the SDK request and response validation. Strategy end-to-end latency surrounds the complete strategy invocation. Noise end-to-end timing includes its small local adapter overhead, but excludes dataset loading, fixture construction, scoring and disk writes. Clean mean is 735.85055 ms: sum of twenty recorded intervals divided by twenty. The median 711.952854 ms describes the middle of the sorted twenty intervals and is less influenced by a slow outlier. Service/network variability and single-repetition sampling limit causal timing conclusions.

### 5. Tokens and API cost

Token counts are provider telemetry, not word counts. Clean input 14,127 + output 812 = 14,939 total. Irrelevant input 16,170 + output 808 = 16,978. Conflicting input 16,460 + output 757 = 17,217. All preparation requests count in multi-call methods, and aggregation uses individual receipts rather than adding them again to already aggregated top-level usage.

Primary measured cost = sum of provider-reported usage.cost, not a local price estimate. As a cross-check using the preflight rates saved in the plan, clean cost = (14,127 × $0.25 + 812 × $1.50) / 1,000,000 = $0.00474975, agreeing with the saved total. The first clean request reports 683 input and 59 output tokens: (683 × 0.25 + 59 × 1.50)/1,000,000 = $0.00025925. Reported totals are not a reconciliation of account credit fees, taxes or a provider billing ledger.

The preflight estimated $0.0390125 using serialized characters/4 plus 200 framing/schema tokens per request and an assumed 256 output tokens per response. Its 1,024-output-token scenario was $0.1081325, not a guaranteed cap. Actual average output is 2,377/60≈39.62 tokens, helping explain the lower observed total cost. No price listing or account endpoint was queried to produce this report.

### 6. Cache hit rate and percentage changes

A cache hit is reported cached_tokens > 0. Hit rate = calls with positive known reads / calls with known valid reads. Noise: 0/60=0%, with every read count measured; that differs from unknown. Read fraction = cached input tokens / prompt tokens for a call. Writes are retained separately. Other-branch Caching: 99/100=99% observed hit rate, which is not 99% of input tokens.

| Comparison versus Clean | Calculation | Observed change |
|---|---|---|
| Irrelevant tokens | (16,978 − 14,939)/14,939 × 100 | +13.65% |
| Conflicting tokens | (17,217 − 14,939)/14,939 × 100 | +15.25% |
| Irrelevant reported cost | (0.00525450 − 0.00474975)/0.00474975 × 100 | +10.63% |
| Conflicting reported cost | (0.00525050 − 0.00474975)/0.00474975 × 100 | +10.54% |
| Conflicting accuracy difference | 60% − 85% | −25 percentage points |
| Conflicting relative accuracy change | (60 − 85)/85 × 100 | −29.41% |
| Conflicting citation F1 difference | 0.646190476 − 0.791190476 | −0.145 (14.5 percentage points on a 0–100 scale) |

A longer prompt contains more tokens whether its claims are useful or harmful. The model can spend more input processing while selecting a false assertion and lowering accuracy. More tokens are not evidence of better reasoning. Conflicting output is slightly shorter, so its total cost is a little below irrelevant despite its larger total token count; input and output tokens have different prices.

## One real question through all three conditions: Tosca

**VERIFIED FROM RESULTS** · Evidence: [S26](#s26), [S33](#s33), [S34](#s34), [S47](#s47)

Question ID 5a87c13f5542996e4f30890c: In what city did the "Prince of tenors" star in a film based on an opera by Giacomo Puccini?

Reference answer: Rome. Gold pairs: Tosca (1956 film), sentence 2; Franco Corelli, sentence 2. The complete retained passages identify Corelli’s nickname, the film’s cast and opera, and the production location. The following are the actual context blocks from the saved request bodies, not reconstructed paraphrases. The system instructions and user question are shared across conditions.

### Clean context and actual output

```text
CONTEXT

Title: Franco Corelli
[0] Franco Corelli (8 April 1921 – 29 October 2003) was an Italian tenor who had a major international opera career between 1951 and 1976.
[1]  Associated in particular with the spinto and dramatic tenor roles of the Italian repertory, he was celebrated universally for his powerhouse voice, electrifying top notes, clear timbre, passionate singing and remarkable performances.
[2]  Dubbed the "Prince of tenors", Corelli possessed handsome features and a charismatic stage presence which endeared him to audiences.
[3]  He had a long and fruitful partnership with the Metropolitan Opera in New York City between 1961 and 1975.
[4]  He also appeared on the stages of most of the major opera houses in Europe and with opera companies throughout North America.

Title: Tosca (1956 film)
[0] Tosca is a 1956 Italian musical film directed by Carmine Gallone and starring Franca Duval, Afro Poli and Franco Corelli.
[1]  It is based on the opera "Tosca" by Giacomo Puccini.
[2]  It was made at Cinecittà in Rome.
```

```json
{
  "answer": "Rome",
  "supporting_facts": [
    {
      "title": "Franco Corelli",
      "sentence_id": 2
    },
    {
      "title": "Tosca (1956 film)",
      "sentence_id": 0
    },
    {
      "title": "Tosca (1956 film)",
      "sentence_id": 1
    },
    {
      "title": "Tosca (1956 film)",
      "sentence_id": 2
    }
  ]
}
```

| EM | Answer F1 | Citation F1 | End-to-end ms | Tokens | Reported USD |
|---|---|---|---|---|---|
| 1 | 1.0000 | 0.6667 | 612.31 | 833 | 0.00030200 |

### Irrelevant context and actual output

```text
CONTEXT

Title: Franco Corelli
[0] Franco Corelli (8 April 1921 – 29 October 2003) was an Italian tenor who had a major international opera career between 1951 and 1976.
[1]  Associated in particular with the spinto and dramatic tenor roles of the Italian repertory, he was celebrated universally for his powerhouse voice, electrifying top notes, clear timbre, passionate singing and remarkable performances.
[2]  Dubbed the "Prince of tenors", Corelli possessed handsome features and a charismatic stage presence which endeared him to audiences.
[3]  He had a long and fruitful partnership with the Metropolitan Opera in New York City between 1961 and 1975.
[4]  He also appeared on the stages of most of the major opera houses in Europe and with opera companies throughout North America.

Title: Tosca (1956 film)
[0] Tosca is a 1956 Italian musical film directed by Carmine Gallone and starring Franca Duval, Afro Poli and Franco Corelli.
[1]  It is based on the opera "Tosca" by Giacomo Puccini.
[2]  It was made at Cinecittà in Rome.

Title: Knitted fabric loops
[0] Knitted fabric consists of interlocking loops of yarn. A new loop is drawn through an existing loop, linking successive rows into a flexible sheet. Different arrangements of stitches produce smooth areas, ridges, or openings. The thickness of the yarn and the size of the needles influence how closely the loops sit together. A loose fabric stretches and drapes differently from a tightly worked fabric. Securing the remaining loops at the edge prevents them from unraveling when the finished piece is handled or washed.
```

```json
{
  "answer": "Rome",
  "supporting_facts": [
    {
      "title": "Franco Corelli",
      "sentence_id": 2
    },
    {
      "title": "Tosca (1956 film)",
      "sentence_id": 0
    },
    {
      "title": "Tosca (1956 film)",
      "sentence_id": 1
    },
    {
      "title": "Tosca (1956 film)",
      "sentence_id": 2
    }
  ]
}
```

| EM | Answer F1 | Citation F1 | End-to-end ms | Tokens | Reported USD |
|---|---|---|---|---|---|
| 1 | 1.0000 | 0.6667 | 714.25 | 940 | 0.00032875 |

### Conflicting context and actual output

```text
CONTEXT

Title: Franco Corelli
[0] Franco Corelli (8 April 1921 – 29 October 2003) was an Italian tenor who had a major international opera career between 1951 and 1976.
[1]  Associated in particular with the spinto and dramatic tenor roles of the Italian repertory, he was celebrated universally for his powerhouse voice, electrifying top notes, clear timbre, passionate singing and remarkable performances.
[2]  Dubbed the "Prince of tenors", Corelli possessed handsome features and a charismatic stage presence which endeared him to audiences.
[3]  He had a long and fruitful partnership with the Metropolitan Opera in New York City between 1961 and 1975.
[4]  He also appeared on the stages of most of the major opera houses in Europe and with opera companies throughout North America.

Title: Tosca (1956 film)
[0] Tosca is a 1956 Italian musical film directed by Carmine Gallone and starring Franca Duval, Afro Poli and Franco Corelli.
[1]  It is based on the opera "Tosca" by Giacomo Puccini.
[2]  It was made at Cinecittà in Rome.

Title: Reference entry 13
[0] Tosca, the 1956 film starring Franco Corelli, was made in Milan. Its production location was Milan rather than Rome.
[1] This entry concerns Tosca (1956 film) and the specific historical detail described here. The dates and names identify the subject of the entry. The description refers to this subject alone, rather than to similarly named people, places, organizations, or works. It records a single account of that detail for reference purposes.
```

```json
{
  "answer": "Milan",
  "supporting_facts": [
    {
      "title": "Franco Corelli",
      "sentence_id": 2
    },
    {
      "title": "Tosca (1956 film)",
      "sentence_id": 1
    },
    {
      "title": "Reference entry 13",
      "sentence_id": 0
    }
  ]
}
```

| EM | Answer F1 | Citation F1 | End-to-end ms | Tokens | Reported USD |
|---|---|---|---|---|---|
| 0 | 0.0000 | 0.4000 | 716.79 | 921 | 0.00029650 |

**INTERPRETATION.** The irrelevant knitting passage does not change the answer Rome. The conflicting neutral source directly names the same film and supplies Milan; the model answers Milan and cites that added source. This is a concrete observed susceptibility, not proof that all contradictory inputs always override correct evidence. Correct source passages remain in the input in all three cases.

## All twenty question-level results

**VERIFIED FROM RESULTS** · Evidence: [S26](#s26), [S33](#s33), [S34](#s34), [S35](#s35)

Search or filter the question cards in HTML. Each card retains the expected answer, actual answers and citations, per-condition scores, timing, tokens and cost. The Markdown table provides all sixty answer summaries; detailed saved JSON remains the authoritative record. “Changed” means an exact-match or citation-F1 change versus clean, rather than a cosmetic reordering of citations.

| Q | Condition | Actual answer | Gold | EM | Answer F1 | Citation F1 | Latency ms | Tokens | USD |
|---|---|---|---|---|---|---|---|---|---|
| 1 | clean | United States ambassador to Ghana, United States ambassador to Czechoslovakia, and Chief of Protocol of the United States | Chief of Protocol | 0 | 0.3000 | 0.8000 | 1077.91 | 742 | 0.00025925 |
| 1 | irrelevant | United States ambassador to Ghana and to Czechoslovakia and Chief of Protocol of the United States | Chief of Protocol | 0 | 0.3333 | 0.8000 | 800.18 | 843 | 0.00027950 |
| 1 | conflicting | United States ambassador to Ghana and to Czechoslovakia | Chief of Protocol | 0 | 0.0000 | 0.8000 | 717.18 | 841 | 0.00026900 |
| 2 | clean | Greenwich Village, New York City | Greenwich Village, New York City | 1 | 1.0000 | 1.0000 | 914.60 | 709 | 0.00023100 |
| 2 | irrelevant | Greenwich Village, New York City | Greenwich Village, New York City | 1 | 1.0000 | 1.0000 | 817.85 | 811 | 0.00025650 |
| 2 | conflicting | Albany, New York | Greenwich Village, New York City | 0 | 0.5000 | 0.5000 | 720.50 | 813 | 0.00025575 |
| 3 | clean | YG Entertainment | YG Entertainment | 1 | 1.0000 | 0.6667 | 698.00 | 696 | 0.00020275 |
| 3 | irrelevant | YG Entertainment | YG Entertainment | 1 | 1.0000 | 0.6667 | 812.81 | 799 | 0.00022850 |
| 3 | conflicting | YG Entertainment | YG Entertainment | 1 | 1.0000 | 0.6667 | 629.35 | 811 | 0.00023150 |
| 4 | clean | 3,677 seated | 3,677 seated | 1 | 1.0000 | 1.0000 | 588.50 | 742 | 0.00024050 |
| 4 | irrelevant | 3,677 seated | 3,677 seated | 1 | 1.0000 | 1.0000 | 750.35 | 841 | 0.00026525 |
| 4 | conflicting | 3,677 seated | 3,677 seated | 1 | 1.0000 | 1.0000 | 704.95 | 878 | 0.00027450 |
| 5 | clean | 1999 | 1999 | 1 | 1.0000 | 0.8571 | 936.17 | 807 | 0.00030425 |
| 5 | irrelevant | 1999 | 1999 | 1 | 1.0000 | 0.8571 | 714.19 | 911 | 0.00033025 |
| 5 | conflicting | 1999 | 1999 | 1 | 1.0000 | 0.8571 | 716.73 | 915 | 0.00033125 |
| 6 | clean | 1986 to 2013 | from 1986 to 2013 | 0 | 0.8571 | 0.8000 | 1019.84 | 774 | 0.00025850 |
| 6 | irrelevant | 1986 to 2013 | from 1986 to 2013 | 0 | 0.8571 | 0.8000 | 717.46 | 878 | 0.00028450 |
| 6 | conflicting | 1986 to 2013 | from 1986 to 2013 | 0 | 0.8571 | 0.8000 | 702.40 | 891 | 0.00028775 |
| 7 | clean | North Atlantic Conference | the North Atlantic Conference | 1 | 1.0000 | 0.8000 | 564.20 | 667 | 0.00021550 |
| 7 | irrelevant | North Atlantic Conference | the North Atlantic Conference | 1 | 1.0000 | 0.8000 | 866.41 | 765 | 0.00024000 |
| 7 | conflicting | North Atlantic Conference | the North Atlantic Conference | 1 | 1.0000 | 0.5000 | 715.68 | 768 | 0.00022075 |
| 8 | clean | 1969 until 1974 | 1969 until 1974 | 1 | 1.0000 | 1.0000 | 715.94 | 793 | 0.00025325 |
| 8 | irrelevant | 1969 until 1974 | 1969 until 1974 | 1 | 1.0000 | 1.0000 | 747.56 | 897 | 0.00027925 |
| 8 | conflicting | 1969 until 1974 | 1969 until 1974 | 1 | 1.0000 | 1.0000 | 785.07 | 934 | 0.00028850 |
| 9 | clean | keyboard function keys | keyboard function keys | 1 | 1.0000 | 0.4000 | 709.00 | 803 | 0.00023200 |
| 9 | irrelevant | keyboard function keys | keyboard function keys | 1 | 1.0000 | 0.4000 | 713.30 | 903 | 0.00025700 |
| 9 | conflicting | USB game controller | keyboard function keys | 0 | 0.0000 | 0.0000 | 612.68 | 909 | 0.00025850 |
| 10 | clean | World's Best Goalkeeper | World's Best Goalkeeper | 1 | 1.0000 | 0.5000 | 714.91 | 705 | 0.00021000 |
| 10 | irrelevant | World's Best Goalkeeper | World's Best Goalkeeper | 1 | 1.0000 | 0.5000 | 715.74 | 805 | 0.00023500 |
| 10 | conflicting | World's Best Goalkeeper | World's Best Goalkeeper | 1 | 1.0000 | 0.5000 | 715.88 | 856 | 0.00024775 |
| 11 | clean | 1838 | 1838 | 1 | 1.0000 | 0.6667 | 633.06 | 916 | 0.00025900 |
| 11 | irrelevant | 1838 | 1838 | 1 | 1.0000 | 0.6667 | 817.32 | 1018 | 0.00028450 |
| 11 | conflicting | 1838 | 1838 | 1 | 1.0000 | 0.6667 | 690.54 | 1025 | 0.00028625 |
| 12 | clean | Fujioka, Gunma | Fujioka, Gunma | 1 | 1.0000 | 0.6667 | 715.17 | 711 | 0.00021025 |
| 12 | irrelevant | Fujioka, Gunma | Fujioka, Gunma | 1 | 1.0000 | 0.6667 | 714.52 | 811 | 0.00023525 |
| 12 | conflicting | Fujioka, Gunma | Fujioka, Gunma | 1 | 1.0000 | 0.6667 | 616.91 | 818 | 0.00023700 |
| 13 | clean | Rome | Rome | 1 | 1.0000 | 0.6667 | 612.31 | 833 | 0.00030200 |
| 13 | irrelevant | Rome | Rome | 1 | 1.0000 | 0.6667 | 714.25 | 940 | 0.00032875 |
| 13 | conflicting | Milan | Rome | 0 | 0.0000 | 0.4000 | 716.79 | 921 | 0.00029650 |
| 14 | clean | 2000 | 2000 | 1 | 1.0000 | 1.0000 | 822.29 | 743 | 0.00023325 |
| 14 | irrelevant | 2000 | 2000 | 1 | 1.0000 | 1.0000 | 718.71 | 850 | 0.00026000 |
| 14 | conflicting | 2004 | 2000 | 0 | 0.0000 | 0.0000 | 713.27 | 847 | 0.00024425 |
| 15 | clean | New York City | New York City | 1 | 1.0000 | 1.0000 | 727.65 | 619 | 0.00019850 |
| 15 | irrelevant | New York City | New York City | 1 | 1.0000 | 1.0000 | 702.66 | 720 | 0.00022375 |
| 15 | conflicting | New York City | New York City | 1 | 1.0000 | 1.0000 | 917.13 | 723 | 0.00022450 |
| 16 | clean | Mumbai, Maharashtra | Mumbai | 0 | 0.6667 | 1.0000 | 612.40 | 700 | 0.00022000 |
| 16 | irrelevant | Mumbai, Maharashtra | Mumbai | 0 | 0.6667 | 1.0000 | 713.99 | 799 | 0.00024475 |
| 16 | conflicting | Mumbai, Maharashtra | Mumbai | 0 | 0.6667 | 1.0000 | 653.69 | 806 | 0.00024650 |
| 17 | clean | 1962 | 1962 | 1 | 1.0000 | 0.5000 | 611.91 | 799 | 0.00024725 |
| 17 | irrelevant | 1962 | 1962 | 1 | 1.0000 | 0.5000 | 677.15 | 899 | 0.00027225 |
| 17 | conflicting | 1962 or 1968 | 1962 | 0 | 0.5000 | 0.4000 | 543.32 | 967 | 0.00031425 |
| 18 | clean | 1,462 | 1,462 | 1 | 1.0000 | 1.0000 | 814.43 | 760 | 0.00023625 |
| 18 | irrelevant | 1,462 | 1,462 | 1 | 1.0000 | 1.0000 | 717.76 | 863 | 0.00026200 |
| 18 | conflicting | 1,462 | 1,462 | 1 | 1.0000 | 1.0000 | 786.69 | 866 | 0.00026275 |
| 19 | clean | 35,124 | 35,124 | 1 | 1.0000 | 1.0000 | 614.07 | 711 | 0.00022525 |
| 19 | irrelevant | 35,124 | 35,124 | 1 | 1.0000 | 1.0000 | 591.83 | 812 | 0.00025050 |
| 19 | conflicting | 35,124 | 35,124 | 1 | 1.0000 | 0.6667 | 748.23 | 825 | 0.00023875 |
| 20 | clean | 821 | 821 | 1 | 1.0000 | 0.5000 | 614.67 | 709 | 0.00021100 |
| 20 | irrelevant | 821 | 821 | 1 | 1.0000 | 0.5000 | 603.82 | 813 | 0.00023700 |
| 20 | conflicting | 821 | 821 | 1 | 1.0000 | 0.5000 | 710.90 | 803 | 0.00023450 |

## Interpretation: what changed and what did not

**INTERPRETATION** · Evidence: [S33](#s33), [S34](#s34), [S35](#s35)

Clean provides the best observed quality/cost tradeoff: 17/20 exact matches, tied with irrelevant, and the lowest token use and cost. Irrelevant has a slightly higher mean Answer F1 (0.942857 versus 0.941190), explained by a wording difference in the already non-exact Shirley Temple answer. No question changes exact-match status, and mean citation F1 is identical. That tiny overlap change is not persuasive evidence of a substantive benefit.

Conflicting reduces accuracy to 12/20, with five correct-to-incorrect changes and no incorrect-to-correct reversals: Adriana Trigiani’s location, Apple Remote’s alternative control, Tosca’s production city, Carlo Rovelli’s France start year, and Masakazu Katsura’s birth year. In the last case the output gives both 1962 and 1968. These answers cite the added contradictory sources. Citation coverage also falls in some still-correct answers, including the conference-name and Boston-population questions.

Conflicting has the lowest mean latency in this saved sample (705.90 ms), but median timing is close to the other conditions and there is only one repetition. Shorter outputs, service load and ordinary variation could contribute. The data do not isolate why latency changed, and the report does not claim a general speed benefit.

The original five-strategy comparison changes how evidence is selected or compressed and includes preparation-call overhead. The noise comparison holds Full Context fixed and changes evidence content after gold-based passage selection. They differ in sample, task difficulty, context availability and generation settings. Even the separate archived 71% Full Context result cannot be ranked directly against the pilot’s 85% as if it were an improvement from a better model or method.

## Limitations and what remains unverified

**NOT VERIFIED** · Evidence: [S23](#s23), [S26](#s26), [S30](#s30), [S31](#s31), [S32](#s32), [S33](#s33), [S35](#s35), [S45](#s45), [S46](#s46)

- Final five-strategy benchmark metrics, selected final run IDs, exact dataset bytes and provider route are absent from accessible evidence. User-reported completion is not replaced with fabricated scores.
- No pre-existing complete HTML was available to extend; this report occupies the requested path and integrates the walkthrough and available results.
- Noise development files are untracked. Their exact edit-by-edit chronology, prior untracked versions and human approval timestamps are not established by Git. The branch origin/time is established by local reflog.
- The twenty cases are purposively selected and have only one repetition each. No significance, power, confidence-interval or population-level claim is made.
- Clean context is selected with gold supporting titles, which is an oracle-assisted context construction step. This does not estimate performance of an automatic retrieval pipeline in the wild.
- Each question has only one unrelated topic and one synthetic contradiction. Noise is always appended. Credibility, position, text style and exact length are not fully crossed or independently manipulated.
- Irrelevance and contradiction depend on reviewed semantic judgments. Tests protect this curated set; string matching cannot prove arbitrary factual contradiction.
- Exact match can penalize a supported extra qualifier or missing function word; citation F1 can penalize useful evidence not included in the gold set. Neither metric independently proves factual correctness.
- Saved cost is provider-reported inference cost. Account credits, taxes, funding fees and unrecorded charges were not independently reconciled.
- Original provider defaults for temperature and output length are not specified by code. The noise pilot explicitly controls those fields; other generation defaults and backend model revisions may still vary.
- VS Code usage, exact Codex backend/model, original model-choice deliberations, upstream dataset revision/download command, and the exact live shell command typed are not independently verified.
- Course guide dates are provisional planning dates, not verified Blackboard deadlines. Submission, final slides, video URL, individual reflections and the required AI-reviewed practice presentation are not evidenced here.

## Conclusion and next research steps

**INTERPRETATION** · Evidence: [S33](#s33), [S34](#s34), [S35](#s35), [S01](#s01), [S46](#s46)

The verified contribution is a controlled robustness pilot using the existing Full Context strategy. On the same twenty questions, unrelated additions preserved exact-match accuracy and citation F1 while increasing resource use; contradictory additions reduced both answer and citation agreement despite retaining correct evidence. Clean context matched the best accuracy at the lowest cost. All sixty requests have complete saved core metrics.

Next steps would be to obtain and audit the original five-method run, publish the currently untracked reproducibility files when authorized, increase sample size and repetitions, vary noise topics and positions within each question, match source credibility/length more closely, pre-register selection rules, and supplement label agreement with a separately reviewed factual-support measure. These are proposed improvements, not work claimed as completed.

## Final assignment: academic paper outline and evidence checklist

**INTERPRETATION** · Evidence: [S42](#s42), [S33](#s33), [S34](#s34), [S45](#s45), [S46](#s46)

The local course guide requests an approximately 1,500-word APA research report excluding references/appendices, at least five credible sources, a maximum ten-slide deck, a 5–7 minute video and Appendices A–D. These are documented requirements in the supplied planning guide; verify current instructor/Blackboard instructions rather than treating its tentative dates as authoritative.

| Paper section | Suggested content and evidence |
|---|---|
| Introduction (~250 words) | Context engineering problem; distinguish strategy efficiency from robustness to noise. State both research questions and evidence gaps. |
| Background/literature (~350 words) | Define context windows, multi-hop QA, retrieval, summarization and caching. Use verified academic/official sources; do not invent a bibliography to reach five references. |
| Methods/results (~550 words) | Actual code, data validation, five implementations, missing original benchmark caveat, matched 20-question noise design, controls and measured table. |
| Critical analysis (~200 words) | Five accuracy reversals, citation degradation, cost overhead, small purposeful sample, metric limitations and counterfactuals. |
| Conclusion (~150 words) | Evidence quality matters; do not equate more context or more calls with better answers. |
| Appendix A: AI use | Record actual tools/prompts, purpose, verification and boundaries. This session is evidence, not a complete historic prompt log. |
| Appendix B: reflections | Each member supplies their own 200–300 word reflection; do not fabricate personal experience. |
| Appendix C: contributions | Use commit authors for committed implementation; confirm untracked/session work and non-code contributions with the team. |
| Appendix D: practice | Actual dry-run presentation, AI feedback, changes and rejected suggestions must be recorded. Offline software dry-run is not the required presentation practice. |

Do not submit this walkthrough as if the missing five-method results, final presentation or personal reflections were already completed. It is a study/reproducibility artifact and source of verified material for the assignment.

## How We Built Our Context Engineering Research

**INTERPRETATION** · Evidence: [S01](#s01), [S23](#s23), [S28](#s28), [S33](#s33), [S34](#s34), [S35](#s35), [S45](#s45), [S46](#s46)

### A simple two-minute explanation

We studied how the information given to a language model affects its answers and resource use. We used HotpotQA, which provides questions, reference answers and labeled evidence sentences. Our TypeScript project implements Full Context, retrieval, summarization, a retrieval-plus-summary hybrid and prompt caching. These methods share a model client and evaluator, so their preparation steps can be compared consistently. The original five-strategy results still need to be supplied for this report; we can verify the implementations, not invent their final scores.

Our additional experiment kept the answering method fixed and changed the evidence. For the same twenty questions, we supplied only the complete supporting passages, those same passages plus unrelated text, or those same passages plus a plausible false claim. All conditions used Gemini 3.1 Flash Lite through OpenRouter and Google AI Studio with the same prompt and settings. This made sixty model requests. Before running, we checked the source evidence, reviewed every false claim and regenerated a hash that binds the inputs to the reviewed code.

All sixty requests completed. Clean and unrelated context each scored 85% exact-match accuracy, but unrelated context used more tokens and cost more. Contradictory context scored 60% and had lower citation F1; five previously correct answers changed to wrong answers. The total measured inference cost was about one and a half US cents. Our conclusion is limited to this small pilot: keeping correct evidence present does not guarantee the model will ignore a conflicting source.

### A detailed five-minute explanation with speaking cues

| Time | What to say |
|---|---|
| 0:00–0:40 — Problem | A model’s response depends on what evidence it sees, how that evidence is selected and whether misleading text competes with it. Our two comparisons ask different questions: strategy efficiency and robustness to evidence noise. |
| 0:40–1:20 — Data and architecture | Show the dataset-to-report flow. A local Parquet reader loads HotpotQA; gold answers stay outside requests. Original sentence titles and indices make citations checkable. Failed evidence validation stops execution before spending. |
| 1:20–2:05 — Five strategies | Full Context sends all passages in one call. RAG has two search-planning calls and a final answer. Summarization makes source-linked notes then answers. Hybrid runs RAG search then summarization, four calls total. Caching preserves text and adds only an explicit cache request, with usage receipts needed to establish reuse. |
| 2:05–2:50 — Testing system | Offline tests use mocked fetch and known answers, not paid calls. The same evaluator computes normalized exact match, word-overlap F1 and exact title/sentence citation F1. Runtime measures latency; provider receipts supply tokens/cost. All preparation calls and failures are retained. |
| 2:50–3:35 — Additional branch | Explain why it is isolated from Ashwin’s code. Select twenty structurally valid questions with clear facts. Preserve full correct passages. Add one of twenty unrelated 80–86 word passages, or one reviewed contradiction. Mention Tosca replacement and Apple Remote grammar regression check. |
| 3:35–4:25 — Actual results | Show the table and Tosca example. Clean and irrelevant: 17 correct; conflicting: 12. Citation F1 falls from 0.7912 to 0.6462. Token overhead is roughly 14–15%. Point out the complete 60/60 result grid and score recalculation. |
| 4:25–5:00 — Limits and next steps | State missing original benchmark evidence. Our pilot has one repetition and purposive questions. Exact match penalizes wording; citation labels are not a truth oracle. Broaden the sample, test source position/credibility, collect original run records and publish the reproducibility package only when authorized. |

### Technical explanation to use if asked to go deeper

A request carries system instructions, context with Title and [sentence_id] markers, the question and a JSON response schema. The SDK sends it through the OpenRouter endpoint. We reject abnormal finish reasons, refusals and invalid JSON, then use Zod to validate shape. Only completed final answers receive evaluateResult. The logger stores no key in request JSON. The noise adapter adds temperature and max_tokens without editing the original client. We group by condition before reusing summarizeResults, and pair noisy outputs to the same clean question/repetition before calculating changes. The reviewed manifest is a consistency gate, not proof of authenticated human approval.

## Professor questions: evidence-based answers

**VERIFIED FROM CODE** · Evidence: [S01](#s01), [S04](#s04), [S06](#s06), [S08](#s08), [S09](#s09), [S10](#s10), [S12](#s12), [S13](#s13), [S14](#s14), [S16](#s16), [S23](#s23), [S28](#s28), [S30](#s30), [S33](#s33), [S35](#s35), [S45](#s45), [S46](#s46)

### What did you actually change in the model?

We did not train or fine-tune the model. We changed supplied context or its preparation, keeping the noise pilot’s model and answering procedure fixed.

### Why HotpotQA?

It supplies answers and sentence-level supporting labels needed by our implemented exact-match and citation evaluation, with multi-hop questions. That is a methodological fit; the original team’s full selection deliberation is not recorded.

### Why Gemini 3.1 Flash Lite?

It is explicitly pinned in the noise settings and confirmed in saved responses. The project used cost estimates before execution. We have no documented model-selection tournament proving it was the best available model.

### Did you call Google directly?

No. The OpenAI SDK used the OpenRouter gateway with Google AI Studio as the pinned route and reported provider. The configured model identifier is google/gemini-3.1-flash-lite.

### Does OpenAI SDK mean GPT answered?

No. The SDK is an API client. Its baseURL and model field route requests to the configured OpenRouter/Gemini service.

### Are you using embeddings or a vector database?

No. retrieveContext uses a local MiniSearch keyword index on titles and passage text, title boost 2, at most 4 matches per query.

### How many requests does RAG really make?

On a successful normal question, two planning requests and one separate final answer, even if the second planner only says ready. Multiple local searches can occur in one tool response.

### Is your summary tailored to the question?

The summary request itself sees only passages. In Hybrid, retrieval is question-guided before the same summarization function is called. Notes are then used with the question for the final answer.

### How many requests does Hybrid make?

Four on success: two planning, one summary and one answer. It reuses RAG search and summarization rather than generating an unused RAG answer.

### Does a cache marker prove caching worked?

No. The marker requests a provider behavior. Positive reported cached_tokens establishes observed reads; it does not isolate the causal effect of the marker or prove Full Context was uncached.

### How do you know the clean evidence is present?

prepareData validates each supporting title/index against the actual passage arrays. variants copies whole supporting passages, and tests compare them with the originals.

### Are gold answers leaked?

Gold answer/reference metadata stays outside model requests. Gold supporting labels are used offline to select clean passages. Correct answer words naturally occur in those passages; that is the intended evidence, not a separate answer-key instruction.

### Why the same twenty questions?

Pairing removes changes in question composition as an explanation for condition differences. It does not remove all model/service variation or make the sample representative.

### Why sixty requests rather than three hundred?

We used one Full Context answer call for each of twenty questions across three conditions at one repetition. We did not rerun the five-strategy benchmark.

### How did you know unrelated text was unrelated?

Twenty fixed craft/nature passages were read against their paired questions and evidence. Automated checks add length, uniqueness and lexical guards. We do not claim a string test proves general semantic irrelevance.

### How did you make a real contradiction?

We changed a specific answer-relevant value for the same subject/time/relation and stored source quote plus rationale. Some cases explicitly deny the original. Tests retain independently expected substitutions and full claim strings.

### What does the manifest protect?

It detects changes to the reviewed dataset, fixtures, contexts, shared code and lockfile before live dispatch. It is a SHA-256 consistency check, not a digital signature or proof of who reviewed it.

### Why is exact match 85% but F1 0.941?

Seventeen clean answers match exactly. The other three share words with the reference and get partial F1, including a missing from in a date range and Mumbai with an added qualifier.

### Does citation F1 prove the answer is true?

No. It compares exact gold title/index pairs. Relevant additional bridge citations can reduce precision, and a matching reference location alone is not independent factual verification.

### What happened when evidence conflicted?

Five clean-correct answers became non-exact answers; accuracy fell from 85% to 60%, and citation F1 fell by 0.145. Examples include Rome becoming Milan and keyboard control becoming a USB controller.

### Why are more tokens not better?

Added false or unrelated text still consumes input tokens. It can compete with correct evidence while adding cost, without adding useful information.

### How did you verify results without paying again?

Read the sixty saved rows, check unique expected cells, statuses, response schemas and measurements, compare manifest/context/reference fields and recompute evaluateResult locally.

### Did all tests pass?

All thirteen noise tests and TypeScript checks passed. Two original real-data tests still fail on the original validation file’s missing gold evidence. We kept those checks and reported the issue.

### Can you show the original five-strategy ranking?

Not from available records. The implementations are verified, but the final five-method run is missing. A separate archived two-method comparison is clearly labeled and cannot stand in for it.

### Why not compare 71% archived Full Context directly to 85% clean?

The archived comparison uses a different 100-question selection with full supplied context and omitted generation limits. The pilot uses twenty chosen cases, gold-selected passages and explicit controls.

### What would you improve?

More questions/repetitions, multiple noise variants per question, varied positions, matched credibility/length, pre-registered selection, independent support review and complete published provenance. These are future work.

### Can another student clone and reproduce everything today?

Not from the remote alone: noise files are currently untracked, datasets are local/ignored, and the original benchmark inputs/results are missing. This report identifies the exact artifacts and hashes that must be supplied.

### Have you finished the assignment appendices and presentation?

The local guide describes them, but final individual reflections, complete AI-use logs, slides, video and an AI-reviewed presentation dry-run are not verified here. They must not be invented.

## Source traceability, references and evidence inventory

**VERIFIED FROM CODE** · Evidence: [S45](#s45), [S32](#s32), [S35](#s35)

Each section has evidence labels and source IDs. The catalog identifies exact repository paths/functions; code excerpts also give line numbers. Git timeline rows identify commits. Saved-result claims refer to the run ID and JSONL question IDs. Source links are relative to reports/ so they remain local; source viewers may not support line anchors, so embedded numbered snippets provide the line-level explanation.

This report deliberately did not browse external sources or call external APIs. data/readme.md links to https://huggingface.co/datasets/hotpotqa/hotpot_qa and the local preflight plan records https://openrouter.ai/google/gemini-3.1-flash-lite as the prior pricing reference. Their current contents were not fetched for this report. The assignment’s minimum five credible external references still requires a separately verified literature search; these internal primary artifacts are a traceability inventory, not a fabricated APA bibliography.

<a id="s01"></a>
**S01 — Project guide.** [README.md](../README.md) — Five strategies, setup and original CLI.

<a id="s02"></a>
**S02 — Dataset types and response schemas.** [src/schema.ts](../src/schema.ts) — TrainData, Context, ModelAnswerSchema, SummaryDraftSchema, UsageSchema.

<a id="s03"></a>
**S03 — Parquet reader.** [src/ParquetFileReader.ts](../src/ParquetFileReader.ts) — ParquetFileReader.read.

<a id="s04"></a>
**S04 — Original data loader.** [src/loadData.ts](../src/loadData.ts) — prepareData and loadData.

<a id="s05"></a>
**S05 — Shared prompts.** [src/buildPrompt.ts](../src/buildPrompt.ts) — formatContext, buildPrompt, buildRagPrompt.

<a id="s06"></a>
**S06 — Model client.** [src/callModel.ts](../src/callModel.ts) — getModelSettings and callModel.

<a id="s07"></a>
**S07 — Full Context.** [src/strategies/full-context/fullContext.ts](../src/strategies/full-context/fullContext.ts) — buildFullContextPrompt and fullContext.

<a id="s08"></a>
**S08 — Caching.** [src/strategies/caching/caching.ts](../src/strategies/caching/caching.ts) — caching.

<a id="s09"></a>
**S09 — Keyword retrieval.** [src/strategies/rag/retrieveContext.ts](../src/strategies/rag/retrieveContext.ts) — retrieveContext, DEFAULT_TOP_K, TITLE_BOOST.

<a id="s10"></a>
**S10 — Tool-driven search.** [src/strategies/rag/searchWithTools.ts](../src/strategies/rag/searchWithTools.ts) — searchWithTools, MAX_SEARCH_ROUNDS.

<a id="s11"></a>
**S11 — RAG answer.** [src/strategies/rag/callRag.ts](../src/strategies/rag/callRag.ts) — callRag.

<a id="s12"></a>
**S12 — Summarization.** [src/strategies/summarization/summarization.ts](../src/strategies/summarization/summarization.ts) — summarization and SUMMARY_INSTRUCTIONS.

<a id="s13"></a>
**S13 — Hybrid.** [src/strategies/hybrid/hybrid.ts](../src/strategies/hybrid/hybrid.ts) — hybrid.

<a id="s14"></a>
**S14 — Evaluation.** [src/evaluation.ts](../src/evaluation.ts) — normalizeAnswer, evaluateAnswer, evaluateCitations, evaluateResult.

<a id="s15"></a>
**S15 — Result contract.** [src/results.ts](../src/results.ts) — createStrategyResult and normalizeSavedResult.

<a id="s16"></a>
**S16 — Usage accounting.** [src/usage.ts](../src/usage.ts) — getUsage, combineUsage, sumMeasurements, cacheMetrics.

<a id="s17"></a>
**S17 — Original batch runner.** [src/runQuestion.ts](../src/runQuestion.ts) — strategy dispatch, sequential batch, timing, JSONL append.

<a id="s18"></a>
**S18 — Original aggregation.** [src/summarizeResults.ts](../src/summarizeResults.ts) — parseResults and summarizeResults.

<a id="s19"></a>
**S19 — Dependencies.** [package.json](../package.json) — runtime/dev dependencies and npm scripts.

<a id="s20"></a>
**S20 — TypeScript settings.** [tsconfig.json](../tsconfig.json) — strict, NodeNext, noEmit via npm script.

<a id="s21"></a>
**S21 — Example environment.** [.env.example](../.env.example) — model/provider example; contains placeholders only.

<a id="s22"></a>
**S22 — Logger.** [src/logger.ts](../src/logger.ts) — pino, stderr, .env loading.

<a id="s23"></a>
**S23 — Noise preparation.** [experiments/context-noise/pilot.ts](../experiments/context-noise/pilot.ts) — variants, loadPilot, estimate, SETTINGS, hash.

<a id="s24"></a>
**S24 — Curated contradictions.** [experiments/context-noise/create-fixtures.ts](../experiments/context-noise/create-fixtures.ts) — choices and createFixtures.

<a id="s25"></a>
**S25 — Unrelated passages.** [experiments/context-noise/irrelevant.ts](../experiments/context-noise/irrelevant.ts) — irrelevantForRow.

<a id="s26"></a>
**S26 — Frozen fixture data.** [experiments/context-noise/fixtures.json](../experiments/context-noise/fixtures.json) — pilot-v2: 20 cases and review rationales.

<a id="s27"></a>
**S27 — Controlled answer adapter.** [experiments/context-noise/answer.ts](../experiments/context-noise/answer.ts) — answerWithControls.

<a id="s28"></a>
**S28 — Noise runner.** [experiments/context-noise/run.ts](../experiments/context-noise/run.ts) — main, dry/live gates, rotated order, isolated logging.

<a id="s29"></a>
**S29 — Noise comparisons.** [experiments/context-noise/report.ts](../experiments/context-noise/report.ts) — compare, renderReport, writeReport.

<a id="s30"></a>
**S30 — Pilot tests.** [experiments/context-noise/pilot.test.ts](../experiments/context-noise/pilot.test.ts) — 13 offline tests, mocked transport.

<a id="s31"></a>
**S31 — Experiment guide.** [experiments/context-noise/README.md](../experiments/context-noise/README.md) — documented issues, correction and procedure.

<a id="s32"></a>
**S32 — Saved run plan.** [experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/plan.json](../experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/plan.json) — manifest, settings, budget, sourceCommit.

<a id="s33"></a>
**S33 — Saved model results.** [experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/runs.jsonl](../experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/runs.jsonl) — 60 attempts, actual request bodies, answers, scores, usage.

<a id="s34"></a>
**S34 — Saved comparisons.** [experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/comparison.json](../experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/comparison.json) — aggregates and paired per-question changes.

<a id="s35"></a>
**S35 — Saved validation.** [experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/validation.json](../experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/validation.json) — 60 completed, no issues, score/reference/context checks.

<a id="s36"></a>
**S36 — Evaluator tests.** [tests/evaluation.test.ts](../tests/evaluation.test.ts) — normalization, word overlap, exact citation pairs.

<a id="s37"></a>
**S37 — Aggregation tests.** [tests/summarizeResults.test.ts](../tests/summarizeResults.test.ts) — denominators, failures, unknown costs, cache accounting.

<a id="s38"></a>
**S38 — Data-loading tests.** [tests/loadData.test.ts](../tests/loadData.test.ts) — label separation, source integrity, real-data failure.

<a id="s39"></a>
**S39 — Retrieval tests.** [tests/retrieveContext.test.ts](../tests/retrieveContext.test.ts) — ranking, ties, preservation, real-data failure.

<a id="s40"></a>
**S40 — Model-client tests.** [tests/callModel.test.ts](../tests/callModel.test.ts) — schema and HTTP/transport/truncation failure cases.

<a id="s41"></a>
**S41 — Hybrid tests.** [tests/hybrid.test.ts](../tests/hybrid.test.ts) — bounded search, source resolution, all-call accounting.

<a id="s42"></a>
**S42 — Original course planning guide.** [doc/delivarables/Research_Deliverables_and_Dates.docx](../doc/delivarables/Research_Deliverables_and_Dates.docx) — submission expectations; dates are explicitly provisional.

<a id="s43"></a>
**S43 — Original results spreadsheet.** [doc/TestResult/Simple_Test_Results.xlsx](../doc/TestResult/Simple_Test_Results.xlsx) — blank five-method recording template; not measured benchmark data.

<a id="s44"></a>
**S44 — Legacy CSV example.** [results/results-v2.csv](../results/results-v2.csv) — one training-question Full Context record with older model/scoring contract.

<a id="s45"></a>
**S45 — Git evidence.** local log, branches, reflog; no fetch performed. `git log --all --date=iso-strict; git branch -avv; git reflog --date=iso clean-vs-noisy-context; git remote -v`.

<a id="s46"></a>
**S46 — Other-branch evidence.** git show full-context-caching:EXPLORATORY_EXPERIMENT.md and saved 200-row benchmark at aa11bbf. `git show full-context-caching:results/exploratory-benchmark-af365f10-0a86-4e70-8b3e-84e525530381.jsonl`. Also `git show full-context-caching:experiments/ASHWIN_ALIGNMENT.md` and `git show full-context-caching:experiments/ashwin-final-run.json`.

<a id="s47"></a>
**S47 — Manifest review output.** [experiments/context-noise/artifacts/review.txt](../experiments/context-noise/artifacts/review.txt) — all three complete contexts per question, separate review notes.

<a id="s48"></a>
**S48 — Dataset resource pointers.** [data/readme.md](../data/readme.md) — HotpotQA Hugging Face links; no network verification in this report.

<a id="s49"></a>
**S49 — Dependency lockfile.** [package-lock.json](../package-lock.json) — locked dependency graph; hash retained in manifest.

<a id="s50"></a>
**S50 — Strategy tests.** [tests/strategies.test.ts](../tests/strategies.test.ts) — cache-only payload changes, supported routes, summary validation.

Git does not certify a research claim merely because a file is committed. Conversely, untracked experiment code can be inspected and hashed but lacks committed chronology. We use source behavior, saved observations and historical documentation as different evidence categories throughout.
