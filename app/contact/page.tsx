import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Tell Us About Your Work — CRUDA',
  description: 'We work with a small number of clients at any given time. Tell us about your work.',
  openGraph: {
    title: 'Tell Us About Your Work — CRUDA',
    description: 'We work with a small number of clients at any given time. Tell us about your work.',
    url: 'https://cruda.co/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tell Us About Your Work — CRUDA',
    description: 'We work with a small number of clients at any given time. Tell us about your work.',
  },
  alternates: {
    canonical: 'https://cruda.co/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
