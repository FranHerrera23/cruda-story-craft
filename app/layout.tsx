import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navigation } from "@/components/Navigation";
import { ScrollToTop } from "@/components/ScrollToTop";
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://cruda.co'),
  title: {
    default: 'CRUDA — Narrative Strategy for Construction & Architecture Leaders',
    template: '%s — CRUDA',
  },
  description: 'We build narrative systems for real estate, construction, and architecture companies. $2,600/month.',
  keywords: ['narrative strategy', 'construction marketing', 'architecture branding', 'real estate marketing', 'founder narrative'],
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
    url: 'https://cruda.co',
    title: 'CRUDA — Narrative Strategy for Construction & Architecture Leaders',
    description: 'We build narrative systems for real estate, construction, and architecture companies. $2,600/month.',
    siteName: 'CRUDA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRUDA — Narrative Strategy for Construction & Architecture Leaders',
    description: 'We build narrative systems for real estate, construction, and architecture companies. $2,600/month.',
    creator: '@cruda',
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
  icons: {
    icon: '/favicon.ico',
  },
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
      </head>
      <body>
        <Providers>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <ScrollToTop />
            <Navigation />
            <main className="route-transition-wrapper">
              {children}
            </main>
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
