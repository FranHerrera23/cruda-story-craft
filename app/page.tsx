import type { Metadata } from 'next';
import Act1Hero from '@/components/home/Act1Hero';
import Act2WhyNow from '@/components/home/Act2WhyNow';
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
   CRUDA — Home (`/`). Brief 07 definitivo · rebuild 15-sep.

   Dos actos, no uno. El brief 07 (v1 + v2 + b + c) queda anulado
   por Brief 07 definitivo. El escenario único con siete beats se
   parte en dos:
     · Act 1 · hero negro · 400vh · 2 beats · sin imagen
     · Act 2 · why-now paper · 1100vh · 5 beats · seis dibujos
       con mix-blend-mode: multiply sobre el papel

   La meseta (Brief 07 §4). El relleno de cada beat consume solo
   FILL_PORTION del rango; el resto el beat queda quieto y lleno.
   Esa quietud le da tiempo a la frase.

   Orden nuevo:
     1. act 1              ← NEGRO · scrub · hero
     2. act 2              ← PAPER · scrub · why-now
     3. selected-work
     4. translation-in-practice
     5. first-90
     6. proof
     7. testimonial        ← NEGRO · segundo bloque inverso
     8. essays
     9. close

   Dos bloques inversos por página siguen siendo la regla (act 1
   y testimonial). Ledger #19.
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
      <Act1Hero />
      <Act2WhyNow />
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
