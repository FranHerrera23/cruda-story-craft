'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import franPortrait from '@/assets/fran-portrait-new.png';
import michaelPortrait from '@/assets/michael-choi-pugliano.jpg';
import nataliaPortrait from '@/assets/natalia-dmitrieva.jpg';
import abrilPortrait from '@/assets/abril-lovasolo.jpg';
import isabellaPortrait from '@/assets/isabella-marinelli.png';

export default function AboutContent() {
  return (
    <main className="about-page" style={{ backgroundColor: '#FFFFFF' }}>
      <HeroManifestoSection />
      <PhilosophySection />
      <TeamSection />
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

      {/* Manifesto */}
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
            transitionDelay: '200ms'
          }}
        >
          That's over.
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
            transitionDelay: '300ms'
          }}
        >
          Now trust moves person to person.<br />
          Your clients don't buy your company. They buy you.<br />
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
            transitionDelay: '400ms'
          }}
        >
          But most founders don't know how to tell it.<br />
          They've spent decades building expertise, not explaining it.
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
            transitionDelay: '500ms'
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
            transitionDelay: '100ms'
          }}
        >
          Rick Rubin taught us that the best work doesn't<br />
          come from adding. It comes from stripping away —<br />
          until only what's essential remains.
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
            transitionDelay: '200ms'
          }}
        >
          "The personal is universal."
        </p>

        {/* Red line */}
        <div
          className="transition-all duration-500"
          style={{
            width: isVisible ? '48px' : '0px',
            height: '2px',
            background: '#FF2E63',
            marginBottom: '32px',
            transitionDelay: '300ms'
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
            transitionDelay: '400ms'
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
            transitionDelay: '500ms'
          }}
        >
          The story before it's been shaped.
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
            transitionDelay: '600ms'
          }}
        >
          We don't create from nothing.
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
            transitionDelay: '700ms'
          }}
        >
          We find what's already there.
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

// SECTION 3: TEAM
const TeamSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={elementRef}
      className="team-section"
      style={{
        backgroundColor: '#FFFFFF',
        padding: '0 0 80px 0'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <TeamMember
          label="FOUNDER"
          name="FRAN HERRERA"
          bio={[
            "Eight years inside TikTok, Mondelez, Nestlé, the United Nations, DeliveryHero. Three continents. Ten nationalities.",
            "The gap between mastery and articulation isn't theory. It's lived experience.",
            "Every immigrant knows this gap intimately. You know exactly who you are — but the words don't travel.",
            "Now I help founders close that gap."
          ]}
          image={franPortrait.src}
          flipped={false}
        />

        <TeamMember
          label="CREATIVE DIRECTOR"
          name="MICHAEL"
          bio={[
            "A decade of brand and creative leadership in tech and gaming. Amazon. Twitch. Electronic Arts. Facebook. Oculus. LucasArts. Marvel. Universal. Hasbro.",
            "In-house and agency side. Content that ships, not decks that sit.",
            "Michael builds brand stories that create affinity — the kind that lasts longer than a campaign."
          ]}
          image={michaelPortrait.src}
          flipped={true}
        />

        <TeamMember
          label="BUSINESS STRATEGIST"
          name="NATALIA"
          bio={[
            "Enterprise account management at GSK, Dr. Reddy's, Lundbeck — one of the only pharmaceutical companies in the world focusing exclusively on brain diseases. Then she quit the corporate ladder.",
            "Eight years in Spain. Certified Spanish teacher. Real estate portfolio across Russia and UAE. 35 countries. Three languages fluent.",
            "Natalia knows how to run complex operations across borders and cultures. She keeps the work moving so the story can land."
          ]}
          image={nataliaPortrait.src}
          flipped={false}
        />

        <TeamMember
          label="DIGITAL STRATEGIST"
          name="ISABELLA"
          bio={[
            "40+ tech startups across Dubai, Hong Kong, New York, London, Buenos Aires. Multimedia communications background. Master's candidate at SDA Bocconi.",
            "Now based in Puglia, teaching AI and digital marketing strategy when she's not helping founders translate complexity into clarity.",
            "Isabella finds the signal in the noise — then makes sure it travels."
          ]}
          image={isabellaPortrait.src}
          flipped={true}
        />

        <TeamMember
          label="NARRATIVE STRATEGIST"
          name="ABRIL"
          bio={[
            "Marketing degree. Buenos Aires → Bangkok → Mexico City.",
            "Built Aftertaste — a newsletter dissecting culture, fashion, art, and the content that lingers. 500K+ views. Not by explaining. By provoking.",
            "Abril doesn't want you to nod along. She wants you to leave with something stuck in your head."
          ]}
          image={abrilPortrait.src}
          flipped={false}
          isLast={true}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-section {
            padding: 0 0 60px 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

// TEAM MEMBER COMPONENT
interface TeamMemberProps {
  label: string;
  name: string;
  bio: string[];
  image?: string;
  flipped: boolean;
  isLast?: boolean;
}

const TeamMember = ({ label, name, bio, image, flipped, isLast }: TeamMemberProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <div
      ref={elementRef}
      className="team-member"
      style={{
        display: 'grid',
        gridTemplateColumns: flipped ? '55% 45%' : '45% 55%',
        gap: '80px',
        padding: '80px 80px',
        borderBottom: isLast ? 'none' : '1px solid rgba(10, 10, 10, 0.06)',
        alignItems: 'start'
      }}
    >
      {/* Photo */}
      <div
        className="team-photo transition-all duration-700"
        style={{
          order: flipped ? 2 : 1,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        {image && (
          <img
            src={image}
            alt={name}
            className="team-photo-img"
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center top',
              filter: 'grayscale(100%) contrast(1.1)',
              transition: 'filter 0.4s ease'
            }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="team-content transition-all duration-700"
        style={{
          order: flipped ? 1 : 2,
          paddingTop: '20px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '100ms'
        }}
      >
        <p style={{
          fontSize: '12px',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: 'rgba(10, 10, 10, 0.4)',
          marginBottom: '4px'
        }}>
          {label}
        </p>

        <p style={{
          fontSize: '13px',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#FF2E63',
          marginBottom: '20px'
        }}>
          {name}
        </p>

        <div style={{
          width: '32px',
          height: '2px',
          background: '#FF2E63',
          marginBottom: '32px'
        }} />

        <div style={{
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '1.7',
          color: 'rgba(10, 10, 10, 0.6)'
        }}>
          {bio.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: index < bio.length - 1 ? '20px' : 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <style>{`
        .team-member:hover .team-photo-img {
          filter: grayscale(0%) contrast(1);
        }

        @media (max-width: 768px) {
          .team-member {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 24px !important;
          }
          .team-photo {
            order: 1 !important;
          }
          .team-content {
            order: 2 !important;
          }
        }
      `}</style>
    </div>
  );
};
