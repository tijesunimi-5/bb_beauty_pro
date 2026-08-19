'use client';

import React, { useState } from 'react';
import { useMua } from '../../context/MuaContext';
import { suggestedQuestionsPreset } from '../../data/mockData';
import {
  Sparkles,
  Plus,
  Trash2,
  ToggleLeft,
  ToggleRight,
  MoveUp,
  MoveDown,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';

export const QuestionsManager: React.FC = () => {
  const {
    bookingQuestions,
    addBookingQuestion,
    deleteBookingQuestion,
    toggleQuestionEnabled,
    reorderQuestions,
    addSuggestedPresetQuestion,
  } = useMua();

  const [questionText, setQuestionText] = useState<string>('');
  const [questionType, setQuestionType] = useState<'text' | 'textarea' | 'select' | 'radio'>('text');

  const handleAddCustomQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (questionText.trim()) {
      addBookingQuestion(questionText.trim(), questionType, undefined, false);
      setQuestionText('');
    }
  };

  return (
    <div className="space-y-8 text-[#FAF8F5]">
      {/* Header */}
      <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121110] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Signature Package Feature
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
            Custom Booking Questionnaire Builder
          </h2>
          <p className="text-xs text-[#FAF8F5]/60">
            Configure consultation questions that your clients answer during the multi-step booking process.
          </p>
        </div>
        <span className="font-mono text-xs text-[#D4AF37] px-3 py-1.5 rounded-xl bg-[#121110] border border-[#D4AF37]/30">
          {bookingQuestions.length} Questions Configured
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: Questions List & Reordering (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#FAF8F5] flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
            Active Client Questions
          </h3>

          <div className="space-y-3">
            {bookingQuestions.map((q, idx) => (
              <div
                key={q.id}
                className={`bg-[#1C1B1A] p-5 rounded-2xl border transition flex items-start justify-between gap-4 ${
                  q.enabled ? 'border-[#FAF8F5]/15' : 'border-rose-950/60 opacity-60'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex flex-col gap-1 text-[#FAF8F5]/40 mt-1">
                    <button
                      disabled={idx === 0}
                      onClick={() => reorderQuestions(idx, idx - 1)}
                      className="hover:text-[#D4AF37] disabled:opacity-20"
                    >
                      <MoveUp className="w-3.5 h-3.5" />
                    </button>
                    <button
                      disabled={idx === bookingQuestions.length - 1}
                      onClick={() => reorderQuestions(idx, idx + 1)}
                      className="hover:text-[#D4AF37] disabled:opacity-20"
                    >
                      <MoveDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#D4AF37] font-bold">Q{idx + 1}</span>
                      <p className="font-semibold text-xs text-[#FAF8F5]">{q.question}</p>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-[#C5A880]">
                      <span className="uppercase tracking-wider font-mono">Type: {q.type}</span>
                      {q.required && <span className="text-rose-400 font-bold">• Required</span>}
                      {q.isCustom && <span className="text-[#D4AF37]">• Custom Added</span>}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => toggleQuestionEnabled(q.id)}
                    className="p-1.5 text-[#C5A880] hover:text-[#D4AF37]"
                    title="Toggle enabled state"
                  >
                    {q.enabled ? (
                      <ToggleRight className="w-6 h-6 text-[#D4AF37]" />
                    ) : (
                      <ToggleLeft className="w-6 h-6 text-[#FAF8F5]/30" />
                    )}
                  </button>

                  <button
                    onClick={() => deleteBookingQuestion(q.id)}
                    className="p-1.5 text-rose-400 hover:text-rose-300"
                    title="Delete question"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Add Custom Question & Suggested Presets (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Add Custom Question Form */}
          <form onSubmit={handleAddCustomQuestion} className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#D4AF37]/30 space-y-4">
            <h4 className="font-serif font-bold text-base text-[#FAF8F5]">
              + Add Custom Question
            </h4>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                Question Text
              </label>
              <input
                type="text"
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                placeholder="e.g. Do you have a reference image?"
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-[#C5A880] mb-1">
                Field Response Type
              </label>
              <select
                value={questionType}
                onChange={(e) => setQuestionType(e.target.value as any)}
                className="w-full bg-[#121110] border border-[#FAF8F5]/15 rounded-xl px-4 py-2.5 text-xs text-[#FAF8F5] focus:border-[#D4AF37] outline-none"
              >
                <option value="text">Single Line Text</option>
                <option value="textarea">Multi-line Paragraph</option>
                <option value="select">Dropdown Select</option>
                <option value="radio">Radio Buttons</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#121110] bg-gradient-to-r from-[#D4AF37] to-[#C5A880] hover:shadow-lg transition flex items-center justify-center gap-1.5"
            >
              <Plus className="w-4 h-4" /> Add Question to Form
            </button>
          </form>

          {/* Suggested Preset Questions */}
          <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-3">
            <h4 className="font-serif font-bold text-xs uppercase tracking-widest text-[#D4AF37] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Suggested Presets
            </h4>

            <div className="space-y-2">
              {suggestedQuestionsPreset.map((preset, i) => (
                <button
                  key={i}
                  onClick={() => addSuggestedPresetQuestion(preset)}
                  className="w-full text-left p-2.5 rounded-xl bg-[#121110] hover:bg-[#D4AF37]/10 border border-[#FAF8F5]/5 hover:border-[#D4AF37]/30 transition text-xs text-[#FAF8F5]/80 flex items-center justify-between group"
                >
                  <span className="line-clamp-1">{preset}</span>
                  <Plus className="w-3.5 h-3.5 text-[#D4AF37] group-hover:scale-125 transition-transform shrink-0" />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
