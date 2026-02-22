/**
 * Video Analysis Service
 * Handles metadata extraction, transcription, and AI-powered content analysis
 */

import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';
import path from 'path';
import { stat } from 'fs/promises';
import Anthropic from 'anthropic';
import { readFile } from 'fs/promises';
import type {
  VideoMetadata,
  VideoAnalysis,
  Platform,
  SpeakerType,
  EmotionalTone,
  ContentPillar,
  VisualStyle,
  GuestInfo,
  Config,
} from '../types/index.js';
import { logger } from '../utils/logger.js';

// Set ffmpeg path
if (ffmpegStatic) {
  ffmpeg.setFfmpegPath(ffmpegStatic);
}

export class VideoAnalyzerService {
  private anthropic: Anthropic;
  private config: Config;

  constructor(config: Config) {
    this.config = config;
    this.anthropic = new Anthropic({
      apiKey: config.anthropic.apiKey,
    });
  }

  /**
   * Extract metadata from a video file
   */
  async extractMetadata(
    localPath: string,
    googleDriveId: string,
    platform: Platform | 'Multi_Platform'
  ): Promise<VideoMetadata> {
    const filename = path.basename(localPath);
    const parsed = this.parseFilename(filename);
    const fileStats = await stat(localPath);
    const duration = await this.getVideoDuration(localPath);

    return {
      filename,
      episodeNumber: parsed.episodeNumber,
      guestLastName: parsed.guestLastName,
      topicKeyword: parsed.topicKeyword,
      duration,
      filePath: localPath,
      fileSize: fileStats.size,
      mimeType: this.getMimeType(filename),
      googleDriveId,
      platformFolder: platform,
      createdAt: fileStats.birthtime,
    };
  }

  /**
   * Parse filename according to naming convention
   * Format: [episode#]_[guest_lastname]_[topic_keyword].mp4
   */
  private parseFilename(filename: string): {
    episodeNumber: string | null;
    guestLastName: string | null;
    topicKeyword: string | null;
  } {
    // Remove extension
    const nameWithoutExt = filename.replace(/\.(mp4|mov|avi|mkv)$/i, '');

    // Split by underscore
    const parts = nameWithoutExt.split('_');

    if (parts.length >= 3) {
      return {
        episodeNumber: parts[0] || null,
        guestLastName: parts[1] || null,
        topicKeyword: parts.slice(2).join(' ') || null,
      };
    } else if (parts.length === 2) {
      return {
        episodeNumber: parts[0] || null,
        guestLastName: null,
        topicKeyword: parts[1] || null,
      };
    } else {
      return {
        episodeNumber: null,
        guestLastName: null,
        topicKeyword: nameWithoutExt,
      };
    }
  }

  /**
   * Get video duration using ffmpeg
   */
  private getVideoDuration(localPath: string): Promise<number> {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(localPath, (err, metadata) => {
        if (err) {
          logger.error('Failed to get video duration', err);
          reject(err);
        } else {
          resolve(metadata.format.duration || 0);
        }
      });
    });
  }

  /**
   * Extract audio from video for transcription
   */
  async extractAudio(videoPath: string): Promise<string> {
    const audioPath = videoPath.replace(/\.(mp4|mov|avi|mkv)$/i, '.mp3');

    return new Promise((resolve, reject) => {
      ffmpeg(videoPath)
        .outputOptions(['-vn', '-acodec', 'libmp3lame', '-q:a', '4'])
        .output(audioPath)
        .on('end', () => {
          logger.debug(`Audio extracted: ${audioPath}`);
          resolve(audioPath);
        })
        .on('error', (err) => {
          logger.error('Audio extraction failed', err);
          reject(err);
        })
        .run();
    });
  }

  /**
   * Analyze video content using Claude AI
   * This combines transcription analysis with video understanding
   */
  async analyzeContent(
    metadata: VideoMetadata,
    transcription: string
  ): Promise<VideoAnalysis> {
    logger.info(`Analyzing content for ${metadata.filename}`);

    const analysisPrompt = `You are analyzing a podcast video clip from "Connecting the Dots" (CTD), hosted by JP Romero.

VIDEO INFORMATION:
- Filename: ${metadata.filename}
- Episode Number: ${metadata.episodeNumber || 'Unknown'}
- Guest Last Name (from filename): ${metadata.guestLastName || 'Unknown'}
- Topic Keyword (from filename): ${metadata.topicKeyword || 'Unknown'}
- Duration: ${Math.round(metadata.duration)} seconds
- Platform: ${metadata.platformFolder}

TRANSCRIPTION:
${transcription || '[No transcription available - analyze based on filename and context]'}

Based on this information, provide a detailed analysis in the following JSON format:

{
  "speakers": "jp_solo" | "jp_and_guest" | "guest_solo" | "multiple_guests",
  "guest": {
    "name": "Full name if identifiable",
    "lastName": "Last name",
    "company": "Company name if mentioned",
    "title": "Job title if mentioned"
  } | null,
  "keyQuote": "The most impactful quote or hook from the transcription (exact words if possible)",
  "tone": "reflective" | "energetic" | "serious" | "conversational" | "inspirational" | "educational" | "vulnerable",
  "topic": "Brief description of the main topic (2-5 words)",
  "contentPillar": "Sales Strategy" | "Personal Growth" | "Design Industry Insights" | "Guest Stories" | "Networking & Community" | "General",
  "visualStyle": "studio_interview" | "b_roll" | "talking_head" | "event_footage" | "mixed",
  "mainInsight": "The key takeaway or insight from this clip (1-2 sentences)",
  "tiktokSuitable": true | false,
  "analysisNotes": ["Any relevant notes about the content, quality issues, or recommendations"]
}

If the guest name in the filename is recognizable (like "liza" for Jorge Liza, "canepa" for someone named Canepa, etc.), try to infer the full name.

For tiktokSuitable, consider: Is the content engaging enough for TikTok? Is it under 60 seconds? Does it have a clear hook?

Respond ONLY with the JSON object, no additional text.`;

    try {
      const response = await this.anthropic.messages.create({
        model: this.config.anthropic.model,
        max_tokens: 1500,
        messages: [
          {
            role: 'user',
            content: analysisPrompt,
          },
        ],
      });

      const content = response.content[0];
      if (content.type !== 'text') {
        throw new Error('Unexpected response type from Claude');
      }

      // Parse the JSON response
      const analysis = JSON.parse(content.text);

      return {
        speakers: analysis.speakers as SpeakerType,
        guest: analysis.guest as GuestInfo | null,
        keyQuote: analysis.keyQuote,
        tone: analysis.tone as EmotionalTone,
        topic: analysis.topic,
        contentPillar: analysis.contentPillar as ContentPillar,
        visualStyle: analysis.visualStyle as VisualStyle,
        mainInsight: analysis.mainInsight,
        transcription,
        tiktokSuitable: analysis.tiktokSuitable,
        analysisNotes: analysis.analysisNotes || [],
      };
    } catch (error) {
      logger.error('Content analysis failed', error);

      // Return a basic analysis based on filename
      return {
        speakers: 'jp_and_guest',
        guest: metadata.guestLastName
          ? {
              name: metadata.guestLastName,
              lastName: metadata.guestLastName,
              company: null,
              title: null,
            }
          : null,
        keyQuote: '',
        tone: 'conversational',
        topic: metadata.topicKeyword || 'Unknown',
        contentPillar: 'General',
        visualStyle: 'studio_interview',
        mainInsight: '',
        transcription,
        tiktokSuitable: metadata.duration <= 60,
        analysisNotes: ['Analysis failed - using fallback based on filename'],
      };
    }
  }

  /**
   * Transcribe audio using Claude's audio capabilities or external service
   * For now, this creates a placeholder - in production, integrate with Whisper API
   */
  async transcribeAudio(audioPath: string): Promise<string> {
    logger.info(`Transcribing audio: ${audioPath}`);

    // Read audio file
    try {
      const audioBuffer = await readFile(audioPath);
      const base64Audio = audioBuffer.toString('base64');

      // Use Claude for transcription if the file is small enough
      // Claude can process audio up to ~25MB
      if (audioBuffer.length < 25 * 1024 * 1024) {
        const response = await this.anthropic.messages.create({
          model: this.config.anthropic.model,
          max_tokens: 4000,
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'text',
                  text: 'Please transcribe the following audio. Provide only the transcription, no additional commentary. If there are multiple speakers, indicate speaker changes with [Speaker 1], [Speaker 2], etc.',
                },
                {
                  type: 'document',
                  source: {
                    type: 'base64',
                    media_type: 'audio/mp3',
                    data: base64Audio,
                  },
                } as any, // Type assertion for audio content
              ],
            },
          ],
        });

        const content = response.content[0];
        if (content.type === 'text') {
          return content.text;
        }
      }

      // Fallback message if audio is too large
      return '[Audio file too large for transcription - manual transcription may be needed]';
    } catch (error) {
      logger.warn('Transcription failed, continuing without transcription', error);
      return '[Transcription unavailable]';
    }
  }

  /**
   * Get MIME type from filename
   */
  private getMimeType(filename: string): string {
    const ext = path.extname(filename).toLowerCase();
    const mimeTypes: Record<string, string> = {
      '.mp4': 'video/mp4',
      '.mov': 'video/quicktime',
      '.avi': 'video/x-msvideo',
      '.mkv': 'video/x-matroska',
    };
    return mimeTypes[ext] || 'video/mp4';
  }

  /**
   * Format duration as MM:SS
   */
  static formatDuration(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }
}
