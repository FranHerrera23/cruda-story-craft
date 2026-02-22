/**
 * CTD Podcast Automation - Type Definitions
 */

// ===========================================
// VIDEO & CLIP TYPES
// ===========================================

export interface VideoMetadata {
  filename: string;
  episodeNumber: string | null;
  guestLastName: string | null;
  topicKeyword: string | null;
  duration: number; // in seconds
  filePath: string;
  fileSize: number; // in bytes
  mimeType: string;
  googleDriveId: string;
  platformFolder: Platform | 'Multi_Platform';
  createdAt: Date;
}

export interface VideoAnalysis {
  /** Who's speaking? */
  speakers: SpeakerType;
  /** Main guest info if applicable */
  guest: GuestInfo | null;
  /** Key quote or hook from the video */
  keyQuote: string;
  /** Emotional tone of the content */
  tone: EmotionalTone;
  /** Main topic category */
  topic: string;
  /** Content pillar classification */
  contentPillar: ContentPillar;
  /** Visual style description */
  visualStyle: VisualStyle;
  /** Main insight or takeaway */
  mainInsight: string;
  /** Transcription of the video */
  transcription: string;
  /** Whether suitable for TikTok format */
  tiktokSuitable: boolean;
  /** Any flags or notes from analysis */
  analysisNotes: string[];
}

export type SpeakerType = 'jp_solo' | 'jp_and_guest' | 'guest_solo' | 'multiple_guests';

export interface GuestInfo {
  name: string;
  lastName: string;
  company: string | null;
  title: string | null;
}

export type EmotionalTone =
  | 'reflective'
  | 'energetic'
  | 'serious'
  | 'conversational'
  | 'inspirational'
  | 'educational'
  | 'vulnerable';

export type ContentPillar =
  | 'Sales Strategy'
  | 'Personal Growth'
  | 'Design Industry Insights'
  | 'Guest Stories'
  | 'Networking & Community'
  | 'General';

export type VisualStyle =
  | 'studio_interview'
  | 'b_roll'
  | 'talking_head'
  | 'event_footage'
  | 'mixed';

// ===========================================
// PLATFORM & CAPTION TYPES
// ===========================================

export type Platform = 'Instagram' | 'LinkedIn' | 'YouTube_Shorts' | 'TikTok';

export interface GeneratedCaptions {
  instagram: string;
  linkedin: string;
  youtube: YouTubeCaption;
  tiktok: string;
}

export interface YouTubeCaption {
  title: string; // max 60 characters
  description: string; // 500-1000 characters
}

export interface CaptionGenerationContext {
  metadata: VideoMetadata;
  analysis: VideoAnalysis;
}

// ===========================================
// GOOGLE SHEETS TYPES
// ===========================================

export type ContentStatus =
  | 'Draft'
  | 'Review'
  | 'Approved'
  | 'Scheduled'
  | 'Posted';

export interface SheetRow {
  filename: string;
  episodeNumber: string;
  guest: string;
  topic: string;
  duration: string;
  platforms: string; // comma-separated
  captionIG: string;
  captionLI: string;
  captionYT: string; // Title + Description combined
  captionTK: string;
  status: ContentStatus;
  postDate: string;
  notes: string;
  processedAt: string;
}

export interface SheetConfig {
  spreadsheetId: string;
  tabName: string;
  headerRow: number;
}

// ===========================================
// PROCESSING & WORKFLOW TYPES
// ===========================================

export interface ProcessingResult {
  success: boolean;
  filename: string;
  metadata?: VideoMetadata;
  analysis?: VideoAnalysis;
  captions?: GeneratedCaptions;
  sheetRowNumber?: number;
  errors: ProcessingError[];
  warnings: string[];
  processingTime: number; // in milliseconds
}

export interface ProcessingError {
  stage: ProcessingStage;
  message: string;
  recoverable: boolean;
  details?: unknown;
}

export type ProcessingStage =
  | 'download'
  | 'metadata_extraction'
  | 'transcription'
  | 'video_analysis'
  | 'caption_generation'
  | 'quality_check'
  | 'sheet_update'
  | 'archive';

export interface ProcessingOptions {
  /** Force reprocess even if already in sheet */
  force?: boolean;
  /** Skip quality checks */
  skipQualityChecks?: boolean;
  /** Only process specific platforms */
  platforms?: Platform[];
  /** Dry run - don't write to sheet */
  dryRun?: boolean;
  /** Verbose logging */
  verbose?: boolean;
}

export interface WatcherOptions {
  /** Polling interval in milliseconds */
  pollInterval?: number;
  /** Process immediately on detection or queue */
  processImmediately?: boolean;
}

// ===========================================
// QUALITY CHECK TYPES
// ===========================================

export interface QualityCheckResult {
  passed: boolean;
  fluffTestPassed: boolean;
  specificityTestPassed: boolean;
  voiceTestPassed: boolean;
  issues: string[];
}

// ===========================================
// CONFIGURATION TYPES
// ===========================================

export interface Config {
  google: {
    credentialsPath: string;
    drive: {
      clipsFolderId: string;
      archiveFolderId: string;
    };
    sheets: {
      spreadsheetId: string;
      tabName: string;
    };
  };
  anthropic: {
    apiKey: string;
    model: string;
  };
  processing: {
    tempDirectory: string;
    logLevel: 'debug' | 'info' | 'warn' | 'error';
  };
  notifications: {
    enabled: boolean;
    slackWebhook?: string;
    email?: string;
  };
}

// ===========================================
// LOGGING TYPES
// ===========================================

export interface LogEntry {
  timestamp: Date;
  level: 'debug' | 'info' | 'warn' | 'error';
  stage: ProcessingStage | 'system';
  message: string;
  filename?: string;
  details?: unknown;
}
