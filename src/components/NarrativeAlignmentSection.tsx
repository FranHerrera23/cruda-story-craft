import { useEffect, useRef, useState } from "react";

interface RowAnimationState {
  isVisible: boolean;
}

const useRowAnimation = (threshold = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<RowAnimationState>({ isVisible: false });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState({ isVisible: true });
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, ...state };
};

const FloatingWord = ({ 
  word, 
  top, 
  left, 
  delay, 
  isVisible,
  scrollY,
}: { 
  word: string; 
  top: string; 
  left: string; 
  delay: number; 
  isVisible: boolean;
  scrollY: number;
}) => (
  <span
    style={{
      position: 'absolute',
      top,
      left,
      fontSize: '13px',
      fontWeight: 400,
      textTransform: 'uppercase',
      letterSpacing: '0.08em',
      color: 'rgba(10, 10, 10, 0.15)',
      opacity: isVisible ? 1 : 0,
      transform: isVisible 
        ? `translateY(${scrollY * 0.3}px)` 
        : `translateY(${30 + scrollY * 0.3}px)`,
      transition: `opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s, transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}s`,
    }}
  >
    {word}
  </span>
);

const NarrativeAlignmentSection = () => {
  const row1 = useRowAnimation();
  const row2 = useRowAnimation();
  const row3 = useRowAnimation();
  const closerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [closerVisible, setCloserVisible] = useState(false);
  const [lineComplete, setLineComplete] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        // Calculate relative scroll position within section
        setScrollY(-sectionTop * 0.1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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
          observer.unobserve(element);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  // Diagonal drift pattern: top-left → bottom-right
  const row1Words = [
    { word: 'synergy', top: '5%', left: '5%' },
    { word: 'leverage', top: '30%', left: '30%' },
    { word: 'best-in-class', top: '55%', left: '50%' },
    { word: 'solutions', top: '75%', left: '70%' },
  ];

  const row2Words = [
    { word: 'Forbes', top: '5%', left: '10%' },
    { word: 'award-winning', top: '30%', left: '35%' },
    { word: 'Inc 5000', top: '55%', left: '55%' },
    { word: 'industry leader', top: '75%', left: '65%' },
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
              transform: row1.isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            What you do.
          </h2>
          <div style={{ position: 'relative', height: '180px' }}>
            {row1Words.map((item, index) => (
              <FloatingWord
                key={item.word}
                word={item.word}
                top={item.top}
                left={item.left}
                delay={0.1 * index}
                isVisible={row1.isVisible}
                scrollY={scrollY}
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
              transform: row2.isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            Why it matters.
          </h2>
          <div style={{ position: 'relative', height: '180px' }}>
            {row2Words.map((item, index) => (
              <FloatingWord
                key={item.word}
                word={item.word}
                top={item.top}
                left={item.left}
                delay={0.1 * index}
                isVisible={row2.isVisible}
                scrollY={scrollY}
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
              transform: row3.isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
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
                transition: 'opacity 0.8s ease-out 1s',
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
          <p
            style={{
              fontSize: '20px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.5)',
              margin: 0,
              opacity: lineComplete ? 1 : 0,
              transition: 'opacity 0.5s ease-out',
            }}
          >
            Most companies like yours only have the first.
          </p>
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
            font-size: 36px !important;
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
