import { useEffect, useRef, useState } from 'react';

const CredibilitySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    const options = {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRef.current && entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
        }
      });
    }, options);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-[120px] px-6 md:px-[60px]" 
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-[750px] mx-auto text-center">
        {/* Headline */}
        <h2 
          className="text-[32px] md:text-[32px] font-semibold leading-[1.2] mb-10 transition-all duration-[600ms]"
          style={{ 
            color: '#FFFFFF',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
          }}
        >
          Where we've been
        </h2>
        
        {/* Body text */}
        <div
          className="transition-all duration-[600ms]"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '150ms'
          }}
        >
          <p 
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            A decade inside TikTok, Mondelez, Nestlé, United Nations, DeliveryHero, DirecTV, Natura, Ab InBev.
          </p>
          
          <p 
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            Five countries. Three languages. Ten nationalities on the teams we've built.
          </p>
          
          <p 
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            Buenos Aires. Miami. Dubai. Los Angeles. Madrid.
          </p>
          
          <p 
            className="text-[18px] md:text-[20px] leading-[1.7] mb-6"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            That gap—between what you know and what people understand—we've lived it. Every day. In rooms where we were the only one who looked different, spoke different, thought different.
          </p>
          
          <p 
            className="text-[18px] md:text-[20px] leading-[1.7]"
            style={{ color: 'rgba(255, 255, 255, 0.75)' }}
          >
            That's why we can help you translate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
