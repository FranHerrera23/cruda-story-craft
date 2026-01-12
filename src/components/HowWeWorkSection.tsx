import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect } from "react";

const HowWeWorkSection = () => {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>();
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  useEffect(() => {
    if (isVisible) {
      // Stagger node activation
      [0, 1, 2].forEach((index) => {
        setTimeout(() => {
          setActiveNodes(prev => [...prev, index]);
        }, 400 + (index * 400));
      });
    }
  }, [isVisible]);

  const timelineNodes = [
    {
      time: "MONTH 1",
      title: "We listen.",
      body: [
        "Weekly conversations. Your projects, your milestones, your way of seeing the world.",
        "We're not writing yet. We're finding the pattern."
      ]
    },
    {
      time: "MONTHS 2–6",
      title: "We build.",
      body: [
        "Your narrative — across LinkedIn, website, pitch decks, talking points.",
        "Not content for content's sake. A system that holds."
      ]
    },
    {
      time: "MONTH 7+",
      title: "Most clients stay.",
      body: [
        "Because the work evolves. New markets. New projects. New rooms to walk into."
      ]
    }
  ];

  return (
    <section 
      ref={elementRef} 
      className="how-section"
      style={{ 
        backgroundColor: '#FFFFFF',
        padding: '120px 80px'
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section Label */}
        <p 
          className="transition-all duration-700"
          style={{
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#FF2E63',
            marginBottom: '60px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          How it works
        </p>

        {/* Timeline Track - Desktop */}
        <div 
          className="timeline-track-desktop"
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'space-between',
            paddingTop: '12px'
          }}
        >
          {/* Background line */}
          <div 
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              right: '60px',
              height: '2px',
              background: 'rgba(10, 10, 10, 0.1)'
            }}
          />
          
          {/* Animated progress line */}
          <div 
            className="transition-all"
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              height: '2px',
              width: isVisible ? 'calc(100% - 72px)' : '0',
              background: '#FF2E63',
              transition: 'width 1.5s ease'
            }}
          />
          
          {/* Arrow at end */}
          <span 
            className="transition-all timeline-arrow"
            style={{
              position: 'absolute',
              right: '20px',
              top: '4px',
              fontSize: '20px',
              color: '#FF2E63',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              transitionDelay: '1.2s'
            }}
          >
            →
          </span>

          {/* Timeline Nodes */}
          {timelineNodes.map((node, index) => (
            <div 
              key={index}
              className="timeline-node"
              style={{
                flex: 1,
                paddingRight: index < 2 ? '40px' : 0
              }}
            >
              {/* Node dot */}
              <div 
                className="transition-all duration-300 node-dot"
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: activeNodes.includes(index) ? '#FF2E63' : '#FFFFFF',
                  border: `2px solid ${activeNodes.includes(index) ? '#FF2E63' : 'rgba(10, 10, 10, 0.1)'}`,
                  marginBottom: '32px',
                  position: 'relative',
                  zIndex: 2
                }}
              />
              
              {/* Node content */}
              <div className="node-content">
                <span 
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'rgba(10, 10, 10, 0.4)',
                    marginBottom: '12px',
                    display: 'block'
                  }}
                >
                  {node.time}
                </span>
                
                <h4 
                  style={{
                    fontSize: '22px',
                    fontWeight: '600',
                    color: '#0A0A0A',
                    marginBottom: '12px'
                  }}
                >
                  {node.title}
                </h4>
                
                {node.body.map((text, i) => (
                  <p 
                    key={i}
                    style={{
                      fontSize: '16px',
                      fontWeight: '400',
                      lineHeight: '1.6',
                      color: 'rgba(10, 10, 10, 0.6)',
                      maxWidth: '280px',
                      marginBottom: i < node.body.length - 1 ? '12px' : 0
                    }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Track - Mobile (Vertical) */}
        <div className="timeline-track-mobile" style={{ display: 'none' }}>
          {timelineNodes.map((node, index) => (
            <div 
              key={index}
              style={{
                position: 'relative',
                paddingLeft: '40px',
                paddingBottom: index < 2 ? '48px' : 0
              }}
            >
              {/* Vertical line */}
              {index < 2 && (
                <div 
                  style={{
                    position: 'absolute',
                    left: '11px',
                    top: '24px',
                    bottom: 0,
                    width: '2px',
                    background: 'rgba(10, 10, 10, 0.1)'
                  }}
                />
              )}
              
              {/* Node dot */}
              <div 
                style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: '#FF2E63',
                  border: '2px solid #FF2E63'
                }}
              />
              
              {/* Content */}
              <span 
                style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(10, 10, 10, 0.4)',
                  marginBottom: '12px',
                  display: 'block'
                }}
              >
                {node.time}
              </span>
              
              <h4 
                style={{
                  fontSize: '22px',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '12px'
                }}
              >
                {node.title}
              </h4>
              
              {node.body.map((text, i) => (
                <p 
                  key={i}
                  style={{
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '1.6',
                    color: 'rgba(10, 10, 10, 0.6)',
                    marginBottom: i < node.body.length - 1 ? '12px' : 0
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Styles */}
      <style>{`
        @media (max-width: 768px) {
          .how-section {
            padding: 80px 24px !important;
          }
          .timeline-track-desktop {
            display: none !important;
          }
          .timeline-track-mobile {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HowWeWorkSection;
