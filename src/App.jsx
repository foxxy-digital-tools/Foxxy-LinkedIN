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
        {/* 2. Elevated Executive Hero Section (Direct-Response Mobile + Desktop Grid) */}
        <section className="relative pt-6 pb-10 sm:pt-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-dot-pattern">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            {/* Left Column (Desktop) / Top Flow (Mobile) */}
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              {/* Category & Social Proof Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-[11px] sm:text-xs text-[#0A66C2] font-semibold">
                <span className="flex h-2 w-2 relative flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0A66C2]"></span>
                </span>
                <span>Battle-Tested by 10,000+ B2B Founders & SDRs</span>
              </div>

              {/* H1 Headline — Clean, punchy 2 lines, zero awkward wrap */}
              <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] font-black text-gray-900 tracking-tight leading-[1.14]">
                Turn LinkedIn Into a <br className="hidden sm:inline" />
                <span className="text-[#0A66C2]">High-Value Lead Generation System.</span>
              </h1>

              {/* Subheadline — Direct Value Hook */}
              <p className="text-sm sm:text-lg text-gray-600 leading-relaxed max-w-lg">
                Get Coach Ravikant’s complete Growth Toolkit for <strong>₹3,999</strong> — and receive <strong>1 Month of LinkedIn Sales Navigator Advanced (Worth ₹15,000)</strong> 100% FREE.
              </p>

              {/* MOBILE-ONLY TANGIBLE PROOF CARD: Shown directly above CTA on phones */}
              <div className="lg:hidden pt-0.5">
                <HeroModeSwitcher onOpenCheckout={() => setIsCheckoutModalOpen(true)} isMobileCompact={true} />
              </div>

              {/* Minimalist Action Stack: CTA Button + Attached Price Anchor */}
              <div className="pt-1 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
                  <button
                    onClick={() => setIsCheckoutModalOpen(true)}
                    className="w-full sm:w-auto flex-shrink-0 whitespace-nowrap px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-extrabold text-sm sm:text-base tracking-tight shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.99]"
                  >
                    <span>Claim Toolkit + Free 1-Month Seat</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-3 rounded-xl bg-gray-50 border border-gray-200 text-xs font-mono">
                    <span className="text-gray-400 line-through">₹15,000</span>
                    <span className="text-base font-black text-[#0A66C2]">₹3,999</span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                      Save 73%
                    </span>
                  </div>
                </div>

                {/* Scarcity & Micro-Trust Row */}
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-gray-500 pt-0.5">
                  <span className="inline-flex items-center gap-1 font-semibold text-gray-700">
                    <Lock className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Zero Password Required</span>
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-gray-700">
                    <Zap className="w-3.5 h-3.5 text-[#0A66C2] flex-shrink-0" />
                    <span>Instant Digital Access</span>
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="inline-flex items-center gap-1 font-mono font-bold text-[#0A66C2] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Only {remainingSeats} Seats Left
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Switcher on Desktop Only (lg:block) */}
            <div className="hidden lg:block lg:col-span-6">
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

      {/* 10. Footer Section with bottom padding for mobile sticky bar */}
      <div className="pb-20 md:pb-0">
        <FooterSection />
      </div>

      {/* High-Converting Sticky Bottom Bar for Mobile Viewports (md:hidden) with iOS Safe-Area */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2.5 pb-[max(10px,env(safe-area-inset-bottom))] flex items-center justify-between shadow-2xl animate-fadeIn">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-black text-[#0A66C2] font-mono">₹3,999</span>
            <span className="text-[10px] font-mono line-through text-gray-400">₹15,000</span>
          </div>
          <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            1-Mo Seat FREE • Save 73%
          </span>
        </div>

        <button
          onClick={() => setIsCheckoutModalOpen(true)}
          className="flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5 cursor-pointer active:scale-95"
        >
          <span>Claim Free Seat</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

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
