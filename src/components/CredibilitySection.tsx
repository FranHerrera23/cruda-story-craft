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
      className="py-20 md:py-[120px] px-6 md:px-[60px]" 
      style={{ backgroundColor: '#1A1A1A' }}
    >
      <div className="max-w-[700px] mx-auto text-center">
        {/* Headline */}
        <h2 
          className="text-[32px] md:text-[42px] font-semibold leading-[1.2] mb-8 transition-all duration-[600ms]"
          style={{ 
            color: '#FFFFFF',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
          }}
        >
          Your story is clear because ours was long.
        </h2>
        
        {/* Body text */}
        <p 
          className="text-[18px] md:text-[20px] leading-[1.6] transition-all duration-[600ms]"
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transitionDelay: '150ms'
          }}
        >
          A decade translating across companies, cultures, and continents. From Buenos Aires to Dubai to Los Angeles. That gap—between what you know and what people understand—we've lived it.
        </p>
      </div>
    </section>
  );
};

export default CredibilitySection;
