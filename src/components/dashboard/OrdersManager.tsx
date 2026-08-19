'use client';

import React from 'react';
import { initialProductOrders } from '../../data/mockData';
import { ProductOrder } from '../../types';
import { ShoppingBag, Phone, Mail, MapPin, MessageSquare, CreditCard, Sparkles, CheckCircle2 } from 'lucide-react';

export const OrdersManager: React.FC = () => {
  const orders: ProductOrder[] = initialProductOrders;

  const getWhatsAppLink = (order: ProductOrder) => {
    const text = encodeURIComponent(
      `Hi ${order.customerName}! Thank you for ordering from BB Beauty Pro. I am following up on your order #${order.id} (${order.items.map(i => `${i.quantity}x ${i.product.name} - ${i.selectedShade.name}`).join(', ')}).`
    );
    const cleanPhone = order.customerPhone.replace(/[^0-9+]/g, '');
    return `https://wa.me/${cleanPhone}?text=${text}`;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#FAF8F5]/10 pb-4">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] flex items-center gap-2">
            <ShoppingBag className="w-6 h-6 text-[#C5A880]" />
            Lip Gloss Product Orders
          </h2>
          <p className="text-xs text-[#FAF8F5]/70">
            View full order details, shipping addresses, and chat directly with customers via WhatsApp, call, or email.
          </p>
        </div>

        <span className="text-xs bg-[#C5A880]/20 text-[#C5A880] border border-[#C5A880]/40 px-3 py-1 rounded-full font-mono font-bold">
          {orders.length} Total Orders
        </span>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-[#1C1B1A] border border-[#FAF8F5]/10 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6 text-xs text-[#FAF8F5]"
          >
            {/* Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#FAF8F5]/10 pb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-mono font-bold block">
                  Order ID #{order.id}
                </span>
                <h3 className="font-serif font-bold text-lg text-white">
                  {order.customerName}
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-xl font-bold text-[#C5A880]">
                  ${order.totalAmount.toFixed(2)} USD
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold uppercase tracking-wider text-[10px] border border-emerald-500/40">
                  {order.status}
                </span>
              </div>
            </div>

            {/* Customer Details & Shipping Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#121110] p-4 sm:p-6 rounded-2xl border border-[#FAF8F5]/5">
              <div className="space-y-2">
                <p className="text-[10px] uppercase tracking-wider text-[#C5A880] font-bold">Customer Contact Info</p>
                <p className="font-bold text-white text-sm">{order.customerName}</p>
                <p className="text-[#FAF8F5]/70 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{order.customerPhone}</span>
                </p>
                <p className="text-[#FAF8F5]/70 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{order.customerEmail}</span>
                </p>
              </div>

              <div className="space-y-2 border-t md:border-t-0 md:border-l border-[#FAF8F5]/10 pt-4 md:pt-0 md:pl-6">
                <p className="text-[10px] uppercase tracking-wider text-[#C5A880] font-bold">US Delivery Address</p>
                <p className="text-[#FAF8F5]/90 font-medium flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                  <span>{order.shippingAddress}, {order.cityStateZip}</span>
                </p>
                <p className="text-[11px] text-[#FAF8F5]/50 pt-1 flex items-center gap-1">
                  <CreditCard className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>Payment Method: {order.paymentMethod}</span>
                </p>
              </div>
            </div>

            {/* Itemized Products */}
            <div className="space-y-3">
              <p className="text-[10px] uppercase tracking-wider text-[#C5A880] font-bold">Itemized Order Summary</p>
              <div className="divide-y divide-[#FAF8F5]/5 border-y border-[#FAF8F5]/10">
                {order.items.map((item, idx) => (
                  <div key={idx} className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#FAF8F5]/10 text-white font-mono font-bold text-xs flex items-center justify-center">
                        {item.quantity}x
                      </span>
                      <div>
                        <p className="font-bold text-white">{item.product.name}</p>
                        <p className="text-[11px] text-[#C5A880]">Shade: {item.selectedShade.name}</p>
                      </div>
                    </div>

                    <span className="font-mono font-bold text-white">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Communication Buttons */}
            <div className="pt-4 border-t border-[#FAF8F5]/10 flex flex-wrap items-center gap-3">
              <span className="text-[11px] text-[#FAF8F5]/60 uppercase font-semibold mr-2">Contact Customer:</span>

              <a
                href={getWhatsAppLink(order)}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href={`tel:${order.customerPhone}`}
                className="px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-white transition flex items-center gap-2 border border-[#FAF8F5]/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Call Phone</span>
              </a>

              <a
                href={`mailto:${order.customerEmail}?subject=Order #${order.id} Update — BB Beauty Pro`}
                className="px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-white transition flex items-center gap-2 border border-[#FAF8F5]/15"
              >
                <Mail className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Send Email</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};
