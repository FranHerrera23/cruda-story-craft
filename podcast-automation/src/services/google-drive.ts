/**
 * Google Drive Integration Service
 * Handles folder watching, file downloads, and archiving
 */

import { google } from 'googleapis';
import { createReadStream, createWriteStream } from 'fs';
import { mkdir, unlink, stat } from 'fs/promises';
import path from 'path';
import type { drive_v3 } from 'googleapis';
import type { VideoMetadata, Platform, Config } from '../types/index.js';
import { logger } from '../utils/logger.js';

export class GoogleDriveService {
  private drive: drive_v3.Drive;
  private config: Config;

  constructor(config: Config) {
    this.config = config;

    // Initialize Google Drive client
    const auth = new google.auth.GoogleAuth({
      keyFile: config.google.credentialsPath,
      scopes: ['https://www.googleapis.com/auth/drive'],
    });

    this.drive = google.drive({ version: 'v3', auth });
  }

  /**
   * List all video files in the clips folder and subfolders
   */
  async listNewClips(): Promise<DriveFile[]> {
    const clips: DriveFile[] = [];
    const platformFolders: Array<{ name: Platform | 'Multi_Platform'; folderId: string }> = [];

    // First, get the subfolders in the clips folder
    const foldersResponse = await this.drive.files.list({
      q: `'${this.config.google.drive.clipsFolderId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
      fields: 'files(id, name)',
    });

    const folders = foldersResponse.data.files || [];

    // Map folder names to platforms
    for (const folder of folders) {
      const platformName = this.folderNameToPlatform(folder.name || '');
      if (platformName && folder.id) {
        platformFolders.push({ name: platformName, folderId: folder.id });
      }
    }

    // Also check root clips folder for files
    platformFolders.push({
      name: 'Multi_Platform',
      folderId: this.config.google.drive.clipsFolderId
    });

    // Get video files from each platform folder
    for (const { name: platform, folderId } of platformFolders) {
      const filesResponse = await this.drive.files.list({
        q: `'${folderId}' in parents and (mimeType contains 'video/') and trashed = false`,
        fields: 'files(id, name, mimeType, size, createdTime, modifiedTime)',
        orderBy: 'createdTime desc',
      });

      const files = filesResponse.data.files || [];

      for (const file of files) {
        if (file.id && file.name) {
          clips.push({
            id: file.id,
            name: file.name,
            mimeType: file.mimeType || 'video/mp4',
            size: parseInt(file.size || '0', 10),
            createdTime: file.createdTime ? new Date(file.createdTime) : new Date(),
            platform,
          });
        }
      }
    }

    logger.info(`Found ${clips.length} video clips to process`);
    return clips;
  }

  /**
   * Download a video file to local temp directory
   */
  async downloadFile(fileId: string, filename: string): Promise<string> {
    const tempDir = this.config.processing.tempDirectory;
    await mkdir(tempDir, { recursive: true });

    const localPath = path.join(tempDir, filename);

    logger.debug(`Downloading ${filename} to ${localPath}`);

    const response = await this.drive.files.get(
      { fileId, alt: 'media' },
      { responseType: 'stream' }
    );

    return new Promise((resolve, reject) => {
      const dest = createWriteStream(localPath);

      (response.data as NodeJS.ReadableStream)
        .pipe(dest)
        .on('finish', () => {
          logger.debug(`Download complete: ${filename}`);
          resolve(localPath);
        })
        .on('error', (err) => {
          logger.error(`Download failed: ${filename}`, err);
          reject(err);
        });
    });
  }

  /**
   * Move a file to the archive folder
   */
  async archiveFile(fileId: string): Promise<void> {
    // Get current parent
    const file = await this.drive.files.get({
      fileId,
      fields: 'parents',
    });

    const previousParents = file.data.parents?.join(',') || '';

    // Move to archive folder
    await this.drive.files.update({
      fileId,
      addParents: this.config.google.drive.archiveFolderId,
      removeParents: previousParents,
      fields: 'id, parents',
    });

    logger.info(`Archived file: ${fileId}`);
  }

  /**
   * Get file metadata from Google Drive
   */
  async getFileMetadata(fileId: string): Promise<Partial<VideoMetadata>> {
    const file = await this.drive.files.get({
      fileId,
      fields: 'id, name, mimeType, size, createdTime, videoMediaMetadata',
    });

    const data = file.data;

    return {
      filename: data.name || '',
      googleDriveId: data.id || '',
      mimeType: data.mimeType || 'video/mp4',
      fileSize: parseInt(data.size || '0', 10),
      createdAt: data.createdTime ? new Date(data.createdTime) : new Date(),
      // Duration will be extracted locally via ffmpeg
    };
  }

  /**
   * Delete local temp file
   */
  async cleanupTempFile(localPath: string): Promise<void> {
    try {
      await unlink(localPath);
      logger.debug(`Cleaned up temp file: ${localPath}`);
    } catch (error) {
      logger.warn(`Failed to cleanup temp file: ${localPath}`, error);
    }
  }

  /**
   * Check if file exists in archive
   */
  async isFileArchived(filename: string): Promise<boolean> {
    const response = await this.drive.files.list({
      q: `'${this.config.google.drive.archiveFolderId}' in parents and name = '${filename}' and trashed = false`,
      fields: 'files(id)',
    });

    return (response.data.files?.length || 0) > 0;
  }

  /**
   * Map folder name to platform enum
   */
  private folderNameToPlatform(name: string): Platform | 'Multi_Platform' | null {
    const normalized = name.toLowerCase().replace(/[_\s-]/g, '');

    if (normalized.includes('instagram') || normalized === 'ig') return 'Instagram';
    if (normalized.includes('linkedin') || normalized === 'li') return 'LinkedIn';
    if (normalized.includes('youtube') || normalized === 'yt' || normalized.includes('shorts')) return 'YouTube_Shorts';
    if (normalized.includes('tiktok') || normalized === 'tk') return 'TikTok';
    if (normalized.includes('multi') || normalized.includes('all')) return 'Multi_Platform';

    return null;
  }
}

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size: number;
  createdTime: Date;
  platform: Platform | 'Multi_Platform';
}
