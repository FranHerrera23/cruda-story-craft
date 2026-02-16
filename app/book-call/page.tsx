import type { Metadata } from 'next';
import BookCallContent from './BookCallContent';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: '45 minutes. No pitch. No pressure. Let\'s talk about your story.',
  openGraph: {
    title: 'Book a Call — CRUDA',
    description: '45 minutes. No pitch. No pressure. Let\'s talk about your story.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Call — CRUDA',
    description: '45 minutes. No pitch. No pressure. Let\'s talk about your story.',
  },
};

export default function BookCallPage() {
  return <BookCallContent />;
}
