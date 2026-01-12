import HeroManifesto from "@/components/HeroManifesto";
import PhilosophySection from "@/components/PhilosophySection";
import NarrativeAlignmentSection from "@/components/NarrativeAlignmentSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import WhatChangesSection from "@/components/WhatChangesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import OurClientsSection from "@/components/OurClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BothSidesSection from "@/components/BothSidesSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <HeroManifesto />
      
      {/* Section 2: Zeitgeist / Philosophy (white background) */}
      <PhilosophySection />
      
      {/* Section 3: Solution / Narrative Alignment (white background) */}
      <NarrativeAlignmentSection />
      
      {/* Section 4: How It Works (white background) — MOVED UP per V6 */}
      <HowWeWorkSection />
      
      {/* Section 5: Who This Is For (white background) */}
      <WhoThisIsForSection />
      
      {/* Section 6: What Changes / Outcome (white background) */}
      <WhatChangesSection />
      
      {/* Section 7: Our Clients (white background) */}
      <OurClientsSection />
      
      {/* Section 8: We've Been On Both Sides + Logo Marquee (white background) */}
      <BothSidesSection />
      
      {/* Section 9: Testimonials (dark background) */}
      <TestimonialsSection />
      
      {/* Section 10: Final CTA (dark background) */}
      <CTASection />
    </main>
  );
};

export default Index;
