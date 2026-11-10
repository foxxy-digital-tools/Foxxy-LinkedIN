import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroModeSwitcher } from './components/HeroModeSwitcher';
import { B2BMathSection } from './components/B2BMathSection';
import { PlaybookBentoSection } from './components/PlaybookBentoSection';
import { AcceleratorStepperSection } from './components/AcceleratorStepperSection';
import { ActivationFlowSection } from './components/ActivationFlowSection';
import { CoachSection } from './components/CoachSection';
import { CheckoutSection } from './components/CheckoutSection';
import { CheckoutModal } from './components/CheckoutModal';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { ThankYouView } from './components/ThankYouView';
import { ShieldCheck, ArrowRight, Check, Users, Lock, Zap, Star } from 'lucide-react';
import { APP_CONFIG } from './config';

export function App() {
  const [claimedSeats, setClaimedSeats] = useState(APP_CONFIG.CLAIMED_SEATS_INITIAL);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('status') === 'success') {
      setOrderConfirmation({
        paymentId: params.get('payment_id') || `pay_verified_${Date.now()}`,
        customer: {
          fullName: params.get('name') || "Executive Member",
          email: params.get('email') || "member@domain.com",
          phone: params.get('phone') || "+91 9918991805",
          profileUrl: params.get('profile') || "https://linkedin.com/in/executive"
        },
        amount: APP_CONFIG.PRICE_FORMATTED
      });
    }
  }, []);

  const handlePaymentSuccess = (paymentData) => {
    setOrderConfirmation(paymentData);
    setClaimedSeats((prev) => Math.min(APP_CONFIG.TOTAL_SEATS, prev + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResetOrder = () => {
    setOrderConfirmation(null);
    window.history.replaceState({}, document.title, window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const remainingSeats = Math.max(1, APP_CONFIG.TOTAL_SEATS - claimedSeats);

  if (orderConfirmation) {
    return (
      <ThankYouView
        orderData={orderConfirmation}
        onResetOrder={handleResetOrder}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col relative selection:bg-[#0A66C2] selection:text-white">
      {/* 1. Sticky Urgency Top Bar & Navbar */}
      <Navbar
        onOpenCheckout={() => setIsCheckoutModalOpen(true)}
        claimedSeats={claimedSeats}
      />

      <main className="flex-1 relative z-10">
        {/* 2. Elevated Executive Hero Section */}
        <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-dot-pattern">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Direct-Response Copy & Visual Arbitrage */}
            <div className="lg:col-span-6 space-y-5">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs text-gray-700 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold text-gray-900">Battle-Tested System</span>
                <span className="text-gray-400">•</span>
                <span className="text-gray-600 font-medium">10,000+ B2B Founders, SDRs & Consultants</span>
              </div>

              {/* H1 Headline — Clean, authoritative, full product name */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.14]">
                Turn LinkedIn Into A High-Value Client Engine.
                <span className="block text-[#0A66C2] mt-1 sm:mt-1.5">
                  Get 1 Month Sales Navigator Advanced FREE.
                </span>
              </h1>

              {/* Subheadline — Concise, punchy, zero fluff */}
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                Get Coach Ravikant’s complete Growth Toolkit for <strong>₹3,999</strong> — and receive <strong>1 Month of LinkedIn Sales Navigator Advanced (Worth ₹15,000)</strong> 100% FREE. No password required.
              </p>

              {/* Balanced Compact Arbitrage Value Card */}
              <div className="rounded-2xl bg-gradient-to-br from-blue-50/60 via-white to-sky-50/40 border border-blue-200/80 p-4 sm:p-5 shadow-sm space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-gray-200/80">
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase font-bold tracking-wider block">
                      OFFICIAL RETAIL COST
                    </span>
                    <div className="flex items-baseline gap-1.5 mt-0.5">
                      <span className="text-xl sm:text-2xl font-bold text-gray-400 line-through decoration-red-500 decoration-2 font-mono">
                        ₹15,000
                      </span>
                      <span className="text-xs text-red-500 font-mono font-medium">($159.99/mo)</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono text-[#0A66C2] uppercase font-bold tracking-wider block">
                      YOUR COMPLETE BUNDLE
                    </span>
                    <div className="flex items-baseline gap-1.5 justify-end mt-0.5">
                      <span className="text-2xl sm:text-3xl font-black text-[#0A66C2] font-mono">
                        ₹3,999
                      </span>
                      <span className="text-xs font-semibold text-gray-500">(One-Time)</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-0.5 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-3 py-1 rounded-full">
                    🎉 You Save ₹11,001 Instantly (73% Arbitrage)
                  </span>
                  <span className="text-gray-500 font-medium text-[11px]">
                    Zero Auto-Debit • All Taxes Included
                  </span>
                </div>
              </div>

              {/* Primary Action Button & Remaining Seats Counter */}
              <div className="space-y-3 pt-1">
                <button
                  onClick={() => setIsCheckoutModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-extrabold text-base sm:text-lg tracking-tight shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Claim Toolkit + Free 1-Month Seat (₹3,999)</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Live Seats Remaining Progress */}
                <div className="max-w-md space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500 font-medium">Sponsored Seat Allocation:</span>
                    <span className="font-mono font-bold text-gray-900">
                      {claimedSeats} of 100 Claimed ({remainingSeats} Left)
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-100 border border-gray-200 overflow-hidden">
                    <div
                      className="h-full bg-[#0A66C2] rounded-full transition-all duration-500"
                      style={{ width: `${(claimedSeats / APP_CONFIG.TOTAL_SEATS) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Micro-Trust Row */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-gray-500 border-t border-gray-200">
                <span className="flex items-center gap-1.5 text-gray-700">
                  <Lock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Zero Password Required</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-gray-700">
                  <Zap className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>Instant PDF Downloads</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-gray-700">
                  <Users className="w-3.5 h-3.5 text-gray-600" />
                  <span>Strictly 100 Seats</span>
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Switcher (VIP Card Stack / Video Player) */}
            <div className="lg:col-span-6">
              <HeroModeSwitcher onOpenCheckout={() => setIsCheckoutModalOpen(true)} />
            </div>
          </div>
        </section>

        {/* 3. Section 2: The B2B Math Comparison & Interactive ROI Calculator */}
        <B2BMathSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 4. Section 3: What's Inside — The Foundation Playbook Overview */}
        <PlaybookBentoSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 5. Section 4: 7-Day Sprint — Sales Nav Accelerator Overview */}
        <AcceleratorStepperSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 6. Section 5: How Activation Works (4 Clean Visual Steps) */}
        <ActivationFlowSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 7. Section 6: Coach Ravikant Authority & Social Proof */}
        <CoachSection onOpenCheckout={() => setIsCheckoutModalOpen(true)} />

        {/* 8. Section 7: Embedded Secure Checkout Section */}
        <CheckoutSection onPaymentSuccess={handlePaymentSuccess} />

        {/* 9. Section 8: Objection-Busting FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 10. Footer Section */}
      <FooterSection />

      {/* Streamlined, Easy-to-Dismiss Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
}

export default App;
