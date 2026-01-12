import HeroManifesto from "@/components/HeroManifesto";
import PhilosophySection from "@/components/PhilosophySection";
import ProblemSection from "@/components/ProblemSection";
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
      
      {/* Section 2: Philosophy (white background) */}
      <PhilosophySection />
      
      {/* Section 3: Problem (white background) */}
      <ProblemSection />
      
      {/* Section 4: Narrative Alignment (white background) */}
      <NarrativeAlignmentSection />
      
      {/* Section 5: Who This Is For (white background) */}
      <WhoThisIsForSection />
      
      {/* Section 6: What Changes (white background) */}
      <WhatChangesSection />
      
      {/* Section 6: How It Works (white background) */}
      <HowWeWorkSection />
      
      {/* Section 7: Our Clients (white background) */}
      <OurClientsSection />
      
      {/* Section 8: Testimonials (dark background) */}
      <TestimonialsSection />
      
      {/* Section 9: We've Been On Both Sides + Logo Marquee (white background) */}
      <BothSidesSection />
      
      {/* Section 10: Final CTA (dark background) */}
      <CTASection />
    </main>
  );
};

export default Index;
