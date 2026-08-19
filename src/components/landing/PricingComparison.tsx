'use client';

import React from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { FeatureUnlock } from '../ui/FeatureUnlock';
import { Sparkles, Check, Crown, ArrowRight, Shield, Zap, ShoppingBag, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PricingComparison: React.FC = () => {
  const { activeDemoPackage, setActiveDemoPackage, openBookingModal } = useMua();

  const basicFeatures = [
    'Custom Luxury Editorial Landing Page & Brand Identity',
    'Hero, Story, Services & Social Proof Sections',
    'Standard Booking Request Form',
    'Lip Gloss Collection Showcase Preview',
    'Mobile Responsive Design for iOS & Android',
    'Custom Domain Connection (yourbrand.com)',
    'Direct Instagram & Contact Links',
  ];

  const signatureFeatures = [
    'Everything included in Essential $300, PLUS:',
    'Interactive 5-Step Appointment Calendar & Time Slots',
    'Customizable Client Intake Questionnaire Builder',
    'Full Lip Gloss E-Commerce Shop & Shade Selector',
    'Interactive Shopping Bag Drawer & Express Checkout UI',
    'Client Request Reference Tracker (#AURA-8402)',
    'Inspiration Image Upload & Event Location Intake',
    'Professional Artist Management Dashboard',
    'Business & E-Commerce Traffic Analytics Suite',
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1F1A17] relative overflow-hidden border-t border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
            <Crown className="w-3.5 h-3.5" />
            <span>Digital Business Packages</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1A17]">
            Choose the experience that fits your business.
          </h2>

          <p className="text-xs sm:text-sm text-[#6B5B52] font-light leading-relaxed">
            Position your brand as an established American beauty entrepreneur with a complete digital presence designed to build immediate client trust, eliminate manual back-and-forth, and convert attention into bookings and sales.
          </p>

          {/* Top Interactive Segmented Package Toggle */}
          <div className="pt-4 flex items-center justify-center">
            <div className="bg-[#F5F0EB] p-1.5 rounded-full border border-[#EFE8DF] shadow-md flex items-center gap-2">
              <button
                onClick={() => setActiveDemoPackage('ESSENTIAL')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeDemoPackage === 'ESSENTIAL'
                    ? 'bg-[#1F1A17] text-[#FAF8F5] shadow-lg'
                    : 'text-[#6B5B52] hover:text-[#1F1A17]'
                }`}
              >
                ESSENTIAL — $300
              </button>

              <button
                onClick={() => setActiveDemoPackage('SIGNATURE')}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
                  activeDemoPackage === 'SIGNATURE'
                    ? 'bg-gradient-to-r from-[#C5A880] to-[#8C6D53] text-[#FAF8F5] shadow-lg font-extrabold'
                    : 'text-[#6B5B52] hover:text-[#1F1A17]'
                }`}
              >
                <Crown className="w-3.5 h-3.5" />
                SIGNATURE — $500
              </button>
            </div>
          </div>
        </div>

        {/* Live Interactive Package Preview Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemoPackage}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="bg-[#F5F0EB] border-2 border-[#C5A880]/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#EFE8DF] pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#8C6D53] font-bold">
                  Interactive Preview Experience
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#1F1A17]">
                  {activeDemoPackage === 'ESSENTIAL' ? 'Essential $300 Digital Home' : 'Signature $500 Complete Business Experience'}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-2xl font-bold text-[#1F1A17]">
                  ${activeDemoPackage === 'ESSENTIAL' ? '300' : '500'} USD
                </span>
                <span className="text-xs px-3 py-1 rounded-full bg-[#1F1A17] text-[#FAF8F5] font-semibold uppercase">
                  {activeDemoPackage === 'ESSENTIAL' ? 'Core Package' : 'Flagship System'}
                </span>
              </div>
            </div>

            {/* Unlocked Capabilities Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EFE8DF]">
                <span className="font-bold text-[#1F1A17] block mb-1">Brand Presence</span>
                <p className="text-[#6B5B52]">Custom editorial homepage, about story, services & portfolio gallery.</p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EFE8DF]">
                <span className="font-bold text-[#1F1A17] block mb-1">Booking Experience</span>
                <p className="text-[#6B5B52]">
                  {activeDemoPackage === 'ESSENTIAL'
                    ? 'Standard booking request form.'
                    : '⚡ Unlocked: Multi-step calendar picker, time slots & inspiration upload.'}
                </p>
              </div>

              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-[#EFE8DF]">
                <span className="font-bold text-[#1F1A17] block mb-1">Product Commerce</span>
                <p className="text-[#6B5B52]">
                  {activeDemoPackage === 'ESSENTIAL'
                    ? 'Static lip gloss collection showcase preview.'
                    : '⚡ Unlocked: Full shop, shade selectors, cart drawer & checkout modal.'}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Side-by-Side Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* ESSENTIAL — $300 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`lg:col-span-5 rounded-3xl p-8 bg-[#FAF8F5] border transition-all duration-300 flex flex-col justify-between ${
              activeDemoPackage === 'ESSENTIAL'
                ? 'border-[#1F1A17] shadow-2xl ring-2 ring-[#1F1A17]/20'
                : 'border-[#EFE8DF] hover:border-[#C5A880]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C6D53]">
                  Refined Digital Home
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-[#F5F0EB] text-[#1F1A17] font-mono font-bold">
                  $300 USD
                </span>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#1F1A17] mb-2">
                Essential
              </h3>

              <p className="text-xs text-[#6B5B52] font-light leading-relaxed mb-6 italic">
                &quot;Beautiful. Professional. Focused.&quot; — A refined online presence for beauty artists needing an established digital home.
              </p>

              <div className="py-4 border-y border-[#EFE8DF] mb-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1F1A17] mb-3">
                  Included Capabilities:
                </p>
                <ul className="space-y-3">
                  {basicFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#6B5B52] font-light">
                      <Check className="w-4 h-4 text-[#8C6D53] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button
              onClick={() => {
                setActiveDemoPackage('ESSENTIAL');
                openBookingModal();
              }}
              className="w-full py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#1F1A17] bg-[#F5F0EB] hover:bg-[#EFE8DF] border border-[#EFE8DF] transition flex items-center justify-center gap-2"
            >
              <span>Choose Essential ($300)</span>
            </button>
          </motion.div>

          {/* SIGNATURE — $500 (FLAGSHIP / RECOMMENDED) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className={`lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-gradient-to-b from-[#1F1A17] via-[#2B231F] to-[#1F1A17] text-[#FAF8F5] border-2 transition-all duration-300 relative shadow-2xl flex flex-col justify-between ${
              activeDemoPackage === 'SIGNATURE'
                ? 'border-[#C5A880] shadow-[0_0_40px_rgba(197,168,128,0.25)]'
                : 'border-[#C5A880]/50 hover:border-[#C5A880]'
            }`}
          >
            {/* Recommended Flagship Ribbon */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C5A880] via-[#FAF8F5] to-[#C5A880] text-[#1F1A17] text-[10px] font-extrabold uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-xl flex items-center gap-1.5">
              <Zap className="w-3 h-3 fill-[#1F1A17]" /> Recommended • Flagship Conversion System
            </div>

            <div>
              <div className="flex items-center justify-between mb-4 mt-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">
                  Complete Digital Business System
                </span>
                <div className="text-right">
                  <span className="font-serif text-3xl font-bold text-[#C5A880]">$500</span>
                  <span className="text-[10px] text-[#FAF8F5]/50 block uppercase font-mono">USD</span>
                </div>
              </div>

              <h3 className="font-serif text-3xl font-bold text-[#FAF8F5] mb-2 flex items-center gap-2">
                Signature System
              </h3>

              <p className="text-xs text-[#FAF8F5]/80 font-light leading-relaxed mb-6 italic">
                &quot;Complete. Elevated. Built to convert.&quot; — A complete digital experience designed to convert attention into bookings and e-commerce product sales.
              </p>

              <div className="py-4 border-y border-[#C5A880]/30 mb-6 bg-[#121110]/40 p-4 rounded-2xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#C5A880] mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Complete Signature Capabilities Included:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {signatureFeatures.map((feat, i) => (
                    <div key={i} className={`flex items-start gap-2 text-xs font-light ${i === 0 ? 'sm:col-span-2 text-[#C5A880] font-semibold' : 'text-[#FAF8F5]/90'}`}>
                      <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => {
                  setActiveDemoPackage('SIGNATURE');
                  openBookingModal();
                }}
                className="w-full sm:flex-1 py-4 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-[#1F1A17] bg-gradient-to-r from-[#C5A880] via-[#FAF8F5] to-[#C5A880] hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] transition flex items-center justify-center gap-2"
              >
                <Crown className="w-4 h-4" />
                <span>Choose Signature ($500)</span>
              </button>

              <Link
                href="/dashboard"
                className="w-full sm:w-auto px-6 py-4 rounded-full text-xs font-semibold uppercase tracking-wider text-[#FAF8F5] bg-[#121110] hover:bg-[#2B231F] border border-[#C5A880]/30 transition flex items-center justify-center gap-2 group"
              >
                <span>View Dashboard</span>
                <ArrowRight className="w-4 h-4 text-[#C5A880] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Feature Category Unlock Matrix Component */}
        <FeatureUnlock />

        {/* Clean Side-by-Side Comparison Table */}
        <div className="max-w-4xl mx-auto bg-[#F5F0EB] rounded-3xl p-6 sm:p-8 border border-[#EFE8DF] space-y-6">
          <h3 className="font-serif text-xl font-bold text-[#1F1A17] text-center">
            Package Capabilities Comparison Matrix
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-[#1F1A17]">
              <thead>
                <tr className="border-b border-[#EFE8DF] uppercase tracking-wider text-[10px] text-[#8C6D53]">
                  <th className="text-left py-3 px-4">Digital Capability</th>
                  <th className="text-center py-3 px-4">Essential ($300)</th>
                  <th className="text-center py-3 px-4 text-[#8C6D53] font-bold">Signature ($500)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EFE8DF]">
                <tr>
                  <td className="py-3 px-4 font-semibold">Custom Luxury Editorial Site</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Makeup Services & Portfolio</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Basic Booking Inquiry Form</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Multi-Step Calendar & Time Slots</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Lip Gloss Product Collection Showcase</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Shopping Cart Drawer & Checkout UI</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Custom Questionnaire Builder</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Before & After Portfolio Lightbox</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold">Artist Management Dashboard & Analytics</td>
                  <td className="text-center py-3 px-4 text-gray-400">—</td>
                  <td className="text-center py-3 px-4 text-emerald-600 font-bold">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
