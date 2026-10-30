import { performance } from 'node:perf_hooks';
import {
  executePrepared, prepareFullContext, resolveConfiguration,
  type CompletionClient, type StrategyInput, type StrategyResult,
} from './strategy.ts';

export interface CachingInput extends StrategyInput {
  /** Default explicit. Implicit mode is an opt-in observational repeat test, not an explicit-cache treatment. */
  cachingMode?: 'explicit' | 'implicit';
}

/** Pure preflight shared with the runner, including dry runs. */
export function cachingLimitation(input: CachingInput): string | null {
  const configuration = resolveConfiguration(input.configuration);
  const mode = input.cachingMode ?? 'explicit';
  if (mode !== 'explicit' && mode !== 'implicit') throw new TypeError('Invalid caching mode.');
  if (mode === 'explicit' && (configuration.model === 'openai/gpt-4.1-mini' ||
    !['google-ai-studio', 'google-vertex'].includes(configuration.provider))) {
    return configuration.model === 'openai/gpt-4.1-mini'
        ? 'GPT-4.1-mini supports automatic caching, not equivalent explicit cache breakpoints. Opt into implicit mode to study automatic reuse.'
        : 'Explicit caching has not been established for this provider. No provider substitution was made.';
  }
  return null;
}

/** Exactly one completion per invocation; unsupported explicit caching makes no API call. */
export async function caching(input: CachingInput, client: CompletionClient): Promise<StrategyResult> {
  const reason = cachingLimitation(input);
  const mode = input.cachingMode ?? 'explicit';
  if (reason) return { status: 'unsupported', strategy: 'caching', questionId: input.question.id,
    cacheMode: mode, response: null, reason };
  const started = performance.now();
  const prepared = prepareFullContext(input);
  if (mode === 'explicit') {
    if (!Array.isArray(prepared.request.userPrompt)) throw new Error('Expected shared text blocks.');
    // Metadata only: instructions, text, ordering, roles, and question remain identical.
    prepared.request.userPrompt[0].cache_control = { type: 'ephemeral' };
  }
  prepared.contextPreparationTimeSeconds = (performance.now() - started) / 1000;
  const result = await executePrepared(prepared, 'caching', mode, client, [
    mode === 'explicit'
      ? 'Explicit Gemini cache breakpoint requested; provider acceptance and minimum prefix size must be verified live. No padding is added.'
      : 'Observational automatic-cache test: request content and options match Full Context; caching cannot be independently switched on/off.',
  ]);
  if (result.response.cachedTokens === null) result.warnings.push('Cache reads were not reported; cache use is unknown.');
  else if (result.response.cachedTokens === 0) result.warnings.push('Zero cached tokens reported; no cache hit was observed.');
  return result;
}

/** Pull-based sequential repetitions. No hidden warmup, concurrency, retries, or discarded costs.
 * Each next() can make one paid call; breaking the loop prevents further calls.
 * Errors propagate immediately, leaving already-yielded measurements available to the caller.
 */
export async function* repeatCaching(
  input: CachingInput, client: CompletionClient, repetitions: number,
): AsyncGenerator<StrategyResult & { repetition: number }> {
  if (!Number.isSafeInteger(repetitions) || repetitions <= 0) throw new RangeError('repetitions must be a positive safe integer.');
  // Snapshot source/config so caller edits between yields cannot change the treatment.
  const snapshot = structuredClone(input);
  for (let repetition = 1; repetition <= repetitions; repetition++) {
    const result = await caching(snapshot, client);
    yield { ...result, repetition };
    if (result.status === 'unsupported') return;
  }
}
