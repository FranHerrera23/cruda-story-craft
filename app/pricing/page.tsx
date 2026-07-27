import type { Metadata } from 'next';
import PricingContent from './PricingContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Pricing — CRUDA',
  description: 'By month six. Everything compounds. $15,600 for a six-month engagement.',
  openGraph: {
    title: 'Pricing — CRUDA',
    description: 'By month six. Everything compounds. $15,600 for a six-month engagement.',
    url: 'https://www.thecruda.com/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — CRUDA',
    description: 'By month six. Everything compounds. $15,600 for a six-month engagement.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/pricing',
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingContent />
      <CTASection ctaText="Apply to Work With Us" ctaHref="/contact" />
    </>
  );
}
