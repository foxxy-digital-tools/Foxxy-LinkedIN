import React, { useState, useEffect } from 'react';
import { TrendingUp, Sparkles, Check, X, ShieldCheck, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function MotionGraphicArbitrage() {
  const directCost = 15000;
  const bundleCost = 3999;
  const totalSavings = directCost - bundleCost;
  const percentageSaved = Math.round((totalSavings / directCost) * 100);

  const [animatedValue, setAnimatedValue] = useState(totalSavings);

  useEffect(() => {
    let start = 0;
    const end = totalSavings;
    const duration = 800;
    const stepTime = 16;
    const stepValue = (end - start) / (duration / stepTime);

    const timer = setInterval(() => {
      start += stepValue;
      if (start >= end) {
        setAnimatedValue(end);
        clearInterval(timer);
      } else {
        setAnimatedValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [totalSavings]);

  return (
    <div className="card-elevated rounded-2xl p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-5 border-b border-gray-200">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-medium mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LIVE VALUE COMPARISON</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900">
            The ₹15,000 vs. ₹3,999 Reality Check
          </h3>
        </div>
      </div>

      {/* Two-Column Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        {/* Option A */}
        <div className="rounded-xl p-5 bg-red-50/60 border border-red-200 flex flex-col justify-between">
          <div className="absolute-tag">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-[10px] font-mono uppercase font-bold tracking-wider rounded-md mb-3">
              Direct LinkedIn Billing
            </span>
          </div>

          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-gray-400 line-through decoration-red-400 decoration-2">
                ₹15,000
              </span>
              <span className="text-xs font-mono text-red-500">($159.99/mo)</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              Sales Navigator Advanced subscription alone. No playbooks, no search templates, no system.
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-red-200/60 text-sm text-gray-500">
            <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-400 flex-shrink-0" /><span>No lead-finding system</span></div>
            <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-400 flex-shrink-0" /><span>No outreach frameworks</span></div>
            <div className="flex items-center gap-2"><X className="w-4 h-4 text-red-400 flex-shrink-0" /><span>Recurring monthly charge</span></div>
          </div>
        </div>

        {/* Option B */}
        <div className="rounded-xl p-5 bg-white border-2 border-[#0A66C2] flex flex-col justify-between shadow-md">
          <div>
            <span className="inline-block px-3 py-1 bg-[#0A66C2] text-white text-[10px] font-mono uppercase font-bold tracking-wider rounded-md mb-3">
              CR Academy Toolkit Bundle
            </span>

            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-[#0A66C2]">
                {APP_CONFIG.PRICE_FORMATTED}
              </span>
              <span className="text-xs font-medium text-gray-500">(One-Time)</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Complete LinkedIn Growth Toolkit + 1 Month Sales Navigator Advanced seat included free.
            </p>
          </div>

          <div className="space-y-2 pt-3 border-t border-blue-100 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0A66C2] flex-shrink-0" /><span>1-Month Sales Nav Advanced <strong className="text-[#0A66C2]">FREE</strong></span></div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0A66C2] flex-shrink-0" /><span>LinkedIn Foundation Playbook</span></div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0A66C2] flex-shrink-0" /><span>7-Day Sales Nav Accelerator</span></div>
            <div className="flex items-center gap-2"><Check className="w-4 h-4 text-[#0A66C2] flex-shrink-0" /><span>Zero-Password Safe Activation</span></div>
          </div>
        </div>
      </div>

      {/* Savings Bar */}
      <div className="rounded-xl bg-green-50 border border-green-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-gray-500 font-medium block">Instant Software Savings</span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 flex items-center gap-2">
              <span>You save</span>
              <span className="text-green-600 font-mono">₹{animatedValue.toLocaleString('en-IN')}</span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
                {percentageSaved}% Off
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          <span>No auto-renewal • One-time payment</span>
        </div>
      </div>
    </div>
  );
}
