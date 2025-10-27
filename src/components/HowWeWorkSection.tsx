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
      className="py-[120px] px-[60px]"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      <div className="max-w-[1200px] mx-auto">
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
              className="font-semibold mb-[20px]"
              style={{ 
                fontSize: '24px',
                lineHeight: '1.3',
                color: '#3D3835'
              }}
            >
              Strip the bullshit
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
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
              transitionDelay: '200ms',
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
              className="font-semibold mb-[20px]"
              style={{ 
                fontSize: '24px',
                lineHeight: '1.3',
                color: '#3D3835'
              }}
            >
              Find the essence
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
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
              transitionDelay: '400ms',
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
              className="font-semibold mb-[20px]"
              style={{ 
                fontSize: '24px',
                lineHeight: '1.3',
                color: '#3D3835'
              }}
            >
              Understand what lands
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.8',
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
            font-size: 22px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
