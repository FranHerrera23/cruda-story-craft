import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pillars = [
  {
    number: "01",
    title: "Your Narrative",
    description: "A coherent story you can use everywhere — not just to explain what you do, but why it matters."
  },
  {
    number: "02",
    title: "Your Positioning",
    description: "The exact language that makes investors, clients, and your team get it in seconds."
  },
  {
    number: "03",
    title: "Your Voice",
    description: "Communication that sounds like you, not like a PR team. Scalable, but never generic."
  }
];

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section 
      ref={sectionRef}
      className="bg-bone text-charcoal pt-[120px] pb-[120px] px-6 md:px-20"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* Main Headline - Centered */}
        <motion.h2 
          className="font-display text-[36px] md:text-[56px] font-bold leading-[1.1] tracking-tight-2 max-w-[700px] mx-auto text-center mb-[60px]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0, ease: [0.33, 1, 0.68, 1] }}
        >
          We don't make content. We build the system that makes people trust you.
        </motion.h2>

        {/* Red Divider - Centered */}
        <motion.div 
          className="h-[2px] w-[120px] bg-signal-red mx-auto mb-[80px]"
          initial={{ width: 0 }}
          animate={isInView ? { width: 120 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[60px] md:gap-[40px] mb-[80px]">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.number}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.5 + index * 0.2,
                ease: [0.33, 1, 0.68, 1]
              }}
            >
              {/* Number */}
              <div className="text-sm font-semibold text-signal-red uppercase tracking-[0.1em] mb-6">
                {pillar.number}
              </div>
              
              {/* Title */}
              <h3 className="font-display text-[28px] font-bold leading-[1.2] mb-4">
                {pillar.title}
              </h3>
              
              {/* Description */}
              <p className="text-lg leading-[1.7] opacity-80">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div 
          className="max-w-[650px] mx-auto text-center mt-[120px]"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.8, 
            delay: 1.8,
            ease: [0.33, 1, 0.68, 1]
          }}
        >
          <p className="text-2xl font-medium leading-[1.4]">
            Behind every remarkable company is a <span className="text-signal-red">story</span>.
          </p>
          <p className="text-2xl font-medium leading-[1.4] mt-4">
            Ours is helping you tell yours, with <span className="text-signal-red">clarity, authenticity, and resonance</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
