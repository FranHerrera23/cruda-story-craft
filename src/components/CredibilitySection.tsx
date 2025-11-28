import { useEffect, useRef, useState } from 'react';

const CredibilitySection = () => {
  const [moment1Visible, setMoment1Visible] = useState(false);

  const moment1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setMoment1Visible(true);
      return;
    }

    // Fallback timeout to ensure content shows up
    const fallbackTimer = setTimeout(() => {
      setMoment1Visible(true);
    }, 1000);

    const options = {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === moment1Ref.current && entry.isIntersecting) {
          setMoment1Visible(true);
          clearTimeout(fallbackTimer);
        }
      });
    }, options);

    if (moment1Ref.current) observer.observe(moment1Ref.current);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <>
      {/* MOMENT 1: THE EVIDENCE (DARK SECTION) */}
      <section 
        ref={moment1Ref}
        className="py-[100px] md:py-[100px] px-10 md:px-20" 
        style={{ backgroundColor: '#3D3835' }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          {/* Section Label */}
          <p 
            className="text-[13px] md:text-[14px] font-medium tracking-[0.15em] uppercase mb-6 transition-opacity duration-[600ms]"
            style={{ 
              color: '#FF2E63',
              opacity: moment1Visible ? 1 : 0
            }}
          >
            WHERE WE COME FROM
          </p>
          
          {/* Headline */}
          <h2 
            className="text-[38px] md:text-[52px] font-bold leading-[1.1] mb-8 transition-all duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transform: moment1Visible ? 'scale(1)' : 'scale(0.98)',
              willChange: 'transform',
              transitionDelay: '100ms'
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
              transitionDelay: '300ms'
            }}
          >
            Over a decade translating across companies, cultures, and languages before founding CRUDA. Latin America. United States. Middle East. Europe. Buenos Aires, to Miami, Los Angeles, Dubai & Madrid.
          </p>
          
          <p 
            className="text-[19px] md:text-[20px] leading-[1.8] mb-10 transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            That gap—between what you know and what people understand—we've lived it.
          </p>

          {/* Who We've Helped Label */}
          <p 
            className="text-[13px] md:text-[14px] font-medium tracking-[0.15em] uppercase mb-4 transition-opacity duration-[600ms]"
            style={{ 
              color: 'rgba(253, 251, 247, 0.6)',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '500ms'
            }}
          >
            WHO WE'VE HELPED
          </p>

          {/* Brand names - MASSIVE Display */}
          <h3 
            className="text-[42px] md:text-[64px] font-bold leading-[1.2] mb-12 transition-all duration-[800ms]"
            style={{ 
              color: '#FF2E63',
              opacity: moment1Visible ? 1 : 0,
              transform: moment1Visible ? 'scale(1)' : 'scale(0.95)',
              willChange: 'transform',
              transitionDelay: '700ms'
            }}
          >
            TikTok. Mondelez. Nestlé. DeliveryHero. DirecTV. Natura. Ab InBev. United Nations.
          </h3>
          
          {/* Supporting text - Immigrant story */}
          <p 
            className="text-[19px] md:text-[22px] leading-[1.8] mb-8 transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '1000ms'
            }}
          >
            We're immigrants. We've built across 10+ nationalities and languages.
          </p>
          
          <p 
            className="text-[19px] md:text-[22px] leading-[1.8] transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '1100ms'
            }}
          >
            We understand cultural nuances and people. That's why we can help you communicate, connect, and craft narratives that travel.
          </p>
        </div>
      </section>

    </>
  );
};

export default CredibilitySection;
