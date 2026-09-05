import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare, User, Calendar, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  onShowToast: (title: string, message: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShowToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(
      'Inquiry Sent Successfully! ✉️',
      `Thank you ${formData.name || 'Valued Guest'}. Our resort team will contact you within 1 hour!`
    );
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="min-h-screen relative flex items-center justify-center py-16 bg-[#0B1910] text-white overflow-hidden">
      
      {/* Background Split Layout */}
      <div className="absolute inset-0 pointer-events-none flex">
        {/* Left Dark Forest Atmosphere */}
        <div className="w-full lg:w-[68%] bg-[#0B1910] relative overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-overlay" 
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1910]/80 via-[#0B1910]/95 to-[#0B1910]" />
        </div>

        {/* Right Light Sage Atmosphere */}
        <div className="hidden lg:block w-[32%] bg-[#EAF1EC] relative overflow-hidden">
          {/* Top Right Foliage Silhouette Decor */}
          <div className="absolute -top-10 -right-10 w-64 h-64 opacity-15 pointer-events-none">
            <svg viewBox="0 0 200 200" fill="#142E1F" className="w-full h-full">
              <path d="M40,20 C80,40 120,10 160,50 C180,70 190,110 170,140 C150,170 110,190 70,180 C30,170 10,130 20,90 Z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 py-6">
        
        {/* Top Right Brand Tagline on Desktop Light Side */}
        <div className="hidden lg:flex justify-end mb-4 pr-4">
          <div className="text-right">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#142E1F]/70">Hideout</div>
            <div className="text-[9px] uppercase tracking-[0.2em] text-[#142E1F]/50 font-medium">Stay Close to Nature</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column - Contact Info (4 cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 space-y-6"
          >
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#E5B849] text-xs font-extrabold uppercase tracking-widest">GET IN TOUCH</span>
                <span className="h-[1px] w-12 bg-[#E5B849]/40"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] leading-[1.15] font-bold font-serif text-white mb-4">
                Plan Your Stay <br />
                <span className="text-[#E5B849] italic font-normal font-serif">at Hideout</span>
                <span className="inline-block ml-2 text-2xl animate-pulse">🍃</span>
              </h2>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                Have questions about availability, corporate retreats, or custom honeymoon packages? Reach out to our team anytime! We'd love to help you create a memorable stay.
              </p>
            </div>

            {/* Info Cards List (4 Glass Dark Pills) */}
            <div className="space-y-3">
              {/* Card 1: Location */}
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3.5 p-3.5 rounded-[16px] bg-[#13281C]/90 border border-emerald-500/20 shadow-lg backdrop-blur-md hover:border-emerald-500/40 transition-all">
                <div className="w-11 h-11 rounded-full bg-[#1C3B29] text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-300/70 font-extrabold tracking-wider uppercase">RESORT LOCATION</div>
                  <div className="text-xs font-semibold text-white mt-0.5 leading-snug">
                    Misty Valley Road, Fernhill, Hideout, Tamil Nadu 643004
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Phone */}
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3.5 p-3.5 rounded-[16px] bg-[#13281C]/90 border border-emerald-500/20 shadow-lg backdrop-blur-md hover:border-emerald-500/40 transition-all">
                <div className="w-11 h-11 rounded-full bg-[#1C3B29] text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-300/70 font-extrabold tracking-wider uppercase">CALL / WHATSAPP</div>
                  <div className="text-xs font-semibold text-white mt-0.5 leading-snug">
                    +91 98765 43210 / +91 98765 43211
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Email */}
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3.5 p-3.5 rounded-[16px] bg-[#13281C]/90 border border-emerald-500/20 shadow-lg backdrop-blur-md hover:border-emerald-500/40 transition-all">
                <div className="w-11 h-11 rounded-full bg-[#1C3B29] text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-300/70 font-extrabold tracking-wider uppercase">EMAIL INQUIRIES</div>
                  <div className="text-xs font-semibold text-white mt-0.5 leading-snug">
                    stay@hideout.com
                  </div>
                </div>
              </motion.div>

              {/* Card 4: Hours */}
              <motion.div whileHover={{ scale: 1.02 }} className="flex items-center gap-3.5 p-3.5 rounded-[16px] bg-[#13281C]/90 border border-emerald-500/20 shadow-lg backdrop-blur-md hover:border-emerald-500/40 transition-all">
                <div className="w-11 h-11 rounded-full bg-[#1C3B29] text-emerald-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-[10px] text-emerald-300/70 font-extrabold tracking-wider uppercase">RECEPTION HOURS</div>
                  <div className="text-xs font-semibold text-white mt-0.5 leading-snug">
                    Check-in: 12:00 PM | Check-out: 11:00 AM (24/7 Front Desk)
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Cursive Script Decor */}
            <div className="pt-2">
              <div className="text-2xl sm:text-3xl font-serif italic text-emerald-200/80 tracking-wide font-normal">
                Nature Awaits You
              </div>
              <svg viewBox="0 0 160 12" className="w-36 text-emerald-400/50 mt-1" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M 5 6 Q 40 1, 80 7 T 155 4" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Center Column - Inquiry Form (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-white text-gray-900 rounded-[26px] p-6 sm:p-8 shadow-2xl border border-gray-100 relative z-20"
          >
            
            {/* Top Header Row */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-100 shadow-sm">
                  <MessageSquare className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-serif text-[#142E1F] leading-tight">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-gray-500 font-medium">We usually respond within 1 hour!</p>
                </div>
              </div>

              {/* Decorative Handwritten Script Accent */}
              <div className="hidden sm:block text-right">
                <span className="font-serif italic text-[#2D5A3C] text-sm font-semibold tracking-wide inline-block transform rotate-[-4deg]">
                  Let's <br /> Plan Your <br /> Perfect Stay
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-[12px] bg-gray-50/80 border border-gray-200/80 text-xs sm:text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#142E1F] focus:ring-2 focus:ring-[#142E1F]/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-[12px] bg-gray-50/80 border border-gray-200/80 text-xs sm:text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#142E1F] focus:ring-2 focus:ring-[#142E1F]/10 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2: Email */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Email Address *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="e.g. rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-[12px] bg-gray-50/80 border border-gray-200/80 text-xs sm:text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#142E1F] focus:ring-2 focus:ring-[#142E1F]/10 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">Your Message or Special Request</label>
                <div className="relative">
                  <textarea
                    rows={4}
                    required
                    maxLength={500}
                    placeholder="Tell us your travel dates, preferred cottage type, or special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[12px] bg-gray-50/80 border border-gray-200/80 text-xs sm:text-sm font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none focus:bg-white focus:border-[#142E1F] focus:ring-2 focus:ring-[#142E1F]/10 transition-all resize-none"
                  />
                  <div className="absolute right-3 bottom-3 text-[10px] font-semibold text-gray-400 pointer-events-none">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>

              {/* Gold Action Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 px-6 rounded-[14px] bg-[#E5B849] hover:bg-[#D4A738] text-[#142E1F] font-extrabold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer group mt-2"
              >
                <Send className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                <span>Submit Inquiry Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </form>

            {/* Bottom Trust Badges (3 cols) */}
            <div className="mt-6 pt-5 border-t border-gray-100 grid grid-cols-3 gap-2 text-center">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-1 border-r border-gray-100">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Calendar className="w-4 h-4 text-emerald-800" />
                </div>
                <div className="text-[10px] font-bold text-gray-600 leading-tight text-center sm:text-left">
                  Flexible Booking Options
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-1 border-r border-gray-100">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-800" />
                </div>
                <div className="text-[10px] font-bold text-gray-600 leading-tight text-center sm:text-left">
                  Best Rate Guarantee
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-1">
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                  <Headphones className="w-4 h-4 text-emerald-800" />
                </div>
                <div className="text-[10px] font-bold text-gray-600 leading-tight text-center sm:text-left">
                  24/7 Support
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column - Overlapping Cottage Portrait Card (3 cols) */}
          <div className="lg:col-span-3 flex flex-col justify-between items-center lg:items-end space-y-6">
            
            {/* Portrait Image Card */}
            <div className="relative rounded-[26px] overflow-hidden border-4 border-white shadow-2xl h-[480px] lg:h-[520px] w-full max-w-[340px] group">
              <img 
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1000" 
                alt="Hideout Dusk View"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Floating Frosted Glass Overlay Badge on Image */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-[18px] bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-lg">
                <div className="flex items-center justify-between mb-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-300">
                  <span className="flex items-center gap-1">
                    <span className="text-amber-400 font-serif text-sm">“</span> More
                  </span>
                  <span className="tracking-widest">⸬</span>
                </div>
                <div className="text-sm font-bold font-serif text-white">
                  More Than a Stay
                </div>
                <div className="text-xs text-gray-300 font-medium mt-0.5">
                  A Deeper Connection +
                </div>
              </div>
            </div>

            {/* Mountain Line Art Illustration at bottom right */}
            <div className="flex items-center gap-3 text-emerald-950/60 lg:text-emerald-900/70 pt-2 pr-2">
              {/* Mountain SVG Icon */}
              <svg className="w-8 h-8 shrink-0 text-[#142E1F]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 20L10 8L14 14L18 7L21 20H3Z" strokeLinejoin="round" />
                <path d="M7 13L10 8L12.5 11.5" strokeLinejoin="round" />
              </svg>
              <div className="text-[9px] font-extrabold uppercase tracking-[0.2em] leading-tight">
                MOUNTAINS <br />
                MEMORIES <br />
                ALWAYS
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

