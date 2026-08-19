'use client';

import React from 'react';
import { useMua } from '../../context/MuaContext';
import { TrendingUp, Eye, Sparkles, Award, ArrowUpRight, BarChart3 } from 'lucide-react';

export const AnalyticsView: React.FC = () => {
  const { analytics } = useMua();

  const maxViews = Math.max(...analytics.viewsHistory.map((v) => v.views));

  return (
    <div className="space-y-8 text-[#FAF8F5]">
      
      {/* Header */}
      <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 flex items-center justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5]">
            Business Traffic & Conversion Analytics
          </h2>
          <p className="text-xs text-[#FAF8F5]/60">
            Real-time analytics overview tracking profile discovery, traffic channels, and client conversion.
          </p>
        </div>
        <div className="flex items-center gap-1 text-xs text-emerald-400 font-semibold bg-[#121110] px-3 py-1.5 rounded-full border border-emerald-500/30">
          <ArrowUpRight className="w-4 h-4" /> +24% Traffic Growth
        </div>
      </div>

      {/* Top Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-2">
          <div className="flex items-center justify-between text-[#C5A880]">
            <span className="text-xs uppercase tracking-wider font-semibold">Total Profile Views</span>
            <Eye className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-serif text-3xl font-bold text-[#FAF8F5]">{analytics.profileViews}</p>
          <span className="text-[11px] text-[#FAF8F5]/50">Unique client visits</span>
        </div>

        <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-2">
          <div className="flex items-center justify-between text-[#C5A880]">
            <span className="text-xs uppercase tracking-wider font-semibold">Booking Inquiries</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-serif text-3xl font-bold text-[#FAF8F5]">{analytics.bookingRequests}</p>
          <span className="text-[11px] text-[#FAF8F5]/50">Completed submissions</span>
        </div>

        <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-2">
          <div className="flex items-center justify-between text-[#C5A880]">
            <span className="text-xs uppercase tracking-wider font-semibold">Conversion Rate</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="font-serif text-3xl font-bold text-[#D4AF37]">{analytics.conversionRate}%</p>
          <span className="text-[11px] text-emerald-400 font-semibold">High client intent</span>
        </div>

        <div className="bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-2">
          <div className="flex items-center justify-between text-[#C5A880]">
            <span className="text-xs uppercase tracking-wider font-semibold">Top Service</span>
            <Award className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-serif text-lg font-bold text-[#FAF8F5] truncate">{analytics.popularService}</p>
          <span className="text-[11px] text-[#FAF8F5]/50">42% of total revenue</span>
        </div>
      </div>

      {/* Visual Chart & Traffic Sources */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Monthly Views Chart (8 cols) */}
        <div className="lg:col-span-8 bg-[#1C1B1A] p-6 sm:p-8 rounded-3xl border border-[#FAF8F5]/10 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-[#FAF8F5] flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#D4AF37]" />
              Monthly Profile Views & Bookings Trend
            </h3>
            <span className="text-xs text-[#C5A880]">Last 5 Months</span>
          </div>

          <div className="h-48 flex items-end justify-between gap-4 pt-6 border-b border-[#FAF8F5]/10 pb-4">
            {analytics.viewsHistory.map((item) => {
              const heightPercent = (item.views / maxViews) * 100;
              return (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                  <div className="text-[10px] text-[#D4AF37] opacity-0 group-hover:opacity-100 transition font-mono">
                    {item.views}
                  </div>
                  <div
                    className="w-full max-w-[40px] bg-gradient-to-t from-[#D4AF37]/30 to-[#D4AF37] rounded-t-lg group-hover:bg-[#E8D7D0] transition-all duration-300"
                    style={{ height: `${heightPercent}%` }}
                  />
                  <span className="text-xs text-[#FAF8F5]/70 font-semibold">{item.month}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Traffic Channels Breakdown (4 cols) */}
        <div className="lg:col-span-4 bg-[#1C1B1A] p-6 rounded-3xl border border-[#FAF8F5]/10 space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
            Client Traffic Channels
          </h3>

          <div className="space-y-4 pt-2">
            {analytics.trafficSources.map((source) => (
              <div key={source.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#FAF8F5]/80 font-medium">{source.name}</span>
                  <span className="font-mono text-[#D4AF37] font-bold">{source.percentage}%</span>
                </div>
                <div className="w-full bg-[#121110] h-2 rounded-full overflow-hidden border border-[#FAF8F5]/5">
                  <div
                    className="bg-gradient-to-r from-[#D4AF37] to-[#C5A880] h-full rounded-full"
                    style={{ width: `${source.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
