'use client';

import React from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { Sparkles, Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = useMua();

  return (
    <section className="py-20 lg:py-28 bg-[#1C1B1A] text-[#FAF8F5] relative overflow-hidden border-t border-[#FAF8F5]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Words & Love</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF8F5]">
            Unforgettable Client Experiences
          </h2>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-[#121110] p-8 rounded-3xl border border-[#FAF8F5]/10 hover:border-[#D4AF37]/40 transition duration-300 relative flex flex-col justify-between shadow-xl"
            >
              <Quote className="w-10 h-10 text-[#D4AF37]/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex text-[#D4AF37] gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 font-light italic leading-relaxed">
                  &quot;{t.quote}&quot;
                </p>
              </div>

              <div className="pt-6 border-t border-[#FAF8F5]/10 flex items-center gap-3 mt-6">
                {t.avatarUrl ? (
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D4AF37]/40">
                    <Image src={t.avatarUrl} alt={t.clientName} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center font-bold text-sm">
                    {t.clientName.charAt(0)}
                  </div>
                )}

                <div>
                  <h4 className="font-serif font-bold text-sm text-[#FAF8F5]">
                    {t.clientName}
                  </h4>
                  <p className="text-[11px] text-[#C5A880] uppercase tracking-wider">
                    {t.eventType} • {t.date}
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
