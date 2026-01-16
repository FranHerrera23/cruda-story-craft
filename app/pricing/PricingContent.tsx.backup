'use client';

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

export default function PricingContent() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: investmentRef, isVisible: investmentVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      {/* UNIFIED HERO + INVESTMENT — Left-aligned editorial flow */}
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
              marginBottom: '0',
              opacity: heroVisible ? 1 : 0, 
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)' 
            }}
          >
            <span style={{ display: 'block' }}>You've seen the work.</span>
            <span style={{ display: 'block' }}>Here's what it costs.</span>
          </h1>

          {/* Divider 1 */}
          <div 
            className="transition-all duration-700"
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(10, 10, 10, 0.08)',
              margin: '48px 0',
              opacity: heroVisible ? 1 : 0,
              transitionDelay: '100ms'
            }}
          />

          {/* Price Block - Left-aligned, black */}
          <div 
            ref={investmentRef}
            className="transition-all duration-700"
            style={{
              textAlign: 'left',
              margin: '0 0 48px 0',
              opacity: investmentVisible ? 1 : 0,
              transform: investmentVisible ? 'translateY(0)' : 'translateY(20px)'
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

          {/* Divider 2 */}
          <div 
            className="transition-all duration-700"
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'rgba(10, 10, 10, 0.08)',
              margin: '0 0 48px 0',
              opacity: investmentVisible ? 1 : 0,
              transitionDelay: '50ms'
            }}
          />

          {/* Red Accent Line */}
          <div 
            className="transition-all duration-700"
            style={{
              width: '64px',
              height: '4px',
              backgroundColor: '#FF2E63',
              marginBottom: '32px',
              opacity: investmentVisible ? 1 : 0,
              transitionDelay: '100ms'
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
              opacity: investmentVisible ? 1 : 0,
              transitionDelay: '150ms'
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
              opacity: investmentVisible ? 1 : 0,
              transform: investmentVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
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

          {/* CTA */}
          <div 
            className="transition-all duration-700 flex justify-center"
            style={{ 
              marginTop: '48px',
              opacity: investmentVisible ? 1 : 0,
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
}