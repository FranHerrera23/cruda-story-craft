import HeroManifesto from "@/components/HeroManifesto";
import ValuePropsSection from "@/components/ValuePropsSection";
import PhilosophySection from "@/components/PhilosophySection";
import ProofOfWork from "@/components/ProofOfWork";
import BenefitsSection from "@/components/BenefitsSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import TestimonialSection from "@/components/TestimonialSection";
import CredibilitySection from "@/components/CredibilitySection";
import LogoMarquee from "@/components/LogoMarquee";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <ValuePropsSection />
      <PhilosophySection />
      <ProofOfWork />
      <BenefitsSection />
      <BeforeAfterSection />
      <HowWeWorkSection />
      <TestimonialSection />
      <CredibilitySection />
      <LogoMarquee />
      <CTASection />
    </main>
  );
};

export default Index;
