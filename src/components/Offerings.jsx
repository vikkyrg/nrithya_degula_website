import { BookOpen, Flower2, UserCheck, Frame, Globe, Music } from 'lucide-react';
import { useReveal } from '../utils/useReveal';

export default function Offerings() {
  const addToRefs = useReveal();

  return (
    <section id="offerings" className="py-16 sm:py-20 lg:py-28 bg-[#160B07] text-[#F4EBDD] relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(197,154,78,0.03),_transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* =========================================
              LEFT COLUMN: WHAT WE OFFER
              ========================================= */}
          <div className="flex flex-col gap-10">
            
            <div ref={addToRefs} className="reveal text-center lg:text-left">
              <span className="text-[#C59A4E] font-serif uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4EBDD] mb-6">
                Our Academy Offerings
              </h2>
            </div>
            
            <div className="flex flex-col gap-8">
              
              {/* Offer 1 */}
              <div ref={addToRefs} className="flex gap-6 items-start reveal" style={{ transitionDelay: '100ms' }}>
                <div className="w-12 h-12 rounded-full border border-[#C59A4E]/40 flex items-center justify-center shrink-0 text-[#C59A4E] bg-[#1A0E09]">
                  <BookOpen size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[#C59A4E] font-serif uppercase tracking-widest text-base sm:text-lg mb-2">Examination Guidance</h3>
                  <p className="text-[#F4EBDD]/80 leading-relaxed font-light text-sm max-w-sm">
                    Preparation for Karnataka State Board and Akhil Bharatiya Gandharva Mahavidyalaya Mandal examinations.
                  </p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-[#C59A4E]/10" />

              {/* Offer 2 */}
              <div ref={addToRefs} className="flex gap-6 items-start reveal" style={{ transitionDelay: '200ms' }}>
                <div className="w-12 h-12 rounded-full border border-[#C59A4E]/40 flex items-center justify-center shrink-0 text-[#C59A4E] bg-[#1A0E09]">
                  <Flower2 size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[#C59A4E] font-serif uppercase tracking-widest text-base sm:text-lg mb-2">Annual Production</h3>
                  <p className="text-[#F4EBDD]/80 leading-relaxed font-light text-sm max-w-sm">
                    Annual production – Nritya Sanje, celebrating talent and tradition.
                  </p>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-[#C59A4E]/10" />

              {/* Offer 3 */}
              <div ref={addToRefs} className="flex gap-6 items-start reveal" style={{ transitionDelay: '300ms' }}>
                <div className="w-12 h-12 rounded-full border border-[#C59A4E]/40 flex items-center justify-center shrink-0 text-[#C59A4E] bg-[#1A0E09]">
                  <UserCheck size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-[#C59A4E] font-serif uppercase tracking-widest text-base sm:text-lg mb-2">Comprehensive Training</h3>
                  <p className="text-[#F4EBDD]/80 leading-relaxed font-light text-sm max-w-sm">
                    Quality training focusing on stage performance, national & international exposure, and specialized workshops.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* =========================================
              RIGHT COLUMN: STARTING SOON / CONVERSION
              ========================================= */}
          <div className="flex flex-col items-center lg:items-end justify-start h-full">
            
            <div ref={addToRefs} className="w-full max-w-md bg-[#1A0E09] border border-[#C59A4E]/30 p-2 shadow-2xl relative reveal" style={{ transitionDelay: '200ms' }}>
              
              {/* Decorative Plaque Accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#C59A4E] -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#C59A4E] translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#C59A4E] -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#C59A4E] translate-x-1 translate-y-1" />
              
              {/* Internal Content Container */}
              <div className="border border-[#C59A4E]/10 bg-[#160B07] p-8 sm:p-10 text-center flex flex-col items-center">
                
                {/* Announcement */}
                <h3 className="text-4xl sm:text-5xl font-serif text-[#C59A4E] tracking-widest mb-2 font-bold uppercase drop-shadow-md">
                  STARTING SOON!
                </h3>
                
                <p className="text-[#F4EBDD]/80 italic font-serif text-sm tracking-widest mb-8">
                  Classes will be commencing shortly.
                </p>
                
                {/* Image */}
                <div className="w-3/4 mx-auto overflow-hidden rounded-sm border border-[#C59A4E]/20 mb-8">
                  <img 
                    src="/images/start.png" 
                    alt="Bharatanatyam Admissions" 
                    loading="lazy"
                    className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                
                <p className="text-[#C59A4E] uppercase tracking-[0.2em] text-xs leading-relaxed mb-8 px-4">
                  Join us and begin your journey in the timeless beauty of Bharatanatyam.
                </p>
                
                {/* CTA */}
                <a 
                  href="#contact" 
                  className="w-full inline-block bg-[#C59A4E] text-[#160B07] font-serif uppercase tracking-[0.2em] text-xs font-bold py-4 rounded-sm hover:bg-[#F4EBDD] transition-colors duration-300 shadow-[0_4px_15px_rgba(197,154,78,0.2)]"
                >
                  Enquire Now
                </a>
                
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
