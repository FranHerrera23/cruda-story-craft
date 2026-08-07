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

/* Brief v12 T3 follow-up — Service schema. La ruta ganaba el "sin
   JSON-LD" en la auditoría. Este bloque le dice a la máquina qué
   servicio es, quién lo presta, para quién, dónde y a través de
   qué medio. AreaServed queda global (worked-on en 26 países). */
const SERVICE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://www.thecruda.com/architecture-design#service',
  name: 'CRUDA for Architecture & Design',
  serviceType: 'Brand strategy and narrative infrastructure',
  description:
    'Brand building for founders and studios in architecture, construction and design. CRUDA builds the narrative system that makes their work legible internationally — LinkedIn, pitch decks, positioning, and the content that moves before the founder does.',
  url: 'https://www.thecruda.com/architecture-design',
  provider: {
    '@type': 'Organization',
    name: 'CRUDA',
    url: 'https://www.thecruda.com',
    founder: {
      '@type': 'Person',
      name: 'Francisco Herrera',
      url: 'https://www.thecruda.com/our-founder',
    },
  },
  audience: {
    '@type': 'BusinessAudience',
    audienceType:
      'Founders, principals and CEOs of architecture studios, construction firms and lighting/interior design practices',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Global',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://www.thecruda.com/pricing',
    availability: 'https://schema.org/LimitedAvailability',
  },
};

export default function ArchitectureDesignPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }}
      />
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
    </>
  );
}
