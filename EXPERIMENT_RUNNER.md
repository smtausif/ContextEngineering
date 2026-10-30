# Terminal experiment runner

`experimentRunner.ts` executes one model at a time against the agreed first training shard:
`data/train-00000-of-00002.parquet`. There is no alternate dataset argument or random sampling.
Ashwin's reader is used unchanged. Step 5 adds local answer/citation evaluation and automatic
CSV output without new packages or changes to prompts or models. The current v3 runner
alternates the comparison strategies across selected questions; see [FAIR_COMPARISON.md](./FAIR_COMPARISON.md).

## Start with a dry run

From the repository directory, using Node 24:

```sh
node experimentRunner.ts --round 1 --question-ids 5a7a06935542990198eaf050 --dry-run
```

This validates the selection and prints one JSON row per planned question/strategy/repetition.
It does not load credentials, construct an API client, execute strategies, or call an API.
Dry-run is also the default if neither `--dry-run` nor `--live` is given. Metrics remain
`null`, not zero. Known unsupported configurations are reported as `unsupported` even in dry runs.
Dry runs never initialize a results writer, create the results directory, or write CSV rows.

```sh
node experimentRunner.ts --help
```

Options:

| Option | Meaning |
| --- | --- |
| `--round 1` | Only `google/gemini-2.5-flash-lite` |
| `--round 2` | Only `openai/gpt-4.1-mini` |
| `--model MODEL_ID` | Select either supported ID directly, instead of `--round` |
| `--question-ids ID1,ID2` | Required explicit question IDs in the desired order |
| `--strategies full_context,caching` | Selected strategies; the comparison pair alternates by question position |
| `--repetitions 2` | Repetitions per question and strategy; default 1 |
| `--cache-mode explicit` | Default cache treatment; use `implicit` only for a deliberate automatic-cache study |
| `--temperature 0` | Shared temperature; default 0 |
| `--max-output-tokens 512` | Shared output limit; default 512 |
| `--timeout-ms 120000` | Shared request timeout; default 120000 |
| `--provider SLUG` | Shared provider override; defaults remain those documented in STRATEGIES.md |
| `--output-file PATH` | Optional new-schema append destination; default `results/results-v3.csv` |
| `--additional-context-passages N` | Experimental deterministic expansion from the same shard; default 0 |
| `--live` | Actually execute potentially billable model calls; do not use before paid-test approval |

For Round 2, reuse the **same question-ID list, order, settings, and source file**. Only the
model/round changes. There is no automatic transition from Round 1 to Round 2. Every row
contains a `selectionFingerprint` and `sourceFingerprint`, derived from the selected IDs,
question text, and original passages. Compare these hashes across rounds to confirm identical
inputs. They exclude model, strategy, and gold labels. Different question order changes the
selection hash. These hashes do not persist or enforce a selection across separate invocations;
keep and reuse the approved ID list. The dataset file is resolved relative to this module.

## Execution and results

Execution order is question, then the alternating strategy order, then repetition. Question
positions follow the supplied ID list: Full Context first on positions 1, 3, 5; Caching first
on positions 2, 4, 6. Equal repetitions stay adjacent within each strategy. Future methods'
slots retain their positions. All calls are sequential, with
no automatic retries, fallback model selection, or discarded warmup. The first API/strategy
failure yields a failed row and stops the run. Unsupported configurations yield one row for
each planned repetition and allow other selected strategies/questions to continue. Earlier
requests can affect subsequent cache state; results preserve that limitation as a warning.
Sequential execution alone does not guarantee that provider rate limits will not be reached.

`runExperiment(options, dependencies?)` is an async generator returning structured rows. It
loads the shard once, checks all requested IDs, and validates all selected source records before
creating a client. Missing/duplicate IDs and invalid configuration prevent the run from starting.
The current reader reads the complete shard to find arbitrary IDs. Dataset loading is outside
per-strategy preparation/API timings; it may use substantial memory for this shard.

Rows include question ID/text, expected answer, requested model, shared settings, strategy,
repetition, status, cache mode, generated answer/citations, preparation/API/total timings,
all token counts, cache reads/writes/hit, reported cost and its source, error details, and warnings.
`strategyResult` retains the full strategy response, including actual returned model/provider,
generation ID, raw output, parsing flags, and missing measurements. No costs are estimated.
Preparation/API timings that cannot be recovered after an error remain null. Failed requests
may still have costs; null does not mean free. Failed and unsupported rows are not answers
and receive null evaluation scores, rather than incorrect-answer zeros.

The CLI streams JSON rows to stdout. Every non-dry attempt, including failures and unsupported
treatments, is also appended to `results/results-v3.csv`, relative to the repository module,
or the destination supplied with `--output-file` (relative custom paths use the working directory).
The original `results/results.csv`, `results/results-v2.csv`, and `results/caching-tests.csv`
are preserved with their existing headers, rows, and scores. Older schemas are rejected
before model calls; choose a fresh output path for v3.
Exit code 1 indicates a failure, unsupported treatment, or CSV persistence error;
exit code 0 indicates a successful plan/execution. Data or
argument validation errors are written to stderr before any calls. Results contain expected
answers for later evaluation, but strategy inputs contain only ID, question, original context,
and model configuration. Gold supporting-fact labels are never passed to strategies. Expected
answer text may naturally occur in evidence passages, which is correct and not label leakage.

## Caching limitations

See [CACHING_EXPERIMENT.md](./CACHING_EXPERIMENT.md) for the separate larger-context
candidate, its offline validation, output path, and unresolved eligibility checks. Expansion
appends unique titles in shard order, preserves original passages first, and changes input
fingerprints. It is not a token-count estimator or automatic cache-minimum check.

Explicit caching for GPT-4.1-mini is unsupported in the existing implementation and makes
no call. Selecting `--cache-mode implicit` is an explicit opt-in to automatic-cache observation;
it does not produce a controlled caching-on versus caching-off experiment. Full Context is
never labeled guaranteed uncached. Reported zero cache reads remain zero; missing reads
remain null. See [STRATEGIES.md](./STRATEGIES.md) for provider minimums and live verification.

## Teammate integration

Register an existing implementation in `additionalStrategies`, using the shared `Strategy`
interface from `strategy.ts`. No RAG, Summarization, or Hybrid algorithm is implemented here.
Selecting an unregistered strategy is an error before execution. Built-in strategies cannot
be overwritten through this extension point.

```ts
const results = runExperiment(options, {
  additionalStrategies: {
    rag: { run: myRagStrategy, cacheMode: 'none_requested' },
  },
});
for await (const row of results) {
  // Each non-dry row has already been evaluated and appended to CSV before it is yielded.
}
```

The runner passes a fresh copy of the same original source collection and configuration to
each invocation. RAG and Hybrid must retrieve evidence themselves. Implementations must use
the supplied client/configuration and common citation instructions, preserve their individual
preparation calls/metrics, and return the selected question ID, strategy name, cache mode,
and resolved configuration. Optional `preflight(input)` must be pure/local and return a
limitation string or null. Dry runs call preflight only, never `run`.

Tests inject `loadDataset`, `createClient`, and an isolated `resultsWriter`; the production CLI does not expose dataset
replacement. Stop consuming the generator to prevent later calls. No client is constructed
until a supported live treatment actually needs one.

## Verification

```sh
node --test aiClient.test.ts strategies.test.ts experimentRunner.test.ts evaluation.test.ts resultsWriter.test.ts answerParser.test.ts contextExpansion.test.ts
./node_modules/.bin/tsc --noEmit --incremental false
```

Tests use mock responses; the terminal integration test reads only the agreed local shard
and uses dry-run. It skips if that file is absent. No test makes paid requests.

## Local evaluation

`evaluation.ts` follows [HotpotQA's reference answer evaluator](https://github.com/hotpotqa/hotpot/blob/master/hotpot_evaluate_v1.py):
lowercase, remove ASCII punctuation, remove the articles `a`, `an`, and `the`, then collapse
whitespace. Exact Match is 1 only for identical normalized answers; Answer Correctness is
Y only for EM=1. Token F1 uses multiset token overlap, so repeated words are counted correctly.
Mismatched `yes`, `no`, or `noanswer` categories receive zero F1, including a verbose response
against a gold yes/no answer. Unicode punctuation is retained to match the reference convention.
Normalized empty strings can match for EM but have zero token-overlap F1, as in the reference.
No model calls are used for evaluation. Existing raw output/parsing warnings remain available.

The shared response format is now `final-answer-v2`:

```text
Final Answer: Arthur's Magazine

Explanation: Arthur's Magazine began in 1844; First for Women began in 1989.

Citations: ["Arthur's Magazine", "First for Women"]
```

Only the extracted single-line Final Answer is passed to the unchanged evaluator.
`generatedAnswer` contains that value; `rawResponse` preserves the complete original AI text,
and `explanation` is kept separately. Missing, empty, duplicate, multiline, and placeholder
Final Answer fields are flagged. There is no fallback to prose or old JSON; correctness,
EM, and F1 remain null when extraction fails. Extraction failures are completed API attempts,
not network errors, and their usage/costs and independent citation scores remain recorded.
`answerExtractionStatus` and `citationExtractionStatus` distinguish valid, missing, and
malformed fields. `outputFormatValid` is retained in the nested strategy result.

Citation JSON arrays allow exact titles containing commas, quotes, or brackets. A malformed
or missing citation field is flagged and produces no inferred citations (zero citation F1
when gold titles exist). Missing explanation or malformed citations does not prevent scoring
a separately valid Final Answer. All methods must use the same shared prompt/parser. The
runner reparses raw output to ensure adapters cannot bypass Final Answer extraction.

Citation precision, recall, and F1 compare **unique exact, case-sensitive document titles**
against unique `supporting_facts.title` values. Multiple gold sentences in one document do
not increase that document's weight. Predicted titles are not answer-normalized: punctuation,
case, and articles remain part of the title identity. No citations scores zero when gold titles
exist; unavailable gold titles produce null scores. Empty gold sets use zero precision/recall/F1.
This is **title-level citation scoring, not HotpotQA sentence-level supporting-fact evaluation**;
sentence indices are not evaluated, and a correct title does not prove the answer is supported.
Gold titles and expected answers stay in separate evaluation records, never strategy inputs.

Per-attempt `cacheHitRate` is `cachedTokens / promptTokens`, a token fraction from 0 to 1.
It is null if either metric is missing, the prompt count is zero, or counts are inconsistent.
It is not the frequency of cache-hit requests across repetitions. Reported `cacheHit` remains
separate and the explicit/implicit distinction is unchanged.

## CSV format and persistence

`resultsWriter.ts` creates `results/results-v3.csv`, a UTF-8 CSV with a single header and CRLF record separators.
Existing rows are never overwritten. Quotes are doubled and comma/quote/newline fields are
quoted, so multiline answers and JSON citation arrays remain valid CSV. Null metrics become
empty cells; measured zeros remain `0`, and cache-hit booleans remain `true`/`false`.
Each attempt has its existing UUID run ID plus a UTC ISO completion timestamp and repetition.

CSV columns, in order:

```text
run_id, timestamp, question_id, question, expected_answer, model_id, strategy,
repetition, generated_answer, extracted_citations, answer_correctness, exact_match,
token_f1, citation_correctness_score, citation_precision, citation_recall,
context_preparation_ms, api_latency_ms, total_elapsed_ms, prompt_tokens,
completion_tokens, total_tokens, cached_tokens, cache_hit_rate, reported_cost_usd,
context_fingerprint, caching_mode, error_details, status, unsupported_reason,
selection_fingerprint, cost_source, cache_hit, cache_write_tokens, dataset_file,
temperature, max_output_tokens, provider, request_id, returned_model_id,
raw_response, explanation, answer_extraction_status, citation_extraction_status,
output_format_valid, response_format_version, prompt_fingerprint,
results_schema_version, question_index, strategy_order, strategy_position,
attempt_sequence_number, request_sequence_number, request_started_at,
request_phase, question_request_phase, cache_policy, cache_read_tokens, cache_read_fraction,
shared_prompt_fingerprint, completion_calls, attempt_reported_cost_usd,
cumulative_reported_cost_usd, cumulative_known_cost_usd, cumulative_missing_cost_calls
```

The current 65-column schema is `fair-order-v3`; the response format remains `final-answer-v2`.
It adds execution-order, first/repeated, cache-read, and complete-call cost measurements.
The default output path is versioned instead of rewriting historical CSVs. Historical data is neither appended to nor
rescored by this update. A new file is created only by a non-dry run; tests use temporary files.
`raw_response` retains the entire AI response, including formatting/newlines, subject to the
existing credential redaction. `generated_answer` contains only the extracted Final Answer,
or an empty cell if extraction failed. `response_format_version` is `final-answer-v2` and
`prompt_fingerprint` identifies the updated instructions plus source/question text. Do not
pool the original experiment with the new prompt format as if their conditions were identical.

`citation_correctness_score` stores title F1. `context_fingerprint` is the original source
fingerprint, shared across strategies. Timings are converted from the existing seconds fields
to milliseconds; dataset loading, evaluation, and CSV I/O remain outside strategy elapsed time.
Error details are a JSON object; unsupported reasons are separate. Dry-run, failed, and
unsupported rows are never answer-scored. Unsupported non-dry rows are still saved to make
skipped experiment cells visible. There is no cost estimation or automatic request retry.

The writer initializes and validates its header before any model request. An incompatible
header or incomplete trailing row stops initialization without altering existing contents.
Appends are serialized within one Node process; run one terminal experiment process at a time.
Cross-process locking and crash-atomic writes are not provided. If a later append fails, the
runner yields the full scored result with `persistenceError` and stops before any further calls.
Inspect the file and preserve that structured result before recovery; do not blindly rerun a
potentially billed call. A disk failure can leave a partially appended record.

CSV serialization uses an explicit field allowlist and never serializes environment variables,
request prompts/headers, or arbitrary strategy metadata. Known sensitive environment values
and common API/Bearer token forms are redacted if echoed in selected output fields. Free-form
answers cannot be guaranteed free of an unknown secret that has no identifiable pattern;
never put credentials into dataset content or prompts. New output directories/files use
private permissions. Tests write only temporary CSV files or use in-memory sinks, keeping
mock results out of the real research CSV.
