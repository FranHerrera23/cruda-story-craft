import type { Metadata } from 'next';
import Act1Hero from '@/components/home/Act1Hero';
import Act2WhyNow from '@/components/home/Act2WhyNow';
import SelectedWork from '@/components/home/SelectedWork';
import HomeLegacy from '@/components/home/HomeLegacy';
import HomeWhoItHoldsFor from '@/components/home/HomeWhoItHoldsFor';
import HomeWhatOthers from '@/components/home/HomeWhatOthers';
import HomeTestimonial from '@/components/home/HomeTestimonial';
import HomeClose from '@/components/home/HomeClose';
import HomeChrome from '@/components/home/HomeChrome';
import HomeWhatCrudaIs from '@/components/home/HomeWhatCrudaIs';
import HomeServices from '@/components/home/HomeServices';
import { selectedWorkCards } from '@/content/home/selected-work';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Brief F9 · Commit 7 F9.4 (19-sep).

   REORDEN · F9 §2.0 + §2.4 + §2.5 · "un dispositivo por sección"

     1.  act 1                                    NEGRO · phrase mode
     2.  QUÉ ES CRUDA (F9 §2.4)                   PAPER · lectura
     3.  act 2                                    PAPER · fill + crossfade
     4.  selected-work                            PAPER
     5.  testimonial (con LA PRUEBA merged)       NEGRO · F9 §2.7.1
     6.  WHO IT HOLDS FOR (densidad)              PAPER · F9 §2.7.2
     7.  WHAT OTHERS (densidad)                   PAPER · F9 §2.7.3
     8.  OUR FOUNDER (retrato a sangre)           NEGRO · F9 §2.7.4
     9.  LOS SERVICIOS (F9 §2.5 · propuesto)      PAPER · plano 00
    10.  close                                    PAPER

   Alternancia · negro-papel-papel-papel-negro-papel. Dos negros
   nunca adyacentes.

   F9.4 (Commit 7, 19-sep) · dos bloques nuevos:
     · Posición 02 · QUÉ ES CRUDA · copy FIRMADO
     · Posición 09 · LOS SERVICIOS · copy PROPUESTO (marcado
                     visualmente como slot italic-gris hasta firma)

   Nav change · PROCESS → SERVICES (esperando firma A/B/C del
   target del link).

   Estado anterior (Commit 5 F9.3):
     · HomeFit sale del render. HomeWhoItHoldsFor reemplaza.
     · Proof compact absorbed por HomeTestimonial.
     · HomeLegacy · rediseñado como OUR FOUNDER (ground negro).

   Componentes en el repo fuera del render:
     · HomeFit (dead code post-Commit-5)
     · HomeTranslated (dead desde F8 §9.1)
     · HomeFirst90 · borrado del repo en Commit 3

   Dos bloques inversos por página siguen siendo la regla
   (act 1 y testimonial). Ledger #19.
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
      <Act1Hero />
      <HomeWhatCrudaIs />
      <Act2WhyNow />
      <SelectedWork cards={selectedWorkCards} />
      <HomeTestimonial />
      <HomeWhoItHoldsFor />
      <HomeWhatOthers />
      <HomeLegacy />
      <HomeServices />
      <HomeClose />
    </>
  );
}
