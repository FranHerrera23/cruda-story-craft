import franPortrait from "@/assets/fran-portrait-new.png";

const HeroManifesto = () => {
  return (
    <section className="relative overflow-hidden min-h-screen" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="grid md:grid-cols-[60%_40%] min-h-screen">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center px-10 md:px-20 py-16 md:py-20">
          <div className="max-w-[600px]">
            {/* Small intro line */}
            <p 
              className="uppercase tracking-[2px] mb-8"
              style={{ 
                fontSize: '14px',
                color: '#3D3835',
                opacity: 0,
                animation: 'fadeIn 0.3s cubic-bezier(0.33, 1, 0.68, 1) 0s forwards'
              }}
            >
              Fran Herrera - CRUDA
            </p>

            {/* Headline */}
            <h1 
              className="font-display font-bold mb-8"
              style={{ 
                fontSize: 'clamp(38px, 5vw, 54px)',
                lineHeight: '1.1',
                color: '#3D3835',
                opacity: 0,
                transform: 'translateY(20px)',
                animation: 'fadeIn 0.3s cubic-bezier(0.33, 1, 0.68, 1) 0s forwards'
              }}
            >
              You've spent years mastering your craft.
            </h1>

            {/* Body */}
            <p 
              className="mb-12"
              style={{ 
                fontSize: 'clamp(19px, 2.2vw, 22px)',
                lineHeight: '1.6',
                color: '#3D3835',
                opacity: 0,
                maxWidth: '520px',
                animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.5s forwards'
              }}
            >
              But <span style={{ color: '#F5B800', fontWeight: 700 }}>mastery doesn't translate</span> itself. The gap between what you've built and what people understand—that's where we work.
            </p>

            {/* CTA */}
            <a 
              href="#contact"
              className="inline-flex items-center justify-center font-display font-medium px-10 py-4 rounded transition-all duration-300 hover:scale-105"
              style={{ 
                backgroundColor: '#FF2E63',
                color: '#FDFBF7',
                fontSize: '16px',
                opacity: 0,
                transform: 'translateY(10px)',
                animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.6s forwards'
              }}
            >
              Start a Conversation
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div 
          className="relative flex items-center justify-center p-12 md:p-16 min-h-[60vh] md:min-h-screen"
          style={{ backgroundColor: '#3D3835' }}
        >
          <img
            src={franPortrait}
            alt="Fran Herrera, founder of CRUDA"
            className="w-full h-auto max-w-[420px]"
            style={{
              aspectRatio: '4/5',
              objectFit: 'cover',
              filter: 'grayscale(20%) contrast(1.1)',
              opacity: 0,
              transform: 'scale(1.05)',
              animation: 'fadeIn 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0s forwards, scaleDown 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0s forwards'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroManifesto;
