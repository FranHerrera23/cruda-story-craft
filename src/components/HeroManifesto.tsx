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
          You don't need more content.
          <br />
          You need more <span className="hand-drawn-line">clarity</span>.
        </h1>
        
        <div className="space-y-8 text-lg md:text-xl max-w-3xl leading-relaxed">
          <p className="text-bone/70">Here's the truth most founders don't say out loud:</p>
          
          <p className="font-display text-2xl md:text-3xl leading-tight font-semibold">
            You know your work is good.
            <br />
            You just don't know how to make others see it the way you do.
          </p>
          
          <p className="text-bone/70">That's not a content problem. It's a translation problem.</p>
          
          <p className="pt-8 text-bone">
            CRUDA is a storytelling studio that helps founders build trust at scale — through presence, not performance.
          </p>
          
          <div className="pt-12 space-y-3">
            <p className="text-bone/90">We're <span className="font-semibold">not</span> for everyone.</p>
            <p className="font-display text-xl font-medium">
              We're for the builders who are finally ready to be seen.
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
