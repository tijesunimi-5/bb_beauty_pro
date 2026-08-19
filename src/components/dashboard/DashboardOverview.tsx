'use client';

import React from 'react';
import { useMua } from '../../context/MuaContext';
import {
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  ShoppingBag,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
} from 'lucide-react';

export const DashboardOverview: React.FC = () => {
  const { analytics, bookingRequests, products } = useMua();

  const pendingRequests = bookingRequests.filter((r) => r.status === 'Pending' || r.status === 'Payment Submitted');
  const approvedRequests = bookingRequests.filter((r) => r.status === 'Approved');

  return (
    <div className="space-y-8">
      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Stat 1: Est. Monthly Revenue */}
        <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#EFE8DF] shadow-md space-y-2">
          <div className="flex items-center justify-between text-[#8C6D53]">
            <span className="text-xs uppercase tracking-wider font-semibold">Est. Monthly Revenue</span>
            <div className="w-8 h-8 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#1F1A17]">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="font-mono text-2xl font-bold text-[#1F1A17]">
            ${analytics.monthlyRevenue.toLocaleString()} <span className="text-xs text-[#8C6D53] font-sans">USD</span>
          </p>
          <p className="text-[11px] text-emerald-600 font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> +18.4% from last month
          </p>
        </div>

        {/* Stat 2: Active Booking Requests */}
        <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#EFE8DF] shadow-md space-y-2">
          <div className="flex items-center justify-between text-[#8C6D53]">
            <span className="text-xs uppercase tracking-wider font-semibold">Booking Requests</span>
            <div className="w-8 h-8 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#1F1A17]">
              <Calendar className="w-4 h-4" />
            </div>
          </div>
          <p className="font-mono text-2xl font-bold text-[#1F1A17]">
            {analytics.bookingRequests}
          </p>
          <p className="text-[11px] text-[#6B5B52]">
            <strong className="text-amber-700 font-bold">{pendingRequests.length}</strong> awaiting review
          </p>
        </div>

        {/* Stat 3: Lip Gloss Sales */}
        <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#EFE8DF] shadow-md space-y-2">
          <div className="flex items-center justify-between text-[#8C6D53]">
            <span className="text-xs uppercase tracking-wider font-semibold">Product Orders</span>
            <div className="w-8 h-8 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#1F1A17]">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <p className="font-mono text-2xl font-bold text-[#1F1A17]">
            {analytics.productSales} Units
          </p>
          <p className="text-[11px] text-emerald-600 font-medium">
            Bestseller: Signature Velvet Lip Gloss
          </p>
        </div>

        {/* Stat 4: Conversion Rate */}
        <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#EFE8DF] shadow-md space-y-2">
          <div className="flex items-center justify-between text-[#8C6D53]">
            <span className="text-xs uppercase tracking-wider font-semibold">Conversion Rate</span>
            <div className="w-8 h-8 rounded-full bg-[#F5F0EB] flex items-center justify-center text-[#1F1A17]">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <p className="font-mono text-2xl font-bold text-[#1F1A17]">
            {analytics.conversionRate}%
          </p>
          <p className="text-[11px] text-[#6B5B52]">
            {analytics.profileViews.toLocaleString()} Profile Views
          </p>
        </div>

      </div>

      {/* Recent Requests Feed */}
      <div className="bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#EFE8DF] shadow-lg space-y-6">
        <div className="flex items-center justify-between border-b border-[#EFE8DF] pb-4">
          <div>
            <h3 className="font-serif font-bold text-lg text-[#1F1A17]">Recent Appointment Inquiries</h3>
            <p className="text-xs text-[#6B5B52]">Manage incoming client requests and deposit receipts.</p>
          </div>
          <span className="text-xs font-mono bg-[#F5F0EB] px-3 py-1 rounded-full text-[#1F1A17] font-bold">
            {bookingRequests.length} Total Requests
          </span>
        </div>

        <div className="divide-y divide-[#EFE8DF]">
          {bookingRequests.map((req) => (
            <div key={req.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-xs text-[#1F1A17]">#{req.id}</span>
                  <span className="font-serif font-bold text-sm text-[#1F1A17]">{req.clientName}</span>
                  <span className="text-xs text-[#8C6D53]">({req.eventType})</span>
                </div>
                <p className="text-xs text-[#6B5B52]">
                  Date: <strong>{req.eventDate} at {req.eventTime}</strong> • Location: <strong>{req.location}</strong>
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="font-mono font-bold text-sm text-[#1F1A17]">
                  ${req.paymentAmount.toFixed(2)} USD
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    req.status === 'Approved'
                      ? 'bg-emerald-500/20 text-emerald-800'
                      : req.status === 'Payment Submitted'
                      ? 'bg-amber-500/20 text-amber-800'
                      : 'bg-gray-200 text-gray-800'
                  }`}
                >
                  {req.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
