# Revised 200 NEW-question execution plan

**Implementation and offline validation only. No paid experiments, pushes, merges, branch switches or historical-result rewrites occurred. This revision supersedes the earlier 100 reused + 100 new plan. Old approval digests are invalid.**

## Selected IDs and evidence

The complete ordered list of all 200 IDs is in [selected-question-ids.txt](selected-question-ids.txt), with a machine-readable copy in [selected-question-ids.json](selected-question-ids.json). [selected-questions.md](selected-questions.md) displays every ID with its sequence number, dataset row and question. [selection-audit.json](selection-audit.json) includes the row fingerprint, gold answer, labeled supporting facts and eligibility result for every selected question.

All five strategies receive this exact ordered cohort. All three noise conditions receive the same exact ordered cohort as the benchmark. There are **200 unique selected IDs, zero duplicates, zero overlap with the historical 100 IDs, and zero overlap with the original 20-question pilot**. The 200 manually curated, eligible rows are in ascending dataset-row order, starting with row 100 (5a85eed75542996432c5713b) and ending with row 497 (5a84873e5542997175ce1eec). Selection is purposive to permit valid controlled contradictions, not a random sample.

Dataset split: **HotpotQA distractor validation**. File: data/distractor-validation.parquet. SHA256: c20b638ca82b21d04fe12e14ff417ad05153d4d215a65de54497fca4e972f7c6. It has 7405 rows, of which 7404 pass the complete-support and unique-title structural checks. Every selected supporting passage and original zero-based sentence index was verified; the gold-answer span used for each conflicting relation occurs in labeled supporting evidence. Gold labels/review notes never enter model inputs.

Origin was safely refreshed at f62ad872d665f298ab3590c594ceb6b298058843; current branch remains rag-hybrid at 36f912bbe205e3cc0d513b6114463591f2134666. All 1,716 saved origin records were inventoried for exclusion, including older-model and failed attempts. Their union with the pilot contains 100 unique historical IDs, all excluded. Legacy CSV rows do not supply usable HotpotQA request provenance and are kept unchanged. The complete original origin JSONL and original pilot evidence remain in evidence/.

The local file named validation-00000-of-00001.parquet lacks many gold supporting passages and is not used for this new cohort. Historical requests carrying that filename were content-matched to the verified distractor data for cost calibration only. No historical response is inserted into either new experiment.

## Pilot remains separate

Original run **4a93b88d-81b4-45ff-9444-348852054b1f** remains 20 questions and 60 completed responses. Its fixtures, requests, contexts, model/settings and scores are unchanged and were replayed/verified offline. [pilot-preservation.json](pilot-preservation.json) records the original manifest, response-file hash and 20 IDs. Its original results path remains unchanged; the lossless evidence copy is also preserved. The new noise experiment has **200 new questions / 600 new responses**, alongside this separate pilot. It is not the old 20 plus 180 cohort.

## Exact request count and estimated cost

| Strategy / condition | New unique questions | Historical results reused | New model requests | Estimated input tokens | Estimated output tokens | Estimated USD |
|---|---:|---:|---:|---:|---:|---:|
| Full Context | 200 | 0 | 200 | 413,064 | 13,226 | $0.123105 |
| RAG | 200 | 0 | 600 | 456,999 | 20,828 | $0.145492 |
| Summarization | 200 | 0 | 400 | 671,165 | 415,357 | $0.790827 |
| Hybrid | 200 | 0 | 800 | 622,130 | 233,542 | $0.505845 |
| Prompt Caching | 200 | 0 | 200 | 413,264 | 13,212 | $0.123134 |
| Noise: Clean | 200 | 0 | 200 | 157,061 | 8,120 | $0.051445 |
| Noise: Irrelevant | 200 | 0 | 200 | 173,510 | 8,080 | $0.055497 |
| Noise: Conflicting | 200 | 0 | 200 | 178,549 | 7,570 | $0.055992 |
| **Total** | **1,600 strategy/condition results on 200 shared IDs** | **0** | **2,800** | **3,085,742** | **719,935** | **$1.851338** |

Five strategies require **2,200 calls**: Full Context 200, RAG 600, Summarization 400, Hybrid 800, Prompt Caching 200. Noise requires **600 calls**, 200 per condition. Counts are exact for successful execution: RAG always performs its required first search request, a second search-planning request and final answer; Hybrid adds a summary stage. Failures stop early, so interrupted runs may send fewer calls. There are 1,600 missing logical tasks in missing.json and complete approved inputs/references in tasks.json. Adaptive later payloads depend on future responses and cannot be enumerated exactly in advance.

Estimated new cost: **$1.851338 USD**, comprising benchmark $1.688403 and noise $0.162935. Estimate: **3,085,742 input tokens + 719,935 output tokens**. Pricing rechecked 2026-11-23: [OpenRouter Gemini 3.1 Flash Lite / Google AI Studio](https://openrouter.ai/google/gemini-3.1-flash-lite), $0.25/M input and $1.50/M output. No cache discounts, taxes or account fees assumed.

Estimation uses 100 compatible historical results per strategy and 20 per noise condition solely as calibration. Their usage means are scaled to 200 new results, with input adjustment for mean serialized-context length. Calibration records are fingerprinted in evidence/cost-calibration.json and checked against original raw response evidence. This is a heuristic, not a tokenizer quote or spending cap. Noise using the full 1,024 output tokens per call would cost about $1.048880 at estimated input volume. Original benchmark calls omit an output limit, so there is no finite configured total-cost cap.

## Fixtures and preserved methodology

All **200** new-cohort fixture reviews are in [noise-review.md](noise-review.md), including complete correct supporting passages, source sentence and ID, explicit false claim, unrelated donor passage, provenance and individual rationale. [noise-review-decisions.json](noise-review-decisions.json) records the assistant's semantic decisions per fixture; human approval is still pending. 158 question-specific relations/donors were retained from the prior reviewed preparation, and 42 additional relations/donors were curated and inspected. Automatic lexical guards supplement semantic review; they do not prove contradictions or irrelevance.

Every condition preserves full gold supporting passages and original indices. Each noisy context appends exactly one passage. All 200 irrelevant titles and texts are distinct; donor coordinates are verified against source data. Conflicting claims explicitly exclude the gold value in the same answer-bearing relation. New conflicting passages are 69–86 words; unrelated passages are 70–100 words.

A candidate at row 468 was rejected because its question associates Kam Heskin with the 2004 film while its passages place her role in 2006–2010 and identify Julia Stiles in the 2004 film. The replacement, row 497, directly supports the 137th-edition US Open answer. Earlier review also corrected subject identity and greater-than alternatives; those valid retained fixtures remain unchanged apart from their new reference-entry titles.

Model: google/gemini-3.1-flash-lite via google-ai-studio; fallback disabled and required parameters enforced. The five original strategy implementations and shared client remain untouched. Their temperature and output limits stay omitted, preserving implementation behavior. Prompt Caching keeps the original explicit ephemeral marker; actual provider cache hits are observational. Noise preserves temperature 0, max_tokens 1024, original full-context prompt structure and the exact HotpotQA scoring functions. The original compare() computes paired noise changes for the new cohort; pilot rows are excluded from that comparison and exposed only as separate evidence metadata. Condition order rotates by question index, while question-ID order remains identical within each condition.

Limits: purposive explicit-answer selection affects benchmark representativeness; clean contexts use oracle gold-selected evidence; synthetic denials are conspicuous; donor prose varies; noise is appended at a fixed position; possible automatic caching remains. No significance or random-sample generalization is claimed.

## Offline validation

- Expansion suite: **11 passed, 0 failed**; typecheck passed.
- All eight cells: 200 ordered unique IDs; zero history/pilot overlap.
- Every selected row, supporting sentence, constructed context and donor verified; deterministic fixture generation passed.
- Original 20 fixtures and all 60 response bytes/settings/scores preserved; pilot wire replay passed.
- Duplicate/order/history/version guards, cost counts, zero historical inclusion, failed-call accounting, crash intent protection, partial summarization resume and approval gates passed with offline transports.
- Existing working-tree suite: 72/74 passed; two unchanged tests reject the pre-existing incomplete local dataset variant.
- Same unchanged suite in an isolated copy with the verified distractor dataset: **74/74 passed**.
- Original pilot suite: 12/13 passed; the unchanged branch-specific dry-run test requires clean-vs-noisy-context. The branch guard was not weakened.

See validation.json and validation/*.tap. combined-existing.json correctly shows **0/200 completed** in each new cell, not historical coverage. All spending in this preparation is **$0**; no model endpoint was contacted.

## Safe incremental execution

Request intents use exclusive creation and fsync before sending. Raw HTTP receipts are durably saved before a strategy can advance. A task/stage/payload hash prevents duplicate sends; completed receipts replay locally on resume. Saved failures or uncertain billing stop without automatic retry. maxRetries=0 remains intact. The fixed global lock/manifest pin prevents concurrent or cross-manifest runs. Expected model/provider is checked on both request and response. Source/dataset/evidence/fixture fingerprints, new-cohort identity/order and the origin ref are validated before execution. Historical file paths are never output destinations.

Fixed output: experiments/expansion/runtime/cf9a5b58ca98892d0ba0f0ea472527eaaa043c3a401c2d581947b78e959e6941/, containing requests/, results/ and combined.json. Counts/costs/tokens include failed receipts when known; missing billing data remains unknown. --status reports progress and unresolved intents. Do not delete an intent or failed result to force a resend; reconcile billing through provider evidence first.

## Exact live commands — recorded, not executed

Only run after explicit approval of this revised cohort, costs and all 200 fixtures. Earlier approval digests are invalid. The key is loaded through .env and never printed.

```sh
# Read-only status
node experiments/expansion/execute.ts --status

# Five strategies: 1,000 new logical results / 2,200 model requests
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group benchmark --approved-manifest cf9a5b58ca98892d0ba0f0ea472527eaaa043c3a401c2d581947b78e959e6941 --reviewed-fixtures e89a00a06b7ab16e98c247f1b574e37d5b2f24dbb994bfb4422b64e2e3d724d9

# Noise: 600 new logical results / 600 model requests
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group noise --approved-manifest cf9a5b58ca98892d0ba0f0ea472527eaaa043c3a401c2d581947b78e959e6941 --reviewed-fixtures e89a00a06b7ab16e98c247f1b574e37d5b2f24dbb994bfb4422b64e2e3d724d9

# Alternatively run both groups sequentially; do not launch concurrent commands
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group all --approved-manifest cf9a5b58ca98892d0ba0f0ea472527eaaa043c3a401c2d581947b78e959e6941 --reviewed-fixtures e89a00a06b7ab16e98c247f1b574e37d5b2f24dbb994bfb4422b64e2e3d724d9
```

Repeat the identical approved live command to resume. Completed model stages replay locally; uncertain or failed attempts block, rather than silently retry.

## Git integration plan — not executed

1. Back up/hash the existing untracked pilot sources/results, reports and local datasets; keep credentials excluded. Preserve the superseded preparation archive for traceability.
2. Stay on rag-hybrid. After separate integration approval, fetch and inspect origin again. If source/data/history changed, re-audit exclusions and regenerate the plan rather than execute an obsolete cohort. If the remote still changes only README/.gitignore/historical results, use a reviewed fast-forward only.
3. Stage experiments/expansion and its required unchanged original pilot source dependencies explicitly; leave unrelated reports, data, credentials and legacy CSVs unstaged. Review the staged diff, verify original strategy fingerprints and rerun offline checks before committing. Do not alter Ashwin's loader/strategies to resolve the existing dataset-test discrepancy.
4. Run no paid work until separately approved. Afterwards preserve the complete request journal, failures and raw receipts under a new immutable manifest-specific evidence archive, verify hashes, and integrate derived results by source references. Never overwrite historical results/runs.jsonl or the original pilot run. Require 200 completed unique IDs in each of the eight new cells.
5. Review the final result/evidence commit on rag-hybrid. Push or merge only after explicit authorization. No such actions occurred in this revision.
