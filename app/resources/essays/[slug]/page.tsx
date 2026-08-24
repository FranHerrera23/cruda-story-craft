import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EssayLayout from '@/components/EssayLayout'
import { allEssays } from '@/content/essays'

const BASE = 'https://www.thecruda.com'

/* Brief v4 UX §5 — ruta canónica del ensayo. Todo /thinking/[slug]
   redirige 301 aquí (config en next.config.mjs). Canonical + hreflang
   viven en /resources/essays/. */

export function generateStaticParams() {
  return allEssays.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const es = allEssays.find((e) => e.slug === slug)
  if (!es) return {}
  const modified = es.updatedAt || es.publishedAt
  const locale = es.language === 'es' ? 'es_ES' : 'en_US'
  const headTitle = es.seoTitle ?? es.title
  const languages: Record<string, string> = {}
  if (es.alternates?.es) {
    languages['es'] = `${BASE}/resources/essays/${es.alternates.es}`
  }
  if (es.alternates?.en) {
    languages['en'] = `${BASE}/resources/essays/${es.alternates.en}`
    languages['x-default'] = `${BASE}/resources/essays/${es.alternates.en}`
  }
  const alternates: NonNullable<Metadata['alternates']> = {
    canonical: `${BASE}/resources/essays/${es.slug}`,
  }
  if (Object.keys(languages).length > 0) {
    alternates.languages = languages
  }
  return {
    title: `${headTitle} | CRUDA`,
    description: es.answerCapsule.slice(0, 155),
    alternates,
    openGraph: {
      title: headTitle,
      description: es.answerCapsule,
      url: `${BASE}/resources/essays/${es.slug}`,
      type: 'article',
      publishedTime: es.publishedAt,
      modifiedTime: modified,
      locale,
      images: [es.heroImage ? `${BASE}${es.heroImage}` : `${BASE}/logo.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: headTitle,
      description: es.answerCapsule.slice(0, 200),
      images: [es.heroImage ? `${BASE}${es.heroImage}` : `${BASE}/logo.png`],
    },
  }
}

export default async function EssayPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const es = allEssays.find((e) => e.slug === slug)
  if (!es) notFound()
  return <EssayLayout es={es} />
}
