import type { Metadata } from 'next';
import MikeKaedingCaseStudy from './MikeContent';

export const metadata: Metadata = {
  title: 'Mike Kaeding, Norhart',
  description: 'Narrative strategy for a $200M multifamily construction CEO. From local builder to industry voice challenging America\'s housing crisis.',
  openGraph: {
    title: 'Mike Kaeding, Norhart — CRUDA',
    description: 'Narrative strategy for a $200M multifamily construction CEO.',
    url: 'https://www.thecruda.com/clients/mike-kaeding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mike Kaeding, Norhart — CRUDA',
    description: 'Narrative strategy for a $200M multifamily construction CEO.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/clients/mike-kaeding',
  },
};

export default function MikeKaedingPage() {
  return <MikeKaedingCaseStudy />;
}
