import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, LayoutGrid, Home, Bed, Mountain, Utensils, Heart, ArrowRight, TreePine, X, Sparkles } from 'lucide-react';
import { galleryData } from '../data/galleryData';
import type { GalleryItem } from '../types';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [modalCategory, setModalCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [showAllPhotosModal, setShowAllPhotosModal] = useState<boolean>(false);
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'all', label: 'All Photos', count: galleryData.length, icon: <LayoutGrid className="w-4 h-4" /> },
    { id: 'exteriors', label: 'Exteriors', icon: <Home className="w-4 h-4" /> },
    { id: 'interiors', label: 'Interiors', icon: <Bed className="w-4 h-4" /> },
    { id: 'views', label: 'Views & Nature', icon: <Mountain className="w-4 h-4" /> },
    { id: 'dining', label: 'Dining', icon: <Utensils className="w-4 h-4" /> },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'exteriors': return <Home className="w-3.5 h-3.5 text-[#0E2C20]" />;
      case 'interiors': return <Bed className="w-3.5 h-3.5 text-[#0E2C20]" />;
      case 'views': return <Mountain className="w-3.5 h-3.5 text-[#0E2C20]" />;
      case 'dining': return <Utensils className="w-3.5 h-3.5 text-[#0E2C20]" />;
      default: return <TreePine className="w-3.5 h-3.5 text-[#0E2C20]" />;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'exteriors': return 'Exteriors';
      case 'interiors': return 'Interiors';
      case 'views': return 'Views';
      case 'dining': return 'Dining';
      default: return 'Nature';
    }
  };

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter(g => g.category === activeCategory);

  const modalFilteredItems = modalCategory === 'all'
    ? galleryData
    : galleryData.filter(g => g.category === modalCategory);

  // Separate top row items (first 3) and bottom row items (max 4 for exactly 2 rows total)
  const topRowItems = filteredItems.slice(0, 3);
  const bottomRowItems = filteredItems.slice(3, 7);

  return (
    <section id="gallery" className="relative min-h-screen py-16 md:py-24 bg-[#EAF1EC] text-[#12281D] flex flex-col justify-center items-center overflow-hidden">

      {/* Background Soft Misty Mountain Gradient & Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DFEADF]/60 via-[#EAF1EC] to-[#E5EEE7]" />
        <div className="absolute inset-x-0 top-0 h-80 opacity-10 bg-[radial-gradient(#1A4231_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      {/* Decorative Left Leaf Graphic */}
      <div className="absolute -left-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none animate-wind-sway-left">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-40 -20 C30 100 110 250 20 450 C-20 520 -50 580 -80 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          <path d="M10 80 C60 50 120 70 140 120 C90 130 40 110 10 80 Z" fill="#24543F" opacity="0.85" className="animate-leaf-flutter-top" />
          <path d="M45 180 C110 150 175 180 185 240 C125 250 70 220 45 180 Z" fill="#1C4533" opacity="0.9" className="animate-leaf-flutter-mid" />
          <path d="M30 310 C100 280 160 320 165 380 C105 385 55 350 30 310 Z" fill="#2A5C46" opacity="0.8" className="animate-leaf-flutter-low" />
        </svg>
      </div>

      {/* Decorative Right Leaf Graphic */}
      <div className="absolute -right-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none animate-wind-sway-right">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M240 -20 C170 120 90 280 180 480 C220 540 240 580 260 620" stroke="#1B4231" strokeWidth="3" opacity="0.7" />
          <path d="M190 100 C140 70 80 90 60 140 C110 150 160 130 190 100 Z" fill="#24543F" opacity="0.85" className="animate-leaf-flutter-top" />
          <path d="M155 210 C90 180 25 210 15 270 C75 280 130 250 155 210 Z" fill="#1C4533" opacity="0.9" className="animate-leaf-flutter-mid" />
          <path d="M170 340 C100 310 40 350 35 410 C95 415 145 380 170 340 Z" fill="#2A5C46" opacity="0.8" className="animate-leaf-flutter-low" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">

        {/* Top Header Row with Title & Handwritten Script Accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '32px' }}
          className="gallery-description grid grid-cols-1 lg:grid-cols-12 gap-6 items-end"
        >

          {/* Left Main Title & Subtitle */}
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE7DF] border border-[#C5D7CC] text-[10px] font-extrabold tracking-widest text-[#133A2B] uppercase">
                <span className="w-4 h-4 rounded-full bg-[#133A2B] text-white flex items-center justify-center shrink-0">
                  <Camera className="w-2.5 h-2.5" />
                </span>
                <span>VISUAL TOUR</span>
              </div>
              <div className="h-px w-20 bg-[#B5CBD0]/50 hidden sm:block" />
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0E281C] leading-[1.15]">
              Resort <span className="font-serif italic font-normal text-[#1B4C37]">Photo Gallery</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed font-sans">
              Take a peak into life at Hideout — from misty mornings on private balconies to cozy evenings by the fireplace.
            </p>
          </div>

          {/* Right Side Handwritten Script Accent */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-end">
            <div className="font-script text-3xl sm:text-4xl text-[#184533] leading-none transform -rotate-3 select-none text-right">
              "Moments Make<br />Memories"
            </div>
            <svg viewBox="0 0 140 10" fill="none" className="w-28 h-2.5 text-[#184533]/40 stroke-current stroke-2 mt-1">
              <path d="M2 6 Q 70 1, 138 6" strokeLinecap="round" />
            </svg>
          </div>

        </motion.div>

        {/* Category Filter Pills Row */}
        <div
          style={{ marginBottom: '28px' }}
          className="gallery-filters flex flex-wrap items-center gap-3 md:gap-4"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  if (cat.id === 'all') {
                    setActiveCategory('all');
                    setShowAllPhotosModal(true);
                  } else {
                    setActiveCategory(cat.id);
                  }
                }}
                style={{ padding: '12px 26px' }}
                className={`flex items-center gap-3 rounded-full text-sm sm:text-base font-semibold transition-all cursor-pointer border ${isActive
                    ? 'bg-[#0E2C20] text-white border-[#0E2C20] shadow-md'
                    : 'bg-white/95 text-gray-800 hover:bg-white border-gray-200 shadow-sm'
                  }`}
              >
                <span className={`shrink-0 ${isActive ? 'text-white' : 'text-[#1E4A37]'}`}>
                  {cat.icon}
                </span>
                <span className="whitespace-nowrap">{cat.label}</span>
                {cat.count !== undefined && (
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ml-1.5 ${isActive ? 'bg-[#FFD56B] text-[#0E2C20]' : 'bg-gray-100 text-gray-700'
                    }`}>
                    {cat.count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Photo Gallery Grid Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >

            {/* Top Row: 3 Large Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {topRowItems.map((item, index) => {
                const isLiked = !!likedMap[item.id];
                return (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedItem(item)}
                    className="group relative rounded-[22px] overflow-hidden h-72 sm:h-80 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 bg-white"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />

                    {/* Top Left Category Pill */}
                    <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0E2C20] shadow-md flex items-center gap-1.5 z-10">
                      {getCategoryIcon(item.category)}
                      <span>{getCategoryLabel(item.category)}</span>
                    </div>

                    {/* Top Right Heart Favorite Button */}
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => toggleLike(e, item.id)}
                      className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-10 ${isLiked
                          ? 'bg-red-500 text-white border border-red-400 shadow-md'
                          : 'bg-black/30 text-white border border-white/40 hover:bg-black/50'
                        }`}
                      title="Favorite photo"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                    </motion.button>

                    {/* Bottom Content Info */}
                    <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between z-10">
                      <div className="space-y-1 max-w-[80%]">
                        {index === 0 && (
                          <div className="text-[10px] uppercase tracking-widest font-extrabold text-[#FFC843]">
                            — FEATURED
                          </div>
                        )}
                        <h3 className="text-lg sm:text-xl font-bold font-serif leading-tight text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-200 line-clamp-1 font-sans opacity-90">
                          {item.caption}
                        </p>
                      </div>

                      {/* Circular Action Button */}
                      <div className="w-9 h-9 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white group-hover:bg-[#0E2C20] group-hover:border-[#0E2C20] flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-md">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Row: 4 Cards Across */}
            {bottomRowItems.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {bottomRowItems.map((item) => {
                  const isLiked = !!likedMap[item.id];
                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -8 }}
                      onClick={() => setSelectedItem(item)}
                      className="group relative rounded-[22px] overflow-hidden h-64 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 bg-white"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />

                      {/* Top Left Category Pill */}
                      <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0E2C20] shadow-md flex items-center gap-1.5 z-10">
                        {getCategoryIcon(item.category)}
                        <span>{getCategoryLabel(item.category)}</span>
                      </div>

                      {/* Top Right Heart Favorite Button */}
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => toggleLike(e, item.id)}
                        className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-10 ${isLiked
                            ? 'bg-red-500 text-white border border-red-400 shadow-md'
                            : 'bg-black/30 text-white border border-white/40 hover:bg-black/50'
                          }`}
                        title="Favorite photo"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                      </motion.button>

                      {/* Bottom Content Info */}
                      <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between z-10">
                        <div className="space-y-1 max-w-[78%]">
                          <h3 className="text-base sm:text-lg font-bold font-serif leading-snug text-white">
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-gray-200 line-clamp-1 font-sans opacity-90">
                            {item.caption}
                          </p>
                        </div>

                        {/* Circular Action Button */}
                        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white group-hover:bg-[#0E2C20] group-hover:border-[#0E2C20] flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-md">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* Section Bottom Footer Controls */}
        <div
          style={{ marginTop: '28px' }}
          className="gallery-actions flex flex-col sm:flex-row items-center justify-between gap-4 w-full pt-2"
        >

          {/* Left Decorative Line & Text */}
          <div className="flex items-center gap-2 text-left">
            <svg viewBox="0 0 60 20" fill="none" className="w-10 h-4 text-[#1E4A37] stroke-current stroke-2 opacity-70">
              <path d="M3 17 L15 5 L25 14 L38 3 L57 17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B826D]">
              NATURE IN EVERY FRAME
            </div>
          </div>

          {/* Center Action Button */}
          <button
            onClick={() => setShowAllPhotosModal(true)}
            style={{ padding: '14px 34px' }}
            className="bg-[#0E2C20] hover:bg-[#184F39] text-white text-xs font-bold rounded-full flex items-center gap-2.5 shadow-md transition-all cursor-pointer"
          >
            <Camera className="w-4 h-4" />
            <span>View All Photos</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>

          {/* Right Mountain Vector Doodle & Tagline */}
          <div className="flex items-center gap-2 text-right">
            <svg viewBox="0 0 60 20" fill="none" className="w-10 h-4 text-[#1E4A37] stroke-current stroke-2 opacity-70">
              <path d="M3 17 L15 5 L25 14 L38 3 L57 17" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#5B826D] leading-tight">
              HIDEOUT<br />
              <span className="text-gray-400 font-normal">STAY CLOSE TO NATURE</span>
            </div>
          </div>

        </div>

      </div>

      {/* Full Photo Gallery Showcase Popup Modal */}
      <AnimatePresence>
        {showAllPhotosModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white text-gray-900 rounded-3xl max-w-6xl w-full shadow-2xl border border-gray-100 relative my-6 max-h-[92vh] overflow-y-auto"
              style={{ padding: '20px' }}
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-gray-100 pb-4 mb-5 px-2 pt-2">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE7DF] border border-[#C5D7CC] text-[10px] font-extrabold tracking-widest text-[#133A2B] uppercase mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#133A2B]" />
                    <span>FULL RESORT GALLERY</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#0E2C20]">
                    All Resort <span className="font-serif italic font-normal text-[#1B4C37]">Photos</span>
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-600 font-sans mt-1">
                    Explore high-resolution photography of our luxury private cottages, panoramic mountain views, dining decks, and forest trails.
                  </p>
                </div>
                <button
                  onClick={() => setShowAllPhotosModal(false)}
                  className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Pills in Modal */}
              <div className="flex flex-wrap items-center gap-2 mb-6 px-2">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mr-2">Category:</span>
                {[
                  { id: 'all', label: `All Photos (${galleryData.length})` },
                  { id: 'exteriors', label: 'Exteriors' },
                  { id: 'interiors', label: 'Interiors' },
                  { id: 'views', label: 'Views & Nature' },
                  { id: 'dining', label: 'Dining' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setModalCategory(tab.id)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${modalCategory === tab.id
                        ? 'bg-[#0E2C20] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Photo Cards Grid inside Modal */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 pb-4">
                {modalFilteredItems.map(item => {
                  const isLiked = !!likedMap[item.id];
                  return (
                    <div
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="group relative rounded-[22px] overflow-hidden h-64 cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200/80 bg-white"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/20" />

                      {/* Top Left Category Pill */}
                      <div className="absolute top-3.5 left-3.5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0E2C20] shadow-md flex items-center gap-1.5 z-10">
                        {getCategoryIcon(item.category)}
                        <span>{getCategoryLabel(item.category)}</span>
                      </div>

                      {/* Top Right Heart Favorite Button */}
                      <motion.button
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => toggleLike(e, item.id)}
                        className={`absolute top-3.5 right-3.5 w-8 h-8 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-10 ${isLiked
                            ? 'bg-red-500 text-white border border-red-400 shadow-md'
                            : 'bg-black/30 text-white border border-white/40 hover:bg-black/50'
                          }`}
                        title="Favorite photo"
                      >
                        <Heart className={`w-4 h-4 ${isLiked ? 'fill-white' : ''}`} />
                      </motion.button>

                      {/* Bottom Content Info */}
                      <div className="absolute bottom-4 left-5 right-5 text-white flex items-end justify-between z-10">
                        <div className="space-y-1 max-w-[80%]">
                          <h3 className="text-base sm:text-lg font-bold font-serif leading-snug text-white">
                            {item.title}
                          </h3>
                          <p className="text-[11px] text-gray-200 line-clamp-1 font-sans opacity-90">
                            {item.caption}
                          </p>
                        </div>

                        {/* Circular Action Button */}
                        <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white group-hover:bg-[#0E2C20] group-hover:border-[#0E2C20] flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-md">
                          <ArrowRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Modal Footer Bar */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between px-2">
                <span className="text-xs text-gray-500 font-medium">
                  Showing {modalFilteredItems.length} of {galleryData.length} resort photos
                </span>
                <button
                  onClick={() => setShowAllPhotosModal(false)}
                  className="px-6 py-2.5 rounded-full bg-[#0E2C20] text-[#E5C158] text-xs font-bold hover:bg-[#184F39] transition-colors cursor-pointer shadow-sm"
                >
                  Done Exploring
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedItem}
        items={filteredItems}
        onClose={() => setSelectedItem(null)}
        onNavigate={(newItem) => setSelectedItem(newItem)}
      />
    </section>
  );
};
