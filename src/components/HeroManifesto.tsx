import { ArrowDown } from "lucide-react";
import heroVisual from "@/assets/hero-visual.jpg";

const HeroManifesto = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img 
          src={heroVisual} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center slow-fade-in">
        <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-balance leading-[0.95] tracking-tighter">
          You don't need more content.
          <br />
          You need more clarity.
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
          CRUDA is a storytelling studio that helps founders build trust at scale — through presence, not performance.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
      </div>
    </section>
  );
};

export default HeroManifesto;
