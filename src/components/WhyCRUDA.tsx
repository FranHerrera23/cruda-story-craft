const noise = [
  "Viral threads.",
  "Founder cosplay.",
  "Performance over substance."
];

const WhyCRUDA = () => {
  return (
    <section className="py-30 px-6 md:px-30 bg-charcoal text-bone">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 space-y-8">
          <p className="text-2xl md:text-3xl font-display font-medium leading-tight">
            The market rewards noise.
          </p>
          
          <div className="space-y-4">
            {noise.map((item, index) => (
              <p 
                key={index}
                className="strikethrough-red text-xl md:text-2xl slow-reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div className="space-y-12 mt-24">
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl">
            The loudest people aren't always the best builders.
            <br />
            <span className="text-bone/60">The best builders are often invisible.</span>
          </p>

          <div className="pt-8">
            <h2 className="font-display text-section font-semibold mb-8 tracking-tight-2">
              We're not here to make you look good.
              <br />
              We're here to make you understood.
            </h2>
            
            <p className="text-lg text-bone/80 max-w-3xl leading-relaxed">
              CRUDA is a studio for those who build first, speak later — and are finally ready to be seen{" "}
              <span className="font-display font-medium text-bone">on their own terms</span>.
            </p>
          </div>

          <div className="pt-16 flex items-center gap-6">
            <div className="h-px flex-1 bg-signal-red/40"></div>
            <div className="space-y-2 text-center">
              <p className="text-signal-red font-display text-2xl font-bold tracking-wide-5">
                PRECISION
              </p>
              <p className="text-signal-red font-display text-2xl font-bold tracking-wide-5">
                PERCEPTION
              </p>
              <p className="text-signal-red font-display text-2xl font-bold tracking-wide-5">
                PRESENCE
              </p>
            </div>
            <div className="h-px flex-1 bg-signal-red/40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCRUDA;
