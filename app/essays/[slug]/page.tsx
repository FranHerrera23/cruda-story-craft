import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import EssayLayout from '@/components/EssayLayout'
import { allEssays } from '@/content/essays'

const BASE = 'https://www.thecruda.com'

export function generateStaticParams() {
  return allEssays.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const es = allEssays.find((e) => e.slug === slug)
  if (!es) return {}
  const modified = es.updatedAt.startsWith('[FRAN') ? es.publishedAt : es.updatedAt
  return {
    title: `${es.title} | CRUDA Essays`,
    description: es.answerCapsule.slice(0, 155),
    alternates: { canonical: `${BASE}/essays/${es.slug}` },
    openGraph: {
      title: es.title,
      description: es.answerCapsule,
      url: `${BASE}/essays/${es.slug}`,
      type: 'article',
      publishedTime: es.publishedAt,
      modifiedTime: modified,
      images: es.heroImage ? [`${BASE}${es.heroImage}`] : undefined,
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
