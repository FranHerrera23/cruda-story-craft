import type { Metadata } from 'next';
import KarenPorscheProject from './ProjectContent';

export const metadata: Metadata = {
  title: 'Porsche Flagship — TRAZZO Lighting',
  description: 'Porsche showroom in Lima, Peru. Design approved by Porsche Germany. Architectural lighting at the highest standard.',
  openGraph: {
    title: 'Porsche Flagship — TRAZZO Lighting — CRUDA',
    description: 'Porsche showroom in Lima, Peru. Design approved by Porsche Germany.',
    url: 'https://www.thecruda.com/projects/karen-mannheim/porsche-flagship',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Porsche Flagship — TRAZZO Lighting — CRUDA',
    description: 'Porsche showroom in Lima, Peru. Design approved by Porsche Germany.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/projects/karen-mannheim/porsche-flagship',
  },
};

export default function PorscheFlagshipPage() {
  return <KarenPorscheProject />;
}
