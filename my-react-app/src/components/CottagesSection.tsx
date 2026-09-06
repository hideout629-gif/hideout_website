import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  LayoutGrid,
  Sparkles,
  Home,
  Users,
  Heart
} from 'lucide-react';
import { cottagesData } from '../data/cottagesData';
import { CottageCard } from './CottageCard';
import type { Cottage } from '../types';

interface CottagesSectionProps {
  onSelectDetail: (cottage: Cottage) => void;
}

export const CottagesSection: React.FC<CottagesSectionProps> = ({ onSelectDetail }) => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Cottages', count: 12, icon: <LayoutGrid className="w-4.5 h-4.5" /> },
    { id: 'luxury', label: 'Luxury Suites', count: 4, icon: <Sparkles className="w-4.5 h-4.5" /> },
    { id: 'premium', label: 'Tea Garden', count: 3, icon: <Home className="w-4.5 h-4.5" /> },
    { id: 'family', label: 'Family Villas', count: 3, icon: <Users className="w-4.5 h-4.5" /> },
    { id: 'honeymoon', label: 'Honeymoon', count: 2, icon: <Heart className="w-4.5 h-4.5" /> },
  ];

  const filteredCottages = activeTab === 'all'
    ? cottagesData
    : cottagesData.filter(c => c.category === activeTab);

  return (
    <section id="cottages" className="relative min-h-screen py-16 md:py-24 bg-[#EAF1EC] text-[#12281D] flex flex-col justify-center items-center overflow-hidden">

      {/* Background Soft Misty Mountain Gradient & Pine Forest Backdrop Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DFEADF]/60 via-[#EAF1EC] to-[#E5EEE7]" />
        {/* Subtle Pine Trees Background Layer */}
        <div className="absolute inset-x-0 top-0 h-80 opacity-10 bg-[radial-gradient(#1A4231_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      {/* Decorative Left Leaf Graphic (Matching Screenshot 2 Left Leaves Frame) */}
      <div className="absolute -left-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Main Leaf Stem */}
          <path d="M-40 -20 C30 100 110 250 20 450 C-20 520 -50 580 -80 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          {/* Leaf 1 */}
          <path d="M10 80 C60 50 120 70 140 120 C90 130 40 110 10 80 Z" fill="#24543F" opacity="0.85" />
          <path d="M10 80 C60 95 140 120 140 120" stroke="#8EB19D" strokeWidth="1.5" opacity="0.6" />
          {/* Leaf 2 */}
          <path d="M45 180 C110 150 175 180 185 240 C125 250 70 220 45 180 Z" fill="#1C4533" opacity="0.9" />
          <path d="M45 180 C105 200 185 240 185 240" stroke="#A3C4B2" strokeWidth="1.5" opacity="0.6" />
          {/* Leaf 3 */}
          <path d="M30 310 C100 280 160 320 165 380 C105 385 55 350 30 310 Z" fill="#2A5C46" opacity="0.8" />
          {/* Lower Small Leaves */}
          <path d="M5 420 C50 400 95 430 100 470 C60 475 25 450 5 420 Z" fill="#183D2D" opacity="0.85" />
        </svg>
      </div>

      {/* Decorative Right Leaf Graphic (Matching Screenshot 2 Right Leaves Frame) */}
      <div className="absolute -right-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Right Main Stem */}
          <path d="M240 -20 C170 120 90 280 180 480 C220 540 240 580 260 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          {/* Right Leaf 1 */}
          <path d="M190 100 C140 70 80 90 60 140 C110 150 160 130 190 100 Z" fill="#24543F" opacity="0.85" />
          {/* Right Leaf 2 */}
          <path d="M155 210 C90 180 25 210 15 270 C75 280 130 250 155 210 Z" fill="#1C4533" opacity="0.9" />
          {/* Right Leaf 3 */}
          <path d="M170 340 C100 310 40 350 35 410 C95 415 145 380 170 340 Z" fill="#2A5C46" opacity="0.8" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">

        {/* Top Section Header Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end"
        >

          {/* Left Title & Description */}
          <div className="lg:col-span-8 space-y-3">

            {/* Eyebrow Tagline with Leaf Icon */}
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE7DF] border border-[#C5D7CC] text-[10px] font-extrabold tracking-widest text-[#133A2B] uppercase">
                <span className="w-4 h-4 rounded-full bg-[#133A2B] text-white flex items-center justify-center text-[9px] shrink-0">🍃</span>
                <span>HAND-CRAFTED ACCOMMODATIONS</span>
              </div>
              <div className="h-px w-20 bg-[#B5CBD0]/50 hidden sm:block" />
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0E281C] leading-[1.15]">
              Our <span className="font-serif italic font-normal text-[#1B4C37]">Mountain</span> Cottages
            </h2>

            {/* Paragraph */}
            <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed font-sans">
              Each cottage is uniquely crafted with locally sourced teak wood, offering private balconies, open fire pits, and sweeping panoramic views of the Nilgiri hills.
            </p>
          </div>

          {/* Right Header Accessories (Quote Doodle & Watch Story) */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end space-y-3">

            {/* Mountain Peak Vector Doodle & Script Text */}
            <div className="flex flex-col items-start lg:items-end">
              <svg viewBox="0 0 100 30" fill="none" className="w-14 h-6 text-[#1E4A37] stroke-current stroke-2 mb-1">
                <path d="M5 25 L25 8 L40 20 L60 5 L85 25" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 13 L25 8 L32 13" strokeLinecap="round" />
                <path d="M52 11 L60 5 L68 11" strokeLinecap="round" />
              </svg>

              <div className="font-script text-2xl md:text-3xl text-[#184533] leading-none select-none">
                "Stay Closer To What Matters"
              </div>
              <svg viewBox="0 0 160 8" fill="none" className="w-32 h-2 text-[#184533]/40 stroke-current stroke-2 mt-1">
                <path d="M2 5 Q 80 1, 158 5" strokeLinecap="round" />
              </svg>
            </div>

            {/* Watch Story Pill Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '12px 24px 12px 12px' }}
              className="flex items-center gap-3 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-md text-xs sm:text-sm font-bold text-[#0E281C] hover:bg-white transition-all cursor-pointer"
            >
              <div className="w-7 h-7 rounded-full bg-[#242726] text-white flex items-center justify-center shadow-inner">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              <span>Watch Our Story</span>
            </motion.button>

          </div>

        </motion.div>

        {/* Category Filter Row */}
        <div className="w-full flex flex-wrap items-center justify-between gap-4">

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {categories.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setActiveTab(tab.id)}
                  style={{ padding: '14px 28px' }}
                  className={`flex items-center gap-3.5 rounded-full text-sm sm:text-base font-semibold transition-all cursor-pointer border ${isActive
                    ? 'bg-[#0E2C20] text-white border-[#0E2C20] shadow-md'
                    : 'bg-white/95 text-gray-800 hover:bg-white border-gray-200 shadow-sm'
                    }`}
                >
                  <span className={`shrink-0 ${isActive ? 'text-white' : 'text-[#1E4A37]'}`}>
                    {tab.icon}
                  </span>
                  <span className="whitespace-nowrap">{tab.label}</span>
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ml-1.5 ${isActive ? 'bg-[#FFD56B] text-[#0E2C20]' : 'bg-gray-100 text-gray-700'
                    }`}>
                    {tab.count}
                  </span>
                </motion.button>
              );
            })}
          </div>

        </div>

        {/* Cottages Grid (4 Cards Row) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{ marginTop: '28px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {filteredCottages.map((cottage) => (
              <CottageCard
                key={cottage.id}
                cottage={cottage}
                onSelectDetail={onSelectDetail}
              />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
