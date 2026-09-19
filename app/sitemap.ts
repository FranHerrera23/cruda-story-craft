import { MetadataRoute } from 'next';
import { allClients } from '@/content/clients';
import { allClientsV2 } from '@/content/clients-v2';
import { allEssays } from '@/content/essays';
import { CAPTURE_ENABLED } from '@/lib/flags';
import { MOMENTS } from '@/content/moments';

const BASE = 'https://www.thecruda.com';

/* Brief v2 Task 9 — sitemap contiene SOLO URLs canónicas.
   Sin redirects, sin /sports (410), sin /systems (410),
   sin /architecture-design (301 → /work), sin /resources/* (301).
   /newsletter queda fuera mientras CAPTURE_ENABLED=false (F0).

   Task 8 — cada moment se emite como su propio índice /work/{moment}.

   Nota 13-sep · Karen sub-projects (/projects/karen-mannheim/*) YA
   NO entran al sitemap. Cada page.tsx declara robots noindex a
   nivel meta y por lo tanto no corresponde re-invitarlos al crawl
   desde el sitemap — es la señal mixta que Google penaliza. */

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Home
    {
      url: BASE,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Task 4 nav pages · /about es la canónica (Brief 02, 14-sep).
    // /our-founder redirige 301 permanente a /about — fuera del sitemap.
    {
      url: `${BASE}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    /* /work retirado del sitemap (brief 10-sep §9 paso 4) — la ruta
       responde 308 al ancla /#selected-work. Los case studies
       individuales /work/{slug} y los moment indexes siguen abajo. */
    /* F9.4 (Commit 7 · 19-sep) · /services agregada al sitemap ·
       plano 00 (QUÉ ES CRUDA firmed). Los cuatro planos internos
       llegan en F9.5/F9.6 pero la ruta ya existe. */
    {
      url: `${BASE}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE}/process`,
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
    // Case studies canónicas — legacy (CaseStudyLayout).
    ...allClients.map((c) => ({
      url: `${BASE}/work/${c.slug}`,
      lastModified: c.updatedAt ? new Date(c.updatedAt) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Case studies v2 — modelo de bloques (paso 5 del spec).
    ...allClientsV2.map((c) => ({
      url: `${BASE}/work/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Karen sub-projects retirados del sitemap — cada page.tsx
    // declara robots.index:false y no corresponde re-invitarlos
    // al crawl desde acá (ver comentario superior).
    // Essays
    ...allEssays.map((e) => ({
      url: `${BASE}/essays/${e.slug}`,
      lastModified: new Date(e.updatedAt || e.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    /* Fran directive (18-sep) · /pricing borrada del repo. Estaba
       fuera del sitemap desde A.2.1 y noindex a nivel meta · con
       el retiro del componente entero la nota queda como registro
       histórico. */
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
       - /architecture-design/* (301 → /work | /about)
       - /our-founder (301 → /about, Brief 02 · 14-sep)
       - /resources/* (301 → /work | /essays)
       - /thinking/*, /clients/* (301 legacy)
       - /deck, /crudasports/sfh (privadas, noindex a nivel meta)
       - /projects/karen-mannheim/* (privadas, noindex a nivel meta) */
  ];
}
