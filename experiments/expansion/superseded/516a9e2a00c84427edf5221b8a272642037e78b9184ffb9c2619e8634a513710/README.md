# Offline expansion preparation

Prepared 200 eligible HotpotQA questions for each original strategy and 200 questions for each noise condition. No paid execution has occurred. All new files are under experiments/expansion/. Existing strategies, pilot sources, original responses and dataset files are unchanged.

Read [prepared/review.md](prepared/review.md) for counts, cost, validation limitations and integration instructions. Read [prepared/noise-review.md](prepared/noise-review.md) for all 180 new fixtures, and [contradictions.tsv](contradictions.tsv) for manually curated relation/alternative choices.

Offline preparation and verification, from the repository root:

```sh
node experiments/expansion/prepare.ts
node --test experiments/expansion/expansion.test.ts
npm run typecheck
node experiments/expansion/execute.ts --status
```

Preparation installs a network-denying transport; saved-response replay is local. It never reads .env and uses only a temporary dummy key during replay. Re-preparing changes digests if inputs or implementation changed; review and approve the new manifest before execution.

Live commands are recorded only in prepared/review.md. Do not run them before explicit user approval. Repeat the same command to resume; completed responses replay locally. Unresolved intents, saved failures, mismatched files, concurrent execution and a different runtime manifest block execution. There is no retry/reset flag.

Runtime output is fixed at experiments/expansion/runtime/<manifestHash>/. The global lock and manifest pin are under runtime/. Every model stage has a SHA256-keyed intent and raw response receipt in requests/; each logical result is created once under results/. combined.json includes coverage, quality, the original noise paired comparison, historical provenance and new billing accounting. Runtime is ignored by Git: archive it as evidence before integration. Never delete an intent or failure to bypass reconciliation. A stale lock requires checking the process and archiving/reconciling the journal before manual lock removal. Unknown billing must be resolved with provider evidence, not a blind retry.

Original pilot source modules are dependencies and must accompany this directory when integrating: pilot.ts, fixtures.json, answer.ts, run.ts, report.ts, create-fixtures.ts and irrelevant.ts in experiments/context-noise/. Their fingerprints are pinned. The original pilot results are preserved losslessly in this directory's evidence/ even though their original results directory is ignored by Git.
