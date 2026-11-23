import { fullContext } from '../../src/strategies/full-context/fullContext.ts';
import { getModelSettings } from '../../src/callModel.ts';
import type { QuestionInput } from '../../src/schema.ts';
import { SETTINGS, requireValid } from './pilot.ts';

/** Experiment-only transport adapter: keep Ashwin's full-context strategy/client unchanged.
 * The CLI is sequential in its own process. Do not call this concurrently: fetch is scoped globally.
 * Only JSON payloads are captured; credentials/headers are never persisted.
 */
export async function answerWithControls(input: QuestionInput) {
  const settings = getModelSettings();
  requireValid(settings.model === SETTINGS.model && settings.provider === SETTINGS.provider, 'Model/provider must match pilot settings');
  const transport = globalThis.fetch;
  const payloads: Record<string, unknown>[] = [];
  globalThis.fetch = async (url, init) => {
    requireValid(String(url) === 'https://openrouter.ai/api/v1/chat/completions' && typeof init?.body === 'string', 'Unexpected model endpoint/payload');
    const payload = { ...JSON.parse(init.body), temperature: SETTINGS.temperature, max_tokens: SETTINGS.max_tokens };
    payloads.push(payload);
    return transport(url, { ...init, body: JSON.stringify(payload) });
  };
  try {
    const result = await fullContext(input);
    return { result, payloads };
  } finally { globalThis.fetch = transport; }
}
