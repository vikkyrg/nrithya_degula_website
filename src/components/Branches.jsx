import { useReveal } from '../utils/useReveal';
import { MapPin } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Branches() {
  const addToRefs = useReveal();

  return (
    <section id="branches" className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADING */}
        <div className="text-center mb-16 md:mb-20">
          <div ref={addToRefs} className="reveal">
            <span className="text-[#C59A4E] font-serif uppercase tracking-[0.25em] text-xs font-semibold">
              Locations
            </span>
          </div>
          <h2 ref={addToRefs} className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#3B2818] mt-4 mb-6 reveal" style={{ transitionDelay: '100ms' }}>
            Our Branches
          </h2>
          <div ref={addToRefs} className="flex justify-center reveal" style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C59A4E]/60" />
              <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
            </div>
          </div>
        </div>

        {/* BRANCH GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {siteData.branches.map((branch, index) => (
            <div 
              key={branch}
              ref={addToRefs}
              className="relative p-8 border border-[#C59A4E]/20 group hover:shadow-xl transition-all duration-300 reveal flex flex-col items-center justify-center text-center overflow-hidden min-h-[220px] rounded-sm"
              style={{ transitionDelay: `${Math.min(300 + (index * 100), 800)}ms` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('/images/${index + 1}.png')` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/50 transition-colors duration-500 z-0" />
              
              {/* Subtle Numbering */}
              <div className="absolute top-4 left-4 text-white/50 font-serif font-bold text-sm tracking-widest group-hover:text-[#C59A4E] transition-colors z-10">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Gold Top Accent Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-[#C59A4E] group-hover:w-full transition-all duration-500 z-10" />

              {/* Icon */}
              <div className="mb-5 text-[#C59A4E] transform group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300 z-10">
                <MapPin size={28} strokeWidth={1.5} />
              </div>
              
              {/* Branch Name */}
              <h3 className="text-xl font-serif font-bold text-white tracking-wide z-10 drop-shadow-md">
                {branch}
              </h3>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
