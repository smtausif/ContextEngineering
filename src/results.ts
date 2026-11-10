import { getModelSettings } from './callModel.ts';
import { ScoresSchema, type CacheMode, type ContextSummary, type ResultStatus, type SavedResult } from './schema.ts';
import { combineUsage, type ModelResult } from './usage.ts';

export type ToolCallTrace = {
  id: string;
  query: string;
  selectedTitles: string[];
  retrievalMs: number;
};

type ResultDetails = {
  selectedTitles: string[];
  warnings: string[];
  startedAt?: string;
  latencyMs?: number;
  error?: string | null;
  summary?: ContextSummary | null;
  toolCalls?: ToolCallTrace[];
  cacheMode?: CacheMode | 'none_requested';
  reason?: string;
};

/** Every strategy returns the same fields while keeping each original model response. */
export function createStrategyResult(modelCalls: ModelResult[], details: ResultDetails) {
  const last = modelCalls.at(-1);
  const settings = getModelSettings();
  const error = details.error ?? last?.error ?? null;
  const reason = details.reason ?? null;
  const status: ResultStatus = reason ? 'unsupported' : error ? 'failed' : 'completed';

  return {
    status,
    reason,
    startedAt: details.startedAt ?? last?.startedAt ?? new Date().toISOString(),
    request: last?.request ?? null,
    model: last?.model ?? settings.model,
    provider: last?.provider ?? (reason ? settings.provider : null),
    message: last?.message ?? null,
    output: last?.output ?? null,
    summary: details.summary ?? null,
    error,
    latencyMs: details.latencyMs ?? last?.latencyMs ?? 0,
    usage: combineUsage(modelCalls),
    rawResponse: last?.rawResponse ?? null,
    modelCalls,
    toolCalls: details.toolCalls ?? [],
    selectedTitles: details.selectedTitles,
    cacheMode: details.cacheMode ?? 'none_requested',
    warnings: details.warnings,
  };
}

/** Resolve older saved layouts once, before summaries work with a consistent record. */
export function normalizeSavedResult(record: SavedResult) {
  const hasAnswer = record.output && typeof record.output === 'object' &&
    'answer' in record.output && typeof record.output.answer === 'string';
  const status = record.status ?? (record.error ? 'failed' : hasAnswer ? 'completed' : 'unknown');
  const scores = ScoresSchema.safeParse(record.scores);

  return {
    ...record,
    runId: record.runId ?? null,
    model: record.model ?? null,
    dataset: record.dataset ?? null,
    cacheMode: record.cacheMode ?? 'none_requested',
    status,
    scores: scores.success ? scores.data : null,
    modelCalls: record.modelCalls ?? (status === 'unsupported' ? [] : [{ usage: record.usage, rawResponse: record.rawResponse }]),
  };
}
