'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookCallContent() {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleBookCall = () => {
    setIsRedirecting(true);
    window.open('https://calendly.com/cruda-intro/narrative-sparring-live-1', '_blank');
    setTimeout(() => setIsRedirecting(false), 2000);
  };

  const expectationItems = [
    {
      title: 'We listen',
      description: 'Tell us about your company, your vision, and the gap between how you see it and how others do.'
    },
    {
      title: 'We diagnose',
      description: 'We\'ll identify where your narrative is working and where it\'s not—with surgical precision.'
    },
    {
      title: 'We map next steps',
      description: 'If there\'s a fit, we\'ll show you exactly how we\'d help. If not, we\'ll tell you that too.'
    }
  ];

  return (
    <>
      <section className="book-call-section">
        <div className="book-call-content">
          <div className="book-call-header">
            <h1 className="book-call-title">Let&apos;s talk about your story</h1>
            <p className="book-call-subtitle">45 minutes. No pitch. No pressure.</p>
          </div>

          <div className="expectations-section">
            <h2 className="expectations-title">What to expect</h2>
            <div className="expectations-list">
              {expectationItems.map((item, index) => (
                <div key={index} className="expectation-item">
                  <h3 className="expectation-title">{item.title}</h3>
                  <p className="expectation-description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="cta-section">
            <button
              onClick={handleBookCall}
              disabled={isRedirecting}
              className="book-call-button"
            >
              {isRedirecting ? 'Opening calendar...' : 'Pick your time'}
              {!isRedirecting && <span className="arrow">→</span>}
            </button>
            <p className="calendly-note">
              You&apos;ll be redirected to Calendly to select a time that works for you.
            </p>
          </div>

          <div className="footer-note">
            <p>
              Questions before booking?{' '}
              <Link href="/contact" className="contact-link">
                Send us a message
              </Link>{' '}
              instead.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .book-call-section {
          background-color: #FFFFFF;
          min-height: 100vh;
          padding: 160px 80px;
        }

        .book-call-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .book-call-header {
          margin-bottom: 64px;
        }

        .book-call-title {
          font-size: clamp(44px, 5vw, 64px);
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .book-call-subtitle {
          font-size: clamp(18px, 2vw, 22px);
          font-weight: 400;
          line-height: 1.6;
          color: rgba(10, 10, 10, 0.6);
        }

        .expectations-section {
          margin-bottom: 56px;
        }

        .expectations-title {
          font-size: 20px;
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: 24px;
          letter-spacing: -0.01em;
        }

        .expectations-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .expectation-item {
          padding-left: 24px;
          border-left: 2px solid rgba(10, 10, 10, 0.1);
        }

        .expectation-title {
          font-size: 16px;
          font-weight: 600;
          color: #0A0A0A;
          margin-bottom: 8px;
        }

        .expectation-description {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(10, 10, 10, 0.6);
        }

        .cta-section {
          margin-bottom: 80px;
        }

        .book-call-button {
          padding: 20px 40px;
          font-size: 16px;
          font-weight: 500;
          background-color: #0A0A0A;
          color: #FFFFFF;
          border: none;
          border-radius: 0;
          cursor: pointer;
          transition: background-color 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 12px;
        }

        .book-call-button:hover:not(:disabled) {
          background-color: #E8623A;
        }

        .book-call-button:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .book-call-button .arrow {
          font-size: 18px;
        }

        .calendly-note {
          font-size: 14px;
          font-style: italic;
          color: rgba(10, 10, 10, 0.4);
          margin-top: 20px;
        }

        .footer-note {
          padding-top: 40px;
          border-top: 1px solid rgba(10, 10, 10, 0.1);
        }

        .footer-note p {
          font-size: 15px;
          line-height: 1.7;
          color: rgba(10, 10, 10, 0.5);
        }

        .contact-link {
          color: #E8623A;
          text-decoration: underline;
          transition: opacity 0.2s ease;
        }

        .contact-link:hover {
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .book-call-section {
            padding: 120px 24px;
          }
        }
      `}</style>
    </>
  );
}
