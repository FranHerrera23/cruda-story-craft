import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';
import SelectedWork from '@/components/home/SelectedWork';
import { selectedWorkCards } from '@/content/home/selected-work';

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

export const metadata: Metadata = {
  title: 'CRUDA',
  description: HOME_DESCRIPTION,
  alternates: { canonical: 'https://www.thecruda.com' },
  openGraph: {
    title: 'CRUDA',
    description: HOME_DESCRIPTION,
    url: 'https://www.thecruda.com',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <SelectedWork cards={selectedWorkCards} />
    </>
  );
}
