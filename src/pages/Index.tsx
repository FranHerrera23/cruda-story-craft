import HeroManifesto from "@/components/HeroManifesto";
import OpeningSection from "@/components/OpeningSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ProofOfWork from "@/components/ProofOfWork";
import SeeTheWork from "@/components/SeeTheWork";
import WhoThisIsntFor from "@/components/WhoThisIsntFor";
import ProcessAndPrice from "@/components/ProcessAndPrice";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <OpeningSection />
      <WhoWeWorkWith />
      <ProofOfWork />
      <SeeTheWork />
      <WhoThisIsntFor />
      <ProcessAndPrice />
      <ContactForm />
    </main>
  );
};

export default Index;
