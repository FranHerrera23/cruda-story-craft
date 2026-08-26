import { MetadataRoute } from 'next';
import { allClients } from '@/content/clients';
import { allEssays } from '@/content/essays';
import { CAPTURE_ENABLED } from '@/lib/flags';

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
      url: `${BASE}/systems`,
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
    // Brief v4 UX §5 — todas las piezas viven bajo /resources/.
    {
      url: `${BASE}/resources`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/resources/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/resources/essays`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...allEssays.map((e) => ({
      url: `${BASE}/resources/essays/${e.slug}`,
      lastModified: new Date(e.updatedAt || e.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...allClients.map((c) => ({
      url: `${BASE}/resources/case-studies/${c.slug}`,
      lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
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
    // Newsletter — brief v4 UX §4.8 ubicación 4.
    // F0 — con CAPTURE_ENABLED apagado la ruta pierde su form y no
    // aporta contenido: sale del sitemap y va como noindex a nivel
    // meta. Cuando el flag vuelva a true, esta entrada vuelve al sitemap.
    ...(CAPTURE_ENABLED
      ? [{
          url: `${BASE}/newsletter`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        }]
      : []),
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
    // noindex a nivel página (opción B). Las rutas siguen vivas pero
    // no compiten por autoridad con /clients/karen-mannheim.
    // /book-call no longer indexed — all CTAs point at Calendly now.
  ];
}
