import React, { useState } from 'react';
import { Compass, CheckCircle2, Calendar, ArrowRight, Zap, Target, Filter } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function AcceleratorStepperSection({ onOpenCheckout }) {
  const [activeTab, setActiveTab] = useState(0);

  const daysData = [
    {
      tabLabel: "Days 01–02",
      title: "Find Your Ideal Buyers",
      subtitle: "Audience Definition & Search Setup",
      goal: "Stop searching randomly. Define your exact ideal customer profile and build targeted lead searches that consistently find decision-makers worth knowing.",
      points: [
        "Create a laser-focused 1-line ideal buyer description",
        "Build and save precision lead searches with the right filters",
        "Verify search quality before reaching out to anyone"
      ]
    },
    {
      tabLabel: "Days 03–04",
      title: "Save, Study & Engage",
      subtitle: "List Building & Contextual Outreach",
      goal: "Turn your search into an actionable shortlist of high-intent prospects. Learn who these people are and engage thoughtfully before asking for anything.",
      points: [
        "Curate a focused 10-lead high-priority shortlist",
        "Set up lead alerts to track key company movements",
        "Leave comments that earn attention and build familiarity naturally"
      ]
    },
    {
      tabLabel: "Days 05–06",
      title: "Signals & Value Sharing",
      subtitle: "Advanced Features & Smart Outreach",
      goal: "Leverage Sales Navigator Advanced's powerful intelligence tools to spot real buying intent and share value respectfully.",
      points: [
        "Monitor Buyer Intent signals and leadership change alerts",
        "Use Smart Links to share resources and track engagement",
        "Use permission-first messaging that gets replies instead of being ignored"
      ]
    },
    {
      tabLabel: "Day 07",
      title: "Lock In the Daily Habit",
      subtitle: "The 30-Minute Sales Nav Routine",
      goal: "Consolidate everything into a simple, sustainable 30-minute daily rhythm that keeps your pipeline moving without burning hours on LinkedIn.",
      points: [
        "Follow a structured 5-part daily prospecting breakdown",
        "Maintain relationship momentum with zero overwhelm",
        "Use the built-in AI research assistant workflow to prepare for conversations"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-semibold mb-3">
          <Compass className="w-3.5 h-3.5" />
          <span>7-DAY IMPLEMENTATION WORKBOOK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Sales Navigator Accelerator Sprint
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
          The companion workbook to your free 1-month Sales Navigator Advanced seat. A step-by-step 7-day sprint from blank software to a repeatable lead engine.
        </p>
      </div>

      {/* Stepper Container */}
      <div className="card-elevated rounded-2xl p-5 sm:p-8">
        {/* Step Tabs with touch scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 sm:pb-4 mb-6 sm:mb-8 border-b border-gray-200 no-scrollbar -mx-1 px-1">
          {daysData.map((day, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex-shrink-0 flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#0A66C2] text-white shadow-sm'
                  : 'bg-gray-50 border border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span>{day.tabLabel}</span>
              <span className="hidden md:inline text-xs font-normal opacity-80">• {day.title}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {daysData[activeTab] && (
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <span className="text-xs font-mono font-bold text-[#0A66C2] uppercase tracking-wider block mb-1">
                SPRINT PHASE {activeTab + 1} OF 4
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {daysData[activeTab].title}
              </h3>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
                {daysData[activeTab].subtitle}
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-gray-600 leading-relaxed max-w-2xl">
                {daysData[activeTab].goal}
              </p>
            </div>

            {/* What you'll achieve */}
            <div className="space-y-2.5 sm:space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block">
                What you'll implement:
              </span>
              {daysData[activeTab].points.map((pt, pIdx) => (
                <div key={pIdx} className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-gray-50 border border-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-[#0A66C2] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-700 font-medium">{pt}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-200">
              <span className="text-xs text-gray-400">
                Full step-by-step instructions, templates & exercises inside the workbook.
              </span>
              <button
                onClick={onOpenCheckout}
                className="self-start sm:self-auto text-xs font-bold text-[#0A66C2] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Claim Toolkit to Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
