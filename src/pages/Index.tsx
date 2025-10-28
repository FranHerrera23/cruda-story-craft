import HeroManifesto from "@/components/HeroManifesto";
import WhatWeDoSection from "@/components/WhatWeDoSection";
// import HowWeWorkSection from "@/components/HowWeWorkSection"; // SAVED FOR LATER: "The Way of CRUDA" - Add to future "Process" or "About" page
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
      {/* SAVED FOR LATER: "The Way of CRUDA" section - add to future "Process" or "About" page */}
      {/* <HowWeWorkSection /> */}
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
