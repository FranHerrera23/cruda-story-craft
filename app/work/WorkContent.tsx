'use client';

import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import karenPhoto from '@/assets/karen-mannheim-new.jpg';
import girishPhoto from '@/assets/girish-sehgal.jpeg';
import juanPabloPhoto from '@/assets/juan-pablo-romero.jpeg';

const WorkContent = () => {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionsRef.current.forEach((section, index) => {
      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.15 }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const isVisible = (index: number) => visibleSections.has(index);

  return (
    <>
      {/* SECTION 1: HERO */}
      <section
        ref={(el) => { sectionsRef.current[0] = el; }}
        style={{
          padding: '160px 80px 80px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <h1
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(48px, 5vw, 72px)',
            fontWeight: 600,
            color: '#0A0A0A',
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            marginBottom: '24px',
            opacity: isVisible(0) ? 1 : 0,
            transform: isVisible(0) ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          The work speaks.
        </h1>
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontStyle: 'italic',
            color: 'rgba(10, 10, 10, 0.45)',
            maxWidth: '500px',
            lineHeight: 1.6,
            opacity: isVisible(0) ? 1 : 0,
            transform: isVisible(0) ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          Narrative systems for construction, architecture, and design firms doing $20M–$500M.
        </p>
      </section>

      {/* SECTION 2: KAREN MANNHEIM — Photo LEFT, Text RIGHT */}
      <section
        ref={(el) => { sectionsRef.current[1] = el; }}
        className="client-spread"
        style={{
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          gap: '64px',
          padding: '100px 80px',
          borderBottom: '1px solid rgba(10, 10, 10, 0.06)',
          alignItems: 'center'
        }}
      >
        {/* Photo */}
        <div
          className="client-photo transition-all duration-800"
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            overflow: 'hidden',
            opacity: isVisible(1) ? 1 : 0,
            transform: isVisible(1) ? 'scale(1)' : 'scale(1.03)'
          }}
        >
          <img
            src={karenPhoto.src}
            alt="Karen Mannheim"
            className="client-photo-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              filter: 'grayscale(100%) contrast(1.05)',
              transition: 'filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          />
        </div>

        {/* Content */}
        <div className="client-content">
          <div
            className="client-label transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.35)',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
              opacity: isVisible(1) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            <span>TRAZZO LIGHTING</span>
            <span className="client-number" style={{ color: 'rgba(10, 10, 10, 0.15)' }}>01</span>
          </div>

          <div
            className="client-red-line transition-all duration-700"
            style={{
              width: '48px',
              height: '3px',
              background: '#FF2E63',
              marginBottom: '32px',
              opacity: isVisible(1) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />

          <h2
            className="client-headline transition-all duration-700"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              fontWeight: 600,
              color: '#0A0A0A',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              opacity: isVisible(1) ? 1 : 0,
              transform: isVisible(1) ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            30 years of expertise. Zero presence outside Peru.
          </h2>

          <p
            className="client-body transition-all duration-700"
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.6)',
              lineHeight: 1.65,
              maxWidth: '520px',
              marginBottom: '40px',
              opacity: isVisible(1) ? 1 : 0,
              transitionDelay: '500ms'
            }}
          >
            Karen Mannheim built Lima's most respected architectural lighting firm. Porsche. Four Seasons. Robert A.M. Stern Architects. But Miami didn't know she existed. We built the narrative system that changed that.
          </p>

          {/* Metrics */}
          <div
            className="client-metrics"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {[
              { value: '+4 years', label: 'Client since 2022' },
              { value: '+300%', label: 'LinkedIn growth' },
              { value: '500K', label: 'IG views / 90 days' },
              { value: 'RAMSA · Four Seasons · Porsche', label: 'Key partnerships' }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="metric transition-all duration-700"
                style={{
                  borderTop: '1px solid rgba(10, 10, 10, 0.06)',
                  paddingTop: '16px',
                  opacity: isVisible(1) ? 1 : 0,
                  transitionDelay: `${600 + idx * 100}ms`
                }}
              >
                <p className="metric-value" style={{
                  fontSize: idx === 3 ? '16px' : '28px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px'
                }}>
                  {metric.value}
                </p>
                <p className="metric-label" style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)'
                }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p
            className="client-quote transition-all duration-700"
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.45,
              marginBottom: '8px',
              maxWidth: '480px',
              opacity: isVisible(1) ? 1 : 0,
              transitionDelay: '800ms'
            }}
          >
            "We finally sound like who we actually are."
          </p>
          <p
            className="client-attribution transition-all duration-700"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF2E63',
              marginBottom: '32px',
              opacity: isVisible(1) ? 1 : 0,
              transitionDelay: '800ms'
            }}
          >
            — Karen Mannheim, Co-founder, TRAZZO Lighting
          </p>

          {/* Link */}
          <Link
            href="/clients/karen-mannheim"
            className="client-link"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#0A0A0A',
              textDecoration: 'none',
              position: 'relative',
              paddingBottom: '2px',
              display: 'inline-block'
            }}
          >
            See Karen's Work →
          </Link>
        </div>
      </section>

      {/* SECTION 3: MIKE KAEDING — Text LEFT, Photo RIGHT (FLIPPED) */}
      <section
        ref={(el) => { sectionsRef.current[2] = el; }}
        className="client-spread client-spread--flipped"
        style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '64px',
          padding: '100px 80px',
          borderBottom: '1px solid rgba(10, 10, 10, 0.06)',
          alignItems: 'center'
        }}
      >
        {/* Content (order 1) */}
        <div className="client-content" style={{ order: 1 }}>
          <div
            className="client-label transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.35)',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
              opacity: isVisible(2) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            <span>NORHART</span>
            <span className="client-number" style={{ color: 'rgba(10, 10, 10, 0.15)' }}>02</span>
          </div>

          <div
            className="client-red-line transition-all duration-700"
            style={{
              width: '48px',
              height: '3px',
              background: '#FF2E63',
              marginBottom: '32px',
              opacity: isVisible(2) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />

          <h2
            className="client-headline transition-all duration-700"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              fontWeight: 600,
              color: '#0A0A0A',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              opacity: isVisible(2) ? 1 : 0,
              transform: isVisible(2) ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            $200M in assets. No one outside Minneapolis had heard of him.
          </h2>

          <p
            className="client-body transition-all duration-700"
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.6)',
              lineHeight: 1.65,
              maxWidth: '520px',
              marginBottom: '40px',
              opacity: isVisible(2) ? 1 : 0,
              transitionDelay: '500ms'
            }}
          >
            Mike Kaeding is building apartments 50% faster at 30% lower cost. Vertically integrated. Manufacturing-minded. But the construction industry thought he was just another local builder. We built the narrative that positioned him as the voice challenging a broken housing industry.
          </p>

          {/* Metrics */}
          <div
            className="client-metrics"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {[
              { value: '+2 years', label: 'Engagement duration' },
              { value: '$200M', label: 'In assets' },
              { value: 'Industry leader', label: 'Positioning achieved' }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="metric transition-all duration-700"
                style={{
                  borderTop: '1px solid rgba(10, 10, 10, 0.06)',
                  paddingTop: '16px',
                  opacity: isVisible(2) ? 1 : 0,
                  transitionDelay: `${600 + idx * 100}ms`
                }}
              >
                <p className="metric-value" style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px'
                }}>
                  {metric.value}
                </p>
                <p className="metric-label" style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)'
                }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p
            className="client-quote transition-all duration-700"
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.45,
              marginBottom: '8px',
              maxWidth: '480px',
              opacity: isVisible(2) ? 1 : 0,
              transitionDelay: '800ms'
            }}
          >
            "I used to dread the 'so what do you do?' question. Now I look forward to it."
          </p>
          <p
            className="client-attribution transition-all duration-700"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF2E63',
              marginBottom: '32px',
              opacity: isVisible(2) ? 1 : 0,
              transitionDelay: '800ms'
            }}
          >
            — Mike Kaeding, CEO, Norhart
          </p>

          {/* Link */}
          <Link
            href="/clients/mike-kaeding"
            className="client-link"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#0A0A0A',
              textDecoration: 'none',
              position: 'relative',
              paddingBottom: '2px',
              display: 'inline-block'
            }}
          >
            See Mike's Work →
          </Link>
        </div>

        {/* Photo placeholder (order 2) */}
        <div
          className="client-photo transition-all duration-800"
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            overflow: 'hidden',
            backgroundColor: '#0A0A0A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            order: 2,
            opacity: isVisible(2) ? 1 : 0,
            transform: isVisible(2) ? 'scale(1)' : 'scale(1.03)'
          }}
        >
          <span style={{
            fontSize: '24px',
            fontWeight: 600,
            color: '#FFFFFF',
            letterSpacing: '0.05em'
          }}>
            NORHART
          </span>
        </div>
      </section>

      {/* SECTION 4: GIRISH SEHGAL — Photo LEFT, Text RIGHT */}
      <section
        ref={(el) => { sectionsRef.current[3] = el; }}
        className="client-spread"
        style={{
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          gap: '64px',
          padding: '100px 80px',
          borderBottom: '1px solid rgba(10, 10, 10, 0.06)',
          alignItems: 'center'
        }}
      >
        {/* Photo */}
        <div
          className="client-photo transition-all duration-800"
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            overflow: 'hidden',
            opacity: isVisible(3) ? 1 : 0,
            transform: isVisible(3) ? 'scale(1)' : 'scale(1.03)'
          }}
        >
          <img
            src={girishPhoto.src}
            alt="Girish Sehgal"
            className="client-photo-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              filter: 'grayscale(100%) contrast(1.05)',
              transition: 'filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          />
        </div>

        {/* Content */}
        <div className="client-content">
          <div
            className="client-label transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.35)',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
              opacity: isVisible(3) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            <span>SSMC — HEALTHCARE</span>
            <span className="client-number" style={{ color: 'rgba(10, 10, 10, 0.15)' }}>03</span>
          </div>

          <div
            className="client-red-line transition-all duration-700"
            style={{
              width: '48px',
              height: '3px',
              background: '#FF2E63',
              marginBottom: '32px',
              opacity: isVisible(3) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />

          <h2
            className="client-headline transition-all duration-700"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              fontWeight: 600,
              color: '#0A0A0A',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              opacity: isVisible(3) ? 1 : 0,
              transform: isVisible(3) ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            25 years of world-class hospitality. Zero digital presence.
          </h2>

          <p
            className="client-body transition-all duration-700"
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.6)',
              lineHeight: 1.65,
              maxWidth: '520px',
              marginBottom: '40px',
              opacity: isVisible(3) ? 1 : 0,
              transitionDelay: '500ms'
            }}
          >
            Girish Sehgal led Four Seasons Maldives to #1 worldwide. Taj. Grand Hyatt. JW Marriott. Now he's translating hospitality excellence into healthcare at Sheikh Shakhbout Medical City in Abu Dhabi. We built the executive voice that let 7,000+ senior leaders see what he sees.
          </p>

          {/* Metrics */}
          <div
            className="client-metrics"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {[
              { value: '25 years', label: 'Four Seasons · Taj · Grand Hyatt' },
              { value: '7,000+', label: 'Senior leaders reached' },
              { value: '#1 worldwide', label: 'Condé Nast (Taj Maldives)' }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="metric transition-all duration-700"
                style={{
                  borderTop: '1px solid rgba(10, 10, 10, 0.06)',
                  paddingTop: '16px',
                  opacity: isVisible(3) ? 1 : 0,
                  transitionDelay: `${600 + idx * 100}ms`
                }}
              >
                <p className="metric-value" style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px'
                }}>
                  {metric.value}
                </p>
                <p className="metric-label" style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)'
                }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <p
            className="client-quote transition-all duration-700"
            style={{
              fontSize: '20px',
              fontStyle: 'italic',
              color: '#0A0A0A',
              lineHeight: 1.45,
              marginBottom: '8px',
              maxWidth: '480px',
              opacity: isVisible(3) ? 1 : 0,
              transitionDelay: '800ms'
            }}
          >
            "The Golden Rule still wins."
          </p>
          <p
            className="client-attribution transition-all duration-700"
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: '#FF2E63',
              marginBottom: '32px',
              opacity: isVisible(3) ? 1 : 0,
              transitionDelay: '800ms'
            }}
          >
            — Girish Sehgal, Chief Patient Experience Officer, SSMC
          </p>

          {/* Link */}
          <Link
            href="/clients/girish-sehgal"
            className="client-link"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#0A0A0A',
              textDecoration: 'none',
              position: 'relative',
              paddingBottom: '2px',
              display: 'inline-block'
            }}
          >
            See Girish's Work →
          </Link>
        </div>
      </section>

      {/* SECTION 5: JUAN PABLO ROMERO — Text LEFT, Photo RIGHT (FLIPPED) */}
      <section
        ref={(el) => { sectionsRef.current[4] = el; }}
        className="client-spread client-spread--flipped"
        style={{
          display: 'grid',
          gridTemplateColumns: '55% 45%',
          gap: '64px',
          padding: '100px 80px',
          borderBottom: '1px solid rgba(10, 10, 10, 0.06)',
          alignItems: 'center'
        }}
      >
        {/* Content (order 1) */}
        <div className="client-content" style={{ order: 1 }}>
          <div
            className="client-label transition-all duration-700"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgba(10, 10, 10, 0.35)',
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '12px',
              opacity: isVisible(4) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          >
            <span>JURA PLANK — LUXURY FLOORING</span>
            <span className="client-number" style={{ color: 'rgba(10, 10, 10, 0.15)' }}>04</span>
          </div>

          <div
            className="client-red-line transition-all duration-700"
            style={{
              width: '48px',
              height: '3px',
              background: '#FF2E63',
              marginBottom: '32px',
              opacity: isVisible(4) ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />

          <h2
            className="client-headline transition-all duration-700"
            style={{
              fontSize: 'clamp(24px, 2.5vw, 32px)',
              fontWeight: 600,
              color: '#0A0A0A',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
              opacity: isVisible(4) ? 1 : 0,
              transform: isVisible(4) ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '300ms'
            }}
          >
            From family craft to architect specification.
          </h2>

          <p
            className="client-body transition-all duration-700"
            style={{
              fontSize: '17px',
              fontWeight: 400,
              color: 'rgba(10, 10, 10, 0.6)',
              lineHeight: 1.65,
              maxWidth: '520px',
              marginBottom: '40px',
              opacity: isVisible(4) ? 1 : 0,
              transitionDelay: '500ms'
            }}
          >
            Canadian hardwood. Luxury spec. Three generations of craft. But American architects had never heard of them. We built the narrative, brand, and website for JURA Plank — and Connecting the Dots, his US market consulting practice for international companies.
          </p>

          {/* Metrics */}
          <div
            className="client-metrics"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {[
              { value: 'Brand + website', label: 'Built from zero' },
              { value: 'US market entry', label: 'Strategic positioning' }
            ].map((metric, idx) => (
              <div
                key={idx}
                className="metric transition-all duration-700"
                style={{
                  borderTop: '1px solid rgba(10, 10, 10, 0.06)',
                  paddingTop: '16px',
                  opacity: isVisible(4) ? 1 : 0,
                  transitionDelay: `${600 + idx * 100}ms`
                }}
              >
                <p className="metric-value" style={{
                  fontSize: '28px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  letterSpacing: '-0.02em',
                  marginBottom: '4px'
                }}>
                  {metric.value}
                </p>
                <p className="metric-label" style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.35)'
                }}>
                  {metric.label}
                </p>
              </div>
            ))}
          </div>

          {/* Link (no quote for JP) */}
          <Link
            href="/clients/juan-pablo-romero"
            className="client-link"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              color: '#0A0A0A',
              textDecoration: 'none',
              position: 'relative',
              paddingBottom: '2px',
              display: 'inline-block',
              marginTop: '32px'
            }}
          >
            See Juan Pablo's Work →
          </Link>
        </div>

        {/* Photo (order 2) */}
        <div
          className="client-photo transition-all duration-800"
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            overflow: 'hidden',
            order: 2,
            opacity: isVisible(4) ? 1 : 0,
            transform: isVisible(4) ? 'scale(1)' : 'scale(1.03)'
          }}
        >
          <img
            src={juanPabloPhoto.src}
            alt="Juan Pablo Romero"
            className="client-photo-img"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 20%',
              filter: 'grayscale(100%) contrast(1.05)',
              transition: 'filter 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          />
        </div>
      </section>

      {/* SECTION 6: CONFIDENTIAL — Text-only, no photo */}
      <section
        ref={(el) => { sectionsRef.current[5] = el; }}
        className="client-spread--text-only"
        style={{
          padding: '80px',
          borderBottom: '1px solid rgba(10, 10, 10, 0.06)',
          maxWidth: '700px'
        }}
      >
        <div
          className="client-label transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.35)',
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '12px',
            opacity: isVisible(5) ? 1 : 0,
            transitionDelay: '200ms'
          }}
        >
          <span>RETAIL — DUBAI</span>
          <span className="client-number" style={{ color: 'rgba(10, 10, 10, 0.15)' }}>05</span>
        </div>

        <div
          className="client-red-line transition-all duration-700"
          style={{
            width: '48px',
            height: '3px',
            background: '#FF2E63',
            marginBottom: '32px',
            opacity: isVisible(5) ? 1 : 0,
            transitionDelay: '200ms'
          }}
        />

        <h2
          className="client-headline transition-all duration-700"
          style={{
            fontSize: 'clamp(24px, 2.5vw, 32px)',
            fontWeight: 600,
            color: '#0A0A0A',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '20px',
            opacity: isVisible(5) ? 1 : 0,
            transform: isVisible(5) ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          Strategic positioning under NDA.
        </h2>

        <p
          className="client-body transition-all duration-700"
          style={{
            fontSize: '17px',
            fontWeight: 400,
            color: 'rgba(10, 10, 10, 0.6)',
            lineHeight: 1.65,
            marginBottom: '32px',
            opacity: isVisible(5) ? 1 : 0,
            transitionDelay: '500ms'
          }}
        >
          Second-time founder. $500M+ revenue. Narrative strategy for a retail holding company across the Middle East. Some work can't be shown. The impact still travels.
        </p>

        <Link
          href="/contact"
          className="client-link"
          style={{
            fontSize: '16px',
            fontWeight: 500,
            color: '#0A0A0A',
            textDecoration: 'none',
            position: 'relative',
            paddingBottom: '2px',
            display: 'inline-block'
          }}
        >
          Request introduction →
        </Link>
      </section>

      {/* SECTION 7: CTA */}
      <section
        ref={(el) => { sectionsRef.current[6] = el; }}
        style={{
          backgroundColor: '#0A0A0A',
          padding: '120px 80px',
          textAlign: 'center'
        }}
      >
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: 'clamp(36px, 4vw, 48px)',
            fontWeight: 600,
            color: '#FFFFFF',
            marginBottom: '40px',
            opacity: isVisible(6) ? 1 : 0,
            transform: isVisible(6) ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Ready when you are.
        </h2>

        <Link
          href="/contact"
          className="cta-button"
          style={{
            display: 'inline-block',
            padding: '18px 28px',
            backgroundColor: '#FFFFFF',
            color: '#0A0A0A',
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            borderRadius: '0',
            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            opacity: isVisible(6) ? 1 : 0,
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FF2E63';
            e.currentTarget.style.color = '#FFFFFF';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#FFFFFF';
            e.currentTarget.style.color = '#0A0A0A';
          }}
        >
          Book a Discovery Call →
        </Link>
      </section>

      {/* Styles */}
      <style>{`
        .client-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #FF2E63;
          transition: width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .client-link:hover::after {
          width: 100%;
        }

        .client-spread:hover .client-photo-img {
          filter: grayscale(0%);
        }

        @media (max-width: 768px) {
          .client-spread,
          .client-spread--flipped {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 24px !important;
          }

          .client-spread .client-photo,
          .client-spread--flipped .client-photo {
            order: -1 !important;
            aspect-ratio: 4 / 5 !important;
          }

          .client-spread .client-content,
          .client-spread--flipped .client-content {
            order: 1 !important;
          }

          .client-metrics {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .client-spread--text-only {
            padding: 60px 24px !important;
          }

          section:first-of-type {
            padding: 120px 24px 60px !important;
          }

          section:last-of-type {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </>
  );
};

export default WorkContent;
