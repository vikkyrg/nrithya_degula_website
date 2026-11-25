import { useState, useEffect, useCallback } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import api from '../services/api';

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await api.get('/gallery');
        if (Array.isArray(res.data)) {
          setImages(res.data);
        } else {
          setImages([]);
        }
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setImages([]);
      }
    };
    fetchImages();
  }, []);

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev > 0 ? prev - 1 : prev));
  }, []);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === null ? null : prev < images.length - 1 ? prev + 1 : prev));
  }, [images.length]);

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
    <section id="gallery" className="py-20 sm:py-24 lg:py-32 bg-[#1A0E09] text-[#FAF8F5] relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C59A4E]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-[#C59A4E] font-serif uppercase tracking-[0.25em] text-[10px] font-bold block mb-4">
            Visual Symphony
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#FAF8F5] mb-6">
            Moments in Motion
          </h2>
          <div className="flex justify-center">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
              <div className="w-1.5 h-1.5 rotate-45 border border-[#C59A4E]/60" />
              <div className="h-[1px] w-12 bg-[#C59A4E]/40" />
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {images.map((img, idx) => (
            <div
              key={img._id || idx}
              onClick={() => setSelectedIndex(idx)}
              className="group relative h-72 sm:h-80 overflow-hidden bg-[#24140D] border border-[#C59A4E]/20 cursor-pointer shadow-lg hover:border-[#C59A4E]/60 transition-all duration-500"
            >
              <img
                src={img.imageData}
                alt={img.altText || img.title || 'Nritya Degula Gallery Image'}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#160B07]/90 via-[#160B07]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-xs uppercase tracking-widest text-[#C59A4E] font-medium mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Nritya Degula
                </span>
                <p className="font-serif text-lg font-bold text-[#FAF8F5] translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {img.title || 'Dance Moment'}
                </p>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1A0E09]/80 border border-[#C59A4E]/40 flex items-center justify-center text-[#C59A4E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {images.length === 0 && (
          <div className="text-center py-16 text-[#FAF8F5]/50 font-serif">
            Capturing upcoming performance moments. Check back soon.
          </div>
        )}
      </div>

      {/* Lightbox / Modal */}
      {selectedIndex !== null && images[selectedIndex] && (
        <div
          className="fixed inset-0 z-50 bg-[#160B07]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 text-[#FAF8F5]/70 hover:text-[#C59A4E] transition-colors p-2 z-50"
            aria-label="Close"
          >
            <X size={28} />
          </button>

          {/* Left Arrow */}
          {images.length > 1 && (
            <button
              onClick={handlePrev}
              disabled={selectedIndex === 0}
              className={`absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1A0E09]/60 border border-[#C59A4E]/30 text-[#FAF8F5] transition-all z-50 ${
                selectedIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#C59A4E] hover:text-[#1A0E09]'
              }`}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Main Image Container */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedIndex].imageData}
              alt={images[selectedIndex].altText || images[selectedIndex].title || 'Gallery image'}
              className="max-h-[75vh] w-auto max-w-full object-contain border border-[#C59A4E]/30 shadow-2xl"
            />
            {images[selectedIndex].title && (
              <div className="mt-4 text-center">
                <p className="font-serif text-lg text-[#FAF8F5] font-medium tracking-wide">
                  {images[selectedIndex].title}
                </p>
              </div>
            )}
            <span className="text-xs uppercase tracking-widest text-[#C59A4E] mt-1">
              {selectedIndex + 1} / {images.length}
            </span>
          </div>

          {/* Right Arrow */}
          {images.length > 1 && (
            <button
              onClick={handleNext}
              disabled={selectedIndex === images.length - 1}
              className={`absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#1A0E09]/60 border border-[#C59A4E]/30 text-[#FAF8F5] transition-all z-50 ${
                selectedIndex === images.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#C59A4E] hover:text-[#1A0E09]'
              }`}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
