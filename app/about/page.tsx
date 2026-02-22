import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About',
  description: 'Trust moved. We followed. Lean by design. Senior by default. Fortune 500 experience, boutique execution.',
  openGraph: {
    title: 'About — CRUDA',
    description: 'Trust moved. We followed. Lean by design. Senior by default. Fortune 500 experience, boutique execution.',
    url: 'https://cruda.co/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — CRUDA',
    description: 'Trust moved. We followed. Lean by design. Senior by default. Fortune 500 experience, boutique execution.',
  },
  alternates: {
    canonical: 'https://cruda.co/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
