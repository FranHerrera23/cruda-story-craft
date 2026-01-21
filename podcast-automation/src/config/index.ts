/**
 * Configuration loader and validator
 */

import { config as dotenvConfig } from 'dotenv';
import { z } from 'zod';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Config } from '../types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env file from podcast-automation directory
dotenvConfig({ path: path.resolve(__dirname, '../../.env') });

// Environment variable schema
const envSchema = z.object({
  GOOGLE_APPLICATION_CREDENTIALS: z.string().min(1, 'Google credentials path required'),
  GOOGLE_DRIVE_CLIPS_FOLDER_ID: z.string().min(1, 'Google Drive clips folder ID required'),
  GOOGLE_DRIVE_ARCHIVE_FOLDER_ID: z.string().min(1, 'Google Drive archive folder ID required'),
  GOOGLE_SHEETS_ID: z.string().min(1, 'Google Sheets ID required'),
  GOOGLE_SHEETS_TAB_NAME: z.string().default('CTD Content Tracker'),
  ANTHROPIC_API_KEY: z.string().min(1, 'Anthropic API key required'),
  ANTHROPIC_MODEL: z.string().default('claude-sonnet-4-20250514'),
  TEMP_DIRECTORY: z.string().default('./temp'),
  LOG_LEVEL: z.enum(['debug', 'info', 'warn', 'error']).default('info'),
  ENABLE_NOTIFICATIONS: z.string().transform(v => v === 'true').default('false'),
  SLACK_WEBHOOK_URL: z.string().optional(),
  NOTIFICATION_EMAIL: z.string().optional(),
});

/**
 * Validate and load configuration from environment variables
 */
export function loadConfig(): Config {
  const result = envSchema.safeParse(process.env);

  if (!result.success) {
    const errors = result.error.errors.map(e => `  - ${e.path.join('.')}: ${e.message}`).join('\n');
    throw new Error(`Configuration validation failed:\n${errors}\n\nPlease check your .env file.`);
  }

  const env = result.data;

  return {
    google: {
      credentialsPath: path.resolve(__dirname, '../..', env.GOOGLE_APPLICATION_CREDENTIALS),
      drive: {
        clipsFolderId: env.GOOGLE_DRIVE_CLIPS_FOLDER_ID,
        archiveFolderId: env.GOOGLE_DRIVE_ARCHIVE_FOLDER_ID,
      },
      sheets: {
        spreadsheetId: env.GOOGLE_SHEETS_ID,
        tabName: env.GOOGLE_SHEETS_TAB_NAME,
      },
    },
    anthropic: {
      apiKey: env.ANTHROPIC_API_KEY,
      model: env.ANTHROPIC_MODEL,
    },
    processing: {
      tempDirectory: path.resolve(__dirname, '../..', env.TEMP_DIRECTORY),
      logLevel: env.LOG_LEVEL,
    },
    notifications: {
      enabled: env.ENABLE_NOTIFICATIONS,
      slackWebhook: env.SLACK_WEBHOOK_URL,
      email: env.NOTIFICATION_EMAIL,
    },
  };
}

/**
 * Check if configuration is valid without throwing
 */
export function isConfigValid(): { valid: boolean; errors: string[] } {
  const result = envSchema.safeParse(process.env);

  if (result.success) {
    return { valid: true, errors: [] };
  }

  return {
    valid: false,
    errors: result.error.errors.map(e => `${e.path.join('.')}: ${e.message}`),
  };
}

/**
 * Get configuration or null if invalid
 */
export function getConfigSafe(): Config | null {
  try {
    return loadConfig();
  } catch {
    return null;
  }
}
