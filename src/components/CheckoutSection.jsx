import React, { useState } from 'react';
import { ShieldCheck, Lock, AlertCircle, ArrowRight, Sparkles, CreditCard, Check, Loader2 } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function CheckoutSection({ onPaymentSuccess, isModal = false, onCloseModal }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    profileUrl: ''
  });

  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name (minimum 2 characters)';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian WhatsApp mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address registered with LinkedIn';
    }

    const cleanUrl = formData.profileUrl.trim().toLowerCase();
    if (!cleanUrl) {
      newErrors.profileUrl = 'Please enter your LinkedIn profile URL';
    } else if (!cleanUrl.includes('linkedin.com/in/')) {
      newErrors.profileUrl = 'URL must include linkedin.com/in/... format';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleInitiatePayment = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsProcessing(true);

    const isPlaceholderKey = !APP_CONFIG.RAZORPAY_KEY_ID ||
      APP_CONFIG.RAZORPAY_KEY_ID.includes('YOUR_KEY_HERE') ||
      APP_CONFIG.RAZORPAY_KEY_ID.startsWith('rzp_test_placeholder');

    if (window.Razorpay && !isPlaceholderKey) {
      try {
        const options = {
          key: APP_CONFIG.RAZORPAY_KEY_ID,
          amount: APP_CONFIG.AMOUNT_IN_PAISE,
          currency: APP_CONFIG.CURRENCY,
          name: "Foxxy Digital Tools × CR Academy",
          description: "LinkedIn Growth Toolkit + 1-Mo Sales Nav Seat",
          image: APP_CONFIG.FOXXY_LOGO_URL || "/Foxxy_Video_AI.png",
          prefill: {
            name: formData.fullName,
            email: formData.email,
            contact: formData.phone
          },
          notes: {
            linkedin_email: formData.email,
            linkedin_profile_url: formData.profileUrl,
            whatsapp_number: formData.phone,
            full_name: formData.fullName,
            offer: "CLIC_Toolkit_Plus_1Mo_SalesNav_Adv"
          },
          theme: { color: "#0A66C2" },
          handler: function (response) {
            setIsProcessing(false);
            if (onCloseModal) onCloseModal();
            onPaymentSuccess({
              paymentId: response.razorpay_payment_id || `pay_${Date.now()}`,
              orderId: response.razorpay_order_id || `order_${Date.now()}`,
              signature: response.razorpay_signature || '',
              customer: { ...formData },
              amount: APP_CONFIG.PRICE_FORMATTED,
              timestamp: new Date().toISOString()
            });
          },
          modal: {
            ondismiss: function () { setIsProcessing(false); }
          }
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (resp) {
          setIsProcessing(false);
          alert(`Payment failed: ${resp.error.description}`);
        });
        rzp.open();
        return;
      } catch (err) {
        console.warn("Razorpay error:", err);
      }
    }

    // Demo simulation fallback
    setTimeout(() => {
      setIsProcessing(false);
      setIsDemoModalOpen(true);
    }, 500);
  };

  const handleSimulatePaymentSuccess = () => {
    setIsDemoModalOpen(false);
    if (onCloseModal) onCloseModal();
    const demoPaymentId = `pay_demo_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
    onPaymentSuccess({
      paymentId: demoPaymentId,
      orderId: `ord_demo_${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
      signature: "demo_sig_2026",
      customer: { ...formData },
      amount: APP_CONFIG.PRICE_FORMATTED,
      timestamp: new Date().toISOString(),
      isDemo: true
    });
  };

  return (
    <div id="checkout" className={`${isModal ? '' : 'py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto'}`}>
      {!isModal && (
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SECURE ORDER FORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Claim Your Bundle + <span className="text-[#0A66C2]">Free Sales Nav Seat</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500">
            One-time payment of ₹3,999. No recurring charges. Instant digital download + team-assisted seat activation.
          </p>
        </div>
      )}

      {/* Main Checkout Container */}
      <div className="card-elevated rounded-3xl p-6 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          {/* Left Column: Form Inputs (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono text-[#0A66C2] font-bold uppercase tracking-wider">
                  STEP 1 OF 2: VERIFY DETAILS
                </span>
                <span className="text-[11px] font-semibold text-green-600 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Zero-Password Guaranteed
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                Enter Your Seat Allocation Details
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Our team uses these details to generate your official Sales Navigator Advanced invitation link.
              </p>
            </div>

            <form onSubmit={handleInitiatePayment} className="space-y-4">
              {/* Field 1: Full Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Vikramaditya Sharma"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all ${
                    errors.fullName ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Field 2: WhatsApp Number */}
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-gray-700">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[10px] text-gray-400 font-mono">10-Digit Mobile</span>
                </div>
                <div className="relative">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs font-mono font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className={`w-full pl-12 pr-4 py-2.5 rounded-xl bg-white border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all ${
                      errors.phone ? 'border-red-400' : 'border-gray-200'
                    }`}
                  />
                </div>
                <p className="mt-1 text-[11px] text-gray-400">
                  Used by our activation team to send instant WhatsApp instructions.
                </p>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              {/* Field 3: LinkedIn Registered Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  LinkedIn Registered Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com or personal@gmail.com"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all ${
                    errors.email ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                <p className="mt-1 text-[11px] text-gray-400">
                  Used to send your playbooks & official Sales Navigator Advanced invitation.
                </p>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Field 4: LinkedIn Profile URL */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  LinkedIn Profile URL <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="profileUrl"
                  value={formData.profileUrl}
                  onChange={handleChange}
                  placeholder="https://www.linkedin.com/in/yourname"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white border text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all ${
                    errors.profileUrl ? 'border-red-400' : 'border-gray-200'
                  }`}
                />
                <p className="mt-1 text-[11px] text-gray-400">
                  Used by our team to verify your profile for official seat allocation.
                </p>
                {errors.profileUrl && (
                  <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.profileUrl}
                  </p>
                )}
              </div>

              {/* Security Promise */}
              <div className="p-3.5 rounded-xl bg-green-50 border border-green-200 flex items-start gap-3">
                <Lock className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-green-800 leading-relaxed">
                  <strong>Security Promise:</strong> Never share your LinkedIn password with anyone. Our team activates your 1-Month Sales Navigator Advanced bonus exclusively via your email/profile link.
                </p>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-4 px-6 rounded-2xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-base shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Connecting Gateway...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Pay {APP_CONFIG.PRICE_FORMATTED}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-4 text-xs text-gray-400 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" /> UPI / Cards / Netbanking
                </span>
                <span>•</span>
                <span>Instant Confirmation</span>
              </div>
            </form>
          </div>

          {/* Right Column: Order Summary (5 Cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-gray-50 border border-gray-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-gray-200 mb-4">
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">
                  PACKAGE BREAKDOWN
                </span>
                <span className="text-xs font-bold text-[#0A66C2] font-mono">
                  LIMITED SPONSORED OFFER
                </span>
              </div>

              <div className="space-y-3.5 mb-6 text-xs">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-semibold text-gray-900 block">
                      The LinkedIn Foundation Playbook
                    </span>
                    <span className="text-gray-400">Complete Digital Edition</span>
                  </div>
                  <span className="text-gray-500 font-mono">₹4,999</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-semibold text-gray-900 block">
                      Sales Navigator Accelerator Workbook
                    </span>
                    <span className="text-gray-400">7-Day Implementation Sprint</span>
                  </div>
                  <span className="text-gray-500 font-mono">₹2,999</span>
                </div>

                <div className="flex items-start justify-between gap-3 p-3 rounded-xl bg-blue-50 border border-blue-200">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-[#0A66C2]">
                        1 Month Sales Navigator Advanced
                      </span>
                      <span className="px-1.5 py-0.2 rounded bg-green-100 text-green-700 text-[9px] font-bold uppercase">
                        BONUS
                      </span>
                    </div>
                    <span className="text-[11px] text-gray-500">
                      Team-Assisted Official Seat Activation
                    </span>
                  </div>
                  <span className="text-green-600 font-bold font-mono">FREE (₹15,000)</span>
                </div>

                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-semibold text-gray-900 block">
                      Copy-Ready AI Prompts & Templates
                    </span>
                    <span className="text-gray-400">ChatGPT & Claude Workflows</span>
                  </div>
                  <span className="text-green-600 font-semibold font-mono">INCLUDED</span>
                </div>
              </div>

              {/* Price Math */}
              <div className="pt-4 border-t border-gray-200 space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-400">
                  <span>Total Retail Value:</span>
                  <span className="line-through font-mono">₹22,998</span>
                </div>
                <div className="flex items-center justify-between text-green-600 font-semibold">
                  <span>Sponsored Software Rebate:</span>
                  <span className="font-mono">-₹18,999</span>
                </div>
                <div className="flex items-baseline justify-between pt-2 border-t border-gray-200 text-gray-900">
                  <span className="font-bold text-sm">Today's Final Price:</span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-[#0A66C2] font-mono block">
                      {APP_CONFIG.PRICE_FORMATTED}
                    </span>
                    <span className="text-[10px] text-gray-400">One-Time • All Taxes Included</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 space-y-2 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span>Zero recurring auto-debit surprises</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-green-500" />
                <span>Immediate digital download after payment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A66C2] flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#0A66C2] uppercase tracking-wider font-bold">
                  PAYMENT SIMULATOR
                </span>
                <h4 className="text-lg font-bold text-gray-900">Confirm Test Order</h4>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-4">
              Testing the complete flow. You can simulate a successful transaction to verify downloads and WhatsApp activation.
            </p>

            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5 text-xs text-gray-600 mb-5 font-mono">
              <div className="flex justify-between">
                <span className="text-gray-400">Name:</span>
                <span className="text-gray-900">{formData.fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Email:</span>
                <span className="text-gray-900">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Amount:</span>
                <span className="text-[#0A66C2] font-bold">{APP_CONFIG.PRICE_FORMATTED}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsDemoModalOpen(false)}
                className="flex-1 py-2.5 px-4 rounded-xl bg-gray-100 text-gray-600 hover:text-gray-900 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSimulatePaymentSuccess}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold shadow-sm"
              >
                Simulate Success →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
