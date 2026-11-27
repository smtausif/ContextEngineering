# Revised expansion: one shared cohort of 200 NEW questions

The five-strategy benchmark and Clean/Irrelevant/Conflicting experiment now use the **exact same 200 previously untested question IDs, in the same order, from HotpotQA distractor validation**. None overlaps the historical 100 IDs. The original 20-question/60-response pilot is preserved separately and is excluded from new coverage.

- [All 200 ordered IDs](prepared/selected-question-ids.txt), [JSON IDs](prepared/selected-question-ids.json), and [questions with row numbers](prepared/selected-questions.md).
- [Request counts, costs, validation and integration plan](prepared/review.md).
- [All 200 fixture reviews](prepared/noise-review.md), [individual decisions](prepared/noise-review-decisions.json), and [curated relations](contradictions.tsv).
- [Selection/evidence audit](prepared/selection-audit.json), [missing requests](prepared/missing.json), [pilot preservation](prepared/pilot-preservation.json).

There are **0 historical results reused in the new cohort**, **1,600 missing logical results**, and **2,800 new model requests** on successful completion. Historical responses calibrate costs only. No paid execution has occurred.

Offline commands, from repository root:

```sh
node experiments/expansion/prepare.ts
node --test experiments/expansion/expansion.test.ts
npm run typecheck
node experiments/expansion/execute.ts --status
cat experiments/expansion/prepared/selected-question-ids.txt
```

Preparation denies network access and uses local response replay. Original implementations, prompt structure, model/provider and noise temperature/output limits are unchanged. Re-preparing pins source files, dataset, history, selection and fixtures. New history, mutated/reordered cohorts, old manifests, approval-hash mismatches and concurrent execution block the live runner.

The old mixed historical/new plan is archived under superseded/516a9e2a00c84427edf5221b8a272642037e78b9184ffb9c2619e8634a513710/. Its approval digests are invalid for this revision. Archived TypeScript copies have .ts.txt extensions so they are evidence rather than executable modules. Do not run archived commands.

Live commands are recorded only in prepared/review.md and await explicit user approval. Resume repeats the identical approved command. Completed stage receipts replay locally; unresolved intents or saved failures stop without retry. Fixed runtime: runtime/<manifestHash>/{requests,results,combined.json}. Global lock/manifest pin prevent concurrent or cross-manifest execution. Never delete an intent/failure to force a resend; reconcile potentially billed requests using provider evidence.

Original pilot source dependencies remain under experiments/context-noise/ and are fingerprinted. Historical origin JSONL and original pilot results/plan are preserved losslessly in evidence/. Pilot results are not added to the new aggregate. Runtime remains ignored by Git; archive all evidence and hashes before eventual integration.
