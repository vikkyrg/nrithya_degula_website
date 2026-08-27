import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "Screenshot 2026-08-27 150958.png",
  "Screenshot 2026-08-27 151009.png",
  "Screenshot 2026-08-27 151016.png",
  "Screenshot 2026-08-27 151028.png",
  "Screenshot 2026-08-27 151036.png",
  "Screenshot 2026-08-27 151045.png",
  "Screenshot 2026-08-27 151053.png",
  "Screenshot 2026-08-27 151102.png",
  "Screenshot 2026-08-27 151111.png",
  "Screenshot 2026-08-27 151119.png",
  "Screenshot 2026-08-27 151127.png",
  "Screenshot 2026-08-27 151135.png",
  "Screenshot 2026-08-27 151143.png",
  "Screenshot 2026-08-27 151150.png",
  "Screenshot 2026-08-27 151158.png",
  "Screenshot 2026-08-27 151205.png"
].map(img => `/images/New folder/${img}`);

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev < images.length - 1 ? prev + 1 : prev));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedIndex(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section id="gallery" className="py-20 bg-[#160B07] relative overflow-hidden border-t border-[#C59A4E]/10">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#C59A4E]/5 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#C59A4E]/5 blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-[#C59A4E] mb-4 tracking-wider uppercase">
            Our Gallery
          </h2>
          <div className="w-24 h-1 bg-[#C59A4E] mx-auto opacity-70 rounded-full mb-6"></div>
          <p className="text-[#F4EBDD]/80 max-w-2xl mx-auto text-sm md:text-base font-light">
            Glimpses of our vibrant performances, memorable events, and the essence of our dance journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl bg-black cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(197,154,78,0.3)] transition-all duration-500"
              onClick={() => setSelectedIndex(index)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-40"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <ZoomIn className="text-[#C59A4E] w-12 h-12 drop-shadow-[0_0_10px_rgba(197,154,78,0.5)]" strokeWidth={1} />
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-[#C59A4E]/0 group-hover:border-[#C59A4E]/40 rounded-xl transition-colors duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 transition-all duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <button 
            className="absolute top-6 right-6 md:top-8 md:right-8 text-[#C59A4E] hover:text-white transition-colors duration-300 z-50 bg-black/50 hover:bg-[#C59A4E]/20 p-2 rounded-full border border-[#C59A4E]/30"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex(null);
            }}
          >
            <X size={28} strokeWidth={1.5} />
          </button>

          {selectedIndex > 0 && (
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-[#C59A4E] hover:text-white transition-colors duration-300 z-50 bg-black/50 hover:bg-[#C59A4E]/20 p-2 md:p-3 rounded-full border border-[#C59A4E]/30"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>
          )}

          {selectedIndex < images.length - 1 && (
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-[#C59A4E] hover:text-white transition-colors duration-300 z-50 bg-black/50 hover:bg-[#C59A4E]/20 p-2 md:p-3 rounded-full border border-[#C59A4E]/30"
              onClick={handleNext}
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>
          )}
          
          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300" 
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={images[selectedIndex]} 
              alt={`Selected gallery view ${selectedIndex + 1}`} 
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl border border-[#C59A4E]/20"
            />
          </div>
        </div>
      )}
    </section>
  );
}
