import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Your Narrative",
    description: "A coherent story you can use everywhere —\nnot just to explain what you do,\nbut why it matters."
  },
  {
    number: "02",
    title: "Your Positioning",
    description: "The exact language that makes\ninvestors, clients, and your team\nget it in seconds."
  },
  {
    number: "03",
    title: "Your Voice",
    description: "Communication that sounds like you,\nnot like a PR team.\nScalable, but never generic."
  }
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  return (
    <section 
      ref={sectionRef}
      className="bg-bone text-charcoal py-[72px] px-6 md:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Desktop: 2-column grid, Mobile/Tablet: stacked */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Introduction */}
          <div className="space-y-[72px]">
            {/* Headline - Each line animates in sequentially */}
            <div>
              <div className="mb-[72px]">
                <motion.h2 
                  className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight-2 leading-[1.1]"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                >
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.97 }}
                    transition={{ 
                      duration: 1.0, 
                      delay: 0.3,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                  >
                    We don't make content.
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.97 }}
                    transition={{ 
                      duration: 1.0, 
                      delay: 0.45,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                  >
                    We build the system that makes
                  </motion.span>
                  <motion.span
                    className="block"
                    initial={{ opacity: 0, y: 20, scale: 0.97 }}
                    animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.97 }}
                    transition={{ 
                      duration: 1.0, 
                      delay: 0.6,
                      ease: [0.33, 1, 0.68, 1]
                    }}
                  >
                    people trust you.
                  </motion.span>
                </motion.h2>
              </div>
              
              {/* Subhead */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 0.7 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
              >
                <p className="text-xl md:text-2xl font-medium leading-[1.7] mb-4">
                  Clarity across everything:
                </p>
                <p className="text-lg opacity-70 leading-[1.75]">
                  pitch decks, press interviews, client calls, hiring, LinkedIn, Instagram and beyond.
                  <br />
                  One clear thread.
                </p>
              </motion.div>
            </div>

            {/* Closing Statement - Desktop only shows here */}
            <motion.div 
              className="hidden lg:block pt-[72px]"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ 
                duration: 0.8, 
                delay: 4.5,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              <p className="text-xl leading-[1.75] font-medium mb-6">
                Behind every remarkable company is a story.
              </p>
              
              <p className="text-xl leading-[1.75] font-medium">
                Ours is helping you tell yours,<br />
                with clarity, authenticity, and resonance.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Three Pillars */}
          <div className="space-y-[48px] pt-0 lg:pt-[72px]">
            {pillars.map((pillar, index) => (
              <motion.div 
                key={index}
                className="pb-[48px] border-b border-charcoal/10 last:border-b-0 relative group cursor-pointer"
                onMouseEnter={() => setHoveredPillar(index)}
                onMouseLeave={() => setHoveredPillar(null)}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ 
                  duration: 0.6,
                  delay: 2.0 + (index * 0.3)
                }}
                style={{
                  willChange: 'transform, opacity'
                }}
              >
                {/* Hover background */}
                <motion.div
                  className="absolute inset-0 -mx-6 -my-4 rounded-lg"
                  initial={{ backgroundColor: 'transparent' }}
                  animate={{ 
                    backgroundColor: hoveredPillar === index ? 'rgba(255, 46, 99, 0.03)' : 'transparent'
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />
                
                {/* Left border on hover */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-1 bg-signal-red"
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ 
                    opacity: hoveredPillar === index ? 1 : 0,
                    x: hoveredPillar === index ? 0 : -4
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                />

                <div className="relative">
                  {/* Red Number - slides in from left */}
                  <motion.div 
                    className="mb-4"
                    initial={{ x: -30, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{ 
                      duration: 0.4,
                      delay: 2.0 + (index * 0.3),
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <motion.span 
                      className="text-signal-red text-sm font-semibold uppercase tracking-wide-5 inline-block"
                      animate={{ 
                        scale: hoveredPillar === index ? 1.15 : 1.0
                      }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      style={{
                        willChange: 'transform'
                      }}
                    >
                      {pillar.number}
                    </motion.span>
                  </motion.div>

                  {/* Title - fades in with scale */}
                  <motion.h3 
                    className="font-display text-2xl md:text-3xl font-bold tracking-tight-1 mb-4 relative"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
                    transition={{ 
                      duration: 0.5,
                      delay: 2.1 + (index * 0.3),
                      ease: [0.33, 1, 0.68, 1]
                    }}
                  >
                    {pillar.title}
                    {/* Red underline on hover */}
                    <motion.div
                      className="absolute -bottom-1 left-0 h-0.5 bg-signal-red"
                      initial={{ width: '0%' }}
                      animate={{ 
                        width: hoveredPillar === index ? '100%' : '0%'
                      }}
                      transition={{ duration: 0.2, ease: [0.65, 0, 0.35, 1] }}
                    />
                  </motion.h3>

                  {/* Body - fades in */}
                  <motion.p 
                    className="text-lg leading-[1.75] whitespace-pre-line opacity-80"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.8 } : { opacity: 0 }}
                    transition={{ 
                      duration: 0.6,
                      delay: 2.25 + (index * 0.3),
                      ease: "easeOut"
                    }}
                  >
                    {pillar.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement - Mobile/Tablet version */}
        <motion.div 
          className="lg:hidden mt-[72px]"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ 
            duration: 0.8, 
            delay: 3.5,
            ease: [0.33, 1, 0.68, 1]
          }}
        >
          <p className="text-xl leading-[1.75] font-medium mb-6">
            Behind every remarkable company is a story.
          </p>
          
          <p className="text-xl leading-[1.75] font-medium">
            Ours is helping you tell yours,<br />
            with clarity, authenticity, and resonance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
