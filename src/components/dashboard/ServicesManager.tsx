'use client';

import React, { useState } from 'react';
import { useMua } from '../../context/MuaContext';
import { ServiceItem } from '../../types';
import { Sparkles, Plus, Trash2, Edit2, Check } from 'lucide-react';

export const ServicesManager: React.FC = () => {
  const { services, updateService, addService, deleteService } = useMua();
  const [editingId, setEditingId] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState<number>(80000);
  const [duration, setDuration] = useState('1.5 Hours');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (title) {
      addService({
        title,
        category: 'Soft Glam',
        description: 'Bespoke makeup service crafted with luxury skincare prep.',
        price,
        duration,
        imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop',
        features: ['Skin prep & facial massage', 'Custom mink lashes', 'Long wear setting finish']
      });
      setTitle('');
    }
  };

  return (
    <div className="space-y-8 text-[#FAF8F5]">
      <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10">
        <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
          Services & Pricing Control
        </h2>
        <p className="text-xs text-[#FAF8F5]/60">
          Update service names, set starting price tiers, duration, and feature inclusions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Services List (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#1C1B1A] p-5 rounded-2xl border border-[#FAF8F5]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-serif font-bold text-base text-[#FAF8F5]">{srv.title}</h3>
                  <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#121110]">
                    {srv.category}
                  </span>
                </div>
                <p className="text-xs text-[#FAF8F5]/60">{srv.description}</p>
                <p className="text-[11px] text-[#C5A880]">Duration: {srv.duration}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-base font-bold text-[#D4AF37]">
                  ₦{srv.price.toLocaleString()}
                </span>

                <button
                  onClick={() => deleteService(srv.id)}
                  className="p-1.5 text-rose-400 hover:text-white"
                  title="Remove Service"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Add Service Form (4 cols) */}
        <div className="lg:col-span-4">
          <form onSubmit={handleAdd} className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#D4AF37]/30 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#FAF8F5]">
              + Add New Service
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
                placeholder="e.g. VIP Red Carpet Glam"
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                Price (₦)
              </label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              />
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
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#D4AF37] hover:bg-[#E8D7D0] transition flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Service Package
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
