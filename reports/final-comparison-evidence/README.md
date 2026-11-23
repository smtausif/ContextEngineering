# Completed experiment evidence index

All original artifacts remain in place. No historical record was overwritten or moved. Paths below are repository relative; source-inventory.json records the SHA-256 and byte size of each pre-existing experiment, source and report file. result-index.json maps every evaluation to its request intents and raw response bodies.

| Evidence | Repository-relative location |
|---|---|
| Approved cohort, model settings and code hashes | experiments/expansion/prepared/manifest.json |
| Exact inputs, references, order and expected call counts | experiments/expansion/prepared/tasks.json |
| All 200 question IDs | experiments/expansion/prepared/selected-question-ids.txt |
| Noise fixtures and complete semantic review | experiments/expansion/prepared/noise-review.md |
| Frozen semantic review decisions | experiments/expansion/prepared/semantic-review-decisions.json |
| Documented strict scoring limitations | experiments/expansion/prepared/scoring-limitations.md |
| Raw request intents and durable HTTP response bodies | experiments/expansion/runtime/fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110/requests/ |
| Immutable evaluation outputs, intermediate calls and scores | experiments/expansion/runtime/fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110/results/ |
| Original executor’s combined aggregation | experiments/expansion/runtime/fdda1f0b5ebe9c4c51f636443730d200ada3876f5de0e79e5c49bb5874df5110/combined.json |
| Historical benchmark evidence (excluded) | experiments/expansion/evidence/origin-f62ad872d665f298ab3590c594ceb6b298058843.jsonl.gz |
| Earlier historical CSV experiments (excluded) | results/ |
| Original 20-question / 60-response pilot (excluded) | experiments/context-noise/results/4a93b88d-81b4-45ff-9444-348852054b1f/runs.jsonl |
| Frozen copy of original pilot | experiments/expansion/evidence/noise-pilot-runs.jsonl |
| Prior superseded preparations (excluded) | experiments/expansion/superseded/ |
| Existing historical research report (excluded) | reports/context-engineering-complete-research-report.html |
| Reproducible saved-evidence auditor | scripts/final-comparison-report.mjs |

Generated exports are scoped exclusively to the approved revision-3 new-200 cohort. Prepared planning artifacts retain their pre-execution counts.

Reproduce in a fresh checkout/copy with output paths absent: `node scripts/final-comparison-report.mjs`. The generator refuses to overwrite reports and uses only saved evidence.
