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
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-30">
        <h1 className="font-display text-5xl md:text-6xl font-medium mb-6 leading-[1.2] tracking-tight slow-fade-in">
          You know your work inside out.
          <br />
          But explaining it?
          <br />
          That's different.
        </h1>
        
        <div className="max-w-3xl space-y-8">
          <p className="text-lg md:text-xl leading-relaxed text-bone/75 slow-fade-in" style={{ animationDelay: '0.3s' }}>
            The better you are at what you do, the harder it can be to put it into words that land with people who don't live in your world.
          </p>
          
          <p className="font-display text-xl md:text-2xl font-semibold text-bone slow-fade-in" style={{ animationDelay: '0.7s' }}>
            CRUDA helps you find <span className="hand-drawn-line">those words</span>.
          </p>

          <div className="space-y-4 text-lg leading-relaxed text-bone/80 slow-fade-in" style={{ animationDelay: '1s' }}>
            <p>
              We work with founders who've mastered their craft — but need help articulating what makes their work different.
            </p>
            
            <div className="space-y-1 pt-2">
              <p>We turn execution into language.</p>
              <p>Complexity into clarity.</p>
              <p>Your story into something people remember.</p>
            </div>
          </div>

          <p className="text-base md:text-lg text-bone/60 leading-relaxed slow-fade-in" style={{ animationDelay: '1.3s' }}>
            Not marketing speak. Not hype.
            <br />
            Just the <span className="text-signal-red font-medium">truth</span> about what you've built, told in a way <span className="text-signal-red font-medium">people can feel</span>.
          </p>

          <div className="pt-8 slow-fade-in" style={{ animationDelay: '1.6s' }}>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-signal-red text-charcoal font-display font-medium text-base px-12 py-[18px] rounded hover:bg-charcoal hover:text-bone hover:border hover:border-signal-red transition-all duration-300"
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
