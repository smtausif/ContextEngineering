import type { Context } from './schema.ts';
import type { QuestionInput } from './strategy.ts';

export interface AddedPassage {
  donorQuestionId: string;
  donorContextIndex: number;
  title: string;
}

/** Deterministic experimental expansion, NOT retrieval: append in shard/paragraph order.
 * Original passages remain first and unchanged. Donor questions and gold labels are never used.
 * Count is a chosen experiment size, not a token count or a claimed caching threshold.
 */
export function expandContext(
  question: QuestionInput,
  shard: readonly QuestionInput[],
  additionalPassages: number,
): { context: Context; addedPassages: AddedPassage[] } {
  if (!Number.isSafeInteger(additionalPassages) || additionalPassages < 0) {
    throw new RangeError('Additional passage count must be a non-negative safe integer.');
  }
  const context = structuredClone(question.context);
  const addedPassages: AddedPassage[] = [];
  const seen = new Set(context.title);
  if (additionalPassages === 0) return { context, addedPassages };
  for (const donor of shard) {
    if (donor.id === question.id) continue;
    for (let i = 0; i < donor.context.title.length; i++) {
      const title = donor.context.title[i];
      const sentences = donor.context.sentences[i];
      // A title is a citation identifier; never add a conflicting/duplicate identifier.
      if (seen.has(title)) continue;
      if (typeof title !== 'string' || !title.trim() || !Array.isArray(sentences) ||
        sentences.some(sentence => typeof sentence !== 'string')) {
        throw new TypeError('Invalid donor passage in agreed shard.');
      }
      seen.add(title);
      context.title.push(title);
      context.sentences.push([...sentences]);
      addedPassages.push({ donorQuestionId: donor.id, donorContextIndex: i, title });
      if (addedPassages.length === additionalPassages) return { context, addedPassages };
    }
  }
  throw new RangeError('Agreed shard has too few additional unique passage titles.');
}
