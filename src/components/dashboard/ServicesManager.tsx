'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useMua } from '../../context/MuaContext';
import { ServiceCategory } from '../../types';
import { Plus, Trash2, Edit3, Lock, Crown } from 'lucide-react';

export const ServicesManager: React.FC = () => {
  const { services, addService, deleteService, activeDemoPackage, setActiveDemoPackage } = useMua();

  const isSignature = activeDemoPackage === 'SIGNATURE';
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<ServiceCategory>('Bridal');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<string>('250');
  const [duration, setDuration] = useState<string>('2 Hours');
  const [imageUrl] = useState<string>('https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop');

  const handleSimulatedAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignature && title.trim()) {
      addService({
        title,
        category,
        description: description || 'Bespoke glam tailored for camera longevity and natural radiance.',
        price: parseFloat(price) || 200,
        duration,
        imageUrl,
        isPopular: false,
        features: ['Skin analysis & prep massage', 'Individual lashes', 'Camera-ready longevity']
      });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="space-y-8 text-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
            Services &amp; Pricing Management
          </h2>
          <p className="text-xs text-[#FAF8F5]/60">
            {isSignature
              ? 'Edit makeup service packages, update pricing, and adjust duration details.'
              : 'Basic ₦350k Mode: Agency team updates prices & package details via code for you.'}
          </p>
        </div>

        <span className="text-xs bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 px-3.5 py-1.5 rounded-full font-mono font-bold">
          {services.length} Active Packages
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Current Services List */}
        <div className="lg:col-span-8 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
            Current Makeup Packages ({services.length})
          </h3>

          <div className="space-y-4">
            {services.map((srv) => (
              <div
                key={srv.id}
                className="bg-[#1C1B1A] p-5 rounded-2xl border border-[#FAF8F5]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#C5A880]">
                    <Image src={srv.imageUrl} alt={srv.title} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono font-bold bg-[#C5A880]/20 text-[#C5A880] px-2 py-0.5 rounded">
                        {srv.category}
                      </span>
                      <span className="text-xs text-[#FAF8F5]/60 font-mono">({srv.duration})</span>
                    </div>
                    <h4 className="font-serif font-bold text-base text-[#FAF8F5] mt-1">{srv.title}</h4>
                    <p className="text-xs text-[#FAF8F5]/70 line-clamp-1">{srv.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-[#FAF8F5]/10">
                  <span className="font-mono text-lg font-bold text-[#C5A880]">
                    ${srv.price.toFixed(2)} USD
                  </span>

                  {isSignature ? (
                    <button
                      onClick={() => deleteService(srv.id)}
                      className="p-2 text-rose-400 hover:text-rose-300 rounded-lg hover:bg-rose-500/20"
                      title="Delete Service"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-[9px] text-[#FAF8F5]/40 font-mono">Code Managed</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Service Form or Lock Notice */}
        <div className="lg:col-span-4">
          {isSignature ? (
            <form onSubmit={handleSimulatedAddService} className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#C5A880]/30 space-y-4">
              <h4 className="font-serif font-bold text-base text-[#FAF8F5] flex items-center gap-2">
                <Edit3 className="w-4 h-4 text-[#C5A880]" />
                Add / Edit Service Package
              </h4>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                  Service Title
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Destination Bridal Glam"
                  className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#C5A880] outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#C5A880] outline-none"
                  >
                    <option value="Bridal">Bridal</option>
                    <option value="Soft Glam">Soft Glam</option>
                    <option value="Special Event">Special Event</option>
                    <option value="Editorial">Editorial</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    required
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#C5A880] outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder="e.g. 2 Hours"
                  className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#C5A880] outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#d8bb93] transition flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-4 h-4" /> Add Package
                </button>
              </div>
            </form>
          ) : (
            <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#C5A880]/30 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                <Lock className="w-6 h-6" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-base text-[#FAF8F5]">Package Price Editing Locked</h4>
                <p className="text-xs text-[#FAF8F5]/60 leading-relaxed">
                  In <strong>Basic ₦350k</strong>, our agency developer team updates your service descriptions and prices via code.
                  Self-serve price editing &amp; package creation are unlocked in the <strong>Pro ₦500k package</strong>.
                </p>
              </div>

              <button
                onClick={() => setActiveDemoPackage('SIGNATURE')}
                className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#d8bb93] transition flex items-center justify-center gap-1.5"
              >
                <Crown className="w-4 h-4" /> Unlock Pro ₦500k CMS
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
