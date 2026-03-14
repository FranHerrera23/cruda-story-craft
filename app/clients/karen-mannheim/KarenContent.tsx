'use client';

import Link from "next/link";
import { ClientPageTemplate } from '@/components/ClientPageTemplate';
import heroImage from "@/assets/karen-hero-new.jpg";
import pezetPoster from "@/assets/pezet-hero.jpg";
import fourSeasonsHero from "@/assets/four-seasons-hero.jpg";
import saadiyatHeroNew from "@/assets/saadiyat-hero-new.jpg";
import porscheCover from "@/assets/porsche-cover-new.png";
import karenMannheim from "@/assets/karen-mannheim-new.jpg";
import karenProjectConstruction from "@/assets/karen-project-construction.jpg";

const projects = [
  {
    slug: "pezet",
    name: "PEZET",
    location: "Lima, Peru",
    description: "Three towers by Robert A.M. Stern Architects.",
    poster: pezetPoster
  },
  {
    slug: "saadiyat-music-festival",
    name: "Saadiyat Music Festival",
    location: "Abu Dhabi, UAE",
    description: "Jennifer Lopez, Christina Aguilera. The festival that proved TRAZZO's international reach.",
    poster: saadiyatHeroNew
  },
  {
    slug: "four-seasons-penthouse",
    name: "Four Seasons Penthouse",
    location: "Miami, Florida",
    description: "Four Seasons Residences, floor 66. A project at that level doesn't happen without proven capability.",
    poster: fourSeasonsHero
  },
  {
    slug: "porsche-flagship",
    name: "Porsche Flagship",
    location: "Lima, Peru",
    description: "Design approved by Porsche Germany. A project at that level doesn't happen without proven capability.",
    poster: porscheCover
  }
];

const KarenMannheimCaseStudy = () => {
  return (
    <ClientPageTemplate
      heroImage={heroImage.src}
      heroImagePosition="center 20%"
      heroKicker="HIGH-END ARCHITECTURAL LIGHTING | LIMA, MIAMI, MADRID"
      heroHeadline="When mastery doesn't travel"

      clientName="Karen Mannheim"
      clientTitle="Founder, TRAZZO Lighting"
      clientLocation="Lima, Peru → Miami, Florida"
      clientDescription={[
        "Porsche showrooms. Maserati dealerships. Four Seasons penthouses. Over a thousand projects across Peru.",
        "Thirty years building Lima's most respected lighting firm."
      ]}
      challengeHeadline="Thirty years of work in Peru. Zero presence in Miami."
      challengeDescription={[
        "Zero presence outside Peru.",
        "She was ready for Miami. Miami didn't know she existed."
      ]}

      storyQuote="The work was always exceptional. Now people outside Peru can see it."
      storyContent={[
        "Her reputation was local. Her ambition was international.",
        "The work spoke for itself — if you could see it. But you can't walk Miami developers through a Lima penthouse. You can't explain three decades of lighting expertise in an email.",
        "Karen needed to build belief remotely."
      ]}

      translationHeadline="Building the narrative"
      translationDescription="We built her story around three things:"
      translationPillars={[
        {
          number: "01",
          title: "Technical depth",
          description: "How light behaves on different materials. Thermal dynamics. Layering. Why lighting a restaurant is different from lighting a residence."
        },
        {
          number: "02",
          title: "Cross-cultural fluency",
          description: "A Peruvian woman with German roots building a business in Miami. Understanding that light 'speaks' differently across cultures."
        },
        {
          number: "03",
          title: "Challenging assumptions",
          description: "Why architects treat lighting as an afterthought. Why that's wrong. What changes when you design spaces with light as architecture."
        }
      ]}

      workSectionTitle="The work that now travels"
      workSectionDescription="Each project shows how we turned thirty years of Peru expertise into stories that opened doors in Miami, the UAE, and beyond."
      workContent={
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/karen-mannheim/${project.slug}`}
              className="group flex flex-col transition-all duration-300 hover:-translate-y-2"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(10, 10, 10, 0.1)',
                borderRadius: '0',
                overflow: 'hidden',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                textDecoration: 'none'
              }}
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '16/9' }}
              >
                <img
                  src={project.poster.src}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: '12px solid #0A0A0A',
                        borderTop: '7px solid transparent',
                        borderBottom: '7px solid transparent',
                        marginLeft: '3px'
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={{ padding: '24px' }}>
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: '#0A0A0A',
                    marginBottom: '4px'
                  }}
                >
                  {project.name}
                </h3>

                <p
                  style={{
                    fontSize: '14px',
                    color: 'rgba(10, 10, 10, 0.4)',
                    marginBottom: '12px'
                  }}
                >
                  {project.location}
                </p>

                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.6,
                    color: 'rgba(10, 10, 10, 0.7)'
                  }}
                >
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      }

      metricsHeadline="What this looks like."
      metricsCards={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0',
              padding: '40px'
            }}
          >
            <h3 style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '32px'
            }}>
              LinkedIn
            </h3>

            <div className="space-y-6">
              <div>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FF2E63',
                  lineHeight: 1
                }}>
                  +300%
                </p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '8px'
                }}>
                  Growth
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FF2E63',
                  lineHeight: 1
                }}>
                  +4K
                </p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '8px'
                }}>
                  Followers
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FF2E63',
                  lineHeight: 1
                }}>
                  +335K
                </p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '8px'
                }}>
                  Annual Impressions
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FF2E63',
                  lineHeight: 1
                }}>
                  +68K
                </p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '8px'
                }}>
                  Organic Reach / Year
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '0',
              padding: '40px'
            }}
          >
            <h3 style={{
              fontSize: '20px',
              fontWeight: 600,
              color: '#FFFFFF',
              marginBottom: '32px'
            }}>
              Instagram
            </h3>

            <div className="space-y-6">
              <div>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FF2E63',
                  lineHeight: 1
                }}>
                  500K
                </p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '8px'
                }}>
                  Views in 90 Days
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FF2E63',
                  lineHeight: 1
                }}>
                  16K
                </p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '8px'
                }}>
                  People Reached
                </p>
              </div>

              <div>
                <p style={{
                  fontSize: '48px',
                  fontWeight: 700,
                  color: '#FF2E63',
                  lineHeight: 1
                }}>
                  153
                </p>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginTop: '8px'
                }}>
                  Pieces of Content Shared
                </p>
              </div>
            </div>
          </div>
        </div>
      }

      outcomesHeadline="What travels now"
      outcomesDescription="Three years later: belief that travels when Karen isn't in the room."
      outcomes={[
        {
          highlight: "20,000 followers",
          description: "where there had been silence"
        },
        {
          highlight: "Florida presence",
          description: "built from zero — ten high-end Miami bids won"
        },
        {
          highlight: "UAE partnership",
          description: "that started with content — Saadiyat Music Festival"
        },
        {
          highlight: "International expansion",
          description: "across three continents — Indonesia, Spain, Hawaii"
        },
        {
          highlight: "Press",
          description: "that validates beyond Peru — AD, Semana Económica"
        },
        {
          highlight: "Speaking invitations",
          description: "at architecture conferences"
        }
      ]}

      testimonialQuote="CRUDA helped us translate three decades of expertise into a story that works everywhere — from Lima to Miami to Dubai. The work was always exceptional. Now people outside Peru can see it."
      testimonialAuthor="Karen Mannheim"
      testimonialTitle="Founder, TRAZZO Lighting"

      ctaHeadline="Want to build trust like Karen?"
      ctaButtonText="Start Your Story →"
      ctaButtonLink="/contact"

      dividerImages={[
        { src: karenMannheim.src, position: 'center 25%' },
        { src: karenProjectConstruction.src, position: 'center 30%' }
      ]}
    />
  );
};

export default KarenMannheimCaseStudy;
