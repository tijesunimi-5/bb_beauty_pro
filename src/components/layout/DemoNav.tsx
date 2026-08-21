'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMua } from '../../context/MuaContext';
import { Sparkles, LayoutDashboard, Search, Crown, CheckCircle2, RotateCcw, ShoppingBag, Zap } from 'lucide-react';

export const DemoNav: React.FC = () => {
  const pathname = usePathname();
  const { activeDemoPackage, setActiveDemoPackage, activeBookingRef, resetAllData } = useMua();

  return (
    <div className="sticky top-0 z-50 bg-[#1A0B11] border-b border-[#FF6B8B]/30 px-4 py-2.5 text-xs text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Presentation Mode Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#FF6B8B] to-[#E83E8C] text-white font-bold text-[11px] tracking-wider uppercase shadow-md">
            <Sparkles className="w-3 h-3" /> BB BEAUTY PRO DEMO
          </span>
          <span className="hidden sm:inline text-[#FAF8F5]/70 text-[11px] font-medium">
            Luxury Beauty &amp; Lip Studio Engine
          </span>
        </div>

        {/* Center: View Switcher Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 bg-[#2B101A] p-1 rounded-xl border border-[#FF6B8B]/20">
          <Link
            href="/"
            className={`px-3 py-1 rounded-lg transition-all font-semibold flex items-center gap-1.5 ${
              pathname === '/'
                ? 'bg-gradient-to-r from-[#FF6B8B] to-[#E83E8C] text-white shadow-md'
                : 'text-[#FAF8F5]/80 hover:text-white hover:bg-[#FAF8F5]/10'
            }`}
          >
            <span>$300 Essential Page</span>
          </Link>

          <Link
            href="/signature"
            className={`px-3 py-1 rounded-lg transition-all font-bold flex items-center gap-1.5 ${
              pathname.startsWith('/signature')
                ? 'bg-gradient-to-r from-[#D4AF37] via-[#FF6B8B] to-[#E83E8C] text-white shadow-lg'
                : 'text-[#D4AF37] hover:text-white hover:bg-[#D4AF37]/20 font-bold'
            }`}
          >
            <Zap className="w-3.5 h-3.5 fill-[#D4AF37]" />
            <span>$500 Signature Page</span>
          </Link>

          <Link
            href="/shop"
            className={`px-3 py-1 rounded-lg transition-all font-medium flex items-center gap-1.5 hidden sm:flex ${
              pathname.startsWith('/shop')
                ? 'bg-[#E83E8C] text-white font-bold shadow'
                : 'text-[#FAF8F5]/80 hover:text-white hover:bg-[#FAF8F5]/10'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Lip Shop</span>
          </Link>

          <Link
            href={`/status?ref=${activeBookingRef || 'BBPRO-8402'}`}
            className={`px-3 py-1 rounded-lg transition-all font-medium flex items-center gap-1.5 hidden md:flex ${
              pathname.startsWith('/status')
                ? 'bg-[#E83E8C] text-white font-bold shadow'
                : 'text-[#FAF8F5]/80 hover:text-white hover:bg-[#FAF8F5]/10'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Tracker</span>
          </Link>

          <Link
            href="/dashboard"
            className={`px-3 py-1 rounded-lg transition-all font-semibold flex items-center gap-1.5 ${
              pathname.startsWith('/dashboard')
                ? 'bg-[#D4AF37] text-[#121110] font-bold shadow'
                : 'text-[#D4AF37] hover:text-white hover:bg-[#D4AF37]/20'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>MUA Dashboard</span>
          </Link>

          <Link
            href="/pricing"
            className={`px-3 py-1 rounded-lg transition-all font-medium flex items-center gap-1.5 hidden lg:flex ${
              pathname.startsWith('/pricing')
                ? 'bg-[#E83E8C] text-white font-bold shadow'
                : 'text-[#FAF8F5]/80 hover:text-white hover:bg-[#FAF8F5]/10'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Compare Matrix</span>
          </Link>
        </div>

        {/* Right: Package Simulation Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={resetAllData}
            title="Reset to initial state"
            className="p-1.5 text-[#FAF8F5]/60 hover:text-[#FF6B8B] transition hover:bg-[#FAF8F5]/10 rounded-md"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
