import type { Metadata } from 'next';
import ContactContent from './ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a conversation. 45 minutes. No pitch. No pressure.',
  openGraph: {
    title: 'Contact — CRUDA',
    description: 'Start a conversation. 45 minutes. No pitch. No pressure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact — CRUDA',
    description: 'Start a conversation. 45 minutes. No pitch. No pressure.',
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
