import { useEffect, useRef, useState, useMemo } from "react";

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

interface WordConfig {
  word: string;
  top: string;
  left: string;
  fromRight: boolean;
  // Pro animation config
  entranceDuration: number;
  entranceEasing: string;
  floatAmplitude: number;
  floatSpeed: number;
  floatPhase: number;
  blurStart: number;
  scaleStart: number;
  // Breathing config
  breatheSpeed: number;
  breatheAmplitude: number;
}

const FloatingWord = ({ 
  config,
  delay, 
  isVisible,
  scrollOffset,
  time,
}: { 
  config: WordConfig;
  delay: number; 
  isVisible: boolean;
  scrollOffset: number;
  time: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);
  
  // Track when entrance animation completes
  useEffect(() => {
    if (isVisible) {
      const timeout = setTimeout(() => {
        setHasEntered(true);
      }, (delay + config.entranceDuration) * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, delay, config.entranceDuration]);

  const initialX = config.fromRight ? 60 : -60;
  
  // Organic floating motion after entrance
  const floatY = hasEntered 
    ? Math.sin((time * config.floatSpeed) + config.floatPhase) * config.floatAmplitude
    : 0;
  const floatX = hasEntered 
    ? Math.cos((time * config.floatSpeed * 0.7) + config.floatPhase) * (config.floatAmplitude * 0.5)
    : 0;

  // Subtle opacity breathing
  const breatheOpacity = hasEntered
    ? 0.28 + Math.sin((time * config.breatheSpeed) + config.floatPhase) * config.breatheAmplitude
    : 0.28;

  // Entrance values
  const baseOpacity = isHovered ? 0.5 : breatheOpacity;
  const opacity = isVisible ? baseOpacity : 0;
  const blur = isVisible ? 0 : config.blurStart;
  const scale = isVisible ? 1 : config.scaleStart;
  const translateX = isVisible ? floatX : initialX;
  const translateY = scrollOffset + (isVisible ? floatY : 25);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'absolute',
        top: config.top,
        left: config.left,
        fontSize: '14px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: `rgba(10, 10, 10, ${opacity})`,
        transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        filter: `blur(${blur}px)`,
        transition: hasEntered 
          ? 'color 0.3s ease-out' 
          : `
            color ${config.entranceDuration}s ${config.entranceEasing} ${delay}s,
            transform ${config.entranceDuration}s ${config.entranceEasing} ${delay}s,
            filter ${config.entranceDuration * 0.8}s ${config.entranceEasing} ${delay}s
          `,
        whiteSpace: 'nowrap',
        cursor: 'default',
        willChange: 'transform, opacity, filter',
      }}
    >
      {config.word}
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
  const [time, setTime] = useState(0);

  // Continuous animation loop for floating effect
  useEffect(() => {
    let animationId: number;
    const animate = () => {
      setTime(Date.now() / 1000);
      animationId = requestAnimationFrame(animate);
    };
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const relativeScroll = Math.max(-25, Math.min(25, -rect.top * 0.04));
        setScrollOffset(relativeScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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

  // Pro-level word configurations with unique animation properties
  const row1Words: WordConfig[] = useMemo(() => [
    { 
      word: 'synergy', 
      top: '5%', 
      left: '5%', 
      fromRight: false,
      entranceDuration: 0.9,
      entranceEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      floatAmplitude: 3,
      floatSpeed: 0.8,
      floatPhase: 0,
      blurStart: 8,
      scaleStart: 0.85,
      breatheSpeed: 0.4,
      breatheAmplitude: 0.06,
    },
    { 
      word: 'leverage', 
      top: '28%', 
      left: '48%', 
      fromRight: true,
      entranceDuration: 1.1,
      entranceEasing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      floatAmplitude: 4,
      floatSpeed: 0.6,
      floatPhase: Math.PI / 3,
      blurStart: 6,
      scaleStart: 0.9,
      breatheSpeed: 0.35,
      breatheAmplitude: 0.05,
    },
    { 
      word: 'best-in-class', 
      top: '52%', 
      left: '12%', 
      fromRight: false,
      entranceDuration: 1.0,
      entranceEasing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      floatAmplitude: 2.5,
      floatSpeed: 0.9,
      floatPhase: Math.PI / 2,
      blurStart: 10,
      scaleStart: 0.88,
      breatheSpeed: 0.45,
      breatheAmplitude: 0.07,
    },
    { 
      word: 'solutions', 
      top: '78%', 
      left: '52%', 
      fromRight: true,
      entranceDuration: 1.2,
      entranceEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      floatAmplitude: 3.5,
      floatSpeed: 0.7,
      floatPhase: Math.PI,
      blurStart: 5,
      scaleStart: 0.92,
      breatheSpeed: 0.3,
      breatheAmplitude: 0.05,
    },
  ], []);

  const row2Words: WordConfig[] = useMemo(() => [
    { 
      word: 'Forbes', 
      top: '8%', 
      left: '52%', 
      fromRight: true,
      entranceDuration: 1.0,
      entranceEasing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      floatAmplitude: 3,
      floatSpeed: 0.75,
      floatPhase: Math.PI / 4,
      blurStart: 7,
      scaleStart: 0.87,
      breatheSpeed: 0.38,
      breatheAmplitude: 0.06,
    },
    { 
      word: 'award-winning', 
      top: '32%', 
      left: '8%', 
      fromRight: false,
      entranceDuration: 1.15,
      entranceEasing: 'cubic-bezier(0.16, 1, 0.3, 1)',
      floatAmplitude: 4,
      floatSpeed: 0.65,
      floatPhase: Math.PI * 0.75,
      blurStart: 9,
      scaleStart: 0.9,
      breatheSpeed: 0.42,
      breatheAmplitude: 0.055,
    },
    { 
      word: 'Inc 5000', 
      top: '56%', 
      left: '55%', 
      fromRight: true,
      entranceDuration: 0.95,
      entranceEasing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      floatAmplitude: 2.8,
      floatSpeed: 0.85,
      floatPhase: Math.PI * 1.25,
      blurStart: 6,
      scaleStart: 0.88,
      breatheSpeed: 0.33,
      breatheAmplitude: 0.065,
    },
    { 
      word: 'industry leader', 
      top: '80%', 
      left: '5%', 
      fromRight: false,
      entranceDuration: 1.25,
      entranceEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      floatAmplitude: 3.2,
      floatSpeed: 0.55,
      floatPhase: Math.PI * 1.5,
      blurStart: 8,
      scaleStart: 0.85,
      breatheSpeed: 0.28,
      breatheAmplitude: 0.05,
    },
  ], []);

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
            {row1Words.map((config, index) => (
              <FloatingWord
                key={config.word}
                config={config}
                delay={0.2 + 0.18 * index}
                isVisible={row1.isVisible}
                scrollOffset={scrollOffset}
                time={time}
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
            {row2Words.map((config, index) => (
              <FloatingWord
                key={config.word}
                config={config}
                delay={0.2 + 0.18 * index}
                isVisible={row2.isVisible}
                scrollOffset={scrollOffset}
                time={time}
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
                transform: row3.isVisible ? 'scale(1)' : 'scale(0.8)',
                transition: 'opacity 1s ease-out 0.6s, transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s',
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
              transition: 'width 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              marginBottom: '40px',
            }}
          />
          <div
            style={{
              opacity: lineComplete ? 1 : 0,
              transform: lineComplete ? 'translateY(0)' : 'translateY(10px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
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
                    transition: 'width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
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
                opacity: underlineComplete ? 1 : 0,
                transform: underlineComplete ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s',
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
