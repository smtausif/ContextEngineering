import { logger } from "./logger.ts";
import { ParquetFileReader } from "./ParquetFileReader.ts";

async function testParquetFileReader() {
  const reader = new ParquetFileReader({filePath: "./data/train-00000-of-00002.parquet"})
  const data = await reader.read(10);
  logger.info({ itemCount: data.length }, "Read Parquet file.");
  logger.debug({ data }, "Parquet data.");
}

testParquetFileReader();
