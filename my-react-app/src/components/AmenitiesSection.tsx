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

export const AmenitiesSection: React.FC = () => {
  const amenitiesList = [
    { 
      icon: <Wifi className="w-5 h-5 text-white" />, 
      title: 'High-Speed Wi-Fi', 
      desc: 'Stay connected with seamless internet access across the resort.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Flame className="w-5 h-5 text-white" />, 
      title: 'Private Fireplace & Campfire', 
      desc: 'Cozy evenings with warm fires and breathtaking views.',
      image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Coffee className="w-5 h-5 text-white" />, 
      title: 'Artisan Nilgiri Tea & Breakfast', 
      desc: 'Delicious local tea and authentic South Indian breakfast.',
      image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Bath className="w-5 h-5 text-white" />, 
      title: 'Hot Jacuzzi & 24×7 Hot Water', 
      desc: 'Relax and unwind with premium jacuzzi and uninterrupted hot water.',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Car className="w-5 h-5 text-white" />, 
      title: 'Secure On-site Parking', 
      desc: 'Safe and hassle-free parking for your vehicles.',
      image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Clock className="w-5 h-5 text-white" />, 
      title: '24×7 Concierge Service', 
      desc: 'Always at your service for a smooth and enjoyable stay.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <ShieldCheck className="w-5 h-5 text-white" />, 
      title: 'Safe & Hygienic Resort', 
      desc: 'Well-maintained, clean, and family-friendly environment.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80'
    },
    { 
      icon: <Sparkles className="w-5 h-5 text-white" />, 
      title: 'Private Sundecks & Lawns', 
      desc: 'Spacious outdoor areas to relax and soak in the mountain views.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="amenities" className="relative min-h-screen py-16 md:py-24 bg-[#EAF1EC] text-[#12281D] flex flex-col justify-center items-center overflow-hidden">
      
      {/* Background Soft Misty Mountain Gradient & Silhouette */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#DFEADF]/60 via-[#EAF1EC] to-[#E5EEE7]" />
        <div className="absolute inset-x-0 top-0 h-80 opacity-10 bg-[radial-gradient(#1A4231_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
      </div>

      {/* Decorative Left Leaf Graphic */}
      <div className="absolute -left-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M-40 -20 C30 100 110 250 20 450 C-20 520 -50 580 -80 620" stroke="#1B4231" strokeWidth="3" opacity="0.7"/>
          <path d="M10 80 C60 50 120 70 140 120 C90 130 40 110 10 80 Z" fill="#24543F" opacity="0.85"/>
          <path d="M45 180 C110 150 175 180 185 240 C125 250 70 220 45 180 Z" fill="#1C4533" opacity="0.9"/>
          <path d="M30 310 C100 280 160 320 165 380 C105 385 55 350 30 310 Z" fill="#2A5C46" opacity="0.8"/>
        </svg>
      </div>

      {/* Decorative Right Leaf Graphic */}
      <div className="absolute -right-4 top-0 bottom-0 z-0 pointer-events-none w-48 sm:w-64 opacity-90 select-none">
        <svg viewBox="0 0 200 600" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <path d="M240 -20 C170 120 90 280 180 480 C220 540 240 580 260 620" stroke="#1B4231" strokeWidth="3" opacity="0.7"/>
          <path d="M190 100 C140 70 80 90 60 140 C110 150 160 130 190 100 Z" fill="#24543F" opacity="0.85"/>
          <path d="M155 210 C90 180 25 210 15 270 C75 280 130 250 155 210 Z" fill="#1C4533" opacity="0.9"/>
          <path d="M170 340 C100 310 40 350 35 410 C95 415 145 380 170 340 Z" fill="#2A5C46" opacity="0.8"/>
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        
        {/* Top Header Row with 3 Columns */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '28px' }}
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
              <path d="M2 6 Q 70 1, 138 6" strokeLinecap="round"/>
            </svg>
          </div>

        </motion.div>

        {/* 8 Amenities Cards Grid (4 Columns across, row-gap: 28px) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 w-full" style={{ rowGap: '28px' }}>
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
              <div className="relative h-48 overflow-hidden shrink-0">
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
