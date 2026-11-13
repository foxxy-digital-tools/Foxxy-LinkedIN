import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FoxxyLogo, CRAcademyBadge } from './FoxxyLogoSVG';
import { Download, MessageCircle, CheckCircle, ShieldCheck, ArrowRight, Sparkles, RefreshCw, Lock, Zap, Clock, Check } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function ThankYouView({ orderData, onResetOrder }) {
  useEffect(() => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({ ...defaults, ...opts, particleCount: Math.floor(count * particleRatio) });
    }

    fire(0.25, { spread: 26, startVelocity: 55, colors: ['#0A66C2', '#38BDF8', '#D4FF00'] });
    fire(0.2, { spread: 60, colors: ['#0A66C2', '#ffffff', '#241B68'] });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, colors: ['#0A66C2', '#38BDF8'] });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  const paymentId = orderData?.paymentId || `pay_${Date.now()}`;
  const customerName = orderData?.customer?.fullName || "Valued Executive";
  const customerEmail = orderData?.customer?.email || "your-linkedin-email@domain.com";
  const customerPhone = orderData?.customer?.phone || "+91 9876543210";
  const customerProfileUrl = orderData?.customer?.profileUrl || "https://www.linkedin.com/in/...";

  const rawWhatsAppMessage = `Hi Foxxy Digital Tools Team! I just purchased the LinkedIn Growth Toolkit (₹3,999). Payment ID: ${paymentId}. My LinkedIn Email is: ${customerEmail} and my LinkedIn Profile Link is: ${customerProfileUrl}. Please assist with my 1-Month Sales Navigator Advanced Free Bonus activation!`;
  const whatsappUrl = `https://wa.me/${APP_CONFIG.WHATSAPP_SUPPORT_NUMBER}?text=${encodeURIComponent(rawWhatsAppMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50/70 text-gray-900 flex flex-col">
      {/* 1. Full-Width Top Navigation Bar */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-40 px-4 sm:px-8 lg:px-12 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <FoxxyLogo className="h-8 sm:h-9" />
            <span className="text-gray-300 font-light text-lg sm:text-xl select-none">×</span>
            <CRAcademyBadge className="h-7 sm:h-8" />
          </div>

          <button
            onClick={onResetOrder}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs sm:text-sm font-semibold text-gray-700 transition-all cursor-pointer shadow-xs"
          >
            <RefreshCw className="w-3.5 h-3.5 text-[#0A66C2]" />
            <span>Return to Home</span>
          </button>
        </div>
      </header>

      {/* 2. Full-Width Main Dashboard Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-8 sm:py-12 space-y-8 animate-fade-in-up">
        {/* Celebration Hero Card */}
        <div className="card-elevated rounded-3xl p-6 sm:p-10 text-center space-y-4 bg-white border border-gray-200 shadow-md">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-xs">
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>ORDER CONFIRMED & PAYMENT VERIFIED</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Welcome Aboard, {customerName}!
          </h1>

          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your ₹3,999 payment is complete. Both digital playbooks are ready for instant download below, and your free 1-Month Sales Navigator Advanced seat allocation has been queued for official activation.
          </p>

          {/* Payment Metadata Grid */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left font-mono text-xs max-w-3xl mx-auto">
            <div className="p-2.5 rounded-xl bg-white border border-gray-100">
              <span className="text-gray-400 text-[10px] uppercase block font-semibold">PAYMENT ID:</span>
              <span className="font-bold text-[#0A66C2] truncate block mt-0.5">{paymentId}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-gray-100">
              <span className="text-gray-400 text-[10px] uppercase block font-semibold">LINKEDIN EMAIL:</span>
              <span className="text-gray-900 truncate block mt-0.5">{customerEmail}</span>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-gray-100">
              <span className="text-gray-400 text-[10px] uppercase block font-semibold">AMOUNT PAID:</span>
              <span className="text-emerald-700 font-bold block mt-0.5">{APP_CONFIG.PRICE_FORMATTED} (All Taxes Included)</span>
            </div>
          </div>
        </div>

        {/* 2-Column Full-Width Executive Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (7 Columns): Immediate Action Tasks */}
          <div className="lg:col-span-7 space-y-6">
            {/* Action #1: Instant Digital Delivery */}
            <div className="card-elevated rounded-2xl p-6 sm:p-8 bg-white border border-gray-200 shadow-sm space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div>
                  <span className="text-xs font-mono text-[#0A66C2] font-bold uppercase tracking-wider block">
                    IMMEDIATE ACTION #1: DIGITAL ASSETS
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Download Your Playbooks Instantly
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-mono font-bold">
                  READY NOW
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                Click each button below to download the official PDF playbooks directly to your computer or mobile device.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Playbook 1 */}
                <a
                  href={APP_CONFIG.PLAYBOOK_1_PDF_URL}
                  download="CLIC_LinkedIn_Foundation_Playbook_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-blue-50/50 border-2 border-blue-200 hover:border-[#0A66C2] transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-[#0A66C2] text-[10px] font-mono font-bold uppercase">
                      MASTER GUIDE
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-2.5 group-hover:text-[#0A66C2] transition-colors leading-snug">
                      📘 The LinkedIn Foundation Playbook
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Full 2026 Edition by Coach Ravikant.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs font-bold text-[#0A66C2]">
                    <span className="flex items-center gap-1.5">
                      <Download className="w-4 h-4" /> Download PDF
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>

                {/* Playbook 2 */}
                <a
                  href={APP_CONFIG.PLAYBOOK_2_PDF_URL}
                  download="CLIC_Sales_Navigator_Accelerator_7_Day_Guide.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl bg-emerald-50/50 border-2 border-emerald-200 hover:border-emerald-500 transition-all group flex flex-col justify-between shadow-xs hover:shadow-md"
                >
                  <div>
                    <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold uppercase">
                      ACTION WORKBOOK
                    </span>
                    <h3 className="text-base font-bold text-gray-900 mt-2.5 group-hover:text-emerald-700 transition-colors leading-snug">
                      📗 Sales Navigator Accelerator Workbook
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Your First 7 Days With Sales Navigator.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                    <span className="flex items-center gap-1.5">
                      <Download className="w-4 h-4" /> Download Workbook
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </div>
            </div>

            {/* Action #2: Priority WhatsApp Seat Activation */}
            <div className="card-elevated rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-50/60 via-white to-emerald-50/60 border border-emerald-200 shadow-sm space-y-5">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-mono font-bold">
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>ACTION #2: PRIORITY SEAT DISPATCH</span>
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                  1-Click WhatsApp Seat Activation
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Click the button below to send your pre-filled verification ticket directly to our activation desk. Our team will verify your LinkedIn profile URL and dispatch your official Sales Navigator Advanced invitation link.
                </p>
                <div className="flex items-center gap-2 text-xs text-emerald-700 font-semibold pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Zero-Password Guarantee: We never ask for your LinkedIn login details.</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer group"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Activate Seat on WhatsApp →</span>
              </a>

              <div className="pt-3 border-t border-gray-200">
                <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
                  Pre-Filled WhatsApp Message Preview:
                </span>
                <div className="p-3 rounded-xl bg-white border border-gray-200 text-xs font-mono text-gray-600 leading-relaxed">
                  "{rawWhatsAppMessage}"
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (5 Columns): VIP Seat Pass, Next Steps & Support Desk */}
          <div className="lg:col-span-5 space-y-6">
            {/* VIP Pass Card Preview */}
            <div className="rounded-2xl bg-gradient-to-br from-[#001D40] via-[#0A66C2] to-[#0D47A1] text-white p-5 sm:p-6 shadow-xl relative overflow-hidden border border-white/20 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0A66C2] flex items-center justify-center font-black text-2xl shadow-md flex-shrink-0">
                    in
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-sky-200 font-bold block">
                      EXECUTIVE ALLOCATION TICKET
                    </span>
                    <span className="text-xs font-mono text-emerald-300 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      STATUS: QUEUED FOR ACTIVATION
                    </span>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-[#D4FF00] text-black font-black text-[10px] uppercase shadow-sm font-mono">
                  FREE BONUS
                </span>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-black text-white tracking-tight">
                  LinkedIn Sales Navigator Advanced
                </h4>
                <p className="text-xs text-sky-200/90 mt-1">
                  1-Month official seat sponsored 100% free with your toolkit.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/20 text-xs">
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-xs">
                  <span className="text-sky-200 block text-[9px] uppercase font-mono">Retail Value:</span>
                  <span className="font-bold text-white/80 line-through decoration-red-400 font-mono text-xs">
                    ₹15,000 ($159.99)
                  </span>
                </div>
                <div className="p-2 rounded-lg bg-white/10 backdrop-blur-xs">
                  <span className="text-sky-200 block text-[9px] uppercase font-mono">Your Price:</span>
                  <span className="font-black text-[#D4FF00] font-mono text-xs">
                    ₹0 (FREE BONUS)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] text-emerald-300 font-mono pt-1">
                <ShieldCheck className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                <span>Zero Password Guarantee • Safe Invitation Link</span>
              </div>
            </div>

            {/* Next Steps Checklist Card */}
            <div className="card-elevated rounded-2xl p-6 bg-white border border-gray-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0A66C2]" />
                <span>Next Steps Checklist</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="w-6 h-6 rounded-full bg-[#0A66C2] text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                    1
                  </span>
                  <div>
                    <strong className="text-gray-900 block font-bold">Download both PDF Playbooks above.</strong>
                    <span className="text-gray-500 text-xs">Save them to your desktop or device for easy reference.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="w-6 h-6 rounded-full bg-[#0A66C2] text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                    2
                  </span>
                  <div>
                    <strong className="text-gray-900 block font-bold">Send your WhatsApp verification.</strong>
                    <span className="text-gray-500 text-xs">Our desk verifies your profile and prepares the seat dispatch.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
                  <span className="w-6 h-6 rounded-full bg-[#0A66C2] text-white font-bold flex items-center justify-center text-xs flex-shrink-0">
                    3
                  </span>
                  <div>
                    <strong className="text-gray-900 block font-bold">Accept the official LinkedIn invite.</strong>
                    <span className="text-gray-500 text-xs">Your personal profile upgrades to Sales Navigator Advanced instantly.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Support Desk Card */}
            <div className="card-elevated rounded-2xl p-6 bg-gray-50 border border-gray-200 text-xs space-y-3">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-bold block">
                DIRECT EXECUTIVE SUPPORT DESK
              </span>

              <div className="space-y-2">
                <a
                  href={`https://wa.me/${APP_CONFIG.WHATSAPP_SUPPORT_NUMBER}?text=Hi%20Foxxy%20Team!%20My%20payment%20is%20verified%20(Ref:%20${paymentId}).%20Please%20expedite%20my%20Sales%20Nav%20seat%20invitation.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-white border border-gray-200 flex items-center justify-between hover:border-green-400 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-bold text-gray-900 text-xs block">Foxxy Activation Desk</span>
                      <span className="text-gray-500 text-[11px] font-mono">{APP_CONFIG.WHATSAPP_SUPPORT_FORMATTED}</span>
                    </div>
                  </div>
                  <span className="text-green-600 font-bold text-xs bg-green-50 px-2 py-1 rounded-md">Chat →</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. Full-Width Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-6 text-center text-xs text-gray-400 px-4">
        <p>
          Foxxy Digital Tools × CR Academy (Coach Ravikant) • Secure Payment Reference: <span className="font-mono text-gray-600">{paymentId}</span>
        </p>
      </footer>
    </div>
  );
}
