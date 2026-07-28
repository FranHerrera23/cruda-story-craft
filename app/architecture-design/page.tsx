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
  title: 'CRUDA for Architecture & Design',
  description:
    'Brand building for founders and studios in architecture, construction and design. The work still doesn\'t speak — now we do it for them.',
  openGraph: {
    title: 'CRUDA for Architecture & Design',
    description:
      'Brand building for founders and studios in architecture, construction and design.',
    url: 'https://www.thecruda.com/architecture-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CRUDA for Architecture & Design',
    description:
      'Brand building for founders and studios in architecture, construction and design.',
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
      {/* Brief v6 T4.6 — cierre explícito con el mismo botón del
          sub-nav sticky (Book a call → Calendly). */}
      <CTASection
        ctaText="Book a call"
        ctaHref="https://calendly.com/cruda-intro/narrative-sparring-live-1"
      />
    </main>
  );
}
