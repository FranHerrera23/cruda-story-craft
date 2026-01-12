import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import franPortrait from '@/assets/fran-portrait-new.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="about-page">
      <HeroSection />
      <TeamSection />
      <HowWeWorkSection />
      <FinalCTA />
    </main>
  );
};

// SECTION 1: Hero (White)
const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      style={{ backgroundColor: '#FFFFFF', padding: '120px 80px' }}
      className="about-hero"
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h1 
          className="transition-all duration-700 about-headline"
          style={{ 
            fontSize: '44px',
            fontWeight: '600',
            lineHeight: '1.15',
            letterSpacing: '-0.02em',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Lean by design.<br />
          Senior by default.
        </h1>
        
        <div 
          className="transition-all duration-700"
          style={{ 
            marginTop: '40px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'rgba(10, 10, 10, 0.6)' }}>
            No junior teams. No account managers. No handoffs.
          </p>
          <p style={{ fontSize: '18px', lineHeight: '1.7', color: 'rgba(10, 10, 10, 0.6)', marginTop: '16px' }}>
            The people who find your story are the people who write it.
          </p>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .about-hero {
            padding: 80px 24px !important;
          }
          .about-headline {
            font-size: 32px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 2: Team Cards (Dark)
const TeamSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  const teamMembers = [
    {
      name: "Fran",
      title: "Founder",
      bio: "Eight years inside TikTok, Mondelez, Nestlé, the United Nations, DeliveryHero. Three continents. The gap between mastery and articulation isn't theory — it's lived experience.",
      image: franPortrait,
      hasPhoto: true
    },
    {
      name: "Michael",
      title: "Creative Director",
      bio: "A decade of brand and creative leadership. Amazon. Twitch. Electronic Arts. Facebook. Oculus. Marvel. Universal. In-house and agency side. Content that ships, not decks that sit.",
      initial: "M",
      hasPhoto: false
    },
    {
      name: "Natalia",
      title: "Operations",
      bio: "Enterprise account management at GSK, Dr. Reddy's, Lundbeck. Eight years in Spain. Real estate portfolio across Russia and UAE. 35 countries. Three languages fluent.",
      initial: "N",
      hasPhoto: false
    }
  ];

  const abrilMember = {
    name: "Abril",
    title: "Narrative Strategist",
    bio: "Marketing degree. Buenos Aires → Bangkok → Mexico City. Built Aftertaste — a newsletter dissecting culture, fashion, art. 500K+ views. Not by explaining. By provoking.",
    initial: "A",
    hasPhoto: false
  };
  
  return (
    <section 
      ref={elementRef}
      style={{ backgroundColor: '#0A0A0A', padding: '120px 80px' }}
      className="team-section"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Label */}
        <p 
          className="transition-all duration-700"
          style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          The team
        </p>

        {/* First Row - 3 Cards */}
        <div 
          className="team-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '24px'
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.name} 
              member={member} 
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Second Row - Abril Centered */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <div style={{ width: 'calc(33.333% - 16px)' }} className="abril-card-container">
            <TeamCard 
              member={abrilMember} 
              isVisible={isVisible}
              delay={300}
            />
          </div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .team-section {
            padding: 80px 24px !important;
          }
          .team-grid {
            grid-template-columns: 1fr !important;
          }
          .abril-card-container {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

// Team Card Component
interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
  initial?: string;
  hasPhoto: boolean;
}

const TeamCard = ({ member, isVisible, delay }: { member: TeamMember; isVisible: boolean; delay: number }) => {
  return (
    <div
      className="team-card transition-all duration-700"
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '2px',
        overflow: 'hidden',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${delay}ms`
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Photo or Placeholder */}
      {member.hasPhoto ? (
        <img 
          src={member.image}
          alt={member.name}
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            objectFit: 'cover',
            filter: 'grayscale(20%)',
            transition: 'filter 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
          onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(20%)'}
        />
      ) : (
        <div 
          style={{
            width: '100%',
            aspectRatio: '4 / 5',
            background: 'rgba(255, 255, 255, 0.02)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <span 
            style={{
              fontSize: '80px',
              fontWeight: '600',
              color: 'rgba(255, 255, 255, 0.05)'
            }}
          >
            {member.initial}
          </span>
        </div>
      )}
      
      {/* Content */}
      <div style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '20px', fontWeight: '600', color: '#FFFFFF', marginBottom: '4px' }}>
          {member.name}
        </h3>
        <p style={{ fontSize: '14px', fontWeight: '400', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '16px' }}>
          {member.title}
        </p>
        <p style={{ fontSize: '15px', fontWeight: '400', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.6)' }}>
          {member.bio}
        </p>
      </div>
    </div>
  );
};

// SECTION 3: How We Work (Dark continued)
const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  const principles = [
    {
      bold: "We don't do handoffs.",
      supporting: "The person who discovers your story is the person who writes it."
    },
    {
      bold: "We don't do templates.",
      supporting: "Every narrative is built from scratch. From conversations. From the truth only you know."
    },
    {
      bold: "We don't do busywork.",
      supporting: "If it doesn't move the needle on your reputation, we don't do it."
    }
  ];
  
  return (
    <section 
      ref={elementRef}
      style={{ 
        backgroundColor: '#0A0A0A', 
        padding: '120px 80px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)'
      }}
      className="how-work-section"
    >
      <div style={{ maxWidth: '700px' }}>
        <p 
          className="transition-all duration-700"
          style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How we work
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {principles.map((principle, index) => (
            <div 
              key={index}
              className="transition-all duration-700"
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 150}ms`
              }}
            >
              <p style={{ fontSize: '22px', fontWeight: '600', color: '#FFFFFF' }}>
                {principle.bold}
              </p>
              <p style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.6)', marginTop: '8px' }}>
                {principle.supporting}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .how-work-section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

// SECTION 4: Final CTA (White)
const FinalCTA = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      style={{ backgroundColor: '#FFFFFF', padding: '120px 80px' }}
      className="final-cta-section"
    >
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h2 
          className="transition-all duration-700"
          style={{ 
            fontSize: '44px',
            fontWeight: '600',
            color: '#0A0A0A',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Ready when <span style={{ color: '#FF2E63' }}>you are.</span>
        </h2>
        
        <Link
          to="/book-call"
          className="cta-button-about transition-all"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            marginTop: '40px',
            background: '#0A0A0A',
            color: '#FFFFFF',
            fontSize: '15px',
            fontWeight: '500',
            letterSpacing: '0.01em',
            padding: '18px 28px',
            borderRadius: '0',
            textDecoration: 'none',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.25s ease',
            transitionDelay: '200ms'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#FF2E63';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0A0A0A';
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
          .final-cta-section {
            padding: 80px 24px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
