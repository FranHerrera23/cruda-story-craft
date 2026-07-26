import type { Metadata } from 'next';
import NitinPassiCaseStudy from './NitinContent';

export const metadata: Metadata = {
  title: 'Confidential Client',
  description: 'Executive narrative development for a confidential construction and real estate leader.',
  openGraph: {
    title: 'Confidential Client — CRUDA',
    description: 'Executive narrative development for a confidential construction and real estate leader.',
    url: 'https://www.thecruda.com/clients/nitin-passi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Confidential Client — CRUDA',
    description: 'Executive narrative development for a confidential construction and real estate leader.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/clients/nitin-passi',
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NitinPassiPage() {
  return <NitinPassiCaseStudy />;
}
