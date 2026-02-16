import type { Metadata } from 'next';
import KarenMannheimCaseStudy from './KarenContent';

export const metadata: Metadata = {
  title: 'Karen Mannheim, TRAZZO Lighting',
  description: 'How we built the narrative system for Lima\'s most respected architectural lighting firm. Thirty years of expertise, zero presence outside Peru — until now.',
  openGraph: {
    title: 'Karen Mannheim, TRAZZO Lighting — CRUDA',
    description: 'How we built the narrative system for Lima\'s most respected architectural lighting firm.',
    url: 'https://cruda.co/clients/karen-mannheim',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karen Mannheim, TRAZZO Lighting — CRUDA',
    description: 'How we built the narrative system for Lima\'s most respected architectural lighting firm.',
  },
  alternates: {
    canonical: 'https://cruda.co/clients/karen-mannheim',
  },
};

export default function KarenMannheimPage() {
  return <KarenMannheimCaseStudy />;
}
