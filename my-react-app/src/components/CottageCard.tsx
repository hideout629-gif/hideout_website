import React, { useState } from 'react';
import { Star, Users, Bed, Maximize, ArrowRight, Heart, MapPin } from 'lucide-react';
import type { Cottage } from '../types';
import { formatCurrency } from '../utils/formatters';

interface CottageCardProps {
  cottage: Cottage;
  onSelectDetail: (cottage: Cottage) => void;
}

export const CottageCard: React.FC<CottageCardProps> = ({ cottage, onSelectDetail }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-[22px] overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group">
      {/* Image Container with Badges and Overlay Info */}
      <div className="relative h-64 overflow-hidden shrink-0">
        <img
          src={cottage.featuredImage}
          alt={cottage.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        {/* Top Left Badge */}
        {cottage.badge && (
          <div className="absolute top-3.5 left-3.5 bg-[#FFC843] text-[#0E2C20] text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 z-10">
            {cottage.badge.includes('Sunrise') && <span>☀</span>}
            {cottage.badge.includes('Popular') && <span>★</span>}
            {cottage.badge.includes('Favorite') && <span>🏷</span>}
            {cottage.badge.includes('Romantic') && <span>❤</span>}
            {!cottage.badge.includes('Sunrise') && !cottage.badge.includes('Popular') && !cottage.badge.includes('Favorite') && !cottage.badge.includes('Romantic') && <span>★</span>}
            <span>{cottage.badge}</span>
          </div>
        )}

        {/* Top Right Heart/Favorite Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full backdrop-blur-md flex items-center justify-center transition-all cursor-pointer z-10 ${
            isLiked 
              ? 'bg-red-500 text-white border border-red-400 shadow-md' 
              : 'bg-black/30 text-white border border-white/40 hover:bg-black/50'
          }`}
          title="Save to favorites"
        >
          <Heart className={`w-4.5 h-4.5 ${isLiked ? 'fill-white' : ''}`} />
        </button>

        {/* Bottom Image Overlay Info */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-bold">
          <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
            <Star className="w-3.5 h-3.5 fill-[#FFC843] text-[#FFC843]" />
            <span>{cottage.rating}</span>
            <span className="text-gray-300 font-normal text-[11px]">({cottage.reviewsCount} reviews)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-gray-100">
            <MapPin className="w-3.5 h-3.5 text-[#FFC843]" />
            <span>{cottage.location || 'Ooty, Tamil Nadu'}</span>
          </div>
        </div>
      </div>

      {/* Card Content Body - Explicit padding: 20px */}
      <div 
        className="flex-1 flex flex-col justify-between space-y-4"
        style={{ padding: '20px' }}
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

          {/* Specs Row */}
          <div className="flex items-center gap-3.5 text-xs font-semibold text-gray-700 pt-2 pb-1">
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#184F39]" />
              <span>{cottage.maxGuests} Guests</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bed className="w-3.5 h-3.5 text-[#184F39]" />
              <span>{cottage.bedrooms} Bed</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Maximize className="w-3.5 h-3.5 text-[#184F39]" />
              <span>{cottage.sizeSqFt} sq.ft</span>
            </div>
          </div>

          {/* Amenity Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {cottage.amenities.slice(0, 3).map((amenity, idx) => (
              <span
                key={idx}
                className="text-[11px] font-medium bg-gray-100/90 text-gray-700 px-2.5 py-1 rounded-md"
              >
                {amenity}
              </span>
            ))}
            {cottage.amenities.length > 3 && (
              <span className="text-[11px] font-medium bg-emerald-50 text-[#0E2C20] px-2 py-1 rounded-md">
                +{cottage.amenities.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Card Pricing & Action Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Starting from</div>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold text-[#0E2C20]">
                {formatCurrency(cottage.pricePerNight)}
              </span>
              <span className="text-xs text-gray-500 font-normal">/ night</span>
            </div>
          </div>

          <button
            onClick={() => onSelectDetail(cottage)}
            style={{ padding: '14px 34px' }}
            className="bg-[#0E2C20] hover:bg-[#184F39] text-white font-bold text-xs rounded-full transition-all flex items-center gap-2.5 cursor-pointer shadow-md hover:shadow-lg hover:scale-105 shrink-0 whitespace-nowrap"
          >
            <span>View Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
