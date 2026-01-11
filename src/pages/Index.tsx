import HeroManifesto from "@/components/HeroManifesto";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import WeveBeenOnBothSidesSection from "@/components/WeveBeenOnBothSidesSection";
import LogoMarquee from "@/components/LogoMarquee";
import PhilosophySection from "@/components/PhilosophySection";
import TheProblemSection from "@/components/TheProblemSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhatChangesSection from "@/components/WhatChangesSection";
import WhoTrustsUsSection from "@/components/WhoTrustsUsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <HeroManifesto />
      
      {/* Section 2: Who This Is For */}
      <WhoThisIsForSection />
      
      {/* Section 3: We've Been On Both Sides */}
      <WeveBeenOnBothSidesSection />
      
      {/* Section 4: Logo Ticker */}
      <LogoMarquee />
      
      {/* Section 5: Philosophy (replaces Trust Shifted) */}
      <PhilosophySection />
      
      {/* Section 6: The Problem (replaces Before/After) */}
      <TheProblemSection />
      
      {/* Section 7: How It Works */}
      <HowWeWorkSection />
      
      {/* Section 8: What Changes */}
      <WhatChangesSection />
      
      {/* Section 9: Who Trusts Us (Clients) */}
      <WhoTrustsUsSection />
      
      {/* Section 10: Final CTA */}
      <CTASection />
    </main>
  );
};

export default Index;
