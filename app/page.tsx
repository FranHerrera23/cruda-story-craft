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
   CRUDA — Home (`/`). Brief F8 §9 (17-sep) · sale de home.

   Cambios sobre v6 F4:

     · TRANSLATED (HomeTranslated) sale de home · vive sólo en
       /process. DATA IS DIRECTIONAL AT BEST (sub-sección de
       TRANSLATED) también sale · principio 05 de /about es la
       única superficie donde se declara.
     · TRANSLATED · Three months (HomeFirst90) sale de home · el
       argumento de tres meses queda anclado en la case study de
       Karen (proof/karen.ts §46 "The three months build the
       system").

   FIT · sub-lede "We do not ask about revenue, industry or
   geography. We ask where the company is standing." se muda a
   /contact (v6 F8 §9.3). El resto de FIT queda en la home.

   WHAT OTHERS · queda como está mientras Fran decide entre
   carousel con imágenes reales (A) o retirar la sección (B).

   Orden vigente · fase C1 (18-sep):
     1.  act 1              NEGRO · phrase mode + crossfade
     2.  act 2              PAPER · fill + soft crossfade
     3.  selected-work
     4.  LEGACY
     5.  WHAT OTHERS        (pendiente decisión A/B)
     6.  WHO IT HOLDS FOR   NUEVO · grilla 2×2 con slots
     7.  FIT                (queda debajo hasta fase C2)
     8.  proof (compact, showHeader false)
     9.  testimonial        NEGRO
     10. close

   Fase C1 · construye HomeWhoItHoldsFor con slots
   `[PENDIENTE · FRAN]`. HomeFit permanece DEBAJO intacto para
   que la home no pierda el registro de observación hasta que
   Fran firme el copy nuevo. Regla 23 aplicada con criterio: el
   retiro está autorizado por el wireframe home §5, pero no
   antes de que exista el reemplazo.

   Fase C2 · cuando el copy esté firmado, entra en
   HomeWhoItHoldsFor y HomeFit sale.

   Dos bloques inversos por página siguen siendo la regla
   (act 1 y testimonial). Ledger #19.

   Los componentes HomeTranslated y HomeFirst90 quedan en el
   repo · el brief pide retirarlos de la home, no eliminarlos.
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
      {/* Fase C1 (18-sep) · HomeWhoItHoldsFor construido con slots
          `[PENDIENTE · FRAN]` para el criterio y las cuatro
          situaciones. Coexiste con HomeFit abajo hasta que Fran
          firme el copy (fase C2 lo retira). */}
      <HomeWhoItHoldsFor />
      <HomeFit />
      {/* showHeader={false} · brief F8 §9.4 retiró HomeFirst90 de
          la home, pero el header del componente compartido `Proof`
          seguía rendereando "The three months build the system"
          en el home. Como la coda del first-90 que lo introducía
          ya no existe, la H2 quedaba huérfana. Bug detectado en
          verificación 18-sep pedida por Fran. La frase queda en
          Karen case study (proof/karen.ts §46) donde pertenece,
          y en /process (variant="full") donde el header sí
          contextualiza la banda de números. */}
      <Proof variant="compact" showHeader={false} />
      <HomeTestimonial />
      <HomeClose />
    </>
  );
}
