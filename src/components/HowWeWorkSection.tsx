import { useEffect, useRef, useState } from 'react';

const HowWeWorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const options = {
      rootMargin: '-20%',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === sectionRef.current && entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-[140px] px-[60px]"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Label */}
        <div 
          className="text-center mb-[60px] uppercase"
          style={{ 
            fontSize: '11px',
            letterSpacing: '3px',
            color: 'rgba(61, 56, 53, 0.4)',
            fontWeight: 500
          }}
        >
          HOW WE WORK
        </div>
        
        {/* Section Intro */}
        <div className="max-w-[700px] mx-auto text-center">
          <p 
            style={{ 
              fontSize: '24px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: 'rgba(61, 56, 53, 0.75)',
              fontStyle: 'italic',
              margin: 0
            }}
          >
            Not a process. Not a system. Just how we see things.
          </p>
        </div>
        
        {/* Red Dots Divider */}
        <div 
          className="text-center my-[80px] mb-[100px]"
          style={{
            fontSize: '20px',
            color: '#FF2E63',
            letterSpacing: '12px'
          }}
        >
          <span 
            className="inline-block"
          >
            •
          </span>
          <span 
            className="inline-block"
          >
            •
          </span>
          <span 
            className="inline-block"
          >
            •
          </span>
        </div>
        
        {/* Principles Grid */}
        <div className="grid md:grid-cols-3 gap-[60px]">
          <div 
            className="transition-all duration-[600ms]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0ms',
              willChange: 'transform'
            }}
          >
            <div 
              className="font-semibold mb-[24px]"
              style={{ 
                fontSize: '14px',
                color: '#FF2E63'
              }}
            >
              01
            </div>
            <h3 
              className="font-semibold mb-[24px]"
              style={{ 
                fontSize: '26px',
                lineHeight: '1.3',
                color: '#3D3835'
              }}
            >
              Strip the bullshit
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              No credentials, awards, or buzzwords. We find what you actually do that no one else does. The thing clients feel but can't explain.
            </p>
          </div>
          
          <div 
            className="transition-all duration-[600ms]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '300ms',
              willChange: 'transform'
            }}
          >
            <div 
              className="font-semibold mb-[24px]"
              style={{ 
                fontSize: '14px',
                color: '#FF2E63'
              }}
            >
              02
            </div>
            <h3 
              className="font-semibold mb-[24px]"
              style={{ 
                fontSize: '26px',
                lineHeight: '1.3',
                color: '#3D3835'
              }}
            >
              Find the essence
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              Not simplification. Distillation. The core of why your work matters, stripped of everything that dilutes it.
            </p>
          </div>
          
          <div 
            className="transition-all duration-[600ms]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '600ms',
              willChange: 'transform'
            }}
          >
            <div 
              className="font-semibold mb-[24px]"
              style={{ 
                fontSize: '14px',
                color: '#FF2E63'
              }}
            >
              03
            </div>
            <h3 
              className="font-semibold mb-[24px]"
              style={{ 
                fontSize: '26px',
                lineHeight: '1.3',
                color: '#3D3835'
              }}
            >
              Understand what lands
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We test narratives in real conversations. What creates recognition? What builds belief? We shape the story until it travels.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr !important;
            gap: 80px !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 100px 40px !important;
          }
          
          h3 {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
