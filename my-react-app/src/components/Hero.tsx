import React from 'react';
import { 
  Play, 
  Star, 
  ShieldCheck, 
  MessageCircle,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="relative min-h-screen bg-[#0B1910] text-white pt-36 md:pt-40 pb-12 flex flex-col justify-center items-center overflow-hidden">
      {/* Background Image & Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=85"
          alt="Ooty Cottage Sunset View"
          className="w-full h-full object-cover filter brightness-90 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1910]/90 via-[#0B1910]/75 to-[#0B1910]/95" />
      </div>

      {/* Main Hero Centered Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center my-auto">
        
        {/* Eyebrow Tagline */}
        <div className="inline-flex items-center justify-center gap-2 text-[#E5C158] font-bold text-xs sm:text-sm tracking-[0.25em] uppercase mb-4 px-4 py-1 rounded-full bg-[#E5C158]/10 border border-[#E5C158]/30 backdrop-blur-md">
          <span>✂</span>
          <span>YOUR PERFECT ESCAPE AWAITS</span>
          <Sparkles className="w-3.5 h-3.5" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-serif text-white leading-tight tracking-tight mb-4 max-w-4xl">
          Escape to the Paradise of <span className="text-[#E5C158] italic font-serif font-normal">Ooty</span>
        </h1>

        {/* Gold Accent Line */}
        <div className="w-20 h-1 bg-[#E5C158] rounded-full mb-6 shadow-[0_0_12px_rgba(229,193,88,0.6)]" />

        {/* Subtitle Paragraph */}
        <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans max-w-2xl mb-8">
          Experience the perfect blend of luxury and nature. Relax, Reconnect & Rejuvenate in our hand-built wooden mountain cottages.
        </p>

        {/* Action Button */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={onExploreClick}
            className="btn btn-gold px-9 py-4 text-sm font-extrabold flex items-center gap-3 shadow-2xl shadow-[#E5C158]/30 hover:scale-105 transition-all cursor-pointer"
          >
            <span>Explore Cottages</span>
            <div className="w-6 h-6 rounded-full bg-[#142E1F]/20 flex items-center justify-center">
              <Play className="w-3 h-3 fill-[#142E1F] text-[#142E1F] ml-0.5" />
            </div>
          </button>
        </div>

        {/* Star Rating & Verified Badge */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-200/90">
          <div className="flex items-center gap-1.5">
            <div className="flex text-[#E5C158]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#E5C158] text-[#E5C158]" />
              ))}
            </div>
            <span className="font-bold text-white ml-1">4.9 / 5.0</span>
            <span className="text-gray-300">(320+ guest reviews)</span>
          </div>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Resort Stay</span>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Circle Badge */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-6 bottom-6 w-14 h-14 rounded-full bg-[#E5C158] text-[#0B1910] border-4 border-[#0B1910] flex flex-col items-center justify-center shadow-2xl whatsapp-pulse hover:scale-110 transition-transform group z-40 cursor-pointer"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-[#0B1910] stroke-none" />
        <span className="text-[8px] font-extrabold tracking-tight uppercase leading-none mt-0.5">
          Chat Us
        </span>
      </a>
    </section>
  );
};
