import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseComposer from '@/components/case-blocks/CaseComposer'
import { previewFixtures } from './fixtures'

/* Task 11 · preview route.

   Ruta noindex/nofollow para validar el sistema de bloques sin tocar
   /work/[slug] (los cinco casos existentes siguen corriendo con el
   CaseStudyLayout legacy hasta el paso 5 del spec).

   Fuentes de cliente: el compositor las carga via manifest en
   fonts.ts (next/font). Un data file ya no controla el <head>.

   Hardening noindex (además del `robots` meta acá):
   - Middleware añade X-Robots-Tag: noindex
   - robots.txt tiene Disallow: /preview/
   - No está en el sitemap */

export const metadata: Metadata = {
  title: 'Preview · Case blocks — CRUDA',
  robots: { index: false, follow: false },
}

export function generateStaticParams() {
  return Object.keys(previewFixtures).map((slug) => ({ slug }))
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const cs = previewFixtures[slug]
  if (!cs) notFound()
  /* preview=true — se renderizan también los bloques con draft:true.
     En producción /work/[slug] el default es preview=false y los
     drafts se omiten. */
  return <CaseComposer cs={cs} preview />
}
