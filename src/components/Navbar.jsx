import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#guru' },
    { name: 'Journey', href: '#journey' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Offerings', href: '#offerings' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Branches', href: '#branches' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#160B07]/95 backdrop-blur-md shadow-lg border-b border-[#C59A4E]/20 py-3 md:py-4'
        : 'bg-gradient-to-b from-black/60 to-transparent py-5 md:py-6'
        }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 group focus:outline-none">
              <img
                src="/images/home/nrityadegula-sunburst-logo.png"
                alt="Nrityadegula Logo"
                className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-105 transition-transform duration-500"
                style={{ filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.4))' }}
              />
              <div className="flex flex-col items-start text-left">
                <span className="font-serif font-bold text-xl md:text-2xl tracking-widest text-[#C59A4E] uppercase drop-shadow-md">
                  Nrityadegula
                </span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#F4EBDD] font-light">
                  School of Dance
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[11px] xl:text-xs font-serif uppercase tracking-[0.15em] text-[#F4EBDD] hover:text-[#C59A4E] transition-colors duration-300 group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C59A4E] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="ml-4 px-6 py-2 border border-[#C59A4E]/60 text-[#C59A4E] font-serif uppercase tracking-widest text-xs rounded-sm hover:bg-[#C59A4E] hover:text-[#160B07] transition-all duration-300 shadow-[0_0_15px_rgba(197,154,78,0.1)] hover:shadow-[0_0_20px_rgba(197,154,78,0.3)] focus:outline-none focus:ring-2 focus:ring-[#C59A4E]/50"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C59A4E] hover:text-[#F4EBDD] transition-colors duration-300 focus:outline-none p-2"
              aria-expanded={isOpen}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden absolute w-full bg-[#160B07]/98 backdrop-blur-xl transition-all duration-500 ease-in-out overflow-hidden shadow-2xl ${isOpen ? 'max-h-screen opacity-100 border-t border-[#C59A4E]/20' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-6 py-8 flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-serif uppercase tracking-[0.2em] text-[#F4EBDD] hover:text-[#C59A4E] transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#C59A4E] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <div className="pt-6 w-full flex justify-center">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block px-8 py-3 border border-[#C59A4E] text-[#C59A4E] font-serif uppercase tracking-widest text-xs rounded-sm hover:bg-[#C59A4E] hover:text-[#160B07] transition-all duration-300"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
