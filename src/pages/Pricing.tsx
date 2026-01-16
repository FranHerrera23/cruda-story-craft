import { useState } from "react";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

const Pricing = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: systemRef, isVisible: systemVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's the investment?",
      answer: "$2,600/month with a 6-month minimum. Most clients stay 1-3 years."
    },
    {
      question: "What does the process look like?",
      answer: "Month 1 is deep strategy work — weekly conversations, extracting your story, building the narrative foundation. Months 2-6, we execute across LinkedIn, website, pitch decks, and talking points. Weekly calls throughout. WhatsApp access for quick questions."
    },
    {
      question: "Who do you work with?",
      answer: "Construction, real estate, architecture, and design firms doing $20M+ who are winning work but invisible outside their network. Also: M&A, succession, expansion — any moment where reputation needs to arrive before you do."
    },
    {
      question: "What if I'm not in construction or hospitality?",
      answer: "We've worked across industries — the pattern is the same. If you've built expertise that doesn't translate on its own, we can probably help. Book a conversation and we'll tell you honestly if there's a fit."
    }
  ];

  const comparisonRows = [
    { cruda: "$2,600/month", agency: "$8,000 - $25,000/month" },
    { cruda: "Senior team only", agency: "Junior account managers" },
    { cruda: "Weekly calls + WhatsApp", agency: "Monthly check-ins" },
    { cruda: "Strategy + execution", agency: "Strategy OR execution" },
    { cruda: "Built around your voice", agency: "Template-driven content" }
  ];

  const phases = [
    {
      label: "MONTH 1",
      title: "Strategy",
      body: "We extract your story — positioning, founder narrative, content pillars. 10-15 pieces ready to deploy."
    },
    {
      label: "MONTHS 2-6",
      title: "Execution",
      body: "LinkedIn, website, pitch decks, talking points. Weekly calls. WhatsApp access throughout."
    },
    {
      label: "MONTH 7+",
      title: "Evolution",
      body: "New markets. New projects. New rooms to walk into."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section 
        ref={heroRef} 
        className="pricing-hero" 
        style={{ 
          backgroundColor: '#FFFFFF', 
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '120px 80px'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          <h1 
            className="transition-all duration-700 pricing-headline"
            style={{ 
              fontSize: '52px', 
              fontWeight: '600', 
              lineHeight: '1.2', 
              letterSpacing: '-0.02em', 
              color: '#0A0A0A',
              marginBottom: '0',
              opacity: heroVisible ? 1 : 0, 
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            No discovery decks. No quarterly reviews.<br />
            Just a narrative system that works —
          </h1>
          <p 
            className="transition-all duration-700"
            style={{ 
              fontSize: '64px', 
              fontWeight: '700', 
              color: '#FF2E63',
              marginTop: '32px',
              opacity: heroVisible ? 1 : 0, 
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '50ms'
            }}
          >
            $2,600/month.
          </p>

          <p 
            className="transition-all duration-700"
            style={{
              fontSize: '18px',
              fontStyle: 'italic',
              color: 'rgba(10, 10, 10, 0.5)',
              marginTop: '40px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            6-month minimum. Most clients stay 1-3 years.
          </p>
        </div>
      </section>

      {/* SECTION 2: COMPARISON TABLE */}
      <section 
        ref={comparisonRef}
        className="comparison-section"
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '120px 80px'
        }}
      >
        <div 
          className="comparison-table"
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto',
            border: '1px solid rgba(10, 10, 10, 0.1)'
          }}
        >
          {/* Headers */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <div 
              className="transition-all duration-700"
              style={{
                padding: '32px 40px',
                borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                borderRight: '1px solid rgba(10, 10, 10, 0.1)',
                backgroundColor: 'rgba(255, 46, 99, 0.03)',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#FF2E63',
                opacity: comparisonVisible ? 1 : 0,
                transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              CRUDA
            </div>
            <div 
              className="transition-all duration-700"
              style={{
                padding: '32px 40px',
                borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                backgroundColor: '#FFFFFF',
                fontSize: '13px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.4)',
                opacity: comparisonVisible ? 1 : 0,
                transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '50ms'
              }}
            >
              TRADITIONAL AGENCY
            </div>
          </div>

          {/* Rows */}
          {comparisonRows.map((row, index) => (
            <div 
              key={index} 
              className="comparison-row"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
            >
              <div 
                className="transition-all duration-700"
                style={{
                  padding: '28px 40px',
                  borderBottom: index < comparisonRows.length - 1 ? '1px solid rgba(10, 10, 10, 0.06)' : 'none',
                  borderRight: '1px solid rgba(10, 10, 10, 0.1)',
                  backgroundColor: 'rgba(255, 46, 99, 0.03)',
                  fontSize: '18px',
                  fontWeight: '500',
                  color: '#0A0A0A',
                  opacity: comparisonVisible ? 1 : 0,
                  transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 50}ms`
                }}
              >
                <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                {row.cruda}
              </div>
              <div 
                className="transition-all duration-700"
                style={{
                  padding: '28px 40px',
                  borderBottom: index < comparisonRows.length - 1 ? '1px solid rgba(10, 10, 10, 0.06)' : 'none',
                  backgroundColor: '#FFFFFF',
                  fontSize: '18px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.4)',
                  opacity: comparisonVisible ? 1 : 0,
                  transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 50}ms`
                }}
              >
                <span style={{ color: 'rgba(10, 10, 10, 0.2)', marginRight: '12px' }}>✕</span>
                {row.agency}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: THE SYSTEM */}
      <section 
        ref={systemRef}
        className="system-section"
        style={{ 
          backgroundColor: '#FFFFFF', 
          padding: '160px 80px'
        }}
      >
        <div style={{ maxWidth: '800px' }}>
          {/* Red accent line */}
          <div 
            className="transition-all duration-700"
            style={{
              width: '48px',
              height: '4px',
              backgroundColor: '#FF2E63',
              marginBottom: '32px',
              opacity: systemVisible ? 1 : 0
            }}
          />

          {/* Section headline */}
          <h2 
            className="transition-all duration-700"
            style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#0A0A0A',
              letterSpacing: '-0.01em',
              marginBottom: '80px',
              opacity: systemVisible ? 1 : 0,
              transform: systemVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            A narrative system built around you.
          </h2>

          {/* Phases */}
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="transition-all duration-700"
              style={{ 
                marginBottom: index < phases.length - 1 ? '80px' : '0',
                paddingBottom: index < phases.length - 1 ? '80px' : '0',
                borderBottom: index < phases.length - 1 ? '1px solid rgba(10, 10, 10, 0.08)' : 'none',
                opacity: systemVisible ? 1 : 0,
                transform: systemVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 2) * 100}ms`
              }}
            >
              <p style={{
                fontSize: '12px',
                fontWeight: '600',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(10, 10, 10, 0.3)',
                marginBottom: '8px'
              }}>
                {phase.label}
              </p>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '600',
                color: '#0A0A0A',
                marginBottom: '20px'
              }}>
                {phase.title}
              </h3>
              <p style={{
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgba(10, 10, 10, 0.6)',
                maxWidth: '600px'
              }}>
                {phase.body}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* SECTION 4: TESTIMONIAL */}
      <section 
        ref={testimonialRef} 
        style={{ 
          backgroundColor: '#0A0A0A', 
          padding: '140px 80px' 
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <p 
            className="transition-all duration-700 testimonial-quote"
            style={{ 
              fontSize: '36px', 
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
              fontWeight: '500', 
              color: '#FF2E63', 
              marginTop: '40px', 
              opacity: testimonialVisible ? 1 : 0, 
              transitionDelay: '100ms' 
            }}
          >
            — Mike Kaeding, CEO, Norhart
          </p>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
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

      {/* SECTION 6: FINAL CTA */}
      <section 
        ref={ctaRef}
        style={{ 
          backgroundColor: '#FFFFFF', 
          borderTop: '1px solid rgba(10, 10, 10, 0.08)',
          padding: '120px 80px' 
        }}
      >
        <div style={{ maxWidth: '600px' }}>
          <h2 
            className="transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ 
              fontSize: '36px', 
              fontWeight: '600', 
              color: '#0A0A0A',
              marginBottom: '24px',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.98)'
            }}
          >
            Start a conversation
          </h2>
          
          <div 
            className="transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ 
              fontSize: '18px', 
              fontWeight: '400', 
              lineHeight: '1.8',
              color: 'rgba(10, 10, 10, 0.6)',
              marginBottom: '40px',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '150ms'
            }}
          >
            <p style={{ marginBottom: '16px' }}>45 minutes. No pitch. No pressure.</p>
            <p style={{ marginBottom: '16px' }}>If we see the pattern, we'll say so.</p>
            <p>If we can't help, we'll say that too.</p>
          </div>
          
          <Link 
            to="/contact"
            className="cta-button-final inline-flex items-center gap-3 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ 
              backgroundColor: '#0A0A0A', 
              color: '#FFFFFF', 
              padding: '18px 28px', 
              fontSize: '15px', 
              fontWeight: '500',
              borderRadius: '0', 
              textDecoration: 'none',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
              transitionDelay: '300ms'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF2E63'; }} 
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0A0A0A'; }}
          >
            Start a Conversation
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .pricing-hero { 
            padding: 100px 24px !important;
            min-height: 50vh !important;
          }
          .pricing-headline { 
            font-size: 36px !important; 
          }
          .comparison-section {
            padding: 80px 24px !important;
          }
          .comparison-table {
            display: block !important;
          }
          .comparison-row {
            grid-template-columns: 1fr !important;
          }
          .comparison-row > div {
            border-right: none !important;
          }
          .comparison-row > div:first-child {
            border-bottom: none !important;
            padding-bottom: 16px !important;
          }
          .comparison-row > div:last-child {
            padding-top: 0 !important;
          }
          .system-section {
            padding: 100px 24px !important;
          }
          .testimonial-quote {
            font-size: 24px !important;
          }
          .faq-section {
            padding: 80px 24px !important;
          }
          section[style*="padding: 140px"] {
            padding: 80px 24px !important;
          }
          section[style*="padding: 120px 80px"] {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Pricing;