import type { Metadata } from 'next';
import OpeningAct from '@/components/home/OpeningAct';
import SelectedWork from '@/components/home/SelectedWork';
import TranslationInPractice from '@/components/home/TranslationInPractice';
import HomeFirst90 from '@/components/home/HomeFirst90';
import Proof from '@/components/Proof';
import HomeTestimonial from '@/components/home/HomeTestimonial';
import HomeEssays from '@/components/home/HomeEssays';
import HomeClose from '@/components/home/HomeClose';
import HomeChrome from '@/components/home/HomeChrome';
import { selectedWorkCards } from '@/content/home/selected-work';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Brief 07 v2 · rebuild 15-sep.

   El hero y `every-company` dejan de ser dos secciones. Se
   reemplazan por un solo escenario oscuro con siete beats
   (`OpeningAct`), que ocupa la apertura entera. Estructura de
   dos actos: negro conduce, papel demuestra.

   Orden nuevo:
     1. opening-act        ← NEGRO · scrub · siete beats
     2. selected-work
     3. translation-in-practice
     4. first-90
     5. proof
     6. testimonial        ← NEGRO · segundo bloque inverso
     7. essays
     8. close

   Dos bloques inversos por página (§P5.bis del brief) — la
   apertura y la voz del cliente. Regla lockeada nueva en el
   ledger. Ver docs/decisions.md.

   Cambio de fondo a sangre entre secciones. La transición del
   escenario a selected-work es el pivot de la página.
------------------------------------------------------------------- */

const HOME_DESCRIPTION =
  'CRUDA builds the narrative that founder-led companies need at the point where what they built stopped explaining itself.'

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
      <OpeningAct />
      <SelectedWork cards={selectedWorkCards} />
      <TranslationInPractice />
      <HomeFirst90 />
      <Proof variant="compact" />
      <HomeTestimonial />
      <HomeEssays />
      <HomeClose />
    </>
  );
}
