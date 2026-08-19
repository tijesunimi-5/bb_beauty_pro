'use client';

import React, { useState } from 'react';
import { Sparkles, Check, Crown, ArrowRight, Calendar, ShoppingBag, Palette, ShieldCheck, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type FeatureCat = 'BRAND' | 'BOOKING' | 'PORTFOLIO' | 'SHOP' | 'CUSTOMIZATION' | 'SUPPORT';

export const FeatureUnlock: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<FeatureCat>('BOOKING');

  const categories: { id: FeatureCat; label: string; icon: any }[] = [
    { id: 'BOOKING', label: 'Booking System', icon: Calendar },
    { id: 'SHOP', label: 'E-Commerce Shop', icon: ShoppingBag },
    { id: 'PORTFOLIO', label: 'Portfolio Gallery', icon: Palette },
    { id: 'BRAND', label: 'Brand & Layout', icon: Sparkles },
    { id: 'CUSTOMIZATION', label: 'Questionnaire Builder', icon: HelpCircle },
    { id: 'SUPPORT', label: 'Support & Domain', icon: ShieldCheck },
  ];

  const contentMap: Record<FeatureCat, { essential: string[]; signature: string[]; highlight: string }> = {
    BOOKING: {
      essential: [
        'Standard booking inquiry request form',
        'Collects client name, email, and preferred service',
        'Direct email or manual message delivery',
      ],
      signature: [
        'Interactive multi-step appointment calendar engine',
        'Date block management & custom daily time slots (10 AM, 12 PM, 2 PM)',
        'Event location, number of faces, & look preferences',
        'Inspiration image upload attachment UI',
        'Unique request reference tracking (#AURA-8402)',
      ],
      highlight: 'Eliminates 90% of back-and-forth DM questions before speaking to clients.',
    },
    SHOP: {
      essential: [
        'Static product showcase section on homepage',
        'Product shade color previews',
        'External link to social DM or third-party page',
      ],
      signature: [
        'Full Lip Collection e-commerce shop page',
        'Interactive shade pill selector with instant preview',
        'Slide-out Shopping Bag drawer with quantity controls',
        'Free US shipping progress calculator',
        'Express Checkout preview modal (Apple Pay & Credit Card UI)',
      ],
      highlight: 'Converts audience interest into immediate product orders.',
    },
    PORTFOLIO: {
      essential: [
        'Professional image gallery grid',
        'High-resolution imagery presentation',
        'Category filters (Bridal, Soft Glam, Editorial)',
      ],
      signature: [
        'Advanced editorial masonry portfolio',
        'Interactive Before & After transformation slider',
        'Fullscreen Lightbox viewer with client details & event dates',
        'Featured work badges & direct "Book Similar Look" triggers',
      ],
      highlight: 'Builds instant high-end trust for destination brides & VIP clients.',
    },
    BRAND: {
      essential: [
        'Custom luxury editorial visual identity',
        'Warm ivory background palette & refined typography',
        'Mobile responsive design',
      ],
      signature: [
        'Subtle luxury motion & page transitions',
        'Sticky blur navigation header with quick Shopping Bag badge',
        'Elevated editorial micro-interactions & toast notifications',
        'Coherent brand system uniting services & lip products',
      ],
      highlight: 'Makes your business look like an established, worth-paying-for American beauty brand.',
    },
    CUSTOMIZATION: {
      essential: [
        'Fixed contact form fields',
      ],
      signature: [
        'Interactive Question Builder in MUA Dashboard',
        'Add custom questions (single text, paragraph, dropdown, radio buttons)',
        'Click-to-add suggested question presets',
        'Reorder, enable, or disable questions anytime',
      ],
      highlight: 'Tailor client intake questions without calling a developer.',
    },
    SUPPORT: {
      essential: [
        'Custom domain setup support (yourbrand.com)',
        'Deployment on high-speed global CDN',
      ],
      signature: [
        'Everything in Essential plus:',
        'Management-ready architecture separated from UI components',
        'Complete client business dashboard for appointment & product tracking',
        'Priority technical support & backend readiness',
      ],
      highlight: 'Built as a complete digital business foundation ready to scale.',
    },
  };

  const current = contentMap[activeCategory];

  return (
    <div className="bg-[#F5F0EB] border border-[#EFE8DF] rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl">
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h3 className="font-serif text-2xl font-bold text-[#1F1A17]">
          Interactive Feature Unlock Matrix
        </h3>
        <p className="text-xs text-[#6B5B52]">
          Select a business capability below to compare $300 Essential vs $500 Signature functionality.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-[#1F1A17] text-[#FAF8F5] shadow-lg'
                  : 'bg-[#FAF8F5] text-[#6B5B52] hover:text-[#1F1A17] hover:bg-white border border-[#EFE8DF]'
              }`}
            >
              <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-[#C5A880]' : 'text-[#8C6D53]'}`} />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Matrix */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2"
        >
          {/* Essential Column */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#EFE8DF] space-y-4">
            <div className="flex items-center justify-between border-b border-[#EFE8DF] pb-3">
              <span className="text-xs uppercase tracking-wider text-[#8C6D53] font-bold">
                ESSENTIAL — $300
              </span>
              <span className="text-[10px] text-[#6B5B52] bg-[#F5F0EB] px-2 py-0.5 rounded font-mono">
                Refined Foundation
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#6B5B52]">
              {current.essential.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#8C6D53] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Signature Column (Flagship) */}
          <div className="bg-gradient-to-b from-[#1F1A17] to-[#2B231F] text-[#FAF8F5] p-6 rounded-2xl border-2 border-[#C5A880] space-y-4 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-3">
              <span className="text-xs uppercase tracking-wider text-[#C5A880] font-bold flex items-center gap-1.5">
                <Crown className="w-4 h-4" /> SIGNATURE — $500
              </span>
              <span className="text-[10px] bg-[#C5A880] text-[#1F1A17] px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Flagship System
              </span>
            </div>

            <ul className="space-y-3 text-xs text-[#FAF8F5]/90">
              {current.signature.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 font-light">
                  <Check className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Highlight outcome banner */}
            <div className="pt-3 border-t border-[#FAF8F5]/10 text-[11px] text-[#C5A880] font-serif italic">
              ✦ {current.highlight}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
