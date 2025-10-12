const beliefs = [
  {
    title: "We don't chase virality",
    description: "We craft presence. What sticks isn't what's loud — it's what's clear."
  },
  {
    title: "Clarity is kindness",
    description: "Vague messaging wastes everyone's time. We help you say what you mean."
  },
  {
    title: "Trust over performance",
    description: "Most founders are told to post more, say less, and 'be authentic.' We say: forget performance. Build clarity."
  }
];

const WhyCRUDA = () => {
  return (
    <section className="py-32 px-6 bg-bone">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 tracking-tighter">
            We're not here to make you look good.
            <br />
            We're here to make you understood.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {beliefs.map((belief, index) => (
            <div 
              key={index}
              className="bg-background border border-border p-8 space-y-4 hover:border-rust/50 transition-colors duration-300"
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

        <div className="mt-16 text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-rust max-w-2xl mx-auto">
            That's what sticks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCRUDA;
