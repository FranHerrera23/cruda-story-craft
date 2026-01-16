'use client';

import { useEffect, useRef, useState } from "react";

interface StatementConfig {
  line1: string;
  line2?: string;
  line2Muted?: boolean;
  highlightWord?: string;
}

const statements: StatementConfig[] = [
  { 
    line1: "Your LinkedIn sounds like you wrote it.", 
    line2: "Because you did — with us.",
    line2Muted: true 
  },
  { 
    line1: "Your website stops explaining", 
    line2: "and starts landing." 
  },
  { 
    line1: "Your pitch deck tells one story,", 
    line2: "not twelve.",
    line2Muted: true 
  },
  { 
    line1: "You stop competing on price", 
    line2: "and start competing on trust.",
    highlightWord: "trust"
  },
];

const AnimatedDivider = ({ 
  isVisible, 
  delay 
}: { 
  isVisible: boolean; 
  delay: number;
}) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => setAnimate(true), delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, delay]);

  return (
    <div
      style={{
        width: animate ? '100%' : '0%',
        height: '1px',
        backgroundColor: 'rgba(10, 10, 10, 0.08)',
        transition: 'width 0.6s ease',
        marginBottom: '80px',
      }}
    />
  );
};

const AnimatedStatement = ({ 
  config, 
  isVisible, 
  delay 
}: { 
  config: StatementConfig; 
  isVisible: boolean; 
  delay: number;
}) => {
  return (
    <div
      style={{
        marginBottom: '80px',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, 
                     transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
      }}
    >
      <p
        style={{
          fontSize: '36px',
          fontWeight: 500,
          lineHeight: 1.25,
          color: '#0A0A0A',
          letterSpacing: '-0.015em',
          maxWidth: '700px',
          margin: 0,
        }}
      >
        {config.line1}
        {config.line2 && (
          <>
            <br />
            <span
              style={{
                color: config.line2Muted ? 'rgba(10, 10, 10, 0.4)' : '#0A0A0A',
                fontWeight: config.line2Muted ? 400 : 500,
              }}
            >
              {config.highlightWord ? (
                <>
                  {config.line2.split(config.highlightWord)[0]}
                  <span style={{ color: '#FF2E63' }}>{config.highlightWord}</span>
                  {config.line2.split(config.highlightWord)[1]}
                </>
              ) : (
                config.line2
              )}
            </span>
          </>
        )}
      </p>
    </div>
  );
};

const WhatChangesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [closerVisible, setCloserVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger closer after all statements have animated
          setTimeout(() => setCloserVisible(true), 1200);
          observer.unobserve(element);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="what-changes-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 80px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Label */}
        <p
          style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          What changes
        </p>

        {/* First Divider */}
        <AnimatedDivider isVisible={isVisible} delay={0.1} />

        {/* Statements with Dividers */}
        {statements.map((statement, index) => (
          <div key={index}>
            <AnimatedStatement 
              config={statement} 
              isVisible={isVisible} 
              delay={0.2 + index * 0.15}
            />
            <AnimatedDivider 
              isVisible={isVisible} 
              delay={0.3 + index * 0.15} 
            />
          </div>
        ))}

        {/* Closer */}
        <div
          style={{
            marginTop: '40px',
            opacity: closerVisible ? 1 : 0,
            transform: closerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 1s ease, transform 1s ease',
          }}
        >
          <p
            style={{
              fontSize: '32px',
              fontWeight: 500,
              fontStyle: 'italic',
              color: '#FF2E63',
              letterSpacing: '-0.01em',
              margin: 0,
            }}
          >
            Your story finally works as hard as you do.
          </p>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .what-changes-section {
            padding: 80px 24px !important;
          }
          .what-changes-section p[style*="font-size: 36px"] {
            font-size: 24px !important;
            line-height: 1.35 !important;
          }
          .what-changes-section p[style*="font-size: 32px"] {
            font-size: 22px !important;
          }
          .what-changes-section div[style*="margin-bottom: 80px"] {
            margin-bottom: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatChangesSection;
