import karenPortrait from "@/assets/karen-mannheim.jpg";

const HeroManifesto = () => {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '85vh' }}>
      <div className="grid md:grid-cols-2 min-h-[85vh]">
        {/* Left Column - Dark background with text */}
        <div className="flex items-center justify-center px-10 md:px-20 py-20" style={{ backgroundColor: '#3D3835' }}>
          <div className="max-w-[520px]">
            <h1 
              className="font-display text-[40px] md:text-[56px] font-bold leading-[1.1] tracking-[-0.02em] mb-8 opacity-0"
              style={{ 
                color: '#FDFBF7',
                animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.6s forwards'
              }}
            >
              Great work doesn't<br />explain itself.
            </h1>
            
            <p 
              className="text-lg md:text-[20px] font-normal leading-[1.7] mb-10 opacity-0"
              style={{ 
                color: 'rgba(253, 251, 247, 0.9)',
                maxWidth: '520px',
                animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.8s forwards'
              }}
            >
              When <span style={{ color: '#F5B800', fontWeight: 600 }}>mastery doesn't translate</span> into recognition, <span style={{ fontSize: '22px', fontWeight: 600 }}>that's where we work</span>.
            </p>

            <a 
              href="#contact"
              className="inline-flex items-center justify-center font-display font-medium text-base px-10 py-4 rounded transition-all duration-300 opacity-0 hover:scale-105"
              style={{ 
                backgroundColor: '#FF2E63',
                color: '#FDFBF7',
                animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 1s forwards'
              }}
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Right Column - Full-bleed image */}
        <div 
          className="h-[50vh] md:h-auto bg-cover bg-center opacity-0"
          style={{ 
            backgroundImage: `url(${karenPortrait})`,
            filter: 'grayscale(100%) contrast(1.15)',
            animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.4s forwards'
          }}
        />
      </div>
    </section>
  );
};

export default HeroManifesto;
