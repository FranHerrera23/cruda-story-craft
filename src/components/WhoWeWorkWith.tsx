import { Building2, Stethoscope, Trophy } from "lucide-react";

const verticals = [
  {
    icon: Building2,
    title: "Developers & Architects",
    subtitle: "who shape cities"
  },
  {
    icon: Stethoscope,
    title: "Hospitality, Healthcare & Finance Leaders",
    subtitle: "who shape care"
  },
  {
    icon: Trophy,
    title: "Athletes & Investors",
    subtitle: "who shape belief"
  }
];

const WhoWeWorkWith = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 tracking-tighter">
            We only work with 3 types of builders:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {verticals.map((vertical, index) => (
            <div 
              key={index}
              className="text-center space-y-4 p-8 border border-border/30 hover:border-aged-gold/30 transition-all duration-500 liquid-glow"
            >
              <div className="flex justify-center mb-4">
                <vertical.icon className="w-10 h-10 text-slate" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-serif tracking-tight">
                {vertical.title}
              </h3>
              <p className="text-muted-foreground italic">
                {vertical.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Different crafts. Same challenge:
            <br />
            <span className="text-foreground font-serif text-xl mt-2 block">
              How do you make others see what you see?
            </span>
          </p>
          
          <p className="text-muted-foreground italic max-w-xl mx-auto pt-4">
            They build the world.
            <br />
            We build the words that make it real.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
