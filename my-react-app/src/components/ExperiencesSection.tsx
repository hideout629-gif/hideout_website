import React, { useState } from 'react';
import { Mountain, Flame, Trees, Utensils, Heart, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { experiencesData } from '../data/experiencesData';

export const ExperiencesSection: React.FC = () => {
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Mountain': return <Mountain className="w-5 h-5 text-[#0E2C20]" />;
      case 'Flame': return <Flame className="w-5 h-5 text-[#8A5A00]" />;
      case 'Trees': return <Trees className="w-5 h-5 text-[#0E2C20]" />;
      case 'Utensils': return <Utensils className="w-5 h-5 text-[#8A5A00]" />;
      default: return <Mountain className="w-5 h-5 text-[#0E2C20]" />;
    }
  };

  const getBadgeBg = (iconName: string) => {
    if (iconName === 'Flame' || iconName === 'Utensils') {
      return 'bg-[#FFEEC3] border-[#FAD98D]';
    }
    return 'bg-[#D4EBE0] border-[#B5DEC9]';
  };

  return (
    <section id="experiences" className="relative min-h-screen py-16 md:py-24 bg-[#EAF1EC] text-[#12281D] flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Soft Misty Mountain Gradient & Pine Forest Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DFEADF]/60 via-[#EAF1EC] to-[#E5EEE7]" />
        <div className="absolute inset-x-0 top-0 h-80 opacity-10 bg-[radial-gradient(#1A4231_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      {/* Decorative Left Leaf Graphic */}
      <div className="absolute -left-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-40 -20 C30 100 110 250 20 450 C-20 520 -50 580 -80 620" stroke="#1B4231" strokeWidth="3" opacity="0.7"/>
          <path d="M10 80 C60 50 120 70 140 120 C90 130 40 110 10 80 Z" fill="#24543F" opacity="0.85"/>
          <path d="M45 180 C110 150 175 180 185 240 C125 250 70 220 45 180 Z" fill="#1C4533" opacity="0.9"/>
          <path d="M30 310 C100 280 160 320 165 380 C105 385 55 350 30 310 Z" fill="#2A5C46" opacity="0.8"/>
        </svg>
      </div>

      {/* Decorative Right Leaf Graphic */}
      <div className="absolute -right-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M240 -20 C170 120 90 280 180 480 C220 540 240 580 260 620" stroke="#1B4231" strokeWidth="3" opacity="0.7"/>
          <path d="M190 100 C140 70 80 90 60 140 C110 150 160 130 190 100 Z" fill="#24543F" opacity="0.85"/>
          <path d="M155 210 C90 180 25 210 15 270 C75 280 130 250 155 210 Z" fill="#1C4533" opacity="0.9"/>
          <path d="M170 340 C100 310 40 350 35 410 C95 415 145 380 170 340 Z" fill="#2A5C46" opacity="0.8"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        
        {/* Top Header Row with 3 Columns: Left Navigation List, Center Title, Right Script Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-10 md:mb-12">
          
          {/* Left Side Category Navigation Tag List */}
          <div className="lg:col-span-3 hidden lg:flex flex-col space-y-2 text-xs font-bold uppercase tracking-[0.25em] text-gray-500 border-l-2 border-gray-300/60 pl-4">
            <div className="text-[#133A2B] font-extrabold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#133A2B]" />
              <span>EXPLORE</span>
            </div>
            <div className="hover:text-[#133A2B] transition-colors cursor-pointer">RELAX</div>
            <div className="hover:text-[#133A2B] transition-colors cursor-pointer">RECONNECT</div>
            <div className="hover:text-[#133A2B] transition-colors cursor-pointer">REJUVENATE</div>
          </div>

          {/* Center Main Headline & Tagline */}
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

          {/* Right Side Handwritten Script Accent */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-end justify-center">
            <div className="font-script text-3xl sm:text-4xl text-[#184533] leading-none transform -rotate-3 select-none text-right">
              "Nature Heals<br />Differently Here"
            </div>
            <svg viewBox="0 0 140 10" fill="none" className="w-28 h-2.5 text-[#184533]/40 stroke-current stroke-2 mt-1">
              <path d="M2 6 Q 70 1, 138 6" strokeLinecap="round"/>
            </svg>
          </div>

        </div>

        {/* 4 Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-10 md:mb-12">
          {experiencesData.map((item) => {
            const isLiked = !!likedMap[item.id];
            return (
              <div
                key={item.id}
                className="bg-white rounded-[22px] overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
              >
                {/* Image Portion with Overlay Badges */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                  {/* Top Right Heart Favorite Icon */}
                  <button
                    onClick={() => toggleLike(item.id)}
                    className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-10 ${
                      isLiked 
                        ? 'bg-red-500 text-white border border-red-400 shadow-md' 
                        : 'bg-black/25 text-white border border-white/40 hover:bg-black/45'
                    }`}
                    title="Favorite experience"
                  >
                    <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                  </button>

                  {/* Bottom Left Category Icon Badge */}
                  <div className={`absolute bottom-3.5 left-3.5 w-10 h-10 rounded-[12px] ${getBadgeBg(item.icon)} backdrop-blur-md border flex items-center justify-center shadow-md z-10`}>
                    {getIcon(item.icon)}
                  </div>
                </div>

                {/* Card Content Body - Explicit padding: 20px */}
                <div 
                  className="flex-1 flex flex-col justify-between space-y-4"
                  style={{ padding: '20px' }}
                >
                  <div className="space-y-2">
                    {/* Subhead Tag */}
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#5B826D] block">
                      {item.subtitle}
                    </span>

                    {/* Main Title */}
                    <h3 className="text-xl font-bold font-serif text-[#0E2C20] leading-snug group-hover:text-[#184F39] transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  {/* Card Bottom Row */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <button className="text-xs font-bold text-gray-800 hover:text-[#0E2C20] flex items-center gap-1.5 transition-colors cursor-pointer group/btn">
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-[#E0F2E9] text-[#0E2C20] hover:bg-[#0E2C20] hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-sm">
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Controls Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          {/* Left Placeholder for Balance */}
          <div className="hidden sm:block w-32" />

          {/* Center Action Controls */}
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white/90 border border-gray-200 text-gray-800 hover:bg-white shadow-sm flex items-center justify-center cursor-pointer transition-all">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white/90 border border-gray-200 text-gray-800 hover:bg-white shadow-sm flex items-center justify-center cursor-pointer transition-all">
              <ChevronRight className="w-5 h-5" />
            </button>

            <button 
              style={{ padding: '12px 28px' }}
              className="bg-[#0E2C20] hover:bg-[#184F39] text-white text-xs font-bold rounded-full flex items-center gap-2 shadow-md transition-all cursor-pointer"
            >
              <span className="text-sm">🍃</span>
              <span>View All Experiences</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </button>
          </div>

          {/* Right Mountain Vector Doodle & Tagline */}
          <div className="flex items-center gap-2 text-right">
            <svg viewBox="0 0 60 20" fill="none" className="w-12 h-5 text-[#1E4A37] stroke-current stroke-2 opacity-70">
              <path d="M3 17 L15 5 L25 14 L38 3 L57 17" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B826D] leading-tight">
              MORE THAN A STAY<br />
              <span className="text-gray-400 font-normal">A DEEPER CONNECTION</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
