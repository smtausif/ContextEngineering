import type { ModelAnswer, Scores, SupportingFact, TrainData } from './schema.ts';

/** HotpotQA normalization: lowercase, remove ASCII punctuation/articles, and collapse spaces. */
export function normalizeAnswer(answer: string): string {
  return answer.toLowerCase()
    .replace(/[\u0021-\u002f\u003a-\u0040\u005b-\u0060\u007b-\u007e]/g, '')
    // Python's reference evaluator treats Unicode letters and numbers as word characters.
    .replace(/(?<![\p{L}\p{N}_])(?:a|an|the)(?![\p{L}\p{N}_])/gu, ' ')
    .replace(/\s+/g, ' ').trim();
}

export type AnswerEvaluation = Pick<Scores, 'answerCorrectness' | 'exactMatch' | 'tokenF1'>;

/** Adapted from the group's evaluator, following HotpotQA's answer scoring rules. */
export function evaluateAnswer(generated: string, expected: string): AnswerEvaluation {
  const prediction = normalizeAnswer(generated);
  const gold = normalizeAnswer(expected);
  const exactMatch = prediction === gold ? 1 : 0;
  const result: AnswerEvaluation = {
    answerCorrectness: exactMatch ? 'Y' : 'N',
    exactMatch,
    tokenF1: 0,
  };

  // A mismatched yes/no/noanswer category receives no partial token credit.
  const categories = new Set(['yes', 'no', 'noanswer']);
  if (prediction !== gold && (categories.has(prediction) || categories.has(gold))) {
    return result;
  }

  const predictedTokens = prediction ? prediction.split(' ') : [];
  const goldTokens = gold ? gold.split(' ') : [];
  const remaining = new Map<string, number>();

  for (const token of goldTokens) {
    remaining.set(token, (remaining.get(token) ?? 0) + 1);
  }

  let common = 0;
  for (const token of predictedTokens) {
    const count = remaining.get(token) ?? 0;
    if (count > 0) {
      common++;
      remaining.set(token, count - 1);
    }
  }

  if (common > 0) {
    const precision = common / predictedTokens.length;
    const recall = common / goldTokens.length;
    result.tokenF1 = 2 * precision * recall / (precision + recall);
  }

  return result;
}

export type CitationEvaluation = Pick<Scores, 'citationPrecision' | 'citationRecall' | 'citationF1'>;

/** Compare exact title/sentence-ID pairs; citation titles are not answer-normalized. */
export function evaluateCitations(
  citations: ModelAnswer['supporting_facts'],
  expected: SupportingFact,
): CitationEvaluation {
  if (expected.title.length !== expected.sent_id.length) {
    throw new RangeError('Reference supporting-fact titles and sentence IDs must have matching lengths.');
  }

  // Sets prevent repeated copies of a citation from increasing its score.
  const predicted = new Set(citations.map(fact => JSON.stringify([fact.title, fact.sentence_id])));
  const gold = new Set(expected.title.map((title, i) => JSON.stringify([title, expected.sent_id[i]])));
  const common = [...predicted].filter(fact => gold.has(fact)).length;
  const citationPrecision = predicted.size ? common / predicted.size : 0;
  const citationRecall = gold.size ? common / gold.size : 0;
  const citationF1 = citationPrecision + citationRecall
    ? 2 * citationPrecision * citationRecall / (citationPrecision + citationRecall) : 0;

  return { citationPrecision, citationRecall, citationF1 };
}

/** Evaluate only the parsed final answer, with reference labels kept outside model calls. */
export function evaluateResult(
  output: ModelAnswer | null,
  reference: Pick<TrainData, 'answer' | 'supporting_facts'>,
): Scores | null {
  if (output === null) return null;

  return {
    ...evaluateAnswer(output.answer, reference.answer),
    ...evaluateCitations(output.supporting_facts, reference.supporting_facts),
  };
}
