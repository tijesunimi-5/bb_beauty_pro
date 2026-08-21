'use client';

import React from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { ServiceItem } from '../../types';
import { Sparkles, Clock, Check, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServicesSection: React.FC = () => {
  const { services, openBookingModal } = useMua();

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FFF0F3] text-[#221217] relative overflow-hidden border-b border-[#FF6B8B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#FF6B8B]/30 text-[#E83E8C] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#FF6B8B]" />
            <span>Curated Artistry Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#221217]">
            Bespoke Makeup Artistry
          </h2>
          <p className="text-xs sm:text-sm text-[#523B44] font-medium leading-relaxed">
            Every appointment begins with skin analysis and luxury prep. Tailored for bridal parties, red carpet galas, and fashion portraiture.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service: ServiceItem, idx: number) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#FF6B8B]/20 hover:border-[#E83E8C] transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#FFF0F3]">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {service.isPopular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-[#FF6B8B] to-[#E83E8C] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    Most Requested
                  </div>
                )}

                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-[#7E0027] font-bold bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#FF6B8B]/30 shadow">
                  <Clock className="w-3.5 h-3.5 text-[#E83E8C]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-widest font-extrabold text-[#E83E8C]">
                      {service.category}
                    </span>
                    <span className="font-mono text-xl font-extrabold text-[#7E0027]">
                      ${service.price.toFixed(2)}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#221217] group-hover:text-[#E83E8C] transition">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#523B44] font-medium mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[#FF6B8B]/20 pt-4">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-[#523B44] font-medium">
                        <Check className="w-3.5 h-3.5 text-[#E83E8C] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => openBookingModal(service)}
                    className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] hover:shadow-lg transition flex items-center justify-center gap-2 shadow-md"
                  >
                    <Calendar className="w-4 h-4 text-white" />
                    <span>Book Experience</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
