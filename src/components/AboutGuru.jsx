import { useReveal } from '../utils/useReveal';
import { siteData } from '../data/siteData';

export default function AboutGuru() {
  const addToRefs = useReveal();

  return (
    <section id="guru" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-16 lg:mb-20">
          <div ref={addToRefs} className="reveal">
            <span className="text-[#C59A4E] font-serif uppercase tracking-[0.25em] text-xs font-semibold">
              The Guru
            </span>
          </div>
          
          <h2 ref={addToRefs} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3B2818] mt-4 mb-3 reveal" style={{ transitionDelay: '100ms' }}>
            {siteData.guru.name}
          </h2>
          
          <div ref={addToRefs} className="reveal" style={{ transitionDelay: '200ms' }}>
            <p className="text-[#8C6208] italic tracking-wide text-sm font-serif">
              {siteData.guru.roles.join(" • ")}
            </p>
          </div>
        </div>

        {/* TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[4fr_6fr] gap-12 lg:gap-16 items-start">
          
          {/* GURU IMAGE (LEFT) */}
          <div ref={addToRefs} className="w-full max-w-sm mx-auto lg:max-w-none lg:mx-0 reveal" style={{ transitionDelay: '300ms' }}>
            <div className="relative bg-[#FFFFFF] p-3 shadow-xl rounded-sm border border-[#C59A4E]/20">
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#160B07]">
                <img 
                  src="/images/guru-kamakshi.png" 
                  alt={siteData.guru.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* BIOGRAPHY & INFORMATION (RIGHT) */}
          <div className="flex flex-col justify-start">
            
            {/* Biography Text */}
            <div ref={addToRefs} className="max-w-xl text-[#3B2818] font-serif text-lg md:text-xl leading-relaxed space-y-6 reveal" style={{ transitionDelay: '400ms' }}>
              <p>
                She is an accomplished Bharatanatyam dancer with over <span className="font-semibold text-[#8C6208]">25 years of experience</span> in training, performing and promoting the rich heritage of Bharatanatyam.
              </p>
              <p>
                Her sincere dedication, artistic excellence and nurturing approach have inspired hundreds of students to embrace the beauty and discipline of this classical art form.
              </p>
            </div>
            
            {/* Information Card */}
            <div ref={addToRefs} className="mt-12 lg:mt-16 reveal" style={{ transitionDelay: '500ms' }}>
              <div className="bg-[#FDFBF7] p-8 md:p-10 border border-[#C59A4E]/30 rounded-sm relative overflow-hidden shadow-sm">
                
                {/* Subtle Decorative Line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-[#C59A4E]/80" />
                
                <h3 className="font-serif text-xl font-bold text-[#3B2818] mb-8 tracking-wide">
                  Her Approach
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                  {siteData.approach.map((item) => (
                    <div key={item.title}>
                      <h4 className="font-serif uppercase tracking-widest text-[#C59A4E] text-[11px] font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-[#3B2818]/80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
