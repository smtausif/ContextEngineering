# Hybrid: RAG + summarization

Retrieves passages first, then summarizes only those passages before answering.

## Flow

Question → RAG search rounds → summarize retrieved passages → answer from notes.

`hybrid.ts` reuses the existing functions rather than maintaining another retriever
or summarizer:

1. `searchWithTools` performs the required search and allows one follow-up round.
2. `summarization` creates notes from the unique retrieved passages, then answers.

A completed question uses **four model calls**: two search-planning calls, one
summary call, and one answer call. All calls count toward saved cost and latency.
Summary source IDs refer to the retrieved passage order and map back to exact original titles.

## Run

From the project root:

```powershell
npm run ask:hybrid -- --count 50 --start 10
```