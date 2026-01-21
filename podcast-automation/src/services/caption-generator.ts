/**
 * Caption Generator Service
 * Generates platform-specific captions following JP's voice guidelines
 */

import Anthropic from 'anthropic';
import type {
  VideoMetadata,
  VideoAnalysis,
  GeneratedCaptions,
  YouTubeCaption,
  QualityCheckResult,
  Config,
} from '../types/index.js';
import { logger, logCaptionGeneration, logQualityCheck } from '../utils/logger.js';
import { JP_VOICE_GUIDELINES, PLATFORM_GUIDELINES } from '../prompts/voice-guidelines.js';

const MAX_GENERATION_ATTEMPTS = 3;

export class CaptionGeneratorService {
  private anthropic: Anthropic;
  private config: Config;

  constructor(config: Config) {
    this.config = config;
    this.anthropic = new Anthropic({
      apiKey: config.anthropic.apiKey,
    });
  }

  /**
   * Generate all platform captions for a video
   */
  async generateAllCaptions(
    metadata: VideoMetadata,
    analysis: VideoAnalysis
  ): Promise<GeneratedCaptions> {
    logger.info(`Generating captions for ${metadata.filename}`);

    // Generate all captions in parallel
    const [instagram, linkedin, youtube, tiktok] = await Promise.all([
      this.generateWithRetry('instagram', metadata, analysis),
      this.generateWithRetry('linkedin', metadata, analysis),
      this.generateYouTubeCaption(metadata, analysis),
      this.generateWithRetry('tiktok', metadata, analysis),
    ]);

    return {
      instagram,
      linkedin,
      youtube,
      tiktok,
    };
  }

  /**
   * Generate a single platform caption with retry logic and quality checks
   */
  private async generateWithRetry(
    platform: 'instagram' | 'linkedin' | 'tiktok',
    metadata: VideoMetadata,
    analysis: VideoAnalysis
  ): Promise<string> {
    for (let attempt = 1; attempt <= MAX_GENERATION_ATTEMPTS; attempt++) {
      logCaptionGeneration(metadata.filename, platform, attempt);

      const caption = await this.generateCaption(platform, metadata, analysis);
      const qualityCheck = this.checkQuality(caption, platform, analysis);

      logQualityCheck(metadata.filename, qualityCheck.passed, qualityCheck.issues);

      if (qualityCheck.passed) {
        return caption;
      }

      if (attempt === MAX_GENERATION_ATTEMPTS) {
        logger.warn(
          `Caption for ${platform} failed quality checks after ${MAX_GENERATION_ATTEMPTS} attempts. Using last version with note.`
        );
        return caption + `\n\n[Note: Auto-generated - may need manual review. Issues: ${qualityCheck.issues.join(', ')}]`;
      }
    }

    return '';
  }

  /**
   * Generate a caption for a specific platform
   */
  private async generateCaption(
    platform: 'instagram' | 'linkedin' | 'tiktok',
    metadata: VideoMetadata,
    analysis: VideoAnalysis
  ): Promise<string> {
    const platformGuideline = PLATFORM_GUIDELINES[platform];

    const prompt = `${JP_VOICE_GUIDELINES}

---

PLATFORM: ${platform.toUpperCase()}

${platformGuideline}

---

VIDEO CONTEXT:
- Episode: ${metadata.episodeNumber || 'Unknown'}
- Guest: ${analysis.guest?.name || 'JP Solo'} ${analysis.guest?.company ? `(${analysis.guest.company})` : ''}
- Topic: ${analysis.topic}
- Content Pillar: ${analysis.contentPillar}
- Emotional Tone: ${analysis.tone}
- Key Quote: "${analysis.keyQuote}"
- Main Insight: ${analysis.mainInsight}
- Visual Style: ${analysis.visualStyle}

TRANSCRIPTION:
${analysis.transcription || '[Not available]'}

---

Generate a ${platform} caption for this video clip. The caption must:
1. Pass the Fluff Test: It should NOT be generic enough to describe any podcast
2. Pass the Specificity Test: It MUST reference actual content from the video
3. Pass the Voice Test: It must sound like JP would actually say it

Remember:
- NO emojis
- NO hashtags
- NO CTAs ("Like if you agree", "Follow for more", etc.)
- NO phrases from the banned list
- Use specific details from the transcription
- Keep JP's grounded, direct, honest voice

Write ONLY the caption text, nothing else.`;

    try {
      const response = await this.anthropic.messages.create({
        model: this.config.anthropic.model,
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      const content = response.content[0];
      if (content.type !== 'text') {
        throw new Error('Unexpected response type');
      }

      return content.text.trim();
    } catch (error) {
      logger.error(`Caption generation failed for ${platform}`, error);
      throw error;
    }
  }

  /**
   * Generate YouTube caption (title + description)
   */
  private async generateYouTubeCaption(
    metadata: VideoMetadata,
    analysis: VideoAnalysis
  ): Promise<YouTubeCaption> {
    const prompt = `${JP_VOICE_GUIDELINES}

---

PLATFORM: YOUTUBE SHORTS

${PLATFORM_GUIDELINES.youtube}

---

VIDEO CONTEXT:
- Episode: ${metadata.episodeNumber || 'Unknown'}
- Guest: ${analysis.guest?.name || 'JP Solo'} ${analysis.guest?.company ? `(${analysis.guest.company})` : ''}
- Topic: ${analysis.topic}
- Content Pillar: ${analysis.contentPillar}
- Emotional Tone: ${analysis.tone}
- Key Quote: "${analysis.keyQuote}"
- Main Insight: ${analysis.mainInsight}

TRANSCRIPTION:
${analysis.transcription || '[Not available]'}

---

Generate a YouTube Shorts title and description. The format should be:

TITLE: [Your title here - max 60 characters, hook-first, not clickbait]

DESCRIPTION:
[Opening quote or key point]

[2-3 short paragraphs of context]

[Who said it, why it matters]

[Final thought]

---

JP Romero | Sales & Brand Building | Miami
Connecting the Dots Podcast

Remember:
- NO emojis
- NO hashtags
- The title must be punchy and clear
- The description should follow JP's voice

Write the TITLE and DESCRIPTION in the exact format shown above.`;

    try {
      const response = await this.anthropic.messages.create({
        model: this.config.anthropic.model,
        max_tokens: 1500,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      const content = response.content[0];
      if (content.type !== 'text') {
        throw new Error('Unexpected response type');
      }

      // Parse the response
      const text = content.text.trim();
      const titleMatch = text.match(/TITLE:\s*(.+)/i);
      const descriptionMatch = text.match(/DESCRIPTION:\s*([\s\S]+)/i);

      return {
        title: titleMatch ? titleMatch[1].trim().slice(0, 60) : analysis.topic,
        description: descriptionMatch ? descriptionMatch[1].trim() : text,
      };
    } catch (error) {
      logger.error('YouTube caption generation failed', error);
      return {
        title: analysis.topic.slice(0, 60),
        description: analysis.mainInsight,
      };
    }
  }

  /**
   * Check caption quality against voice guidelines
   */
  checkQuality(
    caption: string,
    platform: string,
    analysis: VideoAnalysis
  ): QualityCheckResult {
    const issues: string[] = [];

    // Fluff Test: Check for generic language
    const fluffPhrases = [
      'in this episode',
      'on this week',
      'great conversation',
      'amazing guest',
      'don\'t miss',
      'tune in',
      'check out',
      'link in bio',
    ];
    const hasFluff = fluffPhrases.some(phrase =>
      caption.toLowerCase().includes(phrase)
    );
    if (hasFluff) {
      issues.push('Contains generic fluff phrases');
    }

    // Specificity Test: Must reference something specific
    const hasSpecificContent =
      caption.includes(analysis.guest?.name || '') ||
      caption.includes(analysis.keyQuote.split(' ').slice(0, 3).join(' ')) ||
      caption.toLowerCase().includes(analysis.topic.toLowerCase());
    if (!hasSpecificContent && analysis.guest) {
      issues.push('Missing specific content reference');
    }

    // Voice Test: Check banned phrases
    const bannedPhrases = [
      'hit me',
      'stuck with me',
      'resonated',
      'i\'ve been thinking about this a lot lately',
      'it\'s a lot',
      'here\'s the thing',
      'at the end of the day',
      'let that sink in',
      'his advice:',
      'her advice:',
      'the lesson here is',
    ];
    const hasBannedPhrase = bannedPhrases.some(phrase =>
      caption.toLowerCase().includes(phrase)
    );
    if (hasBannedPhrase) {
      issues.push('Contains banned phrase');
    }

    // Check for emojis
    const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u;
    if (emojiRegex.test(caption)) {
      issues.push('Contains emoji');
    }

    // Check for hashtags
    if (caption.includes('#')) {
      issues.push('Contains hashtag');
    }

    // Check for CTA language
    const ctaPhrases = [
      'follow',
      'like if',
      'share this',
      'comment below',
      'subscribe',
      'click',
      'tap the link',
    ];
    const hasCTA = ctaPhrases.some(phrase =>
      caption.toLowerCase().includes(phrase)
    );
    if (hasCTA) {
      issues.push('Contains CTA language');
    }

    // Platform-specific length checks
    if (platform === 'tiktok' && caption.split(/\s+/).length > 150) {
      issues.push('TikTok caption too long (>150 words)');
    }
    if (platform === 'instagram' && caption.split(/\s+/).length > 250) {
      issues.push('Instagram caption too long (>250 words)');
    }
    if (platform === 'linkedin' && caption.split(/\s+/).length > 350) {
      issues.push('LinkedIn caption too long (>350 words)');
    }

    return {
      passed: issues.length === 0,
      fluffTestPassed: !hasFluff,
      specificityTestPassed: hasSpecificContent || !analysis.guest,
      voiceTestPassed: !hasBannedPhrase && !emojiRegex.test(caption) && !hasCTA,
      issues,
    };
  }

  /**
   * Regenerate a specific caption
   */
  async regenerateCaption(
    platform: 'instagram' | 'linkedin' | 'tiktok' | 'youtube',
    metadata: VideoMetadata,
    analysis: VideoAnalysis,
    feedback?: string
  ): Promise<string | YouTubeCaption> {
    logger.info(`Regenerating ${platform} caption for ${metadata.filename}`);

    if (platform === 'youtube') {
      return this.generateYouTubeCaption(metadata, analysis);
    }

    // Add feedback to the generation if provided
    if (feedback) {
      const prompt = `Previous caption was rejected. Feedback: ${feedback}

Please generate a new caption following the same guidelines but addressing this feedback.`;

      // For now, just regenerate without the feedback context
      // In a more sophisticated system, you'd include the feedback in the prompt
    }

    return this.generateWithRetry(platform, metadata, analysis);
  }

  /**
   * Format YouTube caption for sheet (combined title + description)
   */
  static formatYouTubeForSheet(youtube: YouTubeCaption): string {
    return `TITLE: ${youtube.title}\n\n---\n\n${youtube.description}`;
  }
}
