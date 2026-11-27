import type { callModel } from './callModel.ts';
import { MeasurementSchema, TokenCountSchema, UsageSchema, type Usage } from './schema.ts';

export type ModelResult = Awaited<ReturnType<typeof callModel>>;

export function measurement(value: unknown): number | null {
  const parsed = MeasurementSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}

export function tokenCount(value: unknown): number | null {
  const parsed = TokenCountSchema.safeParse(value);
  return parsed.success ? parsed.data : null;
}

export function sumMeasurements(values: unknown[]): number | null {
  const known = values.map(measurement);
  return known.length && known.every(value => value !== null)
    ? known.reduce((total, value) => total + value, 0) : null;
}

export function meanMeasurements(values: unknown[]): number | null {
  const total = sumMeasurements(values);
  return total === null ? null : total / values.length;
}

/** Current calls store usage directly; earlier tool calls stored it in rawResponse. */
export function getUsage(call: { usage?: unknown; rawResponse?: unknown }): Usage | null {
  const response = call.rawResponse;
  const rawUsage = response && typeof response === 'object' && 'usage' in response ? response.usage : null;
  const parsed = UsageSchema.safeParse(call.usage ?? rawUsage);
  return parsed.success ? parsed.data : null;
}

export function cacheMetrics(usage: Usage | null | undefined) {
  const prompt = tokenCount(usage?.prompt_tokens);
  const reads = tokenCount(usage?.prompt_tokens_details?.cached_tokens);
  const readTokens = reads !== null && (prompt === null || reads <= prompt) ? reads : null;

  return {
    readTokens,
    writeTokens: tokenCount(usage?.prompt_tokens_details?.cache_write_tokens),
    cacheHit: readTokens === null ? null : readTokens > 0,
    cacheReadFraction: readTokens !== null && prompt !== null && prompt > 0 ? readTokens / prompt : null,
  };
}

/** Include every call in billing totals; a missing measurement remains unknown. */
export function combineUsage(calls: ModelResult[]) {
  if (calls.length <= 1) {
    return calls[0]?.usage ?? null;
  }

  const usage = calls.map(getUsage);

  return {
    prompt_tokens: sumMeasurements(usage.map(item => item?.prompt_tokens)),
    completion_tokens: sumMeasurements(usage.map(item => item?.completion_tokens)),
    total_tokens: sumMeasurements(usage.map(item => item?.total_tokens)),
    cost: sumMeasurements(usage.map(item => item?.cost)),
    prompt_tokens_details: {
      cached_tokens: sumMeasurements(usage.map(item => item?.prompt_tokens_details?.cached_tokens)),
      cache_write_tokens: sumMeasurements(usage.map(item => item?.prompt_tokens_details?.cache_write_tokens)),
    },
    completion_tokens_details: {
      reasoning_tokens: sumMeasurements(usage.map(item => item?.completion_tokens_details?.reasoning_tokens)),
    },
  };
}
