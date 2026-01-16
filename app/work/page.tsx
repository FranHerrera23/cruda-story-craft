import type { Metadata } from 'next';
import WorkContent from './WorkContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Work',
  description: 'People who trusted us with their story.',
  openGraph: {
    title: 'Work — CRUDA',
    description: 'People who trusted us with their story.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work — CRUDA',
    description: 'People who trusted us with their story.',
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
