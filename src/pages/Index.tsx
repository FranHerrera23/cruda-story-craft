import HeroManifesto from "@/components/HeroManifesto";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import WeveBeenOnBothSidesSection from "@/components/WeveBeenOnBothSidesSection";
import LogoMarquee from "@/components/LogoMarquee";
import TrustShiftedSection from "@/components/TrustShiftedSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhatChangesSection from "@/components/WhatChangesSection";
import WhoTrustsUsSection from "@/components/WhoTrustsUsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <HeroManifesto />
      
      {/* Section 2: Who This Is For (NEW) */}
      <WhoThisIsForSection />
      
      {/* Section 3: We've Been On Both Sides (MOVED UP) */}
      <WeveBeenOnBothSidesSection />
      
      {/* Section 4: Logo Ticker (MOVED UP) */}
      <LogoMarquee />
      
      {/* Section 5: Trust Shifted */}
      <TrustShiftedSection />
      
      {/* Section 6: How It Works */}
      <HowWeWorkSection />
      
      {/* Section 7: What Changes */}
      <WhatChangesSection />
      
      {/* Section 8: Who Trusts Us (Clients) */}
      <WhoTrustsUsSection />
      
      {/* Section 9: Final CTA */}
      <CTASection />
    </main>
  );
};

export default Index;
