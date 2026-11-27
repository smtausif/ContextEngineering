import type OpenAI from 'openai';

import { buildPrompt } from '../../buildPrompt.ts';
import { callModel } from '../../callModel.ts';
import { createStrategyResult } from '../../results.ts';
import type { QuestionInput } from '../../schema.ts';

/** Shared with caching: source text and block boundaries stay identical. */
export function buildFullContextPrompt(question: QuestionInput): OpenAI.Chat.Completions.ChatCompletionMessageParam[] {
  const [instructions, context, questionMessage] = buildPrompt(question);

  return [
    instructions,
    { role: 'user', content: [{ type: 'text', text: context.content }] },
    questionMessage,
  ];
}

export async function fullContext(question: QuestionInput) {
  const result = await callModel(buildFullContextPrompt(question));

  return createStrategyResult([result], {
    selectedTitles: question.context.title,
    warnings: ['Automatic provider caching may occur; full context is not a verified cache-disabled baseline.'],
  });
}
