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
      <div className="max-w-[1300px] mx-auto">
        {/* Section Label */}
        <div 
          className="text-center mb-[80px] uppercase"
          style={{ 
            fontSize: '11px',
            letterSpacing: '3px',
            color: 'rgba(61, 56, 53, 0.4)',
            fontWeight: 500
          }}
        >
          OUR ZONE OF GENIUS
        </div>
        
        {/* Intro Text with Visual Hierarchy */}
        <div className="max-w-[900px] mx-auto mb-[140px]">
          {/* Paragraph 1: Hook (LARGE, BOLD) */}
          <p 
            className="text-center mb-0"
            style={{ 
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '1.5',
              color: '#3D3835'
            }}
          >
            You know what you do. You can talk about it. Hell, you've been talking about it for years.
          </p>
          
          {/* Red Dots Divider */}
          <div 
            className="text-center my-[60px]"
            style={{
              fontSize: '20px',
              color: '#FF2E63',
              letterSpacing: '12px'
            }}
          >
            <span 
              className="inline-block opacity-0 animate-[dotFadeIn_400ms_ease-out_0ms_forwards]"
              style={{ willChange: 'opacity, transform' }}
            >
              •
            </span>
            <span 
              className="inline-block opacity-0 animate-[dotFadeIn_400ms_ease-out_200ms_forwards]"
              style={{ willChange: 'opacity, transform' }}
            >
              •
            </span>
            <span 
              className="inline-block opacity-0 animate-[dotFadeIn_400ms_ease-out_400ms_forwards]"
              style={{ willChange: 'opacity, transform' }}
            >
              •
            </span>
          </div>
          
          {/* Paragraph 2: Problem (REGULAR) */}
          <p 
            className="text-center mb-0"
            style={{ 
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: '1.8',
              color: 'rgba(61, 56, 53, 0.85)'
            }}
          >
            The problem isn't that you can't explain your work. It's that the explanation changes every time. Different stories for different people. Different angles for different contexts. Some land. Some don't. Nothing compounds.
          </p>
          
          {/* Red Dots Divider */}
          <div 
            className="text-center my-[60px]"
            style={{
              fontSize: '20px',
              color: '#FF2E63',
              letterSpacing: '12px'
            }}
          >
            <span 
              className="inline-block opacity-0 animate-[dotFadeIn_400ms_ease-out_0ms_forwards]"
              style={{ willChange: 'opacity, transform' }}
            >
              •
            </span>
            <span 
              className="inline-block opacity-0 animate-[dotFadeIn_400ms_ease-out_200ms_forwards]"
              style={{ willChange: 'opacity, transform' }}
            >
              •
            </span>
            <span 
              className="inline-block opacity-0 animate-[dotFadeIn_400ms_ease-out_400ms_forwards]"
              style={{ willChange: 'opacity, transform' }}
            >
              •
            </span>
          </div>
          
          {/* Paragraph 3: Solution (EMPHASIZED) */}
          <p 
            className="text-center mb-0"
            style={{ 
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: '1.8',
              color: '#3D3835'
            }}
          >
            We take everything you know—all the years, all the patterns, all the client conversations—and turn it into something consistent. A narrative that builds trust whether you say it once or someone else repeats it in a room you'll never be in.
          </p>
        </div>
        
        {/* Service Cards with Visual Hierarchy */}
        <div className="grid md:grid-cols-3 gap-[48px]">
          {/* Card 1 */}
          <div 
            className="bg-white/50 p-[48px] px-[40px] rounded-xl border border-[rgba(61,56,53,0.08)] transition-all duration-[400ms] hover:bg-white/70 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(61,56,53,0.15)] cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0ms',
              willChange: 'transform'
            }}
          >
            {/* Card Header with Border */}
            <div className="mb-[32px] pb-[28px] border-b border-[rgba(61,56,53,0.1)]">
              <h3 
                className="mb-[8px]"
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.4',
                  color: '#3D3835'
                }}
              >
                Brand Architecture<br/>& Strategy
              </h3>
              <p 
                className="m-0"
                style={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(61, 56, 53, 0.55)',
                  fontStyle: 'italic'
                }}
              >
                (aka: How Everything Fits Together)
              </p>
            </div>
            
            {/* Card Body */}
            <div>
              <p 
                className="mb-[20px]"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(61, 56, 53, 0.85)'
                }}
              >
                You've built more than one thing. Maybe different services. Different projects. Different audiences. Right now they feel scattered.
              </p>
              <p 
                className="mb-0"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(61, 56, 53, 0.85)'
                }}
              >
                We map how it all connects. Not by changing what you do—by showing how it already fits together in a way that makes sense to someone who just met you.
              </p>
            </div>
          </div>
          
          {/* Card 2 */}
          <div 
            className="bg-white/50 p-[48px] px-[40px] rounded-xl border border-[rgba(61,56,53,0.08)] transition-all duration-[400ms] hover:bg-white/70 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(61,56,53,0.15)] cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '300ms',
              willChange: 'transform'
            }}
          >
            {/* Card Header with Border */}
            <div className="mb-[32px] pb-[28px] border-b border-[rgba(61,56,53,0.1)]">
              <h3 
                className="mb-[8px]"
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.4',
                  color: '#3D3835'
                }}
              >
                Narrative & Content<br/>Strategy
              </h3>
              <p 
                className="m-0"
                style={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(61, 56, 53, 0.55)',
                  fontStyle: 'italic'
                }}
              >
                (aka: Making It Make Sense)
              </p>
            </div>
            
            {/* Card Body */}
            <div>
              <p 
                className="mb-[20px]"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(61, 56, 53, 0.85)'
                }}
              >
                You need to talk about your work in a hundred different places. LinkedIn. Pitch decks. Conference stages. Coffee meetings.
              </p>
              <p 
                className="mb-0"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(61, 56, 53, 0.85)'
                }}
              >
                We give you a vocabulary—phrases, stories, examples—that work everywhere. Not corporate speak. Not buzzwords. Just clear language that sounds like you and makes people go "Oh, I get it."
              </p>
            </div>
          </div>
          
          {/* Card 3 */}
          <div 
            className="bg-white/50 p-[48px] px-[40px] rounded-xl border border-[rgba(61,56,53,0.08)] transition-all duration-[400ms] hover:bg-white/70 hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(61,56,53,0.15)] cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '600ms',
              willChange: 'transform'
            }}
          >
            {/* Card Header with Border */}
            <div className="mb-[32px] pb-[28px] border-b border-[rgba(61,56,53,0.1)]">
              <h3 
                className="mb-[8px]"
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.4',
                  color: '#3D3835'
                }}
              >
                PR & Communications<br/>Strategy
              </h3>
              <p 
                className="m-0"
                style={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(61, 56, 53, 0.55)',
                  fontStyle: 'italic'
                }}
              >
                (aka: Getting in the Right Rooms)
              </p>
            </div>
            
            {/* Card Body */}
            <div>
              <p 
                className="mb-[20px]"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(61, 56, 53, 0.85)'
                }}
              >
                Once you can explain your work clearly, the next question is: who needs to hear it?
              </p>
              <p 
                className="mb-0"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(61, 56, 53, 0.85)'
                }}
              >
                We figure that out—then we get you there. Press features. Podcast interviews. Speaking opportunities. Industry publications. The places where your ideal clients and partners are already paying attention.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animations & Mobile Styles */}
      <style>{`
        @keyframes dotFadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 1200px) {
          .grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
          }
        }
        
        @media (max-width: 768px) {
          section {
            padding: 100px 40px 120px !important;
          }
          
          .grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        
        @media (max-width: 480px) {
          section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDoSection;
