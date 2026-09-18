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
import { selectedWorkCards } from '@/content/home/selected-work';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Brief F9 · Commit 5 F9.3 (19-sep).

   REORDEN · F9 §2.0 + §2.7 "un dispositivo por sección"

     1.  act 1                                    NEGRO · phrase mode
     2.  act 2                                    PAPER · fill + crossfade
     3.  selected-work                            PAPER
     4.  testimonial (con LA PRUEBA merged)       NEGRO · F9 §2.7.1
     5.  WHO IT HOLDS FOR (densidad)              PAPER · F9 §2.7.2
     6.  WHAT OTHERS (densidad)                   PAPER · F9 §2.7.3
     7.  OUR FOUNDER (retrato a sangre)           NEGRO · F9 §2.7.4
     8.  close                                    PAPER

   Alternancia · negro-papel-papel-papel-negro. Dos negros
   nunca adyacentes.

   Cambios respecto del estado anterior:
     · HomeFit sale del render. El grid nuevo (HomeWhoItHoldsFor)
       reemplaza el registro de observación. HomeFit queda en el
       repo como dead code (fase C1 pattern).
     · Proof compact absorbed por HomeTestimonial. Las tres
       cifras viven ahora dentro del mismo bloque negro que la
       cita de Karen · F9 §2.7.1 · resuelve el huérfano del
       commit 3c2285d.
     · HomeLegacy · rediseñado como OUR FOUNDER. Cambio de ground
       (papel → negro), rótulo, retrato a sangre, jerarquía.

   F9.4 (commit siguiente) agrega los dos bloques nuevos:
     · Posición 02 · QUÉ ES CRUDA (papel)
     · Posición 09 · LOS SERVICIOS (papel)
   Y cambia el nav a SERVICES.

   Componentes en el repo fuera del render:
     · HomeFit (dead code post-Commit-5)
     · HomeTranslated (dead desde F8 §9.1)
     · HomeFirst90 · borrado del repo en Commit 3

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
      <HomeTestimonial />
      <HomeWhoItHoldsFor />
      <HomeWhatOthers />
      <HomeLegacy />
      <HomeClose />
    </>
  );
}
