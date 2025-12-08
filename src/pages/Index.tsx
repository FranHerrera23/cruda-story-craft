import HeroManifesto from "@/components/HeroManifesto";
import BeliefSection from "@/components/BeliefSection";
import WhatChangesSection from "@/components/WhatChangesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhoTrustsUsSection from "@/components/WhoTrustsUsSection";
import SeeTheWork from "@/components/SeeTheWork";
import CredibilitySection from "@/components/CredibilitySection";
import LogoMarquee from "@/components/LogoMarquee";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <HeroManifesto />
      
      {/* Section 2: Belief (includes Before/After) */}
      <BeliefSection />
      
      {/* Section 3: What Changes */}
      <WhatChangesSection />
      
      {/* Section 4: How It Works */}
      <HowWeWorkSection />
      
      {/* Section 5: Who Trusts Us (Clients) */}
      <WhoTrustsUsSection />
      
      {/* Section 6: See the Work (Projects - NEW) */}
      <SeeTheWork />
      
      {/* Section 7: Credibility + Logo Marquee */}
      <CredibilitySection />
      <LogoMarquee />
      
      {/* Section 8: CTA */}
      <CTASection />
    </main>
  );
};

export default Index;
