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
  transformation: string;
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
    transformation: "30 years of architectural lighting excellence — now opening doors across three continents.",
    photo: karenPhoto.src,
    photoPosition: "center 25%"
  },
  {
    slug: "mike-kaeding",
    name: "Mike Kaeding",
    title: "CEO, Norhart",
    context: "$200M in assets · Minnesota",
    transformation: "The voice challenging a broken housing industry — to the people who needed to hear it.",
    photo: mikePhoto.src,
    photoPosition: "center 20%"
  },
  {
    slug: "girish-sehgal",
    name: "Girish Sehgal",
    title: "C-Suite Executive, Hospitality & Healthcare",
    context: "Four Seasons · Taj · Cleveland Clinic · SSMC",
    transformation: "Hospitality is a mindset, not an industry — now reaching 7,000+ senior leaders worldwide.",
    photo: girishPhoto.src,
    photoPosition: "center 30%"
  },
  {
    slug: "juan-pablo-romero",
    name: "Juan Pablo Romero",
    title: "Founder & CEO, Connecting the Dots",
    context: "Boutique consulting · CTD Podcast",
    transformation: "Bridging international luxury brands with Florida's top architects and developers — 80K listeners per season and growing.",
    photo: juanPabloPhoto.src,
    photoPosition: "center 25%"
  },
];
// Nitin removed from A&D portfolio (etapa 3 debt): retail breaks the vertical thread.
// The case study remains at /clients/nitin-passi — it just no longer leads A&D.

const OurClientsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="work"
      ref={elementRef}
      style={{
        backgroundColor: '#FFFFFF',
        padding: '120px 80px',
        scrollMarginTop: '80px'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
              className="client-card group"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
                transitionDelay: `${index * 150}ms`,
                textDecoration: 'none',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = isVisible ? 'translateY(0)' : 'translateY(20px)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
              }}
            >
              {/* Photo */}
              <div
                style={{
                  aspectRatio: '4 / 5',
                  overflow: 'hidden',
                  marginBottom: '16px',
                  borderRadius: '0',
                  border: '1px solid rgba(10, 10, 10, 0.06)'
                }}
              >
                {client.isConfidential ? (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(10, 10, 10, 0.03)',
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
                    className="client-photo transition-all duration-500 group-hover:scale-[1.03]"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      filter: 'grayscale(100%) contrast(1.05)'
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

              {/* Transformation Line */}
              {client.transformation && (
                <p
                  style={{
                    fontSize: '15px',
                    fontStyle: 'italic',
                    color: 'rgba(10, 10, 10, 0.5)',
                    lineHeight: '1.5',
                    marginTop: '12px'
                  }}
                >
                  {client.transformation}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        .client-photo {
          filter: grayscale(100%) contrast(1.05);
          transition: filter 0.4s ease, transform 0.5s ease;
        }

        .client-card:hover .client-photo {
          filter: grayscale(0%) contrast(1);
        }

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
