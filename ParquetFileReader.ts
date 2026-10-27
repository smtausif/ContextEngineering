import { asyncBufferFromFile, parquetReadObjects } from "hyparquet";
import { compressors } from "hyparquet-compressors";
import type { TrainData } from "./schema.ts";

export class ParquetFileReader {
  private readonly filePath: string;

  constructor({ filePath }: { filePath: string }) {
    if (!filePath.trim()) {
      throw new Error("filePath must not be empty.");
    }
    this.filePath = filePath;
  }

  /** Read the first N rows on each call. optional itemCount to read all rows. */
  async read(itemCount?: number): Promise<TrainData[]> {
    if (itemCount !== undefined && (!Number.isSafeInteger(itemCount) || itemCount < 0)) {
      throw new RangeError("itemCount must be a non-negative safe integer.");
    }

    if (itemCount === 0) {
      return [];
    }

    const file = await asyncBufferFromFile(this.filePath);

    const rows = await parquetReadObjects({
      file,
      compressors,
      rowStart: 0,
      rowEnd: itemCount,
    });

    return rows as TrainData[];
  }
}
