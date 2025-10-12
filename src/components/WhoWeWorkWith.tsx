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
    <section className="py-30 px-6 md:px-30 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display text-section font-semibold mb-4 tracking-tight-2">
            We only work with 3 types of builders:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {verticals.map((vertical, index) => (
            <div 
              key={index}
              className="group space-y-6 p-10 border border-charcoal/10 hover:border-signal-red/30 transition-all duration-500 slow-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center">
                <vertical.icon 
                  className="w-12 h-12 text-charcoal/60 group-hover:text-signal-red transition-colors duration-500" 
                  strokeWidth={1.5} 
                />
              </div>
              <h3 className="font-display text-xl font-semibold text-center tracking-tight leading-tight">
                {vertical.title}
              </h3>
              <p className="text-muted-foreground italic text-center leading-relaxed">
                {vertical.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Different crafts. Same challenge:
          </p>
          <p className="font-display text-2xl font-semibold">
            How do you make others see what you see?
          </p>
          
          <div className="pt-8 space-y-2">
            <p className="text-muted-foreground italic">They build the world.</p>
            <p className="text-muted-foreground italic">We build the words that make it real.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
