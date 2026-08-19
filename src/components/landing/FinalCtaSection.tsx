'use client';

import React from 'react';
import { useMua } from '../../context/MuaContext';
import { Sparkles, Calendar, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const FinalCtaSection: React.FC = () => {
  const { profile, openBookingModal } = useMua();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-[#121110] via-[#1C1B1A] to-[#121110] text-[#FAF8F5] relative overflow-hidden text-center border-t border-[#D4AF37]/20">
      <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:32px_32px] opacity-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121110] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.25em]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Reserve Your Date</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] leading-tight">
          Ready for your next <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#E8D7D0]">unforgettable look?</span>
        </h2>

        <p className="text-sm md:text-base text-[#FAF8F5]/70 font-light max-w-xl mx-auto">
          &quot;Let&apos;s create something beautiful together. Secure your wedding date or celebration glam in less than 2 minutes.&quot;
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={() => openBookingModal()}
            className="w-full sm:w-auto px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#121110] bg-gradient-to-r from-[#D4AF37] via-[#E8D7D0] to-[#C5A880] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </button>

          <a
            href={`https://wa.me/${profile.whatsappPhone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-semibold uppercase tracking-[0.2em] text-[#FAF8F5] bg-[#121110] hover:bg-[#2A2826] border border-[#FAF8F5]/20 transition flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Consultation</span>
          </a>
        </div>

      </div>
    </section>
  );
};
