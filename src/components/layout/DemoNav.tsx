'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMua } from '../../context/MuaContext';
import { Sparkles, LayoutDashboard, Search, Crown, CheckCircle2, RotateCcw, ShoppingBag } from 'lucide-react';

export const DemoNav: React.FC = () => {
  const pathname = usePathname();
  const { activeDemoPackage, setActiveDemoPackage, activeBookingRef, resetAllData } = useMua();

  return (
    <div className="sticky top-0 z-50 bg-[#1F1A17] border-b border-[#C5A880]/30 px-4 py-2.5 text-xs text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Presentation Mode Badge */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#C5A880]/20 border border-[#C5A880]/40 text-[#C5A880] font-semibold text-[11px] tracking-wider uppercase">
            <Sparkles className="w-3 h-3" /> Live US Product Demo
          </span>
          <span className="hidden sm:inline text-[#FAF8F5]/60 text-[11px]">
            Aura Beauty &amp; Lip Studio
          </span>
        </div>

        {/* Center: View Switcher Tabs */}
        <div className="flex items-center gap-1 sm:gap-2 bg-[#2B231F] p-1 rounded-lg border border-[#FAF8F5]/10">
          <Link
            href="/"
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
              pathname === '/'
                ? 'bg-[#C5A880] text-[#1F1A17] font-semibold shadow'
                : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-[#FAF8F5]/5'
            }`}
          >
            <Crown className="w-3.5 h-3.5" />
            <span>Brand Website</span>
          </Link>

          <Link
            href="/shop"
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
              pathname.startsWith('/shop')
                ? 'bg-[#C5A880] text-[#1F1A17] font-semibold shadow'
                : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-[#FAF8F5]/5'
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Lip Shop</span>
          </Link>

          <Link
            href={`/status?ref=${activeBookingRef || 'BBPRO-8402'}`}
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
              pathname.startsWith('/status')
                ? 'bg-[#C5A880] text-[#1F1A17] font-semibold shadow'
                : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-[#FAF8F5]/5'
            }`}
          >
            <Search className="w-3.5 h-3.5" />
            <span>Status Tracker</span>
          </Link>

          <Link
            href="/dashboard"
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 ${
              pathname.startsWith('/dashboard')
                ? 'bg-[#C5A880] text-[#1F1A17] font-semibold shadow'
                : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-[#FAF8F5]/5'
            }`}
          >
            <LayoutDashboard className="w-3.5 h-3.5" />
            <span>MUA Dashboard</span>
          </Link>

          <Link
            href="/pricing"
            className={`px-3 py-1 rounded-md transition-all font-medium flex items-center gap-1.5 hidden md:flex ${
              pathname.startsWith('/pricing')
                ? 'bg-[#C5A880] text-[#1F1A17] font-semibold shadow'
                : 'text-[#FAF8F5]/70 hover:text-[#FAF8F5] hover:bg-[#FAF8F5]/5'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>$300 vs $500 Showcase</span>
          </Link>
        </div>

        {/* Right: Package Simulation Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden lg:flex items-center gap-1 bg-[#2B231F] px-2 py-1 rounded-lg border border-[#FAF8F5]/10 text-[11px]">
            <span className="text-[#FAF8F5]/50 mr-1">Package Mode:</span>
            <button
              onClick={() => setActiveDemoPackage('ESSENTIAL')}
              className={`px-2 py-0.5 rounded font-medium transition ${
                activeDemoPackage === 'ESSENTIAL'
                  ? 'bg-[#FAF8F5]/20 text-white font-bold'
                  : 'text-[#FAF8F5]/50 hover:text-white'
              }`}
            >
              $300 Essential
            </button>
            <button
              onClick={() => setActiveDemoPackage('SIGNATURE')}
              className={`px-2 py-0.5 rounded font-medium transition flex items-center gap-1 ${
                activeDemoPackage === 'SIGNATURE'
                  ? 'bg-[#C5A880] text-[#1F1A17] font-bold'
                  : 'text-[#FAF8F5]/50 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-3 h-3" />
              $500 Signature
            </button>
          </div>

          <button
            onClick={resetAllData}
            title="Reset to initial state"
            className="p-1.5 text-[#FAF8F5]/50 hover:text-[#C5A880] transition hover:bg-[#FAF8F5]/5 rounded-md"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
