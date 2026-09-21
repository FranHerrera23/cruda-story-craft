import type { Metadata } from 'next';
import { Archivo, Instrument_Serif } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import "@/components/case-study.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import Providers from './providers';
import PageShell from "@/components/PageShell";
import RevealScroll from "@/components/RevealScroll";
import SmoothScroll from "@/components/SmoothScroll";
import LineReveals from "@/components/LineReveals";
import Loader from "@/components/Loader";

/* Motion v3 §9 + Motion v4 §1 — inline script en el <head> que
   corre antes del primer paint.

   1 · Loader gate · lee sessionStorage y setea data-loader='skip'
       en <html> si el loader ya se mostró en esta sesión. CSS
       gate en globals.css (html[data-loader="skip"] .loader
       { display:none }) corta el render antes de pintar. Sin este
       script el loader flashea 800ms en cada reload dentro de la
       misma pestaña.

   2 · Motion v4 §1 no-flash · agrega la clase `js` al
       documentElement. acts.css usa `.js` como gate para ocultar
       todos los beats menos el 01 de cada acto ANTES del primer
       paint. Sin JS la clase nunca se setea y el CSS default
       deja los siete beats con visibility:visible — el copy es
       legible en HTML servido (Motion v4 §1 punto 3). Con JS,
       la clase está antes de que se pinte, así que cero flash
       de siete beats apilados en la hidratación.

   Regla lockeada — ver docs/decisions.md
   #classname-nunca-asignacion. La clase se agrega con
   `className +=` (append), NUNCA con `className =` (asignación).
   next/font (Archivo, Instrument Serif) inyecta sus CSS variables
   como clases autogeneradas en <html> vía el layout server
   component. Sobre-escribir className las pisa y todo el sitio
   cae a la fuente default del sistema sin previo aviso, sin
   error en consola. Alternativa si sólo se necesita un flag y
   no una clase real: `document.documentElement.dataset.foo`
   (así hace el loader gate de arriba). */
const LOADER_GATE_SCRIPT = `
try {
  if (sessionStorage.getItem('cruda-loader-shown') === '1') {
    document.documentElement.dataset.loader = 'skip';
  } else {
    document.documentElement.dataset.loader = 'show';
  }
} catch (e) {
  document.documentElement.dataset.loader = 'show';
}
document.documentElement.className += ' js';
`.trim();

/* Organization schema site-wide · F16.2 · 21-sep · autónomo.
   Emitido en el root layout, dentro del <head>. Todas las páginas
   heredan la referencia por @id.

   foundingDate: "2024-02" · regla dura del brief.

   sameAs: VACÍO (brief §2 F16.2 + §7). Fran entrega las URLs
   confirmadas de LinkedIn / X / Instagram · hasta que lleguen,
   el array queda vacío para no publicar handles no verificados.
   El campo se conserva en el objeto para que la forma del schema
   no cambie cuando Fran las agregue. */
const ORG_SAMEAS: readonly string[] = []

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.thecruda.com/#organization',
  name: 'CRUDA',
  url: 'https://www.thecruda.com',
  logo: 'https://www.thecruda.com/logo.png',
  foundingDate: '2024-02',
  founder: { '@id': 'https://www.thecruda.com/about#person' },
  sameAs: ORG_SAMEAS,
} as const

/* Instrument Serif — display face de las páginas-declaración (home,
   índices de /resources, /contact, /architecture-design/about).
   Solo weight 400. next/font la self-hostea: cero request externo,
   cero layout shift. Se expone como CSS variable --font-instrument-serif
   para que los tokens --serif la consuman via var(). */
const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-instrument-serif',
});

/* Archivo — sans/UI face del sistema. Se usa en H1 de piezas
   (essay, case study, sports, our-founder), H2/H3 de todo, body y
   cards. Pesos declarados en CSS: 400, 500, 600, 700. No cargamos
   800/900 porque nada los pide — si algún componente los declarara
   sin cargarlos, el browser sintetizaría el bold y se vería mal.
   Se expone como --font-archivo para que --sans lo consuma. */
const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-archivo',
});

/* F18.5 · 21-sep · autónomo · brief §F18.5.
   La lista "Mondelez, AB InBev…" se leía como listado de clientes
   de CRUDA y confundía al buyer. Se retira del twitter/og
   descriptions y del meta description site-wide. La lista de
   trabajo previo de Fran sigue viva en OUR FOUNDER (home) y en
   "Who runs it" (/about) donde está en contexto. */
const SITE_DESCRIPTION =
  'CRUDA is a communications company. We translate cultures into business.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thecruda.com'),
  // No template — page-level titles are already qualified with " | CRUDA"
  // where they need to be, and the old "%s — CRUDA" template was doubling
  // brand on routes that already carried it.
  title: {
    default: 'CRUDA',
    template: '%s',
  },
  description: SITE_DESCRIPTION,
  // meta-keywords removed per parche P4 — contradicts the holding thesis.
  /* Brief v2 Task 6 + A.1.2 — public name "Fran Herrera" en todo
     metadato visible. "Francisco" solo dentro del alternateName del
     Person schema (/our-founder). Los meta author/creator + los
     bylines de essay/case study + alt text + figcaption ya migraron
     a "Fran Herrera" (A.1.2b). Publisher se queda como CRUDA
     (organización). */
  authors: [{ name: 'Fran Herrera', url: 'https://www.thecruda.com/about' }],
  creator: 'Fran Herrera',
  publisher: 'CRUDA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thecruda.com',
    title: 'CRUDA',
    description: SITE_DESCRIPTION,
    siteName: 'CRUDA',
    images: [
      {
        url: 'https://www.thecruda.com/logo.png',
        width: 1080,
        height: 1080,
        alt: 'CRUDA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRUDA',
    description: SITE_DESCRIPTION,
    images: ['https://www.thecruda.com/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Brief v6 T7 — Google Search Console site verification. Next renders
  // this as <meta name="google-site-verification"> on every page.
  verification: {
    google: 'BhGFy4Z2dXgjoS_GqqxtGLy4oZPmUE1CYt-0uvgioXk',
  },
  // Icons come from app/icon.svg (Next.js auto-detects) — no manual declaration.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${archivo.variable}`}>
      <head>
        {/* Motion v3 §9 — inline script para el gate del loader. Corre
            antes de pintar el <body>, evita el flash en cada reload
            dentro de la misma sesión. Ver LOADER_GATE_SCRIPT arriba. */}
        <script
          dangerouslySetInnerHTML={{ __html: LOADER_GATE_SCRIPT }}
        />
      </head>
      {/* E1 paso 3 — <link> a EB Garamond + Instrument Sans + preconnects
          a Google Fonts eliminados. About reemplazada, no queda página
          que las consuma. El sistema tipográfico completo se carga via
          next/font (Archivo + Instrument Serif) — cero requests
          externos, cero preconnect a fonts.googleapis.com / gstatic. */}
      <body>
        {/* Task 5 — Organization JSON-LD site-wide. Emitted en el
            <body> (Next.js no permite <script> arbitrarios en <head>
            desde un layout server component). Google levanta el
            JSON-LD desde donde esté. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            {/* Motion v3 §9 — Loader de primera visita de sesión.
                Va como primer nodo del árbol client para que renderee
                en el primer paint. Ver Loader.tsx. */}
            <Loader />
            {/* Brief v4 UX §1.8 — skip link como primer elemento del body. */}
            <a href="#main" className="skip-link">Skip to content</a>
            <Nav />
            {/* F3.1 — PageShell intercepta clicks internos y dispara
                document.startViewTransition en browsers que la soportan
                (Chrome/Edge/Safari). El fade out+in vive en CSS bajo
                ::view-transition-old(root) y ::view-transition-new(root).

                Motion §3.1 — PageShell aplica .page-root al wrapper y
                toggle .ready al montarse: la carga de página fade a
                opacity 1 usando --t-3 / --ease. Sin JS, .page-root
                queda a opacity 1 por default (scripting:none). */}
            <PageShell>
              <main id="main">
                {children}
              </main>
            </PageShell>
            {/* Motion v3 §2 (14-sep) · LineReveals monta antes que
                RevealScroll. Splitear los títulos es una precondición
                del orquestador — RevealScroll espera el evento
                `cruda:lines-ready` que dispara LineReveals cuando
                terminó de partir todos los `[data-reveal="lines"]`. */}
            <LineReveals />
            <RevealScroll />
            <SmoothScroll />
            <SiteFooter />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
