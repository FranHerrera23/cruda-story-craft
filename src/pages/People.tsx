import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import franPortrait from '@/assets/fran-portrait-new.png';

const People = () => {
  return (
    <main className="people-page">
      <OpeningStatement />
      <TheFounder />
      {/* HIDDEN UNTIL CONTENT READY */}
      {/* <TheCollaborators /> */}
      <ThePhilosophy />
      <ClosingStatement />
    </main>
  );
};

// SECTION 1: Opening Statement
const OpeningStatement = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-[600px] mx-auto text-center">
        <h1 className={`text-7xl md:text-[72px] font-light text-foreground mb-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            style={{ transitionDelay: '0ms' }}
        >
          The People
        </h1>
        
        <div className="space-y-4 text-[28px] leading-[1.6] tracking-[0.02em]">
          <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
             style={{ transitionDelay: '200ms' }}
          >
            We're translators.
          </p>
          <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
             style={{ transitionDelay: '400ms' }}
          >
            Cultural bridges.
          </p>
          <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
             style={{ transitionDelay: '600ms' }}
          >
            Pattern finders.
          </p>
          
          <div className="pt-6">
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
               style={{ transitionDelay: '800ms' }}
            >
              We see what builders have built
            </p>
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
               style={{ transitionDelay: '1000ms' }}
            >
              and help the world see it too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// SECTION 2: The Founder
const TheFounder = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="max-w-[1200px] mx-auto px-6 py-24 md:py-32"
    >
      <div className="grid md:grid-cols-2 gap-20">
        {/* Left Column: Portrait */}
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="aspect-[4/5] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-600">
            <img 
              src={franPortrait} 
              alt="Fran, Founder of CRUDA"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Right Column: Story */}
        <div className="space-y-6">
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '100ms' }}
          >
            <h2 className="text-5xl font-semibold text-foreground mb-2">Fran</h2>
            <p className="text-xl text-muted-foreground">Founder</p>
          </div>
          
          <div className="space-y-6 text-xl leading-[1.8]">
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '200ms' }}
            >
              I've built bridges my whole life.
            </p>
            
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '300ms' }}
            >
              Between languages. Between cultures. Between what founders build and what the world understands.
            </p>
            
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '400ms' }}
            >
              Eight years. Ten nationalities. Three continents. From TikTok to the UN. From Miami to Dubai.
            </p>
            
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '500ms' }}
            >
              The gap between mastery and articulation isn't theory for me. It's lived experience.
            </p>
            
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '600ms' }}
            >
              Every immigrant knows this gap intimately. We translate ourselves daily. We code-switch between worlds. We build bridges others can't see.
            </p>
            
            <p className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: '700ms' }}
            >
              Now I build them for founders.
            </p>
            
            <div className="pt-4 space-y-2">
              <p className={`text-2xl font-medium text-primary transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: '800ms' }}
              >
                The personal is universal.
              </p>
              <p className={`text-2xl font-medium text-primary transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: '900ms' }}
              >
                The specific is memorable.
              </p>
              <p className={`text-2xl font-medium text-primary transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: '1000ms' }}
              >
                The truth travels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// SECTION 3: The Collaborators - HIDDEN UNTIL CONTENT READY
/* 
const TheCollaborators = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="max-w-[1000px] mx-auto px-6 py-24 md:py-32"
    >
      <div className={`bg-background rounded-2xl p-12 md:p-20 text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-8">
          The Collaborators
        </h2>
        
        <div className="space-y-6 text-xl leading-[1.8] max-w-[700px] mx-auto">
          <p>
            CRUDA isn't a solo practice. It's a constellation of specialists who appear when their expertise is needed.
          </p>
          
          <p>
            Designers who think in systems. Writers who think in voices. Strategists who think in decades.
          </p>
          
          <p>
            No org charts. No hierarchy. Just the right people for the right story.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((i) => (
            <div 
              key={i}
              className="aspect-square bg-card border border-border rounded-lg"
              aria-label="Future team member placeholder"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
*/

// SECTION 4: The Philosophy
const ThePhilosophy = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  const principles = [
    {
      title: "Look Inward",
      description: "Start with the truth only you know. The specific. The lived. The real."
    },
    {
      title: "Find the Essence",
      description: "Strip away performance. What remains is what travels."
    },
    {
      title: "Honor the Intention",
      description: "Every story serves something larger. Name it. Protect it. Let it guide."
    },
    {
      title: "Stay True",
      description: "Consistency isn't repetition. It's recognition across time."
    }
  ];
  
  return (
    <section 
      ref={elementRef}
      className="max-w-[1200px] mx-auto px-6 py-24 md:py-32"
    >
      <div className="grid md:grid-cols-2 gap-10">
        {principles.map((principle, index) => (
          <div
            key={principle.title}
            className={`bg-card p-12 md:p-16 rounded-xl border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h3 className="text-3xl font-semibold text-foreground mb-4">
              {principle.title}
            </h3>
            <p className="text-lg leading-[1.6] text-muted-foreground">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

// SECTION 5: Closing Statement
const ClosingStatement = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  
  return (
    <section 
      ref={elementRef}
      className="min-h-[60vh] flex items-center justify-center px-6 py-24 bg-[#3D3835] text-[#F5F1E8]"
    >
      <div className={`text-center space-y-8 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <h2 className="text-4xl md:text-5xl font-light">
          Ready to be understood?
        </h2>
        
        <div className="space-y-4">
          <p className="text-2xl font-medium text-primary">
            Let's talk
          </p>
          <a 
            href="mailto:hello@thecruda.com"
            className="text-xl inline-block hover:underline transition-all duration-300 hover:opacity-80"
          >
            hello@thecruda.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default People;
