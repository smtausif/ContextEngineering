# Full Context and Prompt Caching

Step 3 adds strategies only; the Step 4 terminal runner is documented in
[EXPERIMENT_RUNNER.md](./EXPERIMENT_RUNNER.md). There is no model call at module import,
CSV writer, or automatic warmup. Nothing makes network requests until a caller explicitly
invokes a strategy with a real `AIClient`. Paid testing still requires approval.

## Shared input and output

Types and shared prompt/result helpers are in `strategy.ts`.

- `StrategyInput.question`: `{ id, question, context }`, compatible with Ashwin's reader.
  `context.title[i]` labels `context.sentences[i]`. The complete `TrainData` record can be
  passed, but only these fields are read; gold `answer` and `supporting_facts` never enter
  the prompt. Gold answers may naturally appear in source passages, which is intended.
- `StrategyInput.configuration`: `model`, optional `temperature` (default 0),
  `maxOutputTokens` (512), `timeoutMs` (120000), and `provider`.
- `CompletionClient`: any object implementing `complete(AIRequest): Promise<AIResponse>`.
  The production `AIClient` already implements it; offline tests inject a fake client.
- `StrategyResult`: check `status` first. `completed` contains parsed `answer` (nullable),
  `explanation`, `citations`, answer/citation extraction status, `outputFormatValid`,
  `unknownCitationTitles`, model configuration, question ID, timings,
  warnings, and `response` with all raw client output and measurements. `unsupported`
  contains a reason and `response: null`, indicating no request was made.

Raw model text is always available unchanged as `result.response.answer`. All strategies
must use the shared `ANSWER_INSTRUCTIONS` and `parseAnswer`/`executePrepared` helpers:

```text
Final Answer: Arthur's Magazine

Explanation: Arthur's Magazine began in 1844; First for Women began in 1989.

Citations: ["Arthur's Magazine", "First for Women"]
```

The Final Answer is a short, nonempty single-line value following its label. Explanation is
stored separately. Citations are a JSON array of exact title strings, allowing commas and
quotes inside titles without ambiguous splitting. Empty citations use `[]`.

`parseAnswer` extracts each field independently; it does not use raw prose, explanations,
citations, or legacy JSON to guess a missing answer. Missing, empty, duplicate, multiline,
or unfilled-placeholder Final Answer fields yield `answer: null` and an explicit
`answerExtractionStatus` of `missing` or `malformed`. These responses retain their raw text,
latency, costs, and citations, but answer scores stay null. Citation extraction failures
produce an empty list plus an explicit status; a missing explanation affects full-format
validity but does not invalidate a separately well-formed Final Answer. Optional outer text
code fences and heading capitalization/spacing differences are accepted. Original text is
never rewritten. No extra repair request is made.

A title-existence check flags invented titles but does not establish factual support. The
runner applies the same local answer and citation evaluator to every method, using only
the extracted Final Answer for EM/F1. Existing HotpotQA normalization/formulas are unchanged.
New CSV rows retain the raw response and extraction statuses in `results/results-v3.csv`;
the original CSV and its historical scores are not altered or re-evaluated.

The runner alternates Full Context/Caching block order by selected-question position and
records actual call order, cache policy, first/repeated calls, and total reported costs.
See [FAIR_COMPARISON.md](./FAIR_COMPARISON.md) for the v3 protocol and schema.

`contextPreparationTimeSeconds` measures local validation/formatting/cache-marker setup.
`response.responseTimeSeconds` is the client's network-and-response-processing latency.
`totalResponseTimeSeconds` adds preparation and the measured execution/parsing interval.
Preparation makes no AI calls, so there are no preparation API charges in these two strategies.
Preserve reported costs, null measurements, errors, and every warmup/repetition when aggregating.

## Equivalent prompts

`fullContext(input, client)` sends **every sentence of every passage in the supplied
record**, including distractors, in original order. It does not send the entire training
shard. Sources are serialized losslessly as a JSON document array. The shared system
instructions are followed by two user text blocks: sources first, question second.

`caching(input, client)` defaults to explicit caching. For supported Google routes it
adds only `{ cache_control: { type: 'ephemeral' } }` to the source block. All text, message
roles, block boundaries, question wording, instructions, and model settings match Full Context.
`promptFingerprint` hashes the shared text (excluding cache metadata), so equivalent
strategy runs should have matching fingerprints. Configuration is recorded separately.
No padding, passage selection, summary, or truncation is introduced to trigger caching.

Default provider slugs are `google-ai-studio` for Gemini and `openai` for GPT-4.1-mini.
Both strategies restrict routing to the configured provider, disable fallbacks, require
parameter support, and disable context transforms. A rejected route fails rather than
switching source/model/provider settings. Provider availability must be checked before live use.
The shared client disables OpenRouter's separate response cache for every request.

## Model-specific caching and limitations

| Model | Explicit treatment | Minimum cacheable prefix |
| --- | --- | --- |
| `google/gemini-2.5-flash-lite` | Gemini block marker on `google-ai-studio` or `google-vertex`; acceptance remains to be tested | Google Cloud documents 2,048 tokens for Gemini 2-family caching. This is not confirmation for the AI Studio route. Its current published table omits Flash-Lite, so its route-specific minimum remains unverified. |
| `openai/gpt-4.1-mini` | Unsupported: returns `status: 'unsupported'` without a call | Automatic caching starts at 1,024 prompt tokens. An eligible, identical prefix is needed; request size alone does not prove a hit. |

Google Cloud's published family minimum is a planning reference, not a hardcoded eligibility
check. Current Google API and OpenRouter guidance differ and do not establish the exact
Flash-Lite minimum on every route. Verify prefix eligibility for the selected provider;
total prompt tokens include the question and cannot prove the marked prefix is large enough.
Do not infer token counts from character length or silently add text to meet a minimum.

OpenRouter documents Gemini markers and a five-minute explicit-cache lifetime with storage
charges. Repeated calls must happen while the cache exists. OpenRouter's OpenAI explicit
breakpoints are documented only for GPT-5.6 and newer, not GPT-4.1-mini.

An intentional automatic-cache study can use `cachingMode: 'implicit'` for either model.
This sends the same request as Full Context and is labeled observational in the result;
it is **not** an explicit caching experiment. Full Context requests no explicit marker,
but automatic provider caching may still occur. Neither model has a verified cache-off
baseline here. Do not label a Full Context run uncached without evidence. Even a reported
zero establishes no observed cache read, not that caching was disabled.

`cachedTokens`, `cacheWriteTokens`, and `cacheHit` come from the existing client, not from
request intent: reads greater than zero confirm a hit, zero is no observed hit, and null
means unknown. Cache writes do not establish a cache read. Requested cache markers are not
evidence of success. API failures propagate without silently retrying or switching modes.

## Repeated calls

`repeatCaching(input, client, repetitions)` is an async generator. It snapshots the input
and yields one result per sequential call, with a one-based `repetition`. The first call
may warm a cache, but is retained and billed normally. There are no hidden preparation
calls, retries, or sleep. Stop consuming the generator to stop issuing requests. An error
stops iteration immediately; save previously yielded results before requesting the next.
Unsupported combinations yield one unsupported result and stop. No aggregate total hides
missing costs or the individual calls.

Illustrative usage only (do not run with a real client before paid-test approval):

```ts
import { fullContext } from './fullContext.ts';
import { repeatCaching } from './caching.ts';
import type { CompletionClient, StrategyInput } from './strategy.ts';

async function compare(input: StrategyInput, client: CompletionClient) {
  const baseline = await fullContext(input, client);
  // Save/inspect baseline. Use the same frozen input and configuration below.
  for await (const result of repeatCaching(input, client, 2)) {
    // Save/inspect each result, including unsupported status and all costs.
  }
}
```

## Team integration and live-test checklist

Only select questions from `data/train-00000-of-00002.parquet`; use the same frozen IDs
and per-question source collections in every method/model. Strategies themselves do not
choose a shard or sample. No dataset reader changes are required.

Teammates can implement `Strategy` using the same input/output types. Retrieval and Hybrid
must receive the full source collection and retrieve for themselves; do not pass them gold
supporting passages. Keep shared answer/citation instructions and model settings. Their
preparation time must include retrieval/summarization; any preparation AI calls must retain
individual usage/costs for later aggregation. `prepareFullContext` is specifically for
unfiltered passages; future methods should not mislabel their prepared subsets as full context.

Before live experiments, verify model and provider availability, actual cache-read metrics,
minimum eligible prefix size, labeled output/citations, and both cold/warm behavior. Review
the automatic-cache baseline limitation before claiming a causal cached-vs-uncached result.
Use an approved fixed request count; never retry an uncertain failure without reconciling cost.

Offline checks (no live transport or real credentials):

```sh
node --test aiClient.test.ts strategies.test.ts experimentRunner.test.ts evaluation.test.ts resultsWriter.test.ts answerParser.test.ts
./node_modules/.bin/tsc --noEmit --incremental false
```

The strategy tests also inspect the first ten records of the agreed local shard when present;
they skip that one local-data test when the shard is absent. Fake transports test serialization
and measurement handling; they cannot establish provider acceptance or actual cache hits.

Sources checked October 30, 2026:
- [OpenRouter prompt caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching)
- [Google Cloud cache minimums](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/context-cache/context-cache-overview)
- [Google API caching table](https://ai.google.dev/gemini-api/docs/caching)
- [OpenRouter provider routing](https://openrouter.ai/docs/guides/routing/provider-selection)
- [OpenRouter response caching](https://openrouter.ai/docs/guides/features/response-caching)
