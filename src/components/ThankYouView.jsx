import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { FoxxyLogo, CRAcademyBadge } from './FoxxyLogoSVG';
import { Download, MessageCircle, CheckCircle, ShieldCheck, ArrowRight, Sparkles, RefreshCw } from 'lucide-react';
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
  const customerProfileUrl = orderData?.customer?.profileUrl || "https://www.linkedin.com/in/...";

  const rawWhatsAppMessage = `Hi Foxxy Digital Tools Team! I just purchased the LinkedIn Growth Toolkit (₹3,999). Payment ID: ${paymentId}. My LinkedIn Email is: ${customerEmail} and my LinkedIn Profile Link is: ${customerProfileUrl}. Please assist with my 1-Month Sales Navigator Advanced Free Bonus activation!`;
  const whatsappUrl = `https://wa.me/${APP_CONFIG.WHATSAPP_SUPPORT_NUMBER}?text=${encodeURIComponent(rawWhatsAppMessage)}`;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
        {/* Header Branding */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <FoxxyLogo className="h-9" />
            <span className="text-gray-300 font-light text-xl">×</span>
            <CRAcademyBadge className="h-8" />
          </div>
          <button
            onClick={onResetOrder}
            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </button>
        </div>

        {/* Celebration Banner Card */}
        <div className="card-elevated rounded-3xl p-6 sm:p-10 text-center space-y-4">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center shadow-sm">
            <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORDER CONFIRMED & PAYMENT VERIFIED</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Welcome Aboard, {customerName}!
          </h1>

          <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Your ₹3,999 payment is complete. Both digital playbooks are ready for instant download below, and your free 1-Month Sales Navigator Advanced seat allocation has been queued for activation.
          </p>

          {/* Payment Metadata */}
          <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left font-mono text-xs max-w-2xl mx-auto">
            <div>
              <span className="text-gray-400 text-[10px] block">PAYMENT ID:</span>
              <span className="font-bold text-[#0A66C2] truncate block">{paymentId}</span>
            </div>
            <div>
              <span className="text-gray-400 text-[10px] block">LINKEDIN EMAIL:</span>
              <span className="text-gray-900 truncate block">{customerEmail}</span>
            </div>
            <div>
              <span className="text-gray-400 text-[10px] block">AMOUNT PAID:</span>
              <span className="text-green-600 font-bold block">{APP_CONFIG.PRICE_FORMATTED} (Inclusive)</span>
            </div>
          </div>
        </div>

        {/* Immediate Action #1: Instant Digital Delivery */}
        <div className="card-elevated rounded-2xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-200">
            <div>
              <span className="text-xs font-mono text-[#0A66C2] font-bold uppercase tracking-wider">
                IMMEDIATE ACTION #1: DIGITAL ASSETS
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                Download Your Playbooks Instantly
              </h2>
            </div>
            <span className="px-2.5 py-1 rounded-md bg-green-50 text-green-700 border border-green-200 text-xs font-mono">
              READY NOW
            </span>
          </div>

          <p className="text-sm text-gray-500 leading-relaxed mb-6">
            Click each button below to download the official PDFs directly to your device.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Playbook 1 */}
            <a
              href={APP_CONFIG.PLAYBOOK_1_PDF_URL}
              download="CLIC_LinkedIn_Foundation_Playbook_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-blue-50/50 border-2 border-blue-200 hover:border-[#0A66C2] transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="px-2 py-0.5 rounded bg-blue-100 text-[#0A66C2] text-[10px] font-mono font-bold uppercase">
                  MASTER GUIDE
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-2 group-hover:text-[#0A66C2] transition-colors">
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
              className="p-5 rounded-xl bg-green-50/50 border-2 border-green-200 hover:border-green-500 transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="px-2 py-0.5 rounded bg-green-100 text-green-700 text-[10px] font-mono font-bold uppercase">
                  IMPLEMENTATION SPRINT
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-2 group-hover:text-green-700 transition-colors">
                  📗 Sales Navigator Accelerator Workbook
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Your First 7 Days With LinkedIn Sales Navigator Advanced.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-green-100 flex items-center justify-between text-xs font-bold text-green-700">
                <span className="flex items-center gap-1.5">
                  <Download className="w-4 h-4" /> Download Workbook
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>
        </div>

        {/* Immediate Action #2: WhatsApp Activation */}
        <div className="card-elevated rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-50 to-green-50 border border-green-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-green-100 text-green-800 text-xs font-mono font-bold">
                <MessageCircle className="w-3.5 h-3.5" />
                <span>ACTION #2: PRIORITY SEAT DISPATCH</span>
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                1-Click WhatsApp Seat Activation
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Click below to send your pre-filled verification ticket directly to our activation desk. Our team will verify your LinkedIn profile URL and send your official seat activation link.
              </p>
              <div className="flex items-center gap-2 text-xs text-green-700 font-semibold pt-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Zero-Password Guarantee: We never ask for your LinkedIn login details.</span>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-6 py-4 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-sm sm:text-base shadow-md flex items-center justify-center gap-2 flex-shrink-0 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Activate Seat on WhatsApp →</span>
            </a>
          </div>

          <div className="mt-6 pt-4 border-t border-green-200/60">
            <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider block mb-1">
              Pre-Filled WhatsApp Message:
            </span>
            <div className="p-3 rounded-xl bg-white border border-gray-200 text-xs font-mono text-gray-600">
              "{rawWhatsAppMessage}"
            </div>
          </div>
        </div>

        {/* Next Steps Checklist */}
        <div className="card-elevated rounded-2xl p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-gray-900">Next Steps Checklist</h3>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
              <span className="w-6 h-6 rounded-full bg-[#0A66C2] text-white font-bold flex items-center justify-center text-xs flex-shrink-0">1</span>
              <div>
                <strong className="text-gray-900 block">Download both PDFs above to your computer.</strong>
                <span className="text-gray-500 text-xs">Save them where you can easily reference them daily.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
              <span className="w-6 h-6 rounded-full bg-[#0A66C2] text-white font-bold flex items-center justify-center text-xs flex-shrink-0">2</span>
              <div>
                <strong className="text-gray-900 block">Send the WhatsApp verification message.</strong>
                <span className="text-gray-500 text-xs">Our team will verify your LinkedIn profile for seat allocation.</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200">
              <span className="w-6 h-6 rounded-full bg-[#0A66C2] text-white font-bold flex items-center justify-center text-xs flex-shrink-0">3</span>
              <div>
                <strong className="text-gray-900 block">Accept the official seat invitation when delivered.</strong>
                <span className="text-gray-500 text-xs">Your account will upgrade to Sales Navigator Advanced for 1 full month.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center pt-4 text-xs text-gray-400">
          <p>
            Need help? Foxxy Support: <span className="text-gray-600 font-mono">+91 9918991805</span> | Coach Ravikant: <span className="text-gray-600 font-mono">+91 8595109750</span>
          </p>
        </div>
      </div>
    </div>
  );
}
