'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  const steps = [
    {
      number: "01",
      time: "Month 1",
      title: "Why you got into this in the first place.",
      body: [
        "Before the company. Before the titles. There was a reason you chose this work — something about the craft, the material, the problem you wanted to solve.",
        "We start there."
      ]
    },
    {
      number: "02",
      time: "Months 2–6",
      title: "Your expertise starts reaching the right people.",
      body: [
        "LinkedIn. Instagram. Pitch decks. Talking points — your thinking, showing up where your next clients, partners, and peers are already looking.",
        "Not content for content's sake. A system that opens doors."
      ]
    },
    {
      number: "03",
      time: "Month 7+",
      title: "New rooms. Already warm.",
      body: [
        "New markets. New geographies. New conversations that start from recognition, not explanation.",
        "Most clients stay here. Not because they're locked in — because the work keeps compounding."
      ]
    }
  ];

  return (
    <section
      ref={elementRef}
      className="timeline-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Label */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '64px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How it works
        </p>

        {/* Clean 3-Column Grid */}
        <div
          className="timeline-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px'
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="transition-all duration-700"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              {/* Step Number */}
              <p style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(10, 10, 10, 0.2)',
                marginBottom: '12px'
              }}>
                {step.number}
              </p>

              {/* Time Label */}
              <p style={{
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.4)',
                marginBottom: '20px'
              }}>
                {step.time}
              </p>

              {/* Divider */}
              <div style={{
                width: '32px',
                height: '2px',
                background: 'rgba(10, 10, 10, 0.1)',
                marginBottom: '24px'
              }} />

              {/* Title */}
              <h4 style={{
                fontSize: '22px',
                fontWeight: '600',
                color: '#0A0A0A',
                marginBottom: '16px'
              }}>
                {step.title}
              </h4>

              {/* Body */}
              <div style={{
                fontSize: '17px',
                fontWeight: '400',
                lineHeight: '1.65',
                color: 'rgba(10, 10, 10, 0.6)'
              }}>
                {step.body.map((text, i) => (
                  <p key={i} style={{ marginBottom: i < step.body.length - 1 ? '16px' : 0 }}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .timeline-section {
            padding: 80px 24px !important;
          }
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
