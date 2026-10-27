import { existsSync } from 'node:fs';
import { loadEnvFile } from 'node:process';
import pino from 'pino';

// Load the env settings before choosing the log level.
const envFile = new URL('./.env', import.meta.url);
if (existsSync(envFile)) {
  loadEnvFile(envFile);
}

export const logger = pino(
  { level: process.env.LOG_LEVEL ?? 'info' },
  process.stderr
);
