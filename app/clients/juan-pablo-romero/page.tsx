import type { Metadata } from 'next';
import JuanPabloRomeroCaseStudy from './JuanPabloContent';

export const metadata: Metadata = {
  title: 'Juan Pablo Romero',
  description: 'Narrative development for a Latin American construction and real estate executive.',
  openGraph: {
    title: 'Juan Pablo Romero — CRUDA',
    description: 'Narrative development for a Latin American construction and real estate executive.',
    url: 'https://www.thecruda.com/clients/juan-pablo-romero',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Juan Pablo Romero — CRUDA',
    description: 'Narrative development for a Latin American construction and real estate executive.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/clients/juan-pablo-romero',
  },
};

export default function JuanPabloRomeroPage() {
  return <JuanPabloRomeroCaseStudy />;
}
