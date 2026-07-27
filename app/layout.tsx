import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "@/components/Nav";
import "@/components/case-study.css";
import { ScrollToTop } from "@/components/ScrollToTop";
import Providers from './providers';

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
  authors: [{ name: 'CRUDA' }],
  creator: 'CRUDA',
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
  // Icons come from app/icon.svg (Next.js auto-detects) — no manual declaration.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Satoshi font from Fontshare - Primary */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,600,700&display=swap" rel="stylesheet" />
        {/* DM Sans from Google Fonts - Fallback */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* EB Garamond + Instrument Sans for About page redesign */}
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <Nav />
            <main className="route-transition-wrapper" data-page>
              {children}
            </main>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
