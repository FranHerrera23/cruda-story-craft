import type { Metadata } from 'next';
import Act1Hero from '@/components/home/Act1Hero';
import Act2WhyNow from '@/components/home/Act2WhyNow';
import SelectedWork from '@/components/home/SelectedWork';
/* F11.3 · SelectedWork es Server Component sin datos externos.
   Los 9 casos viven inline en el componente. La ex-fuente
   `@/content/home/selected-work.ts` queda como dead code hasta
   cleanup posterior. */
import HomeLegacy from '@/components/home/HomeLegacy';
import HomeWhatOthers from '@/components/home/HomeWhatOthers';
import HomeKarenQuote from '@/components/home/HomeKarenQuote';
import HomeKarenProof from '@/components/home/HomeKarenProof';
import HomeClose from '@/components/home/HomeClose';
import HomeChrome from '@/components/home/HomeChrome';
import HomeWhatCrudaIs from '@/components/home/HomeWhatCrudaIs';
import HomeServices from '@/components/home/HomeServices';
import PlanesStack from '@/components/motion/PlanesStack';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). F11.4 · 21-sep · autónomo.

   WHAT WE DO sube a posición 03. Orden vigente:

     hero                                          NEGRO · propio
     <main id="stack">
       01  WHAT CRUDA IS                           PAPER · plano
       02  #act2 · WHY NOW                         PAPER · propio
       03  WHAT WE DO                              PAPER · plano
       04  SELECTED WORK                           PAPER · propio
       05  KAREN · CITA                            NEGRO · plano
       06  LA PRUEBA                               NEGRO · plano
       07  WHAT OTHERS                             PAPER · plano
       08  OUR FOUNDER                             NEGRO · plano
       09  CONTACT                                 PAPER · plano
     </main>

   Componentes fuera del render, se conservan como dead code hasta
   F12/F13: HomeTestimonial (split), HomeWhoItHoldsFor (H0),
   HomeFit (Commit 5), HomeTranslated (F8 §9.1), HomeEssays.
------------------------------------------------------------------- */

const HOME_DESCRIPTION =
  'CRUDA is a communications company. We translate cultures into business.'

const HOME_TITLE = 'CRUDA · Communications for founder-led companies'

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
      <PlanesStack />
      <Act1Hero />
      <main className="stack" id="stack">
        <HomeWhatCrudaIs />
        <Act2WhyNow />
        <HomeServices />
        <SelectedWork />
        <HomeKarenQuote />
        <HomeKarenProof />
        <HomeWhatOthers />
        <HomeLegacy />
        <HomeClose />
      </main>
    </>
  );
}
