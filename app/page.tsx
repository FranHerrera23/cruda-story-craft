import type { Metadata } from 'next';
import Act1Hero from '@/components/home/Act1Hero';
import Act2WhyNow from '@/components/home/Act2WhyNow';
import SelectedWork from '@/components/home/SelectedWork';
import HomeLegacy from '@/components/home/HomeLegacy';
import HomeWhatOthers from '@/components/home/HomeWhatOthers';
import HomeTestimonial from '@/components/home/HomeTestimonial';
import HomeClose from '@/components/home/HomeClose';
import HomeChrome from '@/components/home/HomeChrome';
import HomeWhatCrudaIs from '@/components/home/HomeWhatCrudaIs';
import HomeServices from '@/components/home/HomeServices';
import { selectedWorkCards } from '@/content/home/selected-work';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). H0 hotfix · 21-sep · Fran F1.

   Orden vigente post-H0:

     1.  act 1                        NEGRO · phrase mode
     2.  QUÉ ES CRUDA                 PAPER
     3.  act 2                        PAPER · fill + crossfade
     4.  selected-work                PAPER
     5.  testimonial (con LA PRUEBA)  NEGRO
     6.  WHAT OTHERS                  PAPER
     7.  OUR FOUNDER                  NEGRO
     8.  LOS SERVICIOS                PAPER
     9.  close                        PAPER

   H0 (21-sep) · Fran F1:
     · WHO IT HOLDS FOR retirada entera de la home. El corte se
       muda a /services (F12). Componente + CSS quedan en el
       repo como dead code hasta F12.
     · Bandas provisorio y modificadores --slot fuera.
     · OUR FOUNDER · PRACTICE y THE TEAM salen (H0). Rename
       .home-legacy__ → .home-founder__ es F11.0.

   El orden final de la home (con WHAT WE DO subiendo a posición
   03) llega en F11.4. Hasta entonces el orden vigente se mantiene
   con WHO IT HOLDS FOR retirada.

   Componentes en el repo fuera del render:
     · HomeWhoItHoldsFor (dead code post-H0)
     · HomeFit (dead code post-Commit-5)
     · HomeTranslated (dead desde F8 §9.1)

   Dos bloques inversos por página · act 1 y testimonial.
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
      <HomeWhatOthers />
      <HomeLegacy />
      <HomeServices />
      <HomeClose />
    </>
  );
}
