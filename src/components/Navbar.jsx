import React, { useState } from 'react';
import { FoxxyLogo, CRAcademyBadge } from './FoxxyLogoSVG';
import { Menu, X, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function Navbar({ onOpenCheckout, claimedSeats = 89 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const remainingSeats = Math.max(1, APP_CONFIG.TOTAL_SEATS - claimedSeats);

  const scrollToCheckout = (e) => {
    e.preventDefault();
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      const el = document.getElementById('checkout');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full shadow-sm">
      {/* 1. Urgency Top Ticker (Replaced "COHORT ALERT" with "SPECIAL OFFER") */}
      <div className="bg-[#0A66C2] px-3 py-2 text-xs sm:text-sm text-white font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="font-semibold text-yellow-300 flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 fill-current" />
              SPECIAL OFFER:
            </span>
            <span className="hidden sm:inline">
              1 Month LinkedIn Sales Navigator Advanced (Worth ₹15,000) FREE with the Toolkit —
            </span>
            <span className="font-bold underline decoration-yellow-300 underline-offset-2">
              Only {remainingSeats} of {APP_CONFIG.TOTAL_SEATS} Sponsored Seats Left!
            </span>
          </div>

          <a
            href="#checkout"
            onClick={scrollToCheckout}
            className="flex-shrink-0 text-[11px] sm:text-xs font-bold text-[#0A66C2] bg-yellow-300 hover:bg-yellow-200 px-3 py-1 rounded-full transition-all flex items-center gap-1 shadow-sm"
          >
            Claim Free Seat <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean Co-Brands, zero empty space) */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 lg:px-8 py-2.5 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Co-Brands: Guaranteed visible together with no awkward gaps */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#" className="flex items-center hover:opacity-95 transition-opacity">
              <FoxxyLogo className="h-8 sm:h-9" />
            </a>
            <span className="text-gray-400 font-light text-lg select-none">×</span>
            <a href="#coach" className="flex items-center hover:opacity-95 transition-opacity">
              <CRAcademyBadge className="h-7 sm:h-8" />
            </a>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-semibold text-gray-600">
            <a href="#the-math" className="hover:text-[#0A66C2] transition-colors">
              The Math (Save ₹11,001)
            </a>
            <a href="#whats-inside" className="hover:text-[#0A66C2] transition-colors">
              What's Inside
            </a>
            <a href="#activation" className="hover:text-[#0A66C2] transition-colors">
              How It Works
            </a>
            <a href="#faq" className="hover:text-[#0A66C2] transition-colors">
              FAQ
            </a>
          </div>

          {/* Right: Live Remaining Seats + CTA Button */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-medium text-[#0A66C2]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available Seats:</span>
              <strong className="font-mono">{remainingSeats} Left</strong>
            </div>

            <button
              onClick={scrollToCheckout}
              className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 shadow-sm hover:shadow"
            >
              <span>Claim Seat</span>
              <span className="font-mono text-yellow-300">₹3,999</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-900 rounded-lg border border-gray-200"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200 flex flex-col gap-2 text-sm font-medium text-gray-700 px-2 animate-fadeIn">
            <a href="#the-math" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#0A66C2]">
              The Math (Save ₹11,001)
            </a>
            <a href="#whats-inside" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#0A66C2]">
              What's Inside
            </a>
            <a href="#activation" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#0A66C2]">
              How Activation Works
            </a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-[#0A66C2]">
              FAQ
            </a>
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
              <span>Sponsored Seats Left:</span>
              <span className="font-bold text-[#0A66C2] font-mono">{remainingSeats} of 100</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
