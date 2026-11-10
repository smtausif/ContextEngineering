import { performance } from 'node:perf_hooks';

import { buildPrompt } from '../../buildPrompt.ts';
import { callModel } from '../../callModel.ts';
import { logger } from '../../logger.ts';
import { createStrategyResult } from '../../results.ts';
import type { ModelResult } from '../../usage.ts';
import type { QuestionInput } from '../../schema.ts';
import { searchWithTools } from './searchWithTools.ts';

export { MAX_SEARCH_ROUNDS } from './searchWithTools.ts';

/** Require an initial search, allow one follow-up round, then finish without tools. */
export async function callRag(question: QuestionInput) {
  const startedAt = new Date().toISOString();
  const started = performance.now();
  const search = await searchWithTools(question);
  const modelCalls: ModelResult[] = [...search.modelCalls];
  let error = search.error;

  if (!error) {
    try {
      // Use each original passage once; planning history remains in the saved search calls.
      logger.info({ searchQueries: search.toolCalls.length, uniquePassages: search.context.title.length }, 'Requesting structured RAG answer.');
      const answer = await callModel(buildPrompt({ question: question.question, context: search.context }));
      modelCalls.push(answer);
      error = answer.error ? `RAG answer: ${answer.error}` : null;
    } catch (cause) {
      error = `RAG answer: ${cause instanceof Error ? cause.message : 'Request failed.'}`;
      logger.error({ error }, 'Tool-based RAG failed.');
    }
  }

  return createStrategyResult(modelCalls, {
    startedAt,
    error,
    latencyMs: performance.now() - started,
    toolCalls: search.toolCalls,
    selectedTitles: search.context.title,
    warnings: search.warnings,
  });
}
