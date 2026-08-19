'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useMua } from '../../context/MuaContext';
import { DemoNav } from '../../components/layout/DemoNav';
import { ToastContainer } from '../../components/ui/Toast';
import { DashboardOverview } from '../../components/dashboard/DashboardOverview';
import { BookingManager } from '../../components/dashboard/BookingManager';
import { AvailabilityManager } from '../../components/dashboard/AvailabilityManager';
import { QuestionsManager } from '../../components/dashboard/QuestionsManager';
import { PortfolioManager } from '../../components/dashboard/PortfolioManager';
import { ServicesManager } from '../../components/dashboard/ServicesManager';
import { BioEditor } from '../../components/dashboard/BioEditor';
import { AnalyticsView } from '../../components/dashboard/AnalyticsView';
import {
  LayoutDashboard,
  Calendar,
  Clock,
  HelpCircle,
  Image as ImageIcon,
  Sparkles,
  User,
  BarChart3,
  Crown,
  ArrowLeft,
  Menu,
  X,
  Lock,
} from 'lucide-react';

export default function DashboardPage() {
  const { profile, activeDemoPackage, setActiveDemoPackage } = useMua();
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);
  const isSignature = activeDemoPackage === 'SIGNATURE';

  const sidebarLinks = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'requests', label: 'Booking Requests', icon: Calendar },
    { id: 'availability', label: 'Calendar & Slots', icon: Clock },
    { id: 'questions', label: 'Questionnaire Builder', icon: HelpCircle, requiresSignature: true },
    { id: 'portfolio', label: 'Portfolio CMS', icon: ImageIcon },
    { id: 'services', label: 'Services & Pricing', icon: Sparkles },
    { id: 'profile', label: 'Business Profile', icon: User },
    { id: 'analytics', label: 'Analytics Suite', icon: BarChart3, requiresSignature: true },
  ];

  return (
    <div className="min-h-screen bg-[#121110] text-[#FAF8F5] flex flex-col">
      <DemoNav />

      <div className="flex-1 flex flex-col md:flex-row">
        
        {/* Mobile Header Bar */}
        <div className="md:hidden bg-[#1C1B1A] border-b border-[#FAF8F5]/10 p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-sm text-[#FAF8F5]">{profile.name}</span>
            <span className="text-[10px] text-[#C5A880] uppercase tracking-wider font-semibold">Dashboard</span>
          </div>

          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="p-2 text-[#FAF8F5] hover:text-[#C5A880]"
          >
            {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Sidebar Navigation */}
        <aside
          className={`w-full md:w-64 bg-[#1C1B1A] border-r border-[#FAF8F5]/10 p-6 flex flex-col justify-between shrink-0 ${
            mobileSidebarOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <div className="space-y-6">
            
            {/* Top Brand Info */}
            <div className="pb-6 border-b border-[#FAF8F5]/10">
              <Link href="/" className="group block">
                <span className="font-serif text-lg font-bold tracking-wider text-[#FAF8F5] uppercase group-hover:text-[#C5A880] transition">
                  {profile.name}
                </span>
                <span className="text-[10px] text-[#C5A880] uppercase tracking-widest block font-light">
                  Artist Control Portal
                </span>
              </Link>
            </div>

            {/* Nav Items */}
            <nav className="space-y-1">
              {sidebarLinks.map((link) => {
                const IconComp = link.icon;
                const isActive = activeTab === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => {
                      setActiveTab(link.id);
                      setMobileSidebarOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-[#C5A880] text-[#121110] font-bold shadow-lg'
                        : 'text-[#FAF8F5]/70 hover:text-white hover:bg-[#FAF8F5]/5'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <IconComp className="w-4 h-4 shrink-0" />
                      <span>{link.label}</span>
                    </div>

                    {link.requiresSignature && !isSignature && (
                      <span className="text-[9px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-mono uppercase font-bold flex items-center gap-0.5">
                        <Lock className="w-2.5 h-2.5" /> $500
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Bottom Sidebar Box: Package Simulation Toggle */}
          <div className="pt-6 border-t border-[#FAF8F5]/10 space-y-3">
            <div className="bg-[#121110] p-3 rounded-2xl border border-[#C5A880]/30 text-xs">
              <p className="text-[10px] text-[#C5A880] uppercase tracking-wider font-semibold mb-1">
                Active Package Mode
              </p>
              <div className="flex items-center justify-between">
                <span className="font-serif font-bold text-[#FAF8F5]">
                  {isSignature ? '$500 Signature' : '$300 Essential'}
                </span>
                <button
                  onClick={() => setActiveDemoPackage(isSignature ? 'ESSENTIAL' : 'SIGNATURE')}
                  className="text-[10px] text-[#C5A880] hover:underline font-bold uppercase tracking-wider"
                >
                  Switch
                </button>
              </div>
            </div>

            <Link
              href="/"
              className="w-full py-2.5 rounded-xl border border-[#FAF8F5]/15 text-xs text-[#FAF8F5]/70 hover:text-white hover:bg-[#FAF8F5]/5 transition flex items-center justify-center gap-2 font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>View Public Website</span>
            </Link>
          </div>
        </aside>

        {/* Main Content Viewport */}
        <main className="flex-1 p-6 sm:p-10 max-w-7xl w-full mx-auto">
          {activeTab === 'overview' && <DashboardOverview />}
          {activeTab === 'requests' && <BookingManager />}
          {activeTab === 'availability' && <AvailabilityManager />}
          
          {activeTab === 'questions' && (
            isSignature ? (
              <QuestionsManager />
            ) : (
              <div className="bg-[#1C1B1A] border border-[#C5A880]/40 rounded-3xl p-10 text-center space-y-6 max-w-xl mx-auto shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                  <Lock className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">Questionnaire Builder Locked</h3>
                  <p className="text-xs text-[#FAF8F5]/70 leading-relaxed">
                    Custom Intake Questionnaire Builder is an exclusive feature included in the <strong>$500 Signature Digital System</strong> package.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDemoPackage('SIGNATURE')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#d8bb93] transition shadow-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <Crown className="w-4 h-4" />
                  <span>Unlock Signature Package ($500)</span>
                </button>
              </div>
            )
          )}

          {activeTab === 'portfolio' && <PortfolioManager />}
          {activeTab === 'services' && <ServicesManager />}
          {activeTab === 'profile' && <BioEditor />}
          
          {activeTab === 'analytics' && (
            isSignature ? (
              <AnalyticsView />
            ) : (
              <div className="bg-[#1C1B1A] border border-[#C5A880]/40 rounded-3xl p-10 text-center space-y-6 max-w-xl mx-auto shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                  <Lock className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F5]">Analytics Suite Locked</h3>
                  <p className="text-xs text-[#FAF8F5]/70 leading-relaxed">
                    E-Commerce Sales &amp; Appointment Conversion Analytics are included in the <strong>$500 Signature Digital System</strong> package.
                  </p>
                </div>
                <button
                  onClick={() => setActiveDemoPackage('SIGNATURE')}
                  className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#121110] bg-[#C5A880] hover:bg-[#d8bb93] transition shadow-lg flex items-center justify-center gap-2 mx-auto"
                >
                  <Crown className="w-4 h-4" />
                  <span>Unlock Signature Package ($500)</span>
                </button>
              </div>
            )
          )}
        </main>
      </div>

      <ToastContainer />
    </div>
  );
}
