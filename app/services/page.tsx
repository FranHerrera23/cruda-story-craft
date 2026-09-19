import type { Metadata } from 'next'
import HomeWhatCrudaIs from '@/components/home/HomeWhatCrudaIs'

/* /services — Brief F9 §2.5 + F9.4 (Commit 7 · 19-sep).

   MÍNIMO por decisión de Fran (19-sep firma sobre nav): el link
   SERVICES del nav no puede llevar a una 404, y un ancla a la
   home no vale porque el nav dice SERVICES y llevaría al mismo
   lugar donde ya estás. La página existe con el PLANO 00
   (QUÉ ES CRUDA firmed) y los cuatro planos internos llegan en
   F9.5/F9.6.

   La regla de "el mismo copy en tres lugares" se cumple estructural-
   mente reusando el componente HomeWhatCrudaIs. Cero copy nuevo ·
   cero divergencia. Si el copy cambia, cambia en un solo archivo
   y aparece parejo en los tres.

   Estructura futura (F9.5/F9.6, no en este commit):
     · plano 00 · QUÉ ES CRUDA firmed (este commit)
     · plano 01 · TRANSLATED    (F9.6)
     · plano 02 · TRANSMISSION  (F9.6)
     · plano 03 · INTERPRETED   (F9.6)
     · plano 04 · THE READ      (F9.6)
     · sticky bar (F9.5) · mecánica de scroll entre planos */

const BASE = 'https://www.thecruda.com'

const META_DESCRIPTION =
  'CRUDA is a communications company. We translate cultures into business.'

export const metadata: Metadata = {
  title: 'Services — CRUDA',
  description: META_DESCRIPTION,
  alternates: { canonical: `${BASE}/services` },
  openGraph: {
    title: 'Services — CRUDA',
    description: META_DESCRIPTION,
    url: `${BASE}/services`,
    type: 'website',
    images: [
      { url: `${BASE}/logo.png`, width: 1080, height: 1080, alt: 'CRUDA' },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services — CRUDA',
    description: META_DESCRIPTION,
    images: [`${BASE}/logo.png`],
  },
}

export default function ServicesPage() {
  return (
    <>
      <HomeWhatCrudaIs />
    </>
  )
}
