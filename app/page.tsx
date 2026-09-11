import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';
import WhyNow from '@/components/home/WhyNow';
import SelectedWork from '@/components/home/SelectedWork';
import InsideCruda from '@/components/home/InsideCruda';
import HomeChrome from '@/components/home/HomeChrome';
import { selectedWorkCards } from '@/content/home/selected-work';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Brief 10-sep.

   Estructura:
     hero · why-now · selected-work · inside-cruda · essays · cierre

   Este archivo cablea las secciones. Cada una vive en su propio
   componente con su propio CSS. La costura entre secciones es
   cambio de fondo a sangre — sin border-top, sin <hr>, sin margen
   entre secciones (§4 del brief).

   Hero v1 preservado en content/orphaned/home-hero-v1.md.
   home.css retirado — sus estilos vivían al servicio del hero v1
   y ninguno se reusa acá.
------------------------------------------------------------------- */

const HOME_DESCRIPTION =
  'CRUDA builds the narrative that founder-led companies need at the point where what they built stopped explaining itself.'

/* Title de la home. "CRUDA" solo era genérico en SERPs y en previews
   de link compartido (Fran flag post-§2). Sub-línea con la marca
   adelante, punto medio, y "Narrative for founder-led companies" —
   44 char, hace eco del H1 sin repetirlo. Si cambia, cambia acá y en
   openGraph.title juntos. */
const HOME_TITLE = 'CRUDA · Narrative for founder-led companies'

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: 'https://www.thecruda.com' },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: 'https://www.thecruda.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HomeChrome />
      <HomeHero />
      <WhyNow />
      <SelectedWork cards={selectedWorkCards} />
      <InsideCruda />
    </>
  );
}
