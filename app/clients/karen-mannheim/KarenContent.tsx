'use client';

import Link from "next/link";
import { ArrowLeft, ChevronDown } from "lucide-react";
import heroImage from "@/assets/karen-hero-new.jpg";
import pezetPoster from "@/assets/pezet-hero.jpg";
import fourSeasonsHero from "@/assets/four-seasons-hero.jpg";
import saadiyatHeroNew from "@/assets/saadiyat-hero-new.jpg";
import porscheCover from "@/assets/porsche-cover-new.png";
import karenMannheim from "@/assets/karen-mannheim-new.jpg";
import karenProjectConstruction from "@/assets/karen-project-construction.jpg";

const KarenMannheimCaseStudy = () => {
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

  const outcomes = [
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
  ];

  return (
    <div style={{ backgroundColor: '#FFFFFF' }}>
      {/* Back Navigation */}
      <div className="px-6 md:px-20 py-6" style={{ position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:opacity-70"
          style={{ color: '#FFFFFF' }}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>

      {/* =========================================
          SECTION 1: HERO
          Full-bleed image + headline overlay
      ========================================= */}
      <section
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${heroImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
        }}
      >
        <div className="max-w-4xl px-6 md:px-20">
          <p
            className="mb-8"
            style={{
              fontSize: '13px',
              color: '#FFFFFF',
              opacity: 0.8,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600
            }}
          >
            HIGH-END ARCHITECTURAL LIGHTING | LIMA, MIAMI, MADRID
          </p>
          <h1
            style={{
              fontSize: 'clamp(40px, 6vw, 64px)',
              color: '#FFFFFF',
              lineHeight: 1.0,
              fontWeight: 600,
              letterSpacing: '-0.03em'
            }}
          >
            When mastery doesn't travel
          </h1>
        </div>
        <div className="absolute bottom-10">
          <ChevronDown className="w-8 h-8 animate-bounce" style={{ color: '#FFFFFF' }} />
        </div>
      </section>

      {/* =========================================
          SECTION 2: THE SNAPSHOT
          Two columns — quick context
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[1100px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            {/* Left Column — THE CLIENT */}
            <div>
              <p
                className="mb-6"
                style={{
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                The Client
              </p>
              <div className="space-y-4">
                <p style={{
                  fontSize: '20px',
                  lineHeight: 1.7,
                  color: '#0A0A0A'
                }}>
                  Karen Mannheim<br />
                  Founder, TRAZZO Lighting<br />
                  Lima, Peru → Miami, Florida
                </p>
                <p style={{
                  fontSize: '20px',
                  lineHeight: 1.7,
                  color: '#0A0A0A'
                }}>
                  Porsche showrooms. Maserati dealerships.<br />
                  Four Seasons penthouses. Over a thousand<br />
                  projects across Peru.
                </p>
              </div>
            </div>

            {/* Right Column — THE CHALLENGE */}
            <div>
              <p
                className="mb-6"
                style={{
                  fontSize: '13px',
                  color: '#FF2E63',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 600
                }}
              >
                The Challenge
              </p>
              <div className="space-y-4">
                <p style={{
                  fontSize: '20px',
                  lineHeight: 1.7,
                  color: '#0A0A0A'
                }}>
                  Thirty years building Lima's most<br />
                  respected lighting firm.
                </p>
                <p style={{
                  fontSize: '20px',
                  lineHeight: 1.7,
                  color: '#0A0A0A'
                }}>
                  Zero presence outside Peru.
                </p>
                <p style={{
                  fontSize: '20px',
                  lineHeight: 1.7,
                  color: '#0A0A0A'
                }}>
                  She was ready for Miami.<br />
                  Miami didn't know she existed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: FULL-BLEED IMAGE DIVIDER #1
      ========================================= */}
      <section
        className="w-full"
        style={{
          height: '70vh',
          backgroundImage: `url(${karenMannheim.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 25%'
        }}
      />

      {/* =========================================
          SECTION 4: THE WORK THAT TRAVELS
          Project cards — the cold email moment
      ========================================= */}
      <section
        id="projects"
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1200px] mx-auto">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(36px, 5vw, 52px)',
              fontWeight: 600,
              color: '#0A0A0A',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}
          >
            The work that now travels
          </h2>

          <p
            className="mb-16"
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'rgba(10, 10, 10, 0.6)',
              maxWidth: '600px'
            }}
          >
            Each project shows how we turned thirty years of Peru expertise into stories that opened doors in Miami, the UAE, and beyond.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/karen-mannheim/${project.slug}`}
                className="group flex flex-col transition-all duration-300 hover:-translate-y-2"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
                }}
              >
                {/* Video thumbnail with play button */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '16/9' }}
                >
                  <img
                    src={project.poster.src}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Play button overlay */}
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

                {/* Project info */}
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
        </div>
      </section>

      {/* =========================================
          SECTION 5: THE CHALLENGE + THE TRANSLATION
          Condensed narrative — punchy
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div className="max-w-[900px] mx-auto">
          {/* Part A: The Challenge */}
          <div className="mb-20">
            <p
              className="mb-6"
              style={{
                fontSize: '13px',
                color: '#FF2E63',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              The Challenge
            </p>

            <h2
              className="mb-10"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                fontWeight: 600,
                color: '#0A0A0A',
                lineHeight: 1.2
              }}
            >
              Thirty years of work in Peru.<br />
              Zero presence in Miami.
            </h2>

            <div className="space-y-6" style={{ maxWidth: '700px' }}>
              <p style={{
                fontSize: '20px',
                lineHeight: 1.7,
                color: '#0A0A0A'
              }}>
                Her reputation was local.<br />
                Her ambition was international.
              </p>

              <p style={{
                fontSize: '20px',
                lineHeight: 1.7,
                color: '#0A0A0A'
              }}>
                The work spoke for itself — if you could see it. But you can't walk Miami developers through a Lima penthouse. You can't explain three decades of lighting expertise in an email.
              </p>

              <p style={{
                fontSize: '20px',
                lineHeight: 1.7,
                color: '#0A0A0A'
              }}>
                Karen needed to build belief remotely.
              </p>
            </div>
          </div>

          {/* Part B: The Translation */}
          <div>
            <p
              className="mb-6"
              style={{
                fontSize: '13px',
                color: '#FF2E63',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: 600
              }}
            >
              The Translation
            </p>

            <p
              className="mb-12"
              style={{
                fontSize: 'clamp(20px, 2.5vw, 24px)',
                lineHeight: 1.6,
                color: '#0A0A0A'
              }}
            >
              We built her story around three things:
            </p>

            {/* Three pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div
                style={{
                  backgroundColor: '#F5F1E8',
                  padding: '40px',
                  borderRadius: '4px'
                }}
              >
                <p style={{
                  fontSize: '13px',
                  color: '#FF2E63',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}>
                  01
                </p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  marginBottom: '12px'
                }}>
                  Technical depth
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'rgba(10, 10, 10, 0.6)'
                }}>
                  How light behaves on different materials. Thermal dynamics. Layering. Why lighting a restaurant is different from lighting a residence.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#F5F1E8',
                  padding: '40px',
                  borderRadius: '4px'
                }}
              >
                <p style={{
                  fontSize: '13px',
                  color: '#FF2E63',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}>
                  02
                </p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  marginBottom: '12px'
                }}>
                  Cross-cultural fluency
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'rgba(10, 10, 10, 0.6)'
                }}>
                  A Peruvian woman with German roots building a business in Miami. Understanding that light "speaks" differently across cultures.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#F5F1E8',
                  padding: '40px',
                  borderRadius: '4px'
                }}
              >
                <p style={{
                  fontSize: '13px',
                  color: '#FF2E63',
                  fontWeight: 600,
                  marginBottom: '16px'
                }}>
                  03
                </p>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: '#0A0A0A',
                  marginBottom: '12px'
                }}>
                  Challenging assumptions
                </h3>
                <p style={{
                  fontSize: '16px',
                  lineHeight: 1.6,
                  color: 'rgba(10, 10, 10, 0.6)'
                }}>
                  Why architects treat lighting as an afterthought. Why that's wrong. What changes when you design spaces with light as architecture.
                </p>
              </div>
            </div>

            <p style={{
              fontSize: '20px',
              lineHeight: 1.7,
              color: 'rgba(10, 10, 10, 0.7)',
              maxWidth: '700px'
            }}>
              The content wasn't promotional. It was Karen thinking out loud about thirty years of craft.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 7: DARK SECTION — THE RESULTS
          Metrics on black background
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#0A0A0A' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h2
            className="mb-16"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 600,
              color: '#FFFFFF',
              lineHeight: 1.2
            }}
          >
            What this looks like.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* LinkedIn Card */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
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

            {/* Instagram Card */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
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
        </div>
      </section>

      {/* =========================================
          SECTION 8: FULL-BLEED IMAGE DIVIDER #3
      ========================================= */}
      <section
        className="w-full"
        style={{
          height: '50vh',
          backgroundImage: `url(${karenProjectConstruction.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 30%'
        }}
      />

      {/* =========================================
          SECTION 9: WHAT TRAVELS NOW
          Six outcome cards
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-[1000px] mx-auto">
          <h2
            className="mb-6"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              fontWeight: 600,
              color: '#0A0A0A',
              lineHeight: 1.2
            }}
          >
            What travels now
          </h2>

          <p
            className="mb-16"
            style={{
              fontSize: '20px',
              lineHeight: 1.6,
              color: 'rgba(10, 10, 10, 0.6)'
            }}
          >
            Three years later: belief that travels when Karen isn't in the room.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {outcomes.map((outcome, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6"
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '4px'
                }}
              >
                <span style={{
                  color: '#FF2E63',
                  fontSize: '18px',
                  fontWeight: 700,
                  lineHeight: 1.4
                }}>
                  ✓
                </span>
                <p style={{
                  fontSize: '18px',
                  lineHeight: 1.6,
                  color: '#0A0A0A'
                }}>
                  <strong style={{ fontWeight: 700 }}>{outcome.highlight}</strong>{' '}
                  {outcome.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 10: TESTIMONIAL
          Karen quote with accent border
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20"
        style={{ backgroundColor: '#FFFFFF' }}
      >
        <div
          className="max-w-[800px] mx-auto pl-8 md:pl-10"
          style={{ borderLeft: '4px solid #FF2E63' }}
        >
          <p
            className="mb-8"
            style={{
              fontSize: 'clamp(22px, 2.8vw, 28px)',
              lineHeight: 1.6,
              color: '#0A0A0A',
              fontStyle: 'italic'
            }}
          >
            "CRUDA helped us translate three decades of expertise into a story that works everywhere — from Lima to Miami to Dubai. The work was always exceptional. Now people outside Peru can see it."
          </p>
          <p style={{
            fontSize: '14px',
            color: '#0A0A0A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            fontWeight: 600
          }}>
            — Karen Mannheim
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION 11: CTA
          "Want to build trust like Karen?"
      ========================================= */}
      <section
        className="py-20 md:py-28 px-6 md:px-20 text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <div className="max-w-3xl mx-auto">
          <h2
            className="mb-10"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              fontWeight: 600,
              color: '#0A0A0A',
              lineHeight: 1.2
            }}
          >
            Want to build trust like Karen?
          </h2>
          <Link
            href="/book-call"
            className="inline-block px-12 py-5 text-lg font-semibold transition-all duration-300 hover:opacity-90"
            style={{
              backgroundColor: '#0A0A0A',
              color: '#FFFFFF',
              borderRadius: '4px',
              fontSize: '18px',
              fontWeight: 600
            }}
          >
            Start Your Story →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default KarenMannheimCaseStudy;
