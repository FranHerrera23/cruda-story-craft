import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import franPortrait from '@/assets/fran-portrait-new.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="about-page">
      <HeroSection />
      <TeamMemberFran />
      <TeamMemberMichael />
      <TeamMemberNatalia />
      <TeamMemberAbril />
      <HowWeWorkSection />
      <FinalCTA />
    </main>
  );
};

// SECTION 1: Hero
const HeroSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="bg-white py-[120px] px-6 md:px-20"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <h1 
          className={`text-4xl md:text-[52px] font-semibold text-[#0A0A0A] leading-[1.1] tracking-[-0.02em] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Lean by design.<br />
          Senior by default.
        </h1>
        
        <div 
          className={`mt-8 max-w-[550px] mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <p className="text-xl leading-[1.7] text-[rgba(10,10,10,0.7)]">
            No junior teams. No account managers. No handoffs.
          </p>
          <p className="text-xl leading-[1.7] text-[rgba(10,10,10,0.7)] mt-4">
            The people who find your story are the people who write it.
          </p>
        </div>
      </div>
    </section>
  );
};

// SECTION 2: Fran - Photo LEFT, Text RIGHT
const TeamMemberFran = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="bg-[#0A0A0A] min-h-[600px]"
    >
      <div className="grid md:grid-cols-[45%_55%]">
        {/* Photo Left */}
        <div className={`h-[400px] md:h-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <img 
            src={franPortrait}
            alt="Fran, Founder of CRUDA"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Content Right */}
        <div className="px-6 py-12 md:px-[60px] md:py-20 flex flex-col justify-center">
          <h2 
            className={`text-[32px] md:text-[44px] font-semibold text-white mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Fran
          </h2>
          <p 
            className={`text-base text-[rgba(255,255,255,0.5)] mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Founder
          </p>
          
          <div className={`max-w-[500px] space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Eight years inside TikTok, Mondelez, Nestlé, the United Nations, DeliveryHero. Three continents. Ten nationalities.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              The gap between mastery and articulation isn't theory. It's lived experience.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Every immigrant knows this gap intimately. You know exactly who you are — but the words don't travel.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Now I help founders close that gap.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// SECTION 3: Michael - Text LEFT, Photo RIGHT (flipped)
const TeamMemberMichael = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="bg-[#0A0A0A] min-h-[600px] border-t border-[rgba(255,255,255,0.1)]"
    >
      <div className="grid md:grid-cols-[55%_45%]">
        {/* Content Left */}
        <div className="px-6 py-12 md:px-[60px] md:py-20 flex flex-col justify-center order-2 md:order-1">
          <h2 
            className={`text-[32px] md:text-[44px] font-semibold text-white mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Michael
          </h2>
          <p 
            className={`text-base text-[rgba(255,255,255,0.5)] mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Creative Director
          </p>
          
          <div className={`max-w-[500px] space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              A decade of brand and creative leadership in tech and gaming. Amazon. Twitch. Electronic Arts. Facebook. Oculus. Marvel. Universal.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              In-house and agency side. Content that ships, not decks that sit.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Michael builds brand stories that create affinity — the kind that lasts longer than a campaign.
            </p>
          </div>
        </div>
        
        {/* Photo Right - Placeholder */}
        <div className={`h-[400px] md:h-auto order-1 md:order-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
            <span className="text-[64px] font-semibold text-[rgba(255,255,255,0.1)]">M</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// SECTION 4: Natalia - Photo LEFT, Text RIGHT
const TeamMemberNatalia = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="bg-[#0A0A0A] min-h-[600px] border-t border-[rgba(255,255,255,0.1)]"
    >
      <div className="grid md:grid-cols-[45%_55%]">
        {/* Photo Left - Placeholder */}
        <div className={`h-[400px] md:h-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
            <span className="text-[64px] font-semibold text-[rgba(255,255,255,0.1)]">N</span>
          </div>
        </div>
        
        {/* Content Right */}
        <div className="px-6 py-12 md:px-[60px] md:py-20 flex flex-col justify-center">
          <h2 
            className={`text-[32px] md:text-[44px] font-semibold text-white mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Natalia
          </h2>
          <p 
            className={`text-base text-[rgba(255,255,255,0.5)] mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Operations
          </p>
          
          <div className={`max-w-[500px] space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Enterprise account management at GSK, Dr. Reddy's, Lundbeck. Then she quit the corporate ladder.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Eight years in Spain. Certified Spanish teacher. Real estate portfolio across Russia and UAE. 35 countries. Three languages fluent.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Natalia knows how to run complex operations across borders and cultures. She keeps the work moving so the story can land.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// SECTION 5: Abril - Text LEFT, Photo RIGHT (flipped)
const TeamMemberAbril = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="bg-[#0A0A0A] min-h-[600px] border-t border-[rgba(255,255,255,0.1)]"
    >
      <div className="grid md:grid-cols-[55%_45%]">
        {/* Content Left */}
        <div className="px-6 py-12 md:px-[60px] md:py-20 flex flex-col justify-center order-2 md:order-1">
          <h2 
            className={`text-[32px] md:text-[44px] font-semibold text-white mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Abril
          </h2>
          <p 
            className={`text-base text-[rgba(255,255,255,0.5)] mb-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            Narrative Strategist
          </p>
          
          <div className={`max-w-[500px] space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Marketing degree. Buenos Aires → Bangkok → Mexico City.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Built Aftertaste — a newsletter dissecting culture, fashion, art, and the content that lingers. 500K+ views. Not by explaining. By provoking.
            </p>
            <p className="text-xl leading-[1.7] text-[rgba(255,255,255,0.8)]">
              Abril doesn't want you to nod along. She wants you to leave with something stuck in your head.
            </p>
          </div>
        </div>
        
        {/* Photo Right - Placeholder */}
        <div className={`h-[400px] md:h-auto order-1 md:order-2 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-full h-full bg-[#1A1A1A] flex items-center justify-center">
            <span className="text-[64px] font-semibold text-[rgba(255,255,255,0.1)]">A</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// SECTION 6: How We Work
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
      className="bg-[#0A0A0A] py-[120px] px-6 md:px-20 border-t border-[rgba(255,255,255,0.1)]"
    >
      <div className="max-w-[700px]">
        <p 
          className={`text-[13px] font-semibold tracking-[0.1em] uppercase text-[#FF2E63] mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          How we work
        </p>
        
        <div className="space-y-10">
          {principles.map((principle, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: `${(index + 1) * 150}ms` }}
            >
              <p className="text-[22px] font-semibold text-white">
                {principle.bold}
              </p>
              <p className="text-base text-[rgba(255,255,255,0.6)] mt-2">
                {principle.supporting}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SECTION 7: Final CTA
const FinalCTA = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="bg-white py-[120px] px-6 md:px-20"
    >
      <div className="max-w-[900px] mx-auto text-center">
        <h2 
          className={`text-[32px] md:text-[44px] font-semibold text-[#0A0A0A] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          Ready when <span className="text-[#FF2E63]">you are.</span>
        </h2>
        
        <Link
          to="/book-call"
          className={`inline-block mt-10 px-10 py-5 bg-[#FF2E63] text-white text-base font-semibold rounded-lg hover:bg-[#E0264F] transition-all duration-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
};

export default About;
