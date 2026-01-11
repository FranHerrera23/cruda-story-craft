import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";
import { useState, useEffect, useRef } from "react";
import mikeKaeding from "@/assets/mike-kaeding.webp";

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

// Data
const youreHereReasons = [
  "You're entering a new market and need people to trust you before you walk in the room.",
  "You've done incredible work — but nobody outside your clients knows about it.",
  "You want investors, partners, and talent to get it without you explaining it every time.",
  "You're tired of sounding like everyone else in your industry."
];

const comparisonCruda = [
  "Brand + PR + Content + Sales",
  "One team. One vision.",
  "6 months to a system.",
  "$2,600/month flat."
];

const comparisonOthers = [
  "Social agencies don't get PR. PR firms don't get social. Freelancers don't get strategy.",
  "Silos. Handoffs. Gaps.",
  "6–12 months. Maybe.",
  "$15k–50k+ retainers"
];

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

const months26WhatWeDeliver = [
  "LinkedIn profile + content",
  "Instagram presence",
  "Pitch deck language",
  "Talking points for any room",
  "WhatsApp support throughout",
  "Monthly refinement"
];

const Pricing = () => {
  const { containerRef: heroRef, isVisible: heroVisible, visibleItems: heroVisibleItems } = useStaggerAnimation<HTMLElement>(youreHereReasons.length, 150);
  const { elementRef: pricingRef, isVisible: pricingVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: howRef, isVisible: howVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: testimonialRef, isVisible: testimonialVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const priceCount = useCountUp(2600, 1500, pricingVisible);

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
      {/* SECTION 1: YOU'RE HERE BECAUSE (Hero) */}
      <section 
        ref={heroRef}
        className="px-6 md:px-20 py-24 md:py-32"
        style={{ backgroundColor: '#F5F1E8', paddingTop: '140px' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          {/* Massive Headline */}
          <h1
            className="transition-all duration-700"
            style={{
              fontSize: 'clamp(48px, 8vw, 100px)',
              fontWeight: '800',
              lineHeight: '1.0',
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              marginBottom: '56px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            YOU'RE HERE<br />
            <span style={{ color: '#FF2E63' }}>BECAUSE.</span>
          </h1>

          {/* Reasons */}
          <div className="flex flex-col gap-6">
            {youreHereReasons.map((reason, i) => (
              <p
                key={i}
                className="transition-all duration-700 text-[22px]"
                style={{
                  color: 'rgba(10,10,10,0.7)',
                  lineHeight: '1.9',
                  maxWidth: '700px',
                  margin: '0 auto',
                  opacity: heroVisibleItems[i] ? 1 : 0,
                  transform: heroVisibleItems[i] ? 'translateY(0)' : 'translateY(16px)'
                }}
              >
                {reason}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: PRICING */}
      <section
        ref={pricingRef}
        className="py-24 md:py-32 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {/* Price - Massive */}
          <div
            className="transition-all duration-700"
            style={{
              opacity: pricingVisible ? 1 : 0,
              transform: pricingVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <span
              style={{
                fontSize: 'clamp(80px, 12vw, 160px)',
                fontWeight: '800',
                lineHeight: '1.0',
                letterSpacing: '-0.03em',
                color: '#0A0A0A'
              }}
            >
              ${priceCount.toLocaleString()}
            </span>
            <span
              style={{
                fontSize: 'clamp(24px, 4vw, 40px)',
                fontWeight: '800',
                textTransform: 'uppercase',
                color: '#0A0A0A'
              }}
            >
              /MONTH
            </span>
          </div>

          {/* Duration */}
          <p
            className="transition-all duration-700 text-[18px]"
            style={{
              color: 'rgba(10, 10, 10, 0.6)',
              marginBottom: '32px',
              opacity: pricingVisible ? 1 : 0,
              transform: pricingVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            6-month minimum
          </p>

          {/* Body text */}
          <p
            className="transition-all duration-700 text-[20px]"
            style={{
              color: '#0A0A0A',
              lineHeight: '1.7',
              marginBottom: '16px',
              opacity: pricingVisible ? 1 : 0,
              transform: pricingVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            Narrative strategy for leaders who are done being invisible.
          </p>

          <p
            className="transition-all duration-700 text-[20px]"
            style={{
              color: '#0A0A0A',
              lineHeight: '1.7',
              marginBottom: '32px',
              opacity: pricingVisible ? 1 : 0,
              transform: pricingVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            Done for you. Built to last.
          </p>

          {/* Alternative pricing */}
          <p
            className="transition-all duration-700 text-[16px]"
            style={{
              color: 'rgba(10, 10, 10, 0.6)',
              fontStyle: 'italic',
              marginBottom: '48px',
              opacity: pricingVisible ? 1 : 0,
              transform: pricingVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '400ms'
            }}
          >
            ($1,800/month if content-only works better)
          </p>

          {/* CTA Button */}
          <Link
            to="/book-call"
            className="inline-block transition-all duration-300 hover:translate-y-[-2px]"
            style={{
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              padding: '18px 48px',
              fontSize: '16px',
              fontWeight: '600',
              borderRadius: '4px',
              textDecoration: 'none',
              opacity: pricingVisible ? 1 : 0,
              transform: pricingVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '500ms'
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* SECTION 3: STRATEGY + EXECUTION SPLIT */}
      <section
        ref={howRef}
        className="py-24 md:py-36 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-16 relative">
            {/* Vertical divider - desktop only */}
            <div 
              className="hidden md:block absolute left-1/2 top-0 h-full"
              style={{ 
                width: '2px', 
                backgroundColor: '#E5E5E5',
                transform: 'translateX(-50%)'
              }} 
            />

            {/* Card 1: Month 1 */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: howVisible ? 1 : 0,
                transform: howVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms'
              }}
            >
              {/* Phase Label */}
              <p
                className="text-[13px] font-semibold uppercase"
                style={{ letterSpacing: '0.1em', color: '#FF2E63', marginBottom: '16px' }}
              >
                MONTH 1
              </p>

              {/* Phase Title */}
              <h3
                className="text-[32px] font-semibold mb-8"
                style={{ color: '#0A0A0A' }}
              >
                Strategy
              </h3>

              {/* What We Need */}
              <p
                className="text-[13px] font-semibold uppercase mb-4"
                style={{ letterSpacing: '0.1em', color: '#0A0A0A' }}
              >
                WHAT WE NEED
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {month1WhatWeNeed.map((item, i) => (
                  <p key={i} className="text-[16px]" style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8" style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* What You Get */}
              <p
                className="text-[13px] font-semibold uppercase mb-4"
                style={{ letterSpacing: '0.1em', color: '#0A0A0A' }}
              >
                WHAT WE DELIVER
              </p>
              <div className="flex flex-col gap-3">
                {month1WhatYouGet.map((item, i) => (
                  <p key={i} className="text-[16px]" style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Card 2: Months 2-6 */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: howVisible ? 1 : 0,
                transform: howVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '300ms'
              }}
            >
              {/* Phase Label */}
              <p
                className="text-[13px] font-semibold uppercase"
                style={{ letterSpacing: '0.1em', color: '#FF2E63', marginBottom: '16px' }}
              >
                MONTHS 2–6
              </p>

              {/* Phase Title */}
              <h3
                className="text-[32px] font-semibold mb-8"
                style={{ color: '#0A0A0A' }}
              >
                Execution
              </h3>

              {/* What We Deliver */}
              <p
                className="text-[13px] font-semibold uppercase mb-4"
                style={{ letterSpacing: '0.1em', color: '#0A0A0A' }}
              >
                WHAT WE DELIVER
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {months26WhatWeDeliver.map((item, i) => (
                  <p key={i} className="text-[16px]" style={{ color: '#0A0A0A', lineHeight: '1.6' }}>
                    <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                    {item}
                  </p>
                ))}
              </div>

              {/* Divider */}
              <div className="my-8" style={{ height: '1px', backgroundColor: 'rgba(10, 10, 10, 0.1)' }} />

              {/* Optional Add-on */}
              <p
                className="text-[13px] font-semibold uppercase mb-4"
                style={{ letterSpacing: '0.1em', color: 'rgba(10, 10, 10, 0.6)' }}
              >
                OPTIONAL ADD-ON
              </p>
              <p className="text-[16px]" style={{ color: 'rgba(10, 10, 10, 0.6)', fontStyle: 'italic' }}>
                <span style={{ color: '#FF2E63', marginRight: '12px' }}>→</span>
                C-level content strategy (for leadership teams)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TIMELINE */}
      <section
        ref={timelineRef}
        className="py-24 px-6 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1000px] mx-auto">
          {/* Timeline Bar */}
          <div
            className="transition-all duration-700 relative h-[2px]"
            style={{
              backgroundColor: '#E5E5E5',
              opacity: timelineVisible ? 1 : 0
            }}
          >
            {/* Progress Fill */}
            <div
              className="absolute left-0 top-0 h-full"
              style={{
                backgroundColor: '#FF2E63',
                width: `${timelineProgress * 100}%`
              }}
            />

            {/* Milestone Dots */}
            {[0, 16.67, 50, 100].map((pos, i) => (
              <div
                key={i}
                className="absolute top-1/2 w-4 h-4 rounded-full transition-all duration-300"
                style={{
                  left: `${pos}%`,
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#FFFFFF',
                  border: `3px solid ${timelineProgress * 100 >= pos ? '#FF2E63' : '#E5E5E5'}`
                }}
              />
            ))}
          </div>

          {/* Labels */}
          <div className="flex justify-between mt-6">
            {[
              { label: 'MONTH 1', sublabel: 'Strategy' },
              { label: 'MONTH 2', sublabel: 'Execution begins' },
              { label: 'MONTH 4', sublabel: 'System complete' },
              { label: 'MONTH 7+', sublabel: 'Most clients continue' }
            ].map((item, i) => (
              <div 
                key={i} 
                className="text-center"
                style={{ 
                  width: i === 0 ? 'auto' : i === 3 ? 'auto' : 'auto',
                  position: 'relative'
                }}
              >
                <p className="text-[11px] font-semibold uppercase" style={{ color: 'rgba(10, 10, 10, 0.4)', letterSpacing: '0.1em' }}>
                  {item.label}
                </p>
                <p className="text-[14px] mt-2" style={{ color: 'rgba(10, 10, 10, 0.7)' }}>
                  {item.sublabel}
                </p>
              </div>
            ))}
          </div>

          {/* Social Proof */}
          <div
            className="transition-all duration-700 mt-16 pt-8"
            style={{
              borderTop: '1px solid #E5E5E5',
              opacity: timelineVisible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            <p className="text-[16px]" style={{ color: 'rgba(10, 10, 10, 0.7)', lineHeight: '1.8' }}>
              Karen Mannheim: 3+ years
            </p>
            <p className="text-[16px]" style={{ color: 'rgba(10, 10, 10, 0.7)', lineHeight: '1.8' }}>
              Mike Kaeding: 1.5 years
            </p>
            <p className="text-[18px] mt-4" style={{ color: '#0A0A0A', fontStyle: 'italic' }}>
              Most clients continue past Month 6. This is a foundation, not a finish line.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPARISON TABLE */}
      <section
        ref={comparisonRef}
        className="py-24 md:py-32 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1100px] mx-auto">
          {/* Two Column Headers */}
          <div className="grid grid-cols-2 gap-16 mb-8">
            <h3 className="text-[24px] font-semibold" style={{ color: '#0A0A0A' }}>
              CRUDA
            </h3>
            <h3 className="text-[24px] font-semibold" style={{ color: 'rgba(10, 10, 10, 0.6)' }}>
              THE OTHERS
            </h3>
          </div>

          {/* Rows */}
          {comparisonCruda.map((item, i) => (
            <div key={i}>
              {/* Divider */}
              <div
                className="transition-all duration-700"
                style={{
                  height: '1px',
                  backgroundColor: 'rgba(10, 10, 10, 0.08)',
                  opacity: comparisonVisible ? 1 : 0,
                  transform: comparisonVisible ? 'scaleX(1)' : 'scaleX(0)',
                  transformOrigin: 'left',
                  transitionDelay: `${100 + i * 100}ms`
                }}
              />
              
              <div
                className="transition-all duration-700 grid grid-cols-2 gap-16 py-6"
                style={{
                  opacity: comparisonVisible ? 1 : 0,
                  transform: comparisonVisible ? 'translateY(0)' : 'translateY(16px)',
                  transitionDelay: `${150 + i * 100}ms`
                }}
              >
                {/* CRUDA column */}
                <p className="text-[18px]" style={{ color: '#0A0A0A', lineHeight: '1.7' }}>
                  <span style={{ color: '#FF2E63', marginRight: '10px' }}>⚡</span>
                  {item}
                </p>
                
                {/* Others column */}
                <p className="text-[18px]" style={{ color: 'rgba(10, 10, 10, 0.6)', lineHeight: '1.7' }}>
                  {comparisonOthers[i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: TESTIMONIAL (optional) */}
      <section
        ref={testimonialRef}
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6 md:px-20 py-24 md:py-36"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        {/* Quote */}
        <p
          className="transition-all duration-[800ms] text-[26px] md:text-[36px] italic max-w-[800px]"
          style={{
            fontWeight: '400',
            color: '#FFFFFF',
            lineHeight: '1.5',
            opacity: testimonialVisible ? 1 : 0,
            transform: testimonialVisible ? 'translateY(0)' : 'translateY(30px)'
          }}
        >
          "Why work with a big agency when you can get from invisible to industry voice in six months — without the overhead, without the bureaucracy. CRUDA gets it."
        </p>

        {/* Attribution */}
        <div
          className="transition-all duration-700 flex items-center gap-5 mt-12"
          style={{
            opacity: testimonialVisible ? 1 : 0,
            transform: testimonialVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          {/* Photo */}
          <img
            src={mikeKaeding}
            alt="Mike Kaeding"
            className="w-16 h-16 rounded-full object-cover"
            style={{ border: '2px solid rgba(255, 255, 255, 0.2)' }}
          />

          {/* Text */}
          <div className="text-left">
            <p className="text-[17px] font-semibold" style={{ color: '#FF2E63' }}>
              Mike Kaeding
            </p>
            <p className="text-[15px]" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              CEO, Norhart
            </p>
            <p className="text-[14px]" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
              $200M Construction · Minneapolis
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section
        ref={ctaRef}
        className="py-28 md:py-36 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(36px, 5vw, 48px)',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '40px',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Your story could be next.
        </h2>

        <Link
          to="/book-call"
          className="inline-block transition-all duration-300 hover:translate-y-[-2px]"
          style={{
            backgroundColor: '#FF2E63',
            color: '#FFFFFF',
            padding: '18px 48px',
            fontSize: '16px',
            fontWeight: '600',
            borderRadius: '4px',
            textDecoration: 'none',
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          Start a Conversation
        </Link>
      </section>
    </main>
  );
};

export default Pricing;
