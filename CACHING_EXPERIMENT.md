# Larger-context caching experiment: offline preparation

This records the original offline preparation. No model or token-count API calls were made
during that preparation. Later approved exploratory calls reported cache activity and are
preserved in `results/caching-tests.csv`. The route's exact Flash-Lite minimum was not
established by those observations. Current order controls and schema are documented in
[FAIR_COMPARISON.md](./FAIR_COMPARISON.md).

## Fixed inputs and candidate collection

- Dataset: `data/train-00000-of-00002.parquet` only, through Ashwin's unchanged reader.
- Question ID: `5a7a06935542990198eaf050`.
- Model/provider: `google/gemini-2.5-flash-lite`, `google-ai-studio`.
- Settings: temperature 0, output limit 512, existing Final Answer response format.
- Candidate: original 10 passages followed by 20 additional unique-title passages.

`contextExpansion.ts` appends in dataset-record and passage order. It skips the target record
and existing titles, including conflicting versions. All originals remain first and unchanged.
Only donor titles/sentences are copied; donor questions and gold labels are ignored. It does
not retrieve, summarize, repeat filler, or change the question. Insufficient sources cause an error.

Donor records, in order:
1. `5a879ab05542996e4f30887e`
2. `5a8d7341554299441c6b9fe5`

Expanded source fingerprint:
`177950c9a80841064bab932a337dce0808987ca34a942baa38fe8974702831f1`

Expanded prompt fingerprint, excluding caching metadata:
`c41281d1d369b461788902e4f211a8372960ea0fe283f649c513ca46ad1d01b9`

The 20-passage increment is an exploratory candidate, **not a provider minimum**. Whether
expansion is necessary/sufficient remains unverified. Additional passages introduce distractors
and may affect answer quality. At the original offline preparation stage, no expanded prompt had been sent.

## Offline measurements

| Measurement | Original | Expanded candidate |
| --- | ---: | ---: |
| Passage count | 10 | 30 |
| Serialized source characters (JavaScript string length) | 5,449 | 20,057 |
| Serialized source UTF-8 bytes | 5,463 | 20,076 |
| System instructions + source characters | 6,162 | 20,770 |
| Context-only tokens | unavailable | unavailable |
| Cacheable-prefix tokens | unavailable | unavailable |

The previous live original prompt reported 1,488 input tokens **including instructions,
question, and provider formatting**. This is not a context-only or prefix measurement.
No model-matched offline tokenizer is installed. Text-size measurements are not token counts
or eligibility checks. The candidate prefix includes system instructions and the marked source
block; the question follows it. Provider normalization/framing can affect tokenization.

Sources checked October 30, 2026:
- [Google caching documentation](https://ai.google.dev/gemini-api/docs/generate-content/caching)
  does not establish a Flash-Lite minimum for this route.
- [OpenRouter caching documentation](https://openrouter.ai/docs/guides/best-practices/prompt-caching)
  describes Gemini block markers, but its named minimums do not establish Flash-Lite eligibility.
- [Google token counting](https://ai.google.dev/gemini-api/docs/tokens)
  describes provider counting and usage. No such request was made here.

The earlier one-call explicit-cache test returned HTTP 200 and zero cache reads/writes;
that does not establish activation or prefix eligibility. We still need the selected provider's
confirmed threshold and a reliable count of this exact prefix. A different model's threshold
or a larger character count cannot establish those facts.

## Separate CSV and future execution

`--output-file` selects an append destination; the current default is `results/results-v3.csv`.
`results/caching-tests.csv` was originally initialized with a 47-column header; later approved
exploratory results remain there unchanged. No mock attempts were saved. The v3 schema must
use a fresh destination; it cannot append to the historical caching-tests file.

`--additional-context-passages N` enables experimental expansion; default 0 preserves originals.
All selected methods receive the same expanded collection. Fingerprints identify the expanded
inputs. Evaluation still uses the target question's gold labels outside prompts. No shared
instructions, model settings, or scoring formulas changed.

Dry-run commands for the future 1+2 request schedule:

```sh
node experimentRunner.ts --round 1 --question-ids 5a7a06935542990198eaf050 --strategies full_context --repetitions 1 --additional-context-passages 20 --output-file results/results-v3.csv --dry-run
node experimentRunner.ts --round 1 --question-ids 5a7a06935542990198eaf050 --strategies caching --repetitions 2 --cache-mode explicit --additional-context-passages 20 --output-file results/results-v3.csv --dry-run
```

These commands reproduce the earlier exploratory 1+2 schedule. For the final comparison,
select both methods in one invocation with equal repetitions and multiple question IDs;
the runner alternates their order. Present the exact inputs and call budget for approval
before live execution. Inspect any failed result before continuing; never retry automatically.

Compare EM, answer F1, title citation F1, latency, input/output tokens, cache reads/writes,
cached-token fraction, and reported cost. Positive cache writes confirm writes; only positive
cache reads confirm hits. Missing metrics stay blank. Full Context can encounter automatic caching.

Offline checks:

```sh
node --test aiClient.test.ts strategies.test.ts experimentRunner.test.ts evaluation.test.ts resultsWriter.test.ts answerParser.test.ts contextExpansion.test.ts
./node_modules/.bin/tsc --noEmit --incremental false
```
