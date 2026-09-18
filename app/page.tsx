import type { Metadata } from 'next';
import Act1Hero from '@/components/home/Act1Hero';
import Act2WhyNow from '@/components/home/Act2WhyNow';
import SelectedWork from '@/components/home/SelectedWork';
import HomeLegacy from '@/components/home/HomeLegacy';
import HomeWhatOthers from '@/components/home/HomeWhatOthers';
import HomeWhoItHoldsFor from '@/components/home/HomeWhoItHoldsFor';
import HomeFit from '@/components/home/HomeFit';
import Proof from '@/components/Proof';
import HomeTestimonial from '@/components/home/HomeTestimonial';
import HomeClose from '@/components/home/HomeClose';
import HomeChrome from '@/components/home/HomeChrome';
import { selectedWorkCards } from '@/content/home/selected-work';
import '@/components/home/home-layout.css';

/* ------------------------------------------------------------------
   CRUDA — Home (`/`). Brief F9 (18-sep) + Commit 3 (19-sep).

   Estado post-Commit-3 (pre-F9.3 y siguientes):

     Orden vigente:
       1.  act 1              NEGRO · phrase mode + crossfade
       2.  act 2              PAPER · fill + soft crossfade
       3.  selected-work
       4.  LEGACY             (F9.3 rediseña como OUR FOUNDER · negro,
                               retrato a sangre · pendiente)
       5.  WHAT OTHERS        (F9.3 · densidad · pendiente)
       6.  WHO IT HOLDS FOR   grilla 2×2 con slots · F9.3 densidad
                              pendiente (criterio a h-section)
       7.  FIT                pendiente firma Fran (§ver commit)
       8.  proof (compact, showHeader false)
       9.  testimonial        NEGRO (F9.3 le pega LA PRUEBA · pendiente)
       10. close

   Fase F9.4 agrega dos bloques nuevos (QUÉ ES CRUDA en posición 02
   y LOS SERVICIOS en posición 09). No se ejecutan hasta que Fran
   firme el copy.

   Componentes en el repo pero fuera del render:
     · HomeTranslated (retirado en F8 §9.1, dead code)
     · HomeFirst90 (retirado en F8 §9.4 · borrado del repo en
       Commit 3, 19-sep)

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
      <HomeWhatOthers />
      <HomeWhoItHoldsFor />
      <HomeFit />
      {/* showHeader={false} · el header por defecto del componente
          compartido Proof (H2 de Karen) queda para /process donde
          contextualiza la banda de números. En home la banda se
          muestra sola. Ver 3c2285d (Fix del 18-sep). */}
      <Proof variant="compact" showHeader={false} />
      <HomeTestimonial />
      <HomeClose />
    </>
  );
}
