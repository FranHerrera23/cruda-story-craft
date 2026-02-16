import type { Metadata } from 'next';
import AboutContent from './AboutContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description: 'Lean by design. Senior by default. Fortune 500 experience, boutique execution.',
  openGraph: {
    title: 'About — CRUDA',
    description: 'Lean by design. Senior by default. Fortune 500 experience, boutique execution.',
    url: 'https://cruda.co/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — CRUDA',
    description: 'Lean by design. Senior by default. Fortune 500 experience, boutique execution.',
  },
  alternates: {
    canonical: 'https://cruda.co/about',
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      <CTASection />
    </>
  );
}
