import React from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Flame,
  Car,
  Coffee,
  ShieldCheck,
  Clock,
  Sparkles,
  Bath
} from 'lucide-react';

import img55 from '../assets/image/image 55.jpeg';
import img21 from '../assets/image/image 21.jpeg';
import img45 from '../assets/image/image 45.jpeg';
import img61 from '../assets/image/image 61.jpeg';
import img26 from '../assets/image/image 26.jpeg';
import img27 from '../assets/image/image 27.jpeg';
import img64 from '../assets/image/image 64.jpeg';
import bgImg from '../assets/image/background.png';
import img60 from '../assets/image/image 60.jpeg';

export const AmenitiesSection: React.FC = () => {
  const amenitiesList = [
    {
      icon: <Wifi className="w-5 h-5 text-white" />,
      title: 'High-Speed Wi-Fi',
      desc: 'Stay connected with seamless internet access across the resort.',
      image: img60
    },
    {
      icon: <Flame className="w-5 h-5 text-white" />,
      title: 'Private Fireplace & Campfire',
      desc: 'Cozy evenings with warm fires and breathtaking views.',
      image: img55
    },
    {
      icon: <Coffee className="w-5 h-5 text-white" />,
      title: 'Artisan Nilgiri Tea & Breakfast',
      desc: 'Delicious local tea and authentic South Indian breakfast.',
      image: img21
    },
    {
      icon: <Bath className="w-5 h-5 text-white" />,
      title: 'Hot Jacuzzi & 24×7 Hot Water',
      desc: 'Relax and unwind with premium jacuzzi and uninterrupted hot water.',
      image: img45
    },
    {
      icon: <Car className="w-5 h-5 text-white" />,
      title: 'Secure On-site Parking',
      desc: 'Safe and hassle-free parking for your vehicles.',
      image: img26
    },
    {
      icon: <Clock className="w-5 h-5 text-white" />,
      title: '24×7 Concierge Service',
      desc: 'Always at your service for a smooth and enjoyable stay.',
      image: img27
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: 'Safe & Hygienic Resort',
      desc: 'Well-maintained, clean, and family-friendly environment.',
      image: img64
    },
    {
      icon: <Sparkles className="w-5 h-5 text-white" />,
      title: 'Private Sundecks & Lawns',
      desc: 'Spacious outdoor areas to relax and soak in the mountain views.',
      image: img61
    }
  ];

  return (
    <section id="amenities" className="homepage-section relative py-10 md:py-16 lg:py-8 pt-16 md:pt-20 lg:pt-16 scroll-mt-16 md:scroll-mt-24 bg-[#EAF1EC] text-[#12281D] flex flex-col justify-center items-center overflow-hidden">

      {/* Background Mountain Photo & Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={bgImg}
          alt="Nilgiri Mountain Background"
          className="w-full h-full object-cover filter brightness-[0.95] contrast-[1.05]"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">

        {/* Top Header Row with 3 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '16px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end"
        >

          {/* Left Side Feature Tag List */}
          <div className="lg:col-span-3 hidden lg:flex flex-col space-y-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#5B826D] border-l-2 border-gray-300/60 pl-4">
            <div className="flex items-center gap-2 text-[#133A2B]">
              <span className="w-4 h-4 rounded-full bg-[#133A2B] text-white flex items-center justify-center text-[9px]">🍃</span>
              <span>THOUGHTFUL AMENITIES</span>
            </div>
            <div className="text-gray-400 font-normal">FOR A BETTER TOMORROW</div>
          </div>

          {/* Center Main Headline & Tagline */}
          <div className="lg:col-span-6 text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE7DF] border border-[#C5D7CC] text-[10px] font-extrabold tracking-widest text-[#133A2B] uppercase">
              <span className="w-4 h-4 rounded-full bg-[#133A2B] text-white flex items-center justify-center text-[9px] shrink-0">👑</span>
              <span>PREMIUM HOSPITALITY</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-serif text-[#0E281C] leading-[1.15]">
              Resort Facilities & <span className="font-serif italic font-normal text-[#1B4C37]">Amenities</span>
            </h2>

            <p className="text-sm md:text-base text-gray-600 max-w-xl mx-auto leading-relaxed font-sans">
              Everything you need for a comfortable, luxurious, and hassle-free mountain vacation.
            </p>
          </div>

          {/* Right Side Handwritten Script Accent */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-end">
            <div className="font-script text-3xl sm:text-4xl text-[#184533] leading-none transform -rotate-3 select-none text-right">
              "More Than<br />A Stay"
            </div>
            <svg viewBox="0 0 140 10" fill="none" className="w-28 h-2.5 text-[#184533]/40 stroke-current stroke-2 mt-1">
              <path d="M2 6 Q 70 1, 138 6" strokeLinecap="round" />
            </svg>
          </div>

        </motion.div>

        {/* 8 Amenities Cards Grid (4 Columns across, row-gap: 28px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 w-full" style={{ rowGap: '16px' }}>
          {amenitiesList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[22px] overflow-hidden border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group"
            >
              {/* Image Portion with Dark Green Badge Box */}
              <div className="relative h-48 lg:h-32 overflow-hidden shrink-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                {/* Bottom Left Dark Green Icon Badge */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  className="absolute bottom-3.5 left-3.5 w-10 h-10 rounded-[12px] bg-[#0E2C20] text-white flex items-center justify-center shadow-md z-10 border border-white/30"
                >
                  {item.icon}
                </motion.div>
              </div>

              {/* Card Body Content - Explicit padding: 20px */}
              <div
                className="flex-1 flex flex-col justify-between space-y-3"
                style={{ padding: '20px' }}
              >
                <div>
                  <h3 className="text-lg font-bold font-serif text-[#0E2C20] leading-snug mb-1.5 group-hover:text-[#184F39] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed font-sans line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
