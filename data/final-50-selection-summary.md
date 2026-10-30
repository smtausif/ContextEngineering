# Frozen final 50-question HotpotQA selection

Dataset: `data/train-00000-of-00002.parquet` (45224 records). No other shard or split was used.
Dataset SHA-256: `76d3bb3048a7cc73c1958107c0c5872a00d7e7d00c105b81e92f6769e7822e68`.
Ordered-ID SHA-256: `e19ce8c1743a3498b3eefb214ce48875c05bc9cd120feb85079a2c7f91a34cba`.

## Reproducible method

Run `node selectFinalQuestions.ts` from the repository to reproduce/verify both artifacts.
The script reads Ashwin's existing Parquet reader without changing it. It creates files only
if absent, accepts identical existing contents, and refuses to overwrite different artifacts.

First validate every record, then apply fixed type/difficulty quotas. Within each stratum,
rank by ascending SHA-256 of seed + NUL + "select" + NUL + question ID; break ties by ID
using JavaScript code-unit comparison. Seed: `context-engineering-final-50-v1`.
The previously tested anchor `5a7a06935542990198eaf050` is valid and included at position 1.
If included, it consumes one slot in its stratum. Rank the other chosen IDs with the same
seed and the purpose string "order" instead of "select" to mix their final order.
No random state, model responses, latency, costs, or answer performance influence selection.

This is a deliberately balanced stratified sample: 30 bridge / 20 comparison, and
17 easy / 17 medium / 16 hard. It is not proportional to HotpotQA's population distribution.
Report results by type/difficulty alongside pooled results. The forced, previously tested
anchor makes one item familiar; identify it when describing final-sample limitations.

## Distribution and validation

| Type/difficulty | Available | Eligible | Selected |
| --- | ---: | ---: | ---: |
| bridge/easy | 7181 | 7178 | 10 |
| bridge/medium | 23065 | 23059 | 10 |
| bridge/hard | 6241 | 6239 | 10 |
| comparison/easy | 1805 | 1803 | 7 |
| comparison/medium | 5319 | 5319 | 7 |
| comparison/hard | 1613 | 1613 | 6 |
| Total | 45224 | 45211 | 50 |

Excluded records: 13.
Exclusion reason counts (one row may have multiple reasons): `{"supporting_sentence_out_of_range":10,"invalid_expected_answer":3}`.
Excluded IDs/reasons: `[{"questionId":"5a7b23ca554299042af8f703","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5adf75485542995ec70e901a","reasons":["invalid_expected_answer"]},{"questionId":"5ae0e0f85542990adbacf6a2","reasons":["invalid_expected_answer"]},{"questionId":"5abed6d45542990832d3a0ef","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5ab6b2fb5542995eadef0060","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5ae0e2df5542990adbacf6b1","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5ae6435455429929b0807b14","reasons":["invalid_expected_answer"]},{"questionId":"5a8d6138554299585d9e37c7","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5ab740165542992aa3b8c7fa","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5ab2f812554299545a2cfaee","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5ae7e8ef5542994a481bbe05","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5ab273ee5542997061209606","reasons":["supporting_sentence_out_of_range"]},{"questionId":"5a84517355429933447460d5","reasons":["supporting_sentence_out_of_range"]}]`.

All selected IDs are unique, positions are exactly 1–50, question text and expected answers
are nonempty, and answers remain nonempty after the existing HotpotQA normalization.
Context titles/sentence arrays are aligned, titles are unique, and all sentences are strings.
Every gold supporting title resolves to its corresponding source document; every sentence
index is a nonnegative safe integer in bounds and resolves to a nonempty sentence.
All 115 selected supporting references passed.

These are structural validity checks, not an independent semantic verification of every
HotpotQA annotation. Multi-hop answers need not appear verbatim in one evidence sentence.
The expected answers and supporting facts remain in the dataset for evaluation only;
neither is stored in the frozen manifest or passed to strategy inputs.

## Runner use without modifying the runner

The runner accepts `questionIds` / `--question-ids` in the supplied order. It has no
`--question-file` argument, so it does not directly open this manifest. The smallest adapter
is to map its entries to IDs (no runner source change required):

```ts
import { readFile } from 'node:fs/promises';
import { runExperiment } from './experimentRunner.ts';
const frozen = JSON.parse(await readFile('data/final-50-questions.json', 'utf8'));
const questionIds = frozen.questions.map((entry: { questionId: string }) => entry.questionId);
for await (const row of runExperiment({
  configuration: { model: 'google/gemini-2.5-flash-lite', temperature: 0, maxOutputTokens: 512 },
  questionIds, strategies: ['full_context', 'caching'], repetitions: 1,
  additionalContextPassages: 20, dryRun: true,
})) {
  console.log(JSON.stringify({ questionId: row.questionId, strategy: row.strategy, status: row.status }));
}
```

Use the same array and order in both model rounds and every method. This preserves the
runner's alternating Full Context/Caching order (25 questions each first). Keep the same
context-expansion option as well; `20` retains the expanded collection protocol. Model IDs
remain `google/gemini-2.5-flash-lite` and `openai/gpt-4.1-mini`.
RAG, Summarization, and Hybrid must be registered when implemented; they receive the same
original source collection and must not receive gold passages as retrieval inputs.
GPT-4.1-mini explicit caching remains unsupported; ID compatibility does not remove that limitation.

The manifest and this report are allowlisted in Git while Parquet files remain ignored.
No API calls, experiment-result writes, dataset modifications, commits, or pushes are part of selection.
