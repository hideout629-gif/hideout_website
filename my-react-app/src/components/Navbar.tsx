import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Cottages', id: 'cottages' },
    { name: 'Experiences', id: 'experiences' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Reviews', id: 'reviews' },
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full dark-glass-nav border-b border-white/10 shadow-2xl transition-all duration-300">
      <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-5 md:py-6 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3.5 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl border border-[#E5C158]/50 bg-emerald-950/60 flex items-center justify-center p-2 shadow-inner group-hover:scale-105 transition-transform">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#E5C158]" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L3 9v11a1 1 0 001 1h16a1 1 0 001-1V9l-9-7z" fill="none"/>
              <path d="M12 7l6 5v7H6v-7l6-5z" fill="rgba(229,193,88,0.15)"/>
              <path d="M9 21V12h6v9" stroke="currentColor"/>
              <circle cx="12" cy="7" r="1.5" fill="#E5C158"/>
              <path d="M5 14h2M17 14h2" stroke="#E5C158"/>
            </svg>
          </div>
          <div>
            <div className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide leading-tight group-hover:text-[#E5C158] transition-colors">
              Ooty Cottage
            </div>
            <div className="text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-semibold text-[#E5C158]/90">
              Stay Close to Nature
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-2 text-base font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5C158] rounded-full shadow-[0_0_8px_#E5C158]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Desktop Right Phone */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2.5 text-base font-medium text-white/90 hover:text-[#E5C158] transition-colors"
          >
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#E5C158]">
              <Phone className="w-4 h-4" />
            </div>
            <span className="font-medium tracking-wide">+91 98765 43210</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-4 mb-4 dark-glass rounded-xl p-5 shadow-2xl border border-white/20 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left py-2.5 px-3.5 rounded-xl text-base font-semibold transition-colors ${
                activeSection === link.id
                  ? 'bg-[#E5C158]/20 text-[#E5C158]'
                  : 'text-white/90 hover:bg-white/10'
              }`}
            >
              {link.name}
            </button>
          ))}
          
          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:+919876543210"
              className="flex items-center gap-3 text-base font-medium text-white/90 py-1"
            >
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#E5C158]">
                <Phone className="w-4 h-4" />
              </div>
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
