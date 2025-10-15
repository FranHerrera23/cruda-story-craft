import { ArrowDown } from "lucide-react";
import franPortrait from "@/assets/fran-portrait.jpg";

const HeroManifesto = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '85vh' }}>
      <div className="grid md:grid-cols-2 min-h-[85vh]">
        {/* Left Column - Dark background with text */}
        <div className="flex items-center px-10 md:px-16 py-20" style={{ backgroundColor: '#3D3835' }}>
          <div className="max-w-[600px]">
            <h1 className="font-display text-4xl md:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] mb-8 slow-fade-in" style={{ color: '#FDFBF7' }}>
              Great work doesn't explain itself.
            </h1>
            
            <p className="text-lg md:text-xl font-normal leading-[1.65] mb-8 slow-fade-in" style={{ animationDelay: '0.3s', color: '#FDFBF7' }}>
              You've built something real. Years of decisions, refinement, and execution that most people will never see. But in a market that rewards clarity, technical mastery alone isn't enough.
            </p>

            <p className="text-lg md:text-xl font-normal leading-[1.65] slow-fade-in" style={{ animationDelay: '0.6s', color: '#FDFBF7' }}>
              We work with builders who've proven their craft — in construction, hospitality, and professional sports — and need a storytelling system that matches the quality of their work. Not content. Not marketing fluff. A strategic narrative that positions you for the clients, projects, and opportunities you actually want.
            </p>
          </div>
        </div>

        {/* Right Column - Full-bleed image */}
        <div 
          className="h-[50vh] md:h-auto bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${franPortrait})`,
            filter: 'grayscale(100%) contrast(1.15)'
          }}
        />
      </div>

    </section>
  );
};

export default HeroManifesto;
