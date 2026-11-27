import { performance } from 'node:perf_hooks';

import OpenAI from 'openai';

import { logger } from './logger.ts';
import {
  SummaryDraftFormat, SummaryDraftSchema, ModelAnswerFormat, ModelAnswerSchema,
  type SummaryDraft, type ModelAnswer, type Usage,
} from './schema.ts';

type ChatResponse = Omit<OpenAI.Chat.Completions.ChatCompletion, 'usage'> & {
  usage?: Usage | null;
  provider?: string;
  error?: { message?: string };
};

/** Keep the environment settings shared with caching preflight checks. */
export function getModelSettings() {
  return {
    model: process.env.OPENROUTER_MODEL?.trim() || 'inception/mercury-2.5',
    provider: process.env.OPENROUTER_PROVIDER?.trim() || null,
  };
}

/** One model request. Tools are used only when explicitly supplied by the caller. */
export async function callModel(
  messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[],
  options: {
    tools?: OpenAI.Chat.Completions.ChatCompletionTool[];
    toolChoice?: 'required' | 'auto';
    response?: 'answer' | 'summary';
  } = {},
) {
  const { model, provider } = getModelSettings();
  const apiKey = process.env.OPENROUTER_API_KEY?.trim();

  if (!apiKey) {
    throw new Error('Set OPENROUTER_API_KEY in your local .env file before calling the model.');
  }

  const client = new OpenAI({
    apiKey,
    baseURL: 'https://openrouter.ai/api/v1',
    maxRetries: 0, // Keep one API attempt per recorded result.
    timeout: 60_000,
    // Measure provider prompt caching, rather than replaying entire cached answers.
    defaultHeaders: { 'X-OpenRouter-Cache': 'false' },
  });

  const request: OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming & {
    provider?: { only: string[]; allow_fallbacks: false; require_parameters: true };
  } = {
    model,
    messages,
  };

  if (options.tools?.length) {
    request.tools = options.tools;
    request.tool_choice = options.toolChoice ?? 'required';
  } else {
    request.response_format = options.response === 'summary' ? SummaryDraftFormat : ModelAnswerFormat;
  }

  // Optional routing applies to every strategy so cache comparisons use the same provider.
  if (provider) {
    request.provider = { only: [provider], allow_fallbacks: false, require_parameters: true };
  }

  logger.info({ model, toolsEnabled: Boolean(options.tools?.length) }, 'Calling model.');

  const startedAt = new Date().toISOString();
  const started = performance.now();

  // Preserve the raw response and usage even when answer validation fails.
  let rawResponse: ChatResponse | null = null;
  let errorResponse: unknown = null;
  let output: ModelAnswer | null = null;
  let summary: SummaryDraft | null = null;
  let error: string | null = null;

  try {
    rawResponse = await client.chat.completions.create(request);

    if (rawResponse.error) {
      throw new Error(`OpenRouter error: ${rawResponse.error.message ?? 'Unknown error'}`);
    }

    const choice = rawResponse.choices?.[0];

    if (options.tools?.length && choice?.finish_reason === 'tool_calls') {
      if (!choice.message?.tool_calls?.length) {
        throw new Error('The model returned no tool calls.');
      }
    } else {
      if (options.tools?.length && options.toolChoice !== 'auto') {
        throw new Error('A required tool was not called.');
      }

      if (choice?.finish_reason !== 'stop') {
        throw new Error(`Model did not finish normally (${choice?.finish_reason ?? 'missing completion'}).`);
      }

      if (choice.message?.refusal) {
        throw new Error('The model refused the request.');
      }

      if (typeof choice.message?.content !== 'string' || !choice.message.content.trim()) {
        throw new Error('The model returned no answer text.');
      }

      // Optional tool turns can return prose to signal that searching is complete.
      // Only a separate request without tools produces a validated final answer.
      if (!options.tools?.length) {
        const parsed = JSON.parse(choice.message.content);

        if (options.response === 'summary') {
          summary = SummaryDraftSchema.parse(parsed);
        } else {
          output = ModelAnswerSchema.parse(parsed);
        }
      }
    }
  } catch (cause) {
    error = cause instanceof Error ? cause.message : 'Model request failed.';

    if (cause instanceof OpenAI.APIError) {
      errorResponse = cause.error ?? null;

      if (cause.status) {
        error = `OpenRouter HTTP ${cause.status}: ${error}`;
      }
    }

    error = error.replaceAll(apiKey, '[redacted]');
  }

  const latencyMs = performance.now() - started;

  if (error) {
    logger.error({ model, latencyMs, error }, 'Model request failed.');
  } else {
    logger.info({ model, latencyMs, usage: rawResponse?.usage ?? null }, 'Model request completed.');
  }

  return {
    startedAt,
    request,
    model: rawResponse?.model ?? model,
    provider: rawResponse?.provider ?? null,
    message: rawResponse?.choices?.[0]?.message ?? null,
    output,
    summary,
    error,
    latencyMs,
    usage: rawResponse?.usage ?? null,
    rawResponse: rawResponse ?? errorResponse,
  };
}
