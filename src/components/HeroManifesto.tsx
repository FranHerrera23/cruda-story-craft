import { ArrowDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroManifesto = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal text-bone overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]">
        <img 
          src={heroVisual} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-30 slow-fade-in">
        <h1 className="font-display text-hero font-bold mb-12 text-balance leading-[1.05] tracking-tight-2">
          Your work is exceptional.
          <br />
          <span className="hand-drawn-line">Your words should be too.</span>
        </h1>
        
        <div className="space-y-10 text-lg md:text-xl max-w-3xl leading-relaxed">
          <p className="font-display text-2xl md:text-3xl leading-tight font-semibold text-bone/90">
            CRUDA helps founders communicate with the same precision they build — so the right people understand exactly what you've created.
          </p>
          
          <div className="pt-8 space-y-6">
            <p className="font-display text-xl font-medium">
              <span className="strikethrough-red">Not content. Not validation.</span>
            </p>
            <p className="font-display text-2xl font-semibold text-bone">
              Clarity that commands attention.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-signal-red/60 mb-2"></div>
        <ArrowDown className="w-5 h-5 text-signal-red/60 -ml-2.5" />
      </div>
    </section>
  );
};

export default HeroManifesto;
