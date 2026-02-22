import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Book a Discovery Call — CRUDA',
  description: 'We work with a small number of clients at any given time. Book a discovery call to figure out if there\'s a fit.',
  openGraph: {
    title: 'Book a Discovery Call — CRUDA',
    description: 'We work with a small number of clients at any given time. Book a discovery call to figure out if there\'s a fit.',
    url: 'https://cruda.co/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Discovery Call — CRUDA',
    description: 'We work with a small number of clients at any given time. Book a discovery call to figure out if there\'s a fit.',
  },
  alternates: {
    canonical: 'https://cruda.co/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
