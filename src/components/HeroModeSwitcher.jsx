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

      {/* MODE A: Interactive VIP Card Stack */}
      {heroMode === 'INTERACTIVE_GRAPHIC' ? (
        <div className="card-elevated rounded-3xl p-6 sm:p-7 border border-blue-100/80 bg-gradient-to-b from-white via-blue-50/20 to-white shadow-xl flex flex-col justify-between relative overflow-hidden">
          {/* Top Telemetry Pills */}
          <div className="flex items-center justify-between gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs text-[#0A66C2] font-bold">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              10,000+ Executives Trained
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-black tracking-wide border border-emerald-200">
              Save ₹11,001 Today
            </span>
          </div>

          {/* Hero Centerpiece: The Official LinkedIn Sales Navigator VIP Pass */}
          <div className="rounded-2xl bg-gradient-to-br from-[#0A66C2] via-[#08529C] to-[#043366] text-white p-5 sm:p-6 shadow-xl shadow-blue-900/20 relative overflow-hidden mb-5">
            {/* Ambient pattern */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>

            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white text-[#0A66C2] flex items-center justify-center font-black text-2xl shadow-md flex-shrink-0">
                  in
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-sky-200 font-bold">
                      OFFICIAL 1-MONTH SEAT
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-[#D4FF00] text-black font-black text-[10px] uppercase shadow-sm">
                      FREE BONUS
                    </span>
                  </div>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-tight">
                    LinkedIn Sales Navigator Advanced
                  </h4>
                </div>
              </div>
            </div>

            {/* Price & Security Spec Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 py-3 border-t border-white/15 border-b text-xs mb-3">
              <div>
                <span className="text-sky-200 block text-[10px] uppercase font-mono">Retail Value:</span>
                <span className="font-bold text-white/80 line-through decoration-red-400 font-mono text-sm">
                  ₹15,000 ($159.99)
                </span>
              </div>
              <div>
                <span className="text-sky-200 block text-[10px] uppercase font-mono">Your Price:</span>
                <span className="font-black text-[#D4FF00] font-mono text-base">
                  ₹0 (FREE)
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-sky-200 block text-[10px] uppercase font-mono">Security:</span>
                <span className="font-bold text-emerald-300 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-300" /> No Password
                </span>
              </div>
            </div>

            <p className="text-xs text-sky-100/90 leading-relaxed">
              Activated directly on your own personal LinkedIn account by our team via official invitation link.
            </p>
          </div>

          {/* Included Playbooks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm hover:border-[#0A66C2]/40 transition-colors">
              <span className="text-[10px] font-mono text-[#0A66C2] font-bold uppercase tracking-wider block mb-1">
                RESOURCE 01 • MASTER GUIDE
              </span>
              <h5 className="text-sm font-bold text-gray-900 leading-snug">
                LinkedIn Growth Foundation Playbook
              </h5>
              <p className="text-xs text-gray-500 mt-1">
                Profile promise, content system & relationship frameworks by Coach Ravikant.
              </p>
            </div>

            <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm hover:border-emerald-400 transition-colors">
              <span className="text-[10px] font-mono text-emerald-700 font-bold uppercase tracking-wider block mb-1">
                RESOURCE 02 • WORKBOOK
              </span>
              <h5 className="text-sm font-bold text-gray-900 leading-snug">
                7-Day Sales Navigator Sprint
              </h5>
              <p className="text-xs text-gray-500 mt-1">
                Ideal buyer filters, 10-lead shortlist & repeatable 30m daily habit.
              </p>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-3 border-t border-gray-200 flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Official License • Instant Download</span>
            </span>
            <button
              onClick={onOpenCheckout}
              className="text-[#0A66C2] font-bold hover:underline flex items-center gap-1 text-xs sm:text-sm"
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
