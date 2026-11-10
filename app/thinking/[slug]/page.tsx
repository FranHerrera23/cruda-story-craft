import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EssayLayout from '@/components/EssayLayout'
import { allEssays } from '@/content/essays'
import articles from '@/content/articles.json'
import LibraryArticle from '@/components/LibraryArticle'

const BASE = 'https://www.thecruda.com'

/* /thinking/[slug] · F14b.1 · 21-sep · autónomo.
   Canónica del artículo. /essays/[slug] y /resources/essays/[slug]
   redirigen acá 308 (sin cadenas). Canonical + hreflang absolute
   URLs sobre /thinking/. */

export function generateStaticParams() {
  return [...allEssays, ...articles].map(e => ({ slug: e.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (article) return {
    title: article.seoTitle, description: article.description,
    alternates: { canonical: `${BASE}/thinking/${slug}` },
    openGraph: { title: article.title, description: article.description, type: 'article', locale: 'es_LA', url: `${BASE}/thinking/${slug}`, publishedTime: article.publishedAt, modifiedTime: article.publishedAt, images: [`${BASE}/logo.png`] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.description, images: [`${BASE}/logo.png`] },
  }
  const es = allEssays.find(e => e.slug === slug)
  if (!es) return {}
  const modified = es.updatedAt || es.publishedAt
  const locale = es.language === 'es' ? 'es_ES' : 'en_US'
  const headTitle = es.seoTitle ?? es.title
  const languages: Record<string, string> = {}
  if (es.alternates?.es) {
    languages['es'] = `${BASE}/thinking/${es.alternates.es}`
  }
  if (es.alternates?.en) {
    languages['en'] = `${BASE}/thinking/${es.alternates.en}`
    languages['x-default'] = `${BASE}/thinking/${es.alternates.en}`
  }
  const alternates: NonNullable<Metadata['alternates']> = {
    canonical: `${BASE}/thinking/${es.slug}`,
  }
  if (Object.keys(languages).length > 0) {
    alternates.languages = languages
  }
  /* F53 §8 · og:image · preferimos og.jpg 1200×630 pre-generada
     (compatible con todos los crawlers) sobre el WebP raw. Fallback
     al logo si el ensayo no tiene hero. */
  const ogImage = es.ogImage
    ? `${BASE}${es.ogImage}`
    : es.heroImage
      ? `${BASE}${es.heroImage}`
      : `${BASE}/logo.png`
  return {
    title: `${headTitle} | CRUDA`,
    description: es.metaDescription || es.answerCapsule.slice(0, 160),
    alternates,
    openGraph: {
      title: headTitle,
      description: es.metaDescription || es.answerCapsule.slice(0, 160),
      url: `${BASE}/thinking/${es.slug}`,
      type: 'article',
      publishedTime: es.publishedAt,
      modifiedTime: modified,
      locale,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: headTitle,
      description: es.metaDescription || es.answerCapsule.slice(0, 160),
      images: [ogImage],
    },
  }
}

export default async function ThinkingSlugPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (article) return <LibraryArticle article={article} />
  const es = allEssays.find(e => e.slug === slug)
  if (!es) notFound()
  return <EssayLayout es={es} />
}
