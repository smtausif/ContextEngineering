# Original scoring preserved

Scorer SHA256: 1cc1efc69558a87002248157428dfd14fe3d44c4c8b45ec9a89c6a1c74ae6b43. src/evaluation.ts, normalization, exact match, token F1, citation scoring and reference handling are unchanged. No aliases, tolerance, semantic judge or post-hoc answer normalization have been added. Every retained/new question uses the original dataset gold and supporting_facts unchanged.

| Original question ID | Disposition | Source-correct alternative | Original gold | Exact match | Token F1 | Reason |
|---|---|---|---|---:|---:|---|
| 5a887bc0554299206df2b2b6 | replace | more than 230 | 230 | 0 | 0.500000 | Genuine unsupported exact-count gold; missing lower-bound semantics, not merely a synonymous phrasing. |
| 5ab2c5e255429916697740ba | retain | centre | Canadian professional ice hockey centre | 0 | 0.333333 | Gold is a correct source description containing the requested position. Extra nationality/profession words are a strict reference-span limitation. |
| 5ab47d765542991751b4d78f | retain | Michael Graves | architect Michael Graves | 0 | 0.800000 | Gold correctly names the architect; role prefix affects exact match but not factual correctness. |
| 5adf3e355542993a75d26440 | retain | nearly 8 km | 8 km | 0 | 0.800000 | 8 km is a conventional rounded approximation of nearly 8 km; qualifier-sensitive exact match is documented, with no change to gold or scoring. |
| 5a90580655429933b8a204ef | retain | 13–3 | a record of 13–3 | 0 | 0.500000 | The same win-loss record is expressed with a removable natural-language preamble in the reference. |
| 5a7cf29255429909bec768b8 | replace | over 150 million copies | 150 million copies | 0 | 0.857143 | Genuine unsupported exact total where evidence gives a strict lower bound; not a paraphrase-only removal. |
| 5a8038b55542996402f6a485 | retain | French | Lithuanian-born French | 0 | 0.666667 | Gold correctly describes the French actor with an origin qualifier; shorter nationality-only response may fail exact match. |
| 5ae2ee5e5542991a06ce990a | retain | Lord Dunmore | Royal Governor Lord Dunmore | 0 | 0.666667 | Gold correctly identifies Lord Dunmore and includes his role; name-only response may fail exact match. |

Two count labels were replaced because exact totals are unsupported by strict lower-bound evidence, rather than because of paraphrase matching. The other six questions remain. Their source-correct shorter/qualified answers can score exact-match zero under the original single-reference methodology. This known limitation must accompany interpretation of the results. No new model response was generated to produce these examples.
