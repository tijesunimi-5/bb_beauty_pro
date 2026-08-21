'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { Calendar, ShoppingBag, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { profile, openBookingModal } = useMua();

  return (
    <section id="hero" className="relative min-h-[90vh] bg-gradient-to-b from-[#FFF0F3] via-[#FFF9F9] to-[#FFF0F3] text-[#221217] flex items-center overflow-hidden py-16 lg:py-24 border-b border-[#FF6B8B]/20">
      {/* Soft elegant background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-[#FF6B8B]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#D4AF37]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 lg:pr-6"
          >
            {/* Top Clean Micro Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0F3] border border-[#FF6B8B]/30 text-[#E83E8C] text-xs font-bold uppercase tracking-[0.2em]">
              <span>{profile.title}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-[#221217]">
              Beauty, Artistry <br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37]">
                &amp; Unforgettable Glamour.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#523B44] font-medium leading-relaxed max-w-2xl">
              Elevated luxury makeup artistry crafted for brides, red carpet events, and campaigns — paired with a signature high-shine lip collection.
            </p>

            {/* Dual CTAs (Services + Product Shop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => openBookingModal()}
                className="px-8 py-4 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] hover:opacity-95 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-white" />
                <span>Book Your Experience</span>
              </button>

              <Link
                href="#shop"
                className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#7E0027] bg-white hover:bg-[#FFF0F3] border-2 border-[#FF6B8B]/40 hover:border-[#E83E8C] transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
              >
                <ShoppingBag className="w-4 h-4 text-[#E83E8C]" />
                <span>Shop Lip Collection</span>
              </Link>
            </div>

            {/* Clean Social Trust Markers */}
            <div className="pt-6 border-t border-[#FF6B8B]/20 flex flex-wrap items-center gap-6 text-xs text-[#523B44]">
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#FF6B8B]/20 shadow-sm font-semibold">
                <span className="font-bold text-[#7E0027]">4.95 / 5.0</span>
                <span className="text-[#523B44]">Verified Client Rating ({profile.clientCount}+ Clients)</span>
              </div>

              <div className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#FF6B8B]/20 shadow-sm font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#E83E8C]" />
                <span>SoHo NYC Studio &amp; Worldwide Travel</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Hero Portrait Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden border-2 border-[#FF6B8B]/40 shadow-2xl bg-[#FFF0F3] group aspect-[3/4]">
                <Image
                  src={profile.heroImageUrl}
                  alt={profile.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#7E0027]/85 via-transparent to-transparent opacity-80" />

                {/* Status Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-[#FF6B8B]/30 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-serif font-bold text-[#7E0027]">Now Booking 2026 Dates</span>
                </div>

                {/* Floating Product Highlight Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md border border-[#FF6B8B]/30 p-4 rounded-2xl shadow-2xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#E83E8C] font-bold flex items-center gap-1">
                      <Heart className="w-3 h-3 fill-[#E83E8C]" /> Bestselling Lip Gloss
                    </p>
                    <p className="text-xs font-serif font-bold text-[#221217]">Signature Velvet Lip Gloss in Nude Silk</p>
                  </div>
                  <span className="font-mono text-sm font-extrabold text-[#7E0027] bg-[#FFF0F3] px-2.5 py-1 rounded-lg border border-[#FF6B8B]/20">$28.00</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
