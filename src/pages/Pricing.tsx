import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useStaggerAnimation, useScrollProgress } from "@/hooks/useStaggerAnimation";
import { useState, useEffect, useRef } from "react";

// Animated counter hook
const useCountUp = (end: number, duration: number = 1500, trigger: boolean = true) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);

  useEffect(() => {
    if (!trigger) return;
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      countRef.current = Math.floor(easeOut * end);
      setCount(countRef.current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, trigger]);

  return count;
};

// Data for How It Works section
const month1WhatWeNeed = [
  "Access to your project portfolio",
  "Company milestones and proof points",
  "One hour a week for discovery"
];

const month1WhatYouGet = [
  "Narrative strategy document",
  "Founder bio",
  "Content pillars + tone of voice",
  "AI writing prompt",
  "30-day content calendar",
  "10–15 ready-to-post pieces"
];

const months24WhatWeDeliver = [
  "LinkedIn profile + content",
  "Instagram presence",
  "Pitch deck language",
  "Talking points for any room",
  "WhatsApp support throughout",
  "Monthly refinement"
];

// Data for Deliverables section
const deliverables1 = [
  "Narrative strategy document",
  "Founder bio",
  "Content pillars",
  "Tone of voice guide",
  "AI writing prompt",
  "30-day content calendar",
  "10–15 ready-to-post pieces"
];

const deliverables24 = [
  "LinkedIn profile + content",
  "Instagram presence",
  "Pitch deck language",
  "Talking points for any room",
  "WhatsApp support throughout",
  "Monthly refinement"
];

const commitmentLines = [
  "Access to your portfolio and milestones.",
  "One hour a week.",
  "Feedback over WhatsApp."
];

const Pricing = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: howRef, isVisible: howVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLElement>();
  const { containerRef: commitmentRef, isVisible: commitmentVisible, visibleItems: commitmentVisibleItems } = useStaggerAnimation<HTMLElement>(commitmentLines.length, 150);
  const { elementRef: deliverablesRef, isVisible: deliverablesVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const priceCount = useCountUp(7200, 1500, heroVisible);

  // Timeline animation state
  const [timelineProgress, setTimelineProgress] = useState(0);
  const timelineBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineVisible) return;
    
    let start: number | null = null;
    const duration = 1200;
    
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      setTimelineProgress(progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [timelineVisible]);

  return (
    <main className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section 
        ref={heroRef}
        style={{ 
          backgroundColor: '#FFFFFF',
          padding: '160px 80px',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '700px' }}>
          {/* Price */}
          <h1
            className="transition-all duration-700"
            style={{
              fontSize: '120px',
              fontWeight: '700',
              color: '#0A0A0A',
              letterSpacing: '-0.03em',
              lineHeight: '1',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(30px)'
            }}
          >
            ${priceCount.toLocaleString()}
          </h1>

          {/* Three Value Props */}
          <div
            style={{
              marginTop: '48px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            {[
              "The depth of an agency.",
              "The speed of a freelancer.",
              "The confidentiality of an in-house team."
            ].map((line, index) => (
              <p
                key={index}
                className="transition-all duration-700"
                style={{
                  fontSize: '28px',
                  fontWeight: '400',
                  color: '#0A0A0A',
                  lineHeight: '1.6',
                  opacity: heroVisible ? 1 : 0,
                  transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: `${200 + index * 150}ms`
                }}
              >
                {line}
              </p>
            ))}
          </div>

          {/* Subline */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              fontWeight: '500',
              color: 'rgba(10, 10, 10, 0.6)',
              marginTop: '40px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '650ms'
            }}
          >
            Four months. Founder-led. Done for you.
          </p>

          {/* Alternative */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '16px',
              color: 'rgba(10, 10, 10, 0.4)',
              marginTop: '16px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '750ms'
            }}
          >
            $1,800/month if that's easier.
          </p>

          {/* CTA Button */}
          <Link
            to="/book-call"
            className="inline-block transition-all duration-300"
            style={{
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              padding: '20px 44px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              marginTop: '48px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '850ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E8284A';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section
        ref={howRef}
        style={{
          backgroundColor: '#F7F7F7',
          padding: '160px 80px'
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Label */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)',
              marginBottom: '60px',
              opacity: howVisible ? 1 : 0,
              transform: howVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            How it works
          </p>

          {/* Two Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '32px'
            }}
            className="how-it-works-grid"
          >
            {/* Card 1: Month 1 */}
            <div
              className="transition-all duration-700"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10, 10, 10, 0.08)',
                borderRadius: '8px',
                padding: '48px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                opacity: howVisible ? 1 : 0,
                transform: howVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms'
              }}
            >
              {/* Phase Label */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FF2E63'
                }}
              >
                Month 1
              </p>

              {/* Phase Title */}
              <h3
                style={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginTop: '12px'
                }}
              >
                Strategy
              </h3>

              {/* Phase Description */}
              <p
                style={{
                  fontSize: '20px',
                  color: 'rgba(10, 10, 10, 0.6)',
                  marginTop: '16px',
                  marginBottom: '32px'
                }}
              >
                We build your narrative system.
              </p>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* What We Need */}
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)',
                  marginTop: '32px',
                  marginBottom: '16px'
                }}
              >
                What we need
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {month1WhatWeNeed.map((item, i) => (
                  <p key={i} style={{ fontSize: '17px', color: '#0A0A0A', lineHeight: '1.8' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)', marginTop: '24px' }} />

              {/* What You Get */}
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)',
                  marginTop: '32px',
                  marginBottom: '16px'
                }}
              >
                What you get
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {month1WhatYouGet.map((item, i) => (
                  <p key={i} style={{ fontSize: '17px', color: '#0A0A0A', lineHeight: '1.8' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Card 2: Months 2-4 */}
            <div
              className="transition-all duration-700"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10, 10, 10, 0.08)',
                borderRadius: '8px',
                padding: '48px',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                opacity: howVisible ? 1 : 0,
                transform: howVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              {/* Phase Label */}
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FF2E63'
                }}
              >
                Months 2–4
              </p>

              {/* Phase Title */}
              <h3
                style={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginTop: '12px'
                }}
              >
                Execution
              </h3>

              {/* Phase Description */}
              <p
                style={{
                  fontSize: '20px',
                  color: 'rgba(10, 10, 10, 0.6)',
                  marginTop: '16px',
                  marginBottom: '32px'
                }}
              >
                We put it to work.
              </p>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* What We Deliver */}
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)',
                  marginTop: '32px',
                  marginBottom: '16px'
                }}
              >
                What we deliver
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {months24WhatWeDeliver.map((item, i) => (
                  <p key={i} style={{ fontSize: '17px', color: '#0A0A0A', lineHeight: '1.8' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)', marginTop: '24px' }} />

              {/* Optional Add-on */}
              <p
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)',
                  marginTop: '32px',
                  marginBottom: '16px'
                }}
              >
                Optional add-on
              </p>
              <p style={{ fontSize: '17px', color: 'rgba(10, 10, 10, 0.5)', fontStyle: 'italic' }}>
                <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                C-level content strategy (for leadership teams)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: VISUAL TIMELINE */}
      <section
        ref={timelineRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '80px 80px'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }} ref={timelineBarRef}>
          {/* Timeline Bar */}
          <div
            className="transition-all duration-700"
            style={{
              position: 'relative',
              opacity: timelineVisible ? 1 : 0
            }}
          >
            {/* Bar Background */}
            <div
              style={{
                width: '100%',
                height: '3px',
                backgroundColor: 'rgba(10, 10, 10, 0.15)',
                position: 'relative'
              }}
            >
              {/* Progress fill */}
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: `${timelineProgress * 100}%`,
                  backgroundColor: '#FF2E63',
                  transition: 'width 50ms linear'
                }}
              />
            </div>

            {/* Dots Container */}
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', top: '-6px', left: 0, right: 0 }}>
              {/* Month 1 dot - at 0% */}
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: timelineProgress >= 0 ? '#FF2E63' : 'rgba(10, 10, 10, 0.3)',
                  transition: 'background-color 300ms ease, transform 300ms ease',
                  transform: timelineProgress >= 0.1 ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              {/* Month 2 dot - at 25% */}
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: timelineProgress >= 0.25 ? '#FF2E63' : 'rgba(10, 10, 10, 0.3)',
                  transition: 'background-color 300ms ease',
                  marginTop: '2px'
                }}
              />
              {/* Month 4 dot - at 100% */}
              <div
                style={{
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  backgroundColor: timelineProgress >= 1 ? '#FF2E63' : 'rgba(10, 10, 10, 0.3)',
                  transition: 'background-color 300ms ease, transform 300ms ease',
                  transform: timelineProgress >= 1 ? 'scale(1.1)' : 'scale(1)'
                }}
              />
            </div>

            {/* Labels below dots */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '24px',
                opacity: timelineProgress > 0.5 ? 1 : 0,
                transition: 'opacity 500ms ease'
              }}
            >
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(10, 10, 10, 0.4)' }}>
                Month 1
              </p>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(10, 10, 10, 0.4)' }}>
                Month 2
              </p>
              <p style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(10, 10, 10, 0.4)' }}>
                Month 4
              </p>
            </div>

            {/* Phase Labels */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '8px',
                opacity: timelineProgress > 0.8 ? 1 : 0,
                transition: 'opacity 500ms ease'
              }}
            >
              <p style={{ fontSize: '16px', fontWeight: '500', color: '#0A0A0A' }}>
                Strategy
              </p>
              <p style={{ fontSize: '16px', fontWeight: '500', color: '#0A0A0A', textAlign: 'center', flex: 1, marginLeft: '40px' }}>
                ——— Execution ———
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE COMMITMENT */}
      <section
        ref={commitmentRef}
        style={{
          backgroundColor: '#F7F7F7',
          padding: '120px 80px',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Label */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.4)',
              marginBottom: '40px',
              opacity: commitmentVisible ? 1 : 0,
              transform: commitmentVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What we need from you
          </p>

          {/* Lines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {commitmentLines.map((line, index) => (
              <p
                key={index}
                style={{
                  fontSize: '24px',
                  fontWeight: '400',
                  color: '#0A0A0A',
                  lineHeight: '1.8',
                  opacity: commitmentVisibleItems[index] ? 1 : 0,
                  transform: commitmentVisibleItems[index] ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: WHAT YOU WALK AWAY WITH */}
      <section
        ref={deliverablesRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '160px 80px'
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Headline */}
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: '48px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '60px',
              opacity: deliverablesVisible ? 1 : 0,
              transform: deliverablesVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What you walk away with.
          </h2>

          {/* Two Columns */}
          <div
            className="deliverables-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '80px'
            }}
          >
            {/* Column 1: Month 1 */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: deliverablesVisible ? 1 : 0,
                transform: deliverablesVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '200ms'
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FF2E63',
                  marginBottom: '24px'
                }}
              >
                Month 1
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {deliverables1.map((item, i) => (
                  <p
                    key={i}
                    className="transition-all duration-500"
                    style={{
                      fontSize: '18px',
                      color: '#0A0A0A',
                      lineHeight: '2.2',
                      opacity: deliverablesVisible ? 1 : 0,
                      transform: deliverablesVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transitionDelay: `${300 + i * 100}ms`
                    }}
                  >
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Column 2: Months 2-4 */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: deliverablesVisible ? 1 : 0,
                transform: deliverablesVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '400ms'
              }}
            >
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#FF2E63',
                  marginBottom: '24px'
                }}
              >
                Months 2–4
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {deliverables24.map((item, i) => (
                  <p
                    key={i}
                    className="transition-all duration-500"
                    style={{
                      fontSize: '18px',
                      color: '#0A0A0A',
                      lineHeight: '2.2',
                      opacity: deliverablesVisible ? 1 : 0,
                      transform: deliverablesVisible ? 'translateX(0)' : 'translateX(-20px)',
                      transitionDelay: `${500 + i * 100}ms`
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
      </section>

      {/* SECTION 6: CTA (DARK) */}
      <section
        ref={ctaRef}
        style={{
          backgroundColor: '#0A0A0A',
          padding: '180px 80px',
          textAlign: 'center',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Headline */}
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: '52px',
              fontWeight: '600',
              color: '#FFFFFF',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Ready when you are.
          </h2>

          {/* Subline */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.6)',
              marginTop: '24px',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '150ms'
            }}
          >
            We take one client per month.
          </p>

          {/* Button */}
          <Link
            to="/book-call"
            className="inline-block transition-all duration-300"
            style={{
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              padding: '20px 44px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              marginTop: '48px',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E8284A';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(255, 46, 99, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 100px 24px !important;
          }
          section h1 {
            font-size: 72px !important;
          }
          section h2 {
            font-size: 36px !important;
          }
          .how-it-works-grid {
            grid-template-columns: 1fr !important;
          }
          .deliverables-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
        @media (max-width: 480px) {
          section h1 {
            font-size: 56px !important;
          }
          section h2 {
            font-size: 28px !important;
          }
        }
      `}</style>
    </main>
  );
};

export default Pricing;
