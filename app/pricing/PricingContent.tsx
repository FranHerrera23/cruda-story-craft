'use client';

import { useState } from "react";
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";

export default function PricingContent() {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: insideRef, isVisible: insideVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: engagementRef, isVisible: engagementVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: faqRef, isVisible: faqVisible } = useScrollAnimation<HTMLElement>();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const insideItems = [
    {
      label: "NARRATIVE STRATEGY",
      desc: "Your positioning, founder story, content pillars, and the language that ties everything together."
    },
    {
      label: "CONTENT SYSTEM",
      desc: "LinkedIn, Instagram, pitch decks, talking points — your expertise showing up where your next clients are looking."
    },
    {
      label: "RELATIONSHIPS",
      desc: "Warm introductions and conversations with the people you want to reach. Doors that open because they already know your work."
    },
    {
      label: "ONGOING ACCESS",
      desc: "Weekly calls. WhatsApp throughout. We're in it with you, not delivering from a distance."
    }
  ];

  const comparisons = [
    {
      cruda: "A story that opens doors before you pitch",
      alt: "PR agencies think in press hits. Social agencies optimize for likes."
    },
    {
      cruda: "Strategy AND execution",
      alt: "Consultants deliver decks. Agencies execute without thinking."
    },
    {
      cruda: "Built around your voice",
      alt: "Templates. Trends. Whatever worked for someone else."
    },
    {
      cruda: "Fortune 500 experience, founder attention",
      alt: "Senior pitch, junior delivery."
    }
  ];

  const faqs = [
    {
      question: "Why do I need to apply?",
      paragraphs: [
        { text: "The work we do is slow by design. It compounds over months, not days. We go deep into how you think, how you build, why you started — and we turn that into something that lasts.", emphasis: false },
        { text: "That doesn't work with everyone.", emphasis: true },
        { text: "If you want virality, hire a social media agency. If you want to test it for 60 days and \"see how it goes\" — this isn't built for that.", emphasis: false },
        { text: "We work with people who understand that the best stories, like the best buildings, take time to construct. And that the things that compound are the things worth building.", emphasis: false },
        { text: "The application is simple. Twenty minutes. We both figure out if there's a fit.", emphasis: true }
      ]
    },
    {
      question: "What's the investment?",
      paragraphs: [
        { text: "$15,600 for a six-month engagement. Most clients stay 1-3 years because the work compounds — new markets, new conversations, new opportunities that keep opening.", emphasis: false }
      ]
    },
    {
      question: "What results should I expect?",
      paragraphs: [
        { text: "By month three, your presence shifts. Prospects reference your content before meetings. Referrals arrive warmer. By month six, your reputation is working in markets you haven't physically entered yet. Karen Mannheim now closes projects across Florida, UAE, and Spain. Mike Kaeding walks into investor meetings where they already know the Norhart story.", emphasis: false }
      ]
    },
    {
      question: "How is this different from an agency?",
      paragraphs: [
        { text: "Agencies execute. Consultants advise. We do both — and we only work with construction, architecture, and design. You work directly with senior people, not junior account managers. And we don't just post content — we build relationships and open doors.", emphasis: false }
      ]
    }
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: PRICING HERO */}
      <section
        ref={heroRef}
        className="pricing-hero-section"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '160px 80px 120px 80px'
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          {/* Label */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#FF2E63',
              marginBottom: '48px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Pricing
          </p>

          {/* Headline */}
          <h1
            className="transition-all duration-700 pricing-headline"
            style={{
              fontSize: '52px',
              fontWeight: '600',
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              marginBottom: '40px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            By month six.
          </h1>

          {/* Red line */}
          <div
            className="transition-all duration-500"
            style={{
              width: heroVisible ? '64px' : '0px',
              height: '3px',
              background: '#FF2E63',
              marginBottom: '40px',
              transitionDelay: '200ms'
            }}
          />

          {/* Vision paragraphs */}
          <div
            style={{ maxWidth: '640px', marginBottom: '48px' }}
          >
            {[
              "Your founder's LinkedIn is a brand asset — sharing the story, the beliefs, the work that made the company what it is.",
              "Your Instagram is showing the projects the way only you can — behind the scenes, the craft, the decisions nobody else talks about.",
              "Your pitch decks tell a vision, not just a spec sheet.",
              "And every room your team walks into is already warm."
            ].map((text, i) => (
              <p
                key={i}
                className="transition-all duration-700"
                style={{
                  fontSize: '20px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.7',
                  marginBottom: '20px',
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${300 + i * 100}ms`
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Compounds */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#0A0A0A',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '700ms'
            }}
          >
            Everything compounds.
          </p>
        </div>
      </section>

      {/* SECTION 2: WHAT'S INSIDE */}
      <section
        ref={insideRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '80px'
        }}
      >
        <div style={{ maxWidth: '900px' }}>
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '48px',
              opacity: insideVisible ? 1 : 0,
              transform: insideVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What&apos;s inside.
          </h2>

          <div>
            {insideItems.map((item, index) => (
              <div
                key={index}
                className="transition-all duration-700 inside-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '200px 1fr',
                  gap: '40px',
                  padding: '32px 0',
                  borderTop: '1px solid rgba(10, 10, 10, 0.08)',
                  opacity: insideVisible ? 1 : 0,
                  transform: insideVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 100}ms`
                }}
              >
                <p style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FF2E63'
                }}>
                  {item.label}
                </p>
                <p style={{
                  fontSize: '17px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.6',
                  maxWidth: '480px'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: THE ENGAGEMENT */}
      <section
        ref={engagementRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '120px 80px'
        }}
      >
        <div style={{ maxWidth: '600px' }}>
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '32px',
              opacity: engagementVisible ? 1 : 0,
              transform: engagementVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            The engagement.
          </h2>

          {/* Red line */}
          <div
            className="transition-all duration-500"
            style={{
              width: engagementVisible ? '48px' : '0px',
              height: '2px',
              background: '#FF2E63',
              marginBottom: '32px',
              transitionDelay: '100ms'
            }}
          />

          {/* Price */}
          <div
            className="transition-all duration-700"
            style={{
              marginBottom: '24px',
              opacity: engagementVisible ? 1 : 0,
              transform: engagementVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <p style={{
              fontSize: '36px',
              fontWeight: '600',
              color: '#FF2E63',
              marginBottom: '4px'
            }}>
              $15,600
            </p>
            <p style={{
              fontSize: '15px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.4)'
            }}>
              $2,600/month &times; 6 months
            </p>
          </div>

          {/* Description */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: engagementVisible ? 1 : 0,
              transform: engagementVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            <p style={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.5)',
              lineHeight: '1.6',
              marginBottom: '16px'
            }}>
              Six months. Strategy, content, relationships, and a narrative system that keeps working after we build it.
            </p>
            <p style={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(10, 10, 10, 0.5)',
              lineHeight: '1.6',
              marginBottom: '40px'
            }}>
              Most clients continue past six months. Not because they&apos;re locked in — because it keeps opening doors.
            </p>
          </div>

          {/* CTA */}
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
              textDecoration: 'none',
              opacity: engagementVisible ? 1 : 0,
              transform: engagementVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '400ms'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FF2E63'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#0A0A0A'; }}
          >
            Book a Discovery Call
            <span style={{ fontSize: '18px' }}>→</span>
          </Link>
        </div>
      </section>

      {/* SECTION 4: COMPARISON TABLE */}
      <section
        ref={comparisonRef}
        className="comparison-section"
        style={{
          backgroundColor: '#FFFFFF',
          padding: '80px'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Table Header */}
          <div
            className="transition-all duration-700 comparison-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              opacity: comparisonVisible ? 1 : 0,
              transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p style={{
              fontSize: '13px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#FF2E63',
              paddingBottom: '32px'
            }}>
              CRUDA
            </p>
            <p style={{
              fontSize: '13px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'rgba(10, 10, 10, 0.4)',
              paddingBottom: '32px'
            }}>
              THE ALTERNATIVES
            </p>
          </div>

          {/* Comparison Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className="transition-all duration-700 comparison-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
                borderTop: '1px solid rgba(10, 10, 10, 0.08)',
                opacity: comparisonVisible ? 1 : 0,
                transform: comparisonVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <div style={{
                padding: '28px 40px 28px 0',
                fontSize: '17px',
                lineHeight: '1.5',
                color: '#0A0A0A',
                fontWeight: '500'
              }}>
                <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                {row.cruda}
              </div>
              <div style={{
                padding: '28px 0 28px 40px',
                fontSize: '17px',
                lineHeight: '1.5',
                color: 'rgba(10, 10, 10, 0.45)'
              }}>
                <span style={{ color: 'rgba(10, 10, 10, 0.25)', marginRight: '12px' }}>✕</span>
                {row.alt}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: TESTIMONIAL */}
      <section
        ref={testimonialRef}
        style={{
          backgroundColor: '#0A0A0A',
          padding: '100px 80px'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <div
            className="transition-all duration-700"
            style={{
              marginBottom: '80px',
              opacity: testimonialVisible ? 1 : 0,
              transform: testimonialVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <p style={{
              fontSize: '22px',
              fontWeight: '400',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.5',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              &ldquo;I used to dread the &lsquo;so what do you do?&rsquo; question. Now I look forward to it.&rdquo;
            </p>
            <p style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#FF2E63',
              marginTop: '24px'
            }}>
              — Mike Kaeding, CEO, Norhart
            </p>
          </div>

          <div
            className="transition-all duration-700"
            style={{
              opacity: testimonialVisible ? 1 : 0,
              transform: testimonialVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <p style={{
              fontSize: '22px',
              fontWeight: '400',
              fontStyle: 'italic',
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.5',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              &ldquo;We finally sound like who we actually are.&rdquo;
            </p>
            <p style={{
              fontSize: '14px',
              fontWeight: '500',
              color: '#FF2E63',
              marginTop: '24px'
            }}>
              — Karen Mannheim, Co-founder, TRAZZO Lighting
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
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
              fontSize: '13px',
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
                  borderTop: '1px solid rgba(10, 10, 10, 0.08)',
                  opacity: faqVisible ? 1 : 0,
                  transform: faqVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${(index + 1) * 100}ms`
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  style={{
                    width: '100%',
                    padding: '28px 0',
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
                    size={14}
                    style={{
                      color: 'rgba(10, 10, 10, 0.3)',
                      flexShrink: 0,
                      transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      transform: openFaq === index ? 'rotate(180deg)' : 'rotate(0)'
                    }}
                  />
                </button>

                <div
                  style={{
                    maxHeight: openFaq === index ? '600px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), padding 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    paddingBottom: openFaq === index ? '40px' : '0'
                  }}
                >
                  <div style={{ maxWidth: '600px' }}>
                    {faq.paragraphs.map((p, i) => (
                      <p key={i} style={{
                        fontSize: '17px',
                        fontWeight: p.emphasis ? '500' : '400',
                        lineHeight: '1.7',
                        color: p.emphasis ? 'rgba(10, 10, 10, 0.8)' : 'rgba(10, 10, 10, 0.6)',
                        marginBottom: '20px'
                      }}>
                        {p.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          .pricing-hero-section {
            padding: 120px 24px 80px !important;
          }
          .pricing-headline {
            font-size: 36px !important;
          }
          .comparison-section {
            padding: 60px 24px !important;
          }
          .comparison-grid {
            grid-template-columns: 1fr !important;
          }
          .inside-row {
            grid-template-columns: 1fr !important;
            gap: 12px !important;
          }
          .faq-section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </main>
  );
}
