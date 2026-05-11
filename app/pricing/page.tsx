import type { Metadata } from 'next';
import PricingContent from './PricingContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Pricing — CRUDA',
  description: 'By month six. Everything compounds. $15,600 for a six-month engagement.',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: 'Pricing — CRUDA',
    description: 'By month six. Everything compounds. $15,600 for a six-month engagement.',
    url: 'https://cruda.co/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — CRUDA',
    description: 'By month six. Everything compounds. $15,600 for a six-month engagement.',
  },
  alternates: {
    canonical: 'https://cruda.co/pricing',
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
