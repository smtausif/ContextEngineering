# AIP444: clean versus noisy context pilot

This isolated Seneca Polytechnic pilot asks how an LLM answers the same questions when correct evidence is presented alone, with unrelated material, or with contradictory material. It uses only the existing Full Context answering baseline. It does not rerun the five-strategy benchmark.

## Current status

Implementation and offline validation only. No live measurements have been collected by this experiment. API use requires a later explicit approval; the documented live command must not be run as part of preparation.

All experiment code, fixtures, and documentation live here. Generated offline material is in `artifacts/`; future live runs go into `results/RUN_ID/`. Both output directories are locally ignored. Ashwin's `src/`, main runner, package scripts, evaluators, tests, and historical `results/` are unchanged.

## Dataset and selection

The loader uses the local `data/distractor-validation.parquet` directly through the existing `ParquetFileReader`, then applies the existing `prepareData` validation. The original `loadData()` hardcodes a different filename, so it is deliberately not changed or called for this pilot.

The inspected file contains 7,405 questions. Of these, 7,404 have valid labeled evidence and unique passage titles. Row 5059, ID `5ae61bfd5542992663a4f261`, contains an invalid reference to sentence 902 of `Jimmy Butler (basketball)` and is excluded. The filename alone is not a provenance guarantee: the full dataset SHA-256 is recorded in every plan.

Twenty questions are purposively selected, not randomly sampled: their answers involve clear dates, places, named roles, organizations, or quantities, allowing a source-specific contradiction to be reviewed. Their fixed row indices, in pilot order, are 1, 4, 5, 7, 12, 14, 16, 18, 22, 24, 26, 31, 53, 36, 39, 41, 42, 51, 58, 63. The manifest records all IDs. Dataset changes or stale fixture evidence cause validation to stop rather than silently selecting replacements.

Revision `pilot-v2` replaces pilot question 13 (the Russian Civil War case at row 35) with row 53, ID `5a87c13f5542996e4f30890c`. Complete passages for `Franco Corelli` and `Tosca (1956 film)` establish the performer, film and production city, Rome. The conflicting source explicitly places that same production in Milan instead. This avoids retaining the geographically incompatible Cinecittà studio name. The Apple Remote contradiction also fixes “the a USB game controller” to “a USB game controller” while preserving the denial of keyboard-function-key control. The other nineteen questions, their reference answers, and their original evidence are unchanged.

## Conditions and review

| Condition | Context supplied to the model |
|---|---|
| Clean | Complete original passages whose titles occur in the gold supporting facts, in original order. |
| Irrelevant | Exactly the clean passages, plus one distinct unrelated passage assigned to that question (80–86 words). |
| Conflicting | Exactly the clean passages, plus one synthetic passage (64–95 words) with a reviewed contradiction of an answer-relevant fact. |

The gold answer and reference citation set remain identical. Existing correct evidence is never removed or edited. Complete passages retain their original titles and sentence arrays, so original sentence indices remain valid. Added passages have unique, neutral titles. Condition labels, fixture rationales, gold labels and answers are never passed as metadata in model requests. Correct answer text naturally remains present in evidence.

`fixtures.json` contains each exact original evidence sentence, true and false values, added source text, rationale, and review status. The curation helper encodes twenty deliberately chosen substitutions, including explicit exclusions where two claims could otherwise coexist. It does not use AI generation. The fixtures have been inspected by the implementation agent against the dataset; they are **not labeled as human-approved**. The dry run exposes all twenty for human review. Review the actual claims, not just whether two strings differ.

The twenty unrelated passages in `irrelevant.ts` describe distinct craft techniques or natural processes, such as basalt cooling, bread dough structure, and knitted fabric loops. Each fixed row-to-topic assignment was read against its paired question and supporting evidence; none asserts facts about the paired subjects or the answer-relevant relation. Each passage is 80–86 words, within the required 70–100 range. The generated fixtures retain a separate irrelevance-review rationale, which appears only in review material. Offline checks verify distinct text and titles, length bounds, deterministic regeneration, and absence of reference answers and supporting passage subjects. Such lexical checks cannot establish general semantic irrelevance; the topic comparison is a separate manual curation judgment. Similarly, contradiction tests protect these specific reviewed relationships rather than pretending to be a general factuality detector.

Each question has a different, fixed unrelated topic, so the pilot does not measure variation across multiple unrelated topics for the same question. Added count is constant at one passage and length varies within the stated ranges. Conflicting length is approximately matched, not exactly matched. Synthetic reference-style padding and different source titles may affect credibility. These are explicit pilot limitations.

## Reused implementation

| Existing utility | Purpose |
|---|---|
| `src/ParquetFileReader.ts`, `prepareData` in `src/loadData.ts` | Read Parquet and verify gold evidence is present. |
| `src/strategies/full-context/fullContext.ts` | The answering baseline and prompt construction. |
| `src/buildPrompt.ts`, `src/schema.ts` | Identical answer instructions, source formatting and structured response schema. |
| `src/callModel.ts`, `src/results.ts` | OpenRouter model calls, errors, timing and shared strategy result format. |
| `src/evaluation.ts` | Unchanged normalized exact match, answer F1 and citation F1. |
| `src/usage.ts`, `src/summarizeResults.ts` | Preserve unknown usage and aggregate reported metrics without double counting. |

The existing runner has no reusable logging export; this isolated runner uses the same JSONL append pattern without importing its executing CLI or writing its results file.

## Controlled execution

All conditions use model `google/gemini-3.1-flash-lite`, provider `google-ai-studio`, temperature 0, and `max_tokens` 1024, with the same structured answer schema and prompt instructions. Other generation parameters remain unspecified identically, using provider defaults. A seed is not supplied; deterministic contexts do not guarantee deterministic model responses. The existing client has a 60-second timeout, disables SDK retries and OpenRouter whole-response caching, and prohibits provider fallbacks when pinned.

The shared client does not expose temperature or output-limit arguments. `answer.ts` therefore applies those two fields in an experiment-local, scoped fetch adapter while still invoking the existing Full Context function. It captures credential-free JSON request bodies. It restores fetch after every attempt and must run sequentially in its own process. No shared source is changed.

The default pilot has one repetition per question/condition: 20 × 3 × 1 = 60 requests. Condition order rotates across questions and repetitions to reduce systematic order bias; correct passage order and appended-noise position stay fixed. Three repetitions would require 180 requests. Runs stop at the first failed attempt without retries and write a partial comparison report. Each approved invocation creates a new run directory; there is no automatic resume or overwrite of a live run.

Every plan records dataset, fixture, context and implementation hashes (including the shared client, prompts, scoring and lockfile). The live command requires the manifest hash from the reviewed dry run. Code, fixtures or data changes require another dry run and review. The manifest excludes API keys. No request headers are written.

## Offline commands

Run from the repository root with dependencies already installed:

```sh
npm run typecheck
node --test experiments/context-noise/pilot.test.ts
node experiments/context-noise/run.ts --dry-run --repetitions 1
```

The default mode is also dry-run if no mode flag is supplied. It does not load `.env`, require credentials, or make any network requests.

Offline output:

- `artifacts/plan.json`: fixed sample, hashes, settings and preflight cost estimate.
- `artifacts/contexts.json`: all sixty context variants, plus questions and added word counts.
- `artifacts/review.txt`: all complete model contexts and separate original/contradictory claims with review rationales.
- `artifacts/comparison.md` and `comparison.json`: side-by-side report structure with missing measurements shown as unknown, not invented zeros.

The CLI prints the complete three-condition VCU example. Tests exercise dataset integrity, context preservation, deterministic regeneration, semantic fixture expectations, malformed fixtures, controlled mocked model requests, API failures, comparison calculations, and the offline network prohibition. `create-fixtures.ts` is only a curation helper; its CLI deliberately regenerates the committed fixture file and is not part of ordinary execution.

Validation on this branch: TypeScript checking passed and all 13 pilot tests passed. The earlier unchanged repository suite passed 72/74 tests. Its two real-data tests (`tests/loadData.test.ts` and `tests/retrieveContext.test.ts`) fail because the original `validation-00000-of-00001.parquet` lacks the first question's labeled `Scott Derrickson [0]` evidence. This pilot's separate Distractor file has that evidence and all twenty selected cases pass validation. The original file and tests were not changed.

## Preflight budget and availability

OpenRouter's [public Gemini 3.1 Flash Lite model/provider page](https://openrouter.ai/google/gemini-3.1-flash-lite) listed Google AI Studio at **USD $0.25/million input tokens and $1.50/million output tokens**, checked 2026-11-23. Public listing availability is verified; this account's access, credentials and inference availability have not been tested. There are no availability-probe model calls. Recheck the public price listing before later approval if prices have changed.

Input tokens are estimated from serialized prompt characters divided by four, plus 200 tokens per request for schema/framing. This is a transparent heuristic, not the Gemini tokenizer. Output is budgeted at 256 tokens per answer; a separate scenario uses the full 1,024-token output allowance. Actual output includes any billed reasoning tokens. Cache discounts, account funding fees and taxes are excluded.

For one repetition, the current estimate is approximately **$0.0390 total** (60 calls). The 1,024-output-token scenario is approximately **$0.1081**, and is not a guaranteed spending cap because input tokenization and billing can differ. The generated plan contains per-condition estimates. Three repetitions multiply both estimates by three.

## Future live command — only after explicit approval

First review `artifacts/review.txt` and use its matching `plan.json`. The following shell command reads the manifest hash locally; it does not print credentials. The existing `.env` supplies the key, and the experiment pins model/provider itself.

```sh
PILOT_MANIFEST=$(node --input-type=module -e 'import {readFileSync} from "node:fs"; console.log(JSON.parse(readFileSync("experiments/context-noise/artifacts/plan.json", "utf8")).manifestHash)')
node --env-file-if-exists=.env experiments/context-noise/run.ts --live --repetitions 1 --reviewed-manifest "$PILOT_MANIFEST"
```

This is a paid execution command, not a preflight check. It has not been run during preparation. Do not run it until the experiment is explicitly approved.

To rebuild a report later without calling the model:

```sh
node experiments/context-noise/report.ts --run RUN_ID
```

## Measurement and reporting

The report shows the three conditions side by side with attempts, scored coverage, failures, accuracy, answer F1, citation F1, mean end-to-end latency, input/output/total tokens, and provider-reported API cost. JSON also retains mean/median latency, citation precision/recall, cache metrics, incomplete token/cost coverage, full predicted answers and per-question paired changes for quality, latency, tokens and cost. Paired differences compare the same question and repetition; negative accuracy/F1 changes mean worse agreement than clean context.

Exact match uses the existing HotpotQA normalization. Answer F1 measures word overlap. Citation F1 compares exact title/sentence-index sets, with duplicate citations removed. These are reference-agreement measures, not an independent factuality judge.

End-to-end latency wraps the complete baseline invocation, including the local control adapter. It excludes dataset loading, context generation, evaluation and disk logging. This single-call baseline also retains the shared client's model latency. Prompt, completion and total tokens are provider-reported; cost is reported `usage.cost`, not a retrospective local price estimate. Failed requests with unreported usage remain unknown. Existing automatic provider prefix caching may still affect latency and cost and is observable when reported.

Aggregate quality uses completed scored attempts, while latency includes measured failures and tokens/cost include reported failed-call usage. Always report failure and pairing coverage alongside quality; missing attempts must not be silently treated as correct or incorrect. This is a small purposive pilot using gold-selected passages and fixed noise position. It supports a controlled descriptive comparison, not population-level or statistical-significance claims.
