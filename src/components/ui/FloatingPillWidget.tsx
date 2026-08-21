'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMua } from '../../context/MuaContext';
import { Sparkles, Zap, ArrowRight, X, Crown, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingPillWidget: React.FC = () => {
  const pathname = usePathname();
  const { activeDemoPackage } = useMua();
  const [expanded, setExpanded] = useState(false);

  const isSignaturePage = pathname.startsWith('/signature');
  const isEssentialPage = pathname === '/';

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-3 bg-[#1A0B11]/95 text-white border border-[#FF6B8B]/40 rounded-2xl p-4 shadow-2xl backdrop-blur-xl w-64 space-y-3"
          >
            <div className="flex items-center justify-between border-b border-[#FF6B8B]/20 pb-2">
              <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#FF6B8B]" /> BB BEAUTY PRO
              </span>
              <button
                onClick={() => setExpanded(false)}
                className="text-white/60 hover:text-white p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2 text-xs">
              <Link
                href="/"
                onClick={() => setExpanded(false)}
                className={`w-full px-3 py-2 rounded-xl border flex items-center justify-between transition ${
                  isEssentialPage
                    ? 'bg-[#FF6B8B] text-white border-[#FF6B8B] font-bold'
                    : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                }`}
              >
                <span>$300 Essential View</span>
                {isEssentialPage && <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded uppercase">Active</span>}
              </Link>

              <Link
                href="/signature"
                onClick={() => setExpanded(false)}
                className={`w-full px-3 py-2 rounded-xl border flex items-center justify-between transition ${
                  isSignaturePage
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#FF6B8B] text-white border-[#D4AF37] font-bold'
                    : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
                }`}
              >
                <span className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-[#D4AF37]" /> $500 Signature View
                </span>
                {isSignaturePage && <span className="text-[9px] bg-white/20 px-1.5 py-0.5 rounded uppercase">Active</span>}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Small Floating Pill Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="px-4 py-2 rounded-full bg-[#1A0B11]/90 hover:bg-[#1A0B11] text-white border border-[#FF6B8B]/40 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 flex items-center gap-2 text-xs font-bold"
      >
        <span className="w-2 h-2 rounded-full bg-[#FF6B8B] animate-pulse" />
        <span className="text-[11px] tracking-wide">
          BB BEAUTY PRO • {isSignaturePage ? 'Signature View' : 'Essential View'}
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
      </button>
    </div>
  );
};
