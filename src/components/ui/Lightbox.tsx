'use client';

import React from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { PortfolioItem } from '../../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { X, Calendar, User, Sparkles, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onBook: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose, onBook }) => {
  const { activeDemoPackage } = useMua();
  const isSignature = activeDemoPackage === 'SIGNATURE';

  if (!item) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#121110]/95 backdrop-blur-xl overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative max-w-4xl w-full bg-[#1C1B1A] border border-[#C5A880]/30 rounded-3xl overflow-hidden shadow-2xl my-auto text-[#FAF8F5]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#121110]/80 hover:bg-[#C5A880] text-[#FAF8F5] hover:text-[#121110] transition flex items-center justify-center border border-[#FAF8F5]/20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Visual Media Column */}
            <div className="md:col-span-7 bg-[#121110] p-4 sm:p-6 flex items-center justify-center">
              {item.beforeImageUrl && isSignature ? (
                <div className="w-full">
                  <p className="text-[11px] uppercase tracking-widest text-[#C5A880] font-semibold mb-3 text-center flex items-center justify-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Interactive Before &amp; After Transformation
                  </p>
                  <BeforeAfterSlider
                    beforeImage={item.beforeImageUrl}
                    afterImage={item.imageUrl}
                  />
                </div>
              ) : (
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[#FAF8F5]/10">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover object-center"
                  />

                  {item.beforeImageUrl && !isSignature && (
                    <div className="absolute bottom-3 left-3 right-3 bg-[#121110]/90 backdrop-blur-md p-2.5 rounded-xl border border-[#FAF8F5]/10 text-[11px] text-[#C5A880] flex items-center justify-center gap-1.5">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Before &amp; After Slider unlocked in Signature $500</span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Description & Action Column */}
            <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-[#121110] border border-[#C5A880]/30 text-[#C5A880] text-[10px] font-bold uppercase tracking-widest">
                  {item.category}
                </span>

                <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-[#FAF8F5]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                )}

                <div className="space-y-2 border-t border-[#FAF8F5]/10 pt-4 text-xs text-[#FAF8F5]/80 font-light">
                  {item.clientName && (
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-[#C5A880]" />
                      <span>Client: <strong className="text-[#FAF8F5]">{item.clientName}</strong></span>
                    </div>
                  )}
                  {item.date && (
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-[#C5A880]" />
                      <span>Date: <strong className="text-[#FAF8F5]">{item.date}</strong></span>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#FAF8F5]/10">
                <button
                  onClick={() => {
                    onClose();
                    onBook();
                  }}
                  className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#C5A880] to-[#8C6D53] hover:shadow-[0_0_20px_rgba(197,168,128,0.4)] transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Similar Look</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
