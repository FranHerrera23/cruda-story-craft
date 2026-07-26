import type { Metadata } from 'next';
import HeroManifesto from "@/components/HeroManifesto";
import PhilosophySection from "@/components/PhilosophySection";
import NarrativeAlignmentSection from "@/components/NarrativeAlignmentSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import OurClientsSection from "@/components/OurClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BothSidesSection from "@/components/BothSidesSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: 'CRUDA — Narrative Strategy for Construction & Architecture Leaders',
  description: 'We help leaders in construction, architecture, and design sound like who they actually are.',
  openGraph: {
    title: 'CRUDA — Narrative Strategy for Construction & Architecture Leaders',
    description: 'We help leaders in construction, architecture, and design sound like who they actually are.',
    url: 'https://www.thecruda.com/architecture-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRUDA — Narrative Strategy for Construction & Architecture Leaders',
    description: 'We help leaders in construction, architecture, and design sound like who they actually are.',
  },
  alternates: {
    canonical: 'https://www.thecruda.com/architecture-design',
  },
};

export default function ArchitectureDesignPage() {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <PhilosophySection />
      <NarrativeAlignmentSection />
      <HowWeWorkSection />
      <WhoThisIsForSection />
      <OurClientsSection />
      <BothSidesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
