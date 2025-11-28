import HeroManifesto from "@/components/HeroManifesto";
import ValuePropsSection from "@/components/ValuePropsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProofOfWork from "@/components/ProofOfWork";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialSection from "@/components/TestimonialSection";
import CredibilitySection from "@/components/CredibilitySection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <ValuePropsSection />
      <PhilosophySection />
      <ProofOfWork />
      <BenefitsSection />
      <TestimonialSection />
      <CredibilitySection />
      <CTASection />
    </main>
  );
};

export default Index;
