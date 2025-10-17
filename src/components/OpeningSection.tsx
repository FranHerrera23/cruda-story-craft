import { useEffect, useRef, useState } from 'react';

const OpeningSection = () => {
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
      {/* MOMENT 1: THE SHIFT */}
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
            Trust moved.
          </h2>
          
          <p 
            className="text-[19px] md:text-[20px] leading-[1.8] transition-opacity duration-[600ms]"
            style={{ 
              color: '#3D3835',
              opacity: moment1Visible ? 1 : 0,
              transitionDelay: '300ms'
            }}
          >
            It used to live in institutions—governments, corporations, media. Not anymore.
          </p>
        </div>
      </section>

      {/* MOMENT 2: THE CORE (HERO TREATMENT) */}
      <section 
        ref={moment2Ref}
        className="py-[100px] md:py-[140px] px-10 md:px-20" 
        style={{ backgroundColor: '#3D3835' }}
      >
        <div className="max-w-[900px] mx-auto text-center">
          <h2 
            className="text-[42px] md:text-[64px] font-bold leading-[1.2] mb-8 transition-all duration-[800ms]"
            style={{ 
              color: '#FF2E63',
              opacity: moment2Visible ? 1 : 0,
              transform: moment2Visible ? 'scale(1)' : 'scale(0.95)',
              willChange: 'transform'
            }}
          >
            The personal is universal.
          </h2>
          
          <p 
            className="text-[19px] md:text-[22px] leading-[1.8] transition-opacity duration-[600ms]"
            style={{ 
              color: '#FDFBF7',
              opacity: moment2Visible ? 1 : 0,
              transitionDelay: '400ms'
            }}
          >
            Your struggles mirror theirs. Your insights unlock something they already knew but couldn't name. That's where connection happens—not through persuasion, but recognition.
          </p>
        </div>
      </section>

      {/* MOMENT 3: WHAT WE DO */}
      <section 
        ref={moment3Ref}
        className="py-[100px] md:py-[100px] px-10 md:px-[60px]" 
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
            {/* Column 1 */}
            <div 
              className="text-center transition-all duration-[600ms]"
              style={{
                opacity: moment3Visible ? 1 : 0,
                transform: moment3Visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: '200ms',
                willChange: 'transform'
              }}
            >
              <div className="text-[72px] font-bold leading-[1] mb-6" style={{ color: '#FF2E63' }}>
                01
              </div>
              <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.3] mb-3" style={{ color: '#3D3835' }}>
                Strip the bullshit
              </h3>
              <p className="text-[16px] italic" style={{ color: '#3D3835', opacity: 0.7 }}>
                (from punk)
              </p>
            </div>

            {/* Column 2 */}
            <div 
              className="text-center transition-all duration-[600ms]"
              style={{
                opacity: moment3Visible ? 1 : 0,
                transform: moment3Visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: '400ms',
                willChange: 'transform'
              }}
            >
              <div className="text-[72px] font-bold leading-[1] mb-6" style={{ color: '#FF2E63' }}>
                02
              </div>
              <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.3] mb-3" style={{ color: '#3D3835' }}>
                Find the essence
              </h3>
              <p className="text-[16px] italic" style={{ color: '#3D3835', opacity: 0.7 }}>
                (from Rubin)
              </p>
            </div>

            {/* Column 3 */}
            <div 
              className="text-center transition-all duration-[600ms]"
              style={{
                opacity: moment3Visible ? 1 : 0,
                transform: moment3Visible ? 'translateY(0)' : 'translateY(40px)',
                transitionDelay: '600ms',
                willChange: 'transform'
              }}
            >
              <div className="text-[72px] font-bold leading-[1] mb-6" style={{ color: '#FF2E63' }}>
                03
              </div>
              <h3 className="text-[22px] md:text-[24px] font-bold leading-[1.3] mb-3" style={{ color: '#3D3835' }}>
                Understand what lands
              </h3>
              <p className="text-[16px] italic" style={{ color: '#3D3835', opacity: 0.7 }}>
                (from builders)
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center max-w-[800px] mx-auto">
            <div 
              className="inline-block transition-opacity duration-[600ms]"
              style={{
                opacity: moment3Visible ? 1 : 0,
                transitionDelay: '900ms'
              }}
            >
              <p 
                className="text-[20px] md:text-[24px] font-normal leading-[1.5] px-6 py-3 border-t-2 border-b-2"
                style={{ 
                  color: '#3D3835',
                  borderColor: '#FF2E63'
                }}
              >
                CRUDA turns expertise into narratives that create belief, not just attention.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OpeningSection;
