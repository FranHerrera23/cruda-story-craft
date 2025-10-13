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
      
      <div className="relative z-10 max-w-[800px] mx-auto px-6 md:px-8 pt-[120px] pb-[120px]">
        <h1 className="font-display text-4xl md:text-[56px] font-semibold leading-[1.15] tracking-[-0.015em] text-bone mb-12 slow-fade-in">
          <span className="block slow-fade-in" style={{ animationDelay: '0.3s' }}>You know your work inside out.</span>
          <span className="block slow-fade-in" style={{ animationDelay: '0.5s' }}>But explaining it?</span>
          <span className="block slow-fade-in" style={{ animationDelay: '0.7s' }}>That's different.</span>
        </h1>
        
        <div className="max-w-[600px]">
          <p className="font-display text-xl md:text-2xl font-medium text-signal-red leading-[1.3] mb-20 slow-fade-in" style={{ animationDelay: '1.2s' }}>
            CRUDA helps you find those words.
          </p>

          <p className="text-lg md:text-xl font-normal text-bone/70 leading-[1.7] max-w-[650px] mb-16 slow-fade-in" style={{ animationDelay: '1.8s' }}>
            We work with founders who've mastered their craft — but need help articulating what makes their work different.
          </p>

          <p className="text-base md:text-lg font-normal text-bone/50 leading-[1.6] max-w-[650px] mb-20 slow-fade-in" style={{ animationDelay: '2.3s' }}>
            Not marketing speak. Not hype.
            <br />
            Just the <span className="text-signal-red font-normal slow-fade-in" style={{ animationDelay: '2.6s' }}>truth</span>, told in a way <span className="text-signal-red font-normal slow-fade-in" style={{ animationDelay: '2.6s' }}>people can feel</span>.
          </p>

          <div className="slow-fade-in" style={{ animationDelay: '2.9s' }}>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-signal-red text-charcoal font-display font-medium text-base px-14 py-5 rounded transition-all duration-300 hover:bg-transparent hover:text-bone hover:border-2 hover:border-signal-red hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.2)]"
            >
              Let's talk about your story
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
