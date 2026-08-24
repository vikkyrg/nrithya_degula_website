import { useReveal } from '../utils/useReveal';

export default function Hero() {
  const addToRefs = useReveal();

  return (
    <section 
      id="home" 
      className="relative w-full overflow-hidden flex flex-col bg-[#160B07] min-h-[680px] h-[100svh] max-h-[900px] lg:max-h-[1080px]"
    >
      
      {/* =========================================
          BACKGROUND LAYER 
          ========================================= */}
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#160B07] via-[#24130C] to-[#160B07] pointer-events-none z-0" />
      
      {/* Subtle Warm Glow (Centered behind dancer) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(212,175,55,0.12),_transparent_60%)] pointer-events-none z-0" />

      {/* DECORATIVE HERITAGE ELEMENTS */}
      <img
        src="/images/home/nrityadeguia-temple-background.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute left-[-15%] top-[5%] w-[60%] md:w-[30%] lg:left-[-2%] lg:top-[15%] lg:w-[20%] h-auto lg:h-[70%] object-contain opacity-10 lg:opacity-20 mix-blend-screen z-10"
      />
      
      <img
        src="/images/home/golden-nataraja-statue.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute right-[-5%] top-[10%] w-[25%] lg:right-[5%] lg:top-[15%] lg:w-[12%] object-contain z-10 opacity-30 lg:opacity-75 drop-shadow-xl"
      />


      {/* =========================================
          MAIN CONTENT CONTAINER
          ========================================= */}
      <div className="relative z-30 w-full h-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center pt-24 pb-8 lg:pt-28">
        
        {/* 1. PRIMARY VISUAL (Dancer & 25+) */}
        <div ref={addToRefs} className="relative flex justify-center items-end w-full max-w-4xl h-[40vh] min-h-[250px] lg:h-[45vh] lg:min-h-[350px] reveal" style={{ transitionDelay: '200ms' }}>
          
          {/* 25+ Badge (Relative to Dancer, Desktop Only) */}
          <div className="hidden lg:flex absolute left-[5%] bottom-[30%] flex-col items-start drop-shadow-xl">
            <h2 className="font-serif text-6xl font-bold text-[#C59A4E] leading-none flex items-start">
              25<span className="text-3xl mt-2">+</span>
            </h2>
            <p className="text-lg font-serif text-[#C59A4E] tracking-[0.25em] ml-1 mt-[-2px]">
              YEARS
            </p>
          </div>

          {/* Mobile 25+ Badge */}
          <div className="lg:hidden absolute left-0 top-0 flex flex-col items-start drop-shadow-xl">
            <h2 className="font-serif text-4xl font-bold text-[#C59A4E] leading-none flex items-start">
              25<span className="text-xl mt-1">+</span>
            </h2>
            <p className="text-xs font-serif text-[#C59A4E] tracking-[0.25em] ml-1 mt-[-2px]">
              YEARS
            </p>
          </div>

          {/* Main Dancer */}
          <img
            src="/images/home/guru-vidushi-smt-kamakshi.png"
            alt="Nritya Guru Vidushi Smt. Kamakshi"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_0_40px_rgba(212,175,55,0.3)]"
          />
        </div>

        {/* 2. BRAND LOCKUP */}
        <div ref={addToRefs} className="flex flex-col items-center text-center mt-6 lg:mt-8 reveal" style={{ transitionDelay: '400ms' }}>
          <h1 
            className="font-serif text-[clamp(32px,5vw,75px)] tracking-[0.1em] leading-none mb-2 bg-gradient-to-b from-[#FFF5D1] via-[#D4AF37] to-[#8C6208] text-transparent bg-clip-text"
            style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.8))' }}
          >
            NRITYADEGUIA
          </h1>
          <h2 className="text-[clamp(10px,1.2vw,18px)] text-[#F4EBDD] uppercase tracking-[0.4em] font-light opacity-90 drop-shadow-md">
            School of Dance
          </h2>
        </div>

        {/* 3. TAGLINE */}
        <div ref={addToRefs} className="mt-4 lg:mt-6 text-center max-w-[90%] reveal" style={{ transitionDelay: '550ms' }}>
          <p className="text-[#F4EBDD]/90 italic font-serif text-[clamp(12px,1.2vw,20px)] tracking-wide">
            25+ Years of Preserving Tradition <span className="text-[#C59A4E] mx-2 lg:mx-3">•</span> Nurturing Talent <span className="text-[#C59A4E] mx-2 lg:mx-3">•</span> Creating Artists
          </p>
        </div>

        {/* 4. CTA BUTTONS */}
        <div ref={addToRefs} className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 lg:gap-6 w-full sm:w-auto px-4 sm:px-0 reveal" style={{ transitionDelay: '700ms' }}>
          <a 
            href="#journey" 
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#C59A4E] text-[#160B07] font-medium tracking-[0.15em] uppercase text-xs hover:bg-[#E2C27A] transition-colors duration-200"
          >
            Explore Our Journey
          </a>
          <a 
            href="#contact" 
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-transparent border border-[#C59A4E] text-[#C59A4E] font-medium tracking-[0.15em] uppercase text-xs hover:bg-[#C59A4E] hover:text-[#160B07] transition-colors duration-200"
          >
            Enquire Now
          </a>
        </div>

      </div>
    </section>
  );
}
