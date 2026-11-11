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
    <section id="the-math" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
      <div className="card-elevated rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-50/50 via-white to-emerald-50/50 border border-blue-200 mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
              <Calculator className="w-3.5 h-3.5" />
              INTERACTIVE PIPELINE CALCULATOR
            </div>
            <h3 className="text-xl font-bold text-gray-900">
              Calculate Your Return on ₹3,999
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              Select your typical B2B client value to see the ROI of closing just <strong>one deal</strong> during your 1-month free Sales Nav access:
            </p>

            {/* Deal Size Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {dealSizes.map((deal) => (
                <button
                  key={deal.value}
                  onClick={() => setSelectedDealSize(deal.value)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedDealSize === deal.value
                      ? 'bg-[#0A66C2] text-white shadow-md'
                      : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {deal.label}
                </button>
              ))}
            </div>
          </div>

          {/* Dynamic ROI Result Box */}
          <div className="p-5 rounded-2xl bg-white border-2 border-emerald-300 shadow-md flex-shrink-0 text-center min-w-[240px]">
            <span className="text-xs font-mono text-gray-500 uppercase block mb-1">
              Projected ROI on ₹3,999:
            </span>
            <div className="text-3xl sm:text-4xl font-black text-emerald-600 font-mono">
              +{calculatedRoi.toLocaleString('en-IN')}%
            </div>
            <span className="text-[11px] text-gray-500 block mt-1">
              (₹{selectedDealSize.toLocaleString('en-IN')} deal vs. ₹3,999 cost)
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Table with Heavily Highlighted Main Row */}
      <div className="card-elevated rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
        <div className="p-6 border-b border-gray-200 bg-gray-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
            className="self-start sm:self-auto flex-shrink-0 whitespace-nowrap px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <span>Lock In ₹3,999 Bundle</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="overflow-x-auto">
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

        {/* Table Bottom Callout */}
        <div className="p-4 sm:p-6 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Zero LinkedIn password needed • Instant PDF downloads • Limited to 100 Seats</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <span className="text-[10px] text-gray-500 block uppercase font-mono">Arbitrage Savings:</span>
              <span className="text-base font-black text-emerald-700 font-mono">Save ₹11,001 (73% Off)</span>
            </div>
            <button
              onClick={onOpenCheckout}
              className="px-5 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs shadow-md transition-all"
            >
              Claim for ₹3,999 →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
