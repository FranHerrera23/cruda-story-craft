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
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-30">
        <h1 className="font-display text-hero font-bold mb-8 text-balance leading-[1.05] tracking-tight-2 slow-fade-in">
          Your work speaks volumes.
          <br />
          <span className="hand-drawn-line slow-fade-in" style={{ animationDelay: '0.6s' }}>Make sure it's heard.</span>
        </h1>
        
        <div className="max-w-3xl space-y-10">
          <p className="font-display text-2xl md:text-3xl leading-tight font-semibold text-bone/90 slow-fade-in" style={{ animationDelay: '0.9s' }}>
            CRUDA helps founders translate execution into articulation — so the people who matter understand what you've built and why it's different.
          </p>
          
          <p className="font-display text-xl font-medium slow-fade-in" style={{ animationDelay: '1.2s' }}>
            Not content. Not theater. <span className="text-signal-red font-semibold">Precision that earns attention.</span>
          </p>

          <div className="pt-5 slow-fade-in" style={{ animationDelay: '1.5s' }}>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-signal-red text-charcoal font-display font-semibold text-lg px-10 py-4 rounded-sm hover:bg-charcoal hover:text-signal-red transition-all duration-300 group"
            >
              START THE CONVERSATION
              <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
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
