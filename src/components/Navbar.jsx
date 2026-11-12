import React, { useState, useEffect } from 'react';
import { FoxxyLogo, CRAcademyBadge } from './FoxxyLogoSVG';
import { Menu, X, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function Navbar({ onOpenCheckout, claimedSeats = 89 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const remainingSeats = Math.max(1, APP_CONFIG.TOTAL_SEATS - claimedSeats);

  const navItems = [
    { id: 'the-math', label: 'The Math' },
    { id: 'whats-inside', label: "What's Inside" },
    { id: 'activation', label: 'How It Works' },
    { id: 'faq', label: 'FAQ' },
  ];

  // Scrollspy: dynamically set active section as the user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      const mathEl = document.getElementById('the-math');
      const insideEl = document.getElementById('whats-inside');
      const activationEl = document.getElementById('activation');
      const faqEl = document.getElementById('faq');

      if (!mathEl) return;

      const mathTop = mathEl.offsetTop;
      const insideTop = insideEl ? insideEl.offsetTop : mathTop + 1000;
      const activationTop = activationEl ? activationEl.offsetTop : insideTop + 1000;
      const faqTop = faqEl ? faqEl.offsetTop : activationTop + 1000;

      // Bottom of page check (activate FAQ if near bottom)
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 150) {
        setActiveSection('faq');
        return;
      }

      if (scrollPosition < mathTop) {
        setActiveSection('');
      } else if (scrollPosition >= mathTop && scrollPosition < insideTop) {
        setActiveSection('the-math');
      } else if (scrollPosition >= insideTop && scrollPosition < activationTop) {
        setActiveSection('whats-inside');
      } else if (scrollPosition >= activationTop && scrollPosition < faqTop) {
        setActiveSection('activation');
      } else if (scrollPosition >= faqTop) {
        setActiveSection('faq');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

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
      <div className="bg-[#0A66C2] px-3 sm:px-4 py-2 text-xs sm:text-sm text-white font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden text-ellipsis whitespace-nowrap min-w-0">
            <span className="flex h-2 w-2 relative flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            <span className="font-semibold text-red-300 flex items-center gap-1 flex-shrink-0">
              <Zap className="w-3.5 h-3.5 fill-current text-red-400" />
              <span className="hidden xs:inline">SPECIAL OFFER:</span>
              <span className="xs:hidden">OFFER:</span>
            </span>
            <span className="hidden sm:inline">
              1 Month LinkedIn Sales Navigator Advanced (Worth ₹15,000) FREE with the Toolkit —
            </span>
            <span className="font-bold underline decoration-red-400 underline-offset-2 truncate">
              Only {remainingSeats} of {APP_CONFIG.TOTAL_SEATS} Sponsored Seats Left!
            </span>
          </div>

          <a
            href="#checkout"
            onClick={scrollToCheckout}
            className="flex-shrink-0 text-[11px] sm:text-xs font-bold text-white bg-red-600 hover:bg-red-500 px-3 py-1.5 sm:px-3.5 sm:py-1 rounded-full transition-all flex items-center justify-center gap-1 shadow-sm whitespace-nowrap min-h-[34px]"
          >
            <span>Claim Free Seat</span>
            <ArrowRight className="w-3 h-3 flex-shrink-0" />
          </a>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Clean Co-Brands, zero empty space) */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          {/* Co-Brands: Scaled for mobile viewports */}
          <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
            <a href="#" className="flex items-center py-1 hover:opacity-95 transition-opacity">
              <FoxxyLogo className="h-7 sm:h-9" />
            </a>
            <span className="text-gray-400 font-light text-base sm:text-lg select-none">×</span>
            <a href="#coach" className="flex items-center py-1 hover:opacity-95 transition-opacity">
              <CRAcademyBadge className="h-6 sm:h-8" />
            </a>
          </div>

          {/* Center: Navigation Links with Active State Tracking */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`relative py-1.5 font-bold transition-all ${
                    isActive
                      ? 'text-[#0A66C2]'
                      : 'text-gray-600 hover:text-[#0A66C2]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-[#0A66C2] rounded-full animate-fadeIn" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: Live Remaining Seats + CTA Button */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-medium text-[#0A66C2]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available Seats:</span>
              <strong className="font-mono">{remainingSeats} Left</strong>
            </div>

            <button
              onClick={scrollToCheckout}
              className="min-h-[44px] px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-1 sm:gap-1.5 shadow-sm hover:shadow flex-shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span className="hidden xs:inline">Claim Seat</span>
              <span className="font-mono text-red-300">₹3,999</span>
              <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" />
            </button>

            {/* Mobile Menu Button - 44px touch target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center p-2 text-gray-600 hover:text-gray-900 rounded-xl border border-gray-200 flex-shrink-0 cursor-pointer active:bg-gray-100"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with Active States */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-gray-200 flex flex-col gap-1 text-sm font-medium px-1 animate-fadeIn">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, item.id);
                  }}
                  className={`min-h-[44px] py-2.5 px-3.5 rounded-xl font-bold transition-colors flex items-center ${
                    isActive
                      ? 'bg-blue-50 text-[#0A66C2]'
                      : 'text-gray-700 hover:text-[#0A66C2] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-2.5 pb-1 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 px-2">
              <span>Sponsored Seats Left:</span>
              <span className="font-bold text-[#0A66C2] font-mono">{remainingSeats} of {APP_CONFIG.TOTAL_SEATS}</span>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
