import type { Metadata } from 'next';
import BookCallContent from './BookCallContent';

export const metadata: Metadata = {
  title: 'Book a Call',
  description: 'Book a discovery call with CRUDA. Narrative strategy for construction and architecture leaders.',
  openGraph: {
    title: 'Book a Call — CRUDA',
    description: 'Book a discovery call with CRUDA. Narrative strategy for construction and architecture leaders.',
    url: 'https://cruda.co/book-call',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book a Call — CRUDA',
    description: 'Book a discovery call with CRUDA. Narrative strategy for construction and architecture leaders.',
  },
  alternates: {
    canonical: 'https://cruda.co/book-call',
  },
};

export default function BookCallPage() {
  return <BookCallContent />;
}
