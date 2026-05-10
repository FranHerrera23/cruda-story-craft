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

          /* Greys */
          --gray-text: #4A4A4A;
          --gray-mute: #8A8A8A;
          --gray-line: #E5E5E5;
          --gray-faint: #F5F5F5;

          /* Fonts */
          --font-display: var(--font-fraunces), 'Neue Haas Grotesk Display Pro', 'Inter', sans-serif;
          --font-body: var(--font-inter), 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          --font-mono: var(--font-jetbrains), 'JetBrains Mono', 'IBM Plex Mono', monospace;
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

        /* Pentagram-level: no shadows, no gradients, no border-radius */
        .deck-wrapper *,
        .deck-wrapper *::before,
        .deck-wrapper *::after {
          box-shadow: none !important;
          text-shadow: none !important;
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
          letter-spacing: 0.12em;
          color: var(--gray-mute);
          text-transform: uppercase;
        }

        /* SLIDE BASE */
        .deck-wrapper .slide {
          min-height: 100vh;
          padding: 160px 80px 120px;
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

        /* Section labels — em-dash red + label dark */
        .deck-wrapper .slide-label {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin-bottom: 80px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .deck-wrapper .slide-label::before {
          content: '—';
          color: var(--cruda-red);
          font-weight: 400;
          font-size: 14px;
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

        /* SLIDE 01 — HERO */
        .deck-wrapper .s-hero {
          padding: 200px 80px 120px;
        }
        .deck-wrapper .hero-h1 {
          font-family: var(--font-display);
          font-size: clamp(72px, 9vw, 144px);
          font-weight: 600;
          line-height: 1.02;
          letter-spacing: -0.03em;
          color: var(--cruda-dark);
          max-width: 1200px;
        }
        .deck-wrapper .hero-lead {
          font-family: var(--font-body);
          font-size: clamp(20px, 1.6vw, 26px);
          font-weight: 400;
          line-height: 1.5;
          color: var(--gray-text);
          max-width: 720px;
          margin-top: 80px;
        }
        .deck-wrapper .hero-stamp {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mute);
          margin-top: 160px;
        }

        /* SLIDE 02 — PHILOSOPHY */
        .deck-wrapper .philosophy-word {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(160px, 18vw, 280px);
          font-weight: 400;
          color: var(--gray-line);
          letter-spacing: -0.04em;
          line-height: 1;
          margin-bottom: 80px;
          user-select: none;
        }
        .deck-wrapper .philosophy-definition-row {
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 120px;
        }
        .deck-wrapper .philosophy-tag {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cruda-red);
          padding-top: 6px;
        }
        .deck-wrapper .philosophy-definition {
          font-family: var(--font-body);
          font-size: clamp(22px, 1.8vw, 32px);
          font-weight: 400;
          line-height: 1.45;
          color: var(--cruda-dark);
          max-width: 880px;
        }
        .deck-wrapper .philosophy-definition .pos {
          color: var(--gray-mute);
          font-style: italic;
          margin-right: 8px;
        }
        .deck-wrapper .philosophy-bridge {
          font-family: var(--font-body);
          font-size: clamp(18px, 1.4vw, 22px);
          color: var(--gray-text);
          max-width: 720px;
          margin-bottom: 80px;
        }
        .deck-wrapper .philosophy-manifesto {
          font-family: var(--font-display);
          font-style: italic;
          font-size: clamp(28px, 2.6vw, 44px);
          font-weight: 400;
          line-height: 1.25;
          letter-spacing: -0.02em;
          color: var(--cruda-dark);
          max-width: 1100px;
        }

        /* SLIDE 03 — FOUR WORLDS (2+2 hierarchy) */
        .deck-wrapper .worlds-h1 {
          font-family: var(--font-display);
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          margin-bottom: 96px;
          max-width: 1100px;
        }
        .deck-wrapper .world-row-major {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 48px;
          padding: 64px 0;
          border-bottom: 1px solid var(--cruda-dark);
          align-items: start;
        }
        .deck-wrapper .world-row-major .number {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--gray-mute);
          letter-spacing: 0.1em;
        }
        .deck-wrapper .world-row-major .vertical-name {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin-bottom: 32px;
          display: block;
        }
        .deck-wrapper .world-row-major h3 {
          font-family: var(--font-display);
          font-size: clamp(36px, 3.2vw, 52px);
          font-weight: 500;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--cruda-dark);
          margin-bottom: 24px;
          max-width: 24ch;
        }
        .deck-wrapper .world-row-major .industries {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-mute);
          line-height: 1.6;
        }
        .deck-wrapper .world-row-minor {
          display: grid;
          grid-template-columns: 80px 200px 1fr;
          gap: 48px;
          padding: 32px 0;
          border-bottom: 1px solid var(--gray-line);
          align-items: start;
        }
        .deck-wrapper .world-row-minor .number,
        .deck-wrapper .world-row-minor .vertical-name {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.1em;
        }
        .deck-wrapper .world-row-minor .vertical-name {
          font-weight: 600;
          text-transform: uppercase;
          color: var(--cruda-dark);
        }
        .deck-wrapper .world-row-minor .description {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.4;
          color: var(--cruda-dark);
        }
        .deck-wrapper .world-row-minor .description small {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gray-mute);
          margin-top: 8px;
        }

        /* SLIDE 04 — WHY CRUDA */
        .deck-wrapper .why-h1 {
          font-family: var(--font-display);
          font-size: clamp(56px, 6vw, 96px);
          font-weight: 600;
          line-height: 1.05;
          letter-spacing: -0.025em;
          color: var(--cruda-dark);
          margin-bottom: 24px;
          max-width: 22ch;
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
          max-width: 22ch;
        }
        .deck-wrapper .why-list-intro {
          font-family: var(--font-body);
          font-size: 20px;
          color: var(--gray-text);
          margin-bottom: 48px;
        }
        .deck-wrapper .why-list {
          list-style: none;
          padding: 0;
          margin: 0 0 96px 0;
          max-width: 60ch;
        }
        .deck-wrapper .why-list li {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 16px;
          padding: 28px 0;
          border-bottom: 1px solid var(--gray-line);
          font-family: var(--font-body);
          font-size: clamp(18px, 1.5vw, 22px);
          color: var(--cruda-dark);
        }
        .deck-wrapper .why-list li:last-child {
          border-bottom: 1px solid var(--gray-line);
        }
        .deck-wrapper .why-list li::before {
          content: '—';
          color: var(--cruda-red);
          font-weight: 400;
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

        /* SLIDE 05 — WHAT WE ACTUALLY DO */
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
          padding: 64px 0;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 48px;
          align-items: start;
        }
        .deck-wrapper .bucket:last-child {
          border-bottom: 1px solid var(--cruda-dark);
        }
        .deck-wrapper .bucket .number {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--gray-mute);
          letter-spacing: 0.1em;
        }
        .deck-wrapper .bucket .label {
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mute);
          margin-bottom: 32px;
        }
        .deck-wrapper .bucket h3 {
          font-family: var(--font-display);
          font-size: clamp(32px, 2.8vw, 48px);
          font-weight: 500;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--cruda-dark);
          margin-bottom: 32px;
          max-width: 700px;
        }
        .deck-wrapper .bucket p {
          font-family: var(--font-body);
          font-size: clamp(17px, 1.4vw, 20px);
          line-height: 1.6;
          color: var(--gray-text);
          max-width: 720px;
        }

        /* SLIDES 06 & 07 — SELECTED WORK */
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
          margin-top: 24px;
          max-width: 56ch;
        }
        .deck-wrapper .cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 64px;
        }
        .deck-wrapper .card {
          background: var(--cruda-white);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          transition: opacity 0.2s var(--ease);
        }
        .deck-wrapper .card.has-link {
          cursor: pointer;
        }
        .deck-wrapper .card.has-link:hover {
          opacity: 0.85;
        }
        .deck-wrapper .card-photo {
          height: 200px;
          background: var(--gray-faint);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: var(--gray-mute);
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .deck-wrapper .card-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(0.95);
        }
        .deck-wrapper .card-header {
          border-top: 1px solid var(--cruda-dark);
          padding: 32px 32px 24px 32px;
        }
        .deck-wrapper .card-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin-bottom: 16px;
          display: block;
        }
        .deck-wrapper .card-name {
          font-family: var(--font-display);
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.015em;
          color: var(--cruda-dark);
          margin-bottom: 6px;
        }
        .deck-wrapper .card-sub {
          font-family: var(--font-body);
          font-style: italic;
          font-size: 13px;
          color: var(--gray-text);
          margin-bottom: 16px;
        }
        .deck-wrapper .card-geo {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mute);
        }
        .deck-wrapper .card-stats {
          border-top: 1px solid var(--gray-line);
          padding: 24px 32px;
          display: grid;
          grid-template-columns: 120px 1fr;
          gap: 16px 24px;
          align-items: baseline;
        }
        .deck-wrapper .card-stat-value {
          font-family: var(--font-display);
          font-size: clamp(24px, 2vw, 32px);
          font-weight: 600;
          line-height: 1;
          color: var(--cruda-dark);
        }
        .deck-wrapper .card-stat-label {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mute);
          line-height: 1.3;
        }
        .deck-wrapper .card-footer {
          border-top: 1px solid var(--gray-line);
          padding: 20px 32px;
          margin-top: auto;
        }
        .deck-wrapper .card-footer-link {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.05em;
          color: var(--gray-text);
          text-decoration: none;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .deck-wrapper .card.has-link:hover .card-footer-link {
          color: var(--cruda-red);
        }

        /* SLIDE 08 — BIO */
        .deck-wrapper .bio-section {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 96px;
          align-items: start;
        }
        .deck-wrapper .bio-photo-col {
          display: flex;
          flex-direction: column;
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
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 32px;
        }
        .deck-wrapper .bio-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%) contrast(0.95);
        }
        .deck-wrapper .bio-photo-caption {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .deck-wrapper .bio-photo-caption .number {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--cruda-red);
        }
        .deck-wrapper .bio-photo-caption .name {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: var(--cruda-dark);
          margin: 0;
        }
        .deck-wrapper .bio-photo-caption .role {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          color: var(--cruda-red);
          text-transform: uppercase;
        }
        .deck-wrapper .bio-copy-col {
          display: flex;
          flex-direction: column;
        }
        .deck-wrapper .bio-divider {
          border: 0;
          border-top: 1px solid var(--cruda-dark);
          margin: 48px 0;
        }
        .deck-wrapper .bio-divider.thin {
          border-top: 1px solid var(--gray-line);
        }
        .deck-wrapper .bio-block-a p {
          font-family: var(--font-body);
          font-size: clamp(17px, 1.4vw, 20px);
          line-height: 1.6;
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
          font-size: clamp(20px, 1.7vw, 24px);
          line-height: 1.4;
          color: var(--cruda-dark);
        }
        .deck-wrapper .bio-block-b p {
          font-family: var(--font-body);
          font-size: clamp(16px, 1.3vw, 18px);
          line-height: 1.65;
          color: var(--cruda-dark);
          margin-bottom: 28px;
          max-width: 680px;
        }
        .deck-wrapper .bio-block-b p:last-child {
          margin-bottom: 0;
        }
        .deck-wrapper .bio-block-b em {
          font-style: italic;
          font-weight: 500;
        }
        .deck-wrapper .bio-brands {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gray-mute);
          line-height: 1.8;
        }
        .deck-wrapper .bio-industries-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--cruda-dark);
          margin-bottom: 12px;
        }
        .deck-wrapper .bio-industries {
          font-family: var(--font-body);
          font-size: 16px;
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
            padding: 100px 24px 60px;
          }
          .deck-wrapper .s-hero {
            padding: 140px 24px 80px;
          }
          .deck-wrapper .hero-stamp {
            margin-top: 96px;
          }
          .deck-wrapper .philosophy-definition-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .deck-wrapper .world-row-major,
          .deck-wrapper .world-row-minor {
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
              We help founder-led companies build theirs intentionally — and the systems that scale it.
            </p>
            <div className="hero-stamp reveal d-5">CRUDA — MAY 2026</div>
          </div>
        </section>

        {/* 02 — PHILOSOPHY */}
        <section className="slide" data-counter="02 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Philosophy</div>
            <div className="philosophy-word reveal d-1">Cruda.</div>
            <div className="philosophy-definition-row reveal d-2">
              <div className="philosophy-tag">Spanish</div>
              <div className="philosophy-definition">
                <span className="pos">adj.</span>Raw. Unfiltered. The version before it became something else.
              </div>
            </div>
            <p className="philosophy-bridge reveal d-3">
              The story your company carries before anyone tries to &ldquo;tell&rdquo; it for you.
            </p>
            <div className="philosophy-manifesto reveal d-4">
              The best work doesn&rsquo;t come from adding. It comes from stripping away.
            </div>
          </div>
        </section>

        {/* 03 — FOUR WORLDS */}
        <section className="slide" data-counter="03 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal d-1">What we cover</div>

            <h2 className="worlds-h1 reveal d-2">
              We work with founder-led companies across four worlds.
            </h2>

            {/* MAJOR — Build */}
            <div className="world-row-major reveal d-3">
              <div className="number">01</div>
              <div>
                <span className="vertical-name">CRUDA BUILD</span>
                <h3>They build the spaces we live in.</h3>
                <div className="industries">
                  Architecture · Design · Real Estate · Construction · Building Materials
                </div>
              </div>
            </div>

            {/* MAJOR — Demand */}
            <div className="world-row-major reveal d-4">
              <div className="number">02</div>
              <div>
                <span className="vertical-name">CRUDA DEMAND</span>
                <h3>They earn the choice, every day.</h3>
                <div className="industries">CPG · Fashion · Hospitality · Healthcare Brands</div>
              </div>
            </div>

            {/* MINOR — Sports */}
            <div className="world-row-minor reveal d-beat-3">
              <div className="number">03</div>
              <div className="vertical-name">CRUDA SPORTS</div>
              <div className="description">
                They earn the truth in public.
                <small>Tournaments · Athletes · Leagues · Sports Brands</small>
              </div>
            </div>

            {/* MINOR — Capital */}
            <div className="world-row-minor reveal d-beat-4">
              <div className="number">04</div>
              <div className="vertical-name">CRUDA CAPITAL</div>
              <div className="description">
                They move what trust built.
                <small>Family Offices · Wealth Management · PE · Financial Advisors</small>
              </div>
            </div>
          </div>
        </section>

        {/* 04 — WHY CRUDA */}
        <section className="slide" data-counter="04 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Why CRUDA</div>
            <h2 className="why-h1 reveal d-1">Your narrative will be written.</h2>
            <h2 className="why-h1-italic reveal d-2">The only question is by whom.</h2>
            <p className="why-list-intro reveal d-3">By default, your narrative is written by:</p>
            <ul className="why-list reveal d-4">
              <li>
                <span></span>
                <span>The competitor with louder marketing.</span>
              </li>
              <li>
                <span></span>
                <span>The press covering the last crisis.</span>
              </li>
              <li>
                <span></span>
                <span>The client you lost (and never asked why).</span>
              </li>
              <li>
                <span></span>
                <span>The algorithm that decides what people find first.</span>
              </li>
            </ul>
            <div className="why-closing reveal d-5">Or you write it. On purpose. With us.</div>
          </div>
        </section>

        {/* 05 — WHAT WE ACTUALLY DO */}
        <section className="slide" data-counter="05 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">What we do</div>
            <h2 className="do-h1 reveal d-1">What we actually do.</h2>

            <div className="bucket reveal d-2">
              <div className="number">01</div>
              <div>
                <div className="label">01 — Narrative Foundation</div>
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
              <div>
                <div className="label">02 — Content Engine</div>
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
              <div>
                <div className="label">03 — Relationships</div>
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
              {/* Card 01 — Karen */}
              <Link href="/clients/karen-mannheim" className="card has-link reveal d-2">
                <div className="card-photo">PHOTO · KAREN MANNHEIM</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA BUILD · 01</span>
                  <h3 className="card-name">Karen Mannheim</h3>
                  <p className="card-sub">Trazzo Global · Architectural Lighting</p>
                  <div className="card-geo">PERU · USA · SPAIN</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">+300%</span>
                  <span className="card-stat-label">Visibility · 3 years</span>
                  <span className="card-stat-value">$150K</span>
                  <span className="card-stat-label">Pezet 3 · From one video</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/karen-mannheim →</span>
                </div>
              </Link>

              {/* Card 02 — Mike */}
              <Link href="/clients/mike-kaeding" className="card has-link reveal d-3">
                <div className="card-photo">PHOTO · MIKE KAEDING</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA BUILD · 02</span>
                  <h3 className="card-name">Mike Kaeding</h3>
                  <p className="card-sub">Norhart · Residential Real Estate</p>
                  <div className="card-geo">MINNESOTA · USA</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">$230M+</span>
                  <span className="card-stat-label">In assets · 80 → 1,000+ units</span>
                  <span className="card-stat-value">+1M</span>
                  <span className="card-stat-label">LinkedIn impressions / year</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/mike-kaeding →</span>
                </div>
              </Link>

              {/* Card 03 — JP */}
              <Link href="/clients/juan-pablo-romero" className="card has-link reveal d-4">
                <div className="card-photo">PHOTO · JUAN PABLO ROMERO</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA BUILD · 03</span>
                  <h3 className="card-name">Juan Pablo Romero</h3>
                  <p className="card-sub">CTD · A&amp;D US Expansion</p>
                  <div className="card-geo">FLORIDA · USA</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">3</span>
                  <span className="card-stat-label">Florida clients onboarded</span>
                  <span className="card-stat-value">2</span>
                  <span className="card-stat-label">Brands built · 5-language site</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/juan-pablo-romero →</span>
                </div>
              </Link>

              {/* Card 04 — Marcos */}
              <Link href="/clients/marcos-guevara-lynch" className="card has-link reveal d-5">
                <div className="card-photo">PHOTO · MARCOS GUEVARA LYNCH</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA DEMAND · 04</span>
                  <h3 className="card-name">Marcos Guevara Lynch</h3>
                  <p className="card-sub">SH! Energy · Co-founder &amp; CEO</p>
                  <div className="card-geo">ARGENTINA · LATAM</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">$2M</span>
                  <span className="card-stat-label">Closed of $4M raise</span>
                  <span className="card-stat-value">2</span>
                  <span className="card-stat-label">Senior hires · Marketing + Martech</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/marcos-guevara-lynch →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 07 — SELECTED WORK (Part 2) */}
        <section className="slide" data-counter="07 / 09">
          <div className="slide-inner">
            <div className="slide-label reveal">Selected work · continued</div>

            <div className="cards-grid">
              {/* Card 05 — Nitin */}
              <Link href="/clients/nitin-passi" className="card has-link reveal d-1">
                <div className="card-photo">PHOTO · NITIN PASSI</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA DEMAND · 05</span>
                  <h3 className="card-name">Nitin Passi</h3>
                  <p className="card-sub">SUMWON Studios · Fashion</p>
                  <div className="card-geo">DUBAI · MANCHESTER</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">$300M</span>
                  <span className="card-stat-label">SUMWON annual revenue</span>
                  <span className="card-stat-value">+1K</span>
                  <span className="card-stat-label">CVs from one LinkedIn post</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/nitin-passi →</span>
                </div>
              </Link>

              {/* Card 06 — Girish */}
              <Link href="/clients/girish-sehgal" className="card has-link reveal d-2">
                <div className="card-photo">PHOTO · GIRISH SEHGAL</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA DEMAND · 06</span>
                  <h3 className="card-name">Girish Sehgal</h3>
                  <p className="card-sub">SSMC · Patient Experience</p>
                  <div className="card-geo">ABU DHABI · CROSS-BORDER</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">7,000+</span>
                  <span className="card-stat-label">Senior leaders reached organically</span>
                  <span className="card-stat-value">25+</span>
                  <span className="card-stat-label">Years · 14 cities · 6 countries</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/girish-sehgal →</span>
                </div>
              </Link>

              {/* Card 07 — Martin (Samurai) */}
              <Link href="/clients/martin-pakciarz" className="card has-link reveal d-3">
                <div className="card-photo">PHOTO · MARTIN PAKCIARZ</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA SPORTS · 07</span>
                  <h3 className="card-name">Martin Pakciarz</h3>
                  <p className="card-sub">Samurai Fight House · MMA Tournament</p>
                  <div className="card-geo">ARGENTINA · BRAZIL · LATAM</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">6/10</span>
                  <span className="card-stat-label">Argentinians in UFC from SFH</span>
                  <span className="card-stat-value">Top 10</span>
                  <span className="card-stat-label">Chino Vallejos · UFC featherweight</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/martin-pakciarz →</span>
                </div>
              </Link>

              {/* Card 08 — Alex */}
              <Link href="/clients/alex-dmitriev" className="card has-link reveal d-4">
                <div className="card-photo">PHOTO · ALEX DMITRIEV</div>
                <div className="card-header">
                  <span className="card-tag">CRUDA CAPITAL · 08</span>
                  <h3 className="card-name">Alex Dmitriev</h3>
                  <p className="card-sub">Cross-border M&amp;A</p>
                  <div className="card-geo">DUBAI · CROSS-BORDER</div>
                </div>
                <div className="card-stats">
                  <span className="card-stat-value">McKinsey</span>
                  <span className="card-stat-label">BCG · Kearney</span>
                  <span className="card-stat-value">2hr</span>
                  <span className="card-stat-label">Dubai advisory engagement</span>
                </div>
                <div className="card-footer">
                  <span className="card-footer-link">thecruda.com/clients/alex-dmitriev →</span>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* 08 — BIO */}
        <section className="slide" data-counter="08 / 09">
          <div className="slide-inner">
            <div className="bio-section">
              <div className="bio-photo-col reveal d-1">
                <div className="bio-photo">PHOTO · FRAN HERRERA</div>
                <div className="bio-photo-caption">
                  <span className="number">01</span>
                  <h3 className="name">Fran Herrera</h3>
                  <span className="role">FOUNDER</span>
                </div>
              </div>

              <div className="bio-copy-col reveal d-2">
                <div className="slide-label">Who&rsquo;s writing this</div>
                <hr className="bio-divider" />

                <div className="bio-block-a">
                  <p>
                    Argentine. Lived in Dubai &amp; Russia. Worked for a decade across three continents with +12
                    nationalities — TikTok, Nestlé, the United Nations, DeliveryHero.
                  </p>
                  <p className="italic-pull">
                    Every immigrant knows the same gap: you know exactly who you are, but the words don&rsquo;t
                    travel.
                  </p>
                  <p>That&rsquo;s not theory. That&rsquo;s Tuesday morning.</p>
                  <p>Now I sit with founders who have the same problem — and we find the words together.</p>
                </div>

                <hr className="bio-divider thin" />

                <div className="bio-block-b">
                  <p>
                    I spent a decade inside ByteDance, Nestlé, the United Nations, and DeliveryHero. Twelve
                    nationalities, three continents, every brief filtered through a different culture. I was the
                    person in the room when a campaign built for São Paulo had to land in Riyadh, and the words that
                    built <em>trust</em> in one place collapsed in the next.
                  </p>
                  <p>
                    Immigration teaches the same skill, only earlier. You learn to listen for what travels. What
                    survives translation isn&rsquo;t the language — it&rsquo;s the human underneath. Religion,
                    nationality, class — those don&rsquo;t dissolve. But the <em>founder</em> building real expertise
                    in Lima recognizes the founder building real expertise in Minneapolis faster than either
                    recognizes most of their neighbors.
                  </p>
                  <p>
                    That&rsquo;s the work now. Founders who&rsquo;ve earned authority through what they do, ready to
                    be known the way their rooms already know them: Karen Mannheim, Mike Kaeding, Juan Pablo Romero,
                    Marcos Guevara Lynch, Nitin Passi, Girish Sehgal, Martin Pakciarz, Alex Dmitriev. Different
                    industries, same problem.
                  </p>
                </div>

                <hr className="bio-divider thin" />

                <div className="bio-brands">
                  BYTEDANCE · NESTLÉ · UNITED NATIONS · DELIVERYHERO · MONDELEZ · AB INBEV · MARY KAY
                </div>

                <hr className="bio-divider thin" />

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
