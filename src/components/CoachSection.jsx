import React, { useState, useEffect } from 'react';
import { Award, Star, Users, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function CoachSection({ onOpenCheckout }) {
  const [imgError, setImgError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

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
    },
    {
      name: "Neha Khurana",
      role: "VP of Strategic Partnerships",
      company: "FinScale Technologies (Delhi NCR)",
      headline: "Booked 14 CXO Conversations in 3 Weeks Without Cold Calling",
      quote: "Our team had struggled to break through enterprise procurement gates for quarters. Coach Ravikant’s relationship-first playbook and account-mapping templates opened direct dialogues with 14 CFOs and CTOs. The clarity of the positioning exercises alone was game-changing.",
      result: "14 CXO Meetings",
      tag: "Enterprise Tech"
    },
    {
      name: "Rohan Kulkarni",
      role: "Principal Strategy Consultant",
      company: "Apex Strategy Group (Pune)",
      headline: "Landed a ₹85,000/Month Retainer on Day 16",
      quote: "I used to hesitate posting or reaching out because I didn't want to look like another spammy lead gen guy. This framework gave me the exact non-salesy engagement formula. A prospect I nurtured using the 30-minute daily rhythm signed an ₹85k monthly retainer within 16 days.",
      result: "₹85k/mo Retainer",
      tag: "Advisory Consultant"
    },
    {
      name: "Ananya Sen",
      role: "Executive Coach & Keynote Speaker",
      company: "Zenith Leadership (Hyderabad)",
      headline: "Overwhelmed by Noise Until I Followed This 30-Min Daily Rhythm",
      quote: "I was spending 2 hours a day randomly commenting and scrolling with zero business results. Following the 30-minute daily checklist completely streamlined my routine. My post engagement jumped 4x and I closed 7 high-value executive coaching packages in under 45 days.",
      result: "7 High-Ticket Deals",
      tag: "Executive Coach"
    },
    {
      name: "Deepak Mehra",
      role: "Head of Business Development",
      company: "LogiTech Global (Chennai)",
      headline: "Built a 40-Account Tier-1 Pipeline in Sales Navigator",
      quote: "Getting the sponsored Sales Navigator seat alongside the exact search filters and boolean templates was incredible. We stopped wasting InMails on wrong personas. In month one, our SDR pipeline generated 40 qualified enterprise opportunities.",
      result: "40 Tier-1 Leads",
      tag: "B2B Sales Leader"
    }
  ];

  // Dynamically adapt visible cards to screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  // Keep index within bounds on screen resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  // Smooth auto-slide every 4.5 seconds (paused on hover or touch)
  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    setIsPaused(false);
    if (touchStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 45) {
      handlePrev();
    } else if (deltaX < -45) {
      handleNext();
    }
    setTouchStartX(null);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-semibold mb-3">
          <Award className="w-3.5 h-3.5" />
          <span>AUTHORITY & TRACK RECORD</span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Meet Your Guide: <span className="text-[#0A66C2]">Coach Ravikant</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-lg text-gray-500 leading-relaxed">
          Founder of Foxxy Digital Tools, ScanMySocial & CR Academy. Creator of the battle-tested framework used by 10,000+ B2B professionals.
        </p>
      </div>

      {/* Main Coach Card */}
      <div className="card-elevated rounded-2xl sm:rounded-3xl p-4 sm:p-10 mb-10 sm:mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-center">
          {/* Coach Photo */}
          <div className="lg:col-span-5 flex flex-col items-center text-center">
            <div className="relative w-44 h-44 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg group">
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

            <div className="mt-3 sm:mt-4 flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <span className="text-[11px] sm:text-xs">Foxxy Digital Tools • ScanMySocial • CR Academy</span>
            </div>
          </div>

          {/* Coach Bio */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-[#0A66C2] text-xs font-mono font-semibold">
              <span>FOUNDER & B2B GROWTH STRATEGIST</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
              "Genuine expertise should not remain invisible or unrewarded."
            </h3>

            <p className="text-xs sm:text-base text-gray-600 leading-relaxed">
              Coach Ravikant’s work connects authority-building, personal branding, AI, and practical business systems — helping professionals turn their true expertise into trust and meaningful client opportunities.
            </p>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
              Instead of chasing vanity metrics, copying algorithm hacks, or burning hours on cold pitches, his approach gives you a grounded, repeatable 30-minute daily rhythm.
            </p>

            {/* The 4 Core Principles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2">
              <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">CONTENT</span>
                <span className="text-[10px] text-gray-500">Show useful expertise</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">LEADS</span>
                <span className="text-[10px] text-gray-500">Attract relevant buyers</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">INFLUENCE</span>
                <span className="text-[10px] text-gray-500">Build trust through value</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <span className="text-xs font-bold text-[#0A66C2] block font-mono">CLIENTS</span>
                <span className="text-[10px] text-gray-500">Create real opportunities</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-xs text-gray-500 border-t border-gray-100">
              <span className="flex items-center gap-1.5 text-gray-600">
                <Users className="w-4 h-4 text-[#0A66C2] flex-shrink-0" />
                <span>10,000+ Professionals & Founders Trained</span>
              </span>
              <span className="font-mono text-[#0A66C2] font-semibold text-[11px] sm:text-xs">
                Foundation Edition 2026
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof Animated Carousel */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900">
                What B2B Practitioners Say
              </h3>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-blue-50 text-[#0A66C2] font-semibold border border-blue-100">
                {testimonials.length} Reviews
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Real results from consultants, founders, and SDRs who implemented the daily routine.
            </p>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <div className="flex items-center gap-1.5 text-amber-400 bg-amber-50/60 px-2.5 py-1 rounded-full border border-amber-100">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] font-bold text-gray-800 font-mono">5.0 / 5.0</span>
            </div>

            {/* Slider Navigation Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-[#0A66C2] hover:text-[#0A66C2] text-gray-600 flex items-center justify-center shadow-xs transition-colors duration-200 active:scale-95"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-8 h-8 rounded-full bg-white border border-gray-200 hover:border-[#0A66C2] hover:text-[#0A66C2] text-gray-600 flex items-center justify-center shadow-xs transition-colors duration-200 active:scale-95"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Animated Carousel Track */}
        <div
          className="relative overflow-hidden -mx-2 px-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out py-2 items-stretch"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                style={{ width: `${100 / visibleCards}%` }}
                className="flex-shrink-0 px-2 sm:px-3 flex"
              >
                <div className="card-elevated rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-blue-200 transition-all duration-300 w-full border border-gray-100 bg-white shadow-xs hover:shadow-md">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-100">
                      <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0A66C2] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100/60">
                        {test.tag}
                      </span>
                      <span className="text-xs font-bold text-green-600 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        {test.result}
                      </span>
                    </div>

                    <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-snug">
                      "{test.headline}"
                    </h4>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed italic mb-4">
                      "{test.quote}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-gray-900">{test.name}</h5>
                      <p className="text-[11px] text-gray-500">{test.role}</p>
                      <p className="text-[10px] text-gray-400 font-medium">{test.company}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-50/60 flex items-center justify-center flex-shrink-0 border border-blue-100/60">
                      <Quote className="w-4 h-4 text-[#0A66C2]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Indicators / Controls */}
        <div className="flex flex-col items-center justify-center gap-2 mt-5">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === dotIdx
                    ? 'w-7 h-2 bg-[#0A66C2]'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
          <p className="text-[11px] text-gray-400 flex items-center gap-2">
            <span>← Swipe or use arrows to view all {testimonials.length} reviews →</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="hidden sm:inline text-gray-400">Autoplay pauses on hover</span>
          </p>
        </div>
      </div>
    </section>
  );
}
