import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clients = [
  {
    name: "Mike Kaeding",
    role: "CEO, Norhart",
    quote: "We were building something extraordinary, but no one knew how to talk about it. CRUDA helped us shape a founder-led story that landed with the press, investors, and our team.",
    industry: "Construction & Development"
  },
  {
    name: "Sarah Chen",
    role: "Founder, Meridian Hospitality",
    quote: "CRUDA didn't just help us tell our story — they helped us understand what we were really building. That clarity changed everything.",
    industry: "Luxury Hospitality"
  },
  {
    name: "Marcus Rodriguez",
    role: "Former MLB, Investor",
    quote: "Transitioning from athlete to investor meant rebuilding my narrative from scratch. CRUDA gave me the language and presence I needed.",
    industry: "Sports & Investment"
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
              <p className="text-sm uppercase tracking-widest text-primary-foreground/60">
                {clients[currentIndex].industry}
              </p>
              
              <blockquote className="text-2xl md:text-3xl leading-relaxed font-serif italic">
                "{clients[currentIndex].quote}"
              </blockquote>
              
              <div className="pt-4">
                <p className="font-semibold text-lg">{clients[currentIndex].name}</p>
                <p className="text-primary-foreground/70">{clients[currentIndex].role}</p>
              </div>
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
