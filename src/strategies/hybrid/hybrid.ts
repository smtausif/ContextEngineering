import { performance } from 'node:perf_hooks';

import { logger } from '../../logger.ts';
import { createStrategyResult } from '../../results.ts';
import type { QuestionInput } from '../../schema.ts';
import type { ModelResult } from '../../usage.ts';
import { searchWithTools } from '../rag/searchWithTools.ts';
import { summarization } from '../summarization/summarization.ts';

/** Summarize only tool-retrieved passages, then answer through the existing summary strategy. */
export async function hybrid(question: QuestionInput) {
  const startedAt = new Date().toISOString();
  const started = performance.now();
  const search = await searchWithTools(question);
  const modelCalls: ModelResult[] = [...search.modelCalls];
  let result: Awaited<ReturnType<typeof summarization>> | null = null;
  let error = search.error;

  if (!error) {
    try {
      logger.info({ retrievedPassages: search.context.title.length }, 'Summarizing hybrid search results.');
      result = await summarization({ question: question.question, context: search.context });
      modelCalls.push(...result.modelCalls);
      error = result.error;
    } catch (cause) {
      error = cause instanceof Error ? cause.message : 'Hybrid strategy failed.';
      logger.error({ error }, 'Hybrid strategy failed.');
    }
  }

  return createStrategyResult(modelCalls, {
    startedAt,
    error,
    latencyMs: performance.now() - started,
    summary: result?.summary ?? null,
    toolCalls: search.toolCalls,
    selectedTitles: result?.selectedTitles ?? [],
    warnings: [...search.warnings, ...(result?.warnings ?? [])],
  });
}
