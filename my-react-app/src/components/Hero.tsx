import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Star,
  Leaf,
  Mountain,
  Coffee,
  Heart,
  ArrowRight,
  Sparkles,
  X
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

const heroSlides = [
  {
    id: 1,
    title: 'Infinity Pool & Valley Deck',
    caption: 'Infinity Pool Deck',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Misty Mountain Tea Gardens',
    caption: 'Misty Valley Views',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'Cozy Bonfire & Outdoor Dining',
    caption: 'Bonfire Nights',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=90',
    thumbUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=500&q=80',
  },
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Auto rotate slides every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);




  return (
    <section id="home" className="homepage-section relative min-h-screen w-full bg-[#07130C] text-white pt-28 md:pt-32 pb-6 md:pb-8 flex flex-col justify-between overflow-hidden selection:bg-[#E5C158] selection:text-[#0B1910]" style={{ paddingLeft: 'clamp(1.5rem, 4vw, 4rem)', paddingRight: 'clamp(1.5rem, 4vw, 4rem)' }}>
      {/* Dynamic Background Image with Smooth Fade */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${idx === activeSlideIndex ? 'opacity-100 scale-105 transition-transform duration-10000' : 'opacity-0 scale-100'
            }`}
        >
          <img
            src={slide.imageUrl}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[0.72]"
          />
        </div>
      ))}

      {/* Premium Multi-layered Dark Green & Ambient Vignette Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#07130C]/95 via-[#07130C]/85 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#07130C]/85 via-transparent to-[#07130C]/95" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-radial from-[#1E422D]/30 to-transparent pointer-events-none z-0" />

      {/* Top Right Handwritten Script Accent ("Nature Feels Better Here") */}
      <div className="hidden lg:flex flex-col items-end gap-1 absolute top-28 right-12 lg:right-16 xl:right-20 z-20 pointer-events-none animate-float">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#E5C158] animate-pulse" />
          <span className="font-script text-3xl xl:text-4xl text-[#E5C158] -rotate-3 drop-shadow-[0_2px_12px_rgba(229,193,88,0.6)]">
            Nature Feels Better Here
          </span>
        </div>
        <svg width="150" height="24" viewBox="0 0 150 24" fill="none" className="text-[#E5C158]/70 -mt-2">
          <path d="M5 18 Q 75 2 145 18" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        </svg>
      </div>

      {/* Main Content Body Container - Vertically Centered & Safe Padding (Explicit Left Gap Guaranteed) */}
      <div className="relative z-10 w-full max-w-[1750px] mx-auto my-auto flex-1 flex flex-col justify-center gap-6 xl:gap-10 py-4 sm:py-6" style={{ paddingLeft: 'clamp(2rem, 5vw, 6rem)', paddingRight: 'clamp(2rem, 5vw, 6rem)' }}>

        {/* Top Hero Section: Badge, Headline, Paragraph, Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl xl:max-w-4xl flex flex-col items-start text-left"
        >

          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5C158]/15 border border-[#E5C158]/40 backdrop-blur-md text-[#E5C158] font-bold text-xs sm:text-sm tracking-[0.2em] uppercase mb-4 xl:mb-6 shadow-lg shadow-black/40"
          >
            <Leaf className="w-4 h-4 text-[#E5C158] animate-spin" style={{ animationDuration: '12s' }} />
            <span>LUXURY MOUNTAIN STAYS</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif text-white leading-[1.08] tracking-tight mb-4 xl:mb-6"
          >
            Escape to the <br />
            Paradise of{' '}
            <span className="shimmer-text font-script italic text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-normal relative inline-block drop-shadow-[0_4px_25px_rgba(229,193,88,0.5)]">
              Hideout
            </span>
          </motion.h1>

          {/* Subtitle Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-200/90 leading-relaxed font-sans max-w-xl xl:max-w-2xl mb-6 xl:mb-8 font-normal"
          >
            Experience the perfect blend of luxury and nature. Relax, Reconnect & Rejuvenate in our hand-built wooden mountain cottages.
          </motion.p>

          {/* Action Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(229, 193, 88, 0.45)" }}
              whileTap={{ scale: 0.96 }}
              onClick={onExploreClick}
              className="h-12 sm:h-13 bg-[#E5C158] text-[#0B1910] font-extrabold rounded-full text-base flex items-center gap-3 shadow-2xl cursor-pointer group"
              style={{ paddingLeft: '24px', paddingRight: '24px' }}
            >
              <span>Explore Cottages</span>
              <ArrowRight className="w-4 h-4 text-[#0B1910] stroke-[3] group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setIsVideoOpen(true)}
              className="bg-white/10 border border-white/30 text-white font-bold rounded-full text-base backdrop-blur-md flex items-center gap-3 cursor-pointer group"
              style={{ padding: '12px 24px 12px 12px' }}
            >
              <div className="w-7 h-7 rounded-full bg-white text-[#0B1910] flex items-center justify-center pl-0.5 group-hover:scale-110 transition-transform shrink-0 my-auto shadow-md">
                <Play className="w-3.5 h-3.5 fill-[#0B1910] text-[#0B1910]" />
              </div>
              <span>Watch Video</span>
            </motion.button>
          </motion.div>

        </motion.div>

        {/* Bottom Hero Section: Highlights Grid & Rating (Left) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full pt-2 flex flex-col justify-between gap-6 xl:gap-8"
        >

          {/* Highlights & Rating Block */}
          <div className="flex flex-col gap-5 xl:gap-6 max-w-4xl">

            {/* Highlights Grid with Dividers */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 rounded-2xl sm:rounded-full bg-black/40 backdrop-blur-md border border-white/15 w-full shadow-2xl items-center"
              style={{ padding: '20px', minHeight: '84px' }}
            >
              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 border-r border-white/20 transition-transform h-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E5C158] text-[#E5C158] flex items-center justify-center shrink-0">
                  <Mountain className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-white/95 leading-tight">
                  Breathtaking<br />Valley Views
                </span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 sm:border-r border-white/20 transition-transform h-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E5C158] text-[#E5C158] flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-white/95 leading-tight">
                  Luxury Wooden<br />Cottages
                </span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 border-r border-white/20 transition-transform h-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E5C158] text-[#E5C158] flex items-center justify-center shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-white/95 leading-tight">
                  Authentic Tea<br />Experience
                </span>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} className="flex items-center gap-3 sm:gap-4 px-3 sm:px-4 transition-transform h-full">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#E5C158] text-[#E5C158] flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-xs sm:text-sm md:text-base font-semibold text-white/95 leading-tight">
                  320+<br />Happy Guests
                </span>
              </motion.div>
            </div>

            {/* Unique Animated Rating Badge (No Images) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="w-fit inline-flex items-center gap-5 sm:gap-6 rounded-full bg-gradient-to-r from-black/70 via-black/50 to-black/70 backdrop-blur-xl border border-[#E5C158]/40 shadow-[0_10px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(229,193,88,0.2)] group cursor-pointer"
              style={{ padding: '20px', minHeight: '92px' }}
            >
              {/* Score & Stars Section */}
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#E5C158]/15 border-2 border-[#E5C158]/60 text-[#E5C158] font-bold text-xl shadow-inner group-hover:scale-110 group-hover:border-[#E5C158] group-hover:shadow-[0_0_20px_rgba(229,193,88,0.6)] transition-all duration-300">
                  <span className="font-serif">4.9</span>
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5C158] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#E5C158]"></span>
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  {/* Staggered One-by-One Rotating Stars */}
                  <div className="flex items-center gap-1.5">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 1.4,
                          repeat: Infinity,
                          repeatDelay: 3.2,
                          delay: i * 0.6,
                          ease: "easeInOut"
                        }}
                        whileHover={{ scale: 1.3 }}
                      >
                        <Star className="w-5.5 h-5.5 sm:w-6 sm:h-6 fill-[#E5C158] text-[#E5C158] drop-shadow-[0_0_8px_rgba(229,193,88,0.85)]" />
                      </motion.div>
                    ))}
                    <span className="ml-2 text-xs font-extrabold text-[#E5C158] uppercase tracking-widest">Top Rated</span>
                  </div>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-200 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>320+ Verified Guest Reviews</span>
                  </div>
                </div>
              </div>

              {/* Decorative Accent Badge */}
              <div className="hidden sm:flex items-center justify-center pl-5 border-l border-white/20">
                <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-200 tracking-wider flex items-center gap-2 group-hover:bg-[#E5C158]/20 group-hover:text-[#E5C158] transition-colors">
                  <Sparkles className="w-4 h-4 text-[#E5C158] animate-spin" style={{ animationDuration: '8s' }} />
                  <span>5-Star Hospitality</span>
                </div>
              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>

      {/* Bottom Bar Footer Strip */}
      <div className="relative z-20 w-full max-w-[1750px] mx-auto pt-3 md:pt-4 flex items-center justify-between border-t border-white/10 text-xs tracking-wider text-gray-300 font-semibold uppercase" style={{ paddingLeft: 'clamp(2rem, 5vw, 6rem)', paddingRight: 'clamp(2rem, 5vw, 6rem)' }}>
        <div className="flex items-center gap-3">
          <div className="w-4 h-7 sm:w-5 sm:h-8 rounded-full border-2 border-[#E5C158]/70 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#E5C158] rounded-full animate-bounce" />
          </div>
          <span className="text-gray-300 tracking-widest text-[11px] sm:text-xs">Scroll to explore</span>
          <div className="hidden sm:block w-16 md:w-20 h-px bg-gradient-to-r from-white/30 to-transparent" />
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block w-16 md:w-20 h-px bg-gradient-to-l from-white/30 to-transparent" />
          <span className="text-[#E5C158] tracking-widest text-[11px] sm:text-xs flex items-center gap-1.5">
            <span>A PEACEFUL STAY AMIDST NATURE</span>
            <Leaf className="w-3.5 h-3.5 text-[#E5C158]" />
          </span>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl bg-[#0B1910] border border-[#E5C158]/30 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-emerald-950/80">
                <div className="flex items-center gap-2 text-[#E5C158] font-serif font-bold text-lg">
                  <Play className="w-4 h-4 fill-[#E5C158]" />
                  <span>Hideout Luxury Mountain Resort Walkthrough</span>
                </div>
                <button
                  onClick={() => setIsVideoOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=0"
                  title="Hideout Resort Teaser Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

