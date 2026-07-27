import type { Metadata } from 'next';
import KarenTrazzoExpansionProject from './ProjectContent';

export const metadata: Metadata = {
  title: 'TRAZZO Expansion — TRAZZO Lighting',
  description: 'International expansion strategy for TRAZZO Lighting. From Peru to Miami to Madrid.',
  openGraph: {
    title: 'TRAZZO Expansion — TRAZZO Lighting — CRUDA',
    description: 'International expansion strategy for TRAZZO Lighting.',
    url: 'https://www.thecruda.com/projects/karen-mannheim/trazzo-expansion',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TRAZZO Expansion — TRAZZO Lighting — CRUDA',
    description: 'International expansion strategy for TRAZZO Lighting.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/projects/karen-mannheim/trazzo-expansion',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function TrazzoExpansionPage() {
  return <KarenTrazzoExpansionProject />;
}
