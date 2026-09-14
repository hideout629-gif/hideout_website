import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import type { Cottage } from '../types';

interface CottageCardProps {
  cottage: Cottage;
  onSelectDetail: (cottage: Cottage) => void;
}

export const CottageCard: React.FC<CottageCardProps> = ({ cottage, onSelectDetail }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="bg-white rounded-[22px] overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full group"
    >
      {/* Image Container with Badges and Overlay Info */}
      <div className="relative h-64 lg:h-48 overflow-hidden shrink-0">
        <img
          src={cottage.featuredImage}
          alt={cottage.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Top Right Heart/Favorite Icon */}
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-10 ${isLiked
            ? 'bg-red-500 text-white border border-red-400 shadow-md'
            : 'bg-black/30 text-white border border-white/40 hover:bg-black/50'
            }`}
          title="Save to favorites"
        >
          <Heart className={`w-4.5 h-4.5 ${isLiked ? 'fill-white' : ''}`} />
        </motion.button>
      </div>

      {/* Card Content Body - Explicit padding: 20px */}
      <div
        className="flex-1 flex flex-col justify-between space-y-4"
        style={{ padding: '20px' }}
        data-desktop-compact
      >
        <div className="space-y-2">
          {/* Sub category Tag */}
          <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#5B826D] block">
            {cottage.category} COLLECTION
          </span>

          {/* Title */}
          <h3 className="text-xl font-bold font-serif text-[#0E2C20] leading-snug group-hover:text-[#184F39] transition-colors">
            {cottage.name}
          </h3>

          {/* Tagline */}
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed font-sans">
            {cottage.tagline}
          </p>
        </div>

        {/* Card Action Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-end">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onSelectDetail(cottage)}
            style={{ padding: '10px 24px' }}
            className="w-full justify-center bg-[#0E2C20] hover:bg-[#184F39] text-white font-bold text-xs rounded-full transition-all flex items-center gap-2.5 cursor-pointer shadow-md hover:shadow-lg shrink-0 whitespace-nowrap"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
