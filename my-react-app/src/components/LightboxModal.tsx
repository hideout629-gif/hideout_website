import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, items, onClose, onNavigate }) => {
  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onNavigate(items[nextIndex]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 animate-in fade-in duration-200">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 cursor-pointer"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
        />
        <div className="mt-4 text-center">
          <h3 className="text-xl font-bold font-serif text-white">{item.title}</h3>
          <p className="text-sm text-gray-400 mt-1 max-w-lg">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
