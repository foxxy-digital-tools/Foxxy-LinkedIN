import React, { useState } from 'react';
import { Award, Star, Users, Quote } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function CoachSection({ onOpenCheckout }) {
  const [imgError, setImgError] = useState(false);

  const testimonials = [
    {
      name: "Siddharth Verma",
      role: "Founder & Managing Director",
      company: "GrowthBridge Consulting (Gurugram)",
      headline: "Closed 2 Enterprise Retainers within 21 Days of Seat Activation",
      quote: "Before this toolkit, I paid $159/month for Sales Navigator for four months and literally had zero responses. Coach Ravikant's approach completely rewired how I connect. We identified 18 CXO targets, engaged with genuine insight, and converted 2 high-ticket clients without sounding pushy.",
      result: "₹4.8L New Pipeline",
      tag: "Consulting Founder"
    },
    {
      name: "Pooja Hegde",
      role: "Senior Enterprise SDR",
      company: "CloudScale SaaS (Bengaluru)",
      headline: "From 4% InMail Reply Rates to 31% Qualified Meetings",
      quote: "The 7-Day Accelerator is pure gold for SDRs. The search templates cut out 80% of junk titles, and the outreach framework stops people from ghosting. Having 1 month of Sales Nav Advanced sponsored for free made this the highest ROI ₹3,999 our team has spent.",
      result: "31% Response Rate",
      tag: "SaaS SDR"
    },
    {
      name: "Arjun Nair",
      role: "B2B Performance Agency Founder",
      company: "Nair & Associates (Mumbai)",
      headline: "The Profile Framework Changed My Inbound Inquiries",
      quote: "Most LinkedIn courses give you 50 hours of generic videos you never watch. Coach Ravikant's playbook is tactical, concise, and immediately actionable. I restructured my headline and About section in 30 minutes. Inbound profile views turned into 3 discovery calls in the first week.",
      result: "3 Inbound Calls",
      tag: "Agency Founder"
    }
  ];

  return (
    <section className="py-10 sm:py-20 px-3.5 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-semibold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>AUTHORITY & TRACK RECORD</span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Meet Your Guide: <span className="text-[#0A66C2]">Coach Ravikant</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
          Founder of Foxxy Digital Tools, ScanMySocial & CR Academy. Creator of the battle-tested framework used by 10,000+ B2B professionals.
        </p>
      </div>

      {/* Main Coach Card */}
      <div className="card-elevated rounded-3xl p-6 sm:p-10 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          {/* Coach Photo */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg group">
              {!imgError ? (
                <img
                  src={APP_CONFIG.COACH_RAVIKANT_HEADSHOT_URL}
                  alt="Coach Ravikant"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-tr from-[#241B68] to-[#0A66C2] flex items-center justify-center text-white text-4xl font-black">
                  CR
                </div>
              )}
            </div>

            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span>Foxxy Digital Tools • ScanMySocial • CR Academy</span>
            </div>
          </div>

          {/* Coach Bio */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[#0A66C2] text-xs font-mono font-semibold">
              <span>FOUNDER & B2B GROWTH STRATEGIST</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              "Genuine expertise should not remain invisible or unrewarded."
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Coach Ravikant’s work connects authority-building, personal branding, AI, and practical business systems — helping professionals turn their true expertise into trust and meaningful client opportunities.
            </p>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Instead of chasing vanity metrics, copying algorithm hacks, or burning hours on cold pitches, his approach gives you a grounded, repeatable 30-minute daily rhythm.
            </p>

            {/* The 4 Core Principles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">CONTENT</span>
                <span className="text-[10px] text-gray-500">Show useful expertise</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">LEADS</span>
                <span className="text-[10px] text-gray-500">Attract relevant buyers</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">INFLUENCE</span>
                <span className="text-[10px] text-gray-500">Build trust through value</span>
              </div>
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">CLIENTS</span>
                <span className="text-[10px] text-gray-500">Create real opportunities</span>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
              <span className="flex items-center gap-1.5 text-gray-600">
                <Users className="w-4 h-4 text-[#0A66C2]" />
                <span>10,000+ Professionals & Founders Trained</span>
              </span>
              <span className="font-mono text-[#0A66C2] font-semibold">
                Foundation Edition 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
              What B2B Practitioners Say
            </h3>
            <p className="text-xs text-gray-500">
              Real results from consultants, founders, and SDRs who implemented the daily routine.
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div
              key={idx}
              className="card-elevated rounded-2xl p-6 flex flex-col justify-between hover:border-blue-200 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0A66C2] bg-blue-50 px-2 py-0.5 rounded">
                    {test.tag}
                  </span>
                  <span className="text-xs font-bold text-green-600 font-mono">
                    {test.result}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-gray-900 mb-2 leading-snug">
                  "{test.headline}"
                </h4>

                <p className="text-xs text-gray-500 leading-relaxed italic mb-4">
                  "{test.quote}"
                </p>
              </div>

              <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h5 className="text-xs font-bold text-gray-900">{test.name}</h5>
                  <p className="text-[10px] text-gray-500">{test.role}</p>
                  <p className="text-[9px] text-gray-400">{test.company}</p>
                </div>
                <Quote className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
