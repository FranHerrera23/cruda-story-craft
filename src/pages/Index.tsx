import HeroManifesto from "@/components/HeroManifesto";
import WhatWeDo from "@/components/WhatWeDo";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ProofOfWork from "@/components/ProofOfWork";
import WhyCRUDA from "@/components/WhyCRUDA";
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
      <WhyCRUDA />
      <FranLetter />
      <ProcessAndPrice />
      <ContactForm />
    </main>
  );
};

export default Index;
