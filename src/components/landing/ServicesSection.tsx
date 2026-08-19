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
    <section id="services" className="py-20 lg:py-28 bg-[#F5F0EB] text-[#1F1A17] relative overflow-hidden border-b border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Artistry Services</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1A17]">
            Bespoke Makeup Services
          </h2>
          <p className="text-xs sm:text-sm text-[#6B5B52] font-light leading-relaxed">
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
              className="group relative bg-[#FAF8F5] rounded-3xl overflow-hidden border border-[#EFE8DF] hover:border-[#C5A880] transition-all duration-500 shadow-lg flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#F5F0EB]">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {service.isPopular && (
                  <div className="absolute top-4 right-4 bg-[#1F1A17] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    Most Requested
                  </div>
                )}

                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-[#8C6D53] font-medium bg-[#FAF8F5]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#EFE8DF]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-[#8C6D53]">
                      {service.category}
                    </span>
                    <span className="font-mono text-lg font-bold text-[#1F1A17]">
                      ${service.price.toFixed(2)}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1F1A17] group-hover:text-[#8C6D53] transition">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#6B5B52] font-light mt-2 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-4 space-y-2 border-t border-[#EFE8DF] pt-4">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-[11px] text-[#6B5B52] font-light">
                        <Check className="w-3.5 h-3.5 text-[#8C6D53] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => openBookingModal(service)}
                    className="w-full py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4 text-[#C5A880]" />
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
