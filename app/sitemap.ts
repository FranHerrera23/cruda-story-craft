import { MetadataRoute } from 'next';
import { allClients } from '@/content/clients';
import { allEssays } from '@/content/essays';

const BASE = 'https://www.thecruda.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Verticals
    {
      url: `${BASE}/architecture-design`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/architecture-design/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE}/ai-concierge`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Founder (etapa 4)
    {
      url: `${BASE}/our-founder`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Thinking index + individual pieces (etapa 5 — renamed from /essays)
    {
      url: `${BASE}/thinking`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...allEssays.map((e) => ({
      url: `${BASE}/thinking/${e.slug}`,
      lastModified: e.updatedAt.startsWith('[FRAN')
        ? new Date(e.publishedAt)
        : new Date(e.updatedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Sports placeholder (etapa 5)
    {
      url: `${BASE}/sports`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Clients (global)
    {
      url: `${BASE}/clients`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...allClients.map((c) => ({
      url: `${BASE}/clients/${c.slug}`,
      lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    // Contact / book-call (kept live)
    {
      url: `${BASE}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Pricing — brief v5 1.3: out of noindex, into the sitemap.
    // "How much" is the second query after "what do you do."
    {
      url: `${BASE}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // /projects/karen-mannheim/* — brief v5 1.5: fuera del sitemap,
    // noindex a nivel página (opción B). Las rutas siguen vivas para
    // uso interno (SeeTheWork las linkea), pero no compiten por
    // autoridad con /clients/karen-mannheim.
    // /book-call no longer indexed — all CTAs point at Calendly now.
  ];
}
