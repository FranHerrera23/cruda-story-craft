import type { Metadata } from 'next';
import WorkContent from './WorkContent';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Narrative systems for construction, architecture, and design firms doing $20M–$500M.',
  openGraph: {
    title: 'Work — CRUDA',
    description: 'Narrative systems for construction, architecture, and design firms doing $20M–$500M.',
    url: 'https://www.thecruda.com/work',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Work — CRUDA',
    description: 'Narrative systems for construction, architecture, and design firms doing $20M–$500M.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/work',
  },
};

export default function WorkPage() {
  return <WorkContent />;
}
