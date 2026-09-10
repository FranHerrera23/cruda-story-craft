import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseComposer from '@/components/case-blocks/CaseComposer'
import { previewFixtures } from './fixtures'

/* Task 11 · preview route.

   Ruta noindex/nofollow para validar el sistema de bloques sin tocar
   /work/[slug] (los cinco casos existentes siguen corriendo con el
   CaseStudyLayout legacy hasta el paso 5 del spec).

   Punto 3 del orden: reportar acá antes de seguir con B8/B9/B10 y
   el resto. Este route se retira cuando los casos migren. */

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

  return (
    <>
      {/* Montserrat para la identidad de INOUT. En un data file real
          cada caso trae su propia tipografía por identity.type; los
          casos sin identidad caen a --g (Archivo). */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin=""
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap"
      />
      <CaseComposer cs={cs} />
    </>
  )
}
