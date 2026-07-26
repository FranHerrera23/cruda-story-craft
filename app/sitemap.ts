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
    // Essays index + individual essays (etapa 5)
    {
      url: `${BASE}/essays`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...allEssays.map((e) => ({
      url: `${BASE}/essays/${e.slug}`,
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
      lastModified: new Date(c.updatedAt),
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
    {
      url: `${BASE}/book-call`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Karen Mannheim project detail pages (legacy, still live)
    {
      url: `${BASE}/projects/karen-mannheim/pezet`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/projects/karen-mannheim/four-seasons-penthouse`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/projects/karen-mannheim/porsche-flagship`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/projects/karen-mannheim/saadiyat-music-festival`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE}/projects/karen-mannheim/trazzo-expansion`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
