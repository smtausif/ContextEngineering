# Prompt caching

Uses the same instructions, passages, question, and answer schema as full context.
Explicit mode adds an ephemeral cache marker to the source block.

## Flow

All passages + cache marker + question → structured answer → shared scoring and saved results.

`caching.ts` reuses `buildFullContextPrompt` and the shared model client.
A completed question uses **one model call**. Repeating a question lets us observe cache reuse.

## Run

Explicit mode is the default. The current code supports `google/gemini-3.1-flash-lite`
with `OPENROUTER_PROVIDER=google-ai-studio` or `google-vertex`.

From the project root:

```powershell
npm run ask:caching -- --count 50 --start 10 --repetitions 3
```

To observe automatic caching without adding a marker:

```powershell
npm run ask:caching -- --cache-mode implicit --count 5 --repetitions 3
```
