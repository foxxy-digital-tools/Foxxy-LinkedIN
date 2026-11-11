import React, { useState } from 'react';
import { Play, Sparkles, ShieldCheck, ChevronRight, FileText, X, CheckCircle, ArrowRight, Zap, Gift } from 'lucide-react';
import { APP_CONFIG, VSL_TRANSCRIPT } from '../config';

export function HeroModeSwitcher({ onOpenCheckout }) {
  const [heroMode, setHeroMode] = useState(APP_CONFIG.HERO_MODE_DEFAULT);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    { title: "0:00 The Math", time: "0:00", description: "Why software alone fails & the cost reality" },
    { title: "0:28 The Toolkit", time: "0:28", description: "Inside the playbook & 7-day sprint" },
    { title: "0:50 Safe Activation", time: "0:50", description: "Zero-password seat allocation guarantee" }
  ];

  return (
    <div className="relative w-full">
      {/* Mode Switcher Pill */}
      <div className="flex items-center justify-end mb-3">
        <div className="inline-flex items-center p-1 rounded-xl bg-gray-100 border border-gray-200 text-xs font-semibold shadow-inner">
          <button
            onClick={() => setHeroMode('INTERACTIVE_GRAPHIC')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              heroMode === 'INTERACTIVE_GRAPHIC'
                ? 'bg-white text-[#0A66C2] shadow-sm font-bold border border-gray-200'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Offer Visualizer</span>
          </button>

          <button
            onClick={() => setHeroMode('VIDEO')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
              heroMode === 'VIDEO'
                ? 'bg-[#0A66C2] text-white shadow-sm font-bold'
                : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>75s Video Overview</span>
          </button>
        </div>
      </div>

      {/* MODE A: Sleek Interactive Visual Artifact (Titanium VIP Pass + 3D Digital Dossiers) */}
      {heroMode === 'INTERACTIVE_GRAPHIC' ? (
        <div className="card-elevated rounded-3xl p-5 sm:p-6 border border-blue-100/80 bg-gradient-to-b from-slate-50/50 via-white to-blue-50/30 shadow-xl relative overflow-hidden space-y-4">
          {/* Top Telemetry Pills */}
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0A66C2] font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Verified Safe Activation
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-wide border border-emerald-200">
              Save ₹11,001 Today
            </span>
          </div>

          {/* Hero Centerpiece: The Titanium Executive LinkedIn VIP Pass */}
          <div className="rounded-2xl bg-gradient-to-br from-[#001D40] via-[#0A66C2] to-[#0D47A1] text-white p-5 sm:p-6 shadow-xl shadow-blue-900/30 relative overflow-hidden border border-white/20 transition-transform duration-300 hover:scale-[1.01]">
            {/* Holographic light reflection */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/15 rounded-full blur-2xl pointer-events-none"></div>

            {/* Pass Header */}
            <div className="flex items-center justify-between gap-2 sm:gap-3 mb-4">
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-[#0A66C2] flex items-center justify-center font-black text-xl sm:text-2xl shadow-md flex-shrink-0">
                  in
                </div>
                <div>
                  <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-sky-200 font-bold block">
                    SPONSORED EXECUTIVE SEAT
                  </span>
                  <span className="text-[11px] sm:text-xs font-mono text-emerald-300 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    ALLOCATION READY
                  </span>
                </div>
              </div>

              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#D4FF00] text-black font-black text-[9px] sm:text-[10px] uppercase shadow-sm font-mono flex-shrink-0 whitespace-nowrap">
                FREE BONUS • WORTH ₹15,000
              </span>
            </div>

            {/* Product Title */}
            <h4 className="text-lg sm:text-2xl font-black text-white tracking-tight mb-3 sm:mb-4">
              LinkedIn Sales Navigator Advanced
            </h4>

            {/* Spec Badges Grid */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-3 border-t border-white/20 text-xs">
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 backdrop-blur-xs text-center sm:text-left">
                <span className="text-sky-200 block text-[8px] sm:text-[9px] uppercase font-mono">Official Retail:</span>
                <span className="font-bold text-white/70 line-through decoration-red-400 font-mono text-xs sm:text-sm">
                  ₹15,000
                </span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 backdrop-blur-xs text-center sm:text-left">
                <span className="text-sky-200 block text-[8px] sm:text-[9px] uppercase font-mono">Your Price:</span>
                <span className="font-black text-[#D4FF00] font-mono text-xs sm:text-sm">
                  ₹0 (FREE)
                </span>
              </div>
              <div className="p-1.5 sm:p-2 rounded-lg bg-white/10 backdrop-blur-xs text-center sm:text-left">
                <span className="text-sky-200 block text-[8px] sm:text-[9px] uppercase font-mono">Security:</span>
                <span className="font-bold text-emerald-300 font-mono text-[11px] sm:text-sm flex items-center justify-center sm:justify-start gap-1">
                  <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span>No Password</span>
                </span>
              </div>
            </div>
          </div>

          {/* Visual Digital Assets (2 Tangible Dossiers / Books) */}
          <div className="grid grid-cols-2 gap-3">
            {/* Dossier 1 */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#1E1B4B] via-[#2E1065] to-[#1E1B4B] text-white border border-indigo-400/30 shadow-md relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-indigo-300 font-bold">
                  MASTER GUIDE
                </span>
                <span className="px-1.5 py-0.5 rounded bg-indigo-500/40 text-indigo-200 text-[9px] font-mono font-bold">
                  2026 RELEASE
                </span>
              </div>
              <h5 className="text-sm font-black text-white leading-tight mb-1">
                CLIC™ LinkedIn Playbook
              </h5>
              <span className="text-[11px] text-indigo-200/80 font-medium block">
                By Coach Ravikant
              </span>
            </div>

            {/* Dossier 2 */}
            <div className="rounded-2xl p-4 bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#047857] text-white border border-emerald-400/30 shadow-md relative overflow-hidden group hover:-translate-y-0.5 transition-transform">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono uppercase tracking-widest text-emerald-300 font-bold">
                  ACTION WORKBOOK
                </span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/40 text-emerald-200 text-[9px] font-mono font-bold">
                  7-DAY SPRINT
                </span>
              </div>
              <h5 className="text-sm font-black text-white leading-tight mb-1">
                Sales Nav Accelerator
              </h5>
              <span className="text-[11px] text-emerald-200/80 font-medium block">
                Daily Habit & Search Blueprint
              </span>
            </div>
          </div>

          {/* Bottom Visual Action Bar */}
          <div className="pt-2 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-gray-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official License • Instant Download</span>
            </span>
            <button
              onClick={onOpenCheckout}
              className="text-[#0A66C2] font-bold hover:underline flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <span>Claim Bundle for ₹3,999</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        /* MODE B: Video Hero Mode */
        <div className="card-elevated rounded-3xl p-5 sm:p-7 flex flex-col justify-between shadow-xl">
          <div className="relative w-full aspect-video rounded-2xl bg-gray-900 overflow-hidden shadow-md flex flex-col items-center justify-center">
            {APP_CONFIG.HERO_VIDEO_URL ? (
              <iframe
                src={APP_CONFIG.HERO_VIDEO_URL}
                title="Overview"
                className="w-full h-full border-0"
                allowFullScreen
              />
            ) : (
              <div className="text-center p-6 text-white space-y-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform mx-auto"
                  aria-label="Play video"
                >
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </button>
                <div>
                  <h4 className="text-sm font-bold">Watch the 75-Second Overview</h4>
                  <p className="text-xs text-gray-400 mt-1">How you get the complete system + free Sales Navigator seat.</p>
                </div>
              </div>
            )}
          </div>

          {/* Chapters */}
          <div className="mt-4 pt-3 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-2">
              {chapters.map((ch, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveChapter(idx)}
                  className={`text-left p-2 rounded-lg border text-xs transition-all ${
                    activeChapter === idx
                      ? 'bg-blue-50 border-[#0A66C2] text-[#0A66C2]'
                      : 'bg-gray-50 border-gray-200 text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span className="font-bold block font-mono">{ch.time}</span>
                  <span className="font-semibold block truncate">{ch.title.split(' ')[1]}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => setShowTranscript(true)}
              className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 font-medium"
            >
              <FileText className="w-3.5 h-3.5 text-[#0A66C2]" />
              <span>Read Full Script</span>
            </button>
            <button onClick={onOpenCheckout} className="text-xs font-bold text-[#0A66C2] hover:underline">
              Skip to Checkout (₹3,999) →
            </button>
          </div>
        </div>
      )}

      {/* Transcript Modal */}
      {showTranscript && (
        <div
          onClick={(e) => { if (e.target === e.currentTarget) setShowTranscript(false); }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fadeIn"
        >
          <div className="w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border border-gray-200 p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200 mb-6">
              <div>
                <span className="text-xs font-mono text-[#0A66C2] uppercase tracking-wider font-semibold">TRANSCRIPT</span>
                <h3 className="text-lg font-bold text-gray-900">75-Second Overview Script</h3>
              </div>
              <button
                onClick={() => setShowTranscript(false)}
                className="p-1.5 rounded-lg bg-gray-100 text-gray-500 hover:text-gray-900"
                aria-label="Close transcript"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {VSL_TRANSCRIPT.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-gray-900">{item.speaker}</span>
                    <span className="text-xs font-mono text-[#0A66C2] font-semibold">{item.timestamp}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">"{item.text}"</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
              <button onClick={() => setShowTranscript(false)} className="px-4 py-2 rounded-xl bg-gray-100 text-gray-600 text-xs font-semibold hover:bg-gray-200">
                Close
              </button>
              <button
                onClick={() => { setShowTranscript(false); onOpenCheckout(); }}
                className="px-5 py-2 rounded-xl bg-[#0A66C2] text-white text-xs font-bold hover:bg-[#084e96]"
              >
                Claim Toolkit (₹3,999) →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
