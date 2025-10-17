import { useEffect, useRef, useState } from 'react';

const CredibilitySection = () => {
  const [moment1Visible, setMoment1Visible] = useState(false);
  const [moment2Visible, setMoment2Visible] = useState(false);
  const [moment3Visible, setMoment3Visible] = useState(false);

  const moment1Ref = useRef<HTMLDivElement>(null);
  const moment2Ref = useRef<HTMLDivElement>(null);
  const moment3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setMoment1Visible(true);
      setMoment2Visible(true);
      setMoment3Visible(true);
      return;
    }

    const options = {
      rootMargin: '-20%',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === moment1Ref.current && entry.isIntersecting) {
          setMoment1Visible(true);
        }
        if (entry.target === moment2Ref.current && entry.isIntersecting) {
          setMoment2Visible(true);
        }
        if (entry.target === moment3Ref.current && entry.isIntersecting) {
          setMoment3Visible(true);
        }
      });
    }, options);

    if (moment1Ref.current) observer.observe(moment1Ref.current);
    if (moment2Ref.current) observer.observe(moment2Ref.current);
    if (moment3Ref.current) observer.observe(moment3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* MOMENT 1: THE CLAIM */}
      <section 
        ref={moment1Ref}
        className="py-[100px] md:py-[100px] px-10 md:px-[60px]" 
        style={{ backgroundColor: '#E8DED1' }}
      >
        <div className="max-w-[800px] mx-auto text-center">
          <h2 
            className="text-[38px] md:text-[52px] font-bold leading-[1.1] mb-10 transition-all duration-[600ms]"
            style={{ 
              color: '#3D3835',
              opacity: moment1Visible ? 1 : 0,
              transform: moment1Visible ? 'scale(1)' : 'scale(0.98)',
              willChange: 'transform'
            }}
          >
            We've been inside the machine.
          </h2>
          
          <p 
            className="text-[19px] md:text-[20px] leading-[1.8] transition-opacity duration-[600ms]"
            style={{ 
              color: '#3D3835',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '300ms'
            }}
          >
            Eight years inside corporations, agencies, media companies. We managed campaigns reaching millions. Organized events for thousands. Produced content with 30+ creators.
          </p>
        </div>
      </section>

      {/* TRANSITION 1: Yellow Dots Separator */}
      <section style={{ backgroundColor: '#E8DED1' }}>
        <div className="flex flex-col items-center gap-4 py-[60px]">
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#F5B800',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#F5B800',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#F5B800',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '600ms'
            }}
          />
        </div>
      </section>

      {/* MOMENT 2: THE EVIDENCE (HERO TREATMENT) */}
      <section 
        ref={moment2Ref}
        className="py-[100px] md:py-[140px] px-10 md:px-20" 
        style={{ backgroundColor: '#3D3835' }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <h2 
            className="text-[42px] md:text-[64px] font-bold leading-[1.2] mb-8 transition-all duration-[800ms]"
            style={{ 
              color: '#F5B800',
              opacity: moment2Visible ? 1 : 0,
              transform: moment2Visible ? 'scale(1)' : 'scale(0.95)',
              willChange: 'transform'
            }}
          >
            TikTok. Mondelez. DirecTV. Natura. Purina. Ab InBev.
          </h2>
          
          <p 
            className="text-[19px] md:text-[22px] leading-[1.8] transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment2Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            We saw how the machine works. And where it breaks.
          </p>
        </div>
      </section>

      {/* TRANSITION 2: Yellow Dots Separator */}
      <section style={{ backgroundColor: '#3D3835' }}>
        <div className="flex flex-col items-center gap-4 py-[60px]">
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#F5B800',
              opacity: moment2Visible ? 1 : 0,
              transitionDelay: '200ms'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#F5B800',
              opacity: moment2Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          />
          <div 
            className="w-2 h-2 rounded-full transition-opacity duration-300"
            style={{ 
              backgroundColor: '#F5B800',
              opacity: moment2Visible ? 1 : 0,
              transitionDelay: '600ms'
            }}
          />
        </div>
      </section>

      {/* MOMENT 3: THE INSIGHT */}
      <section 
        ref={moment3Ref}
        className="py-[100px] md:py-[100px] px-10 md:px-[60px]" 
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[700px] mx-auto text-center">
          <p 
            className="text-[19px] md:text-[22px] leading-[1.8] mb-6 transition-all duration-[600ms]"
            style={{ 
              color: '#3D3835',
              opacity: moment3Visible ? 1 : 0,
              transform: moment3Visible ? 'translateY(0)' : 'translateY(20px)',
              willChange: 'transform'
            }}
          >
            That's where we learned <span style={{ color: '#F5B800', fontWeight: 600 }}>the pattern</span>: it's not about scale or awards. It's about the <span style={{ color: '#F5B800', fontWeight: 600 }}>story beneath the execution</span>.
          </p>
          
          <div 
            className="inline-block transition-opacity duration-[600ms]"
            style={{
              opacity: moment3Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            <div 
              className="h-[2px] w-full mb-4 transition-all duration-500"
              style={{ 
                backgroundColor: '#F5B800',
                transform: moment3Visible ? 'scaleX(1)' : 'scaleX(0)',
                transformOrigin: 'center'
              }}
            />
            <p 
              className="text-[19px] md:text-[21px] font-semibold"
              style={{ color: '#3D3835' }}
            >
              The thing that creates belief when you're not in the room.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CredibilitySection;
