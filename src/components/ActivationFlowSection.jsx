import React from 'react';
import { ShieldCheck, Download, Mail, Smartphone, ArrowRight, Lock, CheckCircle, Sparkles, Check } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function ActivationFlowSection({ onOpenCheckout }) {
  const steps = [
    {
      num: "01",
      title: "Order Verification",
      subtitle: "Enter Email & LinkedIn URL",
      icon: Smartphone,
      description: "Provide your name, WhatsApp number, LinkedIn email, and LinkedIn profile URL on our secure 256-bit SSL form.",
      tag: "Instant Verification"
    },
    {
      num: "02",
      title: "Instant Digital Delivery",
      subtitle: "Download Both Playbooks",
      icon: Download,
      description: "The second your ₹3,999 payment is complete, you get instant 1-click access to download both official PDF playbooks.",
      tag: "Immediate Download"
    },
    {
      num: "03",
      title: "Team-Assisted Dispatch",
      subtitle: "Official Invitation Sent to You",
      icon: Mail,
      description: "Within business hours, our activation team generates your official Sales Navigator Advanced seat invitation and sends it via email & WhatsApp.",
      tag: "Direct to Your Email"
    },
    {
      num: "04",
      title: "Zero-Password Activation",
      subtitle: "Activate on Your Own Profile",
      icon: ShieldCheck,
      description: "Click the official invitation link to upgrade your existing LinkedIn account. We NEVER ask for your password — 100% safe & official.",
      tag: "100% Safe Guarantee"
    }
  ];

  return (
    <section id="activation" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-semibold mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>ZERO-PASSWORD SECURITY GUARANTEE</span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          How Your <span className="text-[#0A66C2]">Free ₹15,000 Seat</span> Is Activated
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-500 leading-relaxed">
          Transparent, official, and team-assisted. We never ask for your LinkedIn login credentials or sensitive passwords under any circumstances.
        </p>
      </div>

      {/* 1. DEDICATED MOBILE VIEW (block md:hidden): Clean Sequential Flow */}
      <div className="block md:hidden mb-8 space-y-3.5">
        {steps.map((st) => {
          const Icon = st.icon;
          return (
            <div
              key={st.num}
              className="card-elevated rounded-2xl p-4 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0A66C2] font-mono font-extrabold text-xs">
                    {st.num}
                  </span>
                  <span className="text-xs font-bold text-gray-800">{st.title}</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                  {st.tag}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{st.description}</p>
            </div>
          );
        })}
      </div>

      {/* 2. PROTECTED DESKTOP VIEW (hidden md:grid): Preserved Exact 4-Column Grid */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {steps.map((st) => {
          const Icon = st.icon;
          return (
            <div
              key={st.num}
              className="card-elevated rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-[#0A66C2]/40 transition-all duration-200 hover:-translate-y-1 relative group"
            >
              <div>
                {/* Unified Step Header: Icon + Number + Title in one balanced flow */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#0A66C2] font-mono font-extrabold text-sm shadow-sm group-hover:bg-[#0A66C2] group-hover:text-white transition-colors">
                      {st.num}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 block font-bold">
                        PHASE {st.num}
                      </span>
                      <span className="text-xs font-bold text-gray-700">
                        {st.tag}
                      </span>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-gray-50 text-[#0A66C2]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base font-extrabold text-gray-900 mb-1 leading-snug">
                  {st.title}
                </h3>
                <h4 className="text-xs font-semibold text-[#0A66C2] mb-3">
                  {st.subtitle}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {st.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                <span className="font-mono text-[11px]">Step {st.num} of 04</span>
                <span className="flex items-center gap-1 text-emerald-600 font-semibold text-xs">
                  <Check className="w-3.5 h-3.5" /> Ready
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Security Callout Box */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-emerald-50 border border-emerald-300 p-4 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-sm">
        <div className="flex items-start gap-3.5 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 flex-shrink-0 shadow-sm mt-0.5 sm:mt-0">
            <Lock className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <h4 className="text-sm sm:text-lg font-bold text-gray-900 flex flex-wrap items-center gap-2">
              <span>Zero-Password Security Guarantee</span>
              <span className="text-[10px] sm:text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                100% Official
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed max-w-2xl">
              "Never share your LinkedIn password with anyone. Our team activates your 1-Month Sales Navigator Advanced bonus exclusively via your registered email & profile URL. Completely safe and compliant with LinkedIn's official policies."
            </p>
          </div>
        </div>

        <button
          onClick={onOpenCheckout}
          className="w-full md:w-auto flex-shrink-0 whitespace-nowrap min-h-[48px] px-5 sm:px-6 py-3.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Claim Free Seat for ₹3,999</span>
          <ArrowRight className="w-4 h-4 flex-shrink-0" />
        </button>
      </div>
    </section>
  );
}
