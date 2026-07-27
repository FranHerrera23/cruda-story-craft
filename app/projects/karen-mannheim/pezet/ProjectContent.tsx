'use client'

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import pezetHero from "@/assets/pezet-interior.jpg";
import pezet01 from "@/assets/pezet-01-entrance.png";
import pezet02 from "@/assets/pezet-02-entrance.png";
import pezet04 from "@/assets/pezet-04-pool-interior.jpg";
import pezet05 from "@/assets/pezet-05-context-skyline.jpg";
import pezet06 from "@/assets/pezet-06-exterior-courtyard.jpg";
import pezet08 from "@/assets/pezet-08-lobby-interior.jpg";
import linkedinPost01 from "@/assets/pezet-linkedin-01.png";
import linkedinPost02 from "@/assets/pezet-linkedin-02.png";
import linkedinPost03 from "@/assets/pezet-linkedin-03.png";
import linkedinPost04 from "@/assets/pezet-linkedin-04.png";

const KarenPezetProject = () => {
  const linkedinPosts = [
    { image: linkedinPost01, url: 'https://www.linkedin.com/posts/karen-mannheim_ramsa-robertstern-eurodisney-activity-7141170916553547776-B4xp', title: 'Working alongside RAMSA' },
    { image: linkedinPost02, url: 'https://www.linkedin.com/posts/karen-mannheim_en-demasiados-proyectos-la-iluminaci%C3%B3n-sigue-activity-7367225955846729729-jvUQ', title: 'Lighting design at PEZET' },
    { image: linkedinPost03, url: 'https://www.linkedin.com/posts/karen-mannheim_ramsa-activity-7363957075065872385-WS6x', title: 'Designing for RAMSA' },
    { image: linkedinPost04, url: 'https://www.linkedin.com/posts/karen-mannheim_lightingdesign-pezet3-ramsa-activity-7330283319571460096-04bu', title: 'PEZET 3 project reveal' }
  ];

  const strategyCards = [
    { number: '01', title: 'Content strategy', description: 'Process documentation showing what RAMSA-level projects require.' },
    { number: '02', title: 'Pitch decks', description: 'RAMSA partnership as lead credential. Instant recognition.' },
    { number: '03', title: 'Conference positioning', description: 'Authority established before Karen says a word.' },
    { number: '04', title: 'Educational content', description: 'Posts explaining RAMSA-level standards, not ego.' },
    { number: '05', title: 'Repetition as strategy', description: 'Every touchpoint reinforced the RAMSA pairing.' }
  ];

  const galleryImages = [
    { src: pezet05, caption: 'PEZET in Lima skyline' },
    { src: pezet01, caption: 'PEZET 1 entrance' },
    { src: pezet02, caption: 'PEZET 2 entrance' },
    { src: pezet04, caption: 'Pool interior' },
    { src: pezet06, caption: 'Exterior courtyard' }
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* SECTION 1: HERO */}
      <section
        className="relative flex items-end"
        style={{
          height: '70vh',
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent 60%), url(${pezetHero.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Back Link */}
        <div className="absolute top-6 left-6 md:left-20">
          <Link
            href="/clients/karen-mannheim#projects"
            className="inline-flex items-center gap-2 transition-colors duration-300 group"
            style={{ fontSize: '14px', color: '#FFFFFF' }}
          >
            <ArrowLeft className="w-4 h-4 group-hover:opacity-70" />
            <span className="group-hover:opacity-70">Back to Karen's Story</span>
          </Link>
        </div>

        <div className="px-6 md:px-20 pb-12">
          <h1
            className="font-semibold mb-2"
            style={{
              fontSize: 'clamp(42px, 6vw, 56px)',
              color: '#FFFFFF',
              lineHeight: 1.1,
              letterSpacing: '-0.02em'
            }}
          >
            PEZET
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)' }}>
            Lima, Peru · 2020-2023
          </p>
        </div>
      </section>

      {/* SECTION 2: THE SNAPSHOT - Two Columns */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left: THE PROJECT */}
            <div>
              <p className="mb-6" style={{ fontSize: '13px', color: '#E8623A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                The Project
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Three residential towers facing Lima Golf Club. PEZET 1 (2018), PEZET 2 (2022), PEZET 3 (2025).
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Robert A.M. Stern Architects — the firm behind 15 Central Park West, Four Seasons New York, Harvard Law School.
                </p>
              </div>
            </div>

            {/* Right: THE CHALLENGE */}
            <div>
              <p className="mb-6" style={{ fontSize: '13px', color: '#E8623A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
                The Challenge
              </p>
              <div className="space-y-4">
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  Karen had the projects. She had the portfolio.
                </p>
                <p style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A' }}>
                  What she didn't have: a way to show Miami developers what working with RAMSA meant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FULL-BLEED IMAGE DIVIDER */}
      <section
        className="w-full"
        style={{
          height: '50vh',
          backgroundImage: `url(${pezet05.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />

      {/* SECTION 4: THE CONTENT IN ACTION */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-[1200px] mx-auto">
          <h2 className="mb-12" style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.2 }}>
            The content in action
          </h2>

          {/* LinkedIn Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {linkedinPosts.map((post, index) => (
              <a
                key={index}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12px',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  overflow: 'hidden'
                }}
              >
                <img
                  src={post.image.src}
                  alt={post.title}
                  className="w-full"
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-sm font-medium" style={{ color: '#E8623A' }}>
                    View on LinkedIn →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: HOW WE TOLD THIS STORY - Strategy Cards */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-[1000px] mx-auto">
          <p className="mb-6" style={{ fontSize: '13px', color: '#E8623A', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>
            How we told this story
          </p>

          <p className="mb-12" style={{ fontSize: '20px', lineHeight: 1.7, color: '#0A0A0A', maxWidth: '600px' }}>
            We framed PEZET around partnership. What does it take to work with Robert A.M. Stern Architects three times over seven years?
          </p>

          {/* Strategy Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strategyCards.map((card, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#F5F1E8',
                  padding: '32px',
                  borderRadius: '4px'
                }}
              >
                <p style={{ fontSize: '14px', color: '#E8623A', fontWeight: 600, marginBottom: '16px' }}>
                  {card.number}
                </p>
                <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#0A0A0A', marginBottom: '12px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '16px', lineHeight: 1.6, color: 'rgba(10, 10, 10, 0.6)' }}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: IMAGE GALLERY */}
      <section className="py-20 md:py-28 px-6 md:px-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-[1200px] mx-auto">
          {/* Large hero image */}
          <img
            src={galleryImages[0].src.src}
            alt={galleryImages[0].caption}
            className="w-full mb-8"
            style={{ borderRadius: '8px', aspectRatio: '16/9', objectFit: 'cover' }}
          />

          {/* Three smaller images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.slice(1, 4).map((img, index) => (
              <img
                key={index}
                src={img.src.src}
                alt={img.caption}
                className="w-full"
                style={{ borderRadius: '8px', aspectRatio: '4/3', objectFit: 'cover' }}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-20 md:py-28 px-6 md:px-20 text-center" style={{ backgroundColor: '#F5F1E8' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8" style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 600, color: '#0A0A0A', lineHeight: 1.2 }}>
            See more of Karen's work
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/clients/karen-mannheim#projects"
              className="inline-block px-10 py-4 font-semibold transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', borderRadius: '4px', fontSize: '16px' }}
            >
              ← Back to Karen's Page
            </Link>
            <Link
              href="https://calendly.com/cruda-intro/narrative-sparring-live-1" target="_blank" rel="noopener"
              className="inline-block px-10 py-4 font-semibold transition-all duration-300"
              style={{ backgroundColor: 'transparent', color: '#0A0A0A', borderRadius: '4px', fontSize: '16px', border: '2px solid #0A0A0A' }}
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KarenPezetProject;
