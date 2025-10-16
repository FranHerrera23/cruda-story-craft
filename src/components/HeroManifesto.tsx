import { ArrowDown } from "lucide-react";
import karenPortrait from "@/assets/karen-mannheim.jpg";

const HeroManifesto = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '85vh' }}>
      <div className="grid md:grid-cols-2 min-h-[85vh]">
        {/* Left Column - Dark background with text */}
        <div className="flex items-center px-10 md:px-16 py-20" style={{ backgroundColor: '#3D3835' }}>
          <div className="max-w-[600px]">
            <h1 className="font-display text-4xl md:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] mb-8 slow-fade-in" style={{ color: '#FDFBF7' }}>
              Great work doesn't<br />explain itself.
            </h1>
            
            <p className="text-lg md:text-xl font-normal leading-[1.65] mb-10 slow-fade-in" style={{ animationDelay: '0.3s', color: '#FDFBF7' }}>
              We build the positioning system that makes people trust you before you walk in the room.
            </p>

            <a 
              href="#contact"
              className="inline-flex items-center justify-center font-display font-medium text-base px-10 py-4 rounded transition-all duration-300 slow-fade-in"
              style={{ 
                animationDelay: '0.6s',
                backgroundColor: '#FF2E63',
                color: '#FDFBF7'
              }}
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Right Column - Full-bleed image */}
        <div 
          className="h-[50vh] md:h-auto bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${karenPortrait})`,
            filter: 'grayscale(100%) contrast(1.15)'
          }}
        />
      </div>

    </section>
  );
};

export default HeroManifesto;
