'use client';

import { useEffect, useRef } from 'react';
import franPhoto from '@/assets/fran-portrait-new.png';
import michaelPhoto from '@/assets/michael-choi-pugliano-new.png';
import nataliaPhoto from '@/assets/natalia-dmitrieva.jpg';
import isabellaPhoto from '@/assets/isabella-marinelli.png';
import abrilPhoto from '@/assets/abril-lovasolo.jpg';

// ─── TEAM DATA ───
interface TeamMemberData {
  number: string;
  name: string;
  role: string;
  bio: string[];
  flipped: boolean;
  logoTags?: string[];
  photoNote: string;
  photo?: string;
}

const teamMembers: TeamMemberData[] = [
  {
    number: '01',
    name: 'Fran',
    role: 'Founder',
    flipped: false,
    bio: [
      "Small town in northern Argentina. No degree. First real job at 17 producing events for 600 people \u2014 pure conviction and street. By 19, sleeping on couches in Buenos Aires, betting everything on being in the right room at the right time.",
      "Then came the corporations \u2014 Fortune 500, startups, venture capital, hospitality, construction, architecture. Latin America, the US, Europe, the Middle East. Every world had its own rules. And in every one, the lesson was the same: the people who build the most struggle the hardest to explain why it matters.",
      "That gap isn\u2019t theory. It\u2019s the story of every immigrant, every founder, every builder who knows exactly who they are \u2014 but the words don\u2019t travel. Now I help close it."
    ],
    logoTags: ['TikTok', 'Mondelez', 'Nestl\u00e9', 'United Nations', 'DeliveryHero', 'AB InBev'],
    photoNote: 'New photo needed \u2014 strategist, not YouTuber',
    photo: franPhoto.src
  },
  {
    number: '02',
    name: 'Michael',
    role: 'Creative Director',
    flipped: true,
    bio: [
      "A decade of brand and creative leadership in tech and gaming. In-house and agency side. The person who\u2019s been in the room when the brief arrives and still there when the work ships.",
      "Content that creates affinity \u2014 the kind that lasts longer than a campaign. Michael doesn\u2019t decorate brands. He gives them a voice worth listening to."
    ],
    logoTags: ['Amazon', 'Twitch', 'EA', 'Facebook', 'Oculus', 'LucasArts', 'Marvel'],
    photoNote: 'New photo needed',
    photo: michaelPhoto.src
  },
  {
    number: '03',
    name: 'Bryan',
    role: 'Film Director',
    flipped: false,
    bio: [
      "A surfer who found his way behind the camera. Over a decade directing stories for retail brands \u2014 leading marketing teams at O\u2019Neill Peru, bridging film, e-commerce, and the kind of content that makes people stop scrolling and actually feel something.",
      "Bryan doesn\u2019t shoot content. He captures the work the way it deserves to be seen \u2014 with the patience of someone who\u2019s spent years waiting for the right wave."
    ],
    photoNote: 'Bryan photo',
    photo: undefined
  },
  {
    number: '04',
    name: 'Natalia',
    role: 'Business Strategist',
    flipped: true,
    bio: [
      "Enterprise pharma. Eight years in Spain. Real estate across Russia and UAE. 35 countries. Three languages fluent. Then she quit the corporate ladder.",
      "Cat lover. Compulsive traveler. The kind of person who reads a room before anyone speaks. Her core skill is intuition \u2014 she\u2019s the coach who helps the team show up at their best.",
      "Natalia keeps the work moving so the story can land."
    ],
    photoNote: 'Natalia photo',
    photo: nataliaPhoto.src
  },
  {
    number: '05',
    name: 'Isabella',
    role: 'Digital Strategist',
    flipped: false,
    bio: [
      "Platform-native thinking across LinkedIn, Instagram, and emerging channels. Isabella translates narrative strategy into content systems that compound \u2014 not campaigns that expire."
    ],
    photoNote: 'Isabella photo',
    photo: isabellaPhoto.src
  },
  {
    number: '06',
    name: 'Abril',
    role: 'Narrative Strategist',
    flipped: true,
    bio: [
      "Marketing degree. Buenos Aires \u2192 Bangkok \u2192 Mexico City. Built Aftertaste \u2014 a newsletter dissecting culture, fashion, art, and the content that lingers. 500K+ views. Not by explaining. By provoking.",
      "Abril doesn\u2019t want you to nod along. She wants you to leave with something stuck in your head."
    ],
    photoNote: 'Abril photo',
    photo: abrilPhoto.src
  }
];

// ─── SCROLL REVEAL HOOK (for multiple elements) ───
function useRevealObserver() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      container.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    container.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}

// ─── MAIN COMPONENT ───
export default function AboutContent() {
  const containerRef = useRevealObserver();

  return (
    <div ref={containerRef as React.RefObject<HTMLDivElement>} className="about-redesign">
      <HeroSection />
      <PhilosophySection />
      <EtymologySection />
      <TeamHeaderSection />
      {teamMembers.map(member => (
        <TeamMemberSpread key={member.number} member={member} />
      ))}
      <ValuesSection />
      <CTASection />
      <FooterSection />

      <style>{aboutStyles}</style>
    </div>
  );
}

// ─── SECTION 1: HERO ───
function HeroSection() {
  return (
    <section className="about-hero">
      <div className="about-hero-left">
        <div className="about-hero-label">About</div>
        <h1 className="about-hero-headline">
          Trust moved.<br />
          <em>We followed.</em>
        </h1>
        <p className="about-hero-body">
          It used to live in institutions &mdash; media, government, corporations. That&apos;s over. Now trust moves person to person. Your clients don&apos;t buy your company. They buy you. Your story. Your voice. Your struggle.
        </p>
      </div>
      <div className="about-hero-right">
        <blockquote className="about-hero-pull-quote">
          Most founders have spent decades building expertise &mdash; not explaining&nbsp;it.
          <br /><br />
          That gap is where we live.
        </blockquote>
      </div>
    </section>
  );
}

// ─── SECTION 2: PHILOSOPHY ───
function PhilosophySection() {
  return (
    <section className="about-philosophy">
      <div className="about-philosophy-label reveal">Philosophy</div>
      <div className="about-philosophy-content">
        <h2 className="about-philosophy-headline reveal">
          The best work doesn&apos;t come from adding. It comes from stripping away.
        </h2>
        <p className="about-philosophy-text reveal reveal-delay-1">
          Rick Rubin taught us that the only thing worth keeping is what&apos;s essential. We don&apos;t layer on marketing. We don&apos;t invent a story for you. We find the one that&apos;s already there &mdash; the pattern inside your work, your decisions, your life &mdash; and we make it travel.
        </p>
        <div className="about-philosophy-quote reveal reveal-delay-2">
          &ldquo;The personal is universal.&rdquo;
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 3: ETYMOLOGY ───
function EtymologySection() {
  return (
    <section className="about-etymology">
      <div className="about-etymology-word reveal">Cruda</div>
      <div className="about-etymology-text">
        <h3 className="reveal">Raw, in Spanish.</h3>
        <p className="reveal reveal-delay-1">
          The story before it&apos;s been shaped. Before the agency polished it. Before the consultant diluted it. Before the committee killed it.
        </p>
        <p className="reveal reveal-delay-2">
          <strong>We don&apos;t create from nothing. We find what&apos;s already there.</strong>
        </p>
      </div>
    </section>
  );
}

// ─── SECTION 4: TEAM HEADER ───
function TeamHeaderSection() {
  return (
    <section className="about-team-header">
      <div className="about-team-header-label reveal">The Team</div>
      <div className="about-team-header-content">
        <h2 className="about-team-header-headline reveal">
          Lean by design.<br />Senior by default.
        </h2>
        <p className="about-team-header-sub reveal reveal-delay-1">
          No account managers. No junior handoffs. Every person on this page touches your work directly.
        </p>
      </div>
    </section>
  );
}

// ─── SECTION 5: TEAM MEMBER SPREAD ───
function TeamMemberSpread({ member }: { member: TeamMemberData }) {
  return (
    <section className={`about-team-member ${member.flipped ? 'flipped' : ''}`}>
      <div className="about-team-photo">
        {member.photo ? (
          <img src={member.photo} alt={member.name} />
        ) : (
          <div className="about-team-photo-placeholder">
            <span className="placeholder-initial">{member.name.charAt(0)}</span>
            <span className="placeholder-label">Photo coming soon</span>
          </div>
        )}
      </div>
      <div className="about-team-bio">
        <div className="about-team-number">{member.number}</div>
        <h3 className="about-team-name">{member.name}</h3>
        <div className="about-team-role">{member.role}</div>
        <div className="about-team-bio-text">
          {member.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        {member.logoTags && member.logoTags.length > 0 && (
          <div className="about-team-logos">
            {member.logoTags.map(tag => (
              <span key={tag} className="about-team-logo-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── SECTION 6: VALUES / HOW WE WORK ───
function ValuesSection() {
  return (
    <section className="about-values">
      <div className="about-values-label reveal">How We Work</div>
      <div className="about-values-content">
        <div className="about-value-item reveal">
          <h4>No handoffs.</h4>
          <p>The person you talk to is the person doing the work. Strategy and execution, same hands.</p>
        </div>
        <div className="about-value-item reveal reveal-delay-1">
          <h4>No templates.</h4>
          <p>Every narrative is built from scratch. Your story isn&apos;t a fill-in-the-blank exercise.</p>
        </div>
        <div className="about-value-item reveal reveal-delay-2">
          <h4>No busywork.</h4>
          <p>We don&apos;t create content to fill a calendar. Everything serves the narrative or it doesn&apos;t exist.</p>
        </div>
      </div>
    </section>
  );
}

// ─── SECTION 7: CTA ───
function CTASection() {
  return (
    <section className="about-cta-section">
      <h2 className="about-cta-headline reveal">
        The work speaks for itself.<br />
        <em>Let&apos;s make sure it travels.</em>
      </h2>
      <p className="about-cta-sub reveal reveal-delay-1">
        Book a discovery call. We&apos;ll figure out if there&apos;s a fit.
      </p>
      <a
        href="/contact"
        className="about-btn-cta reveal reveal-delay-2"
      >
        Book a Discovery Call <span>&rarr;</span>
      </a>
    </section>
  );
}

// ─── SECTION 8: FOOTER ───
function FooterSection() {
  return (
    <footer className="about-footer">
      <span>&copy; 2026 CRUDA</span>
      <a href="mailto:hello@thecruda.com">hello@thecruda.com</a>
    </footer>
  );
}

// ─── ALL STYLES ───
const aboutStyles = `
  /* ─── RESET FOR ABOUT PAGE ─── */
  .about-redesign {
    font-family: 'Instrument Sans', -apple-system, sans-serif;
    color: #0A0A0A;
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased;
  }

  /* ─── HERO ─── */
  .about-hero {
    padding: 200px 48px 120px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: end;
    min-height: 85vh;
    position: relative;
  }
  .about-hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 48px;
    right: 48px;
    height: 1px;
    background: rgba(10,10,10,0.08);
  }
  .about-hero-left {
    max-width: 560px;
  }
  .about-hero-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #FF2E63;
    margin-bottom: 40px;
    opacity: 0;
    transform: translateY(12px);
    animation: aboutFadeUp 0.6s 0.2s forwards;
  }
  .about-hero-headline {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 72px;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.02em;
    color: #0A0A0A;
    margin-bottom: 48px;
    opacity: 0;
    transform: translateY(20px);
    animation: aboutFadeUp 0.8s 0.3s forwards;
  }
  .about-hero-headline em {
    font-style: italic;
    color: #FF2E63;
  }
  .about-hero-body {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    color: rgba(10,10,10,0.5);
    max-width: 440px;
    opacity: 0;
    transform: translateY(16px);
    animation: aboutFadeUp 0.7s 0.5s forwards;
  }
  .about-hero-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
  }
  .about-hero-pull-quote {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 28px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.45;
    color: rgba(10,10,10,0.3);
    text-align: right;
    max-width: 400px;
    padding-right: 32px;
    border-right: 3px solid #FF2E63;
    opacity: 0;
    transform: translateX(20px);
    animation: aboutFadeLeft 0.8s 0.6s forwards;
  }

  /* ─── PHILOSOPHY ─── */
  .about-philosophy {
    padding: 160px 48px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 120px;
    position: relative;
  }
  .about-philosophy::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 48px;
    right: 48px;
    height: 1px;
    background: rgba(10,10,10,0.08);
  }
  .about-philosophy-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.3);
    padding-top: 8px;
  }
  .about-philosophy-content {
    max-width: 680px;
  }
  .about-philosophy-headline {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 44px;
    font-weight: 400;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #0A0A0A;
    margin-bottom: 48px;
  }
  .about-philosophy-text {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    color: rgba(10,10,10,0.5);
    margin-bottom: 32px;
  }
  .about-philosophy-quote {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 32px;
    font-style: italic;
    font-weight: 400;
    line-height: 1.35;
    color: #0A0A0A;
    margin-top: 56px;
    padding-left: 32px;
    border-left: 3px solid #FF2E63;
  }

  /* ─── ETYMOLOGY ─── */
  .about-etymology {
    padding: 120px 48px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
  }
  .about-etymology::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 48px;
    right: 48px;
    height: 1px;
    background: rgba(10,10,10,0.08);
  }
  .about-etymology-word {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 120px;
    font-weight: 400;
    font-style: italic;
    letter-spacing: -0.03em;
    color: rgba(10,10,10,0.15);
    line-height: 1;
    text-align: right;
    user-select: none;
  }
  .about-etymology-text h3 {
    font-family: 'Instrument Sans', -apple-system, sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #0A0A0A;
    margin-bottom: 20px;
  }
  .about-etymology-text p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    color: rgba(10,10,10,0.5);
    margin-bottom: 16px;
  }
  .about-etymology-text p strong {
    color: #0A0A0A;
    font-weight: 600;
  }

  /* ─── TEAM HEADER ─── */
  .about-team-header {
    padding: 120px 48px 80px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 120px;
  }
  .about-team-header-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #FF2E63;
    padding-top: 8px;
  }
  .about-team-header-content {
    max-width: 600px;
  }
  .about-team-header-headline {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 52px;
    font-weight: 400;
    line-height: 1.15;
    letter-spacing: -0.01em;
    color: #0A0A0A;
    margin-bottom: 24px;
  }
  .about-team-header-sub {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
    color: rgba(10,10,10,0.5);
  }

  /* ─── TEAM EDITORIAL SPREADS ─── */
  .about-team-member {
    display: grid;
    grid-template-columns: 45% 55%;
    gap: 0;
    min-height: 80vh;
    border-top: 1px solid rgba(10,10,10,0.08);
  }
  .about-team-member.flipped {
    grid-template-columns: 55% 45%;
  }
  .about-team-member.flipped .about-team-photo { order: 2; }
  .about-team-member.flipped .about-team-bio { order: 1; }
  .about-team-photo {
    position: relative;
    overflow: hidden;
    background: #f0f0f0;
    min-height: 600px;
    max-height: 700px;
  }
  .about-team-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: grayscale(100%);
    transition: filter 0.6s ease;
  }
  .about-team-member:hover .about-team-photo img {
    filter: grayscale(0%);
  }
  .about-team-photo-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(160deg, #1a1a1a 0%, #0A0A0A 100%);
    gap: 16px;
  }
  .placeholder-initial {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 120px;
    font-weight: 400;
    font-style: italic;
    color: rgba(255,255,255,0.06);
    line-height: 1;
    user-select: none;
  }
  .placeholder-label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.2);
  }
  .about-team-bio {
    padding: 80px 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .about-team-number {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: rgba(10,10,10,0.3);
    margin-bottom: 24px;
  }
  .about-team-name {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 48px;
    font-weight: 400;
    line-height: 1.1;
    letter-spacing: -0.01em;
    color: #0A0A0A;
    margin-bottom: 8px;
  }
  .about-team-role {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #FF2E63;
    margin-bottom: 40px;
  }
  .about-team-bio-text {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.75;
    color: rgba(10,10,10,0.7);
    max-width: 480px;
  }
  .about-team-bio-text p {
    margin-bottom: 20px;
  }
  .about-team-bio-text p:last-child {
    margin-bottom: 0;
  }
  .about-team-logos {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 32px;
  }
  .about-team-logo-tag {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.3);
    padding: 6px 12px;
    border: 1px solid rgba(10,10,10,0.08);
  }

  /* ─── VALUES / HOW WE WORK ─── */
  .about-values {
    padding: 140px 48px;
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 120px;
    border-top: 1px solid rgba(10,10,10,0.08);
    position: relative;
  }
  .about-values-label {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(10,10,10,0.3);
    padding-top: 8px;
  }
  .about-values-content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 64px;
  }
  .about-value-item h4 {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 28px;
    font-weight: 400;
    color: #0A0A0A;
    margin-bottom: 16px;
    line-height: 1.2;
  }
  .about-value-item p {
    font-size: 15px;
    line-height: 1.7;
    color: rgba(10,10,10,0.5);
  }

  /* ─── CTA ─── */
  .about-cta-section {
    background: #0A0A0A;
    padding: 140px 48px;
    text-align: center;
  }
  .about-cta-headline {
    font-family: 'EB Garamond', Georgia, serif;
    font-size: 56px;
    font-weight: 400;
    line-height: 1.15;
    color: #FFFFFF;
    margin-bottom: 16px;
  }
  .about-cta-headline em {
    color: #FF2E63;
    font-style: italic;
  }
  .about-cta-sub {
    font-size: 17px;
    color: rgba(255,255,255,0.4);
    margin-bottom: 48px;
    line-height: 1.6;
  }
  .about-btn-cta {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    background: #FF2E63;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 600;
    padding: 20px 36px;
    border: none;
    text-decoration: none;
    transition: all 0.2s;
    cursor: pointer;
    border-radius: 0;
  }
  .about-btn-cta:hover {
    background: #ff4a7a;
    transform: translateY(-1px);
  }
  .about-btn-cta span {
    transition: transform 0.2s;
  }
  .about-btn-cta:hover span {
    transform: translateX(4px);
  }

  /* ─── FOOTER ─── */
  .about-footer {
    background: #0A0A0A;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 40px 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .about-footer span {
    font-size: 12px;
    color: rgba(255,255,255,0.25);
    letter-spacing: 0.05em;
  }
  .about-footer a {
    font-size: 12px;
    color: rgba(255,255,255,0.25);
    text-decoration: none;
    transition: color 0.2s;
  }
  .about-footer a:hover {
    color: rgba(255,255,255,0.5);
  }

  /* ─── ANIMATIONS ─── */
  @keyframes aboutFadeUp {
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes aboutFadeLeft {
    to { opacity: 1; transform: translateX(0); }
  }

  .about-redesign .reveal {
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94),
                transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  .about-redesign .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .about-redesign .reveal-delay-1 { transition-delay: 0.1s; }
  .about-redesign .reveal-delay-2 { transition-delay: 0.2s; }
  .about-redesign .reveal-delay-3 { transition-delay: 0.3s; }

  /* ─── RESPONSIVE: TABLET ─── */
  @media (max-width: 1024px) {
    .about-hero {
      grid-template-columns: 1fr;
      gap: 48px;
      padding: 160px 32px 80px;
      min-height: auto;
    }
    .about-hero-right { align-items: flex-start; }
    .about-hero-pull-quote {
      text-align: left;
      border-right: none;
      border-left: 3px solid #FF2E63;
      padding-right: 0;
      padding-left: 32px;
    }
    .about-hero-headline { font-size: 52px; }
    .about-philosophy {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 100px 32px;
    }
    .about-etymology {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 80px 32px;
    }
    .about-etymology-word { text-align: left; font-size: 80px; }
    .about-team-header {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 80px 32px 48px;
    }
    .about-team-member,
    .about-team-member.flipped {
      grid-template-columns: 1fr;
      min-height: auto;
    }
    .about-team-member.flipped .about-team-photo { order: 1; }
    .about-team-member.flipped .about-team-bio { order: 2; }
    .about-team-photo { min-height: 350px; max-height: 450px; }
    .about-team-bio { padding: 48px 32px; }
    .about-values {
      grid-template-columns: 1fr;
      gap: 40px;
      padding: 80px 32px;
    }
    .about-values-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .about-cta-headline { font-size: 40px; }
    .about-cta-section { padding: 100px 32px; }
    .about-footer { padding: 32px; }
  }

  /* ─── RESPONSIVE: MOBILE ─── */
  @media (max-width: 640px) {
    .about-hero-headline { font-size: 38px; }
    .about-philosophy-headline { font-size: 32px; }
    .about-team-name { font-size: 36px; }
    .about-etymology-word { font-size: 56px; }
    .about-cta-headline { font-size: 32px; }
    .about-hero { padding: 140px 24px 60px; }
    .about-philosophy { padding: 80px 24px; }
    .about-etymology { padding: 60px 24px; }
    .about-team-header { padding: 60px 24px 40px; }
    .about-team-bio { padding: 40px 24px; }
    .about-values { padding: 60px 24px; }
    .about-cta-section { padding: 80px 24px; }
    .about-footer { padding: 24px; }
  }
`;
