'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import karenImage from '@/assets/karen-mannheim-casestudy.jpg';
import mikeImage from '@/assets/mike-kaeding.webp';
import girishImage from '@/assets/girish-sehgal.jpeg';

export default function WorkContent() {
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation<HTMLDivElement>();
  const { elementRef: ctaRef, isVisible: ctaVisible } = useScrollAnimation<HTMLElement>();

  const clients = [
    {
      name: "Karen Mannheim",
      title: "Founder, TRAZZO Lighting",
      description: "Luxury architectural lighting designer working with Robert A.M. Stern, Porsche, and global hospitality brands.",
      image: karenImage.src,
      link: "/clients/karen-mannheim",
      status: "live"
    },
    {
      name: "Mike Kaeding",
      title: "CEO, Norhart",
      description: "Leading a $200M housing innovation company transforming how apartments are built in America.",
      image: mikeImage.src,
      link: "/clients/mike-kaeding",
      status: "live"
    },
    {
      name: "Girish Sehgal",
      title: "Chief Patient Experience Officer, SSMC",
      description: "Three decades of leadership across Four Seasons, Taj, JW Marriott, and Grand Hyatt properties.",
      image: girishImage.src,
      link: "/clients/girish-sehgal",
      status: "live"
    },
    {
      name: "Juan Pablo Romero",
      title: "Regional Sales Manager, US & Caribbean, UNIK Parquet",
      description: "High-end flooring manufacturer serving luxury residential & commercial across US.",
      image: null,
      link: "/clients/juan-pablo-romero",
      status: "live"
    },
    {
      name: "[Name Redacted]",
      title: "Retail CEO & Founder, Dubai",
      description: "Confidential case study. Strategic positioning under NDAs for a second-time founder.",
      image: null,
      link: "/clients/nitin-passi",
      status: "live"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* SECTION 1: Hero */}
      <section 
        ref={headerRef}
        className="pt-[120px] pb-[80px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FAFAFA' }}
      >
        <div className="max-w-[600px] mx-auto text-center">
          <h1 
            className="text-[36px] md:text-[48px] font-semibold mb-4 transition-all duration-700"
            style={{ 
              color: '#1A1A1A',
              letterSpacing: '-0.02em',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Work
          </h1>
          
          <p 
            className="text-[20px] transition-all duration-700"
            style={{ 
              color: 'rgba(26, 26, 26, 0.6)',
              lineHeight: '1.6',
              opacity: headerVisible ? 1 : 0,
              transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            People who trusted us with their story.
          </p>
        </div>
      </section>

      {/* SECTION 2: Client Cards */}
      <section 
        ref={gridRef}
        className="py-[100px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {clients.map((client, index) => (
            <Link
              key={index}
              href={client.link}
              className={`block group ${client.status === 'coming-soon' ? 'cursor-default' : ''}`}
              onClick={(e) => client.status === 'coming-soon' && e.preventDefault()}
              style={{
                opacity: gridVisible ? 1 : 0,
                transform: gridVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 100}ms`
              }}
            >
              <div 
                className={`overflow-hidden transition-all duration-300 ${client.status === 'live' ? 'hover:-translate-y-1 hover:shadow-lg' : ''}`}
                style={{ 
                  borderRadius: '8px'
                }}
              >
                {/* Image Area */}
                <div 
                  className="relative w-full overflow-hidden"
                  style={{ 
                    aspectRatio: '1/1',
                    backgroundColor: '#FAFAFA',
                    borderRadius: '8px'
                  }}
                >
                  {client.image ? (
                    <img 
                      src={client.image} 
                      alt={client.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ borderRadius: '8px' }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span 
                        className="text-[14px] font-medium"
                        style={{ color: 'rgba(26, 26, 26, 0.3)' }}
                      >
                        Photo coming soon
                      </span>
                    </div>
                  )}
                  
                  {/* Coming Soon Badge */}
                  {client.status === 'coming-soon' && (
                    <div 
                      className="absolute top-4 right-4 px-3 py-1.5 text-[10px] font-medium uppercase"
                      style={{ 
                        backgroundColor: 'rgba(26, 26, 26, 0.8)',
                        color: '#FFFFFF',
                        letterSpacing: '1.5px',
                        borderRadius: '4px'
                      }}
                    >
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="pt-6">
                  {/* Client Name */}
                  <h3 
                    className="text-[24px] font-semibold mb-1"
                    style={{ 
                      color: '#1A1A1A',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {client.name}
                  </h3>
                  
                  {/* Title/Company */}
                  <p 
                    className="text-[16px] mb-3"
                    style={{ color: 'rgba(26, 26, 26, 0.6)' }}
                  >
                    {client.title}
                  </p>
                  
                  {/* Description */}
                  <p 
                    className="text-[15px] mb-4"
                    style={{ 
                      color: 'rgba(26, 26, 26, 0.5)',
                      lineHeight: '1.6'
                    }}
                  >
                    {client.description}
                  </p>
                  
                  {/* View Case Study Link */}
                  {client.status === 'live' && (
                    <span 
                      className="text-[14px] font-medium inline-flex items-center gap-1 transition-all duration-300 group-hover:gap-2"
                      style={{ color: '#FF2E63' }}
                    >
                      View case study 
                      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 4: CTA */}
      <section 
        ref={ctaRef}
        className="py-[120px] px-6 md:px-[60px]"
        style={{ backgroundColor: '#1A1A1A' }}
      >
        <div className="max-w-[500px] mx-auto text-center">
          <h2 
            className="text-[36px] font-semibold mb-8 transition-all duration-700"
            style={{ 
              color: '#FFFFFF',
              letterSpacing: '-0.01em',
              opacity: ctaVisible ? 1 : 0,
              transform: ctaVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            Your story could be next.
          </h2>
          
          <Link
            href="/contact"
            className="inline-block px-10 py-[18px] text-[16px] font-semibold rounded-[10px] transition-all duration-300"
            style={{ 
              backgroundColor: '#FF2E63',
              color: '#FFFFFF'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#E62958';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(255, 46, 99, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF2E63';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}