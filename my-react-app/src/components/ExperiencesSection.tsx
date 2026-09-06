import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mountain,
  Flame,
  Trees,
  Utensils,
  Heart,
  ArrowRight,
  X,
  Clock,
  CheckCircle2,
  Sparkles,
  MapPin
} from 'lucide-react';
import { experiencesData } from '../data/experiencesData';
import type { Experience } from '../types';

export const ExperiencesSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState<number>(0);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [bookingSuccess, setBookingSuccess] = useState<string | null>(null);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 320;
    const newIndex = Math.min(
      Math.max(0, Math.round(scrollPosition / cardWidth)),
      filteredExperiences.length - 1
    );
    if (newIndex !== activeDotIndex) {
      setActiveDotIndex(newIndex);
    }
  };

  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const cardElement = container.children[index] as HTMLElement;
    if (cardElement) {
      cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setActiveDotIndex(index);
    }
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setActiveDotIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain': return <Mountain className="w-5 h-5 text-[#0E2C20]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#8A5A00]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#0E2C20]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#8A5A00]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#0E2C20]" />;
      default: return <Mountain className="w-5 h-5 text-[#0E2C20]" />;
    }
  };

  const getBadgeBg = (iconName: string) => {
    if (iconName === 'Flame' || iconName === 'Utensils') {
      return 'bg-[#FFEEC3] border-[#FAD98D]';
    }
    return 'bg-[#D4EBE0] border-[#B5DEC9]';
  };

  const filteredExperiences = activeFilter === 'all'
    ? experiencesData
    : experiencesData.filter(exp => {
      if (activeFilter === 'relax') return exp.id === 'scenic-views' || exp.id === 'camp-fire' || exp.id === 'wellness-spa';
      if (activeFilter === 'reconnect') return exp.id === 'nature-walks' || exp.id === 'stargazing' || exp.id === 'organic-farm';
      if (activeFilter === 'rejuvenate') return exp.id === 'local-cuisine' || exp.id === 'tea-tasting';
      return true;
    });

  const handleBookActivity = (title: string) => {
    setBookingSuccess(`Inquiry for "${title}" sent! Our resort concierge will coordinate your schedule upon check-in.`);
    setTimeout(() => setBookingSuccess(null), 4000);
  };

  return (
    <section id="experiences" className="relative min-h-fit py-14 md:py-24 pt-20 md:pt-28 scroll-mt-16 md:scroll-mt-24 bg-[#EAF1EC] text-[#12281D] flex flex-col justify-center items-center overflow-hidden">

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DFEADF]/60 via-[#EAF1EC] to-[#E5EEE7]" />
        <div className="absolute inset-x-0 top-0 h-80 opacity-10 bg-[radial-gradient(#1A4231_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      <div className="hidden md:block absolute -left-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none animate-wind-sway-left">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-40 -20 C30 100 110 250 20 450 C-20 520 -50 580 -80 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          <path d="M10 80 C60 50 120 70 140 120 C90 130 40 110 10 80 Z" fill="#24543F" opacity="0.85" className="animate-leaf-flutter-top" />
          <path d="M45 180 C110 150 175 180 185 240 C125 250 70 220 45 180 Z" fill="#1C4533" opacity="0.9" className="animate-leaf-flutter-mid" />
          <path d="M30 310 C100 280 160 320 165 380 C105 385 55 350 30 310 Z" fill="#2A5C46" opacity="0.8" className="animate-leaf-flutter-low" />
        </svg>
      </div>

      <div className="hidden md:block absolute -right-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none animate-wind-sway-right">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M240 -20 C170 120 90 280 180 480 C220 540 240 580 260 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          <path d="M190 100 C140 70 80 90 60 140 C110 150 160 130 190 100 Z" fill="#24543F" opacity="0.85" className="animate-leaf-flutter-top" />
          <path d="M155 210 C90 180 25 210 15 270 C75 280 130 250 155 210 Z" fill="#1C4533" opacity="0.9" className="animate-leaf-flutter-mid" />
          <path d="M170 340 C100 310 40 350 35 410 C95 415 145 380 170 340 Z" fill="#2A5C46" opacity="0.8" className="animate-leaf-flutter-low" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
        >
          <div className="lg:col-span-3 hidden lg:flex flex-col space-y-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-500 border-l-2 border-gray-300/60 pl-4">
            <div className="text-[#133A2B] font-extrabold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#133A2B]" />
              <span>EXPLORE</span>
            </div>
            <button
              onClick={() => handleFilterChange(activeFilter === 'relax' ? 'all' : 'relax')}
              className={`text-left transition-colors cursor-pointer ${activeFilter === 'relax' ? 'text-[#133A2B] font-extrabold scale-105' : 'hover:text-[#133A2B]'}`}
            >
              • RELAX
            </button>
            <button
              onClick={() => handleFilterChange(activeFilter === 'reconnect' ? 'all' : 'reconnect')}
              className={`text-left transition-colors cursor-pointer ${activeFilter === 'reconnect' ? 'text-[#133A2B] font-extrabold scale-105' : 'hover:text-[#133A2B]'}`}
            >
              • RECONNECT
            </button>
            <button
              onClick={() => handleFilterChange(activeFilter === 'rejuvenate' ? 'all' : 'rejuvenate')}
              className={`text-left transition-colors cursor-pointer ${activeFilter === 'rejuvenate' ? 'text-[#133A2B] font-extrabold scale-105' : 'hover:text-[#133A2B]'}`}
            >
              • REJUVENATE
            </button>
          </div>

          <div className="lg:col-span-6 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE7DF] border border-[#C5D7CC] text-[10px] font-extrabold tracking-widest text-[#133A2B] uppercase">
              <span className="w-4 h-4 rounded-full bg-[#133A2B] text-white flex items-center justify-center text-[9px] shrink-0">🍃</span>
              <span>UNFORGETTABLE MOMENTS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0E281C] leading-[1.15]">
              Curated Resort <span className="font-serif italic font-normal text-[#1B4C37]">Experiences</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed font-sans">
              Immerse yourself in nature's tranquil beauty with activities designed to refresh your mind, body, and spirit.
            </p>
          </div>

          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center">
            <div className="font-script text-3xl sm:text-4xl text-[#184533] leading-none transform -rotate-3 select-none text-right">
              "Nature Heals<br />Differently Here"
            </div>
            <svg viewBox="0 0 140 10" fill="none" className="w-28 h-2.5 text-[#184533]/40 stroke-current stroke-2 mt-1">
              <path d="M2 6 Q 70 1, 138 6" strokeLinecap="round" />
            </svg>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 w-full"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredExperiences.map((item, idx) => {
              const isLiked = !!likedMap[item.id];
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedExperience(item)}
                  className="snap-start shrink-0 w-[280px] sm:w-[310px] lg:w-[330px] bg-white rounded-[22px] overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="relative h-60 overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => toggleLike(e, item.id)}
                      className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-10 ${isLiked
                        ? 'bg-red-500 text-white border border-red-400 shadow-md'
                        : 'bg-black/25 text-white border border-white/40 hover:bg-black/45'
                        }`}
                      title="Favorite experience"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                    </motion.button>

                    <div className={`absolute bottom-3.5 left-3.5 w-10 h-10 rounded-[12px] ${getBadgeBg(item.icon)} backdrop-blur-md border flex items-center justify-center shadow-md z-10`}>
                      {getIcon(item.icon)}
                    </div>
                  </div>

                  <div
                    className="flex-1 flex flex-col justify-between space-y-4"
                    style={{ padding: '20px' }}
                  >
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#5B826D] block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-xl font-bold font-serif text-[#0E2C20] leading-snug group-hover:text-[#184F39] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExperience(item);
                        }}
                        className="text-xs font-bold text-gray-800 hover:text-[#0E2C20] flex items-center gap-1.5 transition-colors cursor-pointer group/btn"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedExperience(item);
                        }}
                        className="w-8 h-8 rounded-full bg-[#E0F2E9] text-[#0E2C20] hover:bg-[#0E2C20] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Section Bottom Controls Bar - Centered bare dots with no background container */}
        <div className="relative flex items-center justify-center w-full" style={{ marginTop: '28px' }}>
          {/* Centered Pagination Dots without background container */}
          <div className="flex items-center gap-2.5">
            {filteredExperiences.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => scrollToCard(idx)}
                title={`View ${item.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeDotIndex === idx
                    ? 'w-8 bg-[#0E2C20] shadow-sm'
                    : 'w-2.5 bg-[#0E2C20]/25 hover:bg-[#0E2C20]/45'
                  }`}
              />
            ))}
          </div>

          {/* Right Mountain Vector Doodle & Tagline */}
          <div className="absolute right-0 hidden md:flex items-center gap-2 text-right">
            <svg viewBox="0 0 60 20" fill="none" className="w-12 h-5 text-[#1E4A37] stroke-current stroke-2 opacity-70">
              <path d="M3 17 L15 5 L25 14 L38 3 L57 17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B826D] leading-tight">
              MORE THAN A STAY<br />
              <span className="text-gray-400 font-normal">A DEEPER CONNECTION</span>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white text-gray-900 rounded-3xl max-w-4xl md:max-w-5xl w-full shadow-2xl border border-gray-100 relative my-6 max-h-[92vh] overflow-y-auto"
              style={{ padding: '20px' }}
            >
              <button
                onClick={() => setSelectedExperience(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors z-20 cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <div className="h-72 sm:h-80 md:h-[380px] rounded-2xl overflow-hidden shadow-lg relative border border-gray-200">
                  <img
                    src={selectedExperience.image}
                    alt={selectedExperience.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                    <span className="text-xs sm:text-sm uppercase font-extrabold tracking-widest bg-[#0E2C20] px-4 py-1.5 rounded-full text-[#E5C158] border border-[#E5C158]/40 shadow-md">
                      {selectedExperience.subtitle}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                      <MapPin className="w-4 h-4 text-[#E5C158]" /> Hideout Resort Estate
                    </span>
                  </div>
                </div>

                <div className="space-y-5" style={{ padding: '20px' }}>
                  <div>
                    <h3 className="text-3xl sm:text-4xl font-bold font-serif text-[#0E2C20] mb-3">
                      {selectedExperience.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans mb-5">
                      {selectedExperience.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 p-4 rounded-2xl bg-[#EEF4F0] text-xs sm:text-sm font-semibold text-[#142E1F] mb-5 border border-emerald-950/10">
                      <div className="flex items-center gap-2.5">
                        <Clock className="w-4.5 h-4.5 text-emerald-800 shrink-0" />
                        <span>Daily Schedule: 6:30 AM & 6:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-4.5 h-4.5 text-emerald-800 shrink-0" />
                        <span>Complimentary for Resort Guests</span>
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="text-xs font-extrabold text-[#142E1F] uppercase tracking-wider mb-2">
                        Included with Experience:
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                        <span>Expert local resort guide & safety equipment</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                        <span>Fresh hot Nilgiri tea & handcrafted refreshments</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                        <span>Private photography assistance & memory spots</span>
                      </div>
                    </div>
                  </div>

                  {bookingSuccess && (
                    <div className="p-4 rounded-xl bg-emerald-100 text-emerald-900 text-xs sm:text-sm font-bold border border-emerald-300 animate-in fade-in">
                      {bookingSuccess}
                    </div>
                  )}

                  <div className="pt-5 border-t border-gray-200 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedExperience(null)}
                      className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 text-xs sm:text-sm font-bold hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      Close
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleBookActivity(selectedExperience.title)}
                      className="bg-[#0E2C20] hover:bg-[#184F39] text-white text-xs sm:text-sm px-7 py-3 rounded-full font-extrabold shadow-lg transition-all cursor-pointer"
                    >
                      Book Activity Now
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
