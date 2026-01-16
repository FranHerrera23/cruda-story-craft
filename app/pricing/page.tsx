import type { Metadata } from 'next';
import PricingContent from './PricingContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Pricing',
  description: '$2,600/month with a 6-month minimum commitment. Most clients stay 1-3 years.',
  openGraph: {
    title: 'Pricing — CRUDA',
    description: '$2,600/month with a 6-month minimum commitment. Most clients stay 1-3 years.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — CRUDA',
    description: '$2,600/month with a 6-month minimum commitment. Most clients stay 1-3 years.',
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
