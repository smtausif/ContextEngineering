# Expansion implementation and execution review

Status: implementation and offline validation only. Paid experiments await explicit approval. No branches were switched; no push or merge was performed.

## Evidence and compatibility

Fetched origin/rag-hybrid at f62ad872d665f298ab3590c594ceb6b298058843; local HEAD remains 36f912bbe205e3cc0d513b6114463591f2134666 on rag-hybrid. The remote adds 1,716 raw result records and a summary, with no strategy implementation changes. Original origin JSONL is losslessly compressed under evidence/origin-f62ad872d665f298ab3590c594ceb6b298058843.jsonl.gz; the original 60-response noise run and its plan are copied byte-for-byte to evidence/. No historical file was rewritten. CSV legacy files lack sufficient request provenance and are not reused.

Selected 100 compatible unique results per strategy plus all 60 pilot responses: **560 reusable results / 1,160 already completed model requests**. Repeated runs and cache repetitions do not count as additional unique questions. See reusable.json for every selected source record, line number, hash and run ID; historical-inventory.json describes all imported records.

The current file named data/validation-00000-of-00001.parquet contains retrieved contexts that omit many gold supporting passages. Historical requests under that filename instead match the complete distractor dataset. Compatibility is established from actual full-context wire-prompt equality against the pinned distractor dataset, not the old filename alone. Every selected RAG, hybrid and summary request is then replayed through the unchanged implementations, including intermediate tool calls and summary IDs, and every original score is recomputed and checked for equality. Actual response model/provider and cache mode are checked. The legacy dataset filename remains unchanged in historical evidence; the derived experiment uses the content-verified distractor dataset explicitly. Full per-question alias proofs and rejection reasons are in compatibility-audit.json.

Dataset: data/distractor-validation.parquet; SHA256 c20b638ca82b21d04fe12e14ff417ad05153d4d215a65de54497fca4e972f7c6; 7404 of 7405 rows are structurally eligible. The same first 200 eligible rows are used for every benchmark strategy. Noise preserves the original 20 IDs and selects 180 additional explicit answer-bearing relations from later eligible rows. Noise and benchmark cohorts need not be identical. Both ID lists, file fingerprints, implementation fingerprints and task digests are in manifest.json.

## Exact request plan and estimates

| Strategy / condition | Target unique questions | Reused results | New results | New model requests | Estimated input tokens | Estimated output tokens | Estimated USD |
|---|---:|---:|---:|---:|---:|---:|---:|
| full_context | 200 | 100 | 100 | 100 | 200,492 | 6,613 | $0.060042 |
| rag_tool | 200 | 100 | 100 | 300 | 221,816 | 10,414 | $0.071075 |
| summarization | 200 | 100 | 100 | 200 | 325,767 | 207,679 | $0.392960 |
| hybrid | 200 | 100 | 100 | 400 | 301,967 | 116,771 | $0.250648 |
| caching | 200 | 100 | 100 | 100 | 200,588 | 6,606 | $0.060056 |
| Noise: clean | 200 | 20 | 180 | 180 | 141,551 | 7,308 | $0.046350 |
| Noise: irrelevant | 200 | 20 | 180 | 180 | 156,331 | 7,272 | $0.049991 |
| Noise: conflicting | 200 | 20 | 180 | 180 | 160,107 | 6,813 | $0.050246 |
| **Total** | **1,600 condition/strategy results** | **560** | **1,040** | **1,640** | **1,708,619** | **369,476** | **$0.981369** |

The request count is exact for successful completion with the preserved implementations: full context and caching use one call, summarization two, RAG two search-planning calls plus one answer, hybrid two search-planning calls plus summary and answer. Failures stop early, so an interrupted run may send fewer calls. No failed or uncertain request is automatically retried. The 1,040 missing logical requests are individually listed in missing.json; tasks.json stores their complete input, labels kept out of prompts, provenance and expected call counts. Adaptive second-stage payloads depend on future model responses and cannot be listed exactly before execution.

Pricing checked 2026-11-23: [OpenRouter Gemini 3.1 Flash Lite, Google AI Studio](https://openrouter.ai/google/gemini-3.1-flash-lite): $0.25 per million input tokens and $1.50 per million output tokens. No cache discounts, fees or taxes are assumed. Token estimates use observed compatible-run means and adjust input totals by new/old serialized context length. This is a heuristic rather than an exact tokenizer count. Estimated new cost is **$0.981369 USD** (benchmark $0.834782; noise $0.146587). Noise using all 1,024 output tokens per request would cost approximately $0.943937 at the same estimated input volume. Benchmark output limits are omitted by the original client, so there is no finite configured total cost cap. No model call was made to obtain these estimates.

## Preserved configuration and methodology

All five strategies use google/gemini-3.1-flash-lite via google-ai-studio, provider fallback disabled and required parameters enforced. Benchmark temperature/output limits remain omitted, matching the compatible saved requests; adding noise's explicit controls to benchmark requests would invalidate their reuse. Prompt caching uses the unchanged explicit ephemeral marker; cache acceptance/hits are observational and not guaranteed.

Noise preserves temperature 0, max_tokens 1024, the same model/provider, full-context prompt block structure, original supporting sentence IDs, and the original HotpotQA exact match/token F1/citation precision/recall/F1 evaluator. The original compare() implementation produces combined paired changes through an explicitly labeled derived projection; historical run IDs and manifests remain immutable in their source files. Original 60 scores are unchanged. Failed/missing cells are excluded from quality metrics with coverage shown; incomplete cost/token measurements remain unknown.

## Fixture review

[noise-review.md](noise-review.md) contains an individual review of every one of the 180 new fixtures: question, gold value for review only, complete supporting passages, exact labeled answer-bearing sentence, scoped conflicting claim, irrelevant passage, donor coordinates and validation findings. All original 20 fixtures are copied unchanged into fixtures.json.

The 180 relation/alternative pairs in contradictions.tsv were manually curated and inspected against their questions and source sentences. All 180 donor passages were read alongside the paired relation. Lexical checks supplement that inspection; they are not proof of semantic irrelevance or contradiction. Supporting passages remain intact in every condition; each noisy condition appends exactly one passage. There are 200 distinct irrelevant titles and passage texts. New conflicting passages are 69–86 words; irrelevant passages are 70–100 words. Every new contradiction explicitly denies the gold value in the same relation, rather than relying on a changed word alone.

Review corrections made before final validation: Montezuma Castle replaces an initially mistaken monument name at row 111; Edmund Sharpe replaces an initially mistaken architect name at row 364. For the greater-than quantities at rows 115, 254 and 332, the final alternatives contradict the original bound (130 wins versus more than 230; fewer than 400 stores versus over 600; fewer than 100 million copies versus over 150 million). These avoid alternatives that could coexist with the source. Birth dates target birth rather than death; populations retain census year and administrative scope; roles, film titles, locations and names retain their question-specific subjects.

Limitations: purposive selection favors explicit answer spans, standardized synthetic denials are conspicuous, gold-selected clean contexts are an oracle condition, unrelated donors differ in style from the original pilot's prose, appended noise location is fixed, and automatic provider caching may occur. This is a controlled expansion, not a random or representative HotpotQA sample. Human review of all 180 fixtures is required before approving the fixture digest.

## Safety and offline validation

Crash-safe, exclusive request intents are fsynced before transport. Raw response receipts are fsynced before returning to a strategy. Each task/stage/payload has a deterministic request ID; completed receipts replay locally during resume. Partial failures, transport timeouts and unresolved intents block further execution without retry. All five implementations and the shared model client remain unchanged; maxRetries=0 is preserved. A global process lock and fixed runtime manifest prevent concurrent execution or silently starting another manifest over existing evidence. Every live response is checked for the expected actual model/provider before the next call.

Expansion tests: **10 passed, 0 failed**. Typecheck: passed. Existing suite in the current working tree: 72/74 passed; two loader/retrieval tests fail because of the pre-existing wrong dataset variant. The identical suite in an isolated copy with the verified historical distractor dataset: **74/74 passed**. Original pilot tests on current rag-hybrid: 12/13 passed; its branch-specific dry-run test rejects rag-hybrid as designed. No branch guard was weakened. See validation.json and validation/*.tap for exact evidence.

Checks include 200 unique eligible IDs per strategy/condition; shared benchmark inputs; all 560 complete wire replays; exact original score equality; unchanged original 20/60; deterministic fixtures; no duplicate logical requests; no reference labels in model inputs; crash and uncertain-billing blocks; partial summarization resume; exclusive writes; HTTP error receipt replay; manifest/fixture approval gates; and the original paired noise comparison. combined-existing.json shows current coverage without implying the missing live results exist.

## Commands for later live execution — not executed

Run from the repository root only after explicit user approval of both the request plan and the complete fixture review. The manifest digest pins the entire implementation, dataset, evidence and request plan; the fixture digest pins all 200 fixtures. The runner reads credentials from .env without printing them.

```sh
# Read-only progress / preflight
node experiments/expansion/execute.ts --status

# Five strategies: 500 new results, 1,100 model requests
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group benchmark --approved-manifest 516a9e2a00c84427edf5221b8a272642037e78b9184ffb9c2619e8634a513710 --reviewed-fixtures 4dd896afffcae551218990f989df9ea8b9d880604fc0e33582a46cd3a4edd440

# Clean / irrelevant / conflicting: 540 new results and model requests
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group noise --approved-manifest 516a9e2a00c84427edf5221b8a272642037e78b9184ffb9c2619e8634a513710 --reviewed-fixtures 4dd896afffcae551218990f989df9ea8b9d880604fc0e33582a46cd3a4edd440

# Or run both groups sequentially with one command (do not also start either command concurrently)
node --env-file-if-exists=.env experiments/expansion/execute.ts --live --group all --approved-manifest 516a9e2a00c84427edf5221b8a272642037e78b9184ffb9c2619e8634a513710 --reviewed-fixtures 4dd896afffcae551218990f989df9ea8b9d880604fc0e33582a46cd3a4edd440
```

Repeat the identical chosen live command to resume. Completed logical tasks are skipped; completed model-stage receipts replay locally. Any saved failure/uncertain intent stops execution and requires manual provider reconciliation; there is no automatic override. Do not delete checkpoints to force a resend. A stale lock requires verifying the old process has stopped and preserving/reconciling its evidence before manual removal. Progress is printed after each logical task; --status reports request receipts, unknown billing and coverage. Fixed output: experiments/expansion/runtime/516a9e2a00c84427edf5221b8a272642037e78b9184ffb9c2619e8634a513710/, with requests/, results/ and combined.json. Historical evidence paths are never output targets.

## Safe integration into rag-hybrid — plan only

1. Preserve a backup and hashes of the existing untracked experiments/context-noise and reports directories, local dataset files and legacy CSV results. Keep .env excluded. Review this expansion and all 180 fixtures; keep paid execution approval separate from Git integration/push approval.
2. Remain on the current rag-hybrid branch. After integration approval, fetch origin/rag-hybrid again and inspect the diff. If it still changes only .gitignore, README and historical results, fast-forward the current branch with git merge --ff-only origin/rag-hybrid. If new implementation or dataset changes arrive, stop, re-audit compatibility and regenerate/review the plan. No force operations or broad staging.
3. Stage only experiments/expansion (runtime is excluded), plus the required existing, unchanged pilot dependency files under experiments/context-noise: pilot.ts, fixtures.json, answer.ts, run.ts, report.ts, create-fixtures.ts and irrelevant.ts. Review their ownership and diff first; include the existing pilot README, test and .gitignore as appropriate. Do not stage unrelated reports, data files, .env or historical CSV changes. The copied pilot evidence and complete origin snapshot are already under expansion/evidence for reproducibility.
4. Rerun offline preparation/tests/typecheck, review digests and commit the reviewed preparation on rag-hybrid. The two original loader tests still require the historical dataset variant; do not replace dataset files or edit Ashwin's loader/strategies as an incidental fix. A fresh checkout also needs the untracked original pilot result files restored from the byte-identical evidence snapshot to run its historical-file comparison test.
5. Only after paid execution approval, execute the pinned commands above. Archive the entire runtime journal, including intents, responses, failures, lock history and aggregate, to a new evidence path; use exclusive creation and verify hashes. Integrate derived results by manifest/source references rather than overwriting results/runs.jsonl or the original pilot run. Require all eight cells at 200 completed unique IDs before claiming completion.
6. Review the final result/evidence commit on rag-hybrid. Push only after a separate explicit authorization. No push, merge, branch switch or paid execution has been performed during this preparation.
