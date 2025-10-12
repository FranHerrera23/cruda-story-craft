import { Brain, Pen, LineChart } from "lucide-react";

const services = [
  {
    icon: Brain,
    number: "01",
    title: "A narrative framework",
    description: "that works across investors, press, and clients"
  },
  {
    icon: Pen,
    number: "02",
    title: "A founder story",
    description: "that earns trust before the first meeting"
  },
  {
    icon: LineChart,
    number: "03",
    title: "Communication infrastructure",
    description: "that scales without losing your voice"
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-30 px-6 md:px-30 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-display text-section font-semibold mb-8 tracking-tight-2">
            We don't sell content.
            <br />
            We build reputation systems.
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl">
            That means:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-16 lg:gap-20 mb-24">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="space-y-6 slow-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <span className="section-number">{service.number}</span>
                <div className="h-px flex-1 bg-signal-red/20"></div>
              </div>
              
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-center">
            We work with founders, CEOs, and creators who are good at what they do — but haven't figured out how to communicate it.
          </p>
          
          <p className="font-display text-2xl font-medium text-center">
            We turn your journey into a story people believe in.
          </p>
          
          <div className="pt-12 flex flex-col items-center space-y-2 text-center">
            <p className="text-muted-foreground italic text-lg">Our work is quiet.</p>
            <p className="text-muted-foreground italic text-lg">Precise.</p>
            <p className="text-muted-foreground italic text-lg">Lasting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
