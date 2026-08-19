'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { PortfolioCategory, PortfolioItem } from '../../types';
import { Lightbox } from '../ui/Lightbox';
import { Sparkles, Eye, Sliders, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioSection: React.FC = () => {
  const { portfolio, openBookingModal } = useMua();
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<PortfolioItem | null>(null);

  const categories: PortfolioCategory[] = ['All', 'Bridal', 'Traditional', 'Soft Glam', 'Full Glam', 'Photoshoot'];

  const filteredPortfolio = selectedCategory === 'All'
    ? portfolio
    : portfolio.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#121110] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C1B1A] border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>High-Fashion Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF8F5] mb-4">
            The Editorial Portfolio
          </h2>
          <p className="text-sm md:text-base text-[#FAF8F5]/60 font-light">
            Explore curated bridal transformations, evening glam, and high-definition campaign artistry.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-[#121110] shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                  : 'bg-[#1C1B1A] text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-[#2A2826] border border-[#FAF8F5]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredPortfolio.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveLightboxItem(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[3/4] bg-[#1C1B1A] border border-[#FAF8F5]/10 hover:border-[#D4AF37]/50 shadow-xl"
              >
                {/* Portfolio Image */}
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                />

                {/* Ambient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="bg-[#121110]/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/30">
                    {item.category}
                  </span>

                  {item.beforeImageUrl && (
                    <span className="bg-[#D4AF37] text-[#121110] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                      <Sliders className="w-3 h-3" /> Before/After
                    </span>
                  )}
                  {item.isFeatured && !item.beforeImageUrl && (
                    <span className="bg-[#121110]/80 backdrop-blur-md text-[#FAF8F5] px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-[#FAF8F5]/20">
                      <Star className="w-3 h-3 text-[#D4AF37] fill-[#D4AF37]" /> Featured
                    </span>
                  )}
                </div>

                {/* Bottom Content Info */}
                <div className="absolute bottom-6 left-6 right-6 space-y-1 transform group-hover:-translate-y-1 transition-transform">
                  <h3 className="font-serif text-lg font-bold text-[#FAF8F5] group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  {item.clientName && (
                    <p className="text-xs text-[#C5A880] font-light">
                      Client: {item.clientName}
                    </p>
                  )}
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#FAF8F5]/70 font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Click to view look details</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <Lightbox
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
          onBook={() => openBookingModal()}
        />

      </div>
    </section>
  );
};
