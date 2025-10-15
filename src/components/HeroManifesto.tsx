import { ArrowDown } from "lucide-react";
import franPortrait from "@/assets/fran-portrait.jpg";

const HeroManifesto = () => {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 min-h-screen items-center px-6 md:px-16 py-20 md:py-20">
        {/* Left Side - Text Content */}
        <div className="max-w-[600px] order-2 md:order-1 md:pr-12">
          <h1 className="font-display text-4xl md:text-[48px] font-semibold leading-[1.15] tracking-[-0.015em] mb-12 slow-fade-in" style={{ color: '#3D3835' }}>
            <span className="block slow-fade-in" style={{ animationDelay: '0.3s' }}>You know your work inside out.</span>
            <span className="block slow-fade-in" style={{ animationDelay: '0.5s' }}>But explaining it? That's different.</span>
          </h1>
          
          <p className="font-display text-xl md:text-2xl font-medium text-signal-red leading-[1.3] mb-20 slow-fade-in" style={{ animationDelay: '1.2s' }}>
            CRUDA helps you find those words.
          </p>

          <p className="text-lg md:text-xl font-normal leading-[1.7] mb-16 slow-fade-in" style={{ animationDelay: '1.8s', color: 'rgba(61, 56, 53, 0.85)' }}>
            We work with founders who've mastered their craft — but need help articulating what makes their work different.
          </p>

          <p className="text-base md:text-lg font-normal leading-[1.6] mb-20 slow-fade-in" style={{ animationDelay: '2.3s', color: 'rgba(61, 56, 53, 0.7)' }}>
            Not marketing speak. Not hype.
            <br />
            Just the <span className="text-signal-red font-normal slow-fade-in" style={{ animationDelay: '2.6s' }}>truth</span>, told in a way <span className="text-signal-red font-normal slow-fade-in" style={{ animationDelay: '2.6s' }}>people can feel</span>.
          </p>

          <div className="slow-fade-in" style={{ animationDelay: '2.9s' }}>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center bg-signal-red font-display font-medium text-base px-14 py-5 rounded transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-signal-red hover:-translate-y-0.5 hover:shadow-[0_8px_16px_rgba(255,46,99,0.2)]"
              style={{ color: '#FDFBF7' }}
            >
              Let's talk about your story
            </a>
          </div>
        </div>

        {/* Right Side - Photo */}
        <div className="relative order-1 md:order-2">
          <div className="relative w-full h-[400px] md:h-[600px] overflow-hidden rounded-lg" style={{ boxShadow: '0 4px 20px rgba(61, 56, 53, 0.08)' }}>
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
        <div className="w-px h-16 mb-2" style={{ backgroundColor: 'rgba(61, 56, 53, 0.3)' }}></div>
        <ArrowDown className="w-5 h-5 -ml-2.5" style={{ color: 'rgba(61, 56, 53, 0.3)' }} />
      </div>
    </section>
  );
};

export default HeroManifesto;
