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

/* Brief v2 Task 5 — Organization schema site-wide.
   Emitido en el root layout, dentro del <head>. Todas las páginas
   heredan la referencia por @id.

   foundingDate: "2024-02" — regla dura del brief. La LinkedIn company
   page está desalineada (dice 2023). Un dato inconsistente entre
   fuentes es lo que un entity resolver marca como conflicto.

   sameAs: cuentas corporativas de CRUDA. LinkedIn confirmada; X e
   Instagram con placeholder ({handle}) hasta que Fran confirme
   handles reales. */
const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.thecruda.com/#organization',
  name: 'CRUDA',
  url: 'https://www.thecruda.com',
  logo: 'https://www.thecruda.com/logo.png',
  foundingDate: '2024-02',
  founder: { '@id': 'https://www.thecruda.com/our-founder#person' },
  sameAs: [
    'https://www.linkedin.com/company/thecrudaspace',
  ],
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

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thecruda.com'),
  // No template — page-level titles are already qualified with " | CRUDA"
  // where they need to be, and the old "%s — CRUDA" template was doubling
  // brand on routes that already carried it.
  title: {
    default: 'CRUDA — Find the essence. Strip the bullshit.',
    template: '%s',
  },
  description:
    'CRUDA builds people. Companies follow. Nobody buys the company — they buy you.',
  // meta-keywords removed per parche P4 — contradicts the holding thesis.
  /* Brief v2 Task 6 + A.1.2 — public name "Fran Herrera" en todo
     metadato visible. "Francisco" solo dentro del alternateName del
     Person schema (/our-founder). Los meta author/creator + los
     bylines de essay/case study + alt text + figcaption ya migraron
     a "Fran Herrera" (A.1.2b). Publisher se queda como CRUDA
     (organización). */
  authors: [{ name: 'Fran Herrera', url: 'https://www.thecruda.com/our-founder' }],
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
    title: 'CRUDA — Find the essence. Strip the bullshit.',
    description:
      'CRUDA builds people. Companies follow. Nobody buys the company — they buy you.',
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
    title: 'CRUDA — Find the essence. Strip the bullshit.',
    description:
      'CRUDA builds people. Companies follow. Nobody buys the company — they buy you.',
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
            {/* Brief v4 UX §1.8 — skip link como primer elemento del body. */}
            <a href="#main" className="skip-link">Skip to content</a>
            <Nav />
            {/* F3.1 — PageShell intercepta clicks internos y dispara
                document.startViewTransition en browsers que la soportan
                (Chrome/Edge/Safari). El fade out+in vive en CSS bajo
                ::view-transition-old(root) y ::view-transition-new(root). */}
            <PageShell>
              <main id="main" className="route-transition-wrapper" data-page>
                {children}
              </main>
            </PageShell>
            <SiteFooter />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
