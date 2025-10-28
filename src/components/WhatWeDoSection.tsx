import { useEffect, useRef, useState } from 'react';

const WhatWeDoSection = () => {
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
      style={{ backgroundColor: '#E8DED1' }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div 
          className="text-center mb-[60px] uppercase tracking-[2px]"
          style={{ 
            fontSize: '12px',
            color: 'rgba(61, 56, 53, 0.5)'
          }}
        >
          OUR ZONE OF GENIUS
        </div>
        
        <div className="max-w-[800px] mx-auto mb-[100px]">
          <p 
            className="mb-[40px]"
            style={{ 
              fontSize: '24px',
              lineHeight: '1.9',
              color: '#3D3835'
            }}
          >
            You know what you do. You can talk about it. Hell, you've been talking about it for decades.
          </p>
          
          <p 
            className="mb-[40px]"
            style={{ 
              fontSize: '24px',
              lineHeight: '1.9',
              color: '#3D3835'
            }}
          >
            The problem isn't that you can't explain your work. It's that the explanation changes every time. Different stories for different people. Different angles for different contexts.
          </p>
          
          <p 
            className="mb-[40px]"
            style={{ 
              fontSize: '24px',
              lineHeight: '1.9',
              color: '#3D3835'
            }}
          >
            Some land. Some don't. Nothing compounds.
          </p>
          
          <p 
            className="mb-[40px]"
            style={{ 
              fontSize: '24px',
              lineHeight: '1.9',
              color: '#3D3835'
            }}
          >
            We take everything you know: all the years, all the patterns, all the client & partners conversations—and turn it into something consistent.
          </p>
          
          <p 
            style={{ 
              fontSize: '24px',
              lineHeight: '1.9',
              color: '#3D3835'
            }}
          >
            A narrative that builds trust whether you say it once or someone else repeats it in a room you'll never be in.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-[48px]">
          <div 
            className="bg-white/40 p-[48px] rounded-xl border border-[rgba(61,56,53,0.08)] transition-all duration-[400ms] hover:bg-white/60 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(61,56,53,0.12)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0ms',
              willChange: 'transform'
            }}
          >
            <h3 
              className="font-semibold mb-[28px]"
              style={{ 
                fontSize: '22px',
                lineHeight: '1.4',
                color: '#3D3835'
              }}
            >
              Brand Architecture<br/>& Strategy
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We map what you've built and find the pattern underneath.
            </p>
          </div>
          
          <div 
            className="bg-white/40 p-[48px] rounded-xl border border-[rgba(61,56,53,0.08)] transition-all duration-[400ms] hover:bg-white/60 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(61,56,53,0.12)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '200ms',
              willChange: 'transform'
            }}
          >
            <h3 
              className="font-semibold mb-[28px]"
              style={{ 
                fontSize: '22px',
                lineHeight: '1.4',
                color: '#3D3835'
              }}
            >
              Narrative & Content<br/>Strategy
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We turn that into stories that work in conversation, on social media, in pitch decks, everywhere.
            </p>
          </div>
          
          <div 
            className="bg-white/40 p-[48px] rounded-xl border border-[rgba(61,56,53,0.08)] transition-all duration-[400ms] hover:bg-white/60 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(61,56,53,0.12)]"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '400ms',
              willChange: 'transform'
            }}
          >
            <h3 
              className="font-semibold mb-[28px]"
              style={{ 
                fontSize: '22px',
                lineHeight: '1.4',
                color: '#3D3835'
              }}
            >
              PR & Communications<br/>Strategy
            </h3>
            <p 
              style={{ 
                fontSize: '17px',
                lineHeight: '1.9',
                color: 'rgba(61, 56, 53, 0.85)'
              }}
            >
              We get those stories in front of the people who need to hear them.
            </p>
          </div>
        </div>
      </div>
      
      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 1200px) {
          .grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 100px 40px !important;
          }
          
          .grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          
          .max-w-\\[800px\\] p {
            font-size: 20px !important;
            line-height: 1.8 !important;
          }
          
          .bg-white\\/40 {
            padding: 40px 32px !important;
          }
          
          h3 {
            font-size: 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 80px 24px !important;
          }
          
          .bg-white\\/40 {
            padding: 32px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoSection;
