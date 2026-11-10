# Tool-based RAG

The model requests searches before answering. The source collection stays local
until the application returns matching passages through the search tool.

## Flow

Question → required search → optional follow-up search → answer from retrieved passages.

- `callRag.ts` runs the search-and-answer workflow.
- `searchWithTools.ts` allows an initial search and one follow-up round. Hybrid reuses it.
- `retrieveContext.ts` uses MiniSearch keyword retrieval, returning up to four matches per query.

The collection contains only that question's passages. Searches preserve original
titles, text, and sentence numbers. Repeated passages appear only once in the final
answer input. A completed question uses **three model calls**, including the turn
that decides whether a follow-up search is needed.

## Run

From the project root:

```powershell
npm run preview-rag
npm run ask:rag -- --count 50 --start 10
```

The preview makes no model request. The live command uses the shared final-answer
schema, scoring, and result saving. Its saved strategy name is `rag_tool`.
