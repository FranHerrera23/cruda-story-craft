import type { Metadata } from 'next';
import GirishSehgalCaseStudy from './GirishContent';

export const metadata: Metadata = {
  title: 'Girish Sehgal',
  description: 'Executive positioning for a 25-year hospitality leader moving into healthcare. From hotel COO to healthcare strategist.',
  openGraph: {
    title: 'Girish Sehgal — CRUDA',
    description: 'Executive positioning for a 25-year hospitality leader moving into healthcare.',
    url: 'https://cruda.co/clients/girish-sehgal',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girish Sehgal — CRUDA',
    description: 'Executive positioning for a 25-year hospitality leader moving into healthcare.',
  },
  alternates: {
    canonical: 'https://cruda.co/clients/girish-sehgal',
  },
};

export default function GirishSehgalPage() {
  return <GirishSehgalCaseStudy />;
}
