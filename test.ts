import { logger } from "./src/logger.ts";
import { ParquetFileReader } from "./src/ParquetFileReader.ts";

async function testParquetFileReader() {
  const reader = new ParquetFileReader({filePath: "./data/train-00000-of-00002.parquet"})
  const data = await reader.read(1);
  console.log(data);
}

testParquetFileReader();
