import React from 'react';
import { Phone, Mail, MapPin, ChevronRight, Clock, ArrowRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07170E] text-gray-300 relative w-full overflow-hidden" style={{ scrollSnapAlign: 'start' }}>

      {/* Full-Width Mountain Forest Silhouette Top Banner */}
      <div className="w-full relative h-24 sm:h-32 md:h-40 overflow-hidden pointer-events-none select-none">
        {/* Sky-to-dark gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D2218] via-[#091A11] to-[#07170E]" />
        {/* Forest treeline silhouette - layered for depth */}
        <svg
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          className="absolute bottom-0 inset-x-0 w-full h-full"
        >
          {/* Far background trees - lighter */}
          <polygon points="0,200 20,120 40,200 60,100 80,200 100,90 120,200 140,110 160,200 180,80 200,200 220,95 240,200 260,105 280,200 300,85 320,200 340,115 360,200 380,75 400,200 420,100 440,200 460,110 480,200 500,70 520,200 540,90 560,200 580,105 600,200 620,80 640,200 660,95 680,200 700,85 720,200 740,100 760,200 780,75 800,200 820,110 840,200 860,90 880,200 900,105 920,200 940,70 960,200 980,95 1000,200 1020,85 1040,200 1060,100 1080,200 1100,80 1120,200 1140,110 1160,200 1180,90 1200,200 1220,75 1240,200 1260,105 1280,200 1300,85 1320,200 1340,95 1360,200 1380,100 1400,200 1420,80 1440,200" fill="#0B1F14" opacity="0.6" />
          {/* Mid trees - medium */}
          <polygon points="0,200 30,130 60,200 90,110 120,200 150,95 180,200 210,120 240,200 270,85 300,200 330,105 360,200 390,90 420,200 450,75 480,200 510,110 540,200 570,100 600,200 630,80 660,200 690,115 720,200 750,90 780,200 810,105 840,200 870,70 900,200 930,95 960,200 990,85 1020,200 1050,100 1080,200 1110,80 1140,200 1170,110 1200,200 1230,90 1260,200 1290,75 1320,200 1350,105 1380,200 1410,85 1440,200" fill="#0A1C12" opacity="0.8" />
          {/* Front trees - darkest */}
          <polygon points="0,200 40,140 80,200 120,120 160,200 200,130 240,200 280,110 320,200 360,125 400,200 440,135 480,200 520,115 560,200 600,130 640,200 680,120 720,200 760,140 800,200 840,125 880,200 920,135 960,200 1000,115 1040,200 1080,130 1120,200 1160,120 1200,200 1240,140 1280,200 1320,125 1360,200 1400,135 1440,200" fill="#07170E" />
        </svg>
        {/* Ambient fog layer */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#07170E] to-transparent" />
      </div>

      {/* Main Footer Content Container */}
      <div className="w-full relative z-20 mx-auto pb-0" style={{ maxWidth: '1600px', padding: '70px 64px 0' }}>

        {/* 4-Column + Map Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full items-start" style={{ gridTemplateColumns: 'minmax(0, 280px) minmax(0, 180px) minmax(0, 210px) minmax(0, 260px) minmax(0, 330px)', columnGap: '55px', rowGap: '40px' }}>

          {/* Column 1: Brand Identity */}
          <div className="flex flex-col">
            {/* Logo + Brand Name */}
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl border-2 border-[#E5B849]/60 bg-[#0C2517] flex items-center justify-center p-2.5 shadow-lg shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-[#E5B849]" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2L3 9v11a1 1 0 001 1h16a1 1 0 001-1V9l-9-7z" />
                  <path d="M12 7l6 5v7H6v-7l6-5z" fill="rgba(229,184,73,0.2)" />
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

            {/* Description */}
            <p className="text-[14px] text-gray-300/90 leading-relaxed font-normal max-w-[280px]" style={{ marginTop: '16px' }}>
              Handcrafted luxury wooden mountain cottages in the heart of Hideout's misty tea valleys. Experience peace, warmth, and nature's finest views.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center gap-3" style={{ marginTop: '18px' }}>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-xl bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.714 5H18V0h-3.808C10.598 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-xl bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-xl bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] text-gray-300 border border-emerald-800/40 flex items-center justify-center transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-105">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-2.5" style={{ marginTop: '14px' }}>
              <span className="text-lg">🍃</span>
              <span className="font-serif italic text-emerald-300/90 text-[15px] font-normal">
                Mountains Heal Differently
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold text-white font-serif pb-2 border-b border-white/10">
              Quick Links
            </h4>
            <ul className="flex flex-col text-[14.5px]" style={{ gap: '12px', marginTop: '16px' }}>
              <li><a href="#home" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Home Overview</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Luxury Cottages</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
              <li><a href="#experiences" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Resort Experiences</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
              <li><a href="#gallery" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Photo Gallery</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
              <li><a href="#reviews" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Guest Testimonials</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
            </ul>
          </div>

          {/* Column 3: Cottages */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold text-white font-serif pb-2 border-b border-white/10">
              Cottages
            </h4>
            <ul className="flex flex-col text-[14.5px]" style={{ gap: '12px', marginTop: '16px' }}>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Luxury Hilltop Cottage</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Tea Garden Cottage</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Grand Family Villa</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
              <li><a href="#cottages" className="hover:text-[#E5B849] transition-all flex items-center justify-between gap-4 text-gray-300 hover:translate-x-1.5 duration-200 group"><span>Misty Pines Honeymoon Suite</span><ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-[#E5B849] transition-colors" /></a></li>
            </ul>
          </div>

          {/* Column 4: Plan Your Visit */}
          <div className="flex flex-col">
            <h4 className="text-[18px] font-bold text-white font-serif pb-2 border-b border-white/10">
              Plan Your Visit
            </h4>
            <ul className="flex flex-col text-[14px]" style={{ gap: '12px', marginTop: '16px' }}>
              <li className="flex items-start gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <MapPin className="w-4 h-4 text-[#E5B849]" />
                </div>
                <span className="leading-relaxed">Misty Valley Road, Fernhill,<br />Hideout, Tamil Nadu 643004</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 shadow-sm">
                  <Phone className="w-4 h-4 text-[#E5B849]" />
                </div>
                <div className="leading-relaxed">
                  <div>+91 98765 43210</div>
                  <div>+91 98765 43211</div>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-[#E5B849]" />
                </div>
                <span>stay@hideout.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <div className="w-8 h-8 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                  <Clock className="w-4 h-4 text-[#E5B849]" />
                </div>
                <div className="leading-relaxed">
                  <div>Check-in: 12:00 PM</div>
                  <div>Check-out: 11:00 AM</div>
                  <div className="text-[12px] text-gray-400 font-semibold">(24/7 Front Desk)</div>
                </div>
              </li>
            </ul>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#E5B849]/60 bg-[#0E2718] hover:bg-[#E5B849] hover:text-[#07170E] hover:border-[#E5B849] text-gray-200 text-[13px] font-bold tracking-wide transition-all duration-300 shadow-md group cursor-pointer"
                style={{ padding: '13px 24px' }}
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4 text-[#E5B849] group-hover:text-[#07170E] group-hover:translate-x-1 transition-all" />
              </a>
            </div>
          </div>

          {/* Column 5: Map Card */}
          <div className="w-full min-h-[300px] md:col-span-2 lg:col-span-1" style={{ height: '100%' }}>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden border border-[#E5B849]/40 shadow-2xl relative w-full h-full min-h-[300px] group cursor-pointer hover:border-[#E5B849]/80 transition-all duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800"
                alt="Hideout Map Location"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/15" />

              {/* Explore on Map Badge - top right */}
              <div className="absolute top-4 right-4 z-10">
                <div className="bg-[#E5B849] text-[#07170E] text-[11px] font-extrabold uppercase tracking-wider px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 group-hover:shadow-xl group-hover:scale-105 transition-all">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Explore on Map</span>
                </div>
              </div>

              {/* Bottom Footer */}
              <div
                className="absolute bottom-0 inset-x-0 bg-black/80 backdrop-blur-md border-t border-white/10 flex items-center justify-between z-10 box-border"
                style={{ padding: '16px 20px' }}
              >
                <div className="space-y-1">
                  <div className="text-sm font-bold text-white font-serif leading-tight">Find Us on Map</div>
                  <div className="text-[11px] text-gray-300 font-medium leading-tight">Get directions to Hideout</div>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#E5B849] text-[#07170E] flex items-center justify-center shadow-lg group-hover:translate-x-1 group-hover:scale-110 transition-all shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Newsletter Subscription Bar */}
        <div className="mx-auto w-full" style={{ marginTop: '40px' }}>
          <div className="rounded-2xl border border-[#E5B849]/40 bg-gradient-to-r from-[#0C2517] via-[#0E2A1B] to-[#0C2517] px-6 sm:px-10 py-6 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            {/* Left: Icon + Text */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-12 h-12 rounded-xl bg-[#E5B849]/15 border border-[#E5B849]/30 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-[#E5B849]" />
              </div>
              <div>
                <div className="text-white font-bold text-[17px] font-serif leading-tight">Stay in the Loop</div>
                <div className="text-gray-400 text-[13px] font-normal leading-snug mt-0.5">Subscribe to get updates on special offers, new experiences and more.</div>
              </div>
            </div>
            {/* Right: Email Input + Subscribe Button */}
            <div className="flex items-center gap-3 w-full sm:w-auto sm:min-w-[380px]">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-[#07170E] border border-white/15 rounded-full text-[13px] text-gray-200 placeholder:text-gray-500 focus:outline-none focus:border-[#E5B849]/60 focus:ring-1 focus:ring-[#E5B849]/30 transition-all"
                  style={{ padding: '13px 16px 13px 42px' }}
                />
              </div>
              <button
                className="shrink-0 bg-[#E5B849] hover:bg-[#F3D270] text-[#07170E] font-bold text-[13px] rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.03] cursor-pointer"
                style={{ padding: '13px 24px' }}
              >
                <span>Subscribe</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-5 text-[13px] text-gray-400 font-medium w-full" style={{ marginTop: '24px', paddingTop: '24px', paddingBottom: '18px' }}>

          {/* Left Copyright */}
          <div className="text-gray-500">
            © {new Date().getFullYear()} Hideout Resort. All Rights Reserved.
          </div>

          {/* Center Mountain Crest */}
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-14 bg-[#E5B849]/30"></span>
            <svg className="w-5 h-5 text-[#E5B849]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 20L10 8L14 14L18 7L21 20H3Z" strokeLinejoin="round" />
            </svg>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#E5B849]">
              STAY CLOSE TO NATURE
            </span>
            <span className="h-[1px] w-14 bg-[#E5B849]/30"></span>
          </div>

          {/* Right Links & Back to Top */}
          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-4 text-gray-500">
              <a href="#" className="hover:text-[#E5B849] transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-[#E5B849] transition-colors">Terms of Service</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-[#E5B849] transition-colors">Sitemap</a>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2.5 text-[13px] font-bold text-gray-400 hover:text-white group cursor-pointer transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#0E2718] border border-emerald-500/30 text-[#E5B849] flex items-center justify-center group-hover:bg-[#E5B849] group-hover:text-[#07170E] group-hover:border-[#E5B849] transition-all duration-300 shadow-sm">
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
