import { MetadataRoute } from 'next';
import { allClients } from '@/content/clients';
import { allEssays } from '@/content/essays';
import { CAPTURE_ENABLED } from '@/lib/flags';
import { MOMENTS } from '@/content/moments';

const BASE = 'https://www.thecruda.com';

/* Brief v2 Task 9 — sitemap contiene SOLO URLs canónicas.
   Sin redirects, sin /sports (410), sin /systems (410),
   sin /architecture-design (301 → /work), sin /resources/* (301).
   /newsletter queda fuera mientras CAPTURE_ENABLED=false (F0).

   Task 8 — cada moment se emite como su propio índice /work/{moment}.
   Karen sub-projects (/projects/karen-mannheim/*) entran al sitemap
   por decisión D5. */

const KAREN_PROJECTS = [
  'pezet',
  'four-seasons-penthouse',
  'porsche-flagship',
  'saadiyat-music-festival',
  'trazzo-expansion',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Task 4 nav pages
    {
      url: `${BASE}/our-founder`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE}/approach`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/essays`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Task 8 — moment indexes
    ...MOMENTS.map((m) => ({
      url: `${BASE}/work/${m}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Case studies canónicas
    ...allClients.map((c) => ({
      url: `${BASE}/work/${c.slug}`,
      lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Karen sub-projects (D5 — se promueven al sitemap)
    ...KAREN_PROJECTS.map((p) => ({
      url: `${BASE}/projects/karen-mannheim/${p}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    // Essays
    ...allEssays.map((e) => ({
      url: `${BASE}/essays/${e.slug}`,
      lastModified: new Date(e.updatedAt || e.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    /* A.2.1 — /pricing fuera del sitemap. La ruta sigue viva pero
       responde noindex a nivel meta hasta que la decisión sobre
       rate card público esté cerrada. */
    // Newsletter — F0 flag: sale del sitemap mientras esté apagado.
    ...(CAPTURE_ENABLED
      ? [{
          url: `${BASE}/newsletter`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.5,
        }]
      : []),
    /* Fuera del sitemap deliberadamente:
       - /sports, /systems (410, retiradas)
       - /architecture-design/* (301 → /work | /our-founder)
       - /resources/* (301 → /work | /essays)
       - /thinking/*, /clients/* (301 legacy)
       - /deck, /crudasports/sfh (privadas, noindex a nivel meta) */
  ];
}
