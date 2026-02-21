'use client';

import { useEffect, useRef, useState } from "react";

const useRowAnimation = (threshold = 0.15) => {
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

const NarrativeAlignmentSection = () => {
  const row1 = useRowAnimation();
  const row2 = useRowAnimation();
  const row3 = useRowAnimation();
  const closerRef = useRef<HTMLDivElement>(null);
  const [closerVisible, setCloserVisible] = useState(false);
  const [lineComplete, setLineComplete] = useState(false);
  const [underlineComplete, setUnderlineComplete] = useState(false);

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

  // Only 4 buzzwords per row as per V6 brief
  const row1Buzzwords = ['synergy', 'leverage', 'best-in-class', 'solutions'];
  const row2Buzzwords = ['Forbes', 'award-winning', 'Inc 5000', 'industry leader'];

  // Different duration and delay for each word for organic floating feel
  const floatTimings = [
    { duration: '7s', delay: '0s' },
    { duration: '9s', delay: '-2s' },
    { duration: '6.5s', delay: '-4s' },
    { duration: '8.5s', delay: '-1s' }
  ];

  return (
    <section className="solution-section">
      <div className="solution-container">
        {/* Row 1 - What you do */}
        <div ref={row1.ref} className="solution-row">
          <h2 className={`solution-title ${row1.isVisible ? 'animate' : ''}`}>
            What you do.
          </h2>
          <div className="floating-words">
            {row1Buzzwords.map((word, index) => (
              <span
                key={word}
                className={`floating-word ${row1.isVisible ? 'animate' : ''}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  top: ['5%', '30%', '55%', '80%'][index],
                  left: ['15%', '50%', '25%', '60%'][index],
                  '--float-duration': floatTimings[index].duration,
                  '--float-delay': floatTimings[index].delay
                } as React.CSSProperties}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - Why it matters */}
        <div ref={row2.ref} className="solution-row">
          <h2 className={`solution-title ${row2.isVisible ? 'animate' : ''}`}>
            Why it matters.
          </h2>
          <div className="floating-words">
            {row2Buzzwords.map((word, index) => (
              <span
                key={word}
                className={`floating-word ${row2.isVisible ? 'animate' : ''}`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  top: ['5%', '30%', '55%', '80%'][index],
                  left: ['15%', '50%', '25%', '60%'][index],
                  '--float-duration': floatTimings[index].duration,
                  '--float-delay': floatTimings[index].delay
                } as React.CSSProperties}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Row 3 - Why they should care */}
        <div ref={row3.ref} className="solution-row">
          <h2 className={`solution-title red ${row3.isVisible ? 'animate' : ''}`}>
            Why they should care.
          </h2>
          <div className="floating-words">
            {/* Just ellipsis - silence makes the point */}
            <span
              className={`floating-word ellipsis ${row3.isVisible ? 'animate' : ''}`}
              style={{ top: '45%', left: '40%' }}
            >
              ...
            </span>
          </div>
        </div>

        {/* Closer */}
        <div ref={closerRef} className="solution-closer">
          <div className={`solution-line ${closerVisible ? 'animate' : ''}`} />
          <div className="closer-text">
            <p className={`closer-intro ${lineComplete ? 'animate' : ''}`}>
              Most companies{' '}
              <span className="highlight-red">
                like yours
                <span className={`highlight-underline ${underlineComplete ? 'animate' : ''}`} />
              </span>
              {' '}only have the first.
            </p>
            <p className={`closer-rest ${underlineComplete ? 'animate' : ''}`}>
              The rest is where trust gets built — before you ever walk into the room.
            </p>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .solution-section {
          background: #FFFFFF;
          padding: 160px 80px;
        }

        .solution-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .solution-row {
          display: grid;
          grid-template-columns: 45% 55%;
          gap: 0;
          margin-bottom: 100px;
          align-items: center;
          min-height: 180px;
          border-bottom: 1px solid rgba(10, 10, 10, 0.06);
          padding-bottom: 100px;
        }

        .solution-title {
          font-size: clamp(40px, 4.5vw, 56px);
          font-weight: 600;
          color: #0A0A0A;
          letter-spacing: -0.02em;
          opacity: 0;
          transform: translateX(-30px);
          transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          margin: 0;
        }

        .solution-title.red {
          color: #FF2E63;
        }

        .solution-title.animate {
          opacity: 1;
          transform: translateX(0);
        }

        .floating-words {
          position: relative;
          height: 100%;
          min-height: 160px;
        }

        .floating-word {
          position: absolute;
          font-size: 14px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(10, 10, 10, 0.25);
          white-space: nowrap;
          opacity: 0;
          transform: translateY(15px);
          transition: opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }

        .floating-word.ellipsis {
          font-size: 24px;
          letter-spacing: 0.2em;
        }

        .floating-word.animate {
          opacity: 1;
          transform: translateY(0);
          animation: buzzword-float var(--float-duration, 8s) ease-in-out infinite;
          animation-delay: var(--float-delay, 0s);
        }

        @keyframes buzzword-float {
          0% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(6px, -8px);
          }
          50% {
            transform: translate(-4px, -14px);
          }
          75% {
            transform: translate(8px, -6px);
          }
          100% {
            transform: translate(0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .floating-word.animate {
            animation: none;
          }
        }

        .solution-closer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .solution-line {
          width: 0;
          height: 3px;
          background: #FF2E63;
          margin-bottom: 40px;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .solution-line.animate {
          width: 64px;
        }

        .closer-text {
          max-width: 600px;
        }

        .closer-intro {
          font-size: 20px;
          font-weight: 400;
          color: rgba(10, 10, 10, 0.5);
          margin: 0 0 16px 0;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .closer-intro.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .highlight-red {
          color: #FF2E63;
          font-weight: 500;
          position: relative;
        }

        .highlight-underline {
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: #FF2E63;
          transition: width 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .highlight-underline.animate {
          width: 100%;
        }

        .closer-rest {
          font-size: 20px;
          font-weight: 400;
          color: rgba(10, 10, 10, 0.5);
          margin: 0;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s;
        }

        .closer-rest.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .solution-section {
            padding: 100px 40px;
          }

          .solution-row {
            grid-template-columns: 1fr;
            gap: 32px;
            margin-bottom: 64px;
            padding-bottom: 64px;
          }

          .solution-title {
            font-size: clamp(32px, 6vw, 40px);
          }

          .floating-words {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .solution-section {
            padding: 80px 24px;
          }

          .solution-row {
            margin-bottom: 48px;
            padding-bottom: 48px;
          }

          .closer-intro {
            font-size: 18px;
          }

          .closer-final {
            font-size: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default NarrativeAlignmentSection;
