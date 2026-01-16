'use client';

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import karenPhoto from "@/assets/karen-mannheim-new.jpg";
import mikePhoto from "@/assets/mike-kaeding.webp";
import girishPhoto from "@/assets/girish-sehgal.jpeg";
import juanPabloPhoto from "@/assets/juan-pablo-romero.jpeg";

interface Client {
  slug: string;
  name: string;
  title: string;
  context: string;
  photo?: string;
  photoPosition?: string;
  isConfidential?: boolean;
}

const clients: Client[] = [
  {
    slug: "karen-mannheim",
    name: "Karen Mannheim",
    title: "Co-founder, TRAZZO Lighting",
    context: "Lima · Miami · Madrid\n80+ employees, $10M+ revenue",
    photo: karenPhoto.src,
    photoPosition: "center 25%"
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    title: "CEO, Norhart",
    context: "High-end residential construction, made affordable.\n$200M in assets · Minnesota",
    photo: mikePhoto.src,
    photoPosition: "center 20%"
  },
  {
    slug: "girish-sehgal",
    name: "Girish Sehgal",
    title: "C-Suite Executive, Hospitality & Healthcare",
    context: "Four Seasons · JW Marriott · Taj · Cleveland Clinic · SSMC",
    photo: girishPhoto.src,
    photoPosition: "center 30%"
  },
  {
    slug: "juan-pablo-romero",
    name: "Juan Pablo Romero",
    title: "Founder & CEO, JURA PLANK",
    context: "Luxury flooring for high-end residential & commercial\nFlorida",
    photo: juanPabloPhoto.src,
    photoPosition: "center 25%"
  },
  {
    slug: "nitin-passi",
    name: "[Confidential]",
    title: "Founder & CEO, Retail Holding",
    context: "$500M+ revenue",
    isConfidential: true
  }
];

const OurClientsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={elementRef} 
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Label */}
        <p
          className="transition-all duration-700"
          style={{
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          Our clients
        </p>

        {/* Client Grid */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, 1fr)', 
            gap: '24px' 
          }}
          className="clients-grid"
        >
          {clients.map((client, index) => (
            <Link
              key={index}
              href={`/clients/${client.slug}`}
              className="client-card group transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: `${(index + 1) * 100}ms`,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Photo */}
              <div 
                style={{ 
                  aspectRatio: '1 / 1', 
                  overflow: 'hidden',
                  marginBottom: '16px',
                  borderRadius: '0'
                }}
              >
                {client.isConfidential ? (
                  <div 
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#F5F1E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span 
                      style={{ 
                        fontSize: '48px', 
                        fontWeight: '600', 
                        color: 'rgba(10, 10, 10, 0.1)' 
                      }}
                    >
                      [C]
                    </span>
                  </div>
                ) : (
                  <img
                    src={client.photo}
                    alt={client.name}
                    className="transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: client.photoPosition
                    }}
                  />
                )}
              </div>

              {/* Name */}
              <p
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '4px'
                }}
              >
                {client.name}
              </p>

              {/* Title */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.6)',
                  marginBottom: '8px'
                }}
              >
                {client.title}
              </p>

              {/* Context */}
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(10, 10, 10, 0.4)',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-line'
                }}
              >
                {client.context}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          section {
            padding: 80px 24px !important;
          }
          .clients-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .clients-grid > a:nth-child(5) {
            grid-column: span 2;
          }
        }
      `}</style>
    </section>
  );
};

export default OurClientsSection;
