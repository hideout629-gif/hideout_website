import React, { useState } from 'react';
import { X, Star, Users, Bed, Maximize, Bath, Check } from 'lucide-react';
import type { Cottage } from '../types';
import { formatCurrency } from '../utils/formatters';

interface CottageDetailModalProps {
  cottage: Cottage | null;
  onClose: () => void;
}

export const CottageDetailModal: React.FC<CottageDetailModalProps> = ({
  cottage,
  onClose
}) => {
  if (!cottage) return null;

  const [activeImage, setActiveImage] = useState<string>(cottage.featuredImage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white text-gray-900 rounded-3xl max-w-4xl w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative my-8 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Photo Gallery Preview */}
          <div className="lg:col-span-6 space-y-4">
            <div className="h-72 md:h-80 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
              <img
                src={activeImage}
                alt={cottage.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {cottage.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`h-16 rounded-xl overflow-hidden cursor-pointer border-2 transition-all ${
                    activeImage === imgUrl ? 'border-[#142E1F] scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Specs Bar */}
            <div className="grid grid-cols-4 gap-2 p-3 rounded-2xl bg-[#EEF4F0] text-center text-xs font-semibold text-[#142E1F]">
              <div>
                <Users className="w-4 h-4 mx-auto mb-1 text-[#2A583C]" />
                <span>{cottage.maxGuests} Guests</span>
              </div>
              <div>
                <Bed className="w-4 h-4 mx-auto mb-1 text-[#2A583C]" />
                <span>{cottage.bedrooms} Bedroom</span>
              </div>
              <div>
                <Bath className="w-4 h-4 mx-auto mb-1 text-[#2A583C]" />
                <span>{cottage.bathrooms} Bath</span>
              </div>
              <div>
                <Maximize className="w-4 h-4 mx-auto mb-1 text-[#2A583C]" />
                <span>{cottage.sizeSqFt} sq.ft</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cottage Details & Amenities */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-extrabold text-[#7E9F8A] tracking-wider">
                  {cottage.category} Collection
                </span>
                <span className="text-gray-300">•</span>
                <div className="flex items-center gap-1 text-xs font-bold text-gray-800">
                  <Star className="w-3.5 h-3.5 fill-[#E5C158] text-[#E5C158]" />
                  <span>{cottage.rating} ({cottage.reviewsCount} reviews)</span>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#142E1F] mb-3">
                {cottage.name}
              </h2>

              <p className="text-xs text-gray-600 leading-relaxed font-sans mb-4">
                {cottage.description}
              </p>

              {/* Highlights */}
              <div className="mb-4 space-y-1.5">
                <div className="text-xs font-bold text-[#142E1F] uppercase tracking-wider mb-2">
                  Stay Highlights
                </div>
                {cottage.highlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-700 font-medium">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Amenities Grid */}
              <div>
                <div className="text-xs font-bold text-[#142E1F] uppercase tracking-wider mb-2">
                  Included Amenities
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {cottage.amenities.map((am, i) => (
                    <div key={i} className="text-[11px] font-medium bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg">
                      • {am}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Footer */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-500 font-medium">Price per night</div>
                <div className="text-2xl font-extrabold text-[#142E1F]">
                  {formatCurrency(cottage.pricePerNight)}
                </div>
              </div>

              <button
                onClick={onClose}
                className="btn btn-primary text-xs px-5 py-2.5 font-bold cursor-pointer"
              >
                Close Details
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
