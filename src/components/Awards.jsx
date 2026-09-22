import { useReveal } from '../utils/useReveal';
import { siteData } from '../data/siteData';

export default function Awards() {
  const addToRefs = useReveal();

  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 bg-[#FDFBF7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-16 lg:mb-20">
          <div ref={addToRefs} className="reveal">
            <span className="text-[#C59A4E] font-serif uppercase tracking-[0.25em] text-xs font-semibold">
              Recognition
            </span>
          </div>
          <h2 ref={addToRefs} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3B2818] mt-4 mb-6 reveal" style={{ transitionDelay: '100ms' }}>
            Awards & Recognitions
          </h2>
          <div ref={addToRefs} className="flex justify-center reveal" style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
              <div className="w-2 h-2 rotate-45 border border-[#C59A4E]/60" />
              <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
            </div>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* IMAGE GALLERY (LEFT) */}
          <div className="lg:col-span-5 flex flex-col gap-6 md:flex-row lg:flex-col">
            <div ref={addToRefs} className="w-full reveal" style={{ transitionDelay: '300ms' }}>
              <div className="bg-[#FFFFFF] p-2 md:p-3 border border-[#C59A4E]/30 shadow-lg rounded-sm transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/images/award-01.png" 
                  alt="Award Ceremony" 
                  className="w-full h-auto md:h-64 lg:h-auto object-cover rounded-sm" 
                  loading="lazy" 
                />
              </div>
            </div>
            <div ref={addToRefs} className="w-full reveal" style={{ transitionDelay: '400ms' }}>
              <div className="bg-[#FFFFFF] p-2 md:p-3 border border-[#C59A4E]/30 shadow-lg rounded-sm transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/images/award-02.png" 
                  alt="Awards Recognition" 
                  className="w-full h-auto md:h-64 lg:h-auto object-cover rounded-sm" 
                  loading="lazy" 
                />
              </div>
            </div>
          </div>

          {/* AWARDS LIST (RIGHT) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {siteData.awards.map((award, index) => (
              <div 
                key={`${award.year}-${award.title}`} 
                ref={addToRefs}
                className="bg-[#FFFFFF] p-6 lg:p-7 shadow-sm border border-[#C59A4E]/20 relative overflow-hidden group hover:shadow-md transition-all duration-300 reveal"
                style={{ transitionDelay: `${Math.min(500 + (index * 50), 900)}ms` }}
              >
                {/* Subtle Gold Accent Line */}
                <div className="absolute left-0 top-0 w-1 h-full bg-[#C59A4E]/60 transition-all duration-300 group-hover:bg-[#C59A4E]" />
                
                <div className="flex flex-col h-full justify-center pl-2">
                  <span className="text-[#C59A4E] text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
                    {award.year}
                  </span>
                  <h3 className="text-[#3B2818] font-serif font-semibold text-[15px] leading-snug group-hover:text-[#8C6208] transition-colors">
                    {award.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
