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

/* Brief v12 T3 follow-up — Offer schema en /pricing.
   El número USD 15,600 / 6 meses viene del title y description
   actuales; si cambia el pricing hay que actualizar acá también. */
const PRICING_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://www.thecruda.com/pricing#service',
      name: 'CRUDA narrative engagement',
      serviceType: 'Brand strategy and narrative infrastructure',
      description:
        'Six-month engagement building the narrative system that makes a founder-expert legible: positioning, LinkedIn, pitch decks, and the pieces that move before they do.',
      provider: {
        '@type': 'Organization',
        name: 'CRUDA',
        url: 'https://www.thecruda.com',
      },
      offers: {
        '@type': 'Offer',
        '@id': 'https://www.thecruda.com/pricing#offer',
        name: 'Six-month engagement',
        price: '15600',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '15600',
          priceCurrency: 'USD',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: 6,
            unitCode: 'MON',
          },
        },
        availability: 'https://schema.org/LimitedAvailability',
        url: 'https://www.thecruda.com/pricing',
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRICING_SCHEMA) }}
      />
      <PricingContent />
      <CTASection ctaText="Apply to Work With Us" ctaHref="/contact" />
    </>
  );
}
