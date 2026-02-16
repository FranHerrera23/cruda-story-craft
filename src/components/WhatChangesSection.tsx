'use client';

import { useEffect, useRef, useState } from "react";

const WhatChangesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="story-statement-section"
    >
      <div className="story-statement-content">
        <p className={`story-statement ${isVisible ? 'animate' : ''}`}>
          Your story finally works as hard as you do.
        </p>
      </div>

      {/* Styles */}
      <style jsx>{`
        .story-statement-section {
          background: #FFFFFF;
          padding: 120px 80px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .story-statement-content {
          max-width: 800px;
          text-align: left;
        }

        .story-statement {
          font-size: clamp(28px, 3.5vw, 44px);
          font-style: italic;
          font-weight: 500;
          color: #FF2E63;
          line-height: 1.3;
          margin: 0;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .story-statement.animate {
          opacity: 1;
          transform: translateY(0);
        }

        /* Mobile Responsive */
        @media (max-width: 900px) {
          .story-statement-section {
            padding: 100px 40px;
          }
        }

        @media (max-width: 768px) {
          .story-statement-section {
            padding: 80px 24px;
          }
        }
      `}</style>
    </section>
  );
};

export default WhatChangesSection;
