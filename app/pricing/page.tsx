import type { Metadata } from 'next';
import PricingContent from './PricingContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'No discovery decks. No quarterly reviews. Just a narrative system that works. $2,600/month.',
  openGraph: {
    title: 'Pricing — CRUDA',
    description: 'No discovery decks. No quarterly reviews. Just a narrative system that works. $2,600/month.',
    url: 'https://cruda.co/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — CRUDA',
    description: 'No discovery decks. No quarterly reviews. Just a narrative system that works. $2,600/month.',
  },
  alternates: {
    canonical: 'https://cruda.co/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingContent />
      <CTASection />
    </>
  );
}
