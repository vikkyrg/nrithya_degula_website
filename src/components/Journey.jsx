import { useReveal } from '../utils/useReveal';
import { siteData } from '../data/siteData';

export default function Journey() {
  const addToRefs = useReveal();

  return (
    <section id="journey" className="py-20 md:py-32 bg-[#160B07] relative overflow-hidden text-[#F4EBDD]">

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,154,78,0.03),_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(197,154,78,0.03),_transparent_50%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADING SECTION */}
        <div className="text-center mb-16 lg:mb-24 flex flex-col items-center">
          <div ref={addToRefs} className="reveal">
            <span className="text-[#C59A4E] font-serif uppercase tracking-[0.3em] text-[10px] font-bold">
              Journey
            </span>
          </div>

          <h2 ref={addToRefs} className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#F4EBDD] mt-4 mb-6 reveal" style={{ transitionDelay: '100ms' }}>
            A Journey Beyond Borders
          </h2>

          <p ref={addToRefs} className="text-[#C59A4E] max-w-2xl mx-auto text-sm md:text-base font-serif italic tracking-wide reveal" style={{ transitionDelay: '200ms' }}>
            "Dance is not just taught at Nrityadegula — it is experienced, performed and shared with the world."
          </p>

          <div ref={addToRefs} className="mt-8 flex justify-center text-[#C59A4E]/40 reveal" style={{ transitionDelay: '300ms' }}>
            <span className="tracking-[0.5em] font-light">──────── ✦ ────────</span>
          </div>
        </div>

        {/* STORYTELLING CONTAINER (Relative for Timeline) */}
        <div className="relative">

          {/* Subtle Vertical Timeline Line (Desktop Only) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#C59A4E]/20 -translate-x-1/2" />

          {/* 1. NATIONAL PERFORMANCES */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-20 lg:mb-32">

            {/* Timeline Marker */}
            <div className="hidden lg:block absolute left-1/2 w-3 h-3 rounded-full bg-[#C59A4E] border-[4px] border-[#160B07] -translate-x-1/2 z-10" style={{ marginTop: '20%' }} />

            {/* Mobile Image (Shows first on mobile) */}
            <div ref={addToRefs} className="w-full lg:hidden reveal">
              <div className="p-2 border border-[#C59A4E]/30 bg-[#160B07] shadow-xl">
                <img src="/images/performance-1.png" alt="Performances in India" className="w-full h-auto aspect-[4/3] object-cover" loading="lazy" />
              </div>
            </div>

            {/* Text Content */}
            <div ref={addToRefs} className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right reveal" style={{ transitionDelay: '100ms' }}>
              <div className="max-w-xl">
                <span className="text-[#C59A4E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                  Stages Across India
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EBDD] mb-6">
                  National Performances
                </h3>

                <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6">
                  {siteData.indiaPerformances.map((place, i) => (
                    <div key={place} className={`text-sm ${place.includes('Several other') ? 'col-span-2 mt-2 text-[#F4EBDD]/50 italic text-xs' : 'text-[#F4EBDD]/90'}`}>
                      {place}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            <div ref={addToRefs} className="hidden lg:block w-full lg:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="p-3 border border-[#C59A4E]/20 bg-[#1A0E09] shadow-2xl">
                <img src="/images/performance-1.png" alt="Performances in India" className="w-full h-[400px] object-cover filter brightness-90 hover:brightness-100 transition-all duration-500" loading="lazy" />
              </div>
            </div>
          </div>


          {/* 2. INTERNATIONAL EXPOSURE */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-20 lg:mb-32">

            {/* Timeline Marker */}
            <div className="hidden lg:block absolute left-1/2 w-3 h-3 rounded-full bg-[#C59A4E] border-[4px] border-[#160B07] -translate-x-1/2 z-10" style={{ marginTop: '20%' }} />

            {/* Image (Mobile & Desktop) */}
            <div ref={addToRefs} className="w-full lg:w-1/2 reveal">
              <div className="p-2 lg:p-3 border border-[#C59A4E]/20 bg-[#1A0E09] shadow-2xl">
                <img src="/images/international-performance.png" alt="International Performance" className="w-full h-auto lg:h-[400px] aspect-[4/3] lg:aspect-auto object-cover filter brightness-90 hover:brightness-100 transition-all duration-500" loading="lazy" />
              </div>
            </div>

            {/* Text Content */}
            <div ref={addToRefs} className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left reveal" style={{ transitionDelay: '100ms' }}>
              <div className="max-w-xl">
                <span className="text-[#C59A4E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                  Global Cultural Exchange
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EBDD] mb-6">
                  International Exposure
                </h3>

                <p className="text-[#F4EBDD]/80 mb-8 leading-relaxed text-sm sm:text-base">
                  These international journeys provide students with valuable exposure to different cultures while allowing them to proudly present the beauty of Indian classical dance on global platforms.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-4">
                  {siteData.internationalPerformances.map((place) => (
                    <div key={place} className="flex flex-col items-center lg:items-start">
                      <span className="text-[#C59A4E] font-serif text-sm font-semibold tracking-wider uppercase">
                        {place}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>


          {/* 3. A LEGACY IN HISTORY */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

            {/* Timeline Marker */}
            <div className="hidden lg:block absolute left-1/2 w-3 h-3 rounded-full bg-[#C59A4E] border-[4px] border-[#160B07] -translate-x-1/2 z-10" style={{ marginTop: '15%' }} />

            {/* Mobile Image (Shows first on mobile) */}
            <div ref={addToRefs} className="w-full lg:hidden reveal">
              <div className="p-2 border border-[#C59A4E]/30 bg-[#160B07] shadow-xl">
                <img src="/images/guinness.png" alt="Guinness Book of Records" className="w-full h-auto aspect-[4/3] object-cover" loading="lazy" />
              </div>
            </div>

            {/* Text Content */}
            <div ref={addToRefs} className="w-full lg:w-1/2 flex flex-col items-center lg:items-end text-center lg:text-right reveal" style={{ transitionDelay: '100ms' }}>
              <div className="max-w-xl">
                <span className="text-[#C59A4E] text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">
                  Guinness Achievement
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F4EBDD] mb-6">
                  A Moment in History
                </h3>

                <p className="text-[#F4EBDD]/80 leading-relaxed text-sm sm:text-base">
                  Guru Kamakshi and her students secured a place in the <strong className="text-[#C59A4E] font-semibold">Guinness Book of Records</strong> by participating in the largest Bharatanatyam dance show held in Chidambaram.
                </p>
              </div>
            </div>

            {/* Desktop Image */}
            <div ref={addToRefs} className="hidden lg:block w-full lg:w-1/2 reveal" style={{ transitionDelay: '200ms' }}>
              <div className="p-3 border border-[#C59A4E]/20 bg-[#1A0E09] shadow-2xl">
                <img src="/images/guinness.png" alt="Guinness Book of Records" className="w-full h-[350px] object-cover filter brightness-90 hover:brightness-100 transition-all duration-500" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
