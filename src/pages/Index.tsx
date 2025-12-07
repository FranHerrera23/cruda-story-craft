import HeroManifesto from "@/components/HeroManifesto";
import ProblemSection from "@/components/ProblemSection";
import WhatYouGetSection from "@/components/WhatYouGetSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import ProofOfWork from "@/components/ProofOfWork";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import TestimonialSection from "@/components/TestimonialSection";
import CredibilitySection from "@/components/CredibilitySection";
import LogoMarquee from "@/components/LogoMarquee";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <ProblemSection />
      <WhatYouGetSection />
      <HowWeWorkSection />
      <ProofOfWork />
      <BeforeAfterSection />
      <TestimonialSection />
      <CredibilitySection />
      <LogoMarquee />
      <CTASection />
    </main>
  );
};

export default Index;
