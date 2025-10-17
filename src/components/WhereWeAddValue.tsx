import { useEffect, useRef, useState } from 'react';

const WhereWeAddValue = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const buildingForItems = [
    'International expansion (US, Middle East, Asia, Latin America)',
    'Speaking opportunities that match your expertise',
    'Translating offline recognition into digital presence',
    'Strategic partnerships at your level',
    'Long-term belief, not short-term attention'
  ];

  const notForYouItems = [
    "You're chasing algorithm hacks and trending tactics",
    'You measure success in vanity metrics',
    'You need this done fast and cheap',
    "You're in early testing phase (pre-revenue or pre-product-market fit)",
    "You're looking for a marketing team to execute, not strategic storytelling"
  ];

  return (
    <section 
      ref={sectionRef}
      data-where-we-add-value
      className="py-[120px] px-[60px]" 
      style={{ backgroundColor: '#F5F1E8' }}
    >
      <div className="max-w-[1100px] mx-auto">
        {/* Headline */}
        <h2 
          className="font-display font-bold text-center mb-8"
          style={{ 
            fontSize: 'clamp(36px, 4vw, 48px)',
            lineHeight: '1.1',
            color: '#3D3835',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(0.98)',
            transition: 'opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1), transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)'
          }}
        >
          Who This Is Built For
        </h2>

        {/* Opening Statement */}
        <p 
          className="text-center mb-16 mx-auto"
          style={{ 
            fontSize: 'clamp(18px, 2vw, 21px)',
            lineHeight: '1.6',
            color: '#3D3835',
            maxWidth: '680px',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.2s'
          }}
        >
          We work with builders who've proven their craft and are recognized in their field—but need to translate offline success into belief that travels.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column - You're building for */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s cubic-bezier(0.33, 1, 0.68, 1) 0.4s, transform 0.8s cubic-bezier(0.33, 1, 0.68, 1) 0.4s'
            }}
          >
            <h3 
              className="font-display font-semibold mb-8 pb-4"
              style={{ 
                fontSize: 'clamp(20px, 2vw, 24px)',
                color: '#3D3835',
                borderBottom: '2px solid #FF2E63'
              }}
            >
              You're building for:
            </h3>
            <ul className="space-y-6">
              {buildingForItems.map((item, index) => (
                <li 
                  key={index}
                  style={{
                    fontSize: 'clamp(16px, 1.8vw, 18px)',
                    lineHeight: '1.7',
                    color: '#3D3835',
                    paddingLeft: '0'
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - This probably isn't for you if */}
          <div 
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s cubic-bezier(0.33, 1, 0.68, 1) 0.4s, transform 0.8s cubic-bezier(0.33, 1, 0.68, 1) 0.4s'
            }}
          >
            <h3 
              className="font-display font-semibold mb-8 pb-4"
              style={{ 
                fontSize: 'clamp(20px, 2vw, 24px)',
                color: '#3D3835',
                borderBottom: '2px solid #3D3835'
              }}
            >
              This probably isn't for you if:
            </h3>
            <ul className="space-y-6">
              {notForYouItems.map((item, index) => (
                <li 
                  key={index}
                  style={{
                    fontSize: 'clamp(16px, 1.8vw, 18px)',
                    lineHeight: '1.7',
                    color: '#3D3835',
                    paddingLeft: '0'
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Qualifier Box */}
        <div 
          className="mx-auto px-10 py-8 rounded-lg"
          style={{
            maxWidth: '800px',
            backgroundColor: '#E8DED1',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.7s, transform 0.6s cubic-bezier(0.33, 1, 0.68, 1) 0.7s'
          }}
        >
          <p 
            className="text-center"
            style={{
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              lineHeight: '1.6',
              color: '#3D3835'
            }}
          >
            We only work with companies doing <strong>$5M+ in annual revenue</strong>. Not because we're exclusive—because the work we do requires you've already proven something worth believing in.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhereWeAddValue;
