# Shared OpenRouter client

`aiClient.ts` uses Node's built-in `fetch` and environment-file loader; no new packages are needed.
Use the project's Node 24 environment. Put `OPENROUTER_API_KEY=your-key` in the repository's
`.env` file, which Git ignores. Existing environment variables take precedence. Never put
the real key in source code or terminal output. Constructing `AIClient` makes no requests;
calling `complete()` sends one potentially billable request. Obtain approval before live tests.

All five strategies can use the same `AIRequest` and `AIResponse` types. Each call accepts
`model`, `systemPrompt`, `userPrompt`, and optional `temperature`, `maxOutputTokens`, `topP`,
`seed`, and `timeoutMs` (default 120 seconds). It returns answer text, requested and returned
model IDs, generation/request ID, provider, finish reason, elapsed seconds, and usage metrics.
`finishReason: 'length'` indicates potentially truncated output. Citations embedded in the
answer are preserved as text. The shared strategy parser now extracts labeled Final Answer,
Explanation, and Citations fields; only Final Answer is scored by the runner. The complete
raw response is retained in structured results and the versioned CSV. See [STRATEGIES.md](./STRATEGIES.md).

Missing, malformed, or negative measurements are `null`; reported zero values remain zero.
`missingMetrics` lists unavailable measurements. `costUsd` comes only from the reported
`usage.cost`, and `costSource` is `reported` or `missing`. No estimated costs or derived token
totals are substituted. Cache writes and cache reads are separate: `cacheHit` is true only
when reported `cachedTokens > 0`, false for a reported zero, and null when unreported.
An error or timeout does not establish that a request was free; reconcile uncertain charges
with OpenRouter before rerunning an experiment.

Prompts can be plain strings or text-block arrays with optional `cache_control` markers.
`providerOptions` forwards additional JSON request fields such as `provider`, `cache_control`,
and `session_id`, while protecting the core request fields. This is an extension point, not
a caching strategy: options must match the selected provider/model's capabilities. Use
`provider.require_parameters` and explicit routing later where needed for controlled comparisons.
No caching policy or model defaults are selected by this client.

`AIClientError` exposes `kind`, HTTP/API `status`, `retryAfterSeconds` where available, and
elapsed seconds. Errors cover configuration, validation, API failures, rate limits, network
failures, malformed responses, and timeouts through response-body reading. Error messages
exclude raw provider bodies and network errors to avoid leaking credentials or prompts.
There are no automatic retries; the future runner can record each attempt explicitly.
Failed responses may lack usable usage information. Response latency excludes context preparation.
For summarization/hybrid preparation, callers must record and aggregate each separate client call.

The client sends `X-OpenRouter-Cache: false` to disable OpenRouter's separate whole-response
cache, which could confound provider prompt-caching measurements. This does not disable
provider prompt caching. See [STRATEGIES.md](./STRATEGIES.md) for the Step 3 strategy
contract, equivalent prompts, repetitions, and model-specific limitations.

Offline verification (fake transport and fake credentials; no API requests):

```sh
node --test aiClient.test.ts
./node_modules/.bin/tsc --noEmit --incremental false
```

Protocol references:
- [OpenRouter usage accounting](https://openrouter.ai/docs/cookbook/administration/usage-accounting)
- [Prompt caching](https://openrouter.ai/docs/guides/best-practices/prompt-caching)
- [Errors and retry delays](https://openrouter.ai/docs/api_reference/errors-and-debugging)
