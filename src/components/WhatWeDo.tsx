import { Brain, Pen, LineChart } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "A narrative framework",
    description: "that works across investors, press, and clients"
  },
  {
    icon: Pen,
    title: "A founder story",
    description: "that earns trust before the first meeting"
  },
  {
    icon: LineChart,
    title: "Communication infrastructure",
    description: "that scales without losing your voice"
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-32 px-6 bg-clay/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">
            We don't sell content.
            <br />
            We build reputation systems.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mt-8">
            That means:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="space-y-4 group hover:scale-[1.02] transition-all duration-500 slow-reveal"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-aged-gold" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We work with founders, CEOs, and creators who are good at what they do — but haven't figured out how to communicate it.
          </p>
          
          <p className="text-xl font-serif text-foreground">
            We turn your journey into a story people believe in.
          </p>
          
          <div className="pt-8 space-y-2">
            <p className="text-muted-foreground italic">Our work is quiet.</p>
            <p className="text-muted-foreground italic">Precise.</p>
            <p className="text-muted-foreground italic">Lasting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
