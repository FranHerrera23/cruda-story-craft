'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import franPortrait from '@/assets/fran-portrait-new.png';
import michaelPortrait from '@/assets/michael-choi-pugliano.jpg';
import nataliaPortrait from '@/assets/natalia-dmitrieva.jpg';
import abrilPortrait from '@/assets/abril-lovasolo.jpg';
import isabellaPortrait from '@/assets/isabella-marinelli.png';
import Link from 'next/link';

export default function AboutContent() {
  return (
    <main className="about-page" style={{ backgroundColor: '#FFFFFF' }}>
      <HeroSection />
      <StorySection />
      <PhilosophySection />
      <ProofSection />
      <WorkSection />
      <NameSection />
      <TeamSection />
      <HowWeWorkSection />
      <FinalCTA />
    </main>
  );
}

// SECTION 1: HERO — "TRUST MOVED."
const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="about-hero"
      style={{ 
        backgroundColor: '#FFFFFF', 
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '120px 80px'
      }}
    >
      <h1 
        className="about-hero-headline transition-all duration-700"
        style={{ 
          fontSize: '72px',
          fontWeight: '700',
          lineHeight: '1.0',
          letterSpacing: '-0.03em',
          color: '#0A0A0A',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'scale(1)' : 'scale(0.98)'
        }}
      >
        TRUST MOVED.
      </h1>
      
      <style>{`
        @media (min-width: 1200px) {
          .about-hero-headline {
            font-size: 80px !important;
          }
        }
        @media (max-width: 768px) {
          .about-hero {
            padding: 80px 24px !important;
            min-height: 60vh !important;
          }
          .about-hero-headline {
            font-size: 48px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 2: THE STORY
const StorySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="story-section"
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '160px 80px'
      }}
    >
      <div 
        className="story-text"
        style={{ 
          fontSize: '24px',
          fontWeight: '400',
          lineHeight: '1.6',
          color: '#0A0A0A',
          maxWidth: '680px'
        }}
      >
        <p 
          className="transition-all duration-700"
          style={{ 
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          It used to live in institutions.<br />
          Media. Government. Corporations. The church.
        </p>
        
        <p 
          className="transition-all duration-700"
          style={{ 
            fontWeight: '600',
            margin: '40px 0',
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
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms'
          }}
        >
          Now trust moves person to person.<br />
          Your clients don't buy your company. They buy you.<br />
          Your story. Your voice. Your struggle.
        </p>
        
        <p 
          className="transition-all duration-700"
          style={{ 
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '600ms'
          }}
        >
          But most founders don't know how to tell it.<br />
          They've spent decades building expertise, not explaining it.
        </p>
        
        <p 
          className="transition-all duration-700"
          style={{ 
            fontWeight: '600',
            color: '#FF2E63',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '800ms'
          }}
        >
          That gap is where we live.
        </p>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .story-section {
            padding: 100px 24px !important;
          }
          .story-text {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 3: THE PHILOSOPHY
const PhilosophySection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="philosophy-section"
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '680px' }}>
        <div 
          className="transition-all duration-500"
          style={{
            width: isVisible ? '48px' : '0px',
            height: '4px',
            background: '#FF2E63',
            marginBottom: '40px'
          }}
        />
        
        <p 
          className="philosophy-text transition-all duration-700"
          style={{ 
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.7)',
            marginBottom: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '200ms'
          }}
        >
          Rick Rubin taught us that the best work doesn't come from adding.<br />
          It comes from stripping away — until only what's essential remains.
        </p>
        
        <p 
          className="philosophy-quote transition-all duration-700"
          style={{ 
            fontSize: '32px',
            fontWeight: '500',
            fontStyle: 'italic',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '400ms'
          }}
        >
          "The personal is universal."
        </p>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .philosophy-section {
            padding: 80px 24px !important;
          }
          .philosophy-text {
            font-size: 20px !important;
          }
          .philosophy-quote {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 4: THE PROOF (Ali/Platon)
const ProofSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="proof-section"
      style={{ 
        backgroundColor: '#0A0A0A', 
        padding: '160px 80px',
        textAlign: 'center'
      }}
    >
      <p 
        className="proof-setup transition-all duration-700"
        style={{ 
          fontSize: '20px',
          fontWeight: '400',
          color: 'rgba(255, 255, 255, 0.6)',
          lineHeight: '1.6',
          maxWidth: '700px',
          margin: '0 auto 48px auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        The photographer Platon once asked Muhammad Ali:<br />
        "You're the greatest. How can my generation achieve what yours did?"
      </p>
      
      <p 
        className="transition-all duration-700"
        style={{ 
          fontSize: '14px',
          fontWeight: '600',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#FF2E63',
          marginBottom: '32px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '200ms'
        }}
      >
        ALI SAID:
      </p>
      
      <p 
        className="proof-quote transition-all duration-700"
        style={{ 
          fontSize: '36px',
          fontWeight: '400',
          fontStyle: 'italic',
          color: '#FFFFFF',
          lineHeight: '1.4',
          maxWidth: '800px',
          margin: '0 auto',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '400ms'
        }}
      >
        "It wasn't me that was great. It was that people saw themselves in my struggle. If you can get people to see themselves in the story you put forward, you have a chance at greatness. That's not you. That's something bigger. Bridge building."
      </p>
      
      <style>{`
        @media (max-width: 768px) {
          .proof-section {
            padding: 100px 24px !important;
          }
          .proof-setup {
            font-size: 18px !important;
          }
          .proof-quote {
            font-size: 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 5: THE WORK
const WorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="work-section"
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '120px 80px',
        textAlign: 'center'
      }}
    >
      <h2 
        className="work-headline transition-all duration-700"
        style={{ 
          fontSize: '48px',
          fontWeight: '600',
          color: '#0A0A0A',
          marginBottom: '32px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        That's the work.
      </h2>
      
      <p 
        className="work-body transition-all duration-700"
        style={{ 
          fontSize: '24px',
          fontWeight: '400',
          color: 'rgba(10, 10, 10, 0.6)',
          lineHeight: '1.6',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transitionDelay: '200ms'
        }}
      >
        Not inventing a narrative.<br />
        Revealing the one already there.
      </p>
      
      <style>{`
        @media (max-width: 768px) {
          .work-section {
            padding: 80px 24px !important;
          }
          .work-headline {
            font-size: 36px !important;
          }
          .work-body {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 6: THE NAME
const NameSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="name-section"
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '680px' }}>
        <div 
          className="transition-all duration-500"
          style={{
            width: isVisible ? '48px' : '0px',
            height: '4px',
            background: '#FF2E63',
            marginBottom: '40px'
          }}
        />
        
        <div 
          className="name-text"
          style={{ 
            fontSize: '24px',
            fontWeight: '400',
            lineHeight: '1.6',
            color: 'rgba(10, 10, 10, 0.6)'
          }}
        >
          <p 
            className="transition-all duration-700"
            style={{ 
              marginBottom: '32px',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            <span style={{ fontWeight: '500', color: '#0A0A0A' }}>Cruda means raw in Spanish.</span><br />
            The story before it's been shaped.
          </p>
          
          <p 
            className="transition-all duration-700"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '400ms'
            }}
          >
            We don't create from nothing.<br />
            <span style={{ fontWeight: '500', color: '#0A0A0A' }}>We find what's already there.</span>
          </p>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .name-section {
            padding: 80px 24px !important;
          }
          .name-text {
            font-size: 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 7: THE TEAM
const TeamSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="team-section"
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '160px 80px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 
          className="team-intro transition-all duration-700"
          style={{ 
            fontSize: '36px',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '80px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Lean by design. Senior by default.
        </h2>
        
        <TeamMember 
          label="FOUNDER"
          name="FRAN"
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
            "Medical degree. Pharma sales across GSK, Dr. Reddy's, Lundbeck.",
            "Spain. Real estate. 26 countries. Three languages.",
            "Natalia's gift isn't strategy in the traditional sense. It's intuition — the ability to feel what people need before they say it. She knows when something's working. And when it isn't."
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
            padding: 100px 24px !important;
          }
          .team-intro {
            font-size: 28px !important;
            margin-bottom: 60px !important;
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
        padding: '80px 0',
        borderBottom: isLast ? 'none' : '1px solid rgba(10, 10, 10, 0.08)',
        alignItems: 'start'
      }}
    >
      {/* Photo */}
      <div 
        className="team-photo transition-all duration-700"
        style={{ 
          order: flipped ? 2 : 1,
          maxWidth: '480px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
        }}
      >
        {image && (
          <img 
            src={image}
            alt={name}
            style={{
              width: '100%',
              height: 'auto',
              aspectRatio: '4 / 5',
              objectFit: 'cover',
              objectPosition: 'center top'
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
          fontSize: '13px',
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
          marginBottom: '32px'
        }}>
          {name}
        </p>
        
        <div style={{
          width: '40px',
          height: '2px',
          background: '#FF2E63',
          marginBottom: '32px'
        }} />
        
        <div style={{
          fontSize: '20px',
          fontWeight: '400',
          lineHeight: '1.7',
          color: 'rgba(10, 10, 10, 0.7)',
          maxWidth: '480px'
        }}>
          {bio.map((paragraph, index) => (
            <p key={index} style={{ marginBottom: index < bio.length - 1 ? '24px' : 0 }}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .team-member {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding: 60px 0 !important;
          }
          .team-photo {
            order: 1 !important;
            max-width: 100% !important;
          }
          .team-content {
            order: 2 !important;
          }
        }
      `}</style>
    </div>
  );
};

// SECTION 8: HOW WE WORK
const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  const principles = [
    {
      title: "We don't do handoffs.",
      body: "The person who discovers your story is the person who writes it."
    },
    {
      title: "We don't do templates.",
      body: "Every narrative is built from scratch. From conversations. From the truth only you know."
    },
    {
      title: "We don't do busywork.",
      body: "If it doesn't move the needle on your reputation, we don't do it."
    }
  ];
  
  return (
    <section 
      ref={elementRef}
      className="how-we-work-section"
      style={{ 
        backgroundColor: '#F5F1E8', 
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p 
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '64px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How we work
        </p>
        
        <div 
          className="how-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '48px' 
          }}
        >
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="transition-all duration-700"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`
              }}
            >
              <h3 style={{ 
                fontSize: '22px', 
                fontWeight: '600', 
                color: '#0A0A0A', 
                marginBottom: '16px',
                lineHeight: '1.3'
              }}>
                {principle.title}
              </h3>
              <p style={{ 
                fontSize: '17px', 
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgba(10, 10, 10, 0.6)' 
              }}>
                {principle.body}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .how-we-work-section {
            padding: 80px 24px !important;
          }
          .how-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

// FINAL CTA
const FinalCTA = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="final-cta"
      style={{ 
        backgroundColor: '#0A0A0A', 
        padding: '120px 80px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 
          className="transition-all duration-700"
          style={{ 
            fontSize: '44px',
            fontWeight: '600',
            color: '#FFFFFF',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Ready when <span style={{ color: '#FF2E63' }}>you are.</span>
        </h2>
        
        <Link
          href="/contact"
          className="cta-button-about transition-all"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '40px',
            background: '#FF2E63',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '500',
            padding: '18px 28px',
            borderRadius: '0',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.25s ease',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#FFFFFF';
            e.currentTarget.style.color = '#0A0A0A';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#FF2E63';
            e.currentTarget.style.color = '#FFFFFF';
          }}
        >
          Start a Conversation
          <span style={{ fontSize: '18px' }}>→</span>
        </Link>
      </div>
      
      <style>{`
        .cta-button-about:hover span {
          transform: translateX(4px);
        }
        @media (max-width: 768px) {
          .final-cta {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};
