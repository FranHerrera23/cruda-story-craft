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
import HomeHowWeHelp from '@/components/home/HomeHowWeHelp';
import HomeNarrativeSparring from '@/components/home/HomeNarrativeSparring';
import PlanesStack from '@/components/motion/PlanesStack';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). F59 · 27-oct · How we help después del hero.

   Orden nuevo (revisado 27-oct · reemplaza la propuesta previa de
   F59 "work antes del newsletter"):

     HomeHero                                      NEGRO · estático · LCP
     <main id="stack">
       01  HomeHowWeHelp                           CREAM · nuevo (NUEVO)
       02  SelectedWork                            PAPER · 3 cols, sin "Their few"
       03  HomeNarrativeSparring                   PAPER · plano (rótulo "Newsletter")
       04  HomeLegacy (Our founder)                NEGRO · plano · copy actual
       05  Act2WhyNow (Marco Aurelio · congelada)  PAPER · propio
       06  HomeClose (NEWSLETTER · cierre)         NEGRO · plano
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
  'CRUDA makes founders and companies famous to the few who matter. We find what makes them exceptional and put it in front of the people who should know.'

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
        <HomeHowWeHelp />
        <SelectedWork />
        <HomeNarrativeSparring />
        <HomeLegacy />
        <Act2WhyNow />
        <HomeClose />
      </main>
    </>
  );
}
