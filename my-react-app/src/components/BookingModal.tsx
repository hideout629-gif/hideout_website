import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, ShieldCheck, Check } from 'lucide-react';
import { cottagesData } from '../data/cottagesData';
import type { Cottage, BookingSearchParams } from '../types';
import { formatCurrency } from '../utils/formatters';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCottage?: Cottage | null;
  initialSearchParams?: BookingSearchParams | null;
  onBookingSubmit: (cottageName: string) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialCottage,
  initialSearchParams,
  onBookingSubmit
}) => {
  const [selectedCottageId, setSelectedCottageId] = useState<string>(
    initialCottage?.id || cottagesData[0].id
  );
  const [checkIn, setCheckIn] = useState<string>(
    initialSearchParams?.checkIn || '2026-09-05'
  );
  const [checkOut, setCheckOut] = useState<string>(
    initialSearchParams?.checkOut || '2026-09-07'
  );
  const [adults, setAdults] = useState<number>(initialSearchParams?.adults || 2);
  const [children, setChildren] = useState<number>(initialSearchParams?.children || 1);
  const [guestName, setGuestName] = useState<string>('');
  const [guestEmail, setGuestEmail] = useState<string>('');
  const [guestPhone, setGuestPhone] = useState<string>('');

  useEffect(() => {
    if (initialCottage) {
      setSelectedCottageId(initialCottage.id);
    }
    if (initialSearchParams) {
      setCheckIn(initialSearchParams.checkIn);
      setCheckOut(initialSearchParams.checkOut);
      setAdults(initialSearchParams.adults);
      setChildren(initialSearchParams.children);
    }
  }, [initialCottage, initialSearchParams]);

  if (!isOpen) return null;

  const currentCottage = cottagesData.find(c => c.id === selectedCottageId) || cottagesData[0];

  // Calculate nights
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diff = (end.getTime() - start.getTime()) / (1000 * 3600 * 24);
    return Math.max(1, isNaN(diff) ? 1 : Math.round(diff));
  };

  const nights = calculateNights();
  const subtotal = currentCottage.pricePerNight * nights;
  const tax = Math.round(subtotal * 0.12);
  const grandTotal = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookingSubmit(currentCottage.name);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-white text-gray-900 rounded-3xl max-w-3xl w-full p-6 md:p-8 shadow-2xl border border-gray-100 relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C158] bg-[#142E1F] px-3 py-1 rounded-full mb-2">
            Instant Booking Inquiry
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#142E1F]">
            Reserve Your Mountain Getaway
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Select Cottage */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">
              Select Cottage Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cottagesData.map((cottage) => {
                const isSelected = cottage.id === selectedCottageId;
                return (
                  <div
                    key={cottage.id}
                    onClick={() => setSelectedCottageId(cottage.id)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'border-[#142E1F] bg-emerald-50/60 ring-2 ring-[#142E1F]'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <img
                      src={cottage.featuredImage}
                      alt={cottage.name}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-bold text-gray-900 truncate">
                        {cottage.name}
                      </div>
                      <div className="text-xs text-emerald-800 font-semibold">
                        {formatCurrency(cottage.pricePerNight)} / night
                      </div>
                    </div>
                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-[#142E1F] text-white flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dates & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#142E1F]" /> Check In
              </label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#142E1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#142E1F]" /> Check Out
              </label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none focus:border-[#142E1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#142E1F]" /> Guests
              </label>
              <div className="flex gap-2">
                <select
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-1/2 px-2 py-2.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none"
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} Adult{num > 1 ? 's' : ''}</option>
                  ))}
                </select>
                <select
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-1/2 px-2 py-2.5 rounded-xl border border-gray-200 text-sm font-medium focus:outline-none"
                >
                  {[0, 1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>{num} Child{num !== 1 ? 'ren' : ''}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Guest Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anand V"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#142E1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
              <input
                type="email"
                required
                placeholder="anand@example.com"
                value={guestEmail}
                onChange={(e) => setGuestEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#142E1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 9876543210"
                value={guestPhone}
                onChange={(e) => setGuestPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#142E1F]"
              />
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-950/10 space-y-2 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>{currentCottage.name} ({nights} night{nights > 1 ? 's' : ''})</span>
              <span className="font-semibold text-gray-800">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Estimated Taxes & Resort Fee (12%)</span>
              <span className="font-semibold text-gray-800">{formatCurrency(tax)}</span>
            </div>
            <div className="pt-2 border-t border-emerald-950/10 flex justify-between font-extrabold text-base text-[#142E1F]">
              <span>Total Estimated Amount</span>
              <span>{formatCurrency(grandTotal)}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>No immediate payment required!</span>
            </div>

            <button
              type="submit"
              className="btn btn-gold px-8 py-3.5 text-sm font-extrabold shadow-lg"
            >
              Confirm Reservation Request
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
