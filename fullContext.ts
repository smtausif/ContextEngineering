import { executePrepared, prepareFullContext, type Strategy } from './strategy.ts';

/** Send every passage. No explicit cache marker is requested; automatic caching may still occur. */
export const fullContext: Strategy = async (input, client) => executePrepared(
  prepareFullContext(input), 'full_context', 'none_requested', client,
  ['Automatic provider caching cannot be guaranteed off for these models; this is not a verified uncached baseline.'],
);
