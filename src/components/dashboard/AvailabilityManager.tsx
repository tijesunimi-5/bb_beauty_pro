'use client';

import React, { useState } from 'react';
import { useMua } from '../../context/MuaContext';
import { Calendar as CalendarIcon, Clock, Plus, Trash2, ShieldAlert, Check } from 'lucide-react';

export const AvailabilityManager: React.FC = () => {
  const { blockedDates, toggleBlockedDate, timeSlots, addTimeSlot, removeTimeSlot } = useMua();
  const [newDateInput, setNewDateInput] = useState<string>('');
  const [newSlotInput, setNewSlotInput] = useState<string>('');

  const handleAddBlockedDate = (e: React.FormEvent) => {
    e.preventDefault();
    if (newDateInput) {
      toggleBlockedDate(newDateInput);
      setNewDateInput('');
    }
  };

  const handleAddTimeSlot = (e: React.FormEvent) => {
    e.preventDefault();
    if (newSlotInput) {
      addTimeSlot(newSlotInput);
      setNewSlotInput('');
    }
  };

  return (
    <div className="space-y-8 text-[#FAF8F5]">
      
      {/* Header */}
      <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10">
        <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
          Calendar & Slot Availability Control
        </h2>
        <p className="text-xs text-[#FAF8F5]/60">
          Block dates when you are fully booked or traveling, and configure appointment daily time slots.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Blocked Dates Manager */}
        <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-4">
            <h3 className="font-serif text-lg font-bold text-[#FAF8F5] flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-[#D4AF37]" />
              Blocked / Unavailable Dates
            </h3>
            <span className="text-xs text-[#C5A880] font-mono">{blockedDates.length} Dates Blocked</span>
          </div>

          {/* Quick Add Form */}
          <form onSubmit={handleAddBlockedDate} className="flex gap-2">
            <input
              type="date"
              value={newDateInput}
              onChange={(e) => setNewDateInput(e.target.value)}
              className="flex-1 bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#D4AF37] hover:bg-[#E8D7D0] transition flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Block Date
            </button>
          </form>

          {/* Blocked Dates List */}
          <div className="space-y-2">
            {blockedDates.map((dateStr) => (
              <div
                key={dateStr}
                className="bg-[#121110] p-3.5 rounded-2xl border border-rose-500/30 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2 text-rose-300 font-mono">
                  <ShieldAlert className="w-4 h-4 text-rose-400" />
                  <span>{dateStr} (Fully Booked / Blocked)</span>
                </div>
                <button
                  onClick={() => toggleBlockedDate(dateStr)}
                  className="p-1.5 text-rose-400 hover:text-white hover:bg-rose-500/20 rounded-lg transition"
                  title="Unblock date"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Time Slots Manager */}
        <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-4">
            <h3 className="font-serif text-lg font-bold text-[#FAF8F5] flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D4AF37]" />
              Daily Appointment Time Slots
            </h3>
            <span className="text-xs text-[#C5A880] font-mono">{timeSlots.length} Slots</span>
          </div>

          {/* Add Slot Form */}
          <form onSubmit={handleAddTimeSlot} className="flex gap-2">
            <input
              type="text"
              value={newSlotInput}
              onChange={(e) => setNewSlotInput(e.target.value)}
              placeholder="e.g. 07:30 AM"
              className="flex-1 bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#D4AF37] hover:bg-[#E8D7D0] transition flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> Add Slot
            </button>
          </form>

          {/* Slots List */}
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((slot) => (
              <div
                key={slot}
                className="bg-[#121110] p-3.5 rounded-2xl border border-[#D4AF37]/30 flex items-center justify-between text-xs"
              >
                <span className="font-semibold text-[#FAF8F5] flex items-center gap-1.5">
                  <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> {slot}
                </span>
                <button
                  onClick={() => removeTimeSlot(slot)}
                  className="p-1 text-[#FAF8F5]/50 hover:text-rose-400 transition"
                  title="Remove slot"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
