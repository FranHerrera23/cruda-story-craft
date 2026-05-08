'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DeckContent() {
  const [counter, setCounter] = useState('01 / 09');

  useEffect(() => {
    // Reveal animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    // Counter updates
    const slides = document.querySelectorAll('[data-counter]');
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const counterValue = entry.target.getAttribute('data-counter');
            if (counterValue) setCounter(counterValue);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe elements
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    slides.forEach((s) => counterObserver.observe(s));

    // Cleanup
    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --cruda-red: #ff2e63;
          --cruda-dark: #0a0a0a;
          --cruda-white: #faf7f2;
          --cruda-pearl: #faf7f2;
          --gray-text: #4a4a4a;
          --gray-soft: #6b6b6b;
          --gray-mute: #999999;
          --gray-light: #c8c8c8;
          --gray-line: rgba(10, 10, 10, 0.08);
          --gray-line-soft: rgba(10, 10, 10, 0.04);
          --font-display: var(--font-fraunces), Georgia, serif;
          --font-body: var(--font-inter), -apple-system, BlinkMacSystemFont, sans-serif;
          --font-mono: var(--font-jetbrains), monospace;
          --ease: cubic-bezier(0.16, 1, 0.3, 1);
        }

        .deck-wrapper * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        .deck-wrapper {
          scroll-behavior: smooth;
          font-family: var(--font-body);
          color: var(--cruda-dark);
          background: var(--cruda-white);
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          overflow-x: hidden;
          font-feature-settings: 'kern' 1, 'liga' 1;
        }

        .deck-wrapper ::selection {
          background: var(--cruda-red);
          color: var(--cruda-white);
        }

        /* NAV */
        .deck-wrapper .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          padding: 28px 56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 100%);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
        .deck-wrapper .nav-logo {
          font-family: var(--font-display);
          font-weight: 700;
          font-style: italic;
          font-size: 22px;
          letter-spacing: -0.025em;
          text-transform: lowercase;
        }
        .deck-wrapper .nav-counter {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.18em;
          color: var(--gray-mute);
          text-transform: uppercase;
        }

        /* SLIDE BASE */
        .deck-wrapper .slide {
          min-height: 100vh;
          padding: 140px 80px 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          background: var(--cruda-white);
          border-bottom: 1px solid var(--gray-line);
        }
        .deck-wrapper .slide-inner {
          max-width: 1240px;
          margin: 0 auto;
          width: 100%;
        }

        .deck-wrapper .slide-label {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--cruda-red);
          margin-bottom: 56px;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .deck-wrapper .slide-label::before {
          content: '';
          width: 32px;
          height: 1px;
          background: var(--cruda-red);
        }

        /* ANIMATIONS */
        .deck-wrapper .reveal {
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.7s var(--ease), transform 0.7s var(--ease);
        }
        .deck-wrapper .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .deck-wrapper .d-1 {
          transition-delay: 0.06s;
        }
        .deck-wrapper .d-2 {
          transition-delay: 0.16s;
        }
        .deck-wrapper .d-3 {
          transition-delay: 0.26s;
        }
        .deck-wrapper .d-4 {
          transition-delay: 0.36s;
        }
        .deck-wrapper .d-5 {
          transition-delay: 0.46s;
        }
        .deck-wrapper .d-6 {
          transition-delay: 0.56s;
        }

        /* TYPOGRAPHY */
        .deck-wrapper .h-display {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(56px, 9vw, 132px);
          line-height: 0.95;
          letter-spacing: -0.045em;
          color: var(--cruda-dark);
          max-width: 18ch;
        }
        .deck-wrapper .h-display .red {
          color: var(--cruda-red);
          font-style: italic;
          font-weight: 500;
        }

        .deck-wrapper .h-xl {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(48px, 7vw, 96px);
          line-height: 1;
          letter-spacing: -0.04em;
          max-width: 22ch;
        }
        .deck-wrapper .h-lg {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(40px, 5.6vw, 76px);
          line-height: 1.05;
          letter-spacing: -0.035em;
          max-width: 22ch;
        }
        .deck-wrapper .h-md {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(32px, 4.4vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          max-width: 26ch;
        }
        .deck-wrapper .h-italic {
          font-style: italic;
          font-weight: 400;
          color: var(--cruda-red);
        }

        .deck-wrapper .body-xl {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(20px, 2.1vw, 26px);
          line-height: 1.55;
          color: var(--cruda-dark);
          max-width: 56ch;
          letter-spacing: -0.01em;
        }
        .deck-wrapper .body-lg {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.65;
          color: var(--gray-text);
          max-width: 60ch;
          font-weight: 400;
        }
        .deck-wrapper .body {
          font-family: var(--font-body);
          font-size: 16px;
          line-height: 1.7;
          color: var(--gray-text);
          max-width: 62ch;
        }
        .deck-wrapper .body strong {
          color: var(--cruda-dark);
          font-weight: 600;
        }

        /* SLIDE 01 — HERO */
        .deck-wrapper .s-hero {
          padding-top: 180px;
        }
        .deck-wrapper .s-hero-footer {
          position: absolute;
          bottom: 56px;
          left: 80px;
          right: 80px;
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.22em;
          color: var(--gray-mute);
          text-transform: uppercase;
        }

        /* SLIDE 02 — PHILOSOPHY */
        .deck-wrapper .cruda-display {
          font-family: var(--font-display);
          font-weight: 400;
          font-style: italic;
          font-size: clamp(120px, 18vw, 280px);
          line-height: 0.9;
          letter-spacing: -0.05em;
          color: var(--gray-light);
          margin-bottom: 48px;
          user-select: none;
        }
        .deck-wrapper .cruda-meaning {
          display: grid;
          grid-template-columns: auto 1fr;
          gap: 32px;
          align-items: baseline;
          max-width: 760px;
          margin-bottom: 56px;
        }
        .deck-wrapper .cruda-meaning-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cruda-red);
          white-space: nowrap;
          padding-top: 4px;
        }
        .deck-wrapper .cruda-meaning-text {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.4vw, 28px);
          line-height: 1.45;
          color: var(--cruda-dark);
          font-weight: 400;
        }
        .deck-wrapper .cruda-meaning-text em {
          font-style: italic;
          color: var(--gray-mute);
        }

        .deck-wrapper .cruda-body-line {
          font-family: var(--font-body);
          font-size: clamp(18px, 1.9vw, 22px);
          line-height: 1.6;
          color: var(--cruda-dark);
          font-weight: 400;
          max-width: 60ch;
          margin-bottom: 40px;
          letter-spacing: -0.005em;
        }

        .deck-wrapper .cruda-quote {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(22px, 2.6vw, 32px);
          line-height: 1.4;
          color: var(--cruda-dark);
          max-width: 50ch;
          letter-spacing: -0.015em;
        }

        /* SLIDE 03 — ARCHITECTURE */
        .deck-wrapper .architecture-headline {
          margin-bottom: 80px;
        }
        .deck-wrapper .verticals-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 64px 80px;
        }
        .deck-wrapper .vertical-item {
          border-top: 1px solid var(--cruda-dark);
          padding-top: 32px;
        }
        .deck-wrapper .vertical-tag {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.26em;
          color: var(--cruda-red);
          margin-bottom: 24px;
        }
        .deck-wrapper .vertical-tagline {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(26px, 2.8vw, 36px);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 24px;
          color: var(--cruda-dark);
          max-width: 28ch;
        }
        .deck-wrapper .vertical-sectors {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gray-soft);
          line-height: 1.8;
        }

        /* SLIDE 04 — WHY CRUDA */
        .deck-wrapper .why-headline {
          margin-bottom: 56px;
        }
        .deck-wrapper .why-list {
          list-style: none;
          max-width: 60ch;
          margin-bottom: 48px;
        }
        .deck-wrapper .why-list li {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(17px, 1.8vw, 21px);
          line-height: 1.55;
          color: var(--cruda-dark);
          padding: 18px 0;
          border-bottom: 1px solid var(--gray-line);
          letter-spacing: -0.005em;
        }
        .deck-wrapper .why-list li:last-child {
          border-bottom: none;
        }
        .deck-wrapper .why-list li::before {
          content: '— ';
          color: var(--cruda-red);
          font-weight: 600;
        }
        .deck-wrapper .why-intro {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(17px, 1.8vw, 21px);
          line-height: 1.55;
          color: var(--gray-soft);
          margin-bottom: 24px;
          max-width: 56ch;
          letter-spacing: -0.005em;
        }
        .deck-wrapper .why-closing {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 500;
          font-size: clamp(22px, 2.4vw, 30px);
          line-height: 1.45;
          color: var(--cruda-dark);
          max-width: 48ch;
          border-left: 2px solid var(--cruda-red);
          padding-left: 24px;
          margin-top: 32px;
          letter-spacing: -0.01em;
        }

        /* SLIDE 05 — WHAT WE DO */
        .deck-wrapper .what-headline {
          margin-bottom: 64px;
        }
        .deck-wrapper .what-buckets {
          display: flex;
          flex-direction: column;
          gap: 56px;
          margin-bottom: 56px;
        }
        .deck-wrapper .what-bucket {
          border-top: 1px solid var(--cruda-dark);
          padding-top: 32px;
          max-width: 72ch;
        }
        .deck-wrapper .what-bucket-label {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.24em;
          color: var(--cruda-red);
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .deck-wrapper .what-bucket-title {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(26px, 2.8vw, 36px);
          line-height: 1.15;
          letter-spacing: -0.025em;
          margin-bottom: 20px;
          color: var(--cruda-dark);
        }
        .deck-wrapper .what-bucket-body {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 17px;
          line-height: 1.7;
          color: var(--gray-text);
          max-width: 64ch;
          letter-spacing: -0.005em;
        }
        .deck-wrapper .what-closing {
          border-top: 1px solid var(--gray-line);
          padding-top: 32px;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(17px, 1.8vw, 20px);
          line-height: 1.65;
          color: var(--cruda-dark);
          max-width: 64ch;
          letter-spacing: -0.005em;
        }

        /* SLIDES 06 & 07 — SELECTED WORK MOSAIC */
        .deck-wrapper .work-headline {
          margin-bottom: 64px;
        }
        .deck-wrapper .work-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 80px 64px;
        }
        .deck-wrapper .work-card {
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 24px;
          transition: opacity 0.4s var(--ease);
          text-decoration: none;
          color: inherit;
          position: relative;
        }
        .deck-wrapper .work-card.has-link {
          cursor: pointer;
        }
        .deck-wrapper .work-card.has-link:hover {
          opacity: 0.65;
        }
        .deck-wrapper .work-card-tag {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.22em;
          color: var(--cruda-red);
          text-transform: uppercase;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .deck-wrapper .work-card-status {
          color: var(--gray-mute);
          font-weight: 500;
          font-size: 10px;
        }
        .deck-wrapper .work-card-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(26px, 2.6vw, 32px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--cruda-dark);
        }
        .deck-wrapper .work-card-sub {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          font-size: 16px;
          color: var(--gray-soft);
          margin-top: 6px;
          line-height: 1.4;
        }
        .deck-wrapper .work-card-meta {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--gray-soft);
          line-height: 1.7;
          text-transform: uppercase;
        }
        .deck-wrapper .work-card-quote {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          font-size: 17px;
          line-height: 1.5;
          color: var(--cruda-dark);
          letter-spacing: -0.005em;
        }
        .deck-wrapper .work-card-quote-author {
          font-family: var(--font-mono);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--gray-mute);
          text-transform: uppercase;
          margin-top: -12px;
        }
        .deck-wrapper .work-card-scope {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--gray-text);
          line-height: 1.9;
          font-weight: 500;
          letter-spacing: -0.005em;
        }
        .deck-wrapper .work-card-scope div::before {
          content: '— ';
          color: var(--cruda-red);
          margin-right: 6px;
          font-weight: 600;
        }
        .deck-wrapper .work-card-stats {
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--cruda-dark);
          line-height: 1.5;
          font-weight: 500;
          padding-top: 8px;
          border-top: 1px solid var(--gray-line);
        }
        .deck-wrapper .work-card-stats div {
          display: flex;
          align-items: baseline;
          gap: 16px;
        }
        .deck-wrapper .work-card-stats .stat-num {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 24px;
          color: var(--cruda-red);
          letter-spacing: -0.025em;
          min-width: 90px;
          line-height: 1;
        }
        .deck-wrapper .work-card-stats .stat-label {
          color: var(--gray-soft);
          font-size: 12px;
          font-family: var(--font-body);
          font-weight: 400;
          letter-spacing: -0.005em;
        }
        .deck-wrapper .work-card-link {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.2em;
          color: var(--cruda-red);
          text-transform: uppercase;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--gray-line);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .deck-wrapper .work-card-link .arrow {
          transition: transform 0.3s var(--ease);
          font-family: var(--font-display);
          font-size: 16px;
        }
        .deck-wrapper .work-card.has-link:hover .arrow {
          transform: translateX(6px);
        }
        .deck-wrapper .work-card-no-link {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          color: var(--gray-mute);
          text-transform: uppercase;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--gray-line);
        }

        /* SLIDE — FRAN */
        .deck-wrapper .bio-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 80px;
          align-items: start;
        }
        .deck-wrapper .bio-left {
          border-top: 1px solid var(--cruda-dark);
          padding-top: 28px;
        }
        .deck-wrapper .bio-cat {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.22em;
          color: var(--cruda-red);
          margin-bottom: 24px;
        }
        .deck-wrapper .bio-name {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(56px, 7vw, 96px);
          line-height: 1;
          letter-spacing: -0.04em;
          color: var(--cruda-dark);
          margin-bottom: 16px;
        }
        .deck-wrapper .bio-role {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--cruda-red);
          margin-bottom: 32px;
        }
        .deck-wrapper .bio-body p {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 17px;
          line-height: 1.7;
          color: var(--gray-text);
          margin-bottom: 20px;
          max-width: 60ch;
          letter-spacing: -0.005em;
        }
        .deck-wrapper .bio-body p.highlight {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(20px, 2.1vw, 26px);
          color: var(--cruda-dark);
          line-height: 1.5;
          letter-spacing: -0.01em;
        }
        .deck-wrapper .bio-body p:last-child {
          margin-bottom: 0;
        }
        .deck-wrapper .bio-body strong {
          color: var(--cruda-dark);
          font-weight: 600;
        }
        .deck-wrapper .bio-logos {
          margin-top: 48px;
          padding-top: 28px;
          border-top: 1px solid var(--gray-line);
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--gray-soft);
          line-height: 1.9;
        }
        .deck-wrapper .bio-logo {
        }
        .deck-wrapper .bio-logo::after {
          content: ' · ';
          color: var(--gray-light);
          margin: 0 6px;
        }
        .deck-wrapper .bio-logo:last-child::after {
          content: '';
        }
        .deck-wrapper .bio-industries {
          margin-top: 28px;
        }
        .deck-wrapper .bio-industries-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gray-mute);
          margin-bottom: 12px;
        }
        .deck-wrapper .bio-industries-list {
          font-family: var(--font-display);
          font-weight: 400;
          font-size: clamp(15px, 1.4vw, 17px);
          color: var(--gray-soft);
          letter-spacing: 0.005em;
          line-height: 1.7;
        }
        .deck-wrapper .bio-industry::after {
          content: ' · ';
          color: var(--gray-light);
          margin: 0 4px;
        }
        .deck-wrapper .bio-industry:last-child::after {
          content: '';
        }

        /* SLIDE — THE CONVERSATION */
        .deck-wrapper .call-headline {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: clamp(48px, 7vw, 96px);
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 32px;
          max-width: 18ch;
        }
        .deck-wrapper .call-headline em {
          color: var(--cruda-red);
          font-style: italic;
          font-weight: 500;
        }
        .deck-wrapper .call-body {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: clamp(17px, 1.8vw, 21px);
          line-height: 1.65;
          color: var(--gray-text);
          max-width: 60ch;
          margin-bottom: 56px;
          letter-spacing: -0.005em;
        }
        .deck-wrapper .cta-block {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 80px;
        }
        .deck-wrapper .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          padding: 22px 44px;
          background: var(--cruda-dark);
          color: var(--cruda-white);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 17px;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: all 0.4s var(--ease);
          border: 2px solid var(--cruda-dark);
        }
        .deck-wrapper .cta-button:hover {
          background: var(--cruda-red);
          border-color: var(--cruda-red);
        }
        .deck-wrapper .cta-button .arrow {
          transition: transform 0.4s var(--ease);
          font-family: var(--font-display);
          font-size: 20px;
        }
        .deck-wrapper .cta-button:hover .arrow {
          transform: translateX(8px);
        }
        .deck-wrapper .cta-meta {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.2em;
          color: var(--gray-mute);
          text-transform: uppercase;
          margin-top: 8px;
        }
        .deck-wrapper .cta-url {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--gray-text);
          text-decoration: none;
          letter-spacing: 0.05em;
          margin-top: 4px;
        }
        .deck-wrapper .cta-url:hover {
          color: var(--cruda-red);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .deck-wrapper .nav {
            padding: 20px 24px;
          }
          .deck-wrapper .slide {
            padding: 100px 24px 60px;
          }
          .deck-wrapper .s-hero-footer {
            left: 24px;
            right: 24px;
            bottom: 32px;
          }
          .deck-wrapper .verticals-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .deck-wrapper .work-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .deck-wrapper .bio-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .deck-wrapper .cruda-meaning {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .deck-wrapper .h-display {
            font-size: clamp(44px, 12vw, 80px);
          }
        }
      `}</style>

      <div className="deck-wrapper">
        <nav className="nav">
          <div className="nav-logo">cruda</div>
          <div className="nav-counter">{counter}</div>
        </nav>

        {/* 01 — HERO */}
        <section className="slide s-hero" data-counter="01 / 09">
          <div className="slide-inner">
            <h1 className="h-display reveal d-1">Everything is a narrative.</h1>
            <h1 className="h-display reveal d-3" style={{ marginTop: '16px' }}>
              Companies, too.
            </h1>
            <p className="body-xl reveal d-5" style={{ marginTop: '64px', maxWidth: '56ch', color: 'var(--gray-text)' }}>
              We help founder-led companies build theirs intentionally —<br />
              and the systems that scale it.
            </p>
          </div>
          <div className="s-hero-footer">
            <span>CRUDA — May 2026</span>
            <span></span>
          </div>
        </section>

        {/* 02 — PHILOSOPHY */}
        <section className="slide" data-counter="02 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Philosophy</div>
            <div className="cruda-display reveal d-1">Cruda.</div>
            <div className="cruda-meaning reveal d-2">
              <div className="cruda-meaning-label">Spanish</div>
              <div className="cruda-meaning-text">
                <em>adj.</em> Raw. Unfiltered. The version before it became something else.
              </div>
            </div>
            <p className="cruda-body-line reveal d-3">
              The story your company carries before anyone tries to &ldquo;tell&rdquo; it for you.
            </p>
            <div className="cruda-quote reveal d-4">
              The best work doesn&rsquo;t come from adding. It comes from stripping away.
            </div>
          </div>
        </section>

        {/* 03 — ARCHITECTURE */}
        <section className="slide" data-counter="03 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Architecture</div>
            <div className="architecture-headline reveal d-1">
              <h2 className="h-lg">We work with founder-led companies across four worlds.</h2>
            </div>
            <div className="verticals-grid reveal d-3">
              <div className="vertical-item">
                <div className="vertical-tag">CRUDA BUILD</div>
                <div className="vertical-tagline">They build the spaces we live in.</div>
                <div className="vertical-sectors">
                  Architecture · Design · Real Estate · Construction · Building Materials
                </div>
              </div>
              <div className="vertical-item">
                <div className="vertical-tag">CRUDA DEMAND</div>
                <div className="vertical-tagline">They earn the choice, every day.</div>
                <div className="vertical-sectors">CPG · Fashion · Hospitality · Healthcare brands</div>
              </div>
              <div className="vertical-item">
                <div className="vertical-tag">CRUDA SPORTS</div>
                <div className="vertical-tagline">They earn the truth in public.</div>
                <div className="vertical-sectors">Tournaments · Athletes · Leagues · Sports brands</div>
              </div>
              <div className="vertical-item">
                <div className="vertical-tag">CRUDA CAPITAL</div>
                <div className="vertical-tagline">They move what trust built.</div>
                <div className="vertical-sectors">
                  Family Offices · Wealth Management · PE · Financial Advisors
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — WHY CRUDA */}
        <section className="slide" data-counter="04 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Why CRUDA</div>
            <div className="why-headline reveal d-1">
              <h2 className="h-lg">Your narrative will be written.</h2>
              <h2
                className="h-lg"
                style={{ color: 'var(--cruda-red)', fontStyle: 'italic', fontWeight: 500, marginTop: '8px' }}
              >
                The only question is by whom.
              </h2>
            </div>
            <p className="why-intro reveal d-2">By default, your narrative is written by:</p>
            <ul className="why-list reveal d-3">
              <li>The competitor with louder marketing.</li>
              <li>The press covering the last crisis.</li>
              <li>The client you lost (and never asked why).</li>
              <li>The algorithm that decides what people find first.</li>
            </ul>
            <div className="why-closing reveal d-4">Or you write it. On purpose. With us.</div>
          </div>
        </section>

        {/* 05 — WHAT WE DO */}
        <section className="slide" data-counter="05 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">What we do</div>
            <div className="what-headline reveal d-1">
              <h2 className="h-md">What we actually do.</h2>
            </div>
            <div className="what-buckets">
              <div className="what-bucket reveal d-2">
                <div className="what-bucket-label">01 — Narrative Foundation</div>
                <h3 className="what-bucket-title">Who you actually are, written down.</h3>
                <p className="what-bucket-body">
                  We sit with you and write down who you actually are — what your company believes, who it serves, why
                  it exists. Then we build the language that ties everything together. Without this, nothing else
                  compounds.
                </p>
              </div>
              <div className="what-bucket reveal d-3">
                <div className="what-bucket-label">02 — Content Engine</div>
                <h3 className="what-bucket-title">The work that travels.</h3>
                <p className="what-bucket-body">
                  We turn that foundation into the work that travels. LinkedIn for the conversations that matter.
                  Instagram for the texture of what you do. Pitch decks that don&rsquo;t need explaining. Talking
                  points your team uses when you&rsquo;re not in the room. Every piece earns its place.
                </p>
              </div>
              <div className="what-bucket reveal d-4">
                <div className="what-bucket-label">03 — Relationships</div>
                <h3 className="what-bucket-title">Doors that open before you knock.</h3>
                <p className="what-bucket-body">
                  The right rooms don&rsquo;t open because you posted more. They open because someone you respect
                  introduces you. We make those introductions happen, and we prepare you for the conversations that
                  follow.
                </p>
              </div>
            </div>
            <div className="what-closing reveal d-5">
              We work inside the company, not from a distance. Weekly calls, WhatsApp when something happens, you talk
              to us — not to a junior layer.
            </div>
          </div>
        </section>

        {/* 06 — SELECTED WORK (Part 1) */}
        <section className="slide" data-counter="06 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Selected work</div>
            <div className="work-headline reveal d-1">
              <h2 className="h-md">The companies that follow have nothing obvious in common.</h2>
              <p className="body-lg" style={{ marginTop: '24px', maxWidth: '56ch' }}>
                What they share is harder to see: each one had expertise the world hadn&rsquo;t fully heard yet.
              </p>
            </div>

            <div className="work-grid reveal d-3">
              {/* Card 01 — Karen */}
              <Link href="/clients/karen-mannheim" className="work-card has-link">
                <div className="work-card-tag">
                  <span>CRUDA BUILD · 01</span>
                </div>
                <div>
                  <div className="work-card-name">Karen Mannheim</div>
                  <div className="work-card-sub">Trazzo Global · Architectural Lighting</div>
                </div>
                <div className="work-card-meta">Peru · USA · Spain</div>
                <div className="work-card-quote">&ldquo;They already know me before the call.&rdquo;</div>
                <div className="work-card-quote-author">— Karen Mannheim</div>
                <div className="work-card-stats">
                  <div>
                    <span className="stat-num">+300%</span>
                    <span className="stat-label">visibility · 3 years</span>
                  </div>
                  <div>
                    <span className="stat-num">$150K</span>
                    <span className="stat-label">Pezet 3 · sourced from one video</span>
                  </div>
                </div>
                <div className="work-card-link">
                  <span>thecruda.com/clients/karen-mannheim</span>
                  <span className="arrow">→</span>
                </div>
              </Link>

              {/* Card 02 — Mike */}
              <Link href="/clients/mike-kaeding" className="work-card has-link">
                <div className="work-card-tag">
                  <span>CRUDA BUILD · 02</span>
                </div>
                <div>
                  <div className="work-card-name">Mike Kaeding</div>
                  <div className="work-card-sub">Norhart · Residential Real Estate</div>
                </div>
                <div className="work-card-meta">Minnesota · USA</div>
                <div className="work-card-quote">
                  &ldquo;I used to dread &lsquo;so what do you do?&rsquo; Now I look forward to it.&rdquo;
                </div>
                <div className="work-card-quote-author">— Mike Kaeding, CEO</div>
                <div className="work-card-stats">
                  <div>
                    <span className="stat-num">$230M+</span>
                    <span className="stat-label">in assets · 80 → 1,000+ units</span>
                  </div>
                  <div>
                    <span className="stat-num">+1M</span>
                    <span className="stat-label">LinkedIn impressions / year</span>
                  </div>
                </div>
                <div className="work-card-link">
                  <span>thecruda.com/clients/mike-kaeding</span>
                  <span className="arrow">→</span>
                </div>
              </Link>

              {/* Card 03 — JP */}
              <Link href="/clients/juan-pablo-romero" className="work-card has-link">
                <div className="work-card-tag">
                  <span>CRUDA BUILD · 03</span>
                </div>
                <div>
                  <div className="work-card-name">Juan Pablo Romero</div>
                  <div className="work-card-sub">JURA Plank · Connecting the Dots</div>
                </div>
                <div className="work-card-meta">Florida · US Market Entry</div>
                <div className="work-card-stats">
                  <div>
                    <span className="stat-num">3</span>
                    <span className="stat-label">Florida clients onboarded</span>
                  </div>
                  <div>
                    <span className="stat-num">2</span>
                    <span className="stat-label">brands built · 5-language site</span>
                  </div>
                </div>
                <div className="work-card-link">
                  <span>thecruda.com/clients/juan-pablo-romero</span>
                  <span className="arrow">→</span>
                </div>
              </Link>

              {/* Card 04 — SH! Energy + Marcos */}
              <div className="work-card">
                <div className="work-card-tag">
                  <span>CRUDA DEMAND · 04</span>
                  <span className="work-card-status">In progress</span>
                </div>
                <div>
                  <div className="work-card-name">SH! Energy</div>
                  <div className="work-card-sub">Marcos Guevara Lynch · Co-founder & CEO</div>
                </div>
                <div className="work-card-meta">Pre-seed CPG · Co-founded with Rodrigo De Paul · Argentina</div>
                <div className="work-card-quote">&ldquo;I want to tell my truth and build my tribe.&rdquo;</div>
                <div className="work-card-quote-author">— Marcos Guevara Lynch</div>
                <div className="work-card-scope">
                  <div>Founder narrative system</div>
                  <div>Investor deck</div>
                  <div>Senior marketing hires</div>
                </div>
                <div className="work-card-stats">
                  <div>
                    <span className="stat-num">$2M</span>
                    <span className="stat-label">closed of $4M raise</span>
                  </div>
                  <div>
                    <span className="stat-num">2</span>
                    <span className="stat-label">senior hires (Marketing + Martech)</span>
                  </div>
                </div>
                <div className="work-card-no-link">Case in build</div>
              </div>
            </div>
          </div>
        </section>

        {/* 07 — SELECTED WORK (Part 2) */}
        <section className="slide" data-counter="07 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Selected work · continued</div>

            <div className="work-grid reveal d-1">
              {/* Card 05 — Nitin */}
              <div className="work-card">
                <div className="work-card-tag">
                  <span>CRUDA DEMAND · 05</span>
                </div>
                <div>
                  <div className="work-card-name">Nitin Passi</div>
                  <div className="work-card-sub">SUMWON Studios · Fashion</div>
                </div>
                <div className="work-card-meta">Dubai · Manchester</div>
                <div className="work-card-scope">
                  <div>Comeback story from Missguided UK</div>
                  <div>Founder narrative strategy</div>
                  <div>On-demand business model education</div>
                </div>
                <div className="work-card-stats">
                  <div>
                    <span className="stat-num">$300M</span>
                    <span className="stat-label">SUMWON annual revenue</span>
                  </div>
                  <div>
                    <span className="stat-num">+1K</span>
                    <span className="stat-label">CVs from one LinkedIn post</span>
                  </div>
                </div>
                <div className="work-card-no-link">Confidential engagement</div>
              </div>

              {/* Card 06 — Girish */}
              <Link href="/clients/girish-sehgal" className="work-card has-link">
                <div className="work-card-tag">
                  <span>CRUDA DEMAND · 06</span>
                </div>
                <div>
                  <div className="work-card-name">Girish Sehgal</div>
                  <div className="work-card-sub">SSMC · Patient Experience</div>
                </div>
                <div className="work-card-meta">Abu Dhabi · Four Seasons US · Taj · Cleveland Clinic</div>
                <div className="work-card-quote">
                  &ldquo;Hospitality is not an industry. It&rsquo;s a mindset.&rdquo;
                </div>
                <div className="work-card-quote-author">— Girish Sehgal</div>
                <div className="work-card-scope">
                  <div>LinkedIn strategy</div>
                  <div>Founder voice · Twice a week</div>
                </div>
                <div className="work-card-stats">
                  <div>
                    <span className="stat-num">7,000+</span>
                    <span className="stat-label">senior leaders reached organically</span>
                  </div>
                  <div>
                    <span className="stat-num">25+</span>
                    <span className="stat-label">years · 14 cities · 6 countries</span>
                  </div>
                </div>
                <div className="work-card-link">
                  <span>thecruda.com/clients/girish-sehgal</span>
                  <span className="arrow">→</span>
                </div>
              </Link>

              {/* Card 07 — Samurai */}
              <div className="work-card">
                <div className="work-card-tag">
                  <span>CRUDA SPORTS · 07</span>
                  <span className="work-card-status">In progress · Marketing partner & investor</span>
                </div>
                <div>
                  <div className="work-card-name">Samurai Fight House</div>
                  <div className="work-card-sub">MMA Tournament · Athletes · LATAM</div>
                </div>
                <div className="work-card-meta">Argentina · Brazil · LATAM</div>
                <div className="work-card-quote">
                  &ldquo;#1 MMA house in LATAM. Not for the money. To change lives.&rdquo;
                </div>
                <div className="work-card-quote-author">— Martin Pakciarz, President</div>
                <div className="work-card-scope">
                  <div>Marketing strategy</div>
                  <div>Digital infrastructure</div>
                  <div>Personal brand · CEO + athletes</div>
                  <div>Brand · Sponsorship · Transmission deals</div>
                </div>
                <div className="work-card-stats">
                  <div>
                    <span className="stat-num">6/10</span>
                    <span className="stat-label">Argentinians in UFC fight from SFH</span>
                  </div>
                  <div>
                    <span className="stat-num">Top 10</span>
                    <span className="stat-label">Chino Vallejos · UFC featherweight</span>
                  </div>
                </div>
                <div className="work-card-no-link">Case in build · CRUDA Sports</div>
              </div>

              {/* Card 08 — Alex */}
              <div className="work-card">
                <div className="work-card-tag">
                  <span>CRUDA CAPITAL · 08</span>
                  <span className="work-card-status">Advisory engagement</span>
                </div>
                <div>
                  <div className="work-card-name">Alex Dmitriev</div>
                  <div className="work-card-sub">Cross-border M&A</div>
                </div>
                <div className="work-card-meta">McKinsey · BCG · Kearney</div>
                <div className="work-card-scope">
                  <div>Personal narrative strategy</div>
                  <div>Career pivot</div>
                </div>
                <div className="work-card-no-link">Advisory · Dubai</div>
              </div>
            </div>
          </div>
        </section>

        {/* 08 — FRAN */}
        <section className="slide" data-counter="08 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Who&rsquo;s writing this</div>
            <div className="bio-grid">
              <div className="bio-left reveal d-1">
                <div className="bio-cat">01</div>
                <div className="bio-name">Fran</div>
                <div className="bio-role">Founder</div>
              </div>
              <div className="bio-right reveal d-2">
                <div className="bio-body">
                  <p>
                    Argentine. Lived in Dubai &amp; Russia. Worked for a decade across three continents with +12
                    nationalities — TikTok, Nestlé, the United Nations, DeliveryHero.
                  </p>
                  <p className="highlight">
                    Every immigrant knows the same gap: you know exactly who you are, but the words don&rsquo;t travel.
                  </p>
                  <p>That&rsquo;s not theory. That&rsquo;s Tuesday morning.</p>
                  <p>Now I sit with founders who have the same problem — and we find the words together.</p>
                </div>
                <div className="bio-logos">
                  <span className="bio-logo">ByteDance</span>
                  <span className="bio-logo">Nestlé</span>
                  <span className="bio-logo">United Nations</span>
                  <span className="bio-logo">DeliveryHero</span>
                  <span className="bio-logo">Mondelez</span>
                  <span className="bio-logo">AB InBev</span>
                  <span className="bio-logo">Mary Kay</span>
                </div>
                <div className="bio-industries">
                  <div className="bio-industries-label">Industries</div>
                  <div className="bio-industries-list">
                    <span className="bio-industry">Real Estate</span>
                    <span className="bio-industry">Finance</span>
                    <span className="bio-industry">CPG</span>
                    <span className="bio-industry">Web3</span>
                    <span className="bio-industry">A&amp;D</span>
                    <span className="bio-industry">Sports</span>
                    <span className="bio-industry">Drinks &amp; Spirits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09 — THE CONVERSATION */}
        <section className="slide" data-counter="09 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">The conversation</div>
            <h2 className="call-headline reveal d-1">
              This isn&rsquo;t a pitch.
              <br />
              <em>It&rsquo;s the start of a conversation.</em>
            </h2>
            <p className="call-body reveal d-2">
              If something here resonated, the next step is simple. We talk. About your company, your reach, the gap
              between the two — and whether there&rsquo;s something here worth building together.
            </p>
            <div className="cta-block reveal d-3">
              <Link href="/contact" className="cta-button">
                Start a Conversation <span className="arrow">→</span>
              </Link>
              <span className="cta-meta">45 min · No pitch · No commitment</span>
              <a href="https://thecruda.com" target="_blank" rel="noopener noreferrer" className="cta-url">
                thecruda.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
