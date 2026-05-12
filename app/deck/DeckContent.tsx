'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function DeckContent() {
  const [counter, setCounter] = useState('01 / 09');

  useEffect(() => {
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

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    slides.forEach((s) => counterObserver.observe(s));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          /* Brand */
          --cruda-red: #FF2E63;
          --cruda-dark: #0A0A0A;
          --cruda-white: #FFFFFF;
          --cruda-cream: #F5F1E8;

          /* Greyscale */
          --gray-text: #4A4A4A;
          --gray-mute: #8A8A8A;
          --gray-line: #E5E5E5;
          --gray-faint: #F5F5F5;

          /* Fonts (Söhne preferred, fallback to Neue Haas / Inter) */
          --font-display: var(--font-fraunces), 'Söhne', 'Neue Haas Grotesk Display Pro', 'Inter', sans-serif;
          --font-body: var(--font-inter), 'Söhne', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-mono: var(--font-jetbrains), 'Söhne Mono', 'JetBrains Mono', 'IBM Plex Mono', monospace;
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

        /* Pentagram-level: kill shadows, radius, gradients globally */
        .deck-wrapper *,
        .deck-wrapper *::before,
        .deck-wrapper *::after {
          box-shadow: none !important;
          text-shadow: none !important;
          border-radius: 0 !important;
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
          letter-spacing: 0.14em;
          color: var(--gray-mute);
          text-transform: uppercase;
          font-variant-numeric: tabular-nums;
        }

        /* SLIDE BASE — section padding 200/160 vertical, 80 horizontal */
        .deck-wrapper .slide {
          min-height: 100vh;
          padding: 200px 80px 160px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          background: var(--cruda-white);
          border-bottom: 1px solid var(--gray-line);
        }
        .deck-wrapper .slide-inner {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
        }

        /* Slide labels — em-dash red on every slide */
        .deck-wrapper .slide-label {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin-bottom: 96px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .deck-wrapper .slide-label::before {
          content: '—';
          color: var(--cruda-red);
          font-weight: 400;
          font-size: 14px;
          line-height: 1;
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
        .deck-wrapper .d-1 { transition-delay: 0.06s; }
        .deck-wrapper .d-2 { transition-delay: 0.16s; }
        .deck-wrapper .d-3 { transition-delay: 0.26s; }
        .deck-wrapper .d-4 { transition-delay: 0.36s; }
        .deck-wrapper .d-5 { transition-delay: 0.46s; }
        .deck-wrapper .d-6 { transition-delay: 0.56s; }
        .deck-wrapper .d-beat-3 { transition-delay: 0.66s; }
        .deck-wrapper .d-beat-4 { transition-delay: 0.78s; }

        /* SLIDE 01 — HERO (max 96px, max-width 1100px) */
        .deck-wrapper .s-hero {
          padding: 240px 80px 120px;
          max-width: 1440px;
          margin: 0 auto;
        }
        .deck-wrapper .hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(56px, 6.5vw, 96px);
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.03em;
          color: var(--cruda-dark);
          max-width: 1100px;
          margin: 0;
        }
        .deck-wrapper .hero-lead {
          font-family: var(--font-body);
          font-size: clamp(18px, 1.4vw, 22px);
          font-weight: 400;
          line-height: 1.5;
          letter-spacing: -0.005em;
          color: var(--gray-text);
          max-width: 620px;
          margin-top: 64px;
        }
        .deck-wrapper .hero-stamp {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gray-mute);
          margin-top: 200px;
        }

        /* SLIDE 02 — PHILOSOPHY (v6.2: unified single-column composition) */
        .deck-wrapper .philosophy-word {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(96px, 12vw, 160px);
          font-weight: 400;
          line-height: 1.0;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          margin: 0 0 12px 0;
        }
        .deck-wrapper .philosophy-definition {
          font-family: var(--font-body);
          font-size: clamp(18px, 1.4vw, 22px);
          line-height: 1.4;
          font-weight: 400;
          color: var(--gray-text);
          margin: 0 0 80px 0;
          max-width: 1000px;
        }
        .deck-wrapper .philosophy-definition em {
          font-style: italic;
        }
        .deck-wrapper .philosophy-editorial {
          font-family: var(--font-body);
          font-style: italic;
          font-size: clamp(24px, 2vw, 32px);
          line-height: 1.4;
          font-weight: 400;
          color: var(--cruda-dark);
          max-width: 1000px;
          margin: 0 0 64px 0;
        }
        .deck-wrapper .philosophy-manifesto {
          font-family: var(--font-body);
          font-size: clamp(24px, 2vw, 32px);
          line-height: 1.4;
          font-weight: 500;
          color: var(--cruda-dark);
          max-width: 1000px;
          margin: 0;
        }

        /* SLIDE 03 — FOUR WORLDS (4 same size, hierarchy by whitespace + 1 divider) */
        .deck-wrapper .worlds-h1 {
          font-family: var(--font-display);
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          margin-bottom: 120px;
          max-width: 1100px;
        }
        .deck-wrapper .world-row {
          display: grid;
          grid-template-columns: 80px 240px 1fr;
          gap: 48px;
          padding: 56px 0;
          border-top: 1px solid var(--gray-line);
          align-items: start;
        }
        .deck-wrapper .world-row:last-child {
          border-bottom: 1px solid var(--gray-line);
        }
        /* Major divider — the only typographic-hierarchy signal between groups 2+2 */
        .deck-wrapper .world-row.divider-major {
          border-top: 1px solid var(--cruda-dark);
        }
        .deck-wrapper .world-row .number {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--gray-mute);
          padding-top: 4px;
          font-variant-numeric: tabular-nums;
        }
        .deck-wrapper .world-row .vertical-name {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cruda-dark);
          padding-top: 4px;
        }
        .deck-wrapper .world-row .description h3 {
          font-family: var(--font-display);
          font-size: clamp(28px, 2.4vw, 40px);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cruda-dark);
          margin-bottom: 16px;
          max-width: 24ch;
        }
        .deck-wrapper .world-row .description .industries {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mute);
          line-height: 1.6;
        }

        /* SLIDE 04 — WHY CRUDA (parent override + ancho controlado) */
        .deck-wrapper .s-why {
          padding: 200px 80px 160px;
          max-width: 1440px;
          margin: 0 auto;
        }
        .deck-wrapper .s-why > *,
        .deck-wrapper .s-why * {
          writing-mode: horizontal-tb;
          word-break: normal;
          overflow-wrap: break-word;
          white-space: normal;
        }
        .deck-wrapper .s-why > * {
          max-width: none;
        }
        .deck-wrapper .why-h1 {
          font-family: var(--font-display);
          font-size: clamp(56px, 6vw, 96px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          margin-bottom: 16px;
          max-width: 1200px;
        }
        .deck-wrapper .why-h1-italic {
          font-family: var(--font-display);
          font-size: clamp(56px, 6vw, 96px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-red);
          margin-bottom: 96px;
          max-width: 1200px;
        }
        .deck-wrapper .why-list-intro {
          font-family: var(--font-body);
          font-size: clamp(17px, 1.3vw, 20px);
          color: var(--gray-text);
          margin-bottom: 32px;
          max-width: 800px;
        }
        .deck-wrapper .why-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          list-style: none;
          padding: 0;
          margin: 0 0 96px 0;
          max-width: 900px;
          width: 100%;
        }
        .deck-wrapper .why-list li {
          display: block;
          width: 100%;
          max-width: 900px;
          padding: 24px 0;
          border-bottom: 1px solid var(--gray-line);
          font-family: var(--font-body);
          font-size: clamp(17px, 1.4vw, 22px);
          font-weight: 400;
          line-height: 1.4;
          letter-spacing: -0.005em;
          color: var(--cruda-dark);
          margin: 0;
        }
        .deck-wrapper .why-closing {
          border-left: 3px solid var(--cruda-red);
          padding: 16px 0 16px 32px;
          font-family: var(--font-body);
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 500;
          line-height: 1.35;
          color: var(--cruda-dark);
          max-width: 720px;
        }

        /* SLIDE 05 — WHAT WE DO (3-col grid: number / label / content) */
        .deck-wrapper .do-h1 {
          font-family: var(--font-display);
          font-size: clamp(56px, 6vw, 96px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          margin-bottom: 120px;
          max-width: 900px;
        }
        .deck-wrapper .bucket {
          border-top: 1px solid var(--cruda-dark);
          padding: 80px 0;
          display: grid;
          grid-template-columns: 80px 240px 1fr;
          gap: 48px;
          align-items: start;
        }
        .deck-wrapper .bucket:last-child {
          border-bottom: 1px solid var(--cruda-dark);
        }
        .deck-wrapper .bucket .number {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--gray-mute);
          padding-top: 8px;
          font-variant-numeric: tabular-nums;
        }
        .deck-wrapper .bucket .label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gray-mute);
          padding-top: 8px;
        }
        .deck-wrapper .bucket h3 {
          font-family: var(--font-display);
          font-size: clamp(32px, 2.6vw, 44px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--cruda-dark);
          margin-bottom: 32px;
          max-width: 700px;
        }
        .deck-wrapper .bucket p {
          font-family: var(--font-body);
          font-size: clamp(16px, 1.25vw, 19px);
          font-weight: 400;
          line-height: 1.6;
          letter-spacing: -0.005em;
          color: var(--gray-text);
          max-width: 680px;
        }

        /* SLIDES 06 & 07 — SELECTED WORK (v6: editorial micro-narratives) */
        .deck-wrapper .work-headline {
          margin-bottom: 96px;
        }
        .deck-wrapper .work-headline h2 {
          font-family: var(--font-display);
          font-size: clamp(40px, 4.4vw, 64px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          max-width: 22ch;
        }
        .deck-wrapper .work-headline p {
          font-family: var(--font-body);
          font-size: clamp(17px, 1.4vw, 20px);
          line-height: 1.6;
          color: var(--gray-text);
          font-style: italic;
          margin-top: 24px;
          max-width: 56ch;
        }
        .deck-wrapper .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-auto-rows: 1fr;
          gap: 80px 64px;
          max-width: 1280px;
          margin: 0 auto;
        }
        /* Slide 7 only: 3 columns on large screens */
        @media (min-width: 1440px) {
          .deck-wrapper .cards-grid-slide-7 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .deck-wrapper .card {
          display: flex;
          flex-direction: column;
          height: 100%;
          background: transparent;
          border: none;
          border-radius: 0;
          box-shadow: none;
          text-decoration: none;
          color: inherit;
        }
        /* Square photo 1:1, edge-to-edge of card column (v6.4.1: bulletproof padding-bottom + absolute img) */
        .deck-wrapper .card-photo {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: var(--cruda-cream);
          display: block;
        }
        .deck-wrapper .card-photo img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 30%;
          filter: grayscale(100%);
          max-width: none;
        }
        /* Hairline under photo */
        .deck-wrapper .card-photo-divider {
          width: 100%;
          height: 1px;
          background: var(--gray-line);
          margin: 0;
        }
        /* Content block (v6.2: flex:1 pushes footer to bottom for equal heights) */
        .deck-wrapper .card-content {
          padding: 24px 0 0 0;
          display: flex;
          flex-direction: column;
          flex: 1;
          gap: 0;
        }
        .deck-wrapper .card-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.16em;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin: 0 0 6px 0;
        }
        .deck-wrapper .card-name {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin: 0 0 24px 0;
          line-height: 1.3;
        }
        .deck-wrapper .card-headline {
          font-family: var(--font-display);
          font-size: clamp(22px, 1.9vw, 28px);
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: -0.018em;
          color: var(--cruda-dark);
          margin: 0 0 16px 0;
        }
        .deck-wrapper .card-subcopy {
          font-family: var(--font-body);
          font-size: clamp(14px, 1.05vw, 16px);
          font-weight: 400;
          line-height: 1.55;
          letter-spacing: -0.005em;
          color: var(--gray-text);
          margin: 0;
        }
        /* v6.2: single red proof point per card, same weight/size as surrounding */
        .deck-wrapper .accent-red {
          color: var(--cruda-red);
        }
        /* Hairline before footer (v6.2: 32px gap below card-content which has flex:1) */
        .deck-wrapper .card-footer-divider {
          width: 100%;
          height: 1px;
          background: var(--gray-line);
          margin-top: 32px;
        }
        .deck-wrapper .card-footer {
          padding-top: 16px;
        }
        .deck-wrapper .card-footer a {
          color: var(--gray-text) !important;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.05em;
          text-decoration: none;
          transition: color 0.2s;
        }
        .deck-wrapper .card-footer a:hover {
          color: var(--cruda-red);
        }

        /* SLIDE 08 — BIO (Block A only, Block B eliminated) */
        .deck-wrapper .bio-section {
          display: grid;
          grid-template-columns: 1.5fr 2fr;
          gap: 96px;
          align-items: start;
        }
        .deck-wrapper .bio-photo-col {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .deck-wrapper .bio-photo {
          background: var(--cruda-cream);
          aspect-ratio: 4 / 5;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--gray-mute);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .deck-wrapper .bio-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }
        .deck-wrapper .bio-photo-caption {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .deck-wrapper .bio-photo-caption .number {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--cruda-red);
          margin-bottom: 8px;
        }
        .deck-wrapper .bio-photo-caption .name {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.02em;
          line-height: 1;
          color: var(--cruda-dark);
          margin: 0 0 6px 0;
        }
        .deck-wrapper .bio-photo-caption .role {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          color: var(--cruda-red);
          text-transform: uppercase;
        }
        .deck-wrapper .bio-copy-col {
          display: flex;
          flex-direction: column;
        }
        .deck-wrapper .bio-section-label {
          margin-bottom: 48px;
        }
        .deck-wrapper .bio-divider {
          border: 0;
          border-top: 1px solid var(--gray-line);
          margin: 64px 0;
        }
        .deck-wrapper .bio-block-a p {
          font-family: var(--font-body);
          font-size: clamp(17px, 1.4vw, 21px);
          line-height: 1.55;
          letter-spacing: -0.005em;
          color: var(--cruda-dark);
          margin-bottom: 28px;
          max-width: 680px;
        }
        .deck-wrapper .bio-block-a p:last-child {
          margin-bottom: 0;
        }
        .deck-wrapper .bio-block-a p.italic-pull {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(22px, 1.8vw, 28px);
          line-height: 1.35;
          letter-spacing: -0.015em;
          color: var(--cruda-dark);
          font-weight: 400;
        }
        .deck-wrapper .bio-brands {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gray-mute);
          line-height: 1.9;
        }
        .deck-wrapper .bio-industries-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin-bottom: 16px;
        }
        .deck-wrapper .bio-industries {
          font-family: var(--font-body);
          font-size: 16px;
          letter-spacing: -0.005em;
          color: var(--gray-text);
        }

        /* SLIDE 09 — CTA */
        .deck-wrapper .cta-h1 {
          font-family: var(--font-display);
          font-size: clamp(56px, 6vw, 96px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          margin-bottom: 16px;
          max-width: 18ch;
        }
        .deck-wrapper .cta-h1-italic {
          font-family: var(--font-display);
          font-size: clamp(56px, 6vw, 96px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-red);
          margin-bottom: 80px;
          max-width: 18ch;
        }
        .deck-wrapper .cta-lead {
          font-family: var(--font-body);
          font-size: clamp(18px, 1.5vw, 22px);
          line-height: 1.55;
          color: var(--gray-text);
          max-width: 720px;
          margin-bottom: 80px;
        }
        .deck-wrapper .cta-button {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          background: var(--cruda-dark);
          color: var(--cruda-white);
          padding: 24px 48px;
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: background 0.2s var(--ease);
          border: none;
        }
        .deck-wrapper .cta-button:hover {
          background: var(--cruda-red);
        }
        .deck-wrapper .cta-button .arrow {
          transition: transform 0.2s var(--ease);
          font-family: var(--font-display);
          font-size: 20px;
        }
        .deck-wrapper .cta-button:hover .arrow {
          transform: translateX(8px);
        }
        .deck-wrapper .cta-stamp {
          margin-top: 32px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--gray-mute);
        }
        .deck-wrapper .cta-domain {
          margin-top: 48px;
          font-family: var(--font-body);
          font-size: 16px;
          color: var(--gray-text);
          background: transparent;
          padding: 0;
          border: 0;
        }
        .deck-wrapper .cta-domain a {
          color: inherit;
          text-decoration: none;
          border-bottom: 1px solid var(--gray-line);
          padding-bottom: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .deck-wrapper .cta-domain a:hover {
          color: var(--cruda-red);
          border-color: var(--cruda-red);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .deck-wrapper .nav {
            padding: 20px 24px;
          }
          .deck-wrapper .slide {
            padding: 120px 32px 80px;
          }
          .deck-wrapper .s-hero {
            padding: 160px 32px 80px;
          }
          .deck-wrapper .s-why {
            padding: 120px 32px 80px;
          }
          .deck-wrapper .hero-stamp {
            margin-top: 96px;
          }
          .deck-wrapper .world-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .deck-wrapper .bucket {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .deck-wrapper .cards-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .deck-wrapper .card-header,
          .deck-wrapper .card-stats,
          .deck-wrapper .card-footer {
            padding-left: 24px;
            padding-right: 24px;
          }
          .deck-wrapper .card-stats {
            grid-template-columns: 100px 1fr;
          }
          .deck-wrapper .bio-section {
            grid-template-columns: 1fr;
            gap: 48px;
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
            <h1 className="hero-h1 reveal d-1">
              Everything is a narrative.
              <br />
              Companies, too.
            </h1>
            <p className="hero-lead reveal d-3">
              We help founder-led companies build theirs intentionally, and the systems that scale it.
            </p>
            <div className="hero-stamp reveal d-5">CRUDA — MAY 2026</div>
          </div>
        </section>

        {/* 02 — PHILOSOPHY */}
        <section className="slide" data-counter="02 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Philosophy</div>
            <h1 className="philosophy-word reveal d-1">Cruda</h1>
            <p className="philosophy-definition reveal d-2">
              <em>adj. (Spanish)</em>&nbsp;&nbsp;Raw. Unfiltered. The version before it became something else.
            </p>
            <p className="philosophy-editorial reveal d-3">
              The story your company carries before anyone tries to &ldquo;tell&rdquo; it for you.
            </p>
            <p className="philosophy-manifesto reveal d-4">
              The best work doesn&rsquo;t come from adding.<br />
              It comes from stripping away.
            </p>
          </div>
        </section>

        {/* 03 — FOUR WORLDS (4 same size, 1 major divider between 02 and 03) */}
        <section className="slide" data-counter="03 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal d-1">What we cover</div>

            <h2 className="worlds-h1 reveal d-2">
              We work with founder-led companies across four worlds.
            </h2>

            <div className="world-row reveal d-3">
              <div className="number">01</div>
              <div className="vertical-name">CRUDA BUILD</div>
              <div className="description">
                <h3>They build the spaces we live in.</h3>
                <div className="industries">
                  Architecture · Design · Real Estate · Construction · Building Materials
                </div>
              </div>
            </div>

            <div className="world-row reveal d-4">
              <div className="number">02</div>
              <div className="vertical-name">CRUDA DEMAND</div>
              <div className="description">
                <h3>They earn the choice, every day.</h3>
                <div className="industries">CPG · Fashion · Hospitality · Healthcare Brands</div>
              </div>
            </div>

            {/* Major divider — only visual signal of 2+2 split */}
            <div className="world-row divider-major reveal d-beat-3">
              <div className="number">03</div>
              <div className="vertical-name">CRUDA SPORTS</div>
              <div className="description">
                <h3>They earn the truth in public.</h3>
                <div className="industries">Tournaments · Athletes · Leagues · Sports Brands</div>
              </div>
            </div>

            <div className="world-row reveal d-beat-4">
              <div className="number">04</div>
              <div className="vertical-name">CRUDA CAPITAL</div>
              <div className="description">
                <h3>They move what trust built.</h3>
                <div className="industries">Family Offices · Wealth Management · PE · Financial Advisors</div>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — WHY CRUDA */}
        <section className="slide s-why" data-counter="04 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Why CRUDA</div>
            <h2 className="why-h1 reveal d-1">Your narrative will be written.</h2>
            <h2 className="why-h1-italic reveal d-2">The only question is by whom.</h2>
            <p className="why-list-intro reveal d-3">By default, it&rsquo;s written by:</p>
            <ul className="why-list reveal d-4">
              <li>The press, when something breaks.</li>
              <li>The market, through what gets repeated.</li>
              <li>The algorithm, picking what surfaces first.</li>
              <li>Silence, when none of those bother.</li>
            </ul>
            <div className="why-closing reveal d-5">Or you write it. On purpose. With us.</div>
          </div>
        </section>

        {/* 05 — WHAT WE DO */}
        <section className="slide" data-counter="05 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">What we do</div>
            <h2 className="do-h1 reveal d-1">What we actually do.</h2>

            <div className="bucket reveal d-2">
              <div className="number">01</div>
              <div className="label">Narrative Foundation</div>
              <div>
                <h3>Your company, written down.</h3>
                <p>
                  Most companies have never actually been written down — not the version that&rsquo;s true. You
                  explain it one way in a board meeting, another way to a client, a third way on the website. The
                  story is already in you — what you do, why it matters, why you. Our job is helping you see it,
                  and find the words that don&rsquo;t betray it.
                </p>
              </div>
            </div>

            <div className="bucket reveal d-3">
              <div className="number">02</div>
              <div className="label">Content Engine</div>
              <div>
                <h3>Your work, in motion.</h3>
                <p>
                  Once it&rsquo;s seen, it has to move. LinkedIn for the conversations that matter. Instagram for
                  the texture of what you do. Pitch decks that don&rsquo;t need explaining. Talking points your
                  team uses when you&rsquo;re not in the room. Every piece earns its place.
                </p>
              </div>
            </div>

            <div className="bucket reveal d-4">
              <div className="number">03</div>
              <div className="label">Relationships</div>
              <div>
                <h3>Doors that open before you knock.</h3>
                <p>
                  The right rooms don&rsquo;t open because you posted more. They open because someone you respect
                  introduces you. We make those introductions happen, and we prepare you for the conversations that
                  follow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 06 — SELECTED WORK (Part 1) */}
        <section className="slide" data-counter="06 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Selected work</div>
            <div className="work-headline reveal d-1">
              <h2>The companies that follow have nothing obvious in common.</h2>
              <p>What they share is harder to see: each one had expertise the world hadn&rsquo;t fully heard yet.</p>
            </div>

            <div className="cards-grid">
              {/* Card 01 — Karen Mannheim */}
              <Link href="/clients/karen-mannheim" className="card reveal d-2">
                <div className="card-photo"><img src="/karen-mannheim.webp" alt="Karen Mannheim · Trazzo Lighting" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA BUILD · 01</div>
                  <p className="card-name">KAREN MANNHEIM · TRAZZO LIGHTING</p>
                  <h3 className="card-headline">30 years of expertise. Zero presence outside Peru.</h3>
                  <p className="card-subcopy">
                    Karen Mannheim lights Porsche and Maserati flagships in Lima. Four Seasons Residences in Brickell. Private villas in Fisher Island. Neymar&rsquo;s new home in Miami. A <span className="accent-red">$200M mansion in Golden Beach by Oppenheim Architecture</span>. Her clients don&rsquo;t find her on Google.
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/karen-mannheim">thecruda.com/clients/karen-mannheim →</a>
                </div>
              </Link>

              {/* Card 02 — Mike Kaeding */}
              <Link href="/clients/mike-kaeding" className="card reveal d-3">
                <div className="card-photo"><img src="/mike-kaeding.webp" alt="Mike Kaeding · Norhart" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA BUILD · 02</div>
                  <p className="card-name">MIKE KAEDING · NORHART</p>
                  <h3 className="card-headline">$200M in assets. No one outside Minneapolis had heard of him.</h3>
                  <p className="card-subcopy">
                    Mike Kaeding&rsquo;s company owns over $230M in residential real estate in Minnesota. Norhart went from 80 units to more than a thousand. He writes about it on LinkedIn. A million impressions a year. <span className="accent-red">The capital follows the writing.</span>
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/mike-kaeding">thecruda.com/clients/mike-kaeding →</a>
                </div>
              </Link>

              {/* Card 03 — Juan Pablo Romero */}
              <Link href="/clients/juan-pablo-romero" className="card reveal d-4">
                <div className="card-photo"><img src="/juan-pablo-romero.webp" alt="Juan Pablo Romero · CTD" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA BUILD · 03</div>
                  <p className="card-name">JUAN PABLO ROMERO · CTD</p>
                  <h3 className="card-headline">From family craft to architect specification.</h3>
                  <p className="card-subcopy">
                    Juan Pablo Romero built CTD to land luxury A&amp;D brands in the US. CRUDA built the firm with him: five-language site, two brand identities. <span className="accent-red">Three Florida clients signed in the first year</span>. Konkretus. CB Hali Rugs. Sierra Furniture.
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/juan-pablo-romero">thecruda.com/clients/juan-pablo-romero →</a>
                </div>
              </Link>

              {/* Card 04 — SH! Energy */}
              <Link href="/clients/sh-energy" className="card reveal d-5">
                <div className="card-photo"><img src="/sh-energy.webp" alt="SH! Energy" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA DEMAND · 04</div>
                  <p className="card-name">SH! ENERGY</p>
                  <h3 className="card-headline">$2M raised. A million cans sold. On the shelves of Carrefour and Cencosud.</h3>
                  <p className="card-subcopy">
                    SH! Energy is the CPG startup co-founded by football star Rodrigo De Paul. Just raised <span className="accent-red">$2M at a $30M valuation</span>. A million cans sold. The first energy drink to land mass shelf in LATAM through a founder narrative, not a marketing budget.
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/sh-energy">thecruda.com/clients/sh-energy →</a>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 07 — SELECTED WORK (Part 2) */}
        <section className="slide" data-counter="07 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Selected work · continued</div>

            <div className="cards-grid cards-grid-slide-7">
              {/* Card 05 — Marcos Guevara Lynch */}
              <Link href="/clients/marcos-guevara-lynch" className="card reveal d-1">
                <div className="card-photo"><img src="/marcos-guevara-lynch.webp" alt="Marcos Guevara Lynch" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA DEMAND · 05</div>
                  <p className="card-name">MARCOS GUEVARA LYNCH</p>
                  <h3 className="card-headline">The company and the founder, both made on purpose.</h3>
                  <p className="card-subcopy">
                    Marcos Guevara Lynch co-founded SH! Energy. He&rsquo;s also building his own narrative system: newsletter, social presence, and a tribe of entrepreneurs gathering in person across LATAM. Most founders build a company and let the personal brand happen. Marcos is building both with intention. <span className="accent-red">Case in build.</span>
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/marcos-guevara-lynch">thecruda.com/clients/marcos-guevara-lynch →</a>
                </div>
              </Link>

              {/* Card 06 — Nitin Passi */}
              <Link href="/clients/nitin-passi" className="card reveal d-2">
                <div className="card-photo"><img src="/nitin-passi.webp" alt="Nitin Passi · Sumwon Studios" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA DEMAND · 06</div>
                  <p className="card-name">NITIN PASSI · SUMWON STUDIOS</p>
                  <h3 className="card-headline">$300M in revenue. The comeback that wasn&rsquo;t supposed to happen.</h3>
                  <p className="card-subcopy">
                    Nitin Passi&rsquo;s comeback in fashion is rare. SUMWON Studios. <span className="accent-red">$300M in revenue</span> between Dubai and Manchester. One LinkedIn post about the rebuild brought 1,000+ CVs.
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/nitin-passi">thecruda.com/clients/nitin-passi →</a>
                </div>
              </Link>

              {/* Card 07 — Girish Sehgal */}
              <Link href="/clients/girish-sehgal" className="card reveal d-3">
                <div className="card-photo"><img src="/girish-sehgal.webp" alt="Girish Sehgal · SSMC" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA DEMAND · 07</div>
                  <p className="card-name">GIRISH SEHGAL · SSMC</p>
                  <h3 className="card-headline">25 years of world-class hospitality. Zero digital presence.</h3>
                  <p className="card-subcopy">
                    Girish Sehgal led hospitality operations at Four Seasons Toronto, Four Seasons Chicago, Taj, and JW Marriott across 25 years and 14 cities in 6 countries. Now he leads patient experience at SSMC in Abu Dhabi. The credentials were there. The voice wasn&rsquo;t. CRUDA built it. <span className="accent-red">7,000+ senior healthcare leaders</span> found him through it.
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/girish-sehgal">thecruda.com/clients/girish-sehgal →</a>
                </div>
              </Link>

              {/* Card 08 — Martin Pakciarz */}
              <Link href="/clients/martin-pakciarz" className="card reveal d-4">
                <div className="card-photo"><img src="/martin-pakciarz.webp" alt="Martin Pakciarz · Samurai Fight House" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA SPORTS · 08</div>
                  <p className="card-name">MARTIN PAKCIARZ · SAMURAI FIGHT HOUSE</p>
                  <h3 className="card-headline">Six of the ten Argentinians in the UFC came through one fight house.</h3>
                  <p className="card-subcopy">
                    Martin Pakciarz runs Samurai Fight House. Their featherweight Chino Vallejos sits in the global top ten. Just won a <span className="accent-red">$100K UFC bonus in Vegas</span>.
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/martin-pakciarz">thecruda.com/clients/martin-pakciarz →</a>
                </div>
              </Link>

              {/* Card 09 — Alex Dmitriev */}
              <Link href="/clients/alex-dmitriev" className="card reveal d-5">
                <div className="card-photo"><img src="/alex-dmitriev.webp" alt="Alex Dmitriev" /></div>
                <div className="card-photo-divider"></div>
                <div className="card-content">
                  <div className="card-tag">CRUDA CAPITAL · 09</div>
                  <p className="card-name">ALEX DMITRIEV</p>
                  <h3 className="card-headline">One engagement. One outcome.</h3>
                  <p className="card-subcopy">
                    Alex Dmitriev advises on cross-border M&amp;A at Horizon Capital, from Dubai. McKinsey. BCG. Kearney. CRUDA was brought in once. <span className="accent-red">Sometimes the right answer is one conversation, not a system.</span>
                  </p>
                </div>
                <div className="card-footer-divider"></div>
                <div className="card-footer">
                  <a href="/clients/alex-dmitriev">thecruda.com/clients/alex-dmitriev →</a>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 08 — BIO (Block A only) */}
        <section className="slide" data-counter="08 / 09">
          <div className="slide-inner">
            <div className="bio-section">
              <div className="bio-photo-col reveal d-1">
                <div className="bio-photo"><img src="/fran-herrera.webp" alt="Fran Herrera" /></div>
                <div className="bio-photo-caption">
                  <span className="number">01</span>
                  <h3 className="name">Fran Herrera</h3>
                  <span className="role">FOUNDER</span>
                </div>
              </div>

              <div className="bio-copy-col reveal d-2">
                <div className="slide-label bio-section-label">Who&rsquo;s writing this</div>

                <div className="bio-block-a">
                  <p>
                    Argentine. Lived in Dubai &amp; Russia. Worked for a decade across three continents with +12
                    nationalities. ByteDance. Nestlé. United Nations. DeliveryHero.
                  </p>
                  <p className="italic-pull">
                    Every immigrant knows the same gap: you know exactly who you are, but the words don&rsquo;t
                    travel.
                  </p>
                  <p>That&rsquo;s not theory. That&rsquo;s Tuesday morning.</p>
                  <p>Now I sit with founders who have the same problem. We find the words together.</p>
                </div>

                <hr className="bio-divider" />

                <div className="bio-brands">
                  BYTEDANCE · NESTLÉ · UNITED NATIONS · DELIVERYHERO · MONDELEZ · AB INBEV · MARY KAY
                </div>

                <hr className="bio-divider" />

                <div>
                  <div className="bio-industries-label">Industries</div>
                  <div className="bio-industries">
                    Real Estate · Finance · CPG · Web3 · A&amp;D · Sports · Drinks &amp; Spirits
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 09 — CTA */}
        <section className="slide" data-counter="09 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">The conversation</div>
            <h2 className="cta-h1 reveal d-1">This isn&rsquo;t a pitch.</h2>
            <h2 className="cta-h1-italic reveal d-2">It&rsquo;s the start of a conversation.</h2>
            <p className="cta-lead reveal d-3">
              If something here resonated, the next step is simple. We talk. About your company, your reach, the gap
              between the two — and whether there&rsquo;s something here worth building together.
            </p>
            <div className="reveal d-4">
              <Link href="/contact" className="cta-button">
                Start a Conversation <span className="arrow">→</span>
              </Link>
              <div className="cta-stamp">45 min · No pitch · No commitment</div>
              <div className="cta-domain">
                <a href="https://thecruda.com" target="_blank" rel="noopener noreferrer">
                  thecruda.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
