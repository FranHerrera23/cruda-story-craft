import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import franPortrait from '@/assets/fran-portrait-new.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="about-page" style={{ backgroundColor: '#FFFFFF' }}>
      <HeroSection />
      <TeamMember 
        label="FOUNDER"
        name="FRAN"
        bio={[
          "Eight years inside TikTok, Mondelez, Nestlé, the United Nations, DeliveryHero. Three continents. Ten nationalities.",
          "The gap between mastery and articulation isn't theory. It's lived experience.",
          "Every immigrant knows this gap intimately. You know exactly who you are — but the words don't travel.",
          "Now I help founders close that gap."
        ]}
        image={franPortrait}
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
        initial="M"
        flipped={true}
      />
      <TeamMember 
        label="OPERATIONS"
        name="NATALIA"
        bio={[
          "Enterprise account management at GSK, Dr. Reddy's, Lundbeck — one of the only pharmaceutical companies in the world focusing exclusively on brain diseases. Then she quit the corporate ladder.",
          "Eight years in Spain. Certified Spanish teacher. Real estate portfolio across Russia and UAE. 35 countries. Three languages fluent.",
          "Natalia knows how to run complex operations across borders and cultures. She keeps the work moving so the story can land."
        ]}
        initial="N"
        flipped={false}
      />
      <TeamMember 
        label="NARRATIVE STRATEGIST"
        name="ABRIL"
        bio={[
          "Marketing degree. Buenos Aires → Bangkok → Mexico City.",
          "Built Aftertaste — a newsletter dissecting culture, fashion, art, and the content that lingers. 500K+ views. Not by explaining. By provoking.",
          "Abril doesn't want you to nod along. She wants you to leave with something stuck in your head."
        ]}
        initial="A"
        flipped={true}
        isLast={true}
      />
      <HowWeWorkSection />
      <FinalCTA />
    </main>
  );
};

// HERO SECTION
const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="about-hero"
      style={{ 
        backgroundColor: '#FFFFFF', 
        padding: '160px 80px 120px',
        textAlign: 'center'
      }}
    >
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h1 
          className="transition-all duration-700 about-headline"
          style={{ 
            fontSize: '56px',
            fontWeight: '600',
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
            color: '#0A0A0A',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Lean by design.<br />
          Senior by default.
        </h1>
        
        <div 
          className="transition-all duration-700 about-hero-body"
          style={{ 
            fontSize: '20px',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'rgba(10, 10, 10, 0.6)',
            maxWidth: '400px',
            margin: '0 auto',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms'
          }}
        >
          <p>No junior teams.</p>
          <p>No account managers.</p>
          <p>No handoffs.</p>
          <p style={{ marginTop: '24px', color: 'rgba(10, 10, 10, 0.8)' }}>
            The people who find your story<br />
            are the people who write it.
          </p>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .about-hero {
            padding: 100px 24px 80px !important;
          }
          .about-headline {
            font-size: 40px !important;
          }
        }
      `}</style>
    </section>
  );
};

// TEAM MEMBER - EDITORIAL SPREAD
interface TeamMemberProps {
  label: string;
  name: string;
  bio: string[];
  image?: string;
  initial?: string;
  flipped: boolean;
  isLast?: boolean;
}

const TeamMember = ({ label, name, bio, image, initial, flipped, isLast }: TeamMemberProps) => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="team-member"
      style={{ 
        display: 'grid',
        gridTemplateColumns: flipped ? '55% 45%' : '45% 55%',
        gap: '80px',
        padding: '100px 80px',
        borderBottom: isLast ? 'none' : '1px solid rgba(10, 10, 10, 0.08)',
        alignItems: 'start',
        maxWidth: '1200px',
        margin: '0 auto'
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
        {image ? (
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
        ) : (
          <div 
            style={{
              width: '100%',
              aspectRatio: '4 / 5',
              background: 'linear-gradient(135deg, #E8E4DC 0%, #D8D4CC 50%, #E0DCD4 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Abstract silhouette placeholder */}
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '70%',
                height: '75%',
                background: 'linear-gradient(180deg, rgba(10,10,10,0.06) 0%, rgba(10,10,10,0.12) 100%)',
                borderRadius: '50% 50% 0 0',
              }}
            />
            {/* Head shape */}
            <div
              style={{
                position: 'absolute',
                bottom: '55%',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '28%',
                height: '22%',
                background: 'linear-gradient(180deg, rgba(10,10,10,0.06) 0%, rgba(10,10,10,0.1) 100%)',
                borderRadius: '50%',
              }}
            />
            {/* Initial overlay */}
            <span 
              style={{
                fontSize: '120px',
                fontWeight: '600',
                color: 'rgba(10, 10, 10, 0.03)',
                position: 'relative',
                zIndex: 1
              }}
            >
              {initial}
            </span>
          </div>
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
        {/* Label */}
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
        
        {/* Name */}
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
        
        {/* Divider */}
        <div style={{
          width: '40px',
          height: '2px',
          background: '#FF2E63',
          marginBottom: '32px'
        }} />
        
        {/* Bio */}
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
            padding: 60px 24px !important;
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
    </section>
  );
};

// HOW WE WORK SECTION
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
          to="/pricing#book"
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

export default About;
