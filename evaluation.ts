/** Matches HotpotQA's official answer normalization (ASCII punctuation removal). */
export function normalizeAnswer(answer: string): string {
  return answer.toLowerCase()
    .replace(/[\u0021-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/g, '')
    .replace(/\b(a|an|the)\b/g, ' ').replace(/\s+/g, ' ').trim();
}

export interface AnswerEvaluation {
  answerCorrectness: 'Y' | 'N';
  exactMatch: 0 | 1;
  tokenF1: number;
}

export function evaluateAnswer(generated: string, expected: string): AnswerEvaluation {
  const prediction = normalizeAnswer(generated);
  const gold = normalizeAnswer(expected);
  const exactMatch = prediction === gold ? 1 : 0;
  const result: AnswerEvaluation = { answerCorrectness: exactMatch ? 'Y' : 'N', exactMatch, tokenF1: 0 };
  // HotpotQA forbids partial credit for mismatched yes/no/noanswer categories.
  const categories = new Set(['yes', 'no', 'noanswer']);
  if (prediction !== gold && (categories.has(prediction) || categories.has(gold))) return result;
  const predictedTokens = prediction ? prediction.split(' ') : [];
  const goldTokens = gold ? gold.split(' ') : [];
  const remaining = new Map<string, number>();
  for (const token of goldTokens) remaining.set(token, (remaining.get(token) ?? 0) + 1);
  let common = 0;
  for (const token of predictedTokens) {
    const count = remaining.get(token) ?? 0;
    if (count > 0) { common++; remaining.set(token, count - 1); }
  }
  if (common > 0) {
    const precision = common / predictedTokens.length;
    const recall = common / goldTokens.length;
    result.tokenF1 = 2 * precision * recall / (precision + recall);
  }
  return result;
}

export interface CitationEvaluation {
  citationPrecision: number;
  citationRecall: number;
  citationF1: number;
}

/** Exact, case-sensitive document-title set matching, NOT sentence-level supporting facts. */
export function evaluateCitations(citations: readonly string[], goldTitles: readonly string[]): CitationEvaluation {
  const predicted = new Set(citations);
  const gold = new Set(goldTitles);
  const common = [...predicted].filter(title => gold.has(title)).length;
  const citationPrecision = predicted.size ? common / predicted.size : 0;
  const citationRecall = gold.size ? common / gold.size : 0;
  const citationF1 = citationPrecision + citationRecall
    ? 2 * citationPrecision * citationRecall / (citationPrecision + citationRecall) : 0;
  return { citationPrecision, citationRecall, citationF1 };
}

/** Per-attempt fraction of prompt tokens read from cache, not a cross-request hit frequency. */
export function cacheHitRate(cachedTokens: number | null, promptTokens: number | null): number | null {
  if (cachedTokens === null || promptTokens === null || !Number.isSafeInteger(cachedTokens) ||
    !Number.isSafeInteger(promptTokens) || promptTokens <= 0 || cachedTokens < 0 || cachedTokens > promptTokens) return null;
  return cachedTokens / promptTokens;
}
