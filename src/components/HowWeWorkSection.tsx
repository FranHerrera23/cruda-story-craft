import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    number: "01",
    title: "We talk.",
    description: "About how you think. What you've built. What you'd never compromise on."
  },
  {
    number: "02",
    title: "We find the pattern.",
    description: "The philosophy underneath your work. The thing that makes it yours."
  },
  {
    number: "03",
    title: "We put it to work.",
    description: "Pitch decks. LinkedIn. Proposals. Talks. Content that builds trust before you show up."
  }
];

const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '160px 60px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section header */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '14px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.4)',
            marginBottom: '80px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How it works
        </p>

        {/* Three columns */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '60px' }}
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
              {/* Number */}
              <p
                style={{
                  fontSize: 'clamp(56px, 5vw, 72px)',
                  fontWeight: '700',
                  color: 'rgba(10, 10, 10, 0.08)',
                  marginBottom: '24px'
                }}
              >
                {step.number}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: '28px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '16px'
                }}
              >
                {step.title}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.6'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Bar */}
        <div
          className="transition-all duration-700"
          style={{
            marginTop: '100px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '400ms'
          }}
        >
          <span style={{ fontSize: '14px', color: 'rgba(10, 10, 10, 0.4)' }}>Month 1</span>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(10, 10, 10, 0.2)' }} />
          <div style={{ flex: 1, height: '2px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(10, 10, 10, 0.2)' }} />
          <span style={{ fontSize: '14px', color: 'rgba(10, 10, 10, 0.4)' }}>Month 4</span>
        </div>

        {/* What We Need */}
        <div
          className="transition-all duration-700"
          style={{
            marginTop: '80px',
            opacity: isVisible ? 1 : 0,
            transitionDelay: '500ms'
          }}
        >
          <p
            style={{
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)'
            }}
          >
            What we need from you
          </p>
          <p
            style={{
              fontSize: '20px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.7)',
              marginTop: '16px'
            }}
          >
            One hour a week. WhatsApp. And guts.
          </p>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
