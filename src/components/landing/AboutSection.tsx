'use client';

import React from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { Sparkles, Heart, Feather, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const { profile } = useMua();

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#121110] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative outline frame */}
              <div className="absolute -inset-4 rounded-3xl border border-[#D4AF37]/30 transform -rotate-2 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#FAF8F5]/10 aspect-[4/5] bg-[#1C1B1A]">
                <Image
                  src={profile.aboutImageUrl}
                  alt={profile.name}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-60" />
              </div>

              {/* Signature Badge Box */}
              <div className="absolute -bottom-6 -right-4 bg-[#1C1B1A] border border-[#D4AF37]/40 p-5 rounded-2xl shadow-2xl max-w-xs backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                    <Feather className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-serif italic font-bold text-sm text-[#FAF8F5]">Bespoke Beauty Philosophy</p>
                    <p className="text-[11px] text-[#C5A880]">Luminous Skin • Timeless Elegance</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1B1A] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Behind The Artistry</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF8F5] leading-tight">
              &quot;Makeup should elevate your spirit, not conceal your identity.&quot;
            </h2>

            <p className="text-sm md:text-base text-[#FAF8F5]/80 font-light leading-relaxed">
              {profile.bio}
            </p>

            <p className="text-sm md:text-base text-[#FAF8F5]/70 font-light leading-relaxed">
              {profile.philosophy}
            </p>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#FAF8F5]/10">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">Hygiene & Premium Prep</h4>
                  <p className="text-[11px] text-[#FAF8F5]/60">100% sanitized tools & luxury skincare foundation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#D4AF37] shrink-0 mt-0.5">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-[#FAF8F5]">Tailored Facial Mapping</h4>
                  <p className="text-[11px] text-[#FAF8F5]/60">Customized color tones tailored to your eye shape & bone structure.</p>
                </div>
              </div>
            </div>

            {/* Signature Graphic */}
            <div className="pt-6 flex items-center gap-4">
              <div className="font-serif italic text-2xl text-[#D4AF37] tracking-wider">
                Elena Vance
              </div>
              <span className="text-xs uppercase tracking-widest text-[#FAF8F5]/40 font-light">
                — Master Artist & Founder
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
