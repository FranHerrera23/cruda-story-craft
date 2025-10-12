import { Brain, Pen, LineChart } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Narrative Strategy",
    description: "We shape the story before the content. Your message becomes a system, not a series of posts."
  },
  {
    icon: Pen,
    title: "Founder Psychology",
    description: "We act like biographers. Deep interviews that uncover what you're actually building — and why it matters."
  },
  {
    icon: LineChart,
    title: "Communication Systems",
    description: "Long-term positioning you can trust. We build reputation arcs, not campaigns."
  }
];

const WhatWeDo = () => {
  return (
    <section className="py-32 px-6 bg-bone">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">
            We don't sell content.
            <br />
            We build reputation systems.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="space-y-4 group hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <service.icon className="w-8 h-8 text-rust" strokeWidth={1.5} />
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

        <div className="mt-20 text-center">
          <p className="text-xl md:text-2xl text-ink/70 italic max-w-3xl mx-auto">
            "We don't turn founders into influencers. We turn them into narrative leaders."
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
