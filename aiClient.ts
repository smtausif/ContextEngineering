import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';
import { performance } from 'node:perf_hooks';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

/** Text blocks allow later strategies to mark explicit provider cache breakpoints. */
export type Prompt = string | Array<{
  type: 'text';
  text: string;
  cache_control?: { type: 'ephemeral'; ttl?: '5m' | '1h' };
}>;

export interface AIRequest {
  model: string;
  systemPrompt: Prompt;
  userPrompt: Prompt;
  temperature?: number;
  maxOutputTokens?: number;
  topP?: number;
  seed?: number;
  timeoutMs?: number;
  /** OpenRouter/provider fields such as provider, cache_control, or session_id.
   * Core request fields cannot be overridden here. Unsupported fields may be rejected by the API.
   */
  providerOptions?: Record<string, JsonValue>;
}

export interface AIResponse {
  answer: string;
  requestedModelId: string;
  modelId: string | null;
  /** OpenRouter generation ID, usable for later usage reconciliation. */
  requestId: string | null;
  provider: string | null;
  finishReason: string | null;
  /** Wall time through receiving and parsing the complete response; excludes context preparation. */
  responseTimeSeconds: number;
  promptTokens: number | null;
  completionTokens: number | null;
  totalTokens: number | null;
  cachedTokens: number | null;
  cacheWriteTokens: number | null;
  cacheHit: boolean | null;
  costUsd: number | null;
  costSource: 'reported' | 'missing';
  missingMetrics: string[];
}

export type AIErrorKind = 'configuration' | 'validation' | 'api' | 'rate_limit' |
  'timeout' | 'network' | 'invalid_response';

/** Safe to log: deliberately excludes API bodies, prompts, credentials, and raw fetch errors. */
export class AIClientError extends Error {
  readonly kind: AIErrorKind;
  readonly status: number | null;
  readonly retryAfterSeconds: number | null;
  readonly responseTimeSeconds: number | null;

  constructor(
    message: string,
    kind: AIErrorKind,
    status: number | null = null,
    retryAfterSeconds: number | null = null,
    responseTimeSeconds: number | null = null,
  ) {
    super(message);
    this.name = 'AIClientError';
    this.kind = kind;
    this.status = status;
    this.retryAfterSeconds = retryAfterSeconds;
    this.responseTimeSeconds = responseTimeSeconds;
  }
}

type ObjectValue = Record<string, unknown>;
function object(value: unknown): ObjectValue {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
    ? value as ObjectValue : {};
}
function stringOrNull(value: unknown): string | null {
  return typeof value === 'string' && value.length > 0 ? value : null;
}
function metric(value: unknown, integer = true): number | null {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0 &&
    (!integer || Number.isSafeInteger(value)) ? value : null;
}
function retryAfter(value: string | null): number | null {
  if (value === null || !value.trim()) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds) && seconds >= 0) return seconds;
  const date = Date.parse(value);
  return Number.isFinite(date) ? Math.max(0, (date - Date.now()) / 1000) : null;
}
function validatePrompt(prompt: Prompt): boolean {
  return typeof prompt === 'string' ? prompt.trim().length > 0 :
    Array.isArray(prompt) && prompt.length > 0 && prompt.every(block =>
      block?.type === 'text' && typeof block.text === 'string' && block.text.trim().length > 0 &&
      (block.cache_control === undefined || (block.cache_control.type === 'ephemeral' &&
        (block.cache_control.ttl === undefined || ['5m', '1h'].includes(block.cache_control.ttl)))));
}

/** No requests occur until complete() is called. No automatic retries are performed. */
export class AIClient {
  #apiKey: string;
  #fetch: typeof fetch;

  constructor(options: {
    /** Defaults to the repository .env; false disables file loading for offline tests. */
    envFile?: string | URL | false;
    /** Injectable transport for offline tests. Production uses Node's built-in fetch. */
    fetchImpl?: typeof fetch;
  } = {}) {
    const envFile = options.envFile ?? new URL('./.env', import.meta.url);
    if (envFile !== false && existsSync(envFile)) {
      try {
        loadEnvFile(envFile);
      } catch {
        throw new AIClientError('Could not load the environment file.', 'configuration');
      }
    }
    const key = process.env.OPENROUTER_API_KEY?.trim();
    if (!key) throw new AIClientError('Set OPENROUTER_API_KEY in .env or the environment.', 'configuration');
    this.#apiKey = key;
    this.#fetch = options.fetchImpl ?? fetch;
  }

  async complete(request: AIRequest): Promise<AIResponse> {
    const timeoutMs = request.timeoutMs ?? 120_000;
    if (typeof request.model !== 'string' || !request.model.trim() ||
      !validatePrompt(request.systemPrompt) || !validatePrompt(request.userPrompt) ||
      !Number.isSafeInteger(timeoutMs) || timeoutMs <= 0 || timeoutMs > 2_147_483_647 ||
      (request.temperature !== undefined && (!Number.isFinite(request.temperature) || request.temperature < 0 || request.temperature > 2)) ||
      (request.maxOutputTokens !== undefined && (!Number.isSafeInteger(request.maxOutputTokens) || request.maxOutputTokens <= 0)) ||
      (request.topP !== undefined && (!Number.isFinite(request.topP) || request.topP < 0 || request.topP > 1)) ||
      (request.seed !== undefined && !Number.isSafeInteger(request.seed))) {
      throw new AIClientError('Invalid model, prompts, model settings, or timeout.', 'validation');
    }
    const reserved = ['model', 'models', 'messages', 'stream', 'temperature', 'max_tokens',
      'max_completion_tokens', 'top_p', 'seed', 'n'];
    if (Object.keys(request.providerOptions ?? {}).some(key => reserved.includes(key))) {
      throw new AIClientError('providerOptions cannot override core request fields.', 'validation');
    }
    let body: string;
    try {
      body = JSON.stringify({
        ...request.providerOptions,
        model: request.model,
        messages: [
          { role: 'system', content: request.systemPrompt },
          { role: 'user', content: request.userPrompt },
        ],
        temperature: request.temperature,
        max_completion_tokens: request.maxOutputTokens,
        top_p: request.topP,
        seed: request.seed,
        stream: false,
      });
    } catch {
      throw new AIClientError('Request options must be JSON serializable.', 'validation');
    }
    const controller = new AbortController();
    const started = performance.now();
    const elapsed = () => (performance.now() - started) / 1000;
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await this.#fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.#apiKey}`,
          'Content-Type': 'application/json',
          // Response caching replays answers and would confound provider prompt-cache experiments.
          'X-OpenRouter-Cache': 'false',
        },
        body,
        signal: controller.signal,
        redirect: 'error',
      });
      if (!response.ok) {
        // Do not expose provider error bodies, which can echo secrets or prompt content.
        await response.body?.cancel();
        throw new AIClientError(`OpenRouter request failed (HTTP ${response.status}).`,
          response.status === 429 ? 'rate_limit' : response.status === 408 || response.status === 504 ? 'timeout' : 'api',
          response.status, retryAfter(response.headers.get('retry-after')), elapsed());
      }
      let data: ObjectValue;
      try {
        data = object(await response.json());
      } catch {
        if (controller.signal.aborted) throw new AIClientError('OpenRouter request timed out.', 'timeout', null, null, elapsed());
        throw new AIClientError('OpenRouter returned invalid JSON.', 'invalid_response', response.status, null, elapsed());
      }
      if (data.error !== undefined) {
        const code = metric(object(data.error).code);
        throw new AIClientError('OpenRouter returned an API error.', code === 429 ? 'rate_limit' : code === 408 || code === 504 ? 'timeout' : 'api',
          code, retryAfter(response.headers.get('retry-after')), elapsed());
      }
      const choice = object(Array.isArray(data.choices) ? data.choices[0] : undefined);
      const content = object(choice.message).content;
      if (typeof content !== 'string' || !content.trim() || choice.finish_reason === 'error') {
        throw new AIClientError('OpenRouter returned no usable text answer.', 'invalid_response', response.status, null, elapsed());
      }
      const usage = object(data.usage);
      const details = object(usage.prompt_tokens_details);
      const measurements = {
        promptTokens: metric(usage.prompt_tokens),
        completionTokens: metric(usage.completion_tokens),
        totalTokens: metric(usage.total_tokens),
        cachedTokens: metric(details.cached_tokens),
        cacheWriteTokens: metric(details.cache_write_tokens),
        costUsd: metric(usage.cost, false),
      };
      return {
        answer: content,
        requestedModelId: request.model,
        modelId: stringOrNull(data.model),
        requestId: stringOrNull(data.id),
        provider: stringOrNull(data.provider),
        finishReason: stringOrNull(choice.finish_reason),
        responseTimeSeconds: elapsed(),
        ...measurements,
        cacheHit: measurements.cachedTokens === null ? null : measurements.cachedTokens > 0,
        costSource: measurements.costUsd === null ? 'missing' : 'reported',
        missingMetrics: Object.entries(measurements).filter(([, value]) => value === null).map(([key]) => key),
      };
    } catch (error) {
      if (controller.signal.aborted) throw new AIClientError('OpenRouter request timed out.', 'timeout', null, null, elapsed());
      if (error instanceof AIClientError) throw error;
      throw new AIClientError('Could not reach OpenRouter.', 'network', null, null, elapsed());
    } finally {
      clearTimeout(timer);
    }
  }
}
