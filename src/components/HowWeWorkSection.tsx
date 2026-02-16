'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  const steps = [
    {
      number: "01",
      time: "Month 1",
      title: "We listen.",
      body: [
        "Weekly conversations. Your projects, your milestones, your way of seeing the world.",
        "We're not writing yet. We're finding the pattern."
      ]
    },
    {
      number: "02",
      time: "Months 2–6",
      title: "We build.",
      body: [
        "Your narrative — across LinkedIn, website, pitch decks, talking points.",
        "Not content for content's sake. A system that holds."
      ]
    },
    {
      number: "03",
      time: "Month 7+",
      title: "Most clients stay.",
      body: [
        "Because the work evolves. New markets. New projects. New rooms to walk into."
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
                fontSize: '24px',
                fontWeight: '600',
                color: 'rgba(10, 10, 10, 0.15)',
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

              {/* Divider - Red accent, larger for step 3 */}
              <div style={{
                width: index === 2 ? '48px' : '32px',
                height: '2px',
                background: '#FF2E63',
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
