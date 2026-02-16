import type { Metadata } from 'next';
import WorkContent from './WorkContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Narrative systems for construction, architecture, and design firms doing $20M–$500M.',
  openGraph: {
    title: 'Work — CRUDA',
    description: 'Narrative systems for construction, architecture, and design firms doing $20M–$500M.',
    url: 'https://cruda.co/work',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work — CRUDA',
    description: 'Narrative systems for construction, architecture, and design firms doing $20M–$500M.',
  },
  alternates: {
    canonical: 'https://cruda.co/work',
  },
};

export default function WorkPage() {
  return (
    <>
      <WorkContent />
      <CTASection />
    </>
  );
}
