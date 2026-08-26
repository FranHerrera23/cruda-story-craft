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
  /* Brief v14 T3 — EEAT premia autores humanos identificables. El
     byline visible dice "Francisco Herrera, Founder, CRUDA"; los
     metadatos ahora también. CRUDA se queda como publisher. */
  authors: [{ name: 'Francisco Herrera', url: 'https://www.thecruda.com/our-founder' }],
  creator: 'Francisco Herrera',
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
      <head>
        {/* EB Garamond + Instrument Sans — cargadas SOLO para
            /architecture-design/about, que usa CSS inline con esas
            fuentes. Ni EB Garamond ni Instrument Sans son parte del
            sistema tipográfico de CRUDA (Archivo + Instrument Serif +
            IBM Plex Mono). Este <link> muere cuando el template de
            About se reemplace.
            Satoshi y DM Sans fueron removidas en B1: globals.css ya
            no las declara y ningún CSS del repo las consume. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            {/* Brief v4 UX §1.8 — skip link como primer elemento del body. */}
            <a href="#main" className="skip-link">Skip to content</a>
            <Nav />
            <main id="main" className="route-transition-wrapper" data-page>
              {children}
            </main>
            <SiteFooter />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
