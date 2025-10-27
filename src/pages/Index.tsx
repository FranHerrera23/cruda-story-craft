import HeroManifesto from "@/components/HeroManifesto";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import CredibilitySection from "@/components/CredibilitySection";
import PricingSection from "@/components/PricingSection";
import ProofOfWork from "@/components/ProofOfWork";
import SeeTheWork from "@/components/SeeTheWork";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <WhatWeDoSection />
      <HowWeWorkSection />
      <WhoWeWorkWith />
      <CredibilitySection />
      <PricingSection />
      <ProofOfWork />
      <SeeTheWork />
      <FAQSection />
    </main>
  );
};

export default Index;
