'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { Sparkles, Calendar, ShoppingBag, ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const { profile, openBookingModal } = useMua();

  return (
    <section id="hero" className="relative min-h-[90vh] bg-[#FAF8F5] text-[#1F1A17] flex items-center overflow-hidden py-16 lg:py-24 border-b border-[#EFE8DF]">
      {/* Subtle warm glow background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#EFE8DF]/80 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E8D7D0]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Dual CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 lg:pr-6"
          >
            {/* Top Micro Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{profile.title}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-[#1F1A17]">
              Beauty, Artistry <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#8C6D53] via-[#1F1A17] to-[#C5A880]">&amp; Confidence.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-[#6B5B52] font-light leading-relaxed max-w-2xl">
              Makeup artistry created to make you feel unforgettable — with beauty essentials designed to complete the look.
            </p>

            {/* Dual CTAs (Services + Product Shop) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => openBookingModal()}
                className="px-8 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#FAF8F5] bg-[#1F1A17] hover:bg-[#382E29] shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
              >
                <Calendar className="w-4 h-4 text-[#C5A880]" />
                <span>Book Your Experience</span>
              </button>

              <Link
                href="#shop"
                className="px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#1F1A17] bg-[#F5F0EB] hover:bg-[#EFE8DF] border border-[#EFE8DF] transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ShoppingBag className="w-4 h-4 text-[#8C6D53]" />
                <span>Shop The Collection</span>
              </Link>
            </div>

            {/* Social Trust Markers */}
            <div className="pt-6 border-t border-[#EFE8DF] flex flex-wrap items-center gap-6 text-xs text-[#6B5B52]">
              <div className="flex items-center gap-1.5">
                <div className="flex text-[#C5A880]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#C5A880]" />
                  ))}
                </div>
                <span className="font-semibold text-[#1F1A17]">4.95/5</span> Rating ({profile.clientCount}+ Clients)
              </div>

              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#8C6D53]" />
                <span>NYC Studio &amp; Destination Travel</span>
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
              <div className="relative rounded-3xl overflow-hidden border border-[#EFE8DF] shadow-2xl bg-[#F5F0EB] group aspect-[3/4]">
                <Image
                  src={profile.heroImageUrl}
                  alt={profile.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1A17]/80 via-transparent to-transparent opacity-70" />

                {/* Status Overlay Badge */}
                <div className="absolute top-6 left-6 bg-[#FAF8F5]/90 backdrop-blur-md border border-[#EFE8DF] px-4 py-2 rounded-2xl shadow-lg flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-serif font-bold text-[#1F1A17]">Booking 2026 Dates</span>
                </div>

                {/* Floating Product Highlight Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md border border-[#EFE8DF] p-4 rounded-2xl shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-[#8C6D53] font-semibold">Featured Gloss</p>
                    <p className="text-xs font-serif font-bold text-[#1F1A17]">Signature Velvet Lip Gloss in Nude Silk</p>
                  </div>
                  <span className="font-mono text-xs font-bold text-[#8C6D53]">$28.00</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
