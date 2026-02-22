/**
 * Logger utility for the podcast automation system
 */

import winston from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logDir = path.resolve(__dirname, '../../logs');

// Custom format for console output
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'HH:mm:ss' }),
  winston.format.colorize(),
  winston.format.printf(({ level, message, timestamp, filename, stage }) => {
    let prefix = '';
    if (stage) prefix += `[${stage}] `;
    if (filename) prefix += `(${filename}) `;
    return `${timestamp} ${level}: ${prefix}${message}`;
  })
);

// Custom format for file output
const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

// Create logger instance
export const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  defaultMeta: { service: 'ctd-podcast-automation' },
  transports: [
    // Console transport
    new winston.transports.Console({
      format: consoleFormat,
    }),
    // File transport for all logs
    new winston.transports.File({
      filename: path.join(logDir, 'combined.log'),
      format: fileFormat,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
    }),
    // File transport for errors only
    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error',
      format: fileFormat,
      maxsize: 5242880,
      maxFiles: 5,
    }),
  ],
});

// Helper methods for structured logging
export function logProcessingStart(filename: string): void {
  logger.info('Starting processing', { filename, stage: 'system' });
}

export function logProcessingComplete(filename: string, duration: number): void {
  logger.info(`Processing complete in ${duration}ms`, { filename, stage: 'system' });
}

export function logProcessingError(filename: string, stage: string, error: unknown): void {
  logger.error(`Processing failed at ${stage}`, {
    filename,
    stage,
    error: error instanceof Error ? error.message : String(error),
  });
}

export function logCaptionGeneration(filename: string, platform: string, attempt: number): void {
  logger.debug(`Generating ${platform} caption (attempt ${attempt})`, {
    filename,
    stage: 'caption_generation',
  });
}

export function logQualityCheck(filename: string, passed: boolean, issues: string[]): void {
  if (passed) {
    logger.info('Quality check passed', { filename, stage: 'quality_check' });
  } else {
    logger.warn('Quality check failed', { filename, stage: 'quality_check', issues });
  }
}
