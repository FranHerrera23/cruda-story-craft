const proofItems = [
  {
    type: "linkedin",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=350&h=450&fit=crop",
    caption: "Mike Kaeding's founder story reached 250K+ builders and generated 50+ partnership inquiries in 30 days"
  },
  {
    type: "press",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=350&h=450&fit=crop",
    caption: "Karen Mannheim featured in Architectural Digest after refining her positioning with CRUDA"
  },
  {
    type: "video",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=350&h=450&fit=crop",
    caption: "Alex Dmitriev's thought leadership series generated 15 Fortune 500 inbound leads"
  }
];

const SeeTheWork = () => {
  return (
    <section className="py-20 md:py-30 px-6 md:px-20 bg-bone">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[28px] md:text-[32px] font-bold text-center text-charcoal leading-[1.2] mb-12 md:mb-16">
          See the work
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {proofItems.map((item, index) => (
            <div 
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden mb-5 border-2 border-charcoal/10 transition-all duration-300 hover:border-signal-red/30 hover:shadow-lg">
                <img 
                  src={item.image} 
                  alt={item.caption}
                  className="w-full h-[400px] md:h-[450px] object-cover transition-all duration-300 group-hover:scale-105"
                  style={{
                    filter: 'grayscale(20%) contrast(1.05)'
                  }}
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-signal-red/90 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                      <div className="w-0 h-0 border-l-[12px] border-l-bone border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
              
              <p className="text-[16px] md:text-[17px] text-charcoal/80 leading-[1.5] text-center">
                {item.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeeTheWork;