import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, openSync, fsyncSync, closeSync, mkdirSync, existsSync, renameSync } from 'node:fs';
import { gunzipSync } from 'node:zlib';
import { resolve } from 'node:path';
import { fullContext } from '../../src/strategies/full-context/fullContext.ts';
import { callRag } from '../../src/strategies/rag/callRag.ts';
import { summarization } from '../../src/strategies/summarization/summarization.ts';
import { hybrid } from '../../src/strategies/hybrid/hybrid.ts';
import { caching } from '../../src/strategies/caching/caching.ts';
import { SETTINGS } from '../context-noise/pilot.ts';
import { evaluateResult } from '../../src/evaluation.ts';
import type { QuestionInput } from '../../src/schema.ts';

export const ROOT = resolve(import.meta.dirname);
export const STRATEGIES = ['full_context', 'rag_tool', 'summarization', 'hybrid', 'caching'] as const;
export const CONDITIONS = ['clean', 'irrelevant', 'conflicting'] as const;
export const canonical = (v: any): string => JSON.stringify(v === null || typeof v !== 'object' ? v : Array.isArray(v) ? v.map(x => JSON.parse(canonical(x))) : Object.fromEntries(Object.keys(v).sort().map(k => [k, JSON.parse(canonical(v[k]))])));
export const hash = (v: any) => createHash('sha256').update(canonical(v)).digest('hex');
export const fileHash = (p: string) => createHash('sha256').update(readFileSync(p)).digest('hex');
export const json = (p: string) => JSON.parse(readFileSync(p, 'utf8'));
export const lines = (p: string) => readFileSync(p, 'utf8').trim().split('\n').filter(Boolean).map(line => JSON.parse(line));
export function check(ok: any, message: string): asserts ok { if (!ok) throw new Error(message); }
export function writeJSON(p: string, value: any) { writeFileSync(p, JSON.stringify(value, null, 2) + '\n'); }
export function durableCreate(p: string, value: any) {
  const fd = openSync(p, 'wx', 0o600);
  try { writeFileSync(fd, JSON.stringify(value) + '\n'); fsyncSync(fd); } finally { closeSync(fd); }
  const dir = openSync(resolve(p, '..'), 'r'); try { fsyncSync(dir); } finally { closeSync(dir); }
}
export function atomicJSON(p: string, value: any) {
  const tmp = p + '.tmp-' + process.pid; writeFileSync(tmp, JSON.stringify(value, null, 2) + '\n');
  const fd = openSync(tmp, 'r'); try { fsyncSync(fd); } finally { closeSync(fd); } renameSync(tmp, p);
}
export function configure() {
  process.env.OPENROUTER_MODEL = SETTINGS.model; process.env.OPENROUTER_PROVIDER = SETTINGS.provider;
}
export async function strategy(name: string, input: QuestionInput) {
  switch (name) {
    case 'full_context': return fullContext(input);
    case 'rag_tool': return callRag(input);
    case 'summarization': return summarization(input);
    case 'hybrid': return hybrid(input);
    case 'caching': return caching(input, 'explicit');
    default: throw new Error('Unknown strategy');
  }
}
export function evidence() {
  const source = json(ROOT + '/evidence/source.json');
  return { source, origin: gunzipSync(readFileSync(ROOT + '/evidence/' + source.originResults)).toString('utf8').trim().split('\n').map(line => JSON.parse(line)),
    noise: lines(ROOT + '/evidence/noise-pilot-runs.jsonl'), pilotPlan: json(ROOT + '/evidence/noise-pilot-plan.json') };
}
// Exact wire replay through the unchanged strategies verifies prompts, schemas, tools,
// retrieved passages, summary source IDs and every intermediate request. Never network.
export async function replay(name: string, input: QuestionInput, record: any, noise = false) {
  const transport = globalThis.fetch; const key = process.env.OPENROUTER_API_KEY;
  const calls = noise ? record.requests.map((request: any) => ({ request })) : record.modelCalls;
  if (!calls?.length) return false;
  process.env.OPENROUTER_API_KEY = 'offline-replay-placeholder';
  let index = 0; let mismatch = false;
  globalThis.fetch = async (url, init) => {
    const payload = JSON.parse(String(init?.body));
    if (noise) Object.assign(payload, { temperature: SETTINGS.temperature, max_tokens: SETTINGS.max_tokens });
    const c = calls[index++];
    if (String(url) !== 'https://openrouter.ai/api/v1/chat/completions' || !c || hash(payload) !== hash(c.request)) {
      mismatch = true; throw new Error('Offline request mismatch');
    }
    const raw = noise ? { model: SETTINGS.model, provider: record.provider,
      choices: [{ finish_reason: 'stop', message: { role: 'assistant', content: JSON.stringify(record.output) } }], usage: record.usage } : c.rawResponse;
    if (!raw?.choices) { mismatch = true; throw new Error('Missing raw response'); }
    return new Response(JSON.stringify(raw), { status: 200, headers: { 'Content-Type': 'application/json' } });
  };
  try {
    const result = await strategy(name, input);
    return !mismatch && index === calls.length && result.status === 'completed' && hash(result.output) === hash(record.output);
  } finally { globalThis.fetch = transport; if (key === undefined) delete process.env.OPENROUTER_API_KEY; else process.env.OPENROUTER_API_KEY = key; }
}
export const scoreCompatible = (record: any, row: any) => hash(evaluateResult(record.output, row)) === hash(record.scores);
export const requestKey = (task: any, index: number, payload: any) => hash({ task: task.id, index, payload });

/** Write intent BEFORE transport. An unresolved/failed/partial request blocks replay;
 * completed raw HTTP responses replay without another bill, including invalid answers.
 * No retry or override exists. A single journal lock covers every experiment group.
 */
export class Journal {
  directory: string;
  constructor(directory: string) { this.directory = directory; mkdirSync(directory, { recursive: true }); }
  async request(task: any, index: number, payload: any, send: () => Promise<Response>) {
    const id = requestKey(task, index, payload), stem = this.directory + '/' + id;
    if (existsSync(stem + '.response.json')) {
      const saved = json(stem + '.response.json');
      check(saved.requestHash === hash(payload), 'Checkpoint request changed');
      return new Response(saved.body, { status: saved.status, headers: { 'Content-Type': 'application/json' } });
    }
    check(!existsSync(stem + '.intent.json'), `Unresolved potentially billed request ${id}; reconcile evidence manually. No retry.`);
    durableCreate(stem + '.intent.json', { id, taskId: task.id, questionId: task.questionId, group: task.group,
      requestIndex: index, request: payload, requestHash: hash(payload), startedAt: new Date().toISOString() });
    let response: Response; let body: string;
    try { response = await send(); body = await response.text(); }
    catch { durableCreate(stem + '.error.json', { id, error: 'Transport/body failed; billing unknown; no automatic retry.' }); throw new Error(`Uncertain billing: ${id}`); }
    // Response artifact is the commit point. Any crash before it leaves intent blocked.
    let usage = null; try { usage = JSON.parse(body).usage ?? null; } catch { /* raw evidence retained */ }
    durableCreate(stem + '.response.json', { id, requestHash: hash(payload), status: response.status, body, usage, receivedAt: new Date().toISOString() });
    return new Response(body, { status: response.status, headers: { 'Content-Type': 'application/json' } });
  }
}
