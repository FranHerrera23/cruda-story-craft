'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { AnimatedHeader } from '@/components/case-study/AnimatedHeader';
import { AnimatedParagraph } from '@/components/case-study/AnimatedParagraph';

// ============================================================================
// UNIVERSAL CLIENT PAGE TEMPLATE
// ============================================================================

interface ClientPageTemplateProps {
  heroImage: string;
  heroImagePosition?: string;
  heroKicker: string;
  heroHeadline: string;

  clientName: string;
  clientTitle: string;
  clientLocation?: string;
  clientDescription: string[];
  challengeHeadline: string;
  challengeDescription: string[];

  storyQuote?: string;
  storyContent: string[];

  translationHeadline: string;
  translationDescription: string;
  translationPillars: {
    number: string;
    title: string;
    subtitle?: string;
    description: string;
  }[];

  workSectionTitle: string;
  workSectionDescription: string;
  workContent: ReactNode;

  metricsHeadline: string;
  metricsCards: ReactNode;

  outcomesHeadline?: string;
  outcomesDescription?: string;
  outcomes?: {
    highlight: string;
    description: string;
  }[];

  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialTitle: string;

  ctaHeadline: string;
  ctaButtonText: string;
  ctaButtonLink: string;

  dividerImages?: {
    src: string;
    position?: string;
  }[];
}

export const ClientPageTemplate = ({
  heroImage,
  heroImagePosition = 'center 25%',
  heroKicker,
  heroHeadline,
  clientName,
  clientTitle,
  clientLocation,
  clientDescription,
  challengeHeadline,
  challengeDescription,
  storyQuote,
  storyContent,
  translationHeadline,
  translationDescription,
  translationPillars,
  workSectionTitle,
  workSectionDescription,
  workContent,
  metricsHeadline,
  metricsCards,
  outcomesHeadline,
  outcomesDescription,
  outcomes,
  testimonialQuote,
  testimonialAuthor,
  testimonialTitle,
  ctaHeadline,
  ctaButtonText,
  ctaButtonLink,
  dividerImages = [],
}: ClientPageTemplateProps) => {
  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* =========================================
          SECTION 1: HERO
          Full-bleed image + headline overlay
      ========================================= */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: heroImagePosition,
        }}
      >
        <div className="max-w-4xl px-6 md:px-20">
          <p
            style={{
              fontSize: '13px',
              color: '#FFFFFF',
              opacity: 0.8,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '32px',
            }}
          >
            {heroKicker}
          </p>
          <h1
            style={{
              fontSize: 'clamp(48px, 6vw, 72px)',
              color: '#FFFFFF',
              lineHeight: 1.0,
              fontWeight: 600,
              letterSpacing: '-0.03em',
            }}
          >
            {heroHeadline}
          </h1>
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE SNAPSHOT
          Two columns — quick context
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left Column — THE CLIENT */}
            <div>
              <p
                className="mb-6"
                style={{
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                The Client
              </p>
              <AnimatedHeader
                className="mb-6"
                style={{
                  fontSize: 'clamp(32px, 4vw, 44px)',
                  color: '#0A0A0A',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                {clientName}
              </AnimatedHeader>
              <AnimatedParagraph
                className="mb-4"
                style={{
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7,
                }}
              >
                {clientTitle}
                {clientLocation && (
                  <>
                    <br />
                    {clientLocation}
                  </>
                )}
              </AnimatedParagraph>
              {clientDescription.map((paragraph, index) => (
                <AnimatedParagraph
                  key={index}
                  style={{
                    fontSize: '18px',
                    color: 'rgba(10, 10, 10, 0.7)',
                    lineHeight: 1.7,
                    marginTop: index > 0 ? '16px' : '0',
                  }}
                >
                  {paragraph}
                </AnimatedParagraph>
              ))}
            </div>

            {/* Right Column — THE CHALLENGE */}
            <div>
              <p
                className="mb-6"
                style={{
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                The Challenge
              </p>
              <AnimatedParagraph
                className="mb-4"
                style={{
                  fontSize: '20px',
                  color: '#0A0A0A',
                  lineHeight: 1.7,
                  fontWeight: 600,
                }}
              >
                {challengeHeadline}
              </AnimatedParagraph>
              {challengeDescription.map((paragraph, index) => (
                <AnimatedParagraph
                  key={index}
                  style={{
                    fontSize: index === 0 ? '20px' : '18px',
                    color: index === 0 ? '#0A0A0A' : 'rgba(10, 10, 10, 0.7)',
                    lineHeight: 1.7,
                    marginTop: index > 0 ? '16px' : '0',
                  }}
                >
                  {paragraph}
                </AnimatedParagraph>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider Image 1 (if provided) */}
      {dividerImages[0] && (
        <section
          className="w-full"
          style={{
            height: '70vh',
            backgroundImage: `url(${dividerImages[0].src})`,
            backgroundSize: 'cover',
            backgroundPosition: dividerImages[0].position || 'center 25%',
          }}
        />
      )}

      {/* =========================================
          SECTION 3: THE STORY / CHALLENGE EXPANDED
      ========================================= */}
      {(storyQuote || storyContent.length > 0) && (
        <section
          className="py-20 md:py-28 px-6 md:px-20"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="max-w-[900px] mx-auto">
            {storyQuote && (
              <div
                className="mb-12 pl-8"
                style={{
                  borderLeft: '4px solid #FF2E63',
                }}
              >
                <AnimatedParagraph
                  style={{
                    fontSize: 'clamp(24px, 3vw, 32px)',
                    lineHeight: 1.5,
                    color: '#0A0A0A',
                    fontStyle: 'italic',
                  }}
                >
                  {storyQuote}
                </AnimatedParagraph>
              </div>
            )}

            <div className="space-y-6">
              {storyContent.map((paragraph, index) => (
                <AnimatedParagraph
                  key={index}
                  style={{
                    fontSize: 'clamp(17px, 2vw, 20px)',
                    lineHeight: 1.8,
                    color: '#0A0A0A',
                  }}
                >
                  {paragraph}
                </AnimatedParagraph>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Divider Image 2 (if provided) */}
      {dividerImages[1] && (
        <section
          className="w-full"
          style={{
            height: '70vh',
            backgroundImage: `url(${dividerImages[1].src})`,
            backgroundSize: 'cover',
            backgroundPosition: dividerImages[1].position || 'center 25%',
          }}
        />
      )}

      {/* =========================================
          SECTION 4: THE TRANSLATION
          Narrative pillars
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <p
            className="mb-6"
            style={{
              fontSize: '13px',
              color: '#FF2E63',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            The Translation
          </p>

          <AnimatedHeader
            className="mb-8"
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              color: '#0A0A0A',
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {translationHeadline}
          </AnimatedHeader>

          <AnimatedParagraph
            className="mb-16"
            style={{
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              lineHeight: 1.8,
              color: 'rgba(10, 10, 10, 0.7)',
              maxWidth: '700px',
            }}
          >
            {translationDescription}
          </AnimatedParagraph>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {translationPillars.map((pillar, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(10, 10, 10, 0.1)',
                  padding: '32px',
                  borderRadius: '0',
                }}
              >
                <p
                  style={{
                    fontSize: '13px',
                    color: '#FF2E63',
                    fontWeight: 600,
                    marginBottom: '16px',
                  }}
                >
                  {pillar.number}
                </p>
                <h3
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#0A0A0A',
                    marginBottom: pillar.subtitle ? '8px' : '12px',
                  }}
                >
                  {pillar.title}
                </h3>
                {pillar.subtitle && (
                  <h4
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      color: 'rgba(10, 10, 10, 0.6)',
                      marginBottom: '12px',
                    }}
                  >
                    {pillar.subtitle}
                  </h4>
                )}
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'rgba(10, 10, 10, 0.7)',
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider Image 3 (if provided) */}
      {dividerImages[2] && (
        <section
          className="w-full"
          style={{
            height: '70vh',
            backgroundImage: `url(${dividerImages[2].src})`,
            backgroundSize: 'cover',
            backgroundPosition: dividerImages[2].position || 'center 30%',
          }}
        />
      )}

      {/* =========================================
          SECTION 5: THE WORK THAT TRAVELS
          Content showcase
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <AnimatedHeader
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 600,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            {workSectionTitle}
          </AnimatedHeader>

          <AnimatedParagraph
            className="mb-16"
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'rgba(10, 10, 10, 0.6)',
              maxWidth: '600px',
            }}
          >
            {workSectionDescription}
          </AnimatedParagraph>

          {workContent}
        </div>
      </section>

      {/* =========================================
          SECTION 6: METRICS / RESULTS
          Dark background with metrics
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <AnimatedHeader
            className="mb-16"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.2,
            }}
          >
            {metricsHeadline}
          </AnimatedHeader>

          {metricsCards}
        </div>
      </section>

      {/* Divider Image 4 (if provided) */}
      {dividerImages[3] && (
        <section
          className="w-full"
          style={{
            height: '50vh',
            backgroundImage: `url(${dividerImages[3].src})`,
            backgroundSize: 'cover',
            backgroundPosition: dividerImages[3].position || 'center 30%',
          }}
        />
      )}

      {/* =========================================
          SECTION 7: OUTCOMES (optional)
      ========================================= */}
      {outcomes && outcomes.length > 0 && (
        <section
          className="py-20 md:py-28 px-6 md:px-20"
          style={{ backgroundColor: '#FFFFFF' }}
        >
          <div className="max-w-[1000px] mx-auto">
            <AnimatedHeader
              className="mb-6"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 600,
                color: '#0A0A0A',
                lineHeight: 1.2,
              }}
            >
              {outcomesHeadline || 'What travels now'}
            </AnimatedHeader>

            <AnimatedParagraph
              className="mb-16"
              style={{
                fontSize: '20px',
                lineHeight: 1.6,
                color: 'rgba(10, 10, 10, 0.6)',
              }}
            >
              {outcomesDescription || ''}
            </AnimatedParagraph>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(10, 10, 10, 0.1)',
                    borderRadius: '0',
                  }}
                >
                  <span
                    style={{
                      color: '#FF2E63',
                      fontSize: '18px',
                      fontWeight: 700,
                      lineHeight: 1.4,
                    }}
                  >
                    ✓
                  </span>
                  <p
                    style={{
                      fontSize: '18px',
                      lineHeight: 1.6,
                      color: '#0A0A0A',
                    }}
                  >
                    <strong style={{ fontWeight: 700 }}>{outcome.highlight}</strong>{' '}
                    {outcome.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* =========================================
          SECTION 8: TESTIMONIAL
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div
          className="max-w-[800px] mx-auto pl-8 md:pl-10"
          style={{ borderLeft: '4px solid #FF2E63' }}
        >
          <AnimatedParagraph
            className="mb-8"
            style={{
              fontSize: 'clamp(22px, 2.8vw, 28px)',
              lineHeight: 1.6,
              color: '#0A0A0A',
              fontStyle: 'italic',
            }}
          >
            {testimonialQuote}
          </AnimatedParagraph>
          <p
            style={{
              fontSize: '14px',
              color: '#0A0A0A',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            — {testimonialAuthor}
            <br />
            <span style={{ fontWeight: 400, opacity: 0.6 }}>{testimonialTitle}</span>
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION 9: CTA
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-3xl mx-auto">
          <AnimatedHeader
            className="mb-10"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              fontWeight: 600,
              color: '#0A0A0A',
              lineHeight: 1.2,
            }}
          >
            {ctaHeadline}
          </AnimatedHeader>
          <Link
            href={ctaButtonLink}
            className="inline-flex items-center justify-center px-12 py-5 text-lg font-semibold transition-all duration-300 relative overflow-hidden group"
            style={{
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              borderRadius: '0',
              fontSize: '18px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            <span className="relative z-10">{ctaButtonText}</span>
            <span
              className="absolute inset-0 bg-[#FF2E63] transition-transform duration-300 -translate-x-full group-hover:translate-x-0"
              style={{ zIndex: 0 }}
            />
          </Link>
        </div>
      </section>
    </div>
  );
};
