import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Lock, AlertCircle, ArrowRight, Check, Loader2, Sparkles, CreditCard } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function CheckoutModal({ isOpen, onClose, onPaymentSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    profileUrl: ''
  });
  const [errors, setErrors] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit Indian WhatsApp mobile number';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter your LinkedIn registered email';
    }

    const cleanUrl = formData.profileUrl.trim().toLowerCase();
    if (!cleanUrl) {
      newErrors.profileUrl = 'Please enter your LinkedIn profile URL';
    } else if (!cleanUrl.includes('linkedin.com/in/')) {
      newErrors.profileUrl = 'Must be in format: linkedin.com/in/yourname';
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

  const handlePay = (e) => {
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
            onClose();
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
    }, 400);
  };

  const handleSimulatePaymentSuccess = () => {
    setIsDemoModalOpen(false);
    onClose();
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
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-900/50 backdrop-blur-sm overflow-y-auto animate-fadeIn"
    >
      <div className="relative w-full max-w-lg bg-white rounded-t-3xl sm:rounded-3xl border border-gray-200 shadow-2xl p-5 sm:p-8 max-h-[92vh] overflow-y-auto text-gray-900 animate-fade-in-up">
        {/* Prominent, obvious Close Button inside Header */}
        <div className="flex items-start justify-between pb-4 border-b border-gray-100 mb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0A66C2] text-xs font-bold font-mono mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              SPECIAL SPONSORED SEAT
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
              Claim Your Free 1-Month Seat
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">
              Pay ₹3,999 one-time. Free ₹15,000 Sales Nav seat included.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-colors flex-shrink-0 cursor-pointer"
            aria-label="Close dialog"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Clean, un-congested Form */}
        <form onSubmit={handlePay} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Vikramaditya Sharma"
              className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 placeholder-gray-400 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:bg-white transition-all ${
                errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-bold text-gray-700">
                WhatsApp Phone Number <span className="text-red-500">*</span>
              </label>
              <span className="text-[10px] text-gray-400 font-mono">10-Digit Mobile</span>
            </div>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-sm sm:text-xs font-mono font-medium">
                +91
              </span>
              <input
                type="tel"
                inputMode="numeric"
                name="phone"
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
                className={`w-full pl-12 pr-4 py-3 rounded-xl bg-gray-50 border text-gray-900 placeholder-gray-400 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:bg-white transition-all ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
                }`}
              />
            </div>
            {errors.phone && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.phone}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              LinkedIn Registered Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              inputMode="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com or personal@gmail.com"
              className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 placeholder-gray-400 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:bg-white transition-all ${
                errors.email ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
              }`}
            />
            <span className="text-[11px] text-gray-400 block mt-1">
              Where your playbooks & Sales Nav seat invite will be delivered.
            </span>
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">
              LinkedIn Profile URL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="profileUrl"
              value={formData.profileUrl}
              onChange={handleChange}
              placeholder="https://www.linkedin.com/in/yourprofile"
              className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-gray-900 placeholder-gray-400 text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0A66C2] focus:bg-white transition-all ${
                errors.profileUrl ? 'border-red-400 bg-red-50/20' : 'border-gray-200'
              }`}
            />
            <span className="text-[11px] text-gray-400 block mt-1">
              Used by our team to verify profile for seat allocation.
            </span>
            {errors.profileUrl && (
              <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.profileUrl}
              </p>
            )}
          </div>

          {/* Clean Order Summary Bar */}
          <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-gray-700">Total Investment:</span>
              <span className="text-base font-black text-[#0A66C2] font-mono">{APP_CONFIG.PRICE_FORMATTED}</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-semibold">
              <Check className="w-3.5 h-3.5 text-emerald-600" />
              <span>Includes 1-Month Sales Nav Advanced (Worth ₹15,000) FREE</span>
            </div>
          </div>

          {/* Zero Password Security Callout */}
          <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-2 text-xs text-gray-600">
            <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span><strong>Zero-Password Guarantee:</strong> We never ask for your LinkedIn password.</span>
          </div>

          {/* Pay Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full py-3.5 px-6 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white font-bold text-sm sm:text-base shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-60"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Opening Gateway...</span>
              </>
            ) : (
              <>
                <span>Complete Order — Pay {APP_CONFIG.PRICE_FORMATTED}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Demo Simulator Modal */}
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0A66C2] flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Test Payment Simulator</h4>
                  <span className="text-[11px] text-gray-500">Live order confirmation test</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mb-4">
                Click below to simulate a successful payment and view the instant PDF downloads & WhatsApp activation view.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setIsDemoModalOpen(false)}
                  className="flex-1 py-2 px-3 rounded-lg bg-gray-100 text-gray-600 text-xs font-semibold hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSimulatePaymentSuccess}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-bold"
                >
                  Confirm (₹3,999) →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
