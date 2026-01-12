import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const changes = [
  "Your LinkedIn sounds like you wrote it. Because you did — with us.",
  "Your website stops explaining and starts landing.",
  "Your pitch deck tells one story, not twelve.",
  "Your team can articulate what makes you different — without fumbling.",
  "You stop competing on price and start competing on trust."
];

const WhatChangesSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '700px' }}>
        {/* Section Label */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          What changes
        </p>

        {/* List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {changes.map((change, index) => (
            <p
              key={index}
              className="transition-all duration-700"
              style={{
                fontSize: '24px',
                fontWeight: '400',
                color: '#0A0A0A',
                lineHeight: '1.6',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <span style={{ color: '#FF2E63', marginRight: '16px' }}>→</span>
              {change}
            </p>
          ))}
        </div>

        {/* Closing Line */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '24px',
            fontWeight: '500',
            fontStyle: 'italic',
            color: '#FF2E63',
            marginTop: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms'
          }}
        >
          Your story finally works as hard as you do.
        </p>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          section p {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatChangesSection;
