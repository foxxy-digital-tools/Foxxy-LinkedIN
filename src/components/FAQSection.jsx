import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "Is the 1-Month LinkedIn Sales Navigator Advanced seat really included for ₹3,999?",
      a: "Yes, 100%. When you purchase the LinkedIn Growth Toolkit for ₹3,999 (one-time payment, taxes included), our team at Foxxy Digital Tools sponsors your full 1-Month LinkedIn Sales Navigator Advanced seat at zero additional charge. The official retail cost is $159.99/mo (approx ₹15,000), meaning you immediately save over ₹11,000 on software alone."
    },
    {
      q: "Do I need to share my LinkedIn password with anyone?",
      a: "No! Never under any circumstances. We enforce a strict Zero-Password Security Guarantee. We will NEVER ask for your LinkedIn password, two-factor authentication codes, or session tokens. Our team activates your sponsored 1-Month seat exclusively via an official LinkedIn invitation sent to your registered email and profile URL."
    },
    {
      q: "How fast do I get access to the playbooks and the Sales Navigator seat?",
      a: "Instant digital delivery for both playbooks. The moment your payment is confirmed, direct download links appear on your screen and in your email. For the Sales Navigator seat, our activation team generates and dispatches your official invitation via email and WhatsApp during business hours (typically within 1 to 4 hours)."
    },
    {
      q: "Will I be auto-charged ₹15,000 next month?",
      a: "Absolutely not. This is a one-time payment of ₹3,999. There are zero auto-debit mandates or recurring subscriptions. When your 1-month sponsored access concludes, your LinkedIn profile simply returns to your previous plan unless you voluntarily choose to renew on your own."
    },
    {
      q: "What if I already use LinkedIn every day — is this for beginners or advanced users?",
      a: "Both. The foundation sections ensure your profile and network are optimized for high-trust credibility. The accelerator workbook gives advanced practitioners the exact search filter templates, intent signals, and daily rhythm needed to build a predictable B2B pipeline without sending spam."
    },
    {
      q: "Can I reach out for support if I get stuck?",
      a: "Yes! You have direct access to our official support channels: Foxxy Digital Tools support on WhatsApp (+91 9918991805) and Coach Ravikant's team on WhatsApp (+91 8595109750). We are here to ensure your seat activation and toolkit onboarding run smoothly."
    }
  ];

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto border-t border-gray-100">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0A66C2] text-xs font-mono font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>FREQUENTLY ASKED QUESTIONS</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Got Questions? We've Got Answers.
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500">
          Everything you need to know about the toolkit, the free Sales Navigator seat, and our zero-password policy.
        </p>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                isOpen
                  ? 'bg-white border-[#0A66C2]/40 shadow-md'
                  : 'bg-gray-50 border-gray-200 hover:border-gray-300'
              }`}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left p-4 sm:p-6 min-h-[48px] flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
              >
                <span className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2.5 sm:gap-3">
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-extrabold flex-shrink-0 ${
                    isOpen ? 'bg-[#0A66C2] text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{faq.q}</span>
                </span>
                <span className="text-gray-400 flex-shrink-0">
                  {isOpen ? <ChevronUp className="w-5 h-5 text-[#0A66C2]" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>

              {isOpen && (
                <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* WhatsApp Help Banner */}
      <div className="mt-8 sm:mt-10 p-4 sm:p-5 rounded-2xl bg-gray-50 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-4 h-4" />
          </div>
          <div>
            <span className="text-gray-900 font-semibold block">Have an unlisted question?</span>
            <span className="text-gray-500 text-[11px] sm:text-xs">Chat with the Foxxy Digital Tools support desk directly.</span>
          </div>
        </div>

        <a
          href={`https://wa.me/${APP_CONFIG.WHATSAPP_SUPPORT_NUMBER}?text=Hi%20Foxxy%20Team!%20I%20have%20a%20question%20about%20the%20LinkedIn%20Growth%20Toolkit%20and%20Sales%20Nav%20Bonus.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto min-h-[44px] px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
        >
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </section>
  );
}
