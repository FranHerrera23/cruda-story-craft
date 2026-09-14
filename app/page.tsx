import type { Metadata } from 'next';
import HomeHero from '@/components/home/HomeHero';
import EveryCompany from '@/components/home/EveryCompany';
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
   CRUDA — Home (`/`). Brief 04 · rebuild 14-sep + Addendum A §4.

   Orden nuevo (Addendum §4.4):
     1. hero               ← + línea TRANSLATED bajo el lede
     2. every-company      ← ex why-now, copy y mecánica nuevas
     3. selected-work
     4. translation-in-practice  ← NUEVO, reemplaza inside-cruda
     5. first-90           ← eyebrow TRANSLATED · Three months
     6. proof              ← NUEVO, densidad compact
     7. testimonial        ← NEGRO
     8. essays             ← ex Read
     9. close

   inside-cruda retirado entero. La definición ya la cubre la línea
   TRANSLATED del hero; la fila `The structure` se mudó a /about §04;
   la bio de Fran vive solo en /about.

   Cambio de fondo a sangre entre secciones — sin border-top, sin
   <hr>, sin margen entre secciones (§4 del brief 10-sep). El único
   inverso de la home es `testimonial`.
------------------------------------------------------------------- */

const HOME_DESCRIPTION =
  'CRUDA builds the narrative that founder-led companies need at the point where what they built stopped explaining itself.'

/* Title de la home. "CRUDA" solo era genérico en SERPs y en previews
   de link compartido (Fran flag post-§2). Sub-línea con la marca
   adelante, punto medio, y "Narrative for founder-led companies" —
   44 char, hace eco del H1 sin repetirlo. Si cambia, cambia acá y en
   openGraph.title juntos. */
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
      <HomeHero />
      <EveryCompany />
      <SelectedWork cards={selectedWorkCards} />
      <TranslationInPractice />
      <HomeFirst90 />
      {/* Proof en densidad compact — tres números en fila. La
          densidad full vive en /process. Una sola fuente de datos.
          showHeader default true — el encabezado 'The three months
          build the system' entra como pie de la coda del first-90. */}
      <Proof variant="compact" />
      <HomeTestimonial />
      <HomeEssays />
      <HomeClose />
    </>
  );
}
