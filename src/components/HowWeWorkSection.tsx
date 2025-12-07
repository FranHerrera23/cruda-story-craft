import { useStaggerAnimation, useScrollProgress } from "@/hooks/useStaggerAnimation";

const steps = [
  {
    number: "01",
    title: "We talk.",
    description: "Weekly conversations about how you think, what you've built, what you'd never compromise on."
  },
  {
    number: "02",
    title: "We find the pattern.",
    description: "The milestones, projects, and proof points that were never communicated — or communicated badly. We find what makes your work yours."
  },
  {
    number: "03",
    title: "We put it to work.",
    description: "Your narrative — alive across LinkedIn, Instagram, website, pitch decks. Reputation in motion."
  }
];

const deliverables = [
  "Your story in one sentence",
  "A narrative document your team can use",
  "LinkedIn presence that sounds like you",
  "Pitch deck language",
  "Talking points for any room"
];

const HowWeWorkSection = () => {
  const { containerRef, isVisible, visibleItems } = useStaggerAnimation<HTMLElement>(steps.length + 3, 150);
  const { elementRef: timelineRef, progress } = useScrollProgress();

  return (
    <section 
      ref={containerRef} 
      style={{ 
        backgroundColor: '#F7F7F7',
        padding: '160px 80px'
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section header */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.4)',
            marginBottom: '80px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How it works
        </p>

        {/* Three columns with staggered animation */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3"
          style={{ gap: '48px', maxWidth: '1100px' }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="hover-breathe"
              style={{
                opacity: visibleItems[index] ? 1 : 0,
                transform: visibleItems[index] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Number */}
              <p
                style={{
                  fontSize: '100px',
                  fontWeight: '700',
                  color: 'rgba(10, 10, 10, 0.06)',
                  lineHeight: '1',
                  marginBottom: '24px',
                  fontFeatureSettings: '"tnum"'
                }}
              >
                {step.number}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: '26px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  lineHeight: '1.3',
                  marginBottom: '16px'
                }}
              >
                {step.title}
              </p>

              {/* Description */}
              <p
                style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.7'
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline Bar with scroll progress */}
        <div
          ref={timelineRef}
          className="transition-all duration-700"
          style={{
            marginTop: '80px',
            position: 'relative',
            maxWidth: '1100px',
            opacity: visibleItems[steps.length] ? 1 : 0
          }}
        >
          {/* Bar with dots */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: progress > 0.1 ? '#FF2E63' : 'rgba(10, 10, 10, 0.25)',
                flexShrink: 0,
                transition: 'background-color 300ms ease'
              }}
            />
            <div
              style={{
                flex: 1,
                height: '2px',
                backgroundColor: 'rgba(10, 10, 10, 0.15)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Progress fill */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#FF2E63',
                  transformOrigin: 'left',
                  transform: `scaleX(${Math.min(progress * 1.5, 1)})`,
                  transition: 'transform 100ms linear'
                }}
              />
            </div>
            <div
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: progress > 0.6 ? '#FF2E63' : 'rgba(10, 10, 10, 0.25)',
                flexShrink: 0,
                transition: 'background-color 300ms ease'
              }}
            />
          </div>

          {/* Labels */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <div>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: progress > 0.1 ? '#0A0A0A' : 'rgba(10, 10, 10, 0.5)',
                  transition: 'color 300ms ease',
                  display: 'block'
                }}
              >
                Month 1
              </span>
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgba(10, 10, 10, 0.4)',
                  marginTop: '4px',
                  display: 'block'
                }}
              >
                Discovery
              </span>
            </div>
            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: progress > 0.6 ? '#0A0A0A' : 'rgba(10, 10, 10, 0.5)',
                  transition: 'color 300ms ease',
                  display: 'block'
                }}
              >
                Month 4
              </span>
              <span
                style={{
                  fontSize: '13px',
                  color: 'rgba(10, 10, 10, 0.4)',
                  marginTop: '4px',
                  display: 'block'
                }}
              >
                Deployment
              </span>
            </div>
          </div>
        </div>

        {/* Two-column bottom section */}
        <div
          className="hover-lift grid grid-cols-1 md:grid-cols-2"
          style={{
            marginTop: '60px',
            backgroundColor: '#FFFFFF',
            padding: '48px',
            borderRadius: '8px',
            gap: '60px',
            maxWidth: '1100px',
            opacity: visibleItems[steps.length + 1] ? 1 : 0,
            transform: visibleItems[steps.length + 1] ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 300ms ease'
          }}
        >
          {/* What We Need */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.4)',
                marginBottom: '20px'
              }}
            >
              What we need from you
            </p>
            <p
              style={{
                fontSize: '20px',
                fontWeight: '400',
                color: '#0A0A0A',
                lineHeight: '1.5'
              }}
            >
              One hour a week. Feedback over WhatsApp. And guts.
            </p>
          </div>

          {/* What You Walk Away With */}
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.4)',
                marginBottom: '20px'
              }}
            >
              What you walk away with
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {deliverables.map((item, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '17px',
                    fontWeight: '400',
                    color: 'rgba(10, 10, 10, 0.7)',
                    lineHeight: '1.8',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 120px 24px !important;
          }
          section .grid > div > p:first-child {
            font-size: 72px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;