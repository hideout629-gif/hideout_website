import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Clock, ArrowRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07170E] text-gray-300 relative w-full min-h-fit overflow-hidden">

      {/* Top Wave Curve Divider */}
      <div className="w-full overflow-hidden leading-none bg-transparent">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 sm:h-16 text-[#07170E] fill-current opacity-90"
        >
          <path d="M0,0 C150,90 350,-40 500,40 C650,120 900,10 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      {/* Atmospheric Pine Forest & Mountain Silhouette Background Overlay */}
      <div className="absolute bottom-0 inset-x-0 h-64 pointer-events-none z-0 opacity-20 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* Left Bottom Pine Trees Silhouette Graphic */}
      <div className="absolute bottom-10 left-0 w-80 sm:w-96 h-48 opacity-30 pointer-events-none z-0">
        <svg viewBox="0 0 500 250" fill="#133824" className="w-full h-full">
          <polygon points="0,250 80,100 180,250" fill="#0C2517" />
          <polygon points="100,250 220,60 340,250" fill="#081A10" />
          <polygon points="10,250 30,170 50,250" fill="#154029" />
          <polygon points="35,250 55,150 75,250" fill="#10311F" />
          <polygon points="65,250 85,180 105,250" fill="#0C2517" />
          <polygon points="95,250 120,130 145,250" fill="#154029" />
          <polygon points="135,250 155,160 175,250" fill="#081A10" />
        </svg>
      </div>

      {/* Right Bottom Pine Trees Silhouette Graphic */}
      <div className="absolute bottom-10 right-0 w-80 sm:w-96 h-48 opacity-30 pointer-events-none z-0">
        <svg viewBox="0 0 500 250" fill="#133824" className="w-full h-full">
          <polygon points="180,250 300,70 420,250" fill="#081A10" />
          <polygon points="300,250 400,110 500,250" fill="#0C2517" />
          <polygon points="330,250 350,160 370,250" fill="#154029" />
          <polygon points="365,250 385,140 405,250" fill="#10311F" />
          <polygon points="400,250 420,170 440,250" fill="#0C2517" />
          <polygon points="435,250 460,150 485,250" fill="#154029" />
        </svg>
      </div>

      {/* Full-width Container with 64px left & right padding */}
      <div
        className="w-full relative z-20 box-border"
        style={{ padding: '50px 64px 0' }}
      >

        {/* Main Desktop Horizontal Row with 50-60px Gaps across 6 Columns */}
        <div className="flex flex-col lg:flex-row flex-nowrap items-start justify-between gap-8 lg:gap-10 xl:gap-[56px] w-full">

          {/* Column 1: Brand Info (~270px wide) */}
          <div className="w-full lg:w-[270px] shrink-0 space-y-4 lg:border-r lg:border-white/10 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-[#E5B849] bg-emerald-950/90 flex items-center justify-center p-2.5 shadow-md shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#E5B849]" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L3 9v11a1 1 0 001 1h16a1 1 0 001-1V9l-9-7z" />
                  <path d="M12 7l6 5v7H6v-7l6-5z" fill="rgba(229,184,73,0.25)" />
                </svg>
              </div>
              <div>
                <div className="font-serif text-2xl font-bold text-white tracking-wide leading-tight">
                  Hideout
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] font-extrabold text-[#E5B849]">
                  STAY CLOSE TO NATURE
                </div>
              </div>
            </div>

            <p className="text-[13.5px] text-gray-300 leading-relaxed font-normal">
              Handcrafted luxury wooden mountain cottages in the heart of Hideout's misty tea valleys. Experience peace, warmth, and nature's finest views.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" aria-label="Instagram" className="w-8.5 h-8.5 rounded-full bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-8.5 h-8.5 rounded-full bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.598 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-8.5 h-8.5 rounded-full bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-8.5 h-8.5 rounded-full bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all shadow-sm">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-8.5 h-8.5 rounded-full bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all shadow-sm">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            <div className="pt-1 flex items-center gap-2">
              <span className="text-base">🍃</span>
              <span className="font-serif italic text-emerald-300/90 text-[14px] font-normal">
                Mountains Heal Differently
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links (~170px wide) */}
          <div className="w-full lg:w-[170px] shrink-0 space-y-3.5">
            <h4 className="text-[17px] font-bold text-white font-serif mb-4 pb-1">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-[14px]">
              <li><a href="#home" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Home Overview</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Luxury Cottages</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
              <li><a href="#experiences" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Resort Experiences</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
              <li><a href="#gallery" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Photo Gallery</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
              <li><a href="#reviews" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Guest Testimonials</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
            </ul>
          </div>

          {/* Column 3: Cottages (~200px wide) */}
          <div className="w-full lg:w-[200px] shrink-0 space-y-3.5 lg:border-r lg:border-white/10 lg:pr-8">
            <h4 className="text-[17px] font-bold text-white font-serif mb-4 pb-1">
              Cottages
            </h4>
            <ul className="space-y-3.5 text-[14px]">
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Luxury Hilltop Cottage</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Tea Garden Cottage</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Grand Family Villa</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-colors flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1 duration-200"><span>Misty Pines Honeymoon Suite</span><ChevronRight className="w-3.5 h-3.5 text-gray-500" /></a></li>
            </ul>
          </div>

          {/* Column 4: Plan Your Visit (~240px wide) */}
          <div className="w-full lg:w-[240px] shrink-0 space-y-3.5 lg:border-r lg:border-white/10 lg:pr-8">
            <h4 className="text-[17px] font-bold text-white font-serif mb-4 pb-1">
              Plan Your Visit
            </h4>
            <ul className="space-y-3.5 text-[13.5px]">
              <li className="flex items-start gap-2.5 text-gray-300">
                <div className="w-6.5 h-6.5 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <span className="leading-snug">Misty Valley Road, Fernhill, Hideout, Tamil Nadu 643004</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-300">
                <div className="w-6.5 h-6.5 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <div className="leading-snug">
                  <div>+91 98765 43210</div>
                  <div>+91 98765 43211</div>
                </div>
              </li>
              <li className="flex items-center gap-2.5 text-gray-300">
                <div className="w-6.5 h-6.5 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <span>stay@hideout.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-gray-300">
                <div className="w-6.5 h-6.5 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-3.5 h-3.5 text-[#E5B849]" />
                </div>
                <div className="leading-snug">
                  <div>Check-in: 12:00 PM</div>
                  <div>Check-out: 11:00 AM</div>
                  <div className="text-[11.5px] text-gray-400 font-semibold">(24/7 Front Desk)</div>
                </div>
              </li>
            </ul>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-[#E5B849]/60 bg-[#0E2718] hover:bg-[#153D26] text-gray-200 hover:text-white text-xs font-extrabold tracking-wide transition-all shadow-md group cursor-pointer"
                style={{ padding: '12px 20px' }}
              >
                <span>Get Directions</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E5B849] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Column 5: Map Card (Fixed 315px wide x 255px tall) */}
          <div className="w-full sm:w-[315px] lg:w-[315px] h-[255px] shrink-0">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[22px] overflow-hidden border-2 border-[#E5B849] shadow-2xl relative w-full h-full group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
                alt="Hideout Map Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

              <div className="absolute inset-0 flex items-center justify-center pb-6">
                <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur-md text-emerald-400 flex items-center justify-center shadow-lg border border-white/30 transform group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
              </div>

              <div
                className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-md border-t border-white/15 flex items-center justify-between z-10 box-border"
                style={{ padding: '12px' }}
              >
                <div className="space-y-0.5">
                  <div className="text-xs font-bold text-white font-serif leading-tight">Find Us on Map</div>
                  <div className="text-[10px] text-gray-300 font-medium leading-tight">Get directions to Hideout</div>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#E5B849] text-[#07170E] flex items-center justify-center shadow-md group-hover:translate-x-0.5 transition-transform shrink-0">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          </div>

          {/* Column 6: Tagline ("More Than A Stay") */}
          <div className="hidden lg:flex w-[140px] shrink-0 flex-col items-center justify-center text-center pl-2 opacity-85">
            {/* Mountain Line Graphic */}
            <svg className="w-7 h-7 text-[#2B543D] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 20L10 8L14 14L18 7L21 20H3Z" strokeLinejoin="round" />
            </svg>

            <div className="font-serif italic text-2xl xl:text-3xl text-[#3E6D55] font-normal leading-snug tracking-wide">
              More<br />
              Than<br />
              A Stay
            </div>

            <div className="w-full h-[1px] bg-[#2B543D]/40 my-3" />

            <div className="text-[9px] uppercase tracking-[0.25em] font-extrabold text-[#3E6D55] leading-tight">
              Nature<br />
              Belongs<br />
              To You!
            </div>
          </div>

        </div>

        {/* Bottom Bar with Mountain Crest & Back to Top (Spacious vertical padding mt-12 pt-7 pb-6) */}
        <div className="mt-12 pt-7 pb-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-medium w-full">

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
              <div className="w-8 h-8 rounded-full bg-[#0E2718] border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:bg-[#E5B849] group-hover:text-[#07170E] transition-all shadow-sm">
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
