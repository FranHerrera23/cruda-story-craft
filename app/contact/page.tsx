import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact — CRUDA',
  description:
    'Book a 45-minute conversation, or write hello@thecruda.com. No pitch, no urgency.',
  openGraph: {
    title: 'Contact — CRUDA',
    description:
      'Book a 45-minute conversation, or write hello@thecruda.com.',
    url: 'https://www.thecruda.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — CRUDA',
    description:
      'Book a 45-minute conversation, or write hello@thecruda.com.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/contact',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
