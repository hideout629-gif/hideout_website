import React, { useState } from 'react';
import { Calendar as CalendarIcon, Users, ChevronDown, Search } from 'lucide-react';
import type { BookingSearchParams } from '../types';

interface AvailabilitySearchProps {
  onSearch: (params: BookingSearchParams) => void;
}

export const AvailabilitySearch: React.FC<AvailabilitySearchProps> = ({ onSearch }) => {
  const [checkIn, setCheckIn] = useState('2026-09-05');
  const [checkOut, setCheckOut] = useState('2026-09-07');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(1);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      checkIn,
      checkOut,
      adults,
      children,
    });
  };

  // Helper to format date label
  const formatDateDisplay = (dateStr: string) => {
    try {
      const date = new Date(dateStr);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
      const dayNum = date.getDate().toString().padStart(2, '0');
      const monthShort = date.toLocaleDateString('en-US', { month: 'short' });
      const year = date.getFullYear();
      return {
        formatted: `${dayNum} ${monthShort}, ${year}`,
        weekday: dayName,
      };
    } catch {
      return { formatted: dateStr, weekday: '' };
    }
  };

  const checkInDisplay = formatDateDisplay(checkIn);
  const checkOutDisplay = formatDateDisplay(checkOut);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-3 md:p-4 shadow-2xl border border-white/80 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 items-center"
      >
        {/* Check-In Field */}
        <div className="md:col-span-3 relative p-3 rounded-xl hover:bg-emerald-50/50 transition-colors border border-transparent hover:border-emerald-100/60 group">
          <label className="text-[11px] font-bold text-gray-400 tracking-wider uppercase flex items-center gap-1.5 mb-1 cursor-pointer">
            Check In
          </label>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/10 text-emerald-900 flex items-center justify-center shrink-0 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-900 leading-tight truncate">
                {checkInDisplay.formatted}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {checkInDisplay.weekday}
              </div>
            </div>
          </div>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-200" />

        {/* Check-Out Field */}
        <div className="md:col-span-3 relative p-3 rounded-xl hover:bg-emerald-50/50 transition-colors border border-transparent hover:border-emerald-100/60 group">
          <label className="text-[11px] font-bold text-gray-400 tracking-wider uppercase flex items-center gap-1.5 mb-1 cursor-pointer">
            Check Out
          </label>
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-emerald-800/10 text-emerald-900 flex items-center justify-center shrink-0 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
              <CalendarIcon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-900 leading-tight truncate">
                {checkOutDisplay.formatted}
              </div>
              <div className="text-xs text-gray-500 font-medium">
                {checkOutDisplay.weekday}
              </div>
            </div>
          </div>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          />
        </div>

        <div className="hidden md:block w-px h-10 bg-gray-200" />

        {/* Guests Field */}
        <div className="md:col-span-3 relative p-3 rounded-xl hover:bg-emerald-50/50 transition-colors border border-transparent hover:border-emerald-100/60">
          <label className="text-[11px] font-bold text-gray-400 tracking-wider uppercase flex items-center gap-1.5 mb-1">
            Guests
          </label>
          <button
            type="button"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
            className="w-full flex items-center justify-between text-left focus:outline-none"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-emerald-800/10 text-emerald-900 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="text-sm font-bold text-gray-900 leading-tight">
                  {adults} Adults, {children} Children
                </div>
                <div className="text-xs text-gray-500 font-medium">
                  {adults + children} Total Guests
                </div>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-1" />
          </button>

          {/* Guest Count Dropdown Menu */}
          {showGuestDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl p-4 shadow-2xl border border-gray-100 z-50 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-800">Adults</div>
                  <div className="text-xs text-gray-500">Ages 12+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(1, adults - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-gray-800 w-4 text-center">{adults}</span>
                  <button
                    type="button"
                    onClick={() => setAdults(Math.min(10, adults + 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-gray-800">Children</div>
                  <div className="text-xs text-gray-500">Ages 2 - 11</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="font-bold text-gray-800 w-4 text-center">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren(Math.min(6, children + 1))}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center font-bold text-gray-600 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowGuestDropdown(false)}
                className="btn btn-primary text-xs py-2 w-full mt-1"
              >
                Apply Guests
              </button>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-3">
          <button
            type="submit"
            className="w-full bg-[#142E1F] hover:bg-[#1E422D] text-white font-bold py-4 px-6 rounded-xl lg:rounded-2xl transition-all shadow-lg hover:shadow-emerald-950/30 flex items-center justify-center gap-2 group text-sm cursor-pointer"
          >
            <Search className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Check Availability</span>
          </button>
        </div>
      </form>
    </div>
  );
};
