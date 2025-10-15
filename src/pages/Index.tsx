import HeroManifesto from "@/components/HeroManifesto";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ProofOfWork from "@/components/ProofOfWork";
import SeeTheWork from "@/components/SeeTheWork";
import WhoThisIsntFor from "@/components/WhoThisIsntFor";
import FranLetter from "@/components/FranLetter";
import ProcessAndPrice from "@/components/ProcessAndPrice";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroManifesto />
      <WhatWeDo />
      <WhoWeWorkWith />
      <ProofOfWork />
      <SeeTheWork />
      <WhoThisIsntFor />
      <FranLetter />
      <ProcessAndPrice />
      <ContactForm />
    </main>
  );
};

export default Index;
