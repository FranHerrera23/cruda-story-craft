'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className="zeitgeist-section"
    >
      <div className="zeitgeist-content">
        {/* Headline */}
        <h2 className={`zeitgeist-headline ${isVisible ? 'animate' : ''}`}>
          The Bible. The Godfather. Marcus Aurelius.
        </h2>

        {/* Body */}
        <div className={`zeitgeist-body ${isVisible ? 'animate' : ''}`}>
          <p>
            Humans don't organize around facts.<br />
            We organize around stories.
          </p>
        </div>

        {/* Closer */}
        <div className={`zeitgeist-closer ${isVisible ? 'animate' : ''}`}>
          Your company is no different.
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .zeitgeist-section {
          background: #FFFFFF;
          padding: 180px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-height: 70vh;
          text-align: center;
        }

        .zeitgeist-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .zeitgeist-headline {
          font-size: clamp(36px, 4vw, 56px);
          font-weight: 600;
          color: #0A0A0A;
          letter-spacing: -0.02em;
          margin-bottom: 48px;
          line-height: 1.1;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .zeitgeist-headline.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .zeitgeist-body {
          font-size: 24px;
          font-weight: 400;
          color: rgba(10, 10, 10, 0.55);
          line-height: 1.6;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 300ms;
        }

        .zeitgeist-body.animate {
          opacity: 1;
          transform: translateY(0);
        }

        .zeitgeist-body p {
          margin: 0;
        }

        .zeitgeist-closer {
          font-size: 24px;
          font-weight: 500;
          color: #0A0A0A;
          line-height: 1.6;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 600ms;
        }

        .zeitgeist-closer.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .zeitgeist-section {
            padding: 120px 40px;
            min-height: 60vh;
          }

          .zeitgeist-headline {
            margin-bottom: 36px;
          }

          .zeitgeist-body {
            margin-bottom: 36px;
          }
        }

        @media (max-width: 768px) {
          .zeitgeist-section {
            padding: 100px 24px;
            min-height: auto;
          }

          .zeitgeist-headline {
            margin-bottom: 32px;
          }

          .zeitgeist-body {
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default PhilosophySection;
