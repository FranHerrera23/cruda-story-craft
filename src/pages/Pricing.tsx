import { Link } from "react-router-dom";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useStaggerAnimation, useScrollProgress } from "@/hooks/useStaggerAnimation";
import { useState, useEffect, useRef } from "react";

// Dot Grid Icon Component
const DotGridIcon = () => (
  <div 
    style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 6px)',
      gridTemplateRows: 'repeat(3, 6px)',
      gap: '8px',
      marginTop: '16px',
      marginRight: '60px',
      flexShrink: 0
    }}
  >
    {[...Array(6)].map((_, i) => (
      <div 
        key={i}
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: '#0A0A0A'
        }}
      />
    ))}
  </div>
);

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

const includedItems = [
  {
    title: "Weekly sessions",
    description: "60-minute conversations, every week for four months. We dig into how you think, what you've built, what sets you apart."
  },
  {
    title: "Narrative development",
    description: "We find the pattern underneath — the philosophy that makes your work yours. Then we document it in a way that travels."
  },
  {
    title: "LinkedIn presence",
    description: "Profile rewrite. Content strategy. Voice that sounds like you, not a press release."
  },
  {
    title: "Pitch deck language",
    description: "The words that frame your work. For investor decks, partnership proposals, client presentations."
  },
  {
    title: "Talking points",
    description: "For podcasts, panels, press, and every room you walk into."
  },
  {
    title: "Ongoing support",
    description: "WhatsApp access throughout the engagement. Quick feedback, fast iterations."
  }
];

const timelineMonths = [
  {
    month: "MONTH 1",
    phase: "Discovery",
    description: "Deep conversations. Understanding how you think, what you've built, what makes your work different."
  },
  {
    month: "MONTH 2",
    phase: "Pattern",
    description: "Finding the through-line. The philosophy underneath. Drafting the narrative."
  },
  {
    month: "MONTH 3",
    phase: "Build",
    description: "LinkedIn. Talking points. Pitch deck language. Putting the narrative to work."
  },
  {
    month: "MONTH 4",
    phase: "Deploy",
    description: "Refinement. Implementation support. Making sure it sticks."
  }
];

const deliverables = [
  "Your story in one sentence",
  "A narrative document your team can use",
  "LinkedIn profile + content strategy",
  "Pitch deck language",
  "Talking points for any room",
  "Clarity that compounds"
];

const Pricing = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: philosophyRef, isVisible: philosophyVisible } = useScrollAnimation<HTMLElement>();
  const { containerRef: includedRef, isVisible: includedVisible, visibleItems: includedVisibleItems } = useStaggerAnimation<HTMLElement>(includedItems.length, 150);
  const { elementRef: timelineRef, isVisible: timelineVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: progressRef, progress } = useScrollProgress();
  const { containerRef: deliverablesRef, isVisible: deliverablesVisible, visibleItems: deliverableVisibleItems } = useStaggerAnimation<HTMLElement>(deliverables.length, 120);
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const priceCount = useCountUp(7200, 1500, heroVisible);

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Pricing Hero */}
      <section 
        ref={heroRef}
        style={{ 
          backgroundColor: '#FFFFFF',
          padding: '160px 80px',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <div style={{ maxWidth: '600px' }}>
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

          {/* Subline */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '24px',
              color: 'rgba(10, 10, 10, 0.6)',
              marginTop: '24px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            Four months. Founder-led. Everything included.
          </p>

          {/* Alternative */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '17px',
              color: 'rgba(10, 10, 10, 0.4)',
              marginTop: '12px',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            $1,800/month if that's easier.
          </p>

          {/* Divider */}
          <div
            className="transition-all duration-1000"
            style={{
              width: '120px',
              height: '2px',
              backgroundColor: 'rgba(10, 10, 10, 0.15)',
              margin: '60px auto',
              transform: heroVisible ? 'scaleX(1)' : 'scaleX(0)',
              transformOrigin: 'center',
              transitionDelay: '400ms'
            }}
          />

          {/* Headline */}
          <p
            className="transition-all duration-700"
            style={{
              fontSize: '32px',
              fontWeight: '500',
              color: '#0A0A0A',
              lineHeight: '1.4',
              maxWidth: '500px',
              margin: '0 auto',
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '500ms'
            }}
          >
            This isn't a content package.<br />
            It's clarity that compounds.
          </p>
        </div>
      </section>

      {/* SECTION 2: Philosophy */}
      <section
        ref={philosophyRef}
        style={{
          backgroundColor: '#F7F7F7',
          padding: '160px 80px'
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', maxWidth: '800px' }}>
            {/* Dot Grid Icon */}
            <div
              className="hidden md:block transition-all duration-700"
              style={{
                opacity: philosophyVisible ? 1 : 0,
                transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <DotGridIcon />
            </div>

            {/* Text Block */}
            <div style={{ flex: 1 }}>
              {/* Headline */}
              <h2
                className="transition-all duration-700"
                style={{
                  fontSize: '48px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '48px',
                  opacity: philosophyVisible ? 1 : 0,
                  transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                Why this investment matters.
              </h2>

              {/* Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <p
                  className="transition-all duration-700"
                  style={{
                    fontSize: '22px',
                    color: 'rgba(10, 10, 10, 0.7)',
                    lineHeight: '1.7',
                    opacity: philosophyVisible ? 1 : 0,
                    transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: '100ms'
                  }}
                >
                  You've spent years — maybe decades — building something real.
                </p>

                <p
                  className="transition-all duration-700"
                  style={{
                    fontSize: '22px',
                    color: 'rgba(10, 10, 10, 0.7)',
                    lineHeight: '1.7',
                    opacity: philosophyVisible ? 1 : 0,
                    transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: '200ms'
                  }}
                >
                  The projects are there. The milestones. The proof.
                </p>

                <p
                  className="transition-all duration-700"
                  style={{
                    fontSize: '22px',
                    color: 'rgba(10, 10, 10, 0.7)',
                    lineHeight: '1.7',
                    opacity: philosophyVisible ? 1 : 0,
                    transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: '300ms'
                  }}
                >
                  But it's hidden. Buried in bad bios, generic websites, LinkedIn posts that sound like everyone else.
                </p>

                <p
                  className="transition-all duration-700"
                  style={{
                    fontSize: '22px',
                    fontWeight: '500',
                    color: '#0A0A0A',
                    lineHeight: '1.7',
                    opacity: philosophyVisible ? 1 : 0,
                    transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: '400ms'
                  }}
                >
                  We don't create a story from nothing.<br />
                  We carve out the one that's already there — and put it to work.
                </p>

                <p
                  className="transition-all duration-700"
                  style={{
                    fontSize: '22px',
                    fontWeight: '500',
                    color: '#0A0A0A',
                    lineHeight: '1.7',
                    opacity: philosophyVisible ? 1 : 0,
                    transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: '500ms'
                  }}
                >
                  This isn't about vanity. It's about leverage.
                </p>

                <p
                  className="transition-all duration-700"
                  style={{
                    fontSize: '22px',
                    color: 'rgba(10, 10, 10, 0.7)',
                    lineHeight: '1.7',
                    opacity: philosophyVisible ? 1 : 0,
                    transform: philosophyVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: '600ms'
                  }}
                >
                  Your reputation, compounding across every surface where trust is built.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: What's Included */}
      <section
        ref={includedRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '160px 80px'
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
              opacity: includedVisible ? 1 : 0,
              transform: includedVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What's included
          </p>

          {/* Items */}
          {includedItems.map((item, index) => (
            <div
              key={index}
              style={{
                padding: '40px 0',
                borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                opacity: includedVisibleItems[index] ? 1 : 0,
                transform: includedVisibleItems[index] ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '12px'
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '18px',
                  color: 'rgba(10, 10, 10, 0.6)',
                  lineHeight: '1.7'
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: Timeline */}
      <section
        ref={timelineRef}
        style={{
          backgroundColor: '#F7F7F7',
          padding: '160px 80px'
        }}
      >
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
              opacity: timelineVisible ? 1 : 0,
              transform: timelineVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            The journey
          </p>

          {/* Timeline Bar */}
          <div
            ref={progressRef}
            className="transition-all duration-700"
            style={{
              position: 'relative',
              marginBottom: '60px',
              opacity: timelineVisible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            {/* Bar */}
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
                  width: '100%',
                  backgroundColor: '#FF2E63',
                  transformOrigin: 'left',
                  transform: `scaleX(${Math.min(progress * 1.5, 1)})`,
                  transition: 'transform 100ms linear'
                }}
              />
            </div>

            {/* Dots */}
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', top: '-5px', left: 0, right: 0 }}>
              {timelineMonths.map((_, index) => {
                const dotProgress = index / (timelineMonths.length - 1);
                const isActive = progress * 1.5 >= dotProgress;
                return (
                  <div
                    key={index}
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#FF2E63' : 'rgba(10, 10, 10, 0.15)',
                      transition: 'background-color 300ms ease'
                    }}
                  />
                );
              })}
            </div>
          </div>

          {/* Month Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            style={{
              opacity: timelineVisible ? 1 : 0,
              transform: timelineVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '400ms'
            }}
          >
            {timelineMonths.map((month, index) => (
              <div key={index}>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    color: 'rgba(10, 10, 10, 0.5)',
                    marginBottom: '8px'
                  }}
                >
                  {month.month}
                </p>
                <p
                  style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#0A0A0A',
                    marginBottom: '12px'
                  }}
                >
                  {month.phase}
                </p>
                <p
                  style={{
                    fontSize: '16px',
                    color: 'rgba(10, 10, 10, 0.6)',
                    lineHeight: '1.6',
                    maxWidth: '220px'
                  }}
                >
                  {month.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: What You Walk Away With */}
      <section
        ref={deliverablesRef}
        style={{
          backgroundColor: '#FFFFFF',
          padding: '160px 80px'
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Headline */}
          <h2
            className="transition-all duration-700"
            style={{
              fontSize: '48px',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '48px',
              opacity: deliverablesVisible ? 1 : 0,
              transform: deliverablesVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            What you walk away with.
          </h2>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {deliverables.map((item, index) => (
              <p
                key={index}
                style={{
                  fontSize: '24px',
                  color: '#0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  opacity: deliverableVisibleItems[index] ? 1 : 0,
                  transform: deliverableVisibleItems[index] ? 'translateX(0)' : 'translateX(-20px)',
                  transition: 'opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <span style={{ color: '#FF2E63', marginRight: '20px' }}>→</span>
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA (Dark) */}
      <section
        ref={ctaRef}
        style={{
          backgroundColor: '#0A0A0A',
          padding: '180px 80px',
          textAlign: 'center'
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
              marginTop: '20px',
              marginBottom: '48px',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            We take one client per month. Let's see if we're a fit.
          </p>

          {/* Button */}
          <Link
            to="/book-call"
            className="inline-block transition-all duration-200"
            style={{
              backgroundColor: '#FF2E63',
              color: '#FFFFFF',
              padding: '22px 52px',
              fontSize: '18px',
              fontWeight: '600',
              borderRadius: '8px',
              textDecoration: 'none',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E8284A';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
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
        }
      `}</style>
    </main>
  );
};

export default Pricing;