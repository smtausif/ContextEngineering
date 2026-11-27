import { callModel, getModelSettings } from '../../callModel.ts';
import { logger } from '../../logger.ts';
import { createStrategyResult } from '../../results.ts';
import { CacheModeSchema, type CacheMode, type QuestionInput } from '../../schema.ts';
import { buildFullContextPrompt } from '../full-context/fullContext.ts';

export type { CacheMode } from '../../schema.ts';

/** Ported from the group's cache strategy; it never silently changes model or mode. */
export async function caching(question: QuestionInput, mode: CacheMode = 'explicit') {
  if (!CacheModeSchema.safeParse(mode).success) {
    throw new TypeError('Choose explicit or implicit caching.');
  }

  const { model, provider } = getModelSettings();
  const explicitSupported = model === 'google/gemini-3.1-flash-lite' &&
    provider !== null && ['google-ai-studio', 'google-vertex'].includes(provider);

  if (mode === 'explicit' && !explicitSupported) {
    const reason = 'Explicit caching is configured for google/gemini-3.1-flash-lite with OPENROUTER_PROVIDER=google-ai-studio or google-vertex. Use implicit mode to observe automatic reuse with another configuration.';
    logger.warn({ model, provider, reason }, 'Caching configuration is unsupported.');

    return createStrategyResult([], {
      reason,
      cacheMode: mode,
      selectedTitles: [],
      warnings: [reason],
    });
  }

  const messages = buildFullContextPrompt(question);

  if (mode === 'explicit') {
    const source = messages[1];
    if (source.role !== 'user' || !Array.isArray(source.content) || source.content[0].type !== 'text') {
      throw new Error('Expected the shared source text block.');
    }

    // Only cache metadata changes; the instructions, passages, and question stay identical.
    const block = { ...source.content[0], cache_control: { type: 'ephemeral' as const } };
    source.content = [block];
  }

  logger.info({ mode, model }, 'Running context caching strategy.');
  const result = await callModel(messages);

  return createStrategyResult([result], {
    cacheMode: mode,
    selectedTitles: question.context.title,
    warnings: [mode === 'explicit'
      ? 'Cache breakpoint requested; provider acceptance and reported cache reads must be checked. Small prefixes may not qualify.'
      : 'Observational automatic-cache test with the same request as full context; no cache hit is guaranteed.'],
  });
}
