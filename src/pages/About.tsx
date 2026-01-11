import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import franPortrait from "@/assets/fran-portrait-new.png";

const About = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: teamRef, isVisible: teamVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: howRef, isVisible: howVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: principlesRef, isVisible: principlesVisible } = useScrollAnimation<HTMLElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const principles = [
    { title: "Look Inward", description: "Start with the truth only you know. The specific. The lived. The real." },
    { title: "Find the Essence", description: "Strip away performance. What remains is what travels." },
    { title: "Honor the Intention", description: "Every story serves something larger. Name it. Protect it. Let it guide." },
    { title: "Stay True", description: "Consistency isn't repetition. It's recognition across time." }
  ];

  const teamMembers = [
    {
      name: "Fran",
      title: "Founder",
      photo: franPortrait,
      bio: [
        "Eight years inside TikTok, Mondelez, Nestlé, United Nations, DeliveryHero. Three continents. Ten nationalities.",
        "The gap between mastery and articulation isn't theory. It's lived experience. Every immigrant knows this gap intimately.",
        "Now I build bridges for founders."
      ],
      photoPosition: "left"
    },
    {
      name: "Michael Choi-Pugliano",
      title: "Creative Director",
      photo: null,
      bio: [
        "Twenty years of visual storytelling across entertainment, fashion, and luxury brands. From MTV to Mercedes, from editorial to executive.",
        "Michael sees the frame before anyone else does. He makes complexity look inevitable."
      ],
      photoPosition: "right"
    },
    {
      name: "Natalia Dmitrieva",
      title: "Operations Director",
      photo: null,
      bio: [
        "Fifteen years running operations across three continents. Logistics, timelines, client relationships—the invisible work that makes visible work possible.",
        "Natalia keeps the trains running so the story can breathe."
      ],
      photoPosition: "left"
    },
    {
      name: "Abril Lovasolo",
      title: "Narrative Strategist",
      photo: null,
      bio: [
        "Trained in psychology, built for brand. Abril finds the emotional truth beneath the business truth.",
        "She asks the questions clients didn't know they needed to answer."
      ],
      photoPosition: "right"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: HERO */}
      <section ref={heroRef} className="py-24 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF', paddingTop: '120px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h1 className="transition-all duration-700" style={{ fontSize: 'clamp(48px, 6vw, 64px)', fontWeight: '600', marginBottom: '32px', color: '#0A0A0A', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(20px)' }}>
            About
          </h1>
          <h2 className="transition-all duration-700" style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '600', color: 'rgba(10,10,10,0.8)', marginBottom: '32px', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '100ms' }}>
            Lean by design. Senior by default.
          </h2>
          <p className="transition-all duration-700" style={{ fontSize: '20px', lineHeight: '1.7', color: 'rgba(10,10,10,0.7)', maxWidth: '700px', margin: '0 auto', opacity: heroVisible ? 1 : 0, transform: heroVisible ? 'translateY(0)' : 'translateY(20px)', transitionDelay: '200ms' }}>
            No junior teams. No rotating account managers. The people who build your narrative are the people you talk to.
          </p>
        </div>
      </section>

      {/* SECTION 2: TEAM - All 4 Members */}
      <section ref={teamRef} className="py-24 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#0A0A0A' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`grid md:grid-cols-2 gap-12 items-start ${index > 0 ? 'mt-24 pt-24' : ''}`}
              style={{ borderTop: index > 0 ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
            >
              {/* Photo Column */}
              {member.photoPosition === 'left' && (
                <div className={`transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full rounded-lg" style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
                  ) : (
                    <div className="w-full rounded-lg flex items-center justify-center" style={{ aspectRatio: '3/4', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      <span style={{ fontSize: '64px', color: 'rgba(255,255,255,0.2)' }}>{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Text Column */}
              <div className={member.photoPosition === 'right' ? 'md:order-first' : ''}>
                <h3 className={`text-[36px] font-semibold mb-2 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FFFFFF', transitionDelay: `${index * 100 + 100}ms` }}>
                  {member.name}
                </h3>
                <p className={`text-[16px] mb-6 transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: 'rgba(255,255,255,0.6)', transitionDelay: `${index * 100 + 150}ms` }}>
                  {member.title}
                </p>
                <div className="space-y-4 text-[18px]" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>
                  {member.bio.map((paragraph, pIndex) => (
                    <p key={pIndex} className={`transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100 + 200 + pIndex * 100}ms` }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Photo Column (right position) */}
              {member.photoPosition === 'right' && (
                <div className={`transition-all duration-700 ${teamVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full rounded-lg" style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
                  ) : (
                    <div className="w-full rounded-lg flex items-center justify-center" style={{ aspectRatio: '3/4', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      <span style={{ fontSize: '64px', color: 'rgba(255,255,255,0.2)' }}>{member.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: HOW WE WORK */}
      <section ref={howRef} className="py-24 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <p className={`text-[13px] font-semibold uppercase mb-8 transition-all duration-700 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ letterSpacing: '0.1em', color: '#FF2E63' }}>HOW WE WORK</p>
          <div className="space-y-6 text-[20px]" style={{ color: 'rgba(10,10,10,0.7)', lineHeight: '1.7' }}>
            <p className={`transition-all duration-700 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '100ms' }}>We don't do handoffs. The person who discovers your story is the person who writes it.</p>
            <p className={`transition-all duration-700 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>We don't do templates. Every narrative is built from scratch, from conversations, from the truth only you know.</p>
            <p className={`transition-all duration-700 ${howVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '300ms' }}>We don't do busywork. If it doesn't move the needle on your reputation, we don't do it.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRINCIPLES */}
      <section ref={principlesRef} className="py-24 md:py-32 px-6 md:px-20" style={{ backgroundColor: '#F5F1E8' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p className={`text-[13px] font-semibold uppercase mb-16 text-center transition-all duration-700 ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ letterSpacing: '0.1em', color: '#FF2E63' }}>OUR PRINCIPLES</p>
          <div className="grid md:grid-cols-2 gap-12">
            {principles.map((p, i) => (
              <div key={i} className={`p-10 rounded-lg transition-all duration-700 ${principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ backgroundColor: 'rgba(255,255,255,0.7)', transitionDelay: `${i * 150}ms` }}>
                <h4 className="text-[24px] font-semibold mb-4" style={{ color: '#0A0A0A' }}>{p.title}</h4>
                <p className="text-[18px]" style={{ color: 'rgba(10,10,10,0.7)', lineHeight: '1.6' }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: CTA */}
      <section ref={ctaRef} className="py-28 md:py-36 px-6 md:px-20 text-center" style={{ backgroundColor: '#FFFFFF' }}>
        <h2 className={`transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: '600', color: '#0A0A0A', marginBottom: '24px' }}>Ready to be understood?</h2>
        <a href="mailto:hello@thecruda.com" className={`text-[20px] block mb-10 transition-all duration-700 hover:opacity-80 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ color: '#FF2E63', transitionDelay: '100ms' }}>hello@thecruda.com</a>
        <Link to="/book-call" className={`inline-block transition-all duration-300 hover:translate-y-[-2px] ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ backgroundColor: '#FF2E63', color: '#FFFFFF', padding: '18px 48px', fontSize: '16px', fontWeight: '600', borderRadius: '4px', transitionDelay: '200ms' }}>Start a Conversation</Link>
      </section>
    </main>
  );
};

export default About;
