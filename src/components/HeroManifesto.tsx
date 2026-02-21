'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const HeroManifesto = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        {/* Headline - Staggered Line Reveal */}
        <h1 className="hero-headline">
          <span
            className={`hero-line ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0ms' }}
          >
            You've built something
          </span>
          <span
            className={`hero-line ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '150ms' }}
          >
            extraordinary.
          </span>
          <span
            className={`hero-line hero-line-red ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '300ms' }}
          >
            Explaining it shouldn't
          </span>
          <span
            className={`hero-line hero-line-red ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '450ms' }}
          >
            be this hard.
          </span>
        </h1>

        {/* Descriptor */}
        <p className={`hero-descriptor ${isVisible ? 'visible' : ''}`}>
          We help leaders in construction, architecture, and design sound like who they actually are.
        </p>

        {/* CTA Button */}
        <Link href="/contact" className={`btn-primary ${isVisible ? 'visible' : ''}`}>
          <span>Start a Conversation</span>
          <span className="arrow">→</span>
        </Link>
      </div>

      {/* Styles */}
      <style jsx>{`
        .hero-section {
          background: #FFFFFF;
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 180px 80px 120px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-content {
          max-width: 900px;
          text-align: left;
        }

        .hero-headline {
          font-size: clamp(48px, 6vw, 80px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #0A0A0A;
          margin-bottom: 40px;
          text-align: left;
          white-space: pre-line;
        }

        .hero-line {
          display: block;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .hero-line.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-line-red {
          color: #FF2E63;
        }

        .hero-descriptor {
          font-size: 18px;
          font-style: italic;
          color: rgba(10, 10, 10, 0.45);
          max-width: 420px;
          margin-top: 40px;
          margin-bottom: 48px;
          line-height: 1.5;
          text-align: left;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 600ms;
        }

        .hero-descriptor.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #0A0A0A;
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 500;
          padding: 18px 28px;
          border: none;
          border-radius: 0;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          letter-spacing: 0.01em;
          opacity: 0;
          transform: translateY(20px);
          transition: color 0.3s ease,
                      opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transition-delay: 800ms;
        }

        .btn-primary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 100%;
          background: #FF2E63;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          z-index: 0;
        }

        .btn-primary:hover::before {
          width: 100%;
        }

        .btn-primary > :global(*) {
          position: relative;
          z-index: 1;
        }

        .btn-primary .arrow {
          display: inline-block;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .btn-primary:hover .arrow {
          transform: translateX(4px);
        }

        .btn-primary:active {
          transform: scale(0.98);
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .hero-section {
            padding: 140px 40px 80px;
            min-height: 70vh;
          }

          .hero-headline {
            font-size: clamp(36px, 8vw, 56px);
            margin-bottom: 32px;
          }

          .hero-descriptor {
            font-size: 16px;
            margin-top: 32px;
            margin-bottom: 36px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 140px 24px 80px;
          }

          .hero-headline {
            margin-bottom: 28px;
          }

          .hero-descriptor {
            margin-top: 28px;
            margin-bottom: 32px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroManifesto;
