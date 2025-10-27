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

    const options = {
      rootMargin: '-20%',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === moment1Ref.current && entry.isIntersecting) {
          setMoment1Visible(true);
        }
      });
    }, options);

    if (moment1Ref.current) observer.observe(moment1Ref.current);

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
            We've been inside the matrix.
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
            Over a decade translating across companies, cultures, and languages before founding CRUDA. That gap—between what you know and what people understand—we've lived it.
          </p>
          
          <p 
            className="text-[19px] md:text-[20px] leading-[1.8] mb-10 transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '300ms'
            }}
          >
            Latin America. United States. Middle East. Europe. Hong Kong. The experience became the methodology. Pattern recognition travels.
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
