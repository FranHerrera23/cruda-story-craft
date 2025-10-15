import { ArrowDown } from "lucide-react";
import franPortrait from "@/assets/fran-portrait.jpg";

const HeroManifesto = () => {
  return (
    <section className="relative min-h-screen bg-warm-charcoal overflow-hidden" style={{ backgroundColor: 'hsl(21, 7%, 23%)' }}>
      <div className="grid md:grid-cols-[55%_45%] gap-10 md:gap-20 min-h-screen items-center px-6 md:px-20 py-20 md:py-0">
        {/* Left Side - Text Content */}
        <div className="max-w-[600px] order-2 md:order-1">
          <h1 className="font-display text-4xl md:text-[48px] font-semibold leading-[1.15] tracking-[-0.015em] mb-12 slow-fade-in" style={{ color: 'hsl(48, 43%, 98%)' }}>
            <span className="block slow-fade-in" style={{ animationDelay: '0.3s' }}>You know your work inside out.</span>
            <span className="block slow-fade-in" style={{ animationDelay: '0.5s' }}>But explaining it? That's different.</span>
          </h1>
          
          <p className="font-display text-xl md:text-2xl font-medium text-signal-red leading-[1.3] mb-20 slow-fade-in" style={{ animationDelay: '1.2s' }}>
            CRUDA helps you find those words.
          </p>

          <p className="text-lg md:text-xl font-normal leading-[1.7] mb-16 slow-fade-in" style={{ animationDelay: '1.8s', color: 'hsl(48, 43%, 98%, 0.7)' }}>
            We work with founders who've mastered their craft — but need help articulating what makes their work different.
          </p>

          <p className="text-base md:text-lg font-normal leading-[1.6] mb-20 slow-fade-in" style={{ animationDelay: '2.3s', color: 'hsl(48, 43%, 98%, 0.5)' }}>
            Not marketing speak. Not hype.
            <br />
            Just the <span className="text-signal-red font-normal slow-fade-in" style={{ animationDelay: '2.6s' }}>truth</span>, told in a way <span className="text-signal-red font-normal slow-fade-in" style={{ animationDelay: '2.6s' }}>people can feel</span>.
          </p>

          <div className="slow-fade-in" style={{ animationDelay: '2.9s' }}>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-signal-red font-display font-medium text-base px-14 py-5 rounded transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-signal-red hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.2)]"
              style={{ color: 'hsl(21, 7%, 23%)' }}
            >
              Let's talk about your story
            </a>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="relative order-1 md:order-2">
          {/* Red accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-signal-red hidden md:block"></div>
          {/* Mobile red accent line - top horizontal */}
          <div className="absolute top-0 left-0 w-[100px] h-[2px] bg-signal-red md:hidden"></div>
          
          <div className="relative w-full h-[400px] md:h-[700px] overflow-hidden">
            <img 
              src={franPortrait} 
              alt="Fran - CRUDA Founder"
              className="w-full h-full object-cover"
              style={{ 
                filter: 'grayscale(100%) contrast(1.15)',
                objectPosition: 'center center'
              }}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-px h-16 bg-signal-red/60 mb-2"></div>
        <ArrowDown className="w-5 h-5 text-signal-red/60 -ml-2.5" />
      </div>
    </section>
  );
};

export default HeroManifesto;
