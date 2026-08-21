'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { PortfolioCategory } from '../../types';
import { Plus, Trash2, Upload, Image as ImageIcon, Lock, Crown } from 'lucide-react';

export const PortfolioManager: React.FC = () => {
  const { portfolio, profile, addPortfolioItem, deletePortfolioItem, toggleFeaturedPortfolio, activeDemoPackage, setActiveDemoPackage } = useMua();
  
  const isSignature = activeDemoPackage === 'SIGNATURE';
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<PortfolioCategory>('Bridal');
  const [imageUrl] = useState<string>('https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=1000&auto=format&fit=crop');
  const [clientName, setClientName] = useState<string>('');

  const handleSimulatedAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignature && title.trim()) {
      addPortfolioItem({
        title,
        category,
        imageUrl,
        clientName: clientName || undefined,
        date: 'August 2026',
        isFeatured: false,
      });
      setTitle('');
      setClientName('');
    }
  };

  return (
    <div className="space-y-8 text-[#FAF8F5]">
      {/* Header with Quota Counter */}
      <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
            Portfolio Content CMS
          </h2>
          <p className="text-xs text-[#FAF8F5]/60">
            {isSignature
              ? 'Manage gallery looks, set featured images, and upload new campaign photography.'
              : 'Essential $300 Mode: Agency team adds images via code. Upgrade to Signature $500 to upload photos directly.'}
          </p>
        </div>

        {/* Quota Counter */}
        <div className="bg-[#121110] border border-[#C5A880]/40 px-5 py-3 rounded-2xl flex items-center gap-3">
          <ImageIcon className="w-5 h-5 text-[#C5A880]" />
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[#C5A880] font-semibold">Storage Capacity</p>
            <p className="font-mono text-sm font-bold text-[#FAF8F5]">
              Portfolio: {portfolio.length} / {profile.maxPortfolioUploads} images
            </p>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Gallery Items Grid (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
            Current Gallery Items ({portfolio.length})
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {portfolio.map((item) => (
              <div
                key={item.id}
                className="bg-[#1C1B1A] rounded-2xl overflow-hidden border border-[#FAF8F5]/10 p-3 space-y-3 relative group"
              >
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
                  <div className="absolute top-2 left-2 bg-[#121110]/80 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-[#C5A880] border border-[#C5A880]/30">
                    {item.category}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-serif font-bold text-xs text-[#FAF8F5] line-clamp-1">{item.title}</h4>
                    {item.clientName && <p className="text-[10px] text-[#C5A880]">Client: {item.clientName}</p>}
                  </div>

                  {isSignature ? (
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => deletePortfolioItem(item.id)}
                        className="p-1.5 text-rose-400 hover:text-rose-300 rounded-lg hover:bg-rose-500/20"
                        title="Delete look"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <span className="text-[9px] text-[#FAF8F5]/40 font-mono">Code Managed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upload Simulation Form or Lock Banner */}
        <div className="lg:col-span-4">
          {isSignature ? (
            <form onSubmit={handleSimulatedAdd} className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#C5A880]/30 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#FAF8F5] flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#C5A880]" />
                Upload New Look (Self-Serve CMS)
              </h4>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Riviera Bride Sophia"
                  className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#C5A880] outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                  Category Tag
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#C5A880] outline-none"
                >
                  <option value="Bridal">Bridal</option>
                  <option value="Soft Glam">Soft Glam</option>
                  <option value="Editorial">Editorial</option>
                  <option value="Special Event">Special Event</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                  Client Name (Optional)
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  placeholder="e.g. Sophia Miller"
                  className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#C5A880] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#d8bb93] transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Add Look to Portfolio
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#C5A880]/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#FAF8F5]">Self-Serve Photo Upload Locked</h4>
                <p className="text-xs text-[#FAF8F5]/60 leading-relaxed">
                  In <strong>Essential $300</strong>, our developer agency team updates your portfolio pictures via code.
                  Self-serve photo uploads, text editing, and delete tools are unlocked in the <strong>Signature $500 package</strong>.
                </p>
              </div>

              <button
                onClick={() => setActiveDemoPackage('SIGNATURE')}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#d8bb93] transition flex items-center justify-center gap-1.5"
              >
                <Crown className="w-4 h-4" /> Unlock Signature $500 CMS
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
