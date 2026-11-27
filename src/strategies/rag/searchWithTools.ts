import { performance } from 'node:perf_hooks';

import type OpenAI from 'openai';

import { buildRagPrompt, formatContext } from '../../buildPrompt.ts';
import { callModel } from '../../callModel.ts';
import { logger } from '../../logger.ts';
import type { ToolCallTrace } from '../../results.ts';
import { SearchContextTool, SearchQuerySchema, type QuestionInput } from '../../schema.ts';
import type { ModelResult } from '../../usage.ts';
import { retrieveContext } from './retrieveContext.ts';

export const MAX_SEARCH_ROUNDS = 2;

/** Shared search phase. Preserve completed calls and partial retrieval if a later step fails. */
export async function searchWithTools(question: QuestionInput) {
  const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = buildRagPrompt(question.question);
  const modelCalls: ModelResult[] = [];
  const toolCalls: ToolCallTrace[] = [];
  let error: string | null = null;
  let searchRound = 0;

  try {
    for (let round = 1; round <= MAX_SEARCH_ROUNDS; round++) {
      searchRound = round;

      // Later tool results must not alter an earlier saved request.
      const result = await callModel([...messages], {
        tools: [SearchContextTool],
        toolChoice: round === 1 ? 'required' : 'auto',
      });
      modelCalls.push(result);

      if (result.error) throw new Error(result.error);
      if (!result.message?.tool_calls?.length) break;
      messages.push(result.message);

      for (const tool of result.message.tool_calls) {
        if (tool.type !== 'function') {
          throw new Error(`Unsupported tool type "${tool.type}"; expected "function".`);
        }

        const toolName = SearchContextTool.function.name;
        if (tool.function.name !== toolName) {
          throw new Error(`Unsupported tool "${tool.function.name}"; expected "${toolName}".`);
        }

        let query: string;
        try {
          query = SearchQuerySchema.parse(JSON.parse(tool.function.arguments)).query;
        } catch (cause) {
          throw new Error(`Invalid arguments for "${toolName}": ${cause instanceof Error ? cause.message : 'Invalid query.'}`);
        }

        const retrievalStarted = performance.now();
        const selected = retrieveContext(query, question.context);

        toolCalls.push({
          id: tool.id,
          query,
          selectedTitles: selected.title,
          retrievalMs: performance.now() - retrievalStarted,
        });

        messages.push({ role: 'tool', tool_call_id: tool.id, content: formatContext(selected) });
        logger.info({ round, tool: toolName, query, selectedPassages: selected.title.length }, 'Executed context search tool.');
      }
    }
  } catch (cause) {
    error = `Search round ${searchRound}: ${cause instanceof Error ? cause.message : 'Context search failed.'}`;
    logger.error({ round: searchRound, error }, 'Context search failed.');
  }

  // Both strategies use unique passages with their complete original sentence arrays.
  const titles = [...new Set(toolCalls.flatMap(call => call.selectedTitles))];
  const context = {
    title: titles,
    sentences: titles.map(title => question.context.sentences[question.context.title.indexOf(title)]),
  };

  return {
    context,
    modelCalls,
    toolCalls,
    error,
    warnings: ['Keyword retrieval can miss evidence needed for multi-hop answers.'],
  };
}
