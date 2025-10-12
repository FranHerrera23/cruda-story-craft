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
    <section className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl tracking-tighter mb-4">
            Real Stories. Real Trust.
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Not just results — transformations.
          </p>
        </div>

        <div className="relative">
          <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 p-12 md:p-16 min-h-[400px] flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-lg font-serif text-primary-foreground mb-4">
                {clients[currentIndex].name}
                {clients[currentIndex].role && ` — ${clients[currentIndex].role}`}
              </p>
              
              {clients[currentIndex].before && (
                <div className="space-y-2">
                  <p className="text-sm text-aged-gold uppercase tracking-wider">Before:</p>
                  <p className="text-lg leading-relaxed text-primary-foreground/80 italic">
                    "{clients[currentIndex].before}"
                  </p>
                </div>
              )}
              
              {clients[currentIndex].after && (
                <div className="space-y-2">
                  <p className="text-sm text-aged-gold uppercase tracking-wider">After:</p>
                  <p className="text-lg leading-relaxed text-primary-foreground/80 italic">
                    "{clients[currentIndex].after}"
                  </p>
                </div>
              )}
              
              {clients[currentIndex].quote && !clients[currentIndex].before && (
                <blockquote className="text-2xl md:text-3xl leading-relaxed font-serif italic">
                  "{clients[currentIndex].quote}"
                </blockquote>
              )}
              
              <button className="text-aged-gold hover:underline text-left pt-4 transition-all">
                🡒 Read the full story
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex gap-2">
              {clients.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? "bg-primary-foreground w-8" 
                      : "bg-primary-foreground/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-primary-foreground hover:bg-primary-foreground/10"
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
