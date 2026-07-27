import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyLayout from '@/components/CaseStudyLayout'
import { allClients } from '@/content/clients'

const BASE = 'https://www.thecruda.com'

// Static generation → el contenido está en el HTML crudo. La IA lo ve.
export function generateStaticParams() {
  return allClients.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const cs = allClients.find((c) => c.slug === slug)
  if (!cs) return {}
  return {
    title: `${cs.title} | CRUDA`,
    description: cs.answerCapsule.slice(0, 155),
    alternates: { canonical: `${BASE}/clients/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.answerCapsule,
      url: `${BASE}/clients/${cs.slug}`,
      type: 'article',
      publishedTime: cs.publishedAt,
      modifiedTime: cs.updatedAt,
      images: [`${BASE}${cs.heroImage}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: cs.title,
      description: cs.answerCapsule.slice(0, 200),
      images: [`${BASE}${cs.heroImage}`],
    },
  }
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const cs = allClients.find((c) => c.slug === slug)
  if (!cs) notFound()
  return <CaseStudyLayout cs={cs} />
}
