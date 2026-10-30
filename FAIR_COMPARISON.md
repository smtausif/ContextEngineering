# Fair Full Context and Prompt Caching comparisons

The runner compares **Full Context with automatic provider caching allowed** against
**Full Context with explicit caching requested**. It never asserts that Full Context is
uncached. Alternating execution order reduces order bias but cannot eliminate shared-cache
carryover. First/repeated labels describe calls, not cold/warm cache states.

## Deterministic order and identical inputs

Question positions follow the exact order of `--question-ids`, independent of Parquet order.
Keep that list/order identical across model rounds. When both methods are selected:

| Question position | First strategy block | Second strategy block |
| --- | --- | --- |
| 1 | Full Context | Caching |
| 2 | Caching | Full Context |
| 3 | Full Context | Caching |

Repetitions remain adjacent within a block. With repetitions=2, question 1 runs F1, F2, C1,
C2; question 2 runs C1, C2, F1, F2. The same repetition count applies to every selected
method, with no discarded warmup or automatic retry. A failure stops the run. Unsupported
cells are recorded but make no completion call. If only one method is selected, its order
is unchanged. Future RAG/Summarization/Hybrid slots retain their supplied positions; only
the two comparison methods exchange slots.

The original dataset, question IDs, context expansion, model selection, shared instructions,
and evaluator are unchanged. Use `--additional-context-passages 20` to retain the existing
30-passage configuration for the agreed question. The default remains zero expansion.
Each method receives a fresh copy of the same expanded source collection and resolved
settings. Before Full Context/Caching dispatch, the runner verifies model, temperature,
output limit, and the hash of the actual instructions/context/question text. It also checks
the returned prompt fingerprint against the prepared shared fingerprint. Only cache metadata
differs. Future retrieval methods may construct different prompts from the same original
collection; their actual prompt hash can differ while the source fingerprint remains shared.

## Order and cache metadata

The existing response fields and metrics remain. New fields are:

| Field | Meaning |
| --- | --- |
| `question_index` | One-based selected-question position |
| `strategy_order`, `strategy_position` | Ordered method list for this question and this method's block position |
| `attempt_sequence_number` | All yielded cells, including dry/unsupported cells, in run order |
| `request_sequence_number` | First completion-call attempt in this cell; global within the run |
| `request_started_at` | UTC start timestamp of that first call; existing `timestamp` is completion time |
| `request_phase` | First/repeated call for this question and strategy within this run |
| `question_request_phase` | First/repeated call for this question across all strategies within this run |
| `cache_policy` | `automatic_allowed` or `explicit_requested` |
| `cache_read_tokens`, `cache_read_fraction` | Reported cached reads and reads/prompt tokens |
| `shared_prompt_fingerprint` | Hash of the common unfiltered prompt text, excluding cache metadata |
| `completion_calls` | Per-call sequence, timestamp, per-question/per-strategy call number, cache metrics, and reported cost |

Actual-request fields are null for dry or unsupported cells. They count invocations of the
shared completion client, not a guarantee that a network dispatch occurred (validation or
network errors can happen). Preparation calls from future strategies are included in the
call list. Labels reset per run, so a first call may reuse a cache left by a previous run.

Legacy `cached_tokens`, `cache_hit_rate`, and `caching_mode` columns remain for compatibility.
`cache_read_tokens` aliases `cached_tokens`; `cache_read_fraction` aliases the token fraction
previously called `cache_hit_rate`. A zero denominator or missing count produces null, not
zero. `cache_write_tokens` is independent. A write alone is not a cache hit; only reported
positive reads establish observed reuse. Unsupported modes are not silently substituted.

## Costs include first calls and cache creation

`reported_cost_usd` retains the final answer call's provider-reported cost.
`attempt_reported_cost_usd` sums every completion in this cell, including future preparation
calls. The provider's total cost already includes its reported cache creation charges; do
not add another estimate based on cache-write tokens. There is no exclusion for first calls.

`cumulative_reported_cost_usd` is the full running cost within this run if every call's cost
is available. A missing/failed-call cost makes that total null. The separate
`cumulative_known_cost_usd` is the known subtotal, and `cumulative_missing_cost_calls` states
how many costs are unavailable. A reported zero stays zero. Dry runs have no measured totals.
Unsupported cells have no individual request costs; cumulative values simply carry forward.

Use the last row's cumulative totals, or `summarizeExperimentCosts(rows)`, for a run total.
**Do not sum cumulative columns across rows.** The helper sums per-call reported costs and
returns a null total when any cost is missing. It never filters first requests, guesses
unknown costs, or treats unknown charges as free. Failed attempts retain any successful
preparation call measurements acquired before the failure.

## New schema and destinations

The 65-column schema is labeled `fair-order-v3`; its default destination is
`results/results-v3.csv`. `--output-file` remains configurable. No CSV is created by importing
the runner, requesting help, or using dry-run. This update does not create the new default
file or `results/final-results.csv`; only future non-dry execution creates output.

The previous `results.csv`, `results-v2.csv`, and `caching-tests.csv` remain unchanged. Their
older headers are incompatible with v3; initialization refuses them before any paid call
and never migrates or overwrites data. Choose a fresh destination for the new schema.

Example offline plan (first three IDs from the agreed shard, two repetitions each):

```sh
node experimentRunner.ts --round 1 --question-ids 5a7a06935542990198eaf050,5a879ab05542996e4f30887e,5a8d7341554299441c6b9fe5 --strategies full_context,caching --repetitions 2 --additional-context-passages 20 --output-file results/results-v3.csv --dry-run
```

Before final live experiments, freeze the approved ID list/order, context size, settings,
repetition count, provider, and new output destination. Obtain approval for the exact call
budget. Report setup/first calls and repeated calls separately alongside overall totals,
and distinguish cache reads from writes. Keep cache carryover as a limitation; this protocol
does not establish a cache-disabled baseline. GPT-4.1-mini explicit caching remains unsupported.
