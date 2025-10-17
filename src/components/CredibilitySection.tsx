import { useEffect, useRef, useState } from 'react';

const CredibilitySection = () => {
  const [moment1Visible, setMoment1Visible] = useState(false);
  const [moment2Visible, setMoment2Visible] = useState(false);

  const moment1Ref = useRef<HTMLDivElement>(null);
  const moment2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setMoment1Visible(true);
      setMoment2Visible(true);
      return;
    }

    const options = {
      rootMargin: '-20%',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === moment1Ref.current && entry.isIntersecting) {
          setMoment1Visible(true);
        }
        if (entry.target === moment2Ref.current && entry.isIntersecting) {
          setMoment2Visible(true);
        }
      });
    }, options);

    if (moment1Ref.current) observer.observe(moment1Ref.current);
    if (moment2Ref.current) observer.observe(moment2Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* MOMENT 1: THE EVIDENCE (DARK SECTION) */}
      <section 
        ref={moment1Ref}
        className="py-[140px] md:py-[140px] px-10 md:px-20" 
        style={{ backgroundColor: '#3D3835' }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          {/* Headline */}
          <h2 
            className="text-[38px] md:text-[52px] font-bold leading-[1.1] mb-8 transition-all duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transform: moment1Visible ? 'scale(1)' : 'scale(0.98)',
              willChange: 'transform'
            }}
          >
            We've been inside the machine.
          </h2>
          
          {/* Context */}
          <p 
            className="text-[19px] md:text-[20px] leading-[1.8] mb-10 transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            Eight years inside corporations, agencies, media companies. Managing campaigns that reached millions. Organizing events for thousands. Producing content with 30+ creators.
          </p>

          {/* Small intro line */}
          <p 
            className="text-[14px] uppercase tracking-[2px] mb-6 transition-opacity duration-[400ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 0.7 : 0,
              transitionDelay: '400ms'
            }}
          >
            Companies we've worked with:
          </p>

          {/* Brand names - MASSIVE Display */}
          <h3 
            className="text-[42px] md:text-[64px] font-bold leading-[1.2] mb-12 transition-all duration-[800ms]"
            style={{ 
              color: '#FF2E63',
              opacity: moment1Visible ? 1 : 0,
              transform: moment1Visible ? 'scale(1)' : 'scale(0.95)',
              willChange: 'transform',
              transitionDelay: '600ms'
            }}
          >
            TikTok. Mondelez. Nestlé. DeliveryHero. DirecTV. Natura. Ab InBev. United Nations.
          </h3>
          
          {/* Supporting text - Immigrant story */}
          <p 
            className="text-[19px] md:text-[22px] leading-[1.8] transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '1000ms'
            }}
          >
            We're immigrants ourselves. We've built across 10+ nationalities and languages. The gap between what you've built and what people understand? We've lived it. That's why we can close it.
          </p>
        </div>
      </section>

      {/* TRANSITION: Red Dots Separator */}
      <section style={{ backgroundColor: '#3D3835' }}>
        <div className="flex flex-col items-center gap-4 py-[60px]">
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#FF2E63',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#FF2E63',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#FF2E63',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '600ms'
            }}
          />
        </div>
      </section>

      {/* MOMENT 2: THE INSIGHT (LIGHT SECTION) */}
      <section 
        ref={moment2Ref}
        className="py-[100px] md:py-[100px] px-10 md:px-[60px]" 
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[700px] mx-auto text-center">
          <p 
            className="text-[19px] md:text-[22px] leading-[1.8] mb-6 transition-all duration-[600ms]"
            style={{ 
              color: '#3D3835',
              opacity: moment2Visible ? 1 : 0,
              transform: moment2Visible ? 'translateY(0)' : 'translateY(20px)',
              willChange: 'transform'
            }}
          >
            That's where we learned <span style={{ color: '#FF2E63', fontWeight: 600 }}>the pattern</span>: it's not about scale or awards. It's about the <span style={{ color: '#FF2E63', fontWeight: 600 }}>story beneath the execution</span>.
          </p>
          
          <div 
            className="inline-block transition-opacity duration-[600ms]"
            style={{
              opacity: moment2Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            <div 
              className="h-[2px] w-full mb-4 transition-all duration-500"
              style={{ 
                backgroundColor: '#FF2E63',
                transform: moment2Visible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'center'
              }}
            />
            <p 
              className="text-[19px] md:text-[21px] font-semibold"
              style={{ color: '#3D3835' }}
            >
              The thing that creates belief when you're not in the room.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CredibilitySection;
