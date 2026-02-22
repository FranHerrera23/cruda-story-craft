/**
 * Google Sheets Integration Service
 * Handles reading, writing, and updating the content tracker spreadsheet
 */

import { google } from 'googleapis';
import type { sheets_v4 } from 'googleapis';
import type { SheetRow, ContentStatus, Config } from '../types/index.js';
import { logger } from '../utils/logger.js';

// Column mapping (1-indexed for Sheets API)
const COLUMNS = {
  filename: 'A',
  episodeNumber: 'B',
  guest: 'C',
  topic: 'D',
  duration: 'E',
  platforms: 'F',
  captionIG: 'G',
  captionLI: 'H',
  captionYT: 'I',
  captionTK: 'J',
  status: 'K',
  postDate: 'L',
  notes: 'M',
  processedAt: 'N',
} as const;

const HEADER_ROW = 1;
const DATA_START_ROW = 2;

export class GoogleSheetsService {
  private sheets: sheets_v4.Sheets;
  private spreadsheetId: string;
  private tabName: string;

  constructor(config: Config) {
    this.spreadsheetId = config.google.sheets.spreadsheetId;
    this.tabName = config.google.sheets.tabName;

    // Initialize Google Sheets client
    const auth = new google.auth.GoogleAuth({
      keyFile: config.google.credentialsPath,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    this.sheets = google.sheets({ version: 'v4', auth });
  }

  /**
   * Initialize sheet with headers if empty
   */
  async initializeSheet(): Promise<void> {
    try {
      // Check if headers exist
      const response = await this.sheets.spreadsheets.values.get({
        spreadsheetId: this.spreadsheetId,
        range: `${this.tabName}!A1:N1`,
      });

      if (!response.data.values || response.data.values.length === 0) {
        // Add headers
        await this.sheets.spreadsheets.values.update({
          spreadsheetId: this.spreadsheetId,
          range: `${this.tabName}!A1:N1`,
          valueInputOption: 'RAW',
          requestBody: {
            values: [[
              'Filename',
              'Episode #',
              'Guest',
              'Topic/Hook',
              'Duration',
              'Platforms',
              'Caption_IG',
              'Caption_LI',
              'Caption_YT',
              'Caption_TK',
              'Status',
              'Post_Date',
              'Notes',
              'Processed_At',
            ]],
          },
        });

        logger.info('Initialized sheet with headers');
      }
    } catch (error) {
      logger.error('Failed to initialize sheet', error);
      throw error;
    }
  }

  /**
   * Check if a filename already exists in the sheet
   */
  async filenameExists(filename: string): Promise<{ exists: boolean; row: number | null }> {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: `${this.tabName}!A:A`,
    });

    const values = response.data.values || [];

    for (let i = 1; i < values.length; i++) {
      if (values[i]?.[0] === filename) {
        return { exists: true, row: i + 1 }; // +1 because sheets are 1-indexed
      }
    }

    return { exists: false, row: null };
  }

  /**
   * Add a new row to the sheet
   */
  async addRow(row: SheetRow): Promise<number> {
    // Find next empty row
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: `${this.tabName}!A:A`,
    });

    const nextRow = (response.data.values?.length || 1) + 1;

    // Add the row
    await this.sheets.spreadsheets.values.update({
      spreadsheetId: this.spreadsheetId,
      range: `${this.tabName}!A${nextRow}:N${nextRow}`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          row.filename,
          row.episodeNumber,
          row.guest,
          row.topic,
          row.duration,
          row.platforms,
          row.captionIG,
          row.captionLI,
          row.captionYT,
          row.captionTK,
          row.status,
          row.postDate,
          row.notes,
          row.processedAt,
        ]],
      },
    });

    logger.info(`Added row ${nextRow} for ${row.filename}`);
    return nextRow;
  }

  /**
   * Update an existing row
   */
  async updateRow(rowNumber: number, row: Partial<SheetRow>): Promise<void> {
    const updates: Array<{ range: string; values: string[][] }> = [];

    // Build update ranges for each field that's provided
    if (row.filename !== undefined) {
      updates.push({ range: `${this.tabName}!A${rowNumber}`, values: [[row.filename]] });
    }
    if (row.episodeNumber !== undefined) {
      updates.push({ range: `${this.tabName}!B${rowNumber}`, values: [[row.episodeNumber]] });
    }
    if (row.guest !== undefined) {
      updates.push({ range: `${this.tabName}!C${rowNumber}`, values: [[row.guest]] });
    }
    if (row.topic !== undefined) {
      updates.push({ range: `${this.tabName}!D${rowNumber}`, values: [[row.topic]] });
    }
    if (row.duration !== undefined) {
      updates.push({ range: `${this.tabName}!E${rowNumber}`, values: [[row.duration]] });
    }
    if (row.platforms !== undefined) {
      updates.push({ range: `${this.tabName}!F${rowNumber}`, values: [[row.platforms]] });
    }
    if (row.captionIG !== undefined) {
      updates.push({ range: `${this.tabName}!G${rowNumber}`, values: [[row.captionIG]] });
    }
    if (row.captionLI !== undefined) {
      updates.push({ range: `${this.tabName}!H${rowNumber}`, values: [[row.captionLI]] });
    }
    if (row.captionYT !== undefined) {
      updates.push({ range: `${this.tabName}!I${rowNumber}`, values: [[row.captionYT]] });
    }
    if (row.captionTK !== undefined) {
      updates.push({ range: `${this.tabName}!J${rowNumber}`, values: [[row.captionTK]] });
    }
    if (row.status !== undefined) {
      updates.push({ range: `${this.tabName}!K${rowNumber}`, values: [[row.status]] });
    }
    if (row.postDate !== undefined) {
      updates.push({ range: `${this.tabName}!L${rowNumber}`, values: [[row.postDate]] });
    }
    if (row.notes !== undefined) {
      updates.push({ range: `${this.tabName}!M${rowNumber}`, values: [[row.notes]] });
    }
    if (row.processedAt !== undefined) {
      updates.push({ range: `${this.tabName}!N${rowNumber}`, values: [[row.processedAt]] });
    }

    // Batch update
    if (updates.length > 0) {
      await this.sheets.spreadsheets.values.batchUpdate({
        spreadsheetId: this.spreadsheetId,
        requestBody: {
          valueInputOption: 'RAW',
          data: updates.map(u => ({
            range: u.range,
            values: u.values,
          })),
        },
      });

      logger.info(`Updated row ${rowNumber}`);
    }
  }

  /**
   * Update just the captions for a row
   */
  async updateCaptions(
    rowNumber: number,
    captions: {
      captionIG?: string;
      captionLI?: string;
      captionYT?: string;
      captionTK?: string;
    }
  ): Promise<void> {
    await this.updateRow(rowNumber, {
      ...captions,
      status: 'Draft',
      processedAt: new Date().toISOString(),
    });
  }

  /**
   * Update status for a row
   */
  async updateStatus(rowNumber: number, status: ContentStatus, notes?: string): Promise<void> {
    const update: Partial<SheetRow> = { status };
    if (notes) {
      update.notes = notes;
    }
    await this.updateRow(rowNumber, update);
  }

  /**
   * Get a row by row number
   */
  async getRow(rowNumber: number): Promise<SheetRow | null> {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: `${this.tabName}!A${rowNumber}:N${rowNumber}`,
    });

    const values = response.data.values?.[0];
    if (!values) return null;

    return {
      filename: values[0] || '',
      episodeNumber: values[1] || '',
      guest: values[2] || '',
      topic: values[3] || '',
      duration: values[4] || '',
      platforms: values[5] || '',
      captionIG: values[6] || '',
      captionLI: values[7] || '',
      captionYT: values[8] || '',
      captionTK: values[9] || '',
      status: (values[10] as ContentStatus) || 'Draft',
      postDate: values[11] || '',
      notes: values[12] || '',
      processedAt: values[13] || '',
    };
  }

  /**
   * Get all rows
   */
  async getAllRows(): Promise<Array<SheetRow & { rowNumber: number }>> {
    const response = await this.sheets.spreadsheets.values.get({
      spreadsheetId: this.spreadsheetId,
      range: `${this.tabName}!A${DATA_START_ROW}:N`,
    });

    const values = response.data.values || [];

    return values.map((row, index) => ({
      rowNumber: index + DATA_START_ROW,
      filename: row[0] || '',
      episodeNumber: row[1] || '',
      guest: row[2] || '',
      topic: row[3] || '',
      duration: row[4] || '',
      platforms: row[5] || '',
      captionIG: row[6] || '',
      captionLI: row[7] || '',
      captionYT: row[8] || '',
      captionTK: row[9] || '',
      status: (row[10] as ContentStatus) || 'Draft',
      postDate: row[11] || '',
      notes: row[12] || '',
      processedAt: row[13] || '',
    }));
  }

  /**
   * Get rows by status
   */
  async getRowsByStatus(status: ContentStatus): Promise<Array<SheetRow & { rowNumber: number }>> {
    const allRows = await this.getAllRows();
    return allRows.filter(row => row.status === status);
  }

  /**
   * Add note to a row (append to existing notes)
   */
  async appendNote(rowNumber: number, note: string): Promise<void> {
    const currentRow = await this.getRow(rowNumber);
    const timestamp = new Date().toISOString().split('T')[0];
    const newNote = currentRow?.notes
      ? `${currentRow.notes}\n[${timestamp}] ${note}`
      : `[${timestamp}] ${note}`;

    await this.updateRow(rowNumber, { notes: newNote });
  }
}
