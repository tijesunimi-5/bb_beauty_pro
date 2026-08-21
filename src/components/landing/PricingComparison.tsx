'use client';

import React from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { FeatureUnlock } from '../ui/FeatureUnlock';
import { Check, Crown, ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export const PricingComparison: React.FC = () => {
  const { activeDemoPackage } = useMua();

  const basicFeatures = [
    'Custom Luxury Editorial Landing Page & Brand Identity',
    'Hero, Story, Services & Social Proof Sections',
    'Standard Appointment Inquiry Form',
    'Lip Gloss Collection Showcase & WhatsApp Checkout',
    'Mobile Responsive Design for iOS & Android',
    'Custom Domain Connection (yourbrand.com)',
    'Direct Instagram & Contact Links',
  ];

  const signatureFeatures = [
    'Everything included in Basic ₦350k, PLUS:',
    'Interactive 5-Step Appointment Calendar & Time Slots',
    'Customizable Client Intake Questionnaire Builder',
    'Full Lip Gloss E-Commerce Shop & Shade Selector',
    'Express Online Checkout UI & Payment Receipts',
    'Client Request Reference Tracker (#BBPRO-8402)',
    'Inspiration Image Upload & Event Location Intake',
    'Professional Self-Serve Artist CMS & Dashboard',
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FFF9F9] text-[#221217] relative overflow-hidden border-t border-[#FF6B8B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF6B8B]/20 border border-[#FF6B8B]/30 text-[#E83E8C] text-xs font-bold uppercase tracking-[0.2em] shadow-sm">
            <Crown className="w-3.5 h-3.5" />
            <span>Digital Business Packages</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#221217]">
            Choose the package that fits your business.
          </h2>

          <p className="text-xs sm:text-sm text-[#523B44] font-medium leading-relaxed">
            Position your brand as an established beauty entrepreneur with a complete digital presence designed to build immediate client trust, eliminate manual back-and-forth, and convert attention into bookings and sales.
          </p>

          {/* Top Interactive Segmented Package Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-[#FFF0F3] p-1.5 rounded-full border-2 border-[#FF6B8B]/30 shadow-md flex items-center gap-2">
              <Link
                href="/"
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeDemoPackage === 'ESSENTIAL'
                    ? 'bg-[#7E0027] text-white shadow-lg'
                    : 'text-[#523B44] hover:text-[#7E0027]'
                }`}
              >
                BASIC — ₦350K PAGE
              </Link>

              <Link
                href="/signature"
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeDemoPackage === 'SIGNATURE'
                    ? 'bg-gradient-to-r from-[#FF6B8B] via-[#E83E8C] to-[#D4AF37] text-white shadow-lg font-extrabold'
                    : 'text-[#523B44] hover:text-[#7E0027]'
                }`}
              >
                <Crown className="w-3.5 h-3.5" />
                PRO — ₦500K PAGE
              </Link>
            </div>
          </div>
        </div>

        {/* Side-by-Side Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* BASIC — ₦350k */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-5 rounded-3xl p-8 bg-white border-2 transition-all duration-300 flex flex-col justify-between shadow-xl ${
              activeDemoPackage === 'ESSENTIAL'
                ? 'border-[#7E0027] ring-4 ring-[#7E0027]/10'
                : 'border-[#FF6B8B]/30 hover:border-[#E83E8C]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E83E8C]">
                  Refined Digital Home
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#FFF0F3] text-[#7E0027] font-mono font-extrabold border border-[#FF6B8B]/30">
                  ₦350,000
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#221217] mb-2">
                Basic Package
              </h3>

              <p className="text-xs text-[#523B44] font-medium leading-relaxed mb-6 italic">
                &quot;Beautiful. Professional. Focused.&quot; — A refined online presence for beauty artists needing an established digital home.
              </p>

              <div className="py-4 border-y border-[#FF6B8B]/20 mb-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#221217] mb-3">
                  Included Capabilities:
                </p>
                <ul className="space-y-3">
                  {basicFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#523B44] font-medium">
                      <Check className="w-4 h-4 text-[#E83E8C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/"
              className="w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#7E0027] bg-[#FFF0F3] hover:bg-[#FFE4E8] border border-[#FF6B8B]/30 transition flex items-center justify-center gap-2"
            >
              <span>View Basic (₦350k) Page</span>
            </Link>
          </motion.div>

          {/* PRO — ₦500k (RECOMMENDED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#7E0027] via-[#9B111E] to-[#59001B] text-white border-2 transition-all duration-300 relative shadow-2xl flex flex-col justify-between ${
              activeDemoPackage === 'SIGNATURE'
                ? 'border-[#D4AF37] shadow-[0_0_40px_rgba(255,107,139,0.4)] ring-4 ring-[#D4AF37]/20'
                : 'border-[#FF6B8B]/50 hover:border-[#D4AF37]'
            }`}
          >
            {/* Recommended Flagship Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] via-[#FFF9F9] to-[#D4AF37] text-[#121110] text-[10px] font-extrabold uppercase tracking-[0.25em] px-5 py-1.5 rounded-full shadow-xl flex items-center gap-1.5">
              <Zap className="w-3 h-3 fill-[#121110]" /> Recommended • Flagship Business System
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  Complete Digital Business System
                </span>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-[#D4AF37]">₦500k</span>
                  <span className="text-[10px] text-white/70 block uppercase font-mono font-bold">₦500,000</span>
                </div>
              </div>

              <h3 className="font-serif text-3xl font-bold text-white mb-2 flex items-center gap-2">
                Pro Package
              </h3>

              <p className="text-xs text-white/90 font-medium leading-relaxed mb-6 italic">
                &quot;Complete. Elevated. Built to convert.&quot; — A complete digital experience designed to convert attention into bookings and e-commerce product sales.
              </p>

              <div className="py-4 border-y border-[#FF6B8B]/30 mb-6 bg-[#30000E]/50 p-4 rounded-2xl">
                <p className="text-xs font-bold uppercase tracking-wider text-[#D4AF37] mb-3 flex items-center gap-1.5">
                  Pro Capabilities Included:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {signatureFeatures.map((feat, i) => (
                    <div key={i} className={`flex items-start gap-2 text-xs font-medium ${i === 0 ? 'sm:col-span-2 text-[#D4AF37] font-bold' : 'text-white/90'}`}>
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link
                href="/signature"
                className="w-full sm:flex-1 py-4 rounded-full text-xs font-extrabold uppercase tracking-[0.2em] text-[#121110] bg-gradient-to-r from-[#D4AF37] via-[#FFF9F9] to-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] transition flex items-center justify-center gap-2 shadow-xl"
              >
                <Crown className="w-4 h-4" />
                <span>View Pro (₦500k) Page</span>
              </Link>

              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-[#30000E] hover:bg-[#4A0016] border border-[#D4AF37]/40 transition flex items-center justify-center gap-2 group"
              >
                <span>View Dashboard</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Feature Category Unlock Matrix Component */}
        <FeatureUnlock />

        {/* Clean Side-by-Side Comparison Table */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#FF6B8B]/20 shadow-xl space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#221217] text-center">
            Package Capabilities Comparison Matrix
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-[#221217]">
              <thead>
                <tr className="border-b border-[#FF6B8B]/20 uppercase tracking-wider text-[10px] text-[#E83E8C] font-bold">
                  <th className="text-left py-3 px-4">Digital Capability</th>
                  <th className="text-center py-3 px-4">Basic (₦350k)</th>
                  <th className="text-center py-3 px-4 text-[#7E0027] font-extrabold">Pro (₦500k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#FF6B8B]/10">
                <tr>
                  <td className="py-3 px-4 font-semibold">Custom Luxury Editorial Site</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Makeup Services &amp; Portfolio</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Basic Booking Inquiry Form</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Multi-Step Calendar &amp; Time Slots</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Lip Gloss Product Collection Showcase</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Shopping Bag &amp; WhatsApp Checkout</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓ (WhatsApp Link)</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓ (Online Payment Modal)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Custom Questionnaire Builder</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Before &amp; After Portfolio Lightbox</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Artist Management Dashboard</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓ (Requests &amp; Orders)</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓ (Full CMS Control)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
