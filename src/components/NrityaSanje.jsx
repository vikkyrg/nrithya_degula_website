import { useReveal } from '../utils/useReveal';

export default function NrityaSanje() {
  const addToRefs = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-[#160B07] relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(197,154,78,0.04),_transparent_50%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,154,78,0.02),_transparent_50%)] pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE SECTION (LEFT) */}
          <div ref={addToRefs} className="w-full order-2 lg:order-1 reveal" style={{ transitionDelay: '100ms' }}>
            <div className="bg-[#1A0E09] p-3 shadow-2xl rounded-sm border border-[#C59A4E]/20 relative">
              <div className="aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] rounded-sm overflow-hidden bg-[#160B07]">
                <img 
                  src="/images/celebrate.png" 
                  alt="Nritya Sanje Performance"
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-[1.03] filter brightness-90 hover:brightness-100"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* CONTENT SECTION (RIGHT) */}
          <div className="flex flex-col justify-center text-center lg:text-left order-1 lg:order-2">
            
            <div ref={addToRefs} className="reveal">
              <span className="text-[#C59A4E] font-serif uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
                Annual Production
              </span>
            </div>
            
            <h2 ref={addToRefs} className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#F4EBDD] mb-6 reveal" style={{ transitionDelay: '100ms' }}>
              NRITYA SANJE
            </h2>
            
            <div ref={addToRefs} className="reveal" style={{ transitionDelay: '200ms' }}>
              <p className="text-xl md:text-2xl text-[#C59A4E] font-serif italic mb-8">
                "Celebrating Dance. Celebrating Tradition. Celebrating Our Students."
              </p>
            </div>

            <div ref={addToRefs} className="reveal" style={{ transitionDelay: '300ms' }}>
              <p className="text-[#F4EBDD]/80 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
                Nritya Sanje, the academy's annual gathering, is a celebration of dance, dedication, and the artistic journey of our students.
              </p>
            </div>
            
            {/* Metadata / Keywords */}
            <div ref={addToRefs} className="flex flex-wrap justify-center lg:justify-start gap-4 reveal" style={{ transitionDelay: '400ms' }}>
              {['Learn', 'Prepare', 'Perform', 'Express', 'Grow'].map((word) => (
                <div 
                  key={word}
                  className="py-2 px-4 border border-[#C59A4E]/20 rounded-sm text-[#C59A4E] font-serif uppercase tracking-[0.2em] text-[10px] bg-[#1A0E09]/50"
                >
                  {word}
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
