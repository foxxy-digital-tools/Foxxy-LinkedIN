import React from 'react';
import { BookOpen, UserCheck, Layers, MessageSquare, Target, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function PlaybookBentoSection({ onOpenCheckout }) {
  const highlights = [
    {
      icon: Layers,
      title: "LinkedIn Network Strategy",
      description: "Build a focused network of the right people — not just a big number. Learn which connections actually drive pipeline.",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200"
    },
    {
      icon: UserCheck,
      title: "Profile That Converts",
      description: "Turn your LinkedIn profile from a résumé dump into a trust-building asset that makes the right visitors reach out to you.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      border: "border-emerald-200"
    },
    {
      icon: BookOpen,
      title: "Authority Content System",
      description: "A practical content framework that positions you as a trusted expert — without chasing trends or algorithm hacks.",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "border-purple-200"
    },
    {
      icon: MessageSquare,
      title: "Genuine Networking Approach",
      description: "Earn real attention with thoughtful engagement and contextual connections — no mass outreach or spam scripts.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      border: "border-cyan-200"
    },
    {
      icon: Target,
      title: "Lead-to-Opportunity Conversion",
      description: "Turn warm connections into real business conversations using a respectful, permission-based approach that doesn't burn bridges.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      border: "border-amber-200"
    },
    {
      icon: Clock,
      title: "30-Minute Daily Discipline",
      description: "Lock everything into a structured daily routine that compounds your results week after week — no more than 30 minutes a day.",
      color: "text-rose-600",
      bg: "bg-rose-50",
      border: "border-rose-200"
    }
  ];

  return (
    <section id="whats-inside" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-semibold mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>THE LINKEDIN GROWTH PLAYBOOK</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          A Complete System — Not Just Software
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
          Created by Coach Ravikant and used by 10,000+ professionals. The playbook covers everything you need to turn LinkedIn into a repeatable source of qualified B2B conversations.
        </p>
      </div>

      {/* 6-Card Outcome Grid — No leaked content, just outcomes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`rounded-2xl card-elevated p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
            >
              <div>
                <div className={`w-10 h-10 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Also includes AI prompts teaser */}
      <div className="rounded-2xl bg-gray-50 border border-gray-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#0A66C2] flex items-center justify-center text-white shadow-sm flex-shrink-0">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900">
              Includes Copy-Ready AI Prompts
            </h4>
            <p className="text-sm text-gray-500">
              ChatGPT & Claude prompts built into the playbook so you can accelerate profile writing, content creation, and prospect research.
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCheckout}
          className="w-full sm:w-auto flex-shrink-0 whitespace-nowrap px-6 py-3.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Get Playbook + Free 1-Month Seat</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>
    </section>
  );
}
