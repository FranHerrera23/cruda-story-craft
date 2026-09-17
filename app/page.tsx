import type { Metadata } from 'next';
import Act1Hero from '@/components/home/Act1Hero';
import Act2WhyNow from '@/components/home/Act2WhyNow';
import SelectedWork from '@/components/home/SelectedWork';
import HomeLegacy from '@/components/home/HomeLegacy';
import HomeTranslated from '@/components/home/HomeTranslated';
import HomeWhatOthers from '@/components/home/HomeWhatOthers';
import HomeFit from '@/components/home/HomeFit';
import HomeFirst90 from '@/components/home/HomeFirst90';
import Proof from '@/components/Proof';
import HomeTestimonial from '@/components/home/HomeTestimonial';
import HomeClose from '@/components/home/HomeClose';
import HomeChrome from '@/components/home/HomeChrome';
import { selectedWorkCards } from '@/content/home/selected-work';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). v6 F4 · orden nuevo (17-sep).

   Cambia el orden y agrega cuatro bloques nuevos. Retira ESSAYS
   de la home (autorizado por Fran, v6 F4 §4.1; /essays sigue
   como página y en el footer). Retira TranslationInPractice (lo
   reemplaza TRANSLATED).

   Orden:
     1.  act 1              NEGRO · scrub · hero (2 beats)
     2.  act 2              PAPER · scrub · why-now (5 beats)
     3.  selected-work
     4.  LEGACY             ← NUEVO · retrato de Fran + lista
                              in-house/agency (v6 F4 §4.2)
     5.  TRANSLATED         ← NUEVO · reemplaza translation-in-practice
                              (v6 F4 §4.3)
     6.  WHAT OTHERS        ← NUEVO · cobertura ganada
                              (v6 F4 §4.4)
     7.  FIT                ← NUEVO · registro de observación
                              (v6 F4 §4.5)
     8.  first-90
     9.  proof (compact)
     10. testimonial        NEGRO · segundo bloque inverso
     11. close

   ESSAYS · sale de la home (v6 F4 §4.1 · instrucción explícita
   de retiro, regla 23 respetada con brief). /essays sigue en el
   footer.

   Dos bloques inversos por página siguen siendo la regla
   (act 1 y testimonial). Ledger #19.
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
      <HomeLegacy />
      <HomeTranslated />
      <HomeWhatOthers />
      <HomeFit />
      <HomeFirst90 />
      <Proof variant="compact" />
      <HomeTestimonial />
      <HomeClose />
    </>
  );
}
