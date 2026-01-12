import { useEffect, useRef, useState } from "react";

const useRowAnimation = (threshold = 0.3) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

const FloatingWord = ({ 
  word, 
  top, 
  left, 
  delay, 
  isVisible,
  scrollOffset,
  fromRight,
}: { 
  word: string; 
  top: string; 
  left: string; 
  delay: number; 
  isVisible: boolean;
  scrollOffset: number;
  fromRight: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const initialX = fromRight ? 30 : -30;
  
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top,
        left,
        fontSize: '14px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: isVisible 
          ? isHovered 
            ? 'rgba(10, 10, 10, 0.45)' 
            : 'rgba(10, 10, 10, 0.25)' 
          : 'rgba(10, 10, 10, 0)',
        transform: isVisible 
          ? `translate(0, ${scrollOffset}px)` 
          : `translate(${initialX}px, ${scrollOffset}px)`,
        transition: isVisible 
          ? 'color 0.2s ease-out, transform 0.1s ease-out' 
          : `color 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
        whiteSpace: 'nowrap',
        cursor: 'default',
      }}
    >
      {word}
    </span>
  );
};

const NarrativeAlignmentSection = () => {
  const row1 = useRowAnimation();
  const row2 = useRowAnimation();
  const row3 = useRowAnimation();
  const closerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [closerVisible, setCloserVisible] = useState(false);
  const [lineComplete, setLineComplete] = useState(false);
  const [underlineComplete, setUnderlineComplete] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Reduced parallax intensity to prevent overlapping
        const relativeScroll = Math.max(-30, Math.min(30, -rect.top * 0.05));
        setScrollOffset(relativeScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const element = closerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCloserVisible(true);
          setTimeout(() => setLineComplete(true), 400);
          setTimeout(() => setUnderlineComplete(true), 900);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Zigzag pattern with alternating entrance directions
  const row1Words = [
    { word: 'synergy', top: '5%', left: '5%', fromRight: false },
    { word: 'leverage', top: '30%', left: '45%', fromRight: true },
    { word: 'best-in-class', top: '55%', left: '10%', fromRight: false },
    { word: 'solutions', top: '80%', left: '55%', fromRight: true },
  ];

  const row2Words = [
    { word: 'Forbes', top: '5%', left: '55%', fromRight: true },
    { word: 'award-winning', top: '30%', left: '10%', fromRight: false },
    { word: 'Inc 5000', top: '55%', left: '50%', fromRight: true },
    { word: 'industry leader', top: '80%', left: '5%', fromRight: false },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '160px 80px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Row 1 - What you do */}
        <div
          ref={row1.ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            minHeight: '180px',
            marginBottom: '80px',
          }}
        >
          <h2
            style={{
              fontSize: '52px',
              fontWeight: 600,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              margin: 0,
              opacity: row1.isVisible ? 1 : 0,
              transform: row1.isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            What you do.
          </h2>
          <div style={{ position: 'relative', height: '180px', overflow: 'visible' }}>
            {row1Words.map((item, index) => (
              <FloatingWord
                key={item.word}
                word={item.word}
                top={item.top}
                left={item.left}
                delay={0.3 + 0.15 * index}
                isVisible={row1.isVisible}
                scrollOffset={scrollOffset}
                fromRight={item.fromRight}
              />
            ))}
          </div>
        </div>

        {/* Row 2 - Why it matters */}
        <div
          ref={row2.ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            minHeight: '180px',
            marginBottom: '80px',
          }}
        >
          <h2
            style={{
              fontSize: '52px',
              fontWeight: 600,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              margin: 0,
              opacity: row2.isVisible ? 1 : 0,
              transform: row2.isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            Why it matters.
          </h2>
          <div style={{ position: 'relative', height: '180px', overflow: 'visible' }}>
            {row2Words.map((item, index) => (
              <FloatingWord
                key={item.word}
                word={item.word}
                top={item.top}
                left={item.left}
                delay={0.3 + 0.15 * index}
                isVisible={row2.isVisible}
                scrollOffset={scrollOffset}
                fromRight={item.fromRight}
              />
            ))}
          </div>
        </div>

        {/* Row 3 - Why they should care */}
        <div
          ref={row3.ref}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'center',
            minHeight: '180px',
            marginBottom: '120px',
          }}
        >
          <h2
            style={{
              fontSize: '52px',
              fontWeight: 600,
              color: '#FF2E63',
              letterSpacing: '-0.02em',
              margin: 0,
              opacity: row3.isVisible ? 1 : 0,
              transform: row3.isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          >
            Why they should care.
          </h2>
          <div 
            style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center',
              height: '180px',
            }}
          >
            <span
              style={{
                fontSize: '24px',
                color: 'rgba(10, 10, 10, 0.25)',
                opacity: row3.isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-out 0.8s',
              }}
            >
              ...
            </span>
          </div>
        </div>

        {/* Closer */}
        <div
          ref={closerRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          <div
            style={{
              width: closerVisible ? '64px' : '0',
              height: '3px',
              backgroundColor: '#FF2E63',
              transition: 'width 0.4s ease-out',
              marginBottom: '40px',
            }}
          />
          <div
            style={{
              opacity: lineComplete ? 1 : 0,
              transition: 'opacity 0.5s ease-out',
            }}
          >
            <p
              style={{
                fontSize: '20px',
                fontWeight: 400,
                color: 'rgba(10, 10, 10, 0.5)',
                margin: 0,
              }}
            >
              Most companies{' '}
              <span
                style={{
                  color: '#FF2E63',
                  fontWeight: 500,
                  position: 'relative',
                  display: 'inline-block',
                }}
              >
                like yours
                <span
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    width: underlineComplete ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: '#FF2E63',
                    transition: 'width 0.6s ease-out',
                  }}
                />
              </span>
              {' '}only have the first.
            </p>
            <p
              style={{
                fontSize: '24px',
                fontWeight: 600,
                color: '#0A0A0A',
                margin: 0,
                marginTop: '16px',
              }}
            >
              We close the gap.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          section > div > div {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            min-height: auto !important;
            margin-bottom: 48px !important;
          }
          section h2 {
            font-size: 32px !important;
          }
          section > div > div > div[style*="position: relative"] {
            display: none !important;
          }
          section > div > div > div[style*="display: flex"] {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default NarrativeAlignmentSection;
