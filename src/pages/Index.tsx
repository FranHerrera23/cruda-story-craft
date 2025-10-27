import HeroManifesto from "@/components/HeroManifesto";
import OpeningSection from "@/components/OpeningSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import CredibilitySection from "@/components/CredibilitySection";
import ProofOfWork from "@/components/ProofOfWork";
import SeeTheWork from "@/components/SeeTheWork";
import PricingSection from "@/components/PricingSection";
import WhereWeAddValue from "@/components/WhereWeAddValue";
import EmotionalHook from "@/components/EmotionalHook";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <OpeningSection />
      <WhoWeWorkWith />
      <CredibilitySection />
      <ProofOfWork />
      <div style={{ marginBottom: '120px' }}>
        <SeeTheWork />
      </div>
      <PricingSection />
      <div style={{ marginTop: '120px' }}>
        <WhereWeAddValue />
      </div>
      <EmotionalHook />
      <FAQSection />
    </main>
  );
};

export default Index;
