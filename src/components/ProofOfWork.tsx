import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clients = [
  {
    name: "Construction Founder",
    role: "",
    before: "I had 15 years of experience but couldn't explain why my approach was different. Investors passed. Press ignored me.",
    after: "CRUDA helped me see my story as a system, not a pitch. Within 3 months, I closed funding and got featured in [Publication].",
    industry: "Construction"
  },
  {
    name: "Hospitality Leader",
    role: "",
    quote: "I thought I needed a brand. CRUDA showed me I needed a thesis.",
    industry: "Hospitality"
  },
  {
    name: "Healthcare Innovator",
    role: "",
    before: "We were building something extraordinary, but no one knew how to talk about it.",
    after: "CRUDA helped us shape a founder-led story that landed with our team, investors, and the industry.",
    industry: "Healthcare"
  }
];

const ProofOfWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length);
  };

  return (
    <section className="py-30 px-6 md:px-30 bg-charcoal text-bone">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20">
          <h2 className="font-display text-section font-semibold tracking-tight-2 mb-4 text-center">
            Real Stories. Real Trust.
          </h2>
          <p className="text-bone/60 text-lg text-center">
            Not just results — transformations.
          </p>
        </div>

        <div className="relative">
          <div className="bg-bone border border-signal-red/20 p-12 md:p-16 min-h-[450px] flex flex-col justify-center">
            <div className="space-y-8">
              <p className="font-display text-xl font-medium text-charcoal">
                {clients[currentIndex].name}
                {clients[currentIndex].role && ` — ${clients[currentIndex].role}`}
              </p>
              
              {clients[currentIndex].before && (
                <div className="space-y-3">
                  <p className="section-number text-signal-red">BEFORE</p>
                  <p className="text-lg leading-relaxed text-charcoal/70 italic">
                    "{clients[currentIndex].before}"
                  </p>
                </div>
              )}
              
              {clients[currentIndex].after && (
                <div className="space-y-3">
                  <p className="section-number text-signal-red">AFTER</p>
                  <p className="text-lg leading-relaxed text-charcoal/70 italic">
                    "{clients[currentIndex].after}"
                  </p>
                </div>
              )}
              
              {clients[currentIndex].quote && !clients[currentIndex].before && (
                <blockquote className="text-2xl md:text-3xl leading-relaxed font-display font-medium italic text-charcoal">
                  "{clients[currentIndex].quote}"
                </blockquote>
              )}
              
              <button className="text-signal-red hover:underline text-left pt-4 transition-all font-medium tracking-wide flex items-center gap-2 group">
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                Read the full story
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-bone hover:bg-bone/10 hover:text-signal-red transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-3">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-signal-red w-12" 
                      : "bg-bone/30 w-2 hover:bg-bone/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-bone hover:bg-bone/10 hover:text-signal-red transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
