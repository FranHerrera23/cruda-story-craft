import type { Metadata } from 'next';
import ContactContent from './ContactContent';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Start a Conversation',
  description: 'Book a discovery call with CRUDA. Narrative strategy for construction and architecture leaders.',
  openGraph: {
    title: 'Start a Conversation — CRUDA',
    description: 'Book a discovery call with CRUDA. Narrative strategy for construction and architecture leaders.',
    url: 'https://cruda.co/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Start a Conversation — CRUDA',
    description: 'Book a discovery call with CRUDA. Narrative strategy for construction and architecture leaders.',
  },
  alternates: {
    canonical: 'https://cruda.co/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactContent />
      <CTASection />
    </>
  );
}
