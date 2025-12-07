import HeroManifesto from "@/components/HeroManifesto";
import BeliefSection from "@/components/BeliefSection";
import WhatChangesSection from "@/components/WhatChangesSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhoTrustsUsSection from "@/components/WhoTrustsUsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialSection from "@/components/TestimonialSection";
import CredibilitySection from "@/components/CredibilitySection";
import LogoMarquee from "@/components/LogoMarquee";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <HeroManifesto />
      
      {/* Section 2: Belief */}
      <BeliefSection />
      
      {/* Section 3: What Changes */}
      <WhatChangesSection />
      
      {/* Section 4: How It Works */}
      <HowWeWorkSection />
      
      {/* Section 5: Who Trusts Us */}
      <WhoTrustsUsSection />
      
      {/* Section 6: Before/After */}
      <BeforeAfterSection />
      
      {/* Section 7: Testimonial */}
      <TestimonialSection />
      
      {/* Section 8: Credibility + Logo Marquee */}
      <CredibilitySection />
      <LogoMarquee />
      
      {/* Section 9: CTA */}
      <CTASection />
    </main>
  );
};

export default Index;
