import { siteData } from '../data/siteData';
import { MapPin, ChevronRight, Phone, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#guru' },
    { label: 'Journey', href: '#journey' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Offerings', href: '#offerings' },
    { label: 'Branches', href: '#branches' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#110805] text-[#F4EBDD] border-t border-[#C59A4E]/20 relative overflow-hidden">

      {/* Decorative Top Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#C59A4E]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">

        {/* =========================================
            EVENLY SPACED 4-COLUMN GRID
            ========================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">

          {/* COLUMN 1: BRAND IDENTITY & ABOUT */}
          <div className="flex flex-col items-start pr-0 lg:pr-4">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-[#C59A4E] blur-xl opacity-10 rounded-full" />
                <img
                  src="/images/home/nrityadegula-sunburst-logo.png"
                  alt="Nrityadegula Logo"
                  className="h-16 w-auto object-contain relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <h2 className="font-serif font-bold text-xl text-[#C59A4E] tracking-widest leading-none mb-1">
                  Nrityadegula
                </h2>
                <p className="text-[9px] uppercase tracking-[0.3em] text-[#F4EBDD]/60 font-medium">
                  School of Dance
                </p>
              </div>
            </div>

            {/* Expanded Content Section */}
            <p className="font-serif italic text-[#C59A4E] text-base mb-3 font-semibold">
              "{siteData.footerTagline}"
            </p>
            <p className="text-[#F4EBDD]/60 text-sm leading-relaxed mb-8">
              A premier Bharatanatyam academy dedicated to preserving the purity of classical arts while inspiring the next generation to carry forward its timeless beauty and discipline.
            </p>

            {/* Socials Block */}
            <div className="flex items-center gap-4">
              <a
                href={`https://instagram.com/${siteData.contact.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#1A0E09] border border-[#C59A4E]/30 rounded-full flex items-center justify-center text-[#C59A4E] hover:bg-[#C59A4E] hover:text-[#1A0E09] hover:border-[#C59A4E] transition-all duration-300 shadow-sm"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
              {siteData.contact.facebook.startsWith('http') ? (
                <a
                  href={siteData.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-[#1A0E09] border border-[#C59A4E]/30 rounded-full flex items-center justify-center text-[#C59A4E] hover:bg-[#C59A4E] hover:text-[#1A0E09] hover:border-[#C59A4E] transition-all duration-300 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
              ) : (
                <a
                  href={`https://facebook.com/${siteData.contact.facebook}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-[#1A0E09] border border-[#C59A4E]/30 rounded-full flex items-center justify-center text-[#C59A4E] hover:bg-[#C59A4E] hover:text-[#1A0E09] hover:border-[#C59A4E] transition-all duration-300 shadow-sm"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
              )}
            </div>
          </div>

          {/* COLUMN 2: EXPLORE */}
          <div className="flex flex-col lg:pl-6">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[#C59A4E] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#C59A4E]/60" />
              Explore
            </h3>
            <ul className="flex flex-col gap-4">
              {navLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group flex items-center text-[#F4EBDD]/70 hover:text-[#C59A4E] transition-colors duration-300 text-sm tracking-wide"
                  >
                    <ChevronRight size={14} className="text-[#C59A4E]/0 group-hover:text-[#C59A4E] -ml-2 group-hover:ml-0 transition-all duration-300 mr-2" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: LOCATIONS */}
          <div className="flex flex-col lg:pl-4">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[#C59A4E] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#C59A4E]/60" />
              Locations
            </h3>
            <ul className="flex flex-col gap-4">
              {siteData.branches.map((branch) => (
                <li key={branch} className="flex items-start gap-3 group">
                  <MapPin size={16} className="text-[#C59A4E]/40 group-hover:text-[#C59A4E] shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="text-[#F4EBDD]/70 group-hover:text-[#F4EBDD] text-sm tracking-wide transition-colors duration-300">
                    {branch}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONNECT */}
          <div className="flex flex-col lg:pl-2">
            <h3 className="text-xs uppercase tracking-[0.25em] font-bold text-[#C59A4E] mb-8 flex items-center gap-3">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#C59A4E]/60" />
              Connect
            </h3>

            <div className="flex flex-col gap-6">

              <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="flex items-start gap-4 group bg-[#1A0E09]/50 p-4 rounded-sm border border-[#C59A4E]/10 hover:border-[#C59A4E]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#110805] border border-[#C59A4E]/20 flex items-center justify-center text-[#C59A4E] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col justify-center h-10">
                  <span className="text-[#F4EBDD]/40 text-[9px] uppercase tracking-widest block mb-0.5 font-bold">
                    Call Us
                  </span>
                  <span className="text-[#F4EBDD]/90 font-serif text-sm tracking-wide group-hover:text-[#C59A4E] transition-colors">
                    {siteData.contact.phone}
                  </span>
                </div>
              </a>

              <a href={`mailto:${siteData.contact.email}`} className="flex items-start gap-4 group bg-[#1A0E09]/50 p-4 rounded-sm border border-[#C59A4E]/10 hover:border-[#C59A4E]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-[#110805] border border-[#C59A4E]/20 flex items-center justify-center text-[#C59A4E] shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail size={16} />
                </div>
                <div className="flex flex-col justify-center h-10 overflow-hidden">
                  <span className="text-[#F4EBDD]/40 text-[9px] uppercase tracking-widest block mb-0.5 font-bold">
                    Email Us
                  </span>
                  <span className="text-[#F4EBDD]/90 font-serif text-sm tracking-wide group-hover:text-[#C59A4E] transition-colors truncate">
                    {siteData.contact.email}
                  </span>
                </div>
              </a>

            </div>
          </div>

        </div>

      </div>

      {/* =========================================
          COPYRIGHT AREA
          ========================================= */}
      <div className="bg-[#0A0503] border-t border-[#C59A4E]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F4EBDD]/50 text-xs tracking-wider text-center">
            &copy; {currentYear} {siteData.academyName}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-1 h-1 rotate-45 bg-[#C59A4E]/40 hidden md:block" />
            <p className="text-[#C59A4E]/80 text-xs italic font-serif tracking-widest text-center">
              Developed by Innomatrics Technologies
            </p>
            <div className="w-1 h-1 rotate-45 bg-[#C59A4E]/40 hidden md:block" />
          </div>
        </div>
      </div>

    </footer>
  );
}
