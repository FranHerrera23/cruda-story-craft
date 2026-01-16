import type { Metadata } from 'next';
import AboutContent from './AboutContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About',
  description: 'Lean by design. Senior by default. No junior teams. No account managers. No handoffs.',
  openGraph: {
    title: 'About — CRUDA',
    description: 'Lean by design. Senior by default.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — CRUDA',
    description: 'Lean by design. Senior by default.',
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
