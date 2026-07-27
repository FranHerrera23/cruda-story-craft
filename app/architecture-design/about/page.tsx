import type { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About — CRUDA for Architecture & Design',
  description:
    'How CRUDA works with founders and studios in architecture, construction and design.',
  openGraph: {
    title: 'About — CRUDA for Architecture & Design',
    description:
      'How CRUDA works with founders and studios in architecture, construction and design.',
    url: 'https://www.thecruda.com/architecture-design/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — CRUDA for Architecture & Design',
    description:
      'How CRUDA works with founders and studios in architecture, construction and design.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/architecture-design/about',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
