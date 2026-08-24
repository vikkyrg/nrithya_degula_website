import { useReveal } from '../utils/useReveal';

export default function Workshop() {
  const addToRefs = useReveal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* SECTION DIVIDER (Top) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <div className="h-[1px] w-full max-w-7xl bg-gradient-to-r from-transparent via-[#C59A4E]/30 to-transparent" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-16 lg:mb-20">
          <div ref={addToRefs} className="reveal">
            <span className="text-[#C59A4E] font-serif uppercase tracking-[0.25em] text-xs font-semibold">
              Workshops
            </span>
          </div>
          <h2 ref={addToRefs} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3B2818] mt-4 mb-4 reveal" style={{ transitionDelay: '100ms' }}>
            Beyond Performance
          </h2>
        </div>

        {/* TWO-COLUMN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* IMAGE SECTION (LEFT) */}
          <div ref={addToRefs} className="w-full mx-auto max-w-lg lg:max-w-none reveal" style={{ transitionDelay: '200ms' }}>
            <div className="bg-[#FFFFFF] p-3 shadow-xl rounded-sm border border-[#C59A4E]/20 relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden bg-[#160B07]">
                <img 
                  src="/images/international-performance.png" 
                  alt="Workshop in Dubai"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* TEXT SECTION (RIGHT) */}
          <div ref={addToRefs} className="flex flex-col justify-center text-center lg:text-left reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#3B2818] mb-6 leading-tight">
              International Workshops & Cultural Exchange
            </h3>
            
            <p className="text-[#3B2818] font-serif text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Guru Kamakshi also conducted a Bharatanatyam workshop at the <strong className="text-[#8C6208] font-semibold">Sharjah School of Music and Dance in Dubai</strong>, sharing her knowledge and experience internationally.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
