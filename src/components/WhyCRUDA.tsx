const beliefs = [
  {
    title: "The market rewards noise",
    description: "Viral threads. Founder cosplay. Performance over substance."
  },
  {
    title: "The loudest people aren't always the best builders",
    description: "The best builders are often invisible."
  },
  {
    title: "Not content. Not performance.",
    description: "Precision. Perception. Presence."
  }
];

const WhyCRUDA = () => {
  return (
    <section className="py-32 px-6 bg-ivory">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-8">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">
            We're not here to make you look good.
            <br />
            We're here to make you understood.
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            CRUDA is a studio for those who build first, speak later — and are finally ready to be seen <span className="font-serif text-foreground">on their own terms</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className="bg-background border border-border p-8 space-y-4 hover:border-aged-gold/50 transition-all duration-500 liquid-glow"
            >
              <h3 className="text-xl font-serif tracking-tight editorial-underline pb-2">
                {belief.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {belief.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyCRUDA;
