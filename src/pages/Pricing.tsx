import { useState, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const Pricing = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: investmentRef, isVisible: investmentVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Load Calendly script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const faqs = [
    {
      question: "What's the investment?",
      answer: "$2,600/month with a 6-month minimum commitment. This builds your complete narrative system — strategy, content, and ongoing evolution. Most clients stay 1-3 years."
    },
    {
      question: "What does the process look like?",
      answer: "Month 1 is strategy — we extract your positioning, founder narrative, and content pillars. Months 2-6 are execution — LinkedIn, website, pitch decks, talking points, with weekly calls and WhatsApp access. Month 7+ is evolution — new markets, new projects, new rooms to walk into."
    },
    {
      question: "Who do you work with?",
      answer: "Construction, real estate, architecture, and design firms doing $20M+ who are winning work but invisible outside their network. Founders ready to stop explaining from scratch every time they walk into a room."
    },
    {
      question: "What if I'm not in construction or hospitality?",
      answer: "Patterns transcend industries. If you've built something that matters and can't explain why, that's the same challenge. We should talk."
    }
  ];

  const phases = [
    {
      label: "Month 1: Strategy",
      body: "We extract your story — positioning, founder narrative, content pillars. 10-15 pieces ready to deploy."
    },
    {
      label: "Months 2-6: Execution",
      body: "LinkedIn, website, pitch decks, talking points. Weekly calls. WhatsApp access throughout."
    },
    {
      label: "Month 7+: Evolution",
      body: "New markets. New projects. New rooms to walk into."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: HERO — The Direct Ask */}
      <section 
        ref={heroRef} 
        className="pricing-hero" 
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '120px 80px 80px'
        }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <h1 
            className="transition-all duration-700 pricing-headline"
            style={{ 
              fontSize: '52px', 
              fontWeight: '600', 
              lineHeight: '1.15', 
              letterSpacing: '-0.02em', 
              color: '#0A0A0A',
              opacity: heroVisible ? 1 : 0, 
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            <span style={{ display: 'block' }}>You've seen the work.</span>
            <span style={{ display: 'block' }}>Here's what it costs.</span>
          </h1>
        </div>
      </section>

      {/* SECTION 2: THE INVESTMENT */}
      <section 
        ref={investmentRef} 
        className="investment-section"
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '80px' 
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Grid with top/bottom dividers */}
          <div 
            className="investment-grid transition-all duration-700"
            style={{
              display: 'grid',
              gridTemplateColumns: '60% 40%',
              gap: '80px',
              borderTop: '1px solid rgba(10, 10, 10, 0.08)',
              borderBottom: '1px solid rgba(10, 10, 10, 0.08)',
              padding: '80px 0',
              opacity: investmentVisible ? 1 : 0,
              transform: investmentVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {/* Left Column - The Offer */}
            <div>
              <h2 
                style={{
                  fontSize: '32px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '48px',
                  letterSpacing: '-0.01em'
                }}
              >
                A narrative system built around you.
              </h2>

              {/* Phases */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {phases.map((phase, index) => (
                  <div key={index}>
                    <p style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'rgba(10, 10, 10, 0.4)',
                      marginBottom: '8px'
                    }}>
                      {phase.label}
                    </p>
                    <p style={{
                      fontSize: '18px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      color: 'rgba(10, 10, 10, 0.7)'
                    }}>
                      {phase.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - The Price */}
            <div style={{ textAlign: 'right' }}>
              <p style={{
                fontSize: '72px',
                fontWeight: '600',
                color: '#0A0A0A',
                letterSpacing: '-0.03em',
                lineHeight: '1',
                margin: 0
              }}>
                $2,600
              </p>
              <p style={{
                fontSize: '24px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.5)',
                marginTop: '4px'
              }}>
                /month
              </p>
              
              <div style={{
                width: '48px',
                height: '1px',
                backgroundColor: 'rgba(10, 10, 10, 0.15)',
                marginLeft: 'auto',
                marginTop: '24px',
                marginBottom: '24px'
              }} />
              
              <p style={{
                fontSize: '16px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.5)',
                lineHeight: '1.5'
              }}>
                6-month minimum.<br />
                Most clients stay 1-3 years.
              </p>
            </div>
          </div>

          {/* Footnote + CTA */}
          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <p 
              className="transition-all duration-700"
              style={{
                fontSize: '16px',
                fontStyle: 'italic',
                color: 'rgba(10, 10, 10, 0.4)',
                marginBottom: '40px',
                opacity: investmentVisible ? 1 : 0,
                transitionDelay: '200ms'
              }}
            >
              Need content-only? $1,800/month. Same quality. No strategy layer.
            </p>

            <a 
              href="#book"
              className="cta-button-pricing inline-flex items-center gap-3 transition-all"
              style={{ 
                backgroundColor: '#0A0A0A', 
                color: '#FFFFFF', 
                padding: '18px 28px', 
                fontSize: '15px', 
                fontWeight: '500',
                borderRadius: '0', 
                textDecoration: 'none' 
              }} 
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF2E63'; }} 
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0A0A0A'; }}
            >
              Start a Conversation
              <span style={{ fontSize: '18px' }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 3: ONE TESTIMONIAL */}
      <section 
        ref={testimonialRef} 
        style={{ 
          backgroundColor: '#0A0A0A', 
          padding: '100px 80px' 
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p 
            className="transition-all duration-700"
            style={{ 
              fontSize: '32px', 
              fontWeight: '400', 
              fontStyle: 'italic', 
              color: '#FFFFFF', 
              lineHeight: '1.4', 
              opacity: testimonialVisible ? 1 : 0 
            }}
          >
            "I used to dread the 'so what do you do?' question. Now I look forward to it."
          </p>
          <p 
            className="transition-all duration-700"
            style={{ 
              fontSize: '16px', 
              fontWeight: '400', 
              color: '#FF2E63', 
              marginTop: '24px', 
              opacity: testimonialVisible ? 1 : 0, 
              transitionDelay: '100ms' 
            }}
          >
            — Mike Kaeding, CEO, Norhart
          </p>
        </div>
      </section>

      {/* SECTION 4: FAQ — Streamlined */}
      <section 
        ref={faqRef}
        className="faq-section"
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '120px 80px' 
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p 
            className="transition-all duration-700"
            style={{
              fontSize: '14px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#FF2E63',
              marginBottom: '48px',
              opacity: faqVisible ? 1 : 0
            }}
          >
            Frequently asked
          </p>

          <div>
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="transition-all duration-500"
                style={{ 
                  borderBottom: '1px solid rgba(10, 10, 10, 0.08)',
                  opacity: faqVisible ? 1 : 0,
                  transform: faqVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 100}ms`
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '32px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    color: '#0A0A0A',
                    paddingRight: '24px'
                  }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={24}
                    style={{
                      color: 'rgba(10, 10, 10, 0.3)',
                      flexShrink: 0,
                      transition: 'transform 0.2s ease',
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)'
                    }}
                  />
                </button>
                
                <div
                  style={{
                    maxHeight: openFaq === index ? '300px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease, padding 0.3s ease',
                    paddingBottom: openFaq === index ? '32px' : '0'
                  }}
                >
                  <p style={{
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    color: 'rgba(10, 10, 10, 0.6)',
                    maxWidth: '700px'
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA — Book the call (Calendly embed) */}
      <section 
        id="book"
        ref={ctaRef}
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '120px 80px',
          borderTop: '1px solid rgba(10, 10, 10, 0.08)'
        }}
      >
        <div 
          className="final-cta-grid"
          style={{ 
            maxWidth: '1100px', 
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start'
          }}
        >
          {/* Left Column - Copy */}
          <div 
            className="transition-all duration-700"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <h2 style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '32px',
              letterSpacing: '-0.01em'
            }}>
              Start a conversation
            </h2>
            
            <div style={{
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '1.7',
              color: 'rgba(10, 10, 10, 0.6)'
            }}>
              <p style={{ marginBottom: '24px' }}>
                45 minutes. No pitch. No pressure.
              </p>
              <p style={{ marginBottom: '24px' }}>
                If we see the pattern, we'll say so.<br />
                If we can't help, we'll say that too.
              </p>
            </div>
          </div>

          {/* Right Column - Calendly */}
          <div 
            className="transition-all duration-700"
            style={{
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/cruda-intro/30min"
              style={{ minWidth: '320px', height: '650px' }}
            />
          </div>
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .pricing-hero { 
            padding: 100px 24px 60px !important; 
          }
          .pricing-headline { 
            font-size: 36px !important; 
          }
          .investment-section {
            padding: 60px 24px !important;
          }
          .investment-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 48px 0 !important;
          }
          .investment-grid > div:last-child {
            text-align: left !important;
          }
          .investment-grid > div:last-child > div {
            margin-left: 0 !important;
          }
          .faq-section {
            padding: 80px 24px !important;
          }
          .final-cta-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          section[id="book"] {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Pricing;