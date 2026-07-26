import type { Metadata } from 'next';
import KarenPezetProject from './ProjectContent';

export const metadata: Metadata = {
  title: 'PEZET — TRAZZO Lighting',
  description: 'Three towers by Robert A.M. Stern Architects. How TRAZZO brought Lima\'s most prestigious residential project to life.',
  openGraph: {
    title: 'PEZET — TRAZZO Lighting — CRUDA',
    description: 'Three towers by Robert A.M. Stern Architects.',
    url: 'https://www.thecruda.com/projects/karen-mannheim/pezet',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PEZET — TRAZZO Lighting — CRUDA',
    description: 'Three towers by Robert A.M. Stern Architects.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/projects/karen-mannheim/pezet',
  },
};

export default function PezetPage() {
  return <KarenPezetProject />;
}
