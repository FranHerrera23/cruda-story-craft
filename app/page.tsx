import type { Metadata } from 'next';
import Act1Hero from '@/components/home/Act1Hero';
import Act2WhyNow from '@/components/home/Act2WhyNow';
import SelectedWork from '@/components/home/SelectedWork';
import HomeLegacy from '@/components/home/HomeLegacy';
import HomeWhatOthers from '@/components/home/HomeWhatOthers';
import HomeKarenQuote from '@/components/home/HomeKarenQuote';
import HomeKarenProof from '@/components/home/HomeKarenProof';
import HomeClose from '@/components/home/HomeClose';
import HomeChrome from '@/components/home/HomeChrome';
import HomeWhatCrudaIs from '@/components/home/HomeWhatCrudaIs';
import HomeServices from '@/components/home/HomeServices';
import HomeHero from '@/components/home/HomeHero';
import HomeNarrativeSparring from '@/components/home/HomeNarrativeSparring';
import PlanesStack from '@/components/motion/PlanesStack';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). F58 · 27-oct · Home v2.

   Orden nuevo:

     HomeHero                                      NEGRO · estático · LCP
     <main id="stack">
       01  HomeNarrativeSparring                   PAPER · plano
       02  SelectedWork                            PAPER · propio
       03  HomeLegacy (Our founder)                NEGRO · plano · copy actual
       04  Act2WhyNow (Marco Aurelio · congelada)  PAPER · propio
       05  HomeClose (NEWSLETTER · cierre)         NEGRO · plano
     </main>

   F58 · fuera del render (dead code, se conservan en el repo):
     · Act1Hero                (reemplazado por HomeHero)
     · HomeWhatCrudaIs
     · HomeServices
     · HomeKarenQuote
     · HomeKarenProof
     · HomeWhatOthers

   Act1Hero emitía el inline fit script (FIT_INLINE_SCRIPT) para el
   hero animado · al salir Act1Hero del render, deja de emitirse
   automáticamente. No se toca ningún otro componente.

   Componentes fuera del render (de tandas anteriores, se conservan
   como dead code hasta F12/F13): HomeTestimonial (split),
   HomeWhoItHoldsFor (H0), HomeFit (Commit 5), HomeTranslated
   (F8 §9.1), HomeEssays.
------------------------------------------------------------------- */

const HOME_DESCRIPTION =
  'CRUDA is a communications company. We build narrative and demand systems for founders, companies and cross-border joint ventures.'

const HOME_TITLE = 'CRUDA · Famous to the few who matter'

export const metadata: Metadata = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  alternates: { canonical: 'https://www.thecruda.com' },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    url: 'https://www.thecruda.com',
    type: 'website',
    images: ['https://www.thecruda.com/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    images: ['https://www.thecruda.com/logo.png'],
  },
};

export default function HomePage() {
  // F58 · fuera del render: Act1Hero, HomeWhatCrudaIs, HomeServices,
  // HomeKarenQuote, HomeKarenProof, HomeWhatOthers.
  void Act1Hero; void HomeWhatCrudaIs; void HomeServices;
  void HomeKarenQuote; void HomeKarenProof; void HomeWhatOthers;

  return (
    <>
      <HomeChrome />
      <PlanesStack />
      <HomeHero />
      <main className="stack" id="stack">
        <HomeNarrativeSparring />
        <SelectedWork />
        <HomeLegacy />
        <Act2WhyNow />
        <HomeClose />
      </main>
    </>
  );
}
