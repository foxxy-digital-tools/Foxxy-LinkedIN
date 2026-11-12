import React, { useState } from 'react';
import { MotionGraphicArbitrage } from './MotionGraphicArbitrage';
import { Check, X, Sparkles, ArrowRight, ShieldCheck, Star, Calculator, TrendingUp } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function B2BMathSection({ onOpenCheckout }) {
  const [selectedDealSize, setSelectedDealSize] = useState(50000);

  const dealSizes = [
    { label: "₹25,000 Deal", value: 25000, description: "Small consulting / coaching project" },
    { label: "₹50,000 Deal", value: 50000, description: "Mid-tier retainer / B2B service" },
    { label: "₹1,50,000 Deal", value: 150000, description: "Enterprise CXO contract" },
  ];

  const calculatedRoi = Math.round(((selectedDealSize - 3999) / 3999) * 100);

  const comparisonRows = [
    {
      isMainBonus: true,
      feature: "LinkedIn Sales Navigator Advanced Seat",
      featureSub: "Official tier with 50 InMails, Smart Links & Buyer Intent filters",
      optionA: "₹15,000 / month ($159.99)",
      optionASub: "Billed directly to your card every 30 days",
      optionB: "1 Month INCLUDED 100% FREE",
      optionBSub: "Official seat sponsored by Foxxy • Zero password needed",
      highlight: true
    },
    {
      isMainBonus: false,
      feature: "The LinkedIn Growth Foundation Playbook",
      featureSub: "Complete digital master guide by Coach Ravikant",
      optionA: "Not Included (Zero guidance)",
      optionASub: "You start from scratch with blank software",
      optionB: "Complete Digital Edition Included",
      optionBSub: "Instant download upon payment",
      highlight: false
    },
    {
      isMainBonus: false,
      feature: "Sales Navigator Accelerator Implementation Workbook",
      featureSub: "7-Day step-by-step implementation sprint",
      optionA: "Not Included",
      optionASub: "Figure out prospecting by trial and error",
      optionB: "7-Day Implementation Sprint Included",
      optionBSub: "Daily structured actions & checklists",
      highlight: false
    },
    {
      isMainBonus: false,
      feature: "Targeted Lead Search Filter Blueprints",
      featureSub: "Proven search recipes for Indian & global B2B decision-makers",
      optionA: "Trial & error on your own",
      optionASub: "Wasted InMails and irrelevant results",
      optionB: "Tested B2B Search Blueprints Included",
      optionBSub: "Ready to implement in your free Sales Nav seat",
      highlight: false
    },
    {
      isMainBonus: false,
      feature: "AI Research & Outreach Prompts",
      featureSub: "ChatGPT & Claude workflows for prospect research",
      optionA: "None",
      optionASub: "Write every outreach manually from scratch",
      optionB: "Curated AI Workflows Included",
      optionBSub: "Built specifically for high-trust conversations",
      highlight: false
    },
    {
      isMainBonus: false,
      feature: "The 30-Minute Daily Growth Routine",
      featureSub: "Repeatable schedule: 5m Discover, 10m Engage, 5m Connect...",
      optionA: "Unstructured doomscrolling",
      optionASub: "Hours spent with zero pipeline to show",
      optionB: "Structured Daily Routine Included",
      optionBSub: "Disciplined 30m habit that compounds",
      highlight: false
    },
    {
      isMainBonus: false,
      feature: "Team-Assisted Seat Activation",
      featureSub: "Direct support to get your account upgraded",
      optionA: "Self-setup with international card",
      optionASub: "Foreign transaction fees & automatic renewals",
      optionB: "Team-Assisted WhatsApp Support Included",
      optionBSub: "Our team verifies and activates your seat",
      highlight: true
    },
    {
      isMainBonus: false,
      feature: "Password Security Policy",
      featureSub: "How your account is accessed",
      optionA: "Standard login credentials",
      optionASub: "Direct account login",
      optionB: "Zero-Password Guarantee",
      optionBSub: "We NEVER ask for your LinkedIn password",
      highlight: false
    },
    {
      isMainBonus: false,
      isTotalRow: true,
      feature: "Total Out-of-Pocket Cost",
      featureSub: "Net financial commitment",
      optionA: "₹15,000 / month (Recurring)",
      optionASub: "Full retail price auto-debited",
      optionB: "₹3,999 One-Time (Save ₹11,001)",
      optionBSub: "One-time payment • All taxes included • 73% Arbitrage",
      highlight: true
    }
  ];

  return (
    <section id="the-math" className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>THE B2B VALUE EQUATION</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Why Pay ₹15,000 for Blank Software When You Can Get The <span className="text-[#0A66C2]">Software FREE + The System</span> for ₹3,999?
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
          Most professionals pay $159.99/mo directly to LinkedIn without a framework. Here is how our bundle compares to buying software alone.
        </p>
      </div>

      {/* Interactive Savings Component */}
      <div className="mb-12">
        <MotionGraphicArbitrage />
      </div>

      {/* Interactive ROI Calculator Widget */}
      <div className="relative overflow-hidden rounded-2xl p-5 sm:p-8 bg-gradient-to-br from-blue-50/90 via-white to-emerald-50/80 border-2 border-[#0A66C2]/30 ring-4 ring-blue-100/50 shadow-[0_16px_40px_-12px_rgba(10,102,194,0.22)] mb-12">
        {/* Top Accent Bar */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0A66C2] via-sky-500 to-emerald-500" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-1">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold shadow-xs">
              <Calculator className="w-3.5 h-3.5" />
              INTERACTIVE PIPELINE CALCULATOR
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Calculate Your Return on ₹3,999
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Select your typical B2B client value to see the ROI of closing just <strong>one deal</strong> during your 1-month free Sales Nav access:
            </p>

            {/* Deal Size Buttons - Touch friendly and responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
              {dealSizes.map((deal) => (
                <button
                  key={deal.value}
                  onClick={() => setSelectedDealSize(deal.value)}
                  className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    selectedDealSize === deal.value
                      ? 'bg-[#0A66C2] text-white shadow-md ring-2 ring-[#0A66C2]/25'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-blue-50/60 hover:border-blue-300'
                  }`}
                >
                  {deal.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic ROI Result Box */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-50/90 to-white border-2 border-emerald-400 shadow-[0_10px_25px_-6px_rgba(16,185,129,0.28)] flex-shrink-0 text-center w-full md:w-auto md:min-w-[240px]">
            <span className="text-xs font-mono font-semibold text-emerald-800/80 uppercase block mb-1">
              Projected ROI on ₹3,999:
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
              +{calculatedRoi.toLocaleString('en-IN')}%
            </div>
            <span className="text-[11px] text-gray-600 font-medium block mt-1">
              (₹{selectedDealSize.toLocaleString('en-IN')} deal vs. ₹3,999 cost)
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison: Desktop Table + Dedicated Mobile Cards */}
      <div className="card-elevated rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
        {/* Table / Card Header */}
        <div className="p-5 sm:p-6 border-b border-gray-200 bg-gray-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900">
              Detailed Feature-by-Feature Comparison
            </h3>
            <p className="text-xs text-gray-500">
              Why 10,000+ professionals choose the complete toolkit over paying ₹15,000 for raw software.
            </p>
          </div>
          <button
            onClick={onOpenCheckout}
            className="self-stretch sm:self-auto flex-shrink-0 whitespace-nowrap px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Lock In ₹3,999 Bundle</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 1. DEDICATED MOBILE VIEW (md:hidden): High-Impact Comparative Matrix */}
        <div className="md:hidden p-3.5 sm:p-4 space-y-4 bg-gray-50/50">
          {/* Main Attraction VIP Banner */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-[#001D40] via-[#0A66C2] to-[#0D47A1] text-white shadow-lg space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#D4FF00] text-black text-[10px] font-black uppercase tracking-wider font-mono shadow-xs">
                ⭐ MAIN ATTRACTION
              </span>
              <span className="text-[10px] font-mono font-bold text-sky-200 bg-white/10 px-2 py-0.5 rounded-full">
                WORTH ₹15,000 FREE
              </span>
            </div>

            <div>
              <h4 className="text-base font-black text-white leading-snug">
                LinkedIn Sales Navigator Advanced Seat
              </h4>
              <p className="text-xs text-sky-200/90 mt-0.5">
                Official 1-Month seat sponsored 100% free by Foxxy Digital Tools. Zero password needed.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/20 text-xs">
              <div className="p-2 rounded-xl bg-white/10">
                <span className="text-[9px] uppercase font-mono text-sky-200 block">Direct LinkedIn:</span>
                <span className="font-bold text-white/60 line-through decoration-red-400 font-mono text-xs sm:text-sm block">
                  ₹15,000 / mo
                </span>
                <span className="text-[9px] text-white/50 block">Recurring card charge</span>
              </div>
              <div className="p-2 rounded-xl bg-white/20 border border-white/30">
                <span className="text-[9px] uppercase font-mono text-[#D4FF00] block">With Toolkit:</span>
                <span className="font-black text-[#D4FF00] font-mono text-xs sm:text-sm block">
                  100% FREE (₹0)
                </span>
                <span className="text-[9px] text-emerald-300 block">Included in ₹3,999 bundle</span>
              </div>
            </div>
          </div>

          {/* Side-by-Side Mobile Comparison Card */}
          <div className="rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            {/* Header Columns */}
            <div className="grid grid-cols-2 text-center text-xs font-bold border-b border-gray-200">
              <div className="py-2.5 px-2 bg-red-50/60 text-red-700 border-r border-gray-200">
                <span className="text-[10px] font-mono block uppercase text-red-500 font-bold">OPTION A</span>
                <span className="text-xs block">Direct Sales Nav Alone</span>
                <span className="text-[11px] font-mono block text-red-600 font-bold mt-0.5">₹15,000 / month</span>
              </div>
              <div className="py-2.5 px-2 bg-blue-50 text-[#0A66C2]">
                <span className="text-[10px] font-mono block uppercase text-[#0A66C2] font-bold">OPTION B</span>
                <span className="text-xs block">CR Academy Bundle</span>
                <span className="text-[11px] font-mono block text-emerald-700 font-bold mt-0.5">₹3,999 One-Time</span>
              </div>
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-gray-100 text-xs">
              {/* Row 1: Software */}
              <div className="p-3 grid grid-cols-2 gap-2.5 items-center">
                <div className="text-gray-500 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-700 block text-[11px]">Software Only</span>
                    <span className="text-[10px] text-gray-400">Blank tool, zero guidance</span>
                  </div>
                </div>
                <div className="text-gray-900 flex items-start gap-1.5 pl-2 border-l border-gray-100">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#0A66C2] block text-[11px]">1-Mo Seat FREE</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">Worth ₹15,000 included</span>
                  </div>
                </div>
              </div>

              {/* Row 2: Playbook */}
              <div className="p-3 grid grid-cols-2 gap-2.5 items-center bg-gray-50/40">
                <div className="text-gray-500 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-700 block text-[11px]">No Playbook</span>
                    <span className="text-[10px] text-gray-400">Start from scratch</span>
                  </div>
                </div>
                <div className="text-gray-900 flex items-start gap-1.5 pl-2 border-l border-gray-100">
                  <Check className="w-3.5 h-3.5 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block text-[11px]">Master Playbook</span>
                    <span className="text-[10px] text-gray-500">Coach Ravikant system</span>
                  </div>
                </div>
              </div>

              {/* Row 3: Workbook */}
              <div className="p-3 grid grid-cols-2 gap-2.5 items-center">
                <div className="text-gray-500 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-700 block text-[11px]">No Action Plan</span>
                    <span className="text-[10px] text-gray-400">Trial and error</span>
                  </div>
                </div>
                <div className="text-gray-900 flex items-start gap-1.5 pl-2 border-l border-gray-100">
                  <Check className="w-3.5 h-3.5 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block text-[11px]">7-Day Sprint</span>
                    <span className="text-[10px] text-gray-500">Daily actionable steps</span>
                  </div>
                </div>
              </div>

              {/* Row 4: Search Blueprints */}
              <div className="p-3 grid grid-cols-2 gap-2.5 items-center bg-gray-50/40">
                <div className="text-gray-500 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-700 block text-[11px]">Guessing Filters</span>
                    <span className="text-[10px] text-gray-400">Wasted InMails</span>
                  </div>
                </div>
                <div className="text-gray-900 flex items-start gap-1.5 pl-2 border-l border-gray-100">
                  <Check className="w-3.5 h-3.5 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block text-[11px]">Search Blueprints</span>
                    <span className="text-[10px] text-gray-500">Tested B2B filter recipes</span>
                  </div>
                </div>
              </div>

              {/* Row 5: AI Prompts */}
              <div className="p-3 grid grid-cols-2 gap-2.5 items-center">
                <div className="text-gray-500 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-700 block text-[11px]">Manual Outreach</span>
                    <span className="text-[10px] text-gray-400">Write pitches alone</span>
                  </div>
                </div>
                <div className="text-gray-900 flex items-start gap-1.5 pl-2 border-l border-gray-100">
                  <Check className="w-3.5 h-3.5 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block text-[11px]">AI Workflows</span>
                    <span className="text-[10px] text-gray-500">ChatGPT & Claude prompts</span>
                  </div>
                </div>
              </div>

              {/* Row 6: Daily Routine */}
              <div className="p-3 grid grid-cols-2 gap-2.5 items-center bg-gray-50/40">
                <div className="text-gray-500 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-700 block text-[11px]">Doomscrolling</span>
                    <span className="text-[10px] text-gray-400">Hours spent with 0 leads</span>
                  </div>
                </div>
                <div className="text-gray-900 flex items-start gap-1.5 pl-2 border-l border-gray-100">
                  <Check className="w-3.5 h-3.5 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block text-[11px]">30-Min Daily Habit</span>
                    <span className="text-[10px] text-gray-500">Structured growth discipline</span>
                  </div>
                </div>
              </div>

              {/* Row 7: Security & Activation */}
              <div className="p-3 grid grid-cols-2 gap-2.5 items-center">
                <div className="text-gray-500 flex items-start gap-1.5">
                  <X className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-700 block text-[11px]">Self Setup</span>
                    <span className="text-[10px] text-gray-400">Foreign card conversion fees</span>
                  </div>
                </div>
                <div className="text-gray-900 flex items-start gap-1.5 pl-2 border-l border-gray-100">
                  <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-gray-900 block text-[11px]">Team-Assisted</span>
                    <span className="text-[10px] text-emerald-700 font-semibold">Zero-Password Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Total Bottom Row */}
              <div className="p-3.5 bg-gradient-to-r from-red-50/40 via-white to-blue-50/50 grid grid-cols-2 gap-2.5 items-center">
                <div>
                  <span className="text-[9px] uppercase font-mono text-gray-400 block font-bold">TOTAL OUT-OF-POCKET:</span>
                  <span className="font-bold text-red-600 font-mono text-xs">₹15,000 / month</span>
                  <span className="text-[9px] text-gray-400 block">Recurring monthly billing</span>
                </div>
                <div className="pl-2 border-l border-gray-200">
                  <span className="text-[9px] uppercase font-mono text-emerald-700 block font-bold">YOUR BUNDLE PRICE:</span>
                  <span className="font-black text-[#0A66C2] font-mono text-base block">₹3,999 <span className="text-[10px] font-normal text-gray-500">Total</span></span>
                  <span className="text-[9px] text-emerald-700 font-bold block">Save ₹11,001 (73% Arbitrage)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. DESKTOP VIEW (hidden md:block): Preserved Exact 3-Column Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-100/60">
                <th className="py-4 px-4 sm:px-6 text-gray-600 font-bold uppercase font-mono text-[11px] w-5/12">
                  Asset / Capability
                </th>
                <th className="py-4 px-4 sm:px-6 text-red-600 font-bold uppercase font-mono text-[11px] w-3/12 bg-red-50/20">
                  Option A: Sales Nav Alone
                </th>
                <th className="py-4 px-4 sm:px-6 text-[#0A66C2] font-bold uppercase font-mono text-[11px] w-4/12 bg-blue-50/60">
                  Option B: The Growth Toolkit Bundle
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {comparisonRows.map((row, idx) => {
                if (row.isMainBonus) {
                  // HEAVILY HIGHLIGHTED ROW FOR LINKEDIN SALES NAVIGATOR ADVANCED SEAT
                  return (
                    <tr
                      key={idx}
                      className="bg-gradient-to-r from-blue-100/90 via-sky-50 to-blue-100/70 border-l-4 border-l-[#0A66C2] shadow-inner"
                    >
                      <td className="py-5 px-4 sm:px-6">
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0A66C2] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                            ⭐ MAIN ATTRACTION • WORTH ₹15,000
                          </span>
                          <h4 className="text-base sm:text-lg font-black text-gray-900 leading-tight">
                            {row.feature}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {row.featureSub}
                          </p>
                        </div>
                      </td>

                      <td className="py-5 px-4 sm:px-6 bg-red-50/40">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-red-600 font-bold text-sm sm:text-base">
                            <X className="w-4 h-4 flex-shrink-0" />
                            <span className="line-through decoration-red-500 decoration-2 font-mono">
                              ₹15,000 / month
                            </span>
                          </div>
                          <span className="text-[11px] text-red-500 font-mono block">
                            ($159.99 billed directly to card)
                          </span>
                        </div>
                      </td>

                      <td className="py-5 px-4 sm:px-6 bg-blue-50/90 border-l border-blue-200">
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-[#0A66C2] font-black text-base sm:text-lg">
                            <Check className="w-5 h-5 text-emerald-600 stroke-[3]" />
                            <span>100% INCLUDED FREE</span>
                          </div>
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                            ✓ ₹0 Extra Cost with Toolkit
                          </span>
                          <span className="text-[11px] text-gray-600 block">
                            {row.optionBSub}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr
                    key={idx}
                    className={`hover:bg-gray-50/80 transition-colors ${
                      row.isTotalRow ? 'bg-gray-100/70 font-bold border-t-2 border-gray-300' : ''
                    }`}
                  >
                    <td className="py-4 px-4 sm:px-6">
                      <div className="font-semibold text-gray-900">{row.feature}</div>
                      <div className="text-[11px] text-gray-500">{row.featureSub}</div>
                    </td>

                    <td className="py-4 px-4 sm:px-6 text-gray-500 bg-red-50/10">
                      <div className="flex items-start gap-1.5 text-gray-700">
                        <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className={row.isTotalRow ? 'text-red-600 font-bold' : ''}>{row.optionA}</span>
                          <span className="text-[10px] text-gray-400 block">{row.optionASub}</span>
                        </div>
                      </div>
                    </td>

                    <td className={`py-4 px-4 sm:px-6 bg-blue-50/20 ${row.isTotalRow ? 'bg-blue-50/60' : ''}`}>
                      <div className="flex items-start gap-1.5">
                        <Check className="w-4 h-4 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                        <div>
                          <span className={row.isTotalRow ? 'text-[#0A66C2] font-black text-base' : 'font-semibold text-gray-900'}>
                            {row.optionB}
                          </span>
                          <span className="text-[10px] text-gray-500 block">{row.optionBSub}</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Table / Mobile Bottom Callout */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-600 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Zero LinkedIn password needed • Instant PDF downloads • Limited to 100 Seats</span>
          </div>

          <div className="flex items-center justify-between w-full sm:w-auto gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-gray-200">
            <div className="text-left sm:text-right">
              <span className="text-[10px] text-gray-500 block uppercase font-mono">Arbitrage Savings:</span>
              <span className="text-sm sm:text-base font-black text-emerald-700 font-mono">Save ₹11,001 (73% Off)</span>
            </div>
            <button
              onClick={onOpenCheckout}
              className="flex-shrink-0 whitespace-nowrap px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              Claim for ₹3,999 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
