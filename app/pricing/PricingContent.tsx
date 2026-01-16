'use client';

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

export default function PricingContent() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: systemRef, isVisible: systemVisible } = useScrollAnimation<HTMLDivElement>();
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

  const phases = [
    {
      label: "MONTH 1 — Strategy",
      body: "We extract your story — positioning, founder narrative, content pillars. 10-15 pieces ready to deploy."
    },
    {
      label: "MONTHS 2-6 — Execution",
      body: "LinkedIn, website, pitch decks, talking points. Weekly calls. WhatsApp access throughout."
    },
    {
      label: "MONTH 7+ — Evolution",
      body: "New markets. New projects. New rooms to walk into."
    }
  ];

  const comparisons = [
    {
      cruda: "$2,600/month",
      alternative: "$15,000+ retainers or $50k strategy decks"
    },
    {
      cruda: "Narrative that builds trust",
      alternative: "PR agencies think in press hits. Social agencies optimize for likes."
    },
    {
      cruda: "Strategy AND execution",
      alternative: "Consultants deliver decks. Agencies execute without thinking."
    },
    {
      cruda: "Built around your voice",
      alternative: "Templates. Trends. Whatever worked for someone else."
    },
    {
      cruda: "Fortune 500 experience, founder attention",
      alternative: "Senior pitch, junior delivery"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="pricing-hero"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '120px 80px 100px'
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          {/* Headline */}
          <h1
            className="transition-all duration-700 pricing-headline"
            style={{
              fontSize: '52px',
              fontWeight: '600',
              lineHeight: '1.15',
              letterSpacing: '-0.02em',
              color: '#0A0A0A',
              marginBottom: '48px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            No discovery decks. No quarterly reviews. Just a narrative system that works —
          </h1>

          {/* Price Block - Left-aligned, black */}
          <div
            className="transition-all duration-700"
            style={{
              textAlign: 'left',
              margin: '0',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            <p
              className="price-block"
              style={{
                fontSize: '64px',
                fontWeight: '700',
                color: '#0A0A0A',
                letterSpacing: '-0.02em',
                lineHeight: '1',
                margin: 0
              }}
            >
              $2,600<span style={{
                fontSize: '24px',
                fontWeight: '400',
                color: 'rgba(10, 10, 10, 0.5)'
              }}>/month</span>
            </p>
            <p style={{
              fontSize: '17px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.5)',
              marginTop: '12px',
              lineHeight: '1.5'
            }}>
              6-month minimum. Most clients stay 1-3 years.
            </p>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE SECTION */}
      <section
        ref={comparisonRef}
        className="comparison-section"
        style={{
          backgroundColor: '#FAFAFA',
          padding: '100px 80px'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Table Header */}
          <div
            className="transition-all duration-700 comparison-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '60px',
              marginBottom: '48px',
              opacity: comparisonVisible ? 1 : 0,
              transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#FF2E63',
                marginBottom: '0'
              }}>
                CRUDA
              </h3>
            </div>
            <div>
              <h3 style={{
                fontSize: '14px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'rgba(10, 10, 10, 0.4)',
                marginBottom: '0'
              }}>
                THE ALTERNATIVES
              </h3>
            </div>
          </div>

          {/* Comparison Rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className="transition-all duration-700 comparison-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '60px',
                  paddingBottom: '32px',
                  borderBottom: '1px solid rgba(10, 10, 10, 0.06)',
                  opacity: comparisonVisible ? 1 : 0,
                  transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 100}ms`
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{
                    color: '#FF2E63',
                    fontSize: '20px',
                    fontWeight: '500',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>→</span>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    color: '#0A0A0A',
                    margin: 0
                  }}>
                    {comparison.cruda}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <span style={{
                    color: 'rgba(10, 10, 10, 0.3)',
                    fontSize: '20px',
                    fontWeight: '500',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>✕</span>
                  <p style={{
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    color: 'rgba(10, 10, 10, 0.5)',
                    margin: 0
                  }}>
                    {comparison.alternative}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM SECTION */}
      <section
        ref={systemRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '120px 80px'
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          {/* Red Accent Line */}
          <div
            className="transition-all duration-700"
            style={{
              width: '64px',
              height: '4px',
              backgroundColor: '#FF2E63',
              marginBottom: '32px',
              opacity: systemVisible ? 1 : 0
            }}
          />

          {/* Section Headline */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '24px',
              fontWeight: '500',
              color: '#0A0A0A',
              marginBottom: '48px',
              opacity: systemVisible ? 1 : 0,
              transitionDelay: '50ms'
            }}
          >
            A narrative system built around you.
          </p>

          {/* Phases */}
          <div
            className="transition-all duration-700"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              opacity: systemVisible ? 1 : 0,
              transform: systemVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            {phases.map((phase, index) => (
              <div key={index} style={{ marginBottom: '0' }}>
                <p style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: '#FF2E63',
                  marginBottom: '12px'
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

          {/* Scarcity Box */}
          <div
            className="transition-all duration-700"
            style={{
              marginTop: '48px',
              padding: '24px',
              backgroundColor: 'rgba(10, 10, 10, 0.02)',
              borderLeft: '3px solid #FF2E63',
              opacity: systemVisible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            <p style={{
              fontSize: '17px',
              fontWeight: '400',
              fontStyle: 'italic',
              lineHeight: '1.6',
              color: 'rgba(10, 10, 10, 0.6)',
              margin: 0
            }}>
              We onboard one company per month. Limited capacity, intentionally.
            </p>
          </div>

          {/* CTA */}
          <div
            className="transition-all duration-700 flex justify-center"
            style={{
              marginTop: '48px',
              opacity: systemVisible ? 1 : 0,
              transitionDelay: '300ms'
            }}
          >
            <Link
              href="/contact"
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
            </Link>
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

      {/* FINAL CTA SECTION */}
      <section
        ref={ctaRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '120px 80px'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            className="transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              fontSize: '32px',
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
            href="/contact"
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
            padding: 100px 24px 60px !important;
          }
          .pricing-headline {
            font-size: 36px !important;
          }
          .price-block {
            font-size: 44px !important;
          }
          .price-block span {
            font-size: 18px !important;
          }
          .comparison-section {
            padding: 60px 24px !important;
          }
          .comparison-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .faq-section {
            padding: 80px 24px !important;
          }
          section[id="book"] {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
