import HeroManifesto from "@/components/HeroManifesto";
import BeliefSection from "@/components/BeliefSection";
import TheChangeSection from "@/components/TheChangeSection";
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
      {/* Section 1: Hero - White */}
      <HeroManifesto />
      
      {/* Section 2: Belief - Light gray */}
      <BeliefSection />
      
      {/* Section 3: The Change - White */}
      <TheChangeSection />
      
      {/* Section 4: What Changes - Light gray */}
      <WhatChangesSection />
      
      {/* Section 5: How It Works - White */}
      <HowWeWorkSection />
      
      {/* Section 6: Who Trusts Us - Light gray */}
      <WhoTrustsUsSection />
      
      {/* Section 7: Before/After - White */}
      <BeforeAfterSection />
      
      {/* Section 8: Testimonial - Dark */}
      <TestimonialSection />
      
      {/* Section 9: Credibility - Dark */}
      <CredibilitySection />
      
      {/* Section 10: Logo Marquee - White */}
      <LogoMarquee />
      
      {/* Section 11: CTA - Light gray */}
      <CTASection />
    </main>
  );
};

export default Index;
