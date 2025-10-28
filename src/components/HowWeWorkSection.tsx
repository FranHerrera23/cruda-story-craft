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
      <div className="max-w-[1400px] mx-auto">
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
          THE WAY OF CRUDA
        </div>
        
        {/* Section Intro */}
        <div className="max-w-[900px] mx-auto text-center mb-[80px]">
          <p 
            style={{ 
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: '1.6',
              color: 'rgba(61, 56, 53, 0.65)',
              fontStyle: 'italic',
              margin: 0
            }}
          >
            Four principles. Borrowed from Jung and Rubin. Tested in hundreds of conversations.
          </p>
        </div>
        
        {/* Red Dots Divider */}
        <div 
          className="text-center mb-[100px]"
          style={{
            fontSize: '20px',
            color: '#FF2E63',
            letterSpacing: '12px',
            marginTop: '80px'
          }}
        >
          <span 
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-4px)',
              transition: 'opacity 400ms ease-out, transform 400ms ease-out',
              transitionDelay: '0ms'
            }}
          >
            •
          </span>
          <span 
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-4px)',
              transition: 'opacity 400ms ease-out, transform 400ms ease-out',
              transitionDelay: '200ms'
            }}
          >
            •
          </span>
          <span 
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-4px)',
              transition: 'opacity 400ms ease-out, transform 400ms ease-out',
              transitionDelay: '400ms'
            }}
          >
            •
          </span>
        </div>
        
        {/* Principles Grid - 4 Columns */}
        <div className="grid md:grid-cols-4 gap-[40px]">
          {/* Principle 01 - Look Inward */}
          <div 
            className="text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 600ms',
              transitionDelay: '0ms',
              willChange: 'transform'
            }}
          >
            <div 
              style={{ 
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF2E63',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}
            >
              01
            </div>
            <h3 
              style={{ 
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '1.3',
                color: '#3D3835',
                marginBottom: '24px'
              }}
            >
              Look Inward
            </h3>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: '20px'
              }}
            >
              The work starts with introspection. Not the polished version of ourselves, but the real one—the limitations we carry, the patterns formed in childhood, the things we avoid naming.
            </p>
            <p 
              style={{ 
                fontSize: '15px',
                lineHeight: '1.8',
                color: 'rgba(61, 56, 53, 0.65)',
                fontStyle: 'italic',
                marginTop: '20px',
                marginBottom: '20px',
                paddingLeft: '16px',
                borderLeft: '2px solid rgba(255, 46, 99, 0.3)'
              }}
            >
              "Who looks outside, dreams; who looks inside, awakens." — Carl Jung
            </p>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: 0
              }}
            >
              This is where clarity lives. In what we'd rather not examine.
            </p>
          </div>
          
          {/* Principle 02 - Find the Essence */}
          <div 
            className="text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 600ms',
              transitionDelay: '200ms',
              willChange: 'transform'
            }}
          >
            <div 
              style={{ 
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF2E63',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}
            >
              02
            </div>
            <h3 
              style={{ 
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '1.3',
                color: '#3D3835',
                marginBottom: '24px'
              }}
            >
              Find the Essence
            </h3>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: '20px'
              }}
            >
              Not simplification. Distillation. Strip away credentials, awards, buzzwords—everything that sounds impressive but says nothing.
            </p>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: 0
              }}
            >
              What remains is the core. Not just what the work does, but why it matters. The thing people feel but can't articulate. That's what we're looking for.
            </p>
          </div>
          
          {/* Principle 03 - Honor the Intention */}
          <div 
            className="text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 600ms',
              transitionDelay: '400ms',
              willChange: 'transform'
            }}
          >
            <div 
              style={{ 
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF2E63',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}
            >
              03
            </div>
            <h3 
              style={{ 
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '1.3',
                color: '#3D3835',
                marginBottom: '24px'
              }}
            >
              Honor the Intention
            </h3>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: '20px'
              }}
            >
              Every project carries the energy put into it. Not the visible work—the invisible force. Beliefs. Care. Standards. The unseen commitment.
            </p>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: 0
              }}
            >
              That's what people feel when they encounter the work. That's what creates magnetism. Intention first. Execution follows.
            </p>
          </div>
          
          {/* Principle 04 - Stay True */}
          <div 
            className="text-left"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 600ms',
              transitionDelay: '600ms',
              willChange: 'transform'
            }}
          >
            <div 
              style={{ 
                fontSize: '13px',
                fontWeight: 600,
                color: '#FF2E63',
                letterSpacing: '1px',
                marginBottom: '20px'
              }}
            >
              04
            </div>
            <h3 
              style={{ 
                fontSize: '22px',
                fontWeight: 600,
                lineHeight: '1.3',
                color: '#3D3835',
                marginBottom: '24px'
              }}
            >
              Stay True
            </h3>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: '20px'
              }}
            >
              The personal is universal. When the work comes from actual experience—actual values, actual struggles—it resonates.
            </p>
            <p 
              style={{ 
                fontSize: '16px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)',
                marginBottom: 0
              }}
            >
              The moment we guess what others want, we lose what made the work matter in the first place. Authenticity isn't strategy. It's the only option.
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
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
