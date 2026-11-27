import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { ParquetFileReader } from './ParquetFileReader.ts';
import { logger } from './logger.ts';
import type { TrainData } from './schema.ts';

export const DATASET_FILE = 'data/validation-00000-of-00001.parquet';
const DATASET = new URL('../' + DATASET_FILE, import.meta.url);

/** Validate the selected cases and keep reference answers out of model inputs. */
export function prepareData(rows: TrainData[]) {
  const ids = new Set<string>();

  for (const row of rows) {
    if (!row.id || ids.has(row.id)) {
      throw new Error(`Missing or duplicate question ID: ${row.id}`);
    }

    ids.add(row.id);

    if (
      !row.question?.trim() ||
      !row.answer?.trim() ||
      !row.context?.title.length ||
      row.context.title.length !== row.context.sentences.length
    ) {
      throw new Error(`Missing question, answer, or context for ${row.id}.`);
    }

    const facts = row.supporting_facts;

    if (!facts?.title.length || facts.title.length !== facts.sent_id.length) {
      throw new Error(`Missing supporting facts for ${row.id}.`);
    }

    for (let i = 0; i < facts.title.length; i++) {
      const passageIndex = row.context.title.indexOf(facts.title[i]);
      const sentenceIndex = facts.sent_id[i];

      if (
        !Number.isSafeInteger(sentenceIndex) ||
        sentenceIndex < 0 ||
        !row.context.sentences[passageIndex]?.[sentenceIndex]?.trim()
      ) {
        throw new Error(`Invalid supporting sentence for ${row.id}: ${facts.title[i]} [${sentenceIndex}].`);
      }
    }
  }

  return {
    questions: rows.map(({ id, question, context }) => ({
      id,
      question,
      context,
    })),

    answerKey: rows.map(({ id, answer, supporting_facts }) => ({
      id,
      answer,
      supporting_facts,
    })),
  };
}

/** Load consecutive rows in file order. start is zero-based. */
export async function loadData(count = 10, start = 0) {
  if (
    !Number.isSafeInteger(count) ||
    count <= 0 ||
    !Number.isSafeInteger(start) ||
    start < 0
  ) {
    throw new RangeError('count must be a positive integer and start must be a non-negative integer.');
  }

  logger.info({ count, start }, 'Loading HotpotQA questions.');

  const reader = new ParquetFileReader({ filePath: fileURLToPath(DATASET) });
  const rows = await reader.read(start + count);
  const selectedRows = rows.slice(start);

  if (selectedRows.length !== count) {
    throw new Error(`Requested ${count} rows starting at ${start}; found ${selectedRows.length}.`);
  }

  const prepared = prepareData(selectedRows);

  logger.info({ count: prepared.questions.length, start }, 'Loaded HotpotQA questions.');

  return prepared;
}

if (import.meta.main) {
  try {
    if (process.argv.length > 2) {
      throw new Error('This command takes no flags. Use loadData(count, start) to choose another batch.');
    }

    const { questions, answerKey } = await loadData();
    const output = new URL('../data/prepared/', import.meta.url);

    await mkdir(output, { recursive: true });

    await writeFile(
      new URL('questions.json', output),
      JSON.stringify(questions, null, 2) + '\n',
    );

    await writeFile(
      new URL('answer-key.json', output),
      JSON.stringify(answerKey, null, 2) + '\n',
    );

    logger.info({
      questionCount: questions.length,
      directory: 'data/prepared',
    }, 'Saved prepared questions and answer key.');
  } catch (cause) {
    logger.error({
      error: cause instanceof Error ? cause.message : 'Unknown error',
    }, 'Could not prepare the data.');

    process.exitCode = 1;
  }
}
