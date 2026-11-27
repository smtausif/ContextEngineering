# Summarization

Turns source passages into shorter notes before asking the model to answer.

## Flow

Source passages → summary notes → validate source IDs → answer from notes + question.

`summarization.ts` makes **two model calls** per completed question:

1. Summarize only the passages, without the question or reference labels.
2. Answer using only the validated notes and the question.

Each note contains a numeric `source_id`, an original `sentence_id`, and text.
The code checks the IDs and restores the exact original title before answering.
The raw draft and resolved summary are saved with both calls and their usage.

## Run

From the project root:

```powershell
npm run ask:summarization -- --count 50 --start 10
```
