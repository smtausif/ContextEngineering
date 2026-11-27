import { fileURLToPath } from 'node:url';

import { logger } from '../src/logger.ts';
import { ParquetFileReader } from '../src/ParquetFileReader.ts';

const dataset = new URL('../data/train-00000-of-00002.parquet', import.meta.url);
const reader = new ParquetFileReader({ filePath: fileURLToPath(dataset) });
const data = await reader.read(10);

logger.info({ itemCount: data.length }, 'Read Parquet file.');
logger.debug({ data }, 'Parquet data.');
