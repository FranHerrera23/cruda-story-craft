'use client';

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

    // Fallback timeout to ensure cards show up even if observer doesn't fire
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
      className="py-[100px] px-[60px]"
      style={{ backgroundColor: '#FAFAFA' }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Section Label */}
        <div 
          className="text-center mb-[80px] uppercase"
          style={{ 
            fontSize: '11px',
            letterSpacing: '3px',
            color: 'rgba(26, 26, 26, 0.4)',
            fontWeight: 500
          }}
        >
          WHAT YOU WALK AWAY WITH
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
              color: '#1A1A1A'
            }}
          >
            You know what you do. You can talk about it. Hell, you've been talking about it for years.
          </p>
          
          {/* Red Dots Divider */}
          <div 
            className="text-center my-[60px]"
            style={{
              fontSize: '20px',
              color: '#E8623A',
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
              color: 'rgba(26, 26, 26, 0.8)'
            }}
          >
            The problem isn't that you can't explain your work. It's that the explanation changes every time. Different stories for different people. Different angles for different contexts. Some land. Some don't. Nothing compounds.
          </p>
          
          {/* Red Dots Divider */}
          <div 
            className="text-center my-[60px]"
            style={{
              fontSize: '20px',
              color: '#E8623A',
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
              color: '#1A1A1A'
            }}
          >
            We take everything you know—all the years, all the patterns, all the client conversations—and turn it into something consistent. A narrative that builds trust whether you say it once or someone else repeats it in a room you'll never be in.
          </p>
        </div>
        
        {/* Service Cards with Visual Hierarchy */}
        <div className="grid md:grid-cols-3 gap-[48px]">
          {/* Card 1: Extracted */}
          <div 
            className="bg-white/70 p-[48px] px-[40px] rounded-xl border border-[rgba(26,26,26,0.06)] transition-all duration-[400ms] hover:bg-white hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(26,26,26,0.1)] cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '0ms',
              willChange: 'transform'
            }}
          >
            {/* Card Header with Border */}
            <div className="mb-[32px] pb-[28px] border-b border-[rgba(26,26,26,0.08)]">
              <h3 
                className="mb-[8px]"
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.4',
                  color: '#1A1A1A'
                }}
              >
                Extracted
              </h3>
              <p 
                className="m-0"
                style={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(26, 26, 26, 0.5)',
                  fontStyle: 'italic'
                }}
              >
                (aka: Your Story, Finally Clear)
              </p>
            </div>
            
            {/* Card Body */}
            <div>
              <p 
                className="mb-[20px]"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(26, 26, 26, 0.8)'
                }}
              >
                Years of knowledge, patterns, and client conversations—pulled out of your head and turned into something consistent.
              </p>
              <p 
                className="mb-0"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(26, 26, 26, 0.8)'
                }}
              >
                A narrative that builds trust whether you say it once or someone else repeats it in a room you'll never be in.
              </p>
            </div>
          </div>
          
          {/* Card 2: Deployed */}
          <div 
            className="bg-white/70 p-[48px] px-[40px] rounded-xl border border-[rgba(26,26,26,0.06)] transition-all duration-[400ms] hover:bg-white hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(26,26,26,0.1)] cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '300ms',
              willChange: 'transform'
            }}
          >
            {/* Card Header with Border */}
            <div className="mb-[32px] pb-[28px] border-b border-[rgba(26,26,26,0.08)]">
              <h3 
                className="mb-[8px]"
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.4',
                  color: '#1A1A1A'
                }}
              >
                Deployed
              </h3>
              <p 
                className="m-0"
                style={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(26, 26, 26, 0.5)',
                  fontStyle: 'italic'
                }}
              >
                (aka: Put to Work Everywhere)
              </p>
            </div>
            
            {/* Card Body */}
            <div>
              <p 
                className="mb-[20px]"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(26, 26, 26, 0.8)'
                }}
              >
                LinkedIn. Pitch decks. Conference stages. Press interviews. Your narrative implemented across every touchpoint that matters.
              </p>
              <p 
                className="mb-0"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(26, 26, 26, 0.8)'
                }}
              >
                Not corporate speak. Not buzzwords. Clear language that sounds like you and makes people go "Oh, I get it."
              </p>
            </div>
          </div>
          
          {/* Card 3: Amplified */}
          <div 
            className="bg-white/70 p-[48px] px-[40px] rounded-xl border border-[rgba(26,26,26,0.06)] transition-all duration-[400ms] hover:bg-white hover:-translate-y-[6px] hover:shadow-[0_12px_40px_rgba(26,26,26,0.1)] cursor-pointer"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              transitionDelay: '600ms',
              willChange: 'transform'
            }}
          >
            {/* Card Header with Border */}
            <div className="mb-[32px] pb-[28px] border-b border-[rgba(26,26,26,0.08)]">
              <h3 
                className="mb-[8px]"
                style={{ 
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '1.4',
                  color: '#1A1A1A'
                }}
              >
                Amplified
              </h3>
              <p 
                className="m-0"
                style={{ 
                  fontSize: '16px',
                  fontWeight: 400,
                  color: 'rgba(26, 26, 26, 0.5)',
                  fontStyle: 'italic'
                }}
              >
                (aka: Scaled Beyond You)
              </p>
            </div>
            
            {/* Card Body */}
            <div>
              <p 
                className="mb-[20px]"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(26, 26, 26, 0.8)'
                }}
              >
                Press features. Podcast interviews. Speaking opportunities. Industry publications. The places where your ideal clients are already paying attention.
              </p>
              <p 
                className="mb-0"
                style={{ 
                  fontSize: '17px',
                  lineHeight: '1.9',
                  color: 'rgba(26, 26, 26, 0.8)'
                }}
              >
                Your narrative, reaching rooms you'll never be in—building trust at scale.
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
