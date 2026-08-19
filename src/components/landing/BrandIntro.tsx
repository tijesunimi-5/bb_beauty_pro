'use client';

import React from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { Sparkles, Heart, Feather, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const BrandIntro: React.FC = () => {
  const { profile, openBookingModal } = useMua();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1F1A17] relative overflow-hidden border-b border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#EFE8DF] aspect-[4/5] bg-[#F5F0EB]">
                <Image
                  src={profile.aboutImageUrl}
                  alt={profile.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Signature Badge */}
              <div className="absolute -bottom-6 -right-4 bg-[#FAF8F5] border border-[#EFE8DF] p-5 rounded-2xl shadow-xl max-w-xs backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#8C6D53]">
                    <Feather className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif italic font-bold text-sm text-[#1F1A17]">American Luxury Aesthetics</p>
                    <p className="text-[11px] text-[#8C6D53]">Luminous Skin • Timeless Elegance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Behind The Artistry</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1A17] leading-tight">
              Where artistry becomes confidence.
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-[#6B5B52] font-light leading-relaxed">
              {profile.bio}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-[#6B5B52] font-light leading-relaxed">
              {profile.philosophy}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#EFE8DF]">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#8C6D53] shrink-0 mt-0.5 border border-[#EFE8DF]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F1A17]">Sanitised Luxury Prep</h4>
                  <p className="text-[11px] text-[#6B5B52]">100% medical-grade tool hygiene & botanical skincare prep.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#8C6D53] shrink-0 mt-0.5 border border-[#EFE8DF]">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1F1A17]">Bespoke Facial Mapping</h4>
                  <p className="text-[11px] text-[#6B5B52]">Custom undertone matching tailored to your bone structure.</p>
                </div>
              </div>
            </div>

            {/* Signature Quote */}
            <div className="pt-4 flex items-center justify-between">
              <div className="font-serif italic text-2xl text-[#8C6D53]">
                Elena Vance
              </div>
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] transition"
              >
                Book An Appointment
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
