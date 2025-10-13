import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import architectureImg from "@/assets/vertical-architecture.jpg";
import hospitalityImg from "@/assets/vertical-hospitality.jpg";
import athletesImg from "@/assets/vertical-athletes.jpg";

const verticals = [
  {
    title: "Construction, Architecture, Design & Materials",
    headline: "You build spaces that shape how people live.",
    description: "You've spent years perfecting your craft — understanding materials, timelines, and the details that turn vision into structure. Now you're ready to show the world who's behind the work.\n\nWhether you're positioning for international expansion, attracting larger projects, or inspiring the next generation of builders — your story needs to match the caliber of what you create.",
    closing: "We help you articulate it.",
    image: architectureImg,
    redAccent: "left",
    imageFilter: "grayscale(100%) contrast(1.2) brightness(1.05)"
  },
  {
    title: "Hospitality & Healthcare Leaders",
    headline: "You've mastered the art of crafting experiences that improve lives.",
    description: "Whether it's a guest who feels truly cared for or a patient who receives better outcomes — you know what excellence looks like in practice.\n\nNow it's time to turn that expertise into a story that builds brand equity, attracts the right partners, and makes people want to be part of what you're building.",
    closing: "We help you identify and articulate it.",
    image: hospitalityImg,
    redAccent: "bottom",
    imageFilter: "grayscale(100%) contrast(1.3) brightness(0.95)"
  },
  {
    title: "Professional Athletes & Sports Executives",
    headline: "You pursued your dream and made it real.",
    description: "That's why people admire you. You know what it takes to perform under pressure, build teams, and create legacy.\n\nBut athletic careers are finite. Building your personal brand now helps you diversify your portfolio, attract the right opportunities, and extend your influence long after you leave the field.",
    closing: "We help you build that foundation.",
    image: athletesImg,
    redAccent: "middle",
    imageFilter: "grayscale(100%) contrast(1.15) brightness(1.0)"
  }
];

const WhoWeWorkWith = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section ref={sectionRef} className="overflow-hidden">
      {/* Top Section - Charcoal Background */}
      <div className="bg-charcoal text-bone pt-[100px] md:pt-[100px] pb-20 px-8 md:px-20">
        <div className="max-w-[900px] mx-auto">
          <motion.h2 
            className="font-display text-[36px] md:text-[48px] font-semibold tracking-tight leading-[1.2] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            If explaining your work feels harder than doing it — you're not alone.
          </motion.h2>
          
          <motion.p 
            className="text-[18px] md:text-[20px] opacity-70 leading-[1.6]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.7 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            We work with builders who've mastered their craft but need help translating it into words that land.
          </motion.p>
        </div>
      </div>

      {/* Bottom Section - Bone Background */}
      <div className="bg-bone text-charcoal pt-20 md:pt-20 pb-[120px] px-8 md:px-20">
        <div className="max-w-[900px] mx-auto">
          {/* Three Verticals */}
          <div className="space-y-[80px] md:space-y-[100px]">
            {verticals.map((vertical, index) => {
              const verticalRef = useRef(null);
              const verticalInView = useInView(verticalRef, { once: true, amount: 0.3 });
              
              return (
                <div 
                  key={index}
                  ref={verticalRef}
                  className="space-y-10 md:space-y-10"
                >
                  {/* Image */}
                  <motion.div 
                    className="relative overflow-hidden w-full h-[300px] md:h-[400px] lg:h-[500px]"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={verticalInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <img 
                      src={vertical.image} 
                      alt={vertical.title}
                      className="w-full h-full object-cover"
                      style={{ 
                        filter: vertical.imageFilter,
                        imageRendering: 'crisp-edges'
                      }}
                    />
                    {/* Red accent borders */}
                    {vertical.redAccent === "left" && (
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-[2px] bg-signal-red"
                        initial={{ height: 0 }}
                        animate={verticalInView ? { height: "100%" } : {}}
                        transition={{ duration: 0.4, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
                      />
                    )}
                    {vertical.redAccent === "bottom" && (
                      <motion.div 
                        className="absolute left-0 right-0 bottom-0 h-[2px] bg-signal-red"
                        initial={{ width: 0 }}
                        animate={verticalInView ? { width: "100%" } : {}}
                        transition={{ duration: 0.4, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
                      />
                    )}
                    {vertical.redAccent === "middle" && (
                      <motion.div 
                        className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-signal-red"
                        initial={{ width: 0 }}
                        animate={verticalInView ? { width: "100%" } : {}}
                        transition={{ duration: 0.4, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
                      />
                    )}
                  </motion.div>

                  {/* Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={verticalInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <h3 className="font-display text-[20px] md:text-[24px] font-bold tracking-tight leading-[1.2] mb-3 md:mb-4">
                      {vertical.title}
                    </h3>
                    <p className="text-[18px] md:text-[20px] font-semibold leading-relaxed mb-3">
                      {vertical.headline}
                    </p>
                    <p className="text-[16px] md:text-[18px] leading-[1.7] opacity-80 whitespace-pre-line mb-4">
                      {vertical.description}
                    </p>
                    <p className="text-[16px] md:text-[18px] font-medium md:font-semibold text-signal-red">
                      {vertical.closing}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-[80px] md:mt-[120px]"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.p 
              className="text-[20px] md:text-[24px] font-medium mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              We help you tell that story.
            </motion.p>
            <motion.a 
              href="#contact" 
              className="inline-block px-12 md:px-14 py-4 md:py-5 bg-signal-red text-charcoal text-[16px] font-semibold rounded-sm hover:bg-signal-red/90 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Let's talk about your story
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
