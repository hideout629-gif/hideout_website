import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Clock, ArrowRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08170E] text-gray-300 relative w-full min-h-fit">
      
      {/* Top Wave Curve Divider */}
      <div className="w-full overflow-hidden leading-none bg-transparent">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-14 sm:h-20 text-[#08170E] fill-current"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Atmospheric Background Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#08170E]/80 via-[#08170E]/95 to-[#08170E] pointer-events-none" />

      {/* Top Right Cursive Watermark Overlay */}
      <div className="hidden lg:block absolute top-12 right-12 text-right pointer-events-none opacity-30 z-0">
        <div className="text-4xl sm:text-5xl font-serif italic text-emerald-100 font-normal tracking-wide transform rotate-[-2deg]">
          More <br />
          Than <br />
          A Stay
        </div>
      </div>

      {/* Leaf Foliage Art Elements on bottom corners */}
      <div className="absolute -bottom-10 -left-10 w-80 h-80 opacity-25 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" fill="#2E6B43" className="w-full h-full">
          <path d="M40,20 C80,40 120,10 160,50 C180,70 190,110 170,140 C150,170 110,190 70,180 C30,170 10,130 20,90 Z" />
        </svg>
      </div>
      <div className="absolute -bottom-10 -right-10 w-80 h-80 opacity-25 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" fill="#2E6B43" className="w-full h-full">
          <path d="M160,20 C120,40 80,10 40,50 C20,70 10,110 30,140 C50,170 90,190 130,180 C170,170 190,130 180,90 Z" />
        </svg>
      </div>

      {/* Main Container */}
      <div className="w-full box-border px-5 md:px-8 lg:px-12 py-10 md:py-12 relative z-20">
        
        {/* 5 Grid Columns with 32px gap and Vertical Centering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Column 1: Brand Info (3.5 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full border-2 border-[#E5B849]/70 bg-emerald-950/80 flex items-center justify-center p-2.5 shadow-inner shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#E5B849]" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L3 9v11a1 1 0 001 1h16a1 1 0 001-1V9l-9-7z" />
                  <path d="M12 7l6 5v7H6v-7l6-5z" fill="rgba(229,184,73,0.2)" />
                </svg>
              </div>
              <div>
                <div className="font-serif text-[26px] font-bold text-white tracking-wide leading-tight">
                  Hideout
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-[#E5B849]">
                  STAY CLOSE TO NATURE
                </div>
              </div>
            </div>

            <p className="text-[14px] text-gray-300 leading-relaxed max-w-sm">
              Handcrafted luxury wooden mountain cottages in the heart of Hideout's misty tea valleys. Experience peace, warmth, and nature's finest views.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3 pt-1">
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E5B849] hover:text-[#08170E] text-gray-300 border border-white/15 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E5B849] hover:text-[#08170E] text-gray-300 border border-white/15 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.598 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E5B849] hover:text-[#08170E] text-gray-300 border border-white/15 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E5B849] hover:text-[#08170E] text-gray-300 border border-white/15 flex items-center justify-center transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#E5B849] hover:text-[#08170E] text-gray-300 border border-white/15 flex items-center justify-center transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>

            <div className="pt-1 flex items-center gap-2">
              <span className="text-lg">🍃</span>
              <span className="font-serif italic text-emerald-200/90 text-sm font-normal">
                Mountains Heal Differently
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-4">
            <h4 className="text-[17.5px] font-bold text-white font-serif mb-4 pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="space-y-3 text-[14.5px]">
              <li><a href="#home" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Home Overview</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Luxury Cottages</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
              <li><a href="#experiences" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Resort Experiences</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
              <li><a href="#gallery" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Photo Gallery</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
              <li><a href="#reviews" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Guest Testimonials</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
            </ul>
          </div>

          {/* Column 3: Cottages (2 cols) */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-4">
            <h4 className="text-[17.5px] font-bold text-white font-serif mb-4 pb-2 border-b border-white/10">
              Cottages
            </h4>
            <ul className="space-y-3 text-[14.5px]">
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Luxury Hilltop Cottage</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Tea Garden Cottage</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Grand Family Villa</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between text-gray-300 hover:translate-x-1 duration-200"><span>Misty Pines Honeymoon Suite</span><ChevronRight className="w-4 h-4 text-gray-500" /></a></li>
            </ul>
          </div>

          {/* Column 4: Contact Info (2 cols) */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-4 space-y-3">
            <h4 className="text-[17.5px] font-bold text-white font-serif mb-4 pb-2 border-b border-white/10">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-[14.5px]">
              <li className="flex items-start gap-2.5 text-gray-300">
                <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <span className="leading-snug">Misty Valley Road, Fernhill, Hideout, Tamil Nadu 643004</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-300">
                <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0">
                  <Phone className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <div className="leading-snug">
                  <div>+91 98765 43210</div>
                  <div>+91 98765 43211</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0">
                  <Mail className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <span>stay@hideout.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-300">
                <div className="w-7 h-7 rounded-full bg-emerald-950 border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <div className="leading-snug">
                  <div>Check-in: 12:00 PM</div>
                  <div>Check-out: 11:00 AM</div>
                  <div className="text-[11px] text-gray-400 font-semibold">(24/7 Front Desk)</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 5: Location Map Card (3 cols) */}
          <div className="lg:col-span-3 w-full flex items-center justify-center">
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block rounded-[20px] overflow-hidden border-2 border-white/20 shadow-2xl relative h-60 sm:h-64 lg:h-64 group cursor-pointer w-full"
            >
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
                alt="Hideout Map Location" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
              
              <div className="absolute inset-0 flex items-center justify-center pb-6">
                <div className="relative">
                  <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 flex items-center justify-center shadow-lg border border-white/30 transform group-hover:scale-110 transition-transform">
                    <MapPin className="w-5.5 h-5.5 text-emerald-400" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 inset-x-0 p-3.5 bg-black/75 backdrop-blur-md border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white font-serif">Find Us on Map</div>
                  <div className="text-[11px] text-gray-300 font-medium">Get directions to Hideout</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#E5B849] text-[#08170E] flex items-center justify-center shadow-md group-hover:translate-x-0.5 transition-transform shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Bar with Mountain Crest & Back to Top */}
        <div className="mt-10 pt-6 pb-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] text-gray-400 font-medium w-full">
          
          {/* Left Copyright */}
          <div>
            © {new Date().getFullYear()} Hideout Resort. All Rights Reserved.
          </div>

          {/* Center Mountain Crest */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-12 bg-[#E5B849]/40"></span>
            {/* Mountain SVG Crest */}
            <svg className="w-4 h-4 text-[#E5B849]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 20L10 8L14 14L18 7L21 20H3Z" strokeLinejoin="round" />
            </svg>
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#E5B849]">
              STAY CLOSE TO NATURE
            </span>
            <span className="h-[1px] w-12 bg-[#E5B849]/40"></span>
          </div>
          
          {/* Right Links & Back to Top */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-4 text-gray-400">
              <a href="#" className="hover:text-[#E5B849] transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-[#E5B849] transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="#" className="hover:text-[#E5B849] transition-colors">Sitemap</a>
            </div>

            {/* Back to Top Button */}
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white group cursor-pointer"
            >
              <div className="w-8 h-8 rounded-full bg-[#133020] border border-emerald-500/30 text-emerald-300 flex items-center justify-center group-hover:bg-[#E5B849] group-hover:text-[#08170E] transition-all">
                <ArrowUp className="w-4 h-4" />
              </div>
              <span className="hidden sm:inline">Back to Top</span>
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};
