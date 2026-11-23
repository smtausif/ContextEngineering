# Semantically corrected expansion — revision 3

Final source-grounded semantic review: **PASS, 200 fixtures, zero unresolved blockers**, with six documented exact-match limitations. Same 200 NEW IDs/order across Full Context, RAG, Summarization, Hybrid, Prompt Caching, Clean, Irrelevant and Conflicting. No historical/pilot IDs are included. No live requests have run.

- [14 individually justified replacements](prepared/replacements.md); [all eight scoring decisions](prepared/scoring-limitations.md).
- [Full ordered IDs](prepared/selected-question-ids.txt); [questions and rows](prepared/selected-questions.md).
- [All 200 contexts/reviews](prepared/noise-review.md); [final decisions](prepared/semantic-review-decisions.json).
- [Validation, cost, approval hashes and live commands](prepared/review.md).

The scorer and Ashwin's five strategies are unchanged. All retained/new gold labels and supporting_facts remain original dataset values. The original 20-question/60-response pilot and historical evidence remain immutable and separate. Earlier rejected approval hashes are invalid.

Offline commands from repository root:

```sh
node experiments/expansion/prepare.ts
node --test experiments/expansion/expansion.test.ts
npm run typecheck
node experiments/expansion/verify-offline.ts
node experiments/expansion/execute.ts --status
```

prepare.ts verifies the static semantic policy against the archived reviewed baseline, original dataset and original scorer; it does not perform automatic semantic judging. Manual review decisions must be refreshed if approved inputs change. verify-offline.ts copies unchanged code/data to an isolated test fixture, denies network, and mocks only read-only Git metadata required by the original pilot tests. It does not change real repository branches or datasets.

Paid execution awaits explicit approval. Review prepared/review.md for exact commands. Runtime uses exclusive crash-safe intent/response receipts, no silent retries, a fixed global lock and manifest pin. Do not delete billing-uncertain checkpoints to force a resend. Runtime is ignored by Git and must be archived immutably before eventual integration.
