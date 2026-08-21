'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Image as ImageIcon, ShoppingBag, CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyUpgradeSection: React.FC = () => {
  const transformations = [
    {
      icon: MessageSquare,
      title: 'Client Inquiry Intake',
      before: 'Clients message you asking basic questions over DMs, back-and-forth.',
      after: 'Your website collects event date, location, faces, style, & inspiration before you speak.',
    },
    {
      icon: ImageIcon,
      title: 'Portfolio & Credibility',
      before: 'You send photos of your work manually or rely on Instagram feed algorithms.',
      after: 'Your high-fashion editorial gallery & Before/After slider is always one link away in bio.',
    },
    {
      icon: ShoppingBag,
      title: 'Product E-Commerce Sales',
      before: 'Customers discover your lip gloss products on social media but have nowhere to checkout.',
      after: 'Visitors explore shade swatches, add items to their bag, and purchase directly from your brand.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFF9F9] text-[#221217] relative overflow-hidden border-t border-[#FF6B8B]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF0F3] border border-[#FF6B8B]/30 text-[#E83E8C] text-xs font-bold uppercase tracking-[0.2em]">
            <span>Digital Transformation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#221217]">
            More than a website. A better way to run your beauty business online.
          </h2>

          <p className="text-xs sm:text-sm text-[#523B44] font-medium leading-relaxed">
            See how upgrading to a Pro ₦500k Digital System changes your daily client interactions and revenue streams compared to Basic ₦350k.
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#FFF0F3] rounded-3xl p-8 border border-[#FF6B8B]/30 shadow-lg space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-[#FF6B8B]/30 flex items-center justify-center text-[#E83E8C] shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#221217]">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* BEFORE Box */}
                  <div className="bg-white p-4 rounded-2xl border border-rose-300 space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 text-rose-700 font-bold uppercase tracking-wider text-[10px]">
                      <XCircle className="w-3.5 h-3.5" /> Before (Manual Process)
                    </div>
                    <p className="text-[#523B44] font-medium italic leading-relaxed">
                      &quot;{item.before}&quot;
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="text-center">
                    <ArrowRight className="w-4 h-4 text-[#E83E8C] mx-auto rotate-90" />
                  </div>

                  {/* AFTER Box */}
                  <div className="bg-[#7E0027] text-white p-4 rounded-2xl border border-[#D4AF37] space-y-1 text-xs shadow-md">
                    <div className="flex items-center gap-1.5 text-[#D4AF37] font-bold uppercase tracking-wider text-[10px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> After (Pro ₦500k System)
                    </div>
                    <p className="text-white/90 font-medium leading-relaxed">
                      {item.after}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
