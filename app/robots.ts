import { MetadataRoute } from 'next';

/* Brief v5, tarea 1.
   1.1 — public/robots.txt was deleted so this dynamic route is the
   single source of truth (no more static/dynamic collision).
   1.2 — AI answer bots are named explicitly. The whole site is written
   for AEO; if they can't crawl, the strategy is moot.
   1.3 — /pricing leaves noindex and is allowed here.
   1.4 — sitemap referenced. */

const CRAWL_ALLOW_ALL = [
  // Search engines
  'Googlebot',
  'Bingbot',
  // AI answer engines
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
  // Social preview
  'Twitterbot',
  'facebookexternalhit',
  'LinkedInBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...CRAWL_ALLOW_ALL.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: 'https://www.thecruda.com/sitemap.xml',
    host: 'https://www.thecruda.com',
  };
}
