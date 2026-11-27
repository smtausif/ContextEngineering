# Context Engineering

An AIP444 research project at Seneca Polytechnic comparing five context preparation strategies for multi-hop question answering: **Full Context, Prompt Caching, Retrieval-Augmented Generation (RAG), Summarization, and Hybrid retrieval with summarization**. The implementation uses TypeScript, local HotpotQA passages, and structured model responses through OpenRouter.

The research evaluates answer and citation quality alongside latency, token consumption, and provider-reported cost. A separate controlled experiment examines how the Full Context baseline responds to **clean, irrelevant, and conflicting context**.

The completed expanded study contains **200 new questions per condition, 1,600 final evaluations, and 2,800 successful model requests**. Its results are separate from the original 100-question benchmarks and the 20-question noise pilot.

## Contents

- [Research objectives](#research-objectives)
- [Project flow](#project-flow)
- [Context engineering strategies](#context-engineering-strategies)
- [Experiments and methodology](#experiments-and-methodology)
- [Evaluation metrics](#evaluation-metrics)
- [Results and key findings](#results-and-key-findings)
- [Setup](#setup)
- [Run a strategy](#run-a-strategy)
- [Results logging and offline analysis](#results-logging-and-offline-analysis)
- [Local checks and testing](#local-checks-and-testing)
- [Project folders](#project-folders)
- [Reports and evidence](#reports-and-evidence)
- [Research limitations](#research-limitations)
- [Contributors and acknowledgements](#contributors-and-acknowledgements)

## Research objectives

1. Compare five implemented strategies using the same question cohort, shared final-answer instructions, structured output schema, and scoring functions.
2. Measure whether retrieval and compression preserve the evidence needed for multi-hop answers and exact source citations.
3. Assess quality against the total resource requirements of each workflow, including search planning and summary generation.
4. Measure sensitivity to unrelated and contradictory additions while preserving the original correct evidence.
5. Retain auditable inputs, intermediate model calls, outputs, scores, and usage measurements so conclusions can be checked from saved evidence.

## Project flow

<img src="doc/project-flow.png" alt="Project flow showing how hybrid reuses RAG search and the summarization workflow, followed by answer and citation evaluation." width="900">

[Editable diagram](doc/project-flow.svg)

HotpotQA rows are validated and split into model inputs and a separate answer key. A strategy prepares the context and returns a structured answer with supporting sentence references. The evaluator then joins that answer with the reference labels and saves the attempt, intermediate calls, scores, and resource measurements.

All strategies share [`callModel.ts`](src/callModel.ts), which uses the OpenAI SDK with the OpenRouter endpoint, [Zod schemas](src/schema.ts), [final-answer instructions](src/buildPrompt.ts), and [scoring functions](src/evaluation.ts). The SDK is the transport library; the completed expanded experiment used Google's Gemini model served by Google AI Studio through OpenRouter.

## Context engineering strategies

| Strategy | Implemented workflow | Model requests per completed question | Command |
| --- | --- | ---: | --- |
| [Full Context](src/strategies/full-context/README.md) | Send all supplied passages, followed by the question. | 1 answer | `npm run ask` |
| [Prompt Caching](src/strategies/caching/README.md) | Use the same Full Context prompt with an explicit ephemeral cache marker on the source block. Implicit mode is also available. | 1 answer | `npm run ask:caching` |
| [RAG](src/strategies/rag/README.md) | Plan searches, retrieve local passages, and answer from the unique retrieved passages. | 2 search-planning + 1 answer | `npm run ask:rag` |
| [Summarization](src/strategies/summarization/README.md) | Summarize all supplied passages into notes, validate their source references, and answer from the notes. | 1 summary + 1 answer | `npm run ask:summarization` |
| [Hybrid](src/strategies/hybrid/README.md) | Reuse RAG search, summarize only the retrieved passages, and answer from the validated notes. | 2 search-planning + 1 summary + 1 answer | `npm run ask:hybrid` |

An **AI request**, or model call, is one round trip to the model service. Local retrieval, reference validation, and scoring do not require additional model requests. All preparation requests count toward the workflow's saved usage and cost.

### Retrieval and summarization details

RAG uses [`searchWithTools`](src/strategies/rag/searchWithTools.ts) for a required initial search and a second planning turn that may request follow-up searches. [`retrieveContext`](src/strategies/rag/retrieveContext.ts) uses MiniSearch keyword ranking over passage titles and text, with a title boost of 2 and up to four matches per query. Retrieval searches **only the passages supplied for that question**; it does not search the web, use embeddings, or query an external vector database. The final answer receives each retrieved passage once, preserving its full text, exact title, and original sentence numbers. Saved RAG records use the strategy name `rag_tool`.

Summarization requests brief notes with a prompt-level target of at most 250 words. This source-summary call receives the passages without the question or reference labels. Each note supplies a numeric `source_id`, an original `sentence_id`, and text. The implementation validates the IDs, restores the exact original title, and supplies the resolved notes with the question to the answer call. Reference validation checks identifiers; it does not establish that a summary faithfully conveys the cited sentence.

Hybrid calls the same `searchWithTools()` and `summarization()` functions. Summary source IDs refer to the retrieved passage order and resolve back to the original titles. The saved result retains search traces, summary material, and all four model calls.

### Prompt caching details

Explicit caching changes only cache metadata; instructions, source blocks, question, and answer schema remain the same as Full Context. The current implementation permits explicit mode for `google/gemini-3.1-flash-lite` with `google-ai-studio` or `google-vertex`. Unsupported explicit configurations are recorded without making a model request or silently substituting another configuration.

A requested cache breakpoint does not guarantee a cache hit. The project records provider-reported cache reads and writes when available. Full Context may also receive automatic provider caching and is not a verified cache-disabled baseline.

## Experiments and methodology

### Dataset and experimental stages

The project uses [HotpotQA](https://huggingface.co/datasets/hotpotqa/hotpot_qa), including questions, reference answers, Wikipedia-style passages, and labeled supporting sentences. [Dataset resource links](data/readme.md) include the original [FullWiki file listing](https://huggingface.co/datasets/hotpotqa/hotpot_qa/tree/main/fullwiki).

| Stage | Questions and scope | Evidence and interpretation |
| --- | --- | --- |
| Original strategy experiments | 100 questions per strategy in the later complete five-strategy run set; the historical log also contains earlier trials and repeated caching attempts. | [`results/runs.jsonl`](results/runs.jsonl), [`results/summary.json`](results/summary.json), and the [frozen historical archive](experiments/expansion/evidence/origin-f62ad872d665f298ab3590c594ceb6b298058843.jsonl.gz). Filter by run ID rather than pooling the log. |
| Original noise pilot | 20 purposively selected questions × 3 conditions × 1 repetition = 60 responses, using Full Context only. | [Pilot comparison](experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/comparison.md) and [validation](experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/validation.json). |
| Expanded strategy comparison | 200 new questions × 5 unchanged strategies = 1,000 evaluations and 2,200 model requests. | [Final comparison report](reports/final-comparison-report.md) and [per-evaluation CSV](reports/final-comparison-results.csv). |
| Expanded noise experiment | The same 200 new questions × 3 conditions = 600 evaluations and 600 model requests, using Full Context only. | Included as a separate group in the final report and CSV. Historical and pilot responses are excluded. |

The original runner reads `data/validation-00000-of-00001.parquet`. The pilot and expansion explicitly read **`data/distractor-validation.parquet`**, which contains 7,405 rows; 7,404 pass the documented evidence-integrity and unique-title checks. These filenames are not interchangeable provenance guarantees. The exact upstream revision/download command is not recorded; use the saved dataset identity when reproducing the expanded analysis.

The expanded dataset SHA-256 is:

```text
c20b638ca82b21d04fe12e14ff417ad05153d4d215a65de54497fca4e972f7c6
```

The final revision-3 cohort was purposively curated in ascending dataset-row order. Its [200 ordered IDs](experiments/expansion/prepared/selected-question-ids.txt) exclude every historical and pilot question ID. Fourteen items were replaced before execution: seven invalid cases, five ambiguous cases, and two unsupported-gold cases. See the [replacement rationale](experiments/expansion/prepared/replacements.md) and [frozen semantic review decisions](experiments/expansion/prepared/semantic-review-decisions.json). Reference answers and supporting labels remain original dataset values.

### Clean, irrelevant, and conflicting context

The noise study holds the question, correct supporting passages, and reference labels constant within each question.

| Condition | Context supplied to Full Context |
| --- | --- |
| **Clean** | Complete original passages whose titles occur in the labeled supporting facts, in original passage order. |
| **Irrelevant** | The clean passages plus one distinct reviewed unrelated passage. The expanded study uses an original donor passage; the pilot uses curated craft/natural-process passages. |
| **Conflicting** | The clean passages plus one reviewed synthetic passage contradicting an answer-relevant fact. Expanded fixtures assert an alternative for the requested fact and explicitly exclude the gold answer. |

Correct evidence is preserved in full, and original sentence indices are retained. Each noise addition is appended and has a non-colliding title. Condition labels, review rationales, and reference answers are not supplied as separate model-input metadata; answer strings naturally remain in the evidence and can appear in synthetic contradictions. Fixture review is documented as agent review, not independent human approval.

The five-strategy benchmark uses each question's original distractor context, including all ten supplied passages for Full Context. The noise study uses gold-selected supporting passages. These are **two related experiments with eight cells**, rather than a five-strategy-by-three-condition factorial experiment. Directly comparing a benchmark cell with a noise cell confounds context selection and generation settings.

### Expanded execution controls

| Setting | Five-strategy comparison | Noise experiment |
| --- | --- | --- |
| Model | `google/gemini-3.1-flash-lite` | Same |
| Serving route | Google AI Studio through OpenRouter | Same |
| Provider restriction | `google-ai-studio`; fallbacks disabled; `require_parameters` enabled | Same |
| Temperature / output limit | Omitted, preserving the original implementation defaults | Temperature `0`; `max_tokens: 1024` |
| Observations | One final evaluation per question per strategy | One final evaluation per question per condition |
| Scoring | Shared original evaluator | Same |

Execution took place on **23 November 2026**, with durable request logs spanning `20:38:37.238Z`–`21:53:36.796Z`. The [manifest](experiments/expansion/prepared/manifest.json) pins inputs, settings, evidence, and implementation hashes. Request intents are written before transport, and responses are retained for replay without resending completed calls. The shared client uses a 60-second timeout and disables SDK retries and whole-response caching.

The final saved-evidence audit reports 1,600 completed evaluations, 2,800 unique provider generation IDs, and no missing/failed evaluations, duplicate request slots, or unresolved billing intents in the local ledger. See [`verification.json`](reports/final-comparison-evidence/verification.json). Offline reconstruction checks saved requests and responses; it does not repeat model inference or independently audit the provider's billing system.

**Status of historical documents:** the [pilot guide](experiments/context-noise/README.md), [expansion guide](experiments/expansion/README.md), and some prepared artifacts retain pre-execution wording. The [technical walkthrough](reports/project-technical-walkthrough.md) also reflects an earlier evidence snapshot. For completed expanded results, use the final comparison report and runtime evidence linked below. Prepared `missing.json` describes the plan before execution, not the final completion status.

## Evaluation metrics

| Metric | Definition and interpretation |
| --- | --- |
| **Accuracy / exact match (EM)** | Fraction of answers matching the reference after lowercasing, removing ASCII punctuation and articles, and collapsing whitespace. |
| **Answer F1** | Normalized token overlap with multiset counts; extra or missing words reduce the score. Mismatched `yes` / `no` / `noanswer` categories receive no partial credit. |
| **Citation precision, recall, and F1** | Agreement between unique exact passage-title / original zero-based sentence-ID pairs and the labeled supporting facts. Duplicate citations do not increase credit. |
| **Latency** | Saved strategy duration; multi-stage strategies include retrieval, search planning, summarization, and answering. The standard runner also records end-to-end invocation timing. |
| **Tokens** | Provider-reported input, output, and total tokens from every model request, including preparation stages. |
| **Cost** | Sum of provider-reported `usage.cost` in USD across all calls; not a retrospective estimate from list prices. |
| **Cache measurements** | Positive reported cached input tokens per measured API request, cache-read token fraction, and reported write tokens. Unknown fields remain unknown. |

Quality metrics are means over completed, scored attempts. Answer and citation F1 are per-question macro means; citation F1 is averaged directly. Aggregation reports failures and missing measurement coverage, includes measured failures in latency and reported failed-call usage in resource totals, and avoids counting both individual calls and their top-level usage aggregate.

Scores measure **reference agreement**, not independent factual correctness. The expanded report includes question-paired differences, exploratory 95% percentile bootstrap intervals using 5,000 deterministic resamples, and exact McNemar tests. Its 13 comparisons are unadjusted for multiple testing; rankings and p-values do not establish general superiority.

## Results and key findings

### Original 100-question strategy experiments

The following later complete run set is saved in [`results/runs.jsonl`](results/runs.jsonl): 100 completed questions and one repetition per strategy, using Gemini 3.1 Flash Lite with reported provider Google AI Studio. Values below are means of those records' saved scores, shown as percentages.

| Strategy | Accuracy / EM | Answer F1 | Run ID |
| --- | ---: | ---: | --- |
| Full Context | 72.00% | 82.20% | `7cbceaa2-3299-490e-8c7a-6453ab6b4593` |
| RAG | 64.00% | 74.83% | `d780ad96-7f01-4570-8c9c-68093cfa065f` |
| Summarization | 64.00% | 76.66% | `24adaacd-1171-4793-9170-9978199aacf4` |
| Hybrid | 60.00% | 72.39% | `0a0d2764-ddda-4564-958f-d32744cb21c4` |
| Prompt Caching | 71.00% | 82.53% | `69605d69-3e37-455d-8c0a-d24a4d10151b` |

All five runs use the same ordered question IDs. Earlier 100-question runs also exist, including a caching run with three repetitions (300 attempts). They remain preserved and are not pooled into this table. The expanded cohort comprises 200 entirely new IDs, rather than these 100 plus another 100; differences between the two tables are not a paired improvement estimate.

### Expanded 200-question strategy comparison

Each row contains 200 completed evaluations. Latency is the saved mean strategy duration, and cost is the total for all requests in that row. Quality and resource values are rounded from the [final report](reports/final-comparison-report.md) and [machine-readable summary](reports/final-comparison-evidence/summary.json).

| Strategy | Correct | Accuracy / EM | Answer F1 | Citation F1 | API requests | Mean latency (s) | Total tokens | Reported cost (USD) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Full Context | 150/200 | 75.00% | 89.44% | 78.88% | 200 | 0.805 | 430,529 | $0.124345 |
| RAG | 129/200 | 64.50% | 76.65% | 68.81% | 600 | 2.038 | 458,642 | $0.139927 |
| Summarization | 131/200 | 65.50% | 80.20% | 72.96% | 400 | 5.721 | 1,125,622 | $0.831509 |
| Hybrid | 121/200 | 60.50% | 73.15% | 66.86% | 800 | 5.033 | 846,028 | $0.518212 |
| Prompt Caching | 151/200 | 75.50% | 88.78% | 78.71% | 200 | 2.018 | 430,832 | $0.066139 |

### Expanded 200-question noise experiment

| Condition | Correct | Accuracy / EM | Answer F1 | Citation F1 | Mean latency (s) | Total tokens | Reported cost (USD) |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Clean | 155/200 | 77.50% | 91.93% | 82.07% | 0.759 | 153,532 | $0.047997 |
| Irrelevant | 153/200 | 76.50% | 90.71% | 81.72% | 0.779 | 182,848 | $0.055412 |
| Conflicting | 25/200 | 12.50% | 26.73% | 29.49% | 0.746 | 174,738 | $0.052393 |

In the **separate 20-question pilot**, accuracy was 85% for Clean, 85% for Irrelevant, and 60% for Conflicting. Its [comparison report](experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/comparison.md) preserves those results. The expanded fixtures and cohort differ, so the pilot and expansion are not repeated measurements of the same cases.

### Findings supported by the expanded evidence

- **Prompt Caching had the highest observed EM (75.50%) and lowest reported five-strategy cost ($0.066139).** Its EM advantage over Full Context was only 0.50 percentage points; the report's paired 95% interval spans −2.50 to +3.50 points. This does not establish a quality advantage from caching.
- **Full Context had the lowest saved mean strategy latency (0.805 seconds)** and the highest answer F1 and citation F1 among the five strategies. In this implementation and cohort, retrieval and summarization did not improve those quality metrics over Full Context.
- **Conflicting additions substantially reduced reference agreement.** Expanded noise accuracy fell from 77.50% to 12.50%, a 65.00 percentage-point drop. Irrelevant additions produced a 1.00-point drop under the noise experiment's own settings.
- **Intermediate requests materially contribute to resource use.** Summarization and Hybrid used 1,125,622 and 846,028 total tokens respectively, including preparation calls.
- **Provider receipts report 412,311 cached input tokens**, all in the expanded Prompt Caching cell: 200/200 requests with positive reads and a 98.79% read-token fraction. These observed fields do not isolate cold/warm behavior or prove causal savings.

Across all eight expanded cells, receipts total **3,802,771 tokens and $1.835933 reported USD**. These are recorded experiment measurements, not current price quotes or estimates for future runs. The [final report](reports/final-comparison-report.md) includes precision/recall, median/P95 latency, charts, cache tables, and all paired comparisons.

## Setup

### Requirements and installation

Use **Node.js 24 or newer** and npm. Scripts execute TypeScript directly; no build step is required. Run commands from the repository root.

```sh
node --version
npm --version
npm ci
```

[`package.json`](package.json) declares the runtime libraries: `hyparquet` and `hyparquet-compressors` for Parquet loading, MiniSearch for retrieval, the OpenAI SDK for OpenRouter requests, Zod for validation, and Pino for logging. [`package-lock.json`](package-lock.json) records the locked dependency graph.

### Dataset configuration

| File | Used by |
| --- | --- |
| `data/validation-00000-of-00001.parquet` | Standard strategy runner, data export, prompt preview, and retrieval preview. |
| `data/distractor-validation.parquet` | Controlled noise pilot and expanded experiment. |
| `data/train-00000-of-00002.parquet` | Optional `npm run inspect-data` inspection script. |

Data files are ignored by Git and must be supplied locally. Raw expanded runtime receipts and pilot output directories are also ignored; a checkout without the archived local evidence cannot perform the complete audit merely from the exported report. Do not substitute a differently sourced file solely because its filename matches.

**Known local data issue:** the default validation file in the reviewed workspace lacks the first question's labeled `Scott Derrickson [0]` evidence. The loader correctly rejects it, causing two real-data tests and row-0 previews/strategy runs to fail before model inference. Obtain a compatible validation file with intact supporting evidence before using those commands; do not disable validation or assume the Distractor file is byte-equivalent. The expanded study uses its separately hashed Distractor file.

### Environment configuration

Copy [`.env.example`](.env.example) to a local `.env` if one does not already exist, then set your OpenRouter key:

```dotenv
OPENROUTER_API_KEY=your_key_here
OPENROUTER_MODEL=google/gemini-3.1-flash-lite
OPENROUTER_PROVIDER=google-ai-studio
LOG_LEVEL=info
```

| Variable | Purpose |
| --- | --- |
| `OPENROUTER_API_KEY` | Required for live model requests; keep the real key in the ignored local `.env`. |
| `OPENROUTER_MODEL` | Requested model. Set it explicitly for research comparisons: the client fallback when unset is `inception/mercury-2.5`, not the experimental Gemini configuration. |
| `OPENROUTER_PROVIDER` | Optional provider pin for ordinary requests; explicit caching requires a supported model/provider pair. A pin disables provider fallbacks. |
| `LOG_LEVEL` | Logging verbosity; use `debug` for detailed local logs. |

## Run a strategy

**The commands in this section make model requests and may incur API costs.** They are usage examples for new runs; the completed experiments are already available in the saved evidence.

By default, each strategy command processes one question at row 0, with one repetition. The strategy table above lists all five entry points. For a batch:

```sh
npm run ask:hybrid -- --count 50 --start 10
npm run ask:caching -- --count 50 --start 10 --repetitions 3
```

| Flag | Meaning | Default |
| --- | --- | --- |
| `--count` | Number of consecutive questions; positive integer. | `1` |
| `--start` | Zero-based starting row; `10` skips the first ten rows. | `0` |
| `--repetitions` | Attempts per question before moving to the next question. | `1` |
| `--cache-mode` | Caching only: `explicit` or `implicit`. | `explicit` |

To observe automatic caching without requesting an explicit marker:

```sh
npm run ask:caching -- --cache-mode implicit --count 5 --repetitions 3
```

Use the same model, provider, question IDs/range, and repetitions for a controlled strategy comparison. Every returned attempt is saved; a failed or unsupported attempt stops the batch. There are no automatic retries. The standard runner does not recreate the expanded curated cohort: it loads consecutive rows from its own fixed dataset path.

The separate experiment runners and their review gates are documented in the [pilot guide](experiments/context-noise/README.md) and [expanded preparation review](experiments/expansion/prepared/review.md). The pilot CLI explicitly requires the historical `clean-vs-noisy-context` branch, and expansion checks pinned Git metadata and file hashes. Those historical commands are not a branch-independent quick start on `rag-hybrid`; use saved reports to inspect completed work.

## Results logging and offline analysis

Standard runner attempts append to [`results/runs.jsonl`](results/runs.jsonl), with a new `runId` per invocation. Records include final answers, scores, status/errors, model calls, tool traces, summaries where applicable, latency, tokens, reported cost, and cache measurements. Missing measurements remain unknown.

```sh
npm run summarize
npm run summarize -- --run-id YOUR_RUN_ID
```

These commands make no model requests. They print an aggregate table and **write `results/summary.json`**, leaving the raw log unchanged. To inspect one original 100-question run:

```sh
npm run summarize -- --run-id 7cbceaa2-3299-490e-8c7a-6453ab6b4593
```

The standard summarizer reads the historical runner log, not the expanded runtime directory. For expanded results, use the [1,600-row export](reports/final-comparison-results.csv), [condition summary](reports/final-comparison-evidence/condition-summary.csv), and [paired comparisons](reports/final-comparison-evidence/paired-comparisons.csv).

For a **read-only audit** of the existing final exports and preserved raw evidence, Python 3 can execute the independent verifier without its report-writing entry point:

```sh
python3 -B -c 'import runpy; runpy.run_path("scripts/verify-final-comparison-report.py", run_name="read_only_audit")'
```

This checks evaluation counts, ordered IDs, aggregate scores, receipt usage/cost, paired deltas, evidence hashes, and final HTML structure/links without inference. It requires the archived runtime and pilot artifacts indexed by the report.

[`scripts/final-comparison-report.mjs`](scripts/final-comparison-report.mjs) reconstructs the full expanded analysis from saved responses with network requests blocked. It refuses to overwrite existing reports. Its documented invocation, `node scripts/final-comparison-report.mjs`, is intended for a separate working copy where its generated output paths are absent; retain the existing research artifacts.

## Local checks and testing

```sh
npm run load-data       # Export the first ten questions and a separate answer key to data/prepared/
npm run preview-prompt  # Preview the first full-context prompt
npm run preview-rag     # Preview local keyword retrieval
npm test               # Original tests in tests/*.test.ts; model transport is mocked
npm run typecheck      # TypeScript checking without emitting files
```

These commands make no model requests. Data export writes prepared JSON; the previews depend on the standard loader and its dataset validation. Optional `npm run inspect-data` reads the first ten rows of the training shard and requires that additional local file.

The original tests cover prompt/reference separation, data integrity, retrieval ranking, bounded tool searches, caching payloads, summary reference resolution, Hybrid composition, model failures, evaluation, and aggregation. With the reviewed local data, **72/74 tests pass**; the two failures are in [`loadData.test.ts`](tests/loadData.test.ts) and [`retrieveContext.test.ts`](tests/retrieveContext.test.ts), both due to the missing labeled evidence described above. **Type checking passes.**

Additional offline test suites exist outside `npm test`:

```sh
node --test experiments/context-noise/pilot.test.ts
node --test experiments/expansion/expansion.test.ts
```

These suites check fixture preservation, noise construction, semantic review regressions, controlled mocked requests, and execution/billing guards. They retain historical branch/ref assumptions, so direct execution depends on matching Git metadata as well as data. [`verify-offline.ts`](experiments/expansion/verify-offline.ts) provides the existing isolated validation workflow, using a temporary copy, denying network, and mocking read-only Git metadata; its saved [validation artifacts](experiments/expansion/prepared/validation/) document that environment. These are software/fixture checks, distinct from rerunning the research experiments.

## Project folders

```text
ContextEngineering/
├── README.md
├── .env.example                  Environment template; .env is local and ignored
├── package.json                  Strategy, inspection, analysis, and test commands
├── package-lock.json             Locked dependencies
├── tsconfig.json                 Strict TypeScript configuration
├── src/                          Shared loading, prompts, client, scoring, and runner
│   ├── ParquetFileReader.ts
│   ├── loadData.ts
│   ├── buildPrompt.ts
│   ├── callModel.ts
│   ├── schema.ts
│   ├── results.ts
│   ├── usage.ts
│   ├── evaluation.ts
│   ├── runQuestion.ts
│   ├── summarizeResults.ts
│   ├── logger.ts
│   └── strategies/               Implementation and README for each strategy
│       ├── full-context/
│       ├── caching/
│       ├── rag/
│       ├── summarization/
│       └── hybrid/
├── data/                         Local Parquet files and dataset resource guide
│   └── prepared/                 Optional generated questions and separate answer key
├── experiments/
│   ├── context-noise/            Original 20-question pilot, fixtures, tests, and runner
│   │   ├── artifacts/            Local offline plans and context review material
│   │   └── results/              Local saved pilot responses and comparisons
│   └── expansion/                Curated 200-question experiment and execution guards
│       ├── evidence/             Frozen historical/pilot evidence and reviewed donors
│       ├── prepared/             Manifest, tasks, IDs, reviews, and validation artifacts
│       ├── runtime/              Local durable request receipts and evaluation outputs
│       └── superseded/           Preserved earlier preparations
├── results/                      Historical attempts, summary, and legacy CSVs
├── reports/                      Final comparison and earlier research walkthrough
│   └── final-comparison-evidence/  Audit, inventories, exports, and SVG charts
├── tests/                        Original automated test suite
├── scripts/                      Data inspection and saved-evidence report tooling
├── doc/                          Project flow and original course materials
│   ├── project-flow.png
│   ├── project-flow.svg
│   ├── TestQuestions/            Original ten test questions
│   ├── TestTextFiles/            Original twenty campus-policy text files
│   ├── TestResult/               Original results spreadsheet template
│   └── delivarables/             Original course deliverables document
└── test.ts                       Legacy manual training-data reader
```

Generated/local directories are shown to explain the workflow; they may be absent from a fresh checkout. The original `doc/` materials are retained as project history; the implemented quantitative comparison uses HotpotQA.

## Reports and evidence

| Resource | Contents |
| --- | --- |
| [Final comparison — Markdown](reports/final-comparison-report.md) / [HTML](reports/final-comparison-report.html) | Completed 200-question methodology, eight-condition results, charts, paired comparisons, and limitations. |
| [Final per-evaluation CSV](reports/final-comparison-results.csv) | 1,600 rows with answers, scores, resource measurements, and raw artifact pointers. |
| [Evidence guide](reports/final-comparison-evidence/README.md) | Logical evidence index and report reproduction notes. |
| [Verification](reports/final-comparison-evidence/verification.json) / [export checks](reports/final-comparison-evidence/report-checks.json) | Saved integrity, reconstruction, scoring, accounting, and report-validation results. |
| [Result index](reports/final-comparison-evidence/result-index.json) / [source inventory](reports/final-comparison-evidence/source-inventory.json) | Mappings to immutable outputs and SHA-256/size records for preserved evidence. |
| [Condition summary](reports/final-comparison-evidence/condition-summary.csv) / [paired comparisons](reports/final-comparison-evidence/paired-comparisons.csv) | Aggregate metrics and question-matched differences. |
| [Quality chart](reports/final-comparison-evidence/quality.svg), [latency chart](reports/final-comparison-evidence/latency.svg), [cost chart](reports/final-comparison-evidence/cost.svg) | Existing final-report visualizations. |
| [Expanded runtime](experiments/expansion/runtime/fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110/) | Original durable `requests/`, immutable `results/`, and completed `combined.json`; requires the local evidence archive. |
| [Pilot raw responses](experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/runs.jsonl) / [comparison](experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/comparison.md) | Separate original 20-question, 60-response experiment. |
| [Historical strategy log](results/runs.jsonl) / [summary](results/summary.json) | Original benchmark attempts and saved aggregation, including the 100-question runs. |
| [Technical walkthrough](reports/project-technical-walkthrough.md) / [earlier HTML research report](reports/context-engineering-complete-research-report.html) | Development history, implementation explanations, and earlier pilot analysis; read as an earlier snapshot. |
| [Course deliverables](doc/delivarables/Research_Deliverables_and_Dates.docx), [test questions](doc/TestQuestions/AIP444_10_Test_Questions.txt), [spreadsheet template](doc/TestResult/Simple_Test_Results.xlsx) | Original academic planning and test materials; the spreadsheet is not measured benchmark evidence. |

## Research limitations

- **Sampling and scope:** the 200 questions are purposively selected, not a random or representative HotpotQA sample. Findings apply to this frozen cohort, model, provider, and implementations.
- **Single observations:** one response per question and condition does not estimate repeated-run variance. Sequential execution, provider load, and cache state can affect timing and resource comparisons.
- **Controlled noise:** clean contexts use gold-selected passages; each question has one fixed unrelated addition and one synthetic contradiction in a fixed appended position. The study does not establish robustness to arbitrary natural misinformation, ordering, context lengths, or noise distributions.
- **Scoring:** exact match and token F1 can penalize valid paraphrases and qualifiers. Six retained source-supported scoring-limit cases are [documented](experiments/expansion/prepared/scoring-limitations.md), with original labels and scoring unchanged. Citation agreement does not independently establish factual truth or entailment.
- **Retrieval and compression:** local keyword search can miss multi-hop evidence, and summaries can omit or distort facts. Results describe these implementations rather than every possible RAG or summarization system.
- **Caching and latency:** reported cache reads do not isolate cold/warm reuse or guarantee savings. Saved strategy timing may include checkpoint replay and is not server-only or randomized latency evidence.
- **Accounting and inference:** provider-reported costs are not reconciled external invoices. Integrity checks verify saved evidence internally. Exploratory statistical intervals condition on the chosen cohort and comparisons are unadjusted.

## Contributors and acknowledgements

The repository's recorded contributors include **Ashwin Pandey**, **SM Tausif**, and **HilanaMdawar** (names as recorded in Git history). The original implementation, strategy guides, project flow diagram, course documents, example questions, policy corpus, and experimental artifacts are retained.

This work was developed for **AIP444 at Seneca Polytechnic**. The project uses the **HotpotQA dataset** and its labeled supporting evidence, together with the open-source libraries declared in `package.json`. Model responses in the expanded study were served by **Google AI Studio through OpenRouter**. Experiment fixture documentation records AI-assisted/agent review; it should not be read as independent human factual adjudication.
