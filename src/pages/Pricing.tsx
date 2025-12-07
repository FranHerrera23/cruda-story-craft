import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";
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

const commitmentLines = [
  "Access to your portfolio and milestones.",
  "One hour a week.",
  "Feedback over WhatsApp."
];

const outcomeCards = [
  {
    title: "Market Expansion",
    description: "Enter new markets with clarity that opens doors.",
    proof: "TRAZZO: Lima → Florida"
  },
  {
    title: "Thought Leadership",
    description: "Become the voice your industry listens to.",
    proof: "Norhart: Stages, podcasts, investor rooms"
  },
  {
    title: "Reputation at Scale",
    description: "Your story working across every surface — without you.",
    proof: "LinkedIn, pitch decks, press, stages, every room"
  }
];

const Pricing = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: howRef, isVisible: howVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: outcomesRef, isVisible: outcomesVisible } = useScrollAnimation<HTMLElement>();
  const { containerRef: commitmentRef, isVisible: commitmentVisible, visibleItems: commitmentVisibleItems } = useStaggerAnimation<HTMLElement>(commitmentLines.length, 150);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const priceCount = useCountUp(7200, 1500, heroVisible);

  // Timeline animation state
  const [timelineProgress, setTimelineProgress] = useState(0);

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
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-20 py-24 md:py-40"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div style={{ maxWidth: '700px' }}>
          {/* Price */}
          <h1
            className="transition-all duration-700 text-[72px] md:text-[120px]"
            style={{
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
          <div className="mt-12 flex flex-col gap-2">
            {[
              "The depth of an agency.",
              "The speed of a freelancer.",
              "The confidentiality of an in-house team."
            ].map((line, index) => (
              <p
                key={index}
                className="transition-all duration-700 text-[20px] md:text-[28px]"
                style={{
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
            className="transition-all duration-700 text-[18px] md:text-[20px]"
            style={{
              fontWeight: '500',
              color: 'rgba(10, 10, 10, 0.6)',
              marginTop: '40px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '650ms'
            }}
          >
            Your 4-month kick-off. Founder-led. Done for you.
          </p>

          {/* Alternative */}
          <p
            className="transition-all duration-700 text-[14px] md:text-[16px]"
            style={{
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
            className="inline-block transition-all duration-300 mt-12 hover:opacity-90"
            style={{
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              padding: '20px 44px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '850ms'
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* SECTION 2: HOW IT WORKS */}
      <section
        ref={howRef}
        className="py-24 md:py-40 px-6 md:px-20"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1: Month 1 */}
            <div
              className="transition-all duration-700 p-8 md:p-12 rounded-lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10, 10, 10, 0.08)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                opacity: howVisible ? 1 : 0,
                transform: howVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms'
              }}
            >
              {/* Phase Label */}
              <p
                className="text-[12px] md:text-[13px] font-semibold uppercase"
                style={{ letterSpacing: '0.1em', color: '#FF2E63' }}
              >
                Month 1
              </p>

              {/* Phase Title */}
              <h3
                className="text-[28px] md:text-[36px] font-semibold mt-3"
                style={{ color: '#0A0A0A' }}
              >
                Strategy
              </h3>

              {/* Phase Description */}
              <p
                className="text-[18px] md:text-[20px] mt-4 mb-8"
                style={{ color: 'rgba(10, 10, 10, 0.6)' }}
              >
                We build your narrative system.
              </p>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* What We Need */}
              <p
                className="text-[11px] md:text-[12px] font-semibold uppercase mt-8 mb-4"
                style={{ letterSpacing: '0.1em', color: 'rgba(10, 10, 10, 0.35)' }}
              >
                What we need
              </p>
              <div className="flex flex-col gap-3">
                {month1WhatWeNeed.map((item, i) => (
                  <p key={i} className="text-[16px] md:text-[17px]" style={{ color: '#0A0A0A', lineHeight: '1.8' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-6" style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* What You Get */}
              <p
                className="text-[11px] md:text-[12px] font-semibold uppercase mt-8 mb-4"
                style={{ letterSpacing: '0.1em', color: 'rgba(10, 10, 10, 0.35)' }}
              >
                What you get
              </p>
              <div className="flex flex-col gap-3">
                {month1WhatYouGet.map((item, i) => (
                  <p key={i} className="text-[16px] md:text-[17px]" style={{ color: '#0A0A0A', lineHeight: '1.8' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Card 2: Months 2-4 */}
            <div
              className="transition-all duration-700 p-8 md:p-12 rounded-lg"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10, 10, 10, 0.08)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.04)',
                opacity: howVisible ? 1 : 0,
                transform: howVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              {/* Phase Label */}
              <p
                className="text-[12px] md:text-[13px] font-semibold uppercase"
                style={{ letterSpacing: '0.1em', color: '#FF2E63' }}
              >
                Months 2–4
              </p>

              {/* Phase Title */}
              <h3
                className="text-[28px] md:text-[36px] font-semibold mt-3"
                style={{ color: '#0A0A0A' }}
              >
                Execution
              </h3>

              {/* Phase Description */}
              <p
                className="text-[18px] md:text-[20px] mt-4 mb-8"
                style={{ color: 'rgba(10, 10, 10, 0.6)' }}
              >
                We put it to work.
              </p>

              {/* Divider */}
              <div style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* What We Deliver */}
              <p
                className="text-[11px] md:text-[12px] font-semibold uppercase mt-8 mb-4"
                style={{ letterSpacing: '0.1em', color: 'rgba(10, 10, 10, 0.35)' }}
              >
                What we deliver
              </p>
              <div className="flex flex-col gap-3">
                {months24WhatWeDeliver.map((item, i) => (
                  <p key={i} className="text-[16px] md:text-[17px]" style={{ color: '#0A0A0A', lineHeight: '1.8' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="mt-6" style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* Optional Add-on */}
              <p
                className="text-[11px] md:text-[12px] font-semibold uppercase mt-8 mb-4"
                style={{ letterSpacing: '0.1em', color: 'rgba(10, 10, 10, 0.35)' }}
              >
                Optional add-on
              </p>
              <p className="text-[16px] md:text-[17px]" style={{ color: 'rgba(10, 10, 10, 0.5)', fontStyle: 'italic' }}>
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
        className="py-20 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[800px] mx-auto">
          {/* Timeline Bar */}
          <div
            className="transition-all duration-700 relative h-[3px]"
            style={{
              backgroundColor: 'rgba(10, 10, 10, 0.1)',
              borderRadius: '4px',
              opacity: timelineVisible ? 1 : 0,
              transform: timelineVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            {/* Progress Fill */}
            <div
              className="absolute left-0 top-0 h-full transition-none"
              style={{
                backgroundColor: '#FF2E63',
                borderRadius: '4px',
                width: `${timelineProgress * 100}%`
              }}
            />

            {/* Milestone Dots */}
            {[0, 25, 100].map((pos, i) => (
              <div
                key={i}
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-300"
                style={{
                  left: `${pos}%`,
                  transform: `translate(-50%, -50%)`,
                  backgroundColor: timelineProgress * 100 >= pos ? '#FF2E63' : 'rgba(10, 10, 10, 0.2)',
                  transitionDelay: `${i * 200}ms`
                }}
              />
            ))}
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-6">
            <div className="text-left">
              <p className="text-[11px] md:text-[12px] font-semibold uppercase" style={{ color: 'rgba(10, 10, 10, 0.4)', letterSpacing: '0.1em' }}>
                Month 1
              </p>
              <p className="text-[14px] md:text-[15px] mt-1" style={{ color: '#0A0A0A' }}>
                Strategy
              </p>
            </div>
            <div className="text-center">
              <p className="text-[11px] md:text-[12px] font-semibold uppercase" style={{ color: 'rgba(10, 10, 10, 0.4)', letterSpacing: '0.1em' }}>
                Month 2
              </p>
              <p className="text-[14px] md:text-[15px] mt-1" style={{ color: 'rgba(10, 10, 10, 0.6)' }}>
                Execution begins
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] md:text-[12px] font-semibold uppercase" style={{ color: 'rgba(10, 10, 10, 0.4)', letterSpacing: '0.1em' }}>
                Month 4
              </p>
              <p className="text-[14px] md:text-[15px] mt-1" style={{ color: '#0A0A0A' }}>
                System complete
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT CLIENTS COME FOR */}
      <section
        ref={outcomesRef}
        className="py-24 md:py-40 px-6 md:px-20"
        style={{ backgroundColor: '#F7F7F7' }}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Label */}
          <p
            className="transition-all duration-700 text-[12px] md:text-[13px] font-semibold uppercase mb-12 md:mb-16"
            style={{
              letterSpacing: '0.12em',
              color: 'rgba(10, 10, 10, 0.4)',
              opacity: outcomesVisible ? 1 : 0,
              transform: outcomesVisible ? 'translateY(0)' : 'translateY(16px)'
            }}
          >
            What clients come for
          </p>

          {/* Three Outcome Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {outcomeCards.map((card, i) => (
              <div
                key={i}
                className="transition-all duration-700 p-8 md:p-10 rounded-lg"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid rgba(10, 10, 10, 0.08)',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.03)',
                  opacity: outcomesVisible ? 1 : 0,
                  transform: outcomesVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${150 + i * 150}ms`
                }}
              >
                <h3
                  className="text-[20px] md:text-[24px] font-semibold mb-4"
                  style={{ color: '#0A0A0A' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px] md:text-[17px]"
                  style={{ color: 'rgba(10, 10, 10, 0.6)', lineHeight: 1.6 }}
                >
                  {card.description}
                </p>

                {/* Divider */}
                <div className="my-6" style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

                {/* Proof */}
                <p
                  className="text-[13px] md:text-[15px] italic transition-all duration-700"
                  style={{
                    color: 'rgba(10, 10, 10, 0.5)',
                    opacity: outcomesVisible ? 1 : 0,
                    transitionDelay: `${500 + i * 150}ms`
                  }}
                >
                  {card.proof}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: THE COMMITMENT */}
      <section
        ref={commitmentRef}
        className="py-24 md:py-32 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[600px] mx-auto">
          {/* Label */}
          <p
            className="transition-all duration-700 text-[12px] md:text-[13px] font-semibold uppercase mb-10"
            style={{
              letterSpacing: '0.12em',
              color: 'rgba(10, 10, 10, 0.4)',
              opacity: commitmentVisible ? 1 : 0,
              transform: commitmentVisible ? 'translateY(0)' : 'translateY(16px)'
            }}
          >
            What we need from you
          </p>

          {/* Lines */}
          <div className="space-y-2">
            {commitmentLines.map((line, i) => (
              <p
                key={i}
                className="transition-all duration-700 text-[20px] md:text-[24px]"
                style={{
                  color: '#0A0A0A',
                  lineHeight: 1.8,
                  opacity: commitmentVisibleItems[i] ? 1 : 0,
                  transform: commitmentVisibleItems[i] ? 'translateY(0)' : 'translateY(16px)'
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA */}
      <section
        ref={ctaRef}
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 md:px-20 py-32 md:py-44"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <h2
          className="transition-all duration-700 text-[32px] md:text-[52px] font-semibold mb-6"
          style={{
            color: '#FFFFFF',
            letterSpacing: '-0.02em',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Ready when you are.
        </h2>

        <p
          className="transition-all duration-700 text-[16px] md:text-[20px] mb-12"
          style={{
            color: 'rgba(255, 255, 255, 0.6)',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          We take one client per month.
        </p>

        <Link
          to="/book-call"
          className="inline-block transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            padding: '20px 44px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '8px',
            textDecoration: 'none',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          Start a Conversation
        </Link>
      </section>
    </main>
  );
};

export default Pricing;
