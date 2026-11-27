# Semantically corrected 200-question execution plan

**Revision 3: semantic review PASS against original frozen source evidence. Paid execution awaits approval.** The rejected revision cf9a5b58ca98892d0ba0f0ea472527eaaa043c3a401c2d581947b78e959e6941 and earlier plans are archived under superseded/; their approval digests are invalid. No live API call, branch switch, push or merge occurred.

## Cohort, changes and scientific scope

All five original strategies and all three noise conditions use the **same 200 NEW question IDs in the same ascending dataset-row order**. [All ordered IDs](selected-question-ids.txt), [questions/row numbers](selected-questions.md), [source/evidence audit](selection-audit.json). Zero duplicates, zero missing fixtures, zero overlap with the historical benchmark/pilot ID union. Pilot run 4a93b88d-81b4-45ff-9444-348852054b1f remains separate at 20 questions and 60 responses. No historical responses enter the new 1,600-cell aggregate.

Dataset: **HotpotQA distractor validation**, data/distractor-validation.parquet. SHA256: c20b638ca82b21d04fe12e14ff417ad05153d4d215a65de54497fca4e972f7c6. 7405 original rows, 7404 structurally eligible. Original questions, gold answers, supporting_facts and passage/sentence indices are unchanged. Original strategy source and scorer fingerprints match their historical baselines. Origin evidence remains pinned at f62ad872d665f298ab3590c594ceb6b298058843; current branch remains rag-hybrid at 36f912bbe205e3cc0d513b6114463591f2134666.

Replaced **14 questions**: seven invalid, all five ambiguous, plus two genuinely unsupported exact-count references. [Complete old → new mapping with reasons](replacements.md), [machine-readable adjudication and approved facts](replacement-audit.json). The five ambiguous cases were reviewed separately: Southaven/Memphis population, two schools, multiple containing regions, metropolitan versus city population, and title versus office. All were replaced rather than changing their gold.

Of the eight scoring cases, **six remain unchanged** because their reference values are supported; correct paraphrases may still receive exact-match zero. The two removed count cases had exact totals contradicted by strict lower-bound qualifiers in the source. [All eight decisions and actual scorer outputs](scoring-limitations.md). No scorer, metric, reference-alias policy or existing result score was changed.

## Complete semantic review

All 200 question/requested-fact/gold/source/claim relationships were rechecked. The complete source evidence and paired donor text for 186 retained cases were proven unchanged from the prior full read-only review. Fourteen replacements had complete supporting passages, all bridge/answer facts, the exact conflicting statement and the entire irrelevant passage inspected in this revision. Each conflicting statement targets the same subject/relation/time/units as the question, gives a distinct alternative, and explicitly excludes the correct value. Each unrelated donor supplies no answer-relevant assertion. All 200 donor titles and texts are distinct, and coordinates match original source passages.

[Full 200-fixture evidence/context review](noise-review.md), [200 final semantic decisions](semantic-review-decisions.json). Result: **PASS, 200 reviewed, zero unresolved semantic blockers**, with six documented metric limitations. Semantic judgments are assistant review, not human execution approval; lexical checks and changed words alone were not treated as validity proof. Candidate rows 507, 508 and 540 were rejected during screening for question/source or support-annotation problems.

This is a controlled, purposive source-grounded sample. It is not a random/representative HotpotQA population estimate or a current-world factual audit. Source-relative dates/current/latest references use the frozen dataset account. Clean contexts use oracle gold-selected passages; noise is appended; synthetic explicit denials and variable donor prose may affect behavior. Automatic provider caching may occur. Keep these limits and the exact-match limitations in any interpretation.

## Offline verification

- Expansion: **14/14 passed**, including regression tests rejecting all 14 retired IDs and changed replacement gold/fact targets.
- All suites in a fresh network-denied isolated fixture: **101/101 passed** (74 original benchmark, 13 original pilot, 14 expansion). Source code is copied without edits. The historical validation filename is aliased to verified distractor data only in this test fixture; read-only Git queries are mocked to supply the branch expected by the original pilot. No real branch changes.
- Typecheck: passed. Original working-tree suite remains **72/74**, with the two known missing-support dataset failures. The original dataset/loader were not edited to hide them.
- Same 200 IDs/order in eight groups; original supporting passages/indices and all original gold/reference values preserved; 200 distinct donor passages; original pilot 20 fixtures/60 response bytes and all pinned historical evidence unchanged.

[Validation details](validation.json); TAP logs under validation/. combined-existing.json correctly reports zero completed new results. No paid run or runtime journal has been created.

## API configuration and exact request count

Model: google/gemini-3.1-flash-lite, provider google-ai-studio, provider fallback disabled, required parameters enforced. Benchmark temperature/output limit remain omitted exactly as in the unchanged implementation. Caching remains explicit with its original ephemeral marker. Noise retains temperature 0 and max_tokens 1024 and the original full-context prompt structure. The exact original EM/token-F1/citation scoring code and original compare() remain in use.

| Group | New unique questions | New API requests | Estimated input tokens | Estimated output tokens | Estimated USD |
|---|---:|---:|---:|---:|---:|
| Full Context | 200 | 200 | 410,270 | 13,226 | $0.122407 |
| RAG | 200 | 600 | 453,908 | 20,828 | $0.144719 |
| Summarization | 200 | 400 | 666,625 | 415,357 | $0.789692 |
| Hybrid | 200 | 800 | 617,922 | 233,542 | $0.504794 |
| Prompt Caching | 200 | 200 | 410,468 | 13,212 | $0.122435 |
| Noise: Clean | 200 | 200 | 157,283 | 8,120 | $0.051501 |
| Noise: Irrelevant | 200 | 200 | 173,715 | 8,080 | $0.055549 |
| Noise: Conflicting | 200 | 200 | 178,950 | 7,570 | $0.056093 |
| **Total** | **200 IDs / 1,600 condition-strategy results** | **2,800** | **3,069,141** | **719,935** | **$1.847188** |

Request count is exact on successful completion: benchmark **2,200** calls (Full Context 200, RAG 600, Summarization 400, Hybrid 800, Prompt Caching 200) plus noise **600** (200 per condition). No historical request is reused as a new cohort response. Missing logical requests: 1,600; individually listed in missing.json, with full approved input/reference data in tasks.json. Intermediate adaptive payloads depend on future model outputs and cannot be fully specified offline. Failures stop early.

Estimated new cost: **$1.847188 USD** (benchmark $1.684046, noise $0.163142). Pricing checked 2026-11-23: [OpenRouter Gemini 3.1 Flash Lite / Google AI Studio](https://openrouter.ai/google/gemini-3.1-flash-lite), $0.25 per million input tokens and $1.50 per million output tokens. No cache discounts/fees/taxes assumed. Usage is a heuristic based on compatible historical means, adjusted for new prompt size; historical records calibrate costs only. This is not a spending cap. Benchmark output limits remain omitted to preserve the original implementations. Actual later-stage tokens and costs may differ.

## Safety and revised commands — not executed

The existing crash-safe request journal, exclusive/fsynced intent-before-send and response-before-advance records, per-stage provenance, partial-stage response replay, cost/token/error tracking, fixed global lock and manifest pin remain intact. maxRetries=0 is unchanged. Unresolved potentially billed requests and saved failures stop without automatic retry. New regression guards exclude the adjudicated semantic failures.

Manifest approval digest: fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110

Fixture review digest: e58fe6e6891bce8bfa9df3e867e4ac5e06b24d986ef37cd9f29df72724b5ff61

Only run after explicit user approval of this corrected selection, all 200 fixtures, preserved scoring limitations and estimated costs:

```sh
# Read-only preflight / progress
node experiments/expansion/execute.ts --status

# Five strategies: 2,200 model requests
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group benchmark --approved-manifest fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110 --reviewed-fixtures e58fe6e6891bce8bfa9df3e867e4ac5e06b24d986ef37cd9f29df72724b5ff61

# Three noise conditions: 600 model requests
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group noise --approved-manifest fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110 --reviewed-fixtures e58fe6e6891bce8bfa9df3e867e4ac5e06b24d986ef37cd9f29df72724b5ff61

# Alternatively both groups sequentially; do not start concurrent commands
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group all --approved-manifest fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110 --reviewed-fixtures e58fe6e6891bce8bfa9df3e867e4ac5e06b24d986ef37cd9f29df72724b5ff61
```

Repeat the same approved live command to resume. Completed task responses are skipped; complete model-stage receipts replay locally. Never delete an intent/failure to force a resend; reconcile unknown billing with provider evidence. Fixed output: experiments/expansion/runtime/fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110/{requests,results,combined.json}. Historical paths are never output targets.

## Safe Git integration — plan only

Preserve/hash current untracked work and all historical results first. Remain on rag-hybrid. After separate integration approval, refresh and inspect origin; any new source/history requires re-auditing exclusions and compatibility. Stage only the reviewed expansion and required unchanged pilot source dependencies, leaving credentials, unrelated reports/data and historical CSVs untouched. Rerun offline checks and verify hashes before a reviewed commit. Following paid-run approval and execution, archive the complete journal and receipts under a new manifest-specific evidence path, verify hashes and integrate derived results by source references. Require 200 completed unique IDs in each new cell. Never overwrite original historical JSONL or pilot results. Push or merge only after explicit authorization.
