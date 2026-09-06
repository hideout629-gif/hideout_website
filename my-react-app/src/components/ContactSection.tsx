import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageSquare, User, Phone, Mail, Calendar, ShieldCheck, Headphones, ArrowRight } from 'lucide-react';

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
    <section id="contact" className="relative py-16 md:py-20 bg-[#0B1910] text-white overflow-hidden flex items-center justify-center">
      
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center mix-blend-overlay" 
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80&w=1600')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1910] via-[#0B1910]/95 to-[#0B1910]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Centered Inquiry Form Box */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white text-gray-900 rounded-[28px] p-6 sm:p-10 shadow-2xl border border-gray-100 relative z-20"
        >
          
          {/* Top Header Row */}
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-extrabold tracking-widest text-[#142E1F] uppercase">
              <MessageSquare className="w-3.5 h-3.5 text-[#142E1F]" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-[#142E1F]">
              Plan Your Stay <span className="font-serif italic font-normal text-[#2A5C46]">at Hideout</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto font-sans leading-relaxed">
              Have questions about availability, custom packages, or special requests? Send us a message and our concierge team will respond within 1 hour!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
            
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
          <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2.5 px-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-emerald-800" />
              </div>
              <div className="text-xs font-bold text-gray-700 text-left">
                Flexible Booking Options
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 px-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-emerald-800" />
              </div>
              <div className="text-xs font-bold text-gray-700 text-left">
                Best Rate Guarantee
              </div>
            </div>

            <div className="flex items-center justify-center gap-2.5 px-2">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0">
                <Headphones className="w-4 h-4 text-emerald-800" />
              </div>
              <div className="text-xs font-bold text-gray-700 text-left">
                24/7 Support
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

