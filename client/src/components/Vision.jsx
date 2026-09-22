import { useReveal } from '../utils/useReveal';
import { siteData } from '../data/siteData';

export default function Vision() {
  const addToRefs = useReveal();

  return (
    <section className="py-24 md:py-40 bg-brand-dark relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-brand-gold/20 m-8"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-brand-gold/20 m-8"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 ref={addToRefs} className="text-sm md:text-base tracking-[0.3em] text-brand-gold uppercase font-semibold mb-8 reveal">
          Our Vision
        </h2>
        
        <blockquote ref={addToRefs} className="text-2xl md:text-4xl lg:text-5xl font-serif text-brand-beige leading-snug md:leading-normal italic reveal" style={{ transitionDelay: '100ms' }}>
          {siteData.vision}
        </blockquote>
        
        <div ref={addToRefs} className="mt-12 flex justify-center reveal" style={{ transitionDelay: '200ms' }}>
          <div className="h-px w-32 bg-brand-gold/50"></div>
        </div>
      </div>
    </section>
  );
}
