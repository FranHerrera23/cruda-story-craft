'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import franPortrait from '@/assets/fran-portrait-new.png';
import michaelPortrait from '@/assets/michael-choi-pugliano.jpg';
import nataliaPortrait from '@/assets/natalia-dmitrieva.jpg';
import abrilPortrait from '@/assets/abril-lovasolo.jpg';
import isabellaPortrait from '@/assets/isabella-marinelli.png';

interface TeamMemberData {
  id: string;
  name: string;
  displayName: string;
  title: string;
  image: string;
  bio: string[];
}

const teamMembers: TeamMemberData[] = [
  {
    id: 'fran',
    name: 'FRAN HERRERA',
    displayName: 'Fran',
    title: 'Founder',
    image: franPortrait.src,
    bio: [
      "Eight years inside TikTok, Mondelez, Nestlé, the United Nations, DeliveryHero. Three continents. Ten nationalities.",
      "The gap between mastery and articulation isn't theory. It's lived experience.",
      "Every immigrant knows this gap intimately. You know exactly who you are — but the words don't travel.",
      "Now I help founders close that gap."
    ]
  },
  {
    id: 'michael',
    name: 'MICHAEL',
    displayName: 'Michael',
    title: 'Creative Director',
    image: michaelPortrait.src,
    bio: [
      "A decade of brand and creative leadership in tech and gaming. Amazon. Twitch. Electronic Arts. Facebook. Oculus. LucasArts. Marvel. Universal. Hasbro.",
      "In-house and agency side. Content that ships, not decks that sit.",
      "Michael builds brand stories that create affinity — the kind that lasts longer than a campaign."
    ]
  },
  {
    id: 'natali',
    name: 'NATALI',
    displayName: 'Natali',
    title: 'Business Strategist',
    image: nataliaPortrait.src,
    bio: [
      "Pharma sales across GSK, Dr. Reddy's, Lundbeck. Spain. Real estate. 35 countries. Three languages.",
      "Natali's gift isn't strategy in the traditional sense. It's intuition — the ability to feel what people need before they say it.",
      "She knows when something's working. And when it isn't."
    ]
  },
  {
    id: 'isabella',
    name: 'ISABELLA',
    displayName: 'Isabella',
    title: 'Digital Strategist',
    image: isabellaPortrait.src,
    bio: [
      "40+ tech startups across Dubai, Hong Kong, New York, London, Buenos Aires. Multimedia communications background. MBA candidate at SDA Bocconi.",
      "Now based in Puglia, teaching AI and digital marketing strategy when she's not helping founders translate complexity into clarity.",
      "Isabella finds the signal in the noise — then makes sure it travels."
    ]
  },
  {
    id: 'abril',
    name: 'ABRIL',
    displayName: 'Abril',
    title: 'Narrative Strategist',
    image: abrilPortrait.src,
    bio: [
      "Marketing degree. Buenos Aires → Bangkok → Mexico City.",
      "Built Aftertaste — a newsletter dissecting culture, fashion, art, and the content that lingers. 500K+ views. Not by explaining. By provoking.",
      "Abril doesn't want you to nod along. She wants you to leave with something stuck in your head."
    ]
  }
];

export default function AboutContent() {
  return (
    <main className="about-page" style={{ backgroundColor: '#FFFFFF' }}>
      <HeroManifestoSection />
      <PhilosophySection />
      <TeamSection />
      <HowWeWorkPrinciples />
    </main>
  );
}

// SECTION 1: HERO + MANIFESTO (COMBINED)
const HeroManifestoSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className="hero-manifesto-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '160px 80px 100px',
        maxWidth: '900px',
        margin: '0 auto'
      }}
    >
      {/* Headline */}
      <h1
        className="transition-all duration-700"
        style={{
          fontSize: 'clamp(48px, 5vw, 72px)',
          fontWeight: '700',
          lineHeight: '1.0',
          letterSpacing: '-0.03em',
          color: '#0A0A0A',
          marginBottom: '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        TRUST MOVED.
      </h1>

      {/* Red accent line */}
      <div
        className="transition-all duration-500"
        style={{
          width: isVisible ? '48px' : '0px',
          height: '3px',
          background: '#FF2E63',
          marginBottom: '48px'
        }}
      />

      {/* Manifesto - staggered paragraphs */}
      <div style={{ maxWidth: '680px' }}>
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.65',
            color: 'rgba(10, 10, 10, 0.7)',
            marginBottom: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          It used to live in institutions.<br />
          Media. Government. Corporations. The church.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '1.65',
            color: '#0A0A0A',
            marginBottom: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '250ms'
          }}
        >
          That&apos;s over.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.65',
            color: 'rgba(10, 10, 10, 0.7)',
            marginBottom: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms'
          }}
        >
          Now trust moves person to person.<br />
          Your clients don&apos;t buy your company. They buy you.<br />
          Your story. Your voice. Your struggle.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.65',
            color: 'rgba(10, 10, 10, 0.7)',
            marginBottom: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '550ms'
          }}
        >
          But most founders don&apos;t know how to tell it.<br />
          They&apos;ve spent decades building expertise, not explaining it.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '500',
            lineHeight: '1.65',
            color: '#FF2E63',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '700ms'
          }}
        >
          That gap is where we live.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-manifesto-section {
            padding: 120px 24px 80px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 2: PHILOSOPHY (CONDENSED)
const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className="philosophy-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '100px 80px',
        textAlign: 'left'
      }}
    >
      <div style={{ maxWidth: '640px', textAlign: 'left' }}>
        {/* Red line */}
        <div
          className="transition-all duration-500"
          style={{
            width: isVisible ? '48px' : '0px',
            height: '2px',
            background: '#FF2E63',
            marginBottom: '40px'
          }}
        />

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'rgba(10, 10, 10, 0.6)',
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '150ms'
          }}
        >
          Rick Rubin taught us that the best work doesn&apos;t<br />
          come from adding. It comes from stripping away —<br />
          until only what&apos;s essential remains.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '28px',
            fontWeight: '500',
            fontStyle: 'italic',
            color: '#0A0A0A',
            marginBottom: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '300ms'
          }}
        >
          &ldquo;The personal is universal.&rdquo;
        </p>

        {/* Red line */}
        <div
          className="transition-all duration-500"
          style={{
            width: isVisible ? '48px' : '0px',
            height: '2px',
            background: '#FF2E63',
            marginBottom: '32px',
            transitionDelay: '450ms'
          }}
        />

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '1.7',
            color: '#0A0A0A',
            marginBottom: '16px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms'
          }}
        >
          Cruda means raw in Spanish.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'rgba(10, 10, 10, 0.6)',
            marginBottom: '24px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '750ms'
          }}
        >
          The story before it&apos;s been shaped.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'rgba(10, 10, 10, 0.6)',
            marginBottom: '16px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '900ms'
          }}
        >
          We don&apos;t create from nothing.
        </p>

        <p
          className="transition-all duration-700"
          style={{
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '1.7',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '1050ms'
          }}
        >
          We find what&apos;s already there.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .philosophy-section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 4: TEAM — Pentagram-style compact grid with expandable bios
const TeamSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  const [expandedMember, setExpandedMember] = useState<string | null>(null);

  const handleCardClick = (id: string) => {
    setExpandedMember(expandedMember === id ? null : id);
  };

  // Split into rows of 3
  const row1 = teamMembers.slice(0, 3);
  const row2 = teamMembers.slice(3, 5);

  const renderCard = (member: TeamMemberData, index: number) => (
    <div
      key={member.id}
      className="team-card"
      onClick={() => handleCardClick(member.id)}
      style={{
        cursor: 'pointer',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        transitionDelay: `${index * 100}ms`
      }}
    >
      <img
        src={member.image}
        alt={member.displayName}
        className="team-card-photo"
        style={{
          width: '100%',
          aspectRatio: '3 / 4',
          objectFit: 'cover',
          filter: 'grayscale(100%)',
          transition: 'filter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }}
      />
      <div style={{ padding: '20px 0' }}>
        <p style={{
          fontSize: '18px',
          fontWeight: '600',
          color: '#0A0A0A',
          marginBottom: '4px'
        }}>
          {member.displayName}
        </p>
        <p style={{
          fontSize: '14px',
          fontWeight: '400',
          color: 'rgba(10, 10, 10, 0.45)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em'
        }}>
          {member.title}
        </p>
      </div>
    </div>
  );

  const renderExpandedBio = (members: TeamMemberData[]) => {
    const expanded = members.find(m => m.id === expandedMember);
    if (!expanded) return null;

    return (
      <div
        className="team-bio-expanded"
        style={{
          gridColumn: '1 / -1',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '64px',
          padding: '64px 0',
          borderTop: '1px solid rgba(10, 10, 10, 0.08)',
          borderBottom: '1px solid rgba(10, 10, 10, 0.08)',
          animation: 'teamFadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          position: 'relative'
        }}
      >
        <img
          src={expanded.image}
          alt={expanded.displayName}
          style={{
            aspectRatio: '3 / 4',
            objectFit: 'cover',
            width: '100%'
          }}
        />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <p style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(10, 10, 10, 0.4)',
            marginBottom: '8px'
          }}>
            {expanded.name}
          </p>
          <p style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '24px'
          }}>
            {expanded.title}
          </p>
          <div style={{
            width: '48px',
            height: '3px',
            background: '#FF2E63',
            marginBottom: '32px'
          }} />
          <div style={{
            fontSize: '20px',
            fontWeight: '400',
            color: 'rgba(10, 10, 10, 0.7)',
            lineHeight: '1.7',
            maxWidth: '520px'
          }}>
            {expanded.bio.map((p, i) => (
              <p key={i} style={{ marginBottom: i < expanded.bio.length - 1 ? '24px' : 0 }}>
                {p}
              </p>
            ))}
          </div>

          {/* Close button */}
          <button
            onClick={(e) => { e.stopPropagation(); setExpandedMember(null); }}
            style={{
              position: 'absolute',
              top: '24px',
              right: '0',
              fontSize: '14px',
              color: 'rgba(10, 10, 10, 0.3)',
              cursor: 'pointer',
              background: 'none',
              border: 'none',
              padding: '8px'
            }}
          >
            ✕ Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <section
      ref={elementRef}
      className="team-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Intro */}
        <h2
          className="transition-all duration-700"
          style={{
            fontSize: '36px',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '64px',
            lineHeight: '1.2',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Lean by design.<br />Senior by default.
        </h2>

        {/* Team Grid - Row 1 */}
        <div
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}
        >
          {row1.map((member, i) => renderCard(member, i))}
          {row1.some(m => m.id === expandedMember) && renderExpandedBio(row1)}
        </div>

        {/* Team Grid - Row 2 */}
        <div
          className="team-grid-row2"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginTop: '32px'
          }}
        >
          {row2.map((member, i) => renderCard(member, i + 3))}
          <div /> {/* Empty cell */}
          {row2.some(m => m.id === expandedMember) && renderExpandedBio(row2)}
        </div>
      </div>

      <style>{`
        @keyframes teamFadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .team-card:hover .team-card-photo {
          filter: grayscale(0%) !important;
        }

        .team-card:hover {
          opacity: 0.85;
        }

        @media (max-width: 768px) {
          .team-section {
            padding: 80px 24px !important;
          }
          .team-grid,
          .team-grid-row2 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .team-bio-expanded {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 5: HOW WE WORK — Principles
const HowWeWorkPrinciples = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  const principles = [
    "We don't do handoffs.",
    "We don't do templates.",
    "We don't do busywork."
  ];

  return (
    <section
      ref={elementRef}
      className="principles-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        {principles.map((principle, index) => (
          <p
            key={index}
            className="transition-all duration-700"
            style={{
              fontSize: '28px',
              fontWeight: '500',
              color: '#0A0A0A',
              marginBottom: index < principles.length - 1 ? '16px' : 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: `${index * 150}ms`
            }}
          >
            {principle}
          </p>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .principles-section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
