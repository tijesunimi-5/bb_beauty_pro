'use client';

import React from 'react';
import { Sparkles, ArrowRight, MessageSquare, Image as ImageIcon, ShoppingBag, CheckCircle2, XCircle } from 'lucide-react';
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
    <section className="py-20 lg:py-28 bg-[#FAF8F5] text-[#1F1A17] relative overflow-hidden border-t border-[#EFE8DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5F0EB] border border-[#EFE8DF] text-[#8C6D53] text-xs font-semibold uppercase tracking-[0.2em]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Transformation</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1F1A17]">
            More than a website. A better way to run your beauty business online.
          </h2>

          <p className="text-xs sm:text-sm text-[#6B5B52] font-light leading-relaxed">
            See how upgrading to a Signature Digital System changes your daily client interactions and revenue streams.
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
                className="bg-[#F5F0EB] rounded-3xl p-8 border border-[#EFE8DF] shadow-lg space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EFE8DF] flex items-center justify-center text-[#8C6D53] shadow-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif font-bold text-xl text-[#1F1A17]">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* BEFORE Box */}
                  <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-rose-200/60 space-y-1 text-xs">
                    <div className="flex items-center gap-1.5 text-rose-700 font-bold uppercase tracking-wider text-[10px]">
                      <XCircle className="w-3.5 h-3.5" /> Before (Manual Process)
                    </div>
                    <p className="text-[#6B5B52] font-light italic leading-relaxed">
                      &quot;{item.before}&quot;
                    </p>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="text-center">
                    <ArrowRight className="w-4 h-4 text-[#C5A880] mx-auto rotate-90" />
                  </div>

                  {/* AFTER Box */}
                  <div className="bg-[#1F1A17] text-[#FAF8F5] p-4 rounded-2xl border border-[#C5A880]/50 space-y-1 text-xs shadow-md">
                    <div className="flex items-center gap-1.5 text-[#C5A880] font-bold uppercase tracking-wider text-[10px]">
                      <CheckCircle2 className="w-3.5 h-3.5" /> After (Signature System)
                    </div>
                    <p className="text-[#FAF8F5]/90 font-light leading-relaxed">
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
