import MiniSearch from 'minisearch';

import { loadData } from '../../loadData.ts';
import { logger } from '../../logger.ts';
import type { Context } from '../../schema.ts';

export const DEFAULT_TOP_K = 4;
export const TITLE_BOOST = 2;

/** Rank whole passages using their titles and text. Reference answers are never indexed. */
export function retrieveContext(question: string, context: Context, topK = DEFAULT_TOP_K): Context {
  if (!Number.isSafeInteger(topK) || topK <= 0) {
    throw new RangeError('topK must be a positive integer.');
  }

  const index = new MiniSearch({
    fields: ['title', 'text'],
    searchOptions: { boost: { title: TITLE_BOOST } },
  });

  index.addAll(context.title.map((title, id) => ({
    id,
    title,
    text: context.sentences[id].join(' '),
  })));

  const matches = index.search(question)
    .sort((a, b) => b.score - a.score || Number(a.id) - Number(b.id))
    .slice(0, topK);

  // Keep complete original sentence arrays so citation indices do not change.
  const selected = {
    title: matches.map(match => context.title[Number(match.id)]),
    sentences: matches.map(match => context.sentences[Number(match.id)]),
  };

  logger.info({
    availablePassages: context.title.length,
    selectedPassages: selected.title.length,
    topK,
  }, 'Retrieved context passages.');

  logger.debug({
    matches: matches.map(match => ({
      title: context.title[Number(match.id)],
      score: match.score,
    })),
  }, 'Ranked context passages.');

  return selected;
}

// Inspect retrieval without making a model request.
if (import.meta.main) {
  try {
    const { questions } = await loadData(1);
    const question = questions[0];
    const context = retrieveContext(question.question, question.context);

    console.log(JSON.stringify({
      questionId: question.id,
      question: question.question,
      availablePassages: question.context.title.length,
      selectedPassages: context.title.length,
      context,
    }, null, 2));
  } catch (cause) {
    logger.error({
      error: cause instanceof Error ? cause.message : 'Unknown error',
    }, 'Could not preview retrieved context.');

    process.exitCode = 1;
  }
}
