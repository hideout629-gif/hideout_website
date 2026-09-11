import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, Users, Calendar, Heart } from 'lucide-react';
import { reviewsData } from '../data/reviewsData';

export const ReviewsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeDotIndex, setActiveDotIndex] = useState<number>(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.firstElementChild
      ? (container.firstElementChild as HTMLElement).offsetWidth + 24
      : 320;
    const newIndex = Math.min(
      Math.max(0, Math.round(scrollPosition / cardWidth)),
      reviewsData.length - 1
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

  return (
    <section id="reviews" className="homepage-section relative py-10 md:py-16 lg:py-8 pt-16 md:pt-20 lg:pt-16 scroll-mt-16 md:scroll-mt-24 bg-[#EAF1EC] text-[#12281D] flex flex-col justify-center items-center overflow-hidden">

      {/* Background Soft Misty Mountain Gradient & Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DFEADF]/60 via-[#EAF1EC] to-[#E5EEE7]" />
        <div className="absolute inset-x-0 top-0 h-80 opacity-10 bg-[radial-gradient(#1A4231_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      {/* Decorative Left Leaf Graphic */}
      <div className="hidden md:block absolute -left-4 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none animate-wind-sway-left">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-40 -20 C30 100 110 250 20 450 C-20 520 -50 580 -80 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          <path d="M10 80 C60 50 120 70 140 120 C90 130 40 110 10 80 Z" fill="#24543F" opacity="0.85" className="animate-leaf-flutter-top" />
          <path d="M45 180 C110 150 175 180 185 240 C125 250 70 220 45 180 Z" fill="#1C4533" opacity="0.9" className="animate-leaf-flutter-mid" />
          <path d="M30 310 C100 280 160 320 165 380 C105 385 55 350 30 310 Z" fill="#2A5C46" opacity="0.8" className="animate-leaf-flutter-low" />
        </svg>
      </div>

      {/* Decorative Right Leaf Graphic */}
      <div className="hidden md:block absolute -right-4 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none animate-wind-sway-right">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M240 -20 C170 120 90 280 180 480 C220 540 240 580 260 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          <path d="M190 100 C140 70 80 90 60 140 C110 150 160 130 190 100 Z" fill="#24543F" opacity="0.85" className="animate-leaf-flutter-top" />
          <path d="M155 210 C90 180 25 210 15 270 C75 280 130 250 155 210 Z" fill="#1C4533" opacity="0.9" className="animate-leaf-flutter-mid" />
          <path d="M170 340 C100 310 40 350 35 410 C95 415 145 380 170 340 Z" fill="#2A5C46" opacity="0.8" className="animate-leaf-flutter-low" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">

        {/* Top Section Header Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '16px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end"
        >

          {/* Left Main Title & Subtitle */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE7DF] border border-[#C5D7CC] text-[10px] font-extrabold tracking-widest text-[#133A2B] uppercase">
                <span className="w-4 h-4 rounded-full bg-[#133A2B] text-white flex items-center justify-center shrink-0 text-[9px]">
                  ★
                </span>
                <span>GUEST TESTIMONIALS</span>
              </div>
              <div className="h-px w-20 bg-[#B5CBD0]/50 hidden sm:block" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0E281C] leading-[1.15]">
              Loved By <span className="font-serif italic font-normal text-[#1B4C37]">Mountain</span> Travelers
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed font-sans">
              Over 320+ couples and families have created everlasting memories at Hideout. Here is what they have to say about their stay.
            </p>
          </div>

          {/* Right Side Handwritten Script Accent */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="font-script text-3xl sm:text-4xl text-[#184533] leading-none transform -rotate-3 select-none text-right">
              "Real People<br />Real Stories<br />Beautiful Stays"
            </div>
            <svg viewBox="0 0 140 10" fill="none" className="w-28 h-2.5 text-[#184533]/40 stroke-current stroke-2 mt-1">
              <path d="M2 6 Q 70 1, 138 6" strokeLinecap="round" />
            </svg>
          </div>

        </motion.div>

        {/* Scrollable Review Cards Carousel */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex items-stretch gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-1 w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {reviewsData.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="snap-start shrink-0 w-[280px] sm:w-[310px] lg:w-[330px] bg-white rounded-[22px] overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Top Image Portion with Badges */}
              <div className="relative h-52 overflow-hidden shrink-0">
                <img
                  src={rev.cottageImage || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80'}
                  alt={rev.cottageStayed}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20" />

                {/* Top Left Quote Mark Box */}
                <div className="absolute top-3.5 left-3.5 w-9 h-9 rounded-[10px] bg-[#D4EBE0] text-[#0E2C20] flex items-center justify-center font-serif text-xl font-bold shadow-md z-10 border border-white/60">
                  ❝
                </div>

                {/* Top Right Verified Stay Badge */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md text-[#0E2C20] text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5 z-10 border border-white/80">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Verified Stay</span>
                </div>

                {/* Bottom Left Cottage Stayed Tag Badge */}
                <div className="absolute bottom-3.5 left-3.5 bg-white/90 backdrop-blur-md text-[#0E2C20] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 z-10 max-w-[85%] truncate">
                  <span className="text-[10px]">🍃</span>
                  <span className="truncate">{rev.cottageStayed}</span>
                </div>
              </div>

              {/* Card Body Content - Explicit padding: 20px */}
              <div
                className="flex-1 flex flex-col justify-between space-y-4"
                style={{ padding: '20px' }}
              >
                <div className="space-y-3">
                  {/* Rating 5 Stars Row */}
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFC843] text-[#FFC843]" />
                    ))}
                  </div>

                  {/* Comment Quote Text */}
                  <p className="text-xs text-gray-600 leading-relaxed italic font-sans line-clamp-4">
                    "{rev.comment}"
                  </p>
                </div>

                {/* Guest Profile & Stay Date Footer */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="font-bold text-[#0E2C20] text-sm truncate">
                        {rev.name}
                      </div>
                      <div className="text-[11px] text-gray-500 truncate">
                        {rev.location}
                      </div>
                    </div>
                  </div>

                  {/* Calendar Stayed In Date */}
                  <div className="text-[11px] text-gray-500 font-medium flex items-center gap-1 shrink-0 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-100">
                    <Calendar className="w-3 h-3 text-[#184F39]" />
                    <span>Stayed in {rev.stayDate}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Pagination Dots */}
        <div className="relative flex items-center justify-center w-full" style={{ marginTop: '16px' }}>
          <div className="flex items-center gap-2.5">
            {reviewsData.map((rev, idx) => (
              <button
                key={rev.id}
                onClick={() => scrollToCard(idx)}
                title={`Review by ${rev.name}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${activeDotIndex === idx
                  ? 'w-8 bg-[#0E2C20] shadow-sm'
                  : 'w-2.5 bg-[#0E2C20]/25 hover:bg-[#0E2C20]/45'
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Section Bottom Social Proof Metrics Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full pt-4 border-t border-gray-200/60" style={{ marginTop: '24px' }}>

          {/* Left Tagline & Doodle */}
          <div className="flex items-center gap-2 text-left">
            <svg viewBox="0 0 60 20" fill="none" className="w-10 h-4 text-[#1E4A37] stroke-current stroke-2 opacity-70">
              <path d="M3 17 L15 5 L25 14 L38 3 L57 17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B826D] leading-tight">
              CREATING MEMORIES<br />
              <span className="text-gray-400 font-normal">IN THE HILLS</span>
            </div>
          </div>

          {/* Center Social Proof Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-[#0E2C20]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#DCE7DF] text-[#0E2C20] flex items-center justify-center shadow-inner">
                <Users className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold">320+</div>
                <div className="text-[11px] text-gray-500 font-medium">Happy Guests</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#FFF5D6] text-[#8A5A00] flex items-center justify-center shadow-inner">
                <Star className="w-4.5 h-4.5 fill-[#FFC843] text-[#FFC843]" />
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold">4.9/5</div>
                <div className="text-[11px] text-gray-500 font-medium">Average Rating</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#DCE7DF] text-[#0E2C20] flex items-center justify-center shadow-inner">
                <Heart className="w-4.5 h-4.5 text-[#0E2C20]" />
              </div>
              <div className="text-left">
                <div className="text-sm font-extrabold">95%</div>
                <div className="text-[11px] text-gray-500 font-medium">Would Recommend</div>
              </div>
            </div>
          </div>

          {/* Right Tagline */}
          <div className="flex items-center gap-2 text-right">
            <svg viewBox="0 0 60 20" fill="none" className="w-10 h-4 text-[#1E4A37] stroke-current stroke-2 opacity-70">
              <path d="M3 17 L15 5 L25 14 L38 3 L57 17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B826D] leading-tight">
              HIDEOUT RESORT<br />
              <span className="text-gray-400 font-normal">AUTHENTIC REVIEWS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
