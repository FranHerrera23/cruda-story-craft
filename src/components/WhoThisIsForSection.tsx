'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const WhoThisIsForSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  const [bulletsVisible, setBulletsVisible] = useState(false);
  const [leftHovered, setLeftHovered] = useState(false);
  const [rightHovered, setRightHovered] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setBulletsVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const forPoints = [
    "Winning work but invisible outside your network",
    "Pitching against firms with louder marketing and weaker portfolios",
    "Ready to stop explaining from scratch every time you walk into a room"
  ];

  const notForPoints = [
    "You need leads by Friday",
    "You want impressions, not understanding",
    "You're not ready to be the face of your work"
  ];

  return (
    <section 
      ref={elementRef} 
      className="who-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div 
        style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '32px',
          alignItems: 'start', // V6 fix: align to top, not stretch
        }}
        className="who-grid"
      >
        {/* Left Card - Primary (Elevated) */}
        <div
          className="who-for-card transition-all duration-300"
          onMouseEnter={() => setLeftHovered(true)}
          onMouseLeave={() => setLeftHovered(false)}
          style={{
            background: '#FFFFFF',
            padding: '48px',
            borderRadius: '2px',
            border: '1px solid rgba(10, 10, 10, 0.08)',
            boxShadow: leftHovered 
              ? '0 16px 40px rgba(0, 0, 0, 0.08)' 
              : '0 2px 16px rgba(0, 0, 0, 0.04)',
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? (leftHovered ? 'translateY(-4px)' : 'translateY(0)') 
              : 'translateY(20px)',
            cursor: 'default',
          }}
        >
          {/* Label */}
          <p style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '24px'
          }}>
            Who this is for
          </p>
          
          {/* Intro text */}
          <p style={{
            fontSize: '18px',
            fontWeight: '400',
            lineHeight: '1.5',
            color: '#0A0A0A',
            marginBottom: '28px'
          }}>
            Construction, real estate, architecture, and design firms doing $20M+ who are:
          </p>
          
          {/* Bullet points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {forPoints.map((point, index) => (
              <p 
                key={index}
                className="bullet transition-all duration-500"
                style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  color: 'rgba(10, 10, 10, 0.7)',
                  paddingLeft: '24px',
                  position: 'relative',
                  opacity: bulletsVisible ? 1 : 0,
                  transform: bulletsVisible ? 'translateX(0)' : 'translateX(-12px)',
                  transitionDelay: `${(index + 1) * 100}ms`
                }}
              >
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: '#FF2E63',
                  fontWeight: '500'
                }}>→</span>
                {point}
              </p>
            ))}
          </div>
          
          {/* M&A note */}
          <p style={{
            fontSize: '16px',
            fontStyle: 'italic',
            color: 'rgba(10, 10, 10, 0.5)',
            marginTop: '28px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(10, 10, 10, 0.08)'
          }}>
            Also: M&A, succession, expansion into new markets — any moment where reputation needs to arrive before you do.
          </p>
        </div>

        {/* Right Card - Ghost (V6 fix: auto-height, align to top) */}
        <div
          className="who-not-card transition-all duration-300"
          onMouseEnter={() => setRightHovered(true)}
          onMouseLeave={() => setRightHovered(false)}
          style={{
            background: 'transparent',
            padding: '48px',
            border: `1px solid ${rightHovered ? 'rgba(10, 10, 10, 0.15)' : 'rgba(10, 10, 10, 0.08)'}`,
            borderRadius: '2px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible 
              ? (rightHovered ? 'translateY(-4px)' : 'translateY(0)') 
              : 'translateY(20px)',
            transitionDelay: isVisible ? '0ms' : '150ms',
            alignSelf: 'start', // V6 fix: don't stretch to match left card
            minHeight: 'auto',
            cursor: 'default',
          }}
        >
          {/* Label */}
          <p style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.35)',
            marginBottom: '24px'
          }}>
            Who this isn't for
          </p>

          {/* Bullet points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {notForPoints.map((point, index) => (
              <p
                key={index}
                style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  color: 'rgba(10, 10, 10, 0.4)',
                  paddingLeft: '24px',
                  position: 'relative'
                }}
              >
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'rgba(10, 10, 10, 0.2)'
                }}>✗</span>
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .who-section {
            padding: 80px 24px !important;
          }
          .who-grid {
            grid-template-columns: 1fr !important;
          }
          .who-for-card,
          .who-not-card {
            padding: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhoThisIsForSection;
