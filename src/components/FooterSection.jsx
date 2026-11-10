import React from 'react';
import { FoxxyLogo, CRAcademyBadge } from './FoxxyLogoSVG';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import { APP_CONFIG } from '../config';

export function FooterSection() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 text-gray-500 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <FoxxyLogo className="h-9" />
              <span className="text-gray-300 font-light text-xl">×</span>
              <CRAcademyBadge className="h-8" />
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-md">
              Foxxy Digital Tools and CR Academy bring together tactical authority-building systems, copy-ready AI workflows, and world-class B2B software access to turn genuine expertise into high-ticket pipeline.
            </p>

            <div className="flex items-center gap-2 text-xs text-gray-600">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Zero-Password Security Commitment • 100% Authorized Delivery</span>
            </div>
          </div>

          {/* Support Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-gray-900">
              Official WhatsApp Support Desks
            </h4>

            <div className="p-3.5 rounded-xl bg-white border border-gray-200 space-y-1">
              <span className="text-xs font-bold text-gray-900 block">
                01 Foxxy Digital Tools — Product & Seat Support
              </span>
              <p className="text-xs text-gray-500">
                Questions about software options, prices, offers and seat access.
              </p>
              <a
                href={`https://wa.me/${APP_CONFIG.WHATSAPP_SUPPORT_NUMBER}?text=Hi%20Foxxy%20Digital%20Tools%20Team!%20I%20have%20an%20enquiry%20regarding%20the%20Sales%20Nav%20offer.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-green-600 hover:text-green-700 pt-1 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {APP_CONFIG.WHATSAPP_SUPPORT_FORMATTED}</span>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-white border border-gray-200 space-y-1">
              <span className="text-xs font-bold text-gray-900 block">
                02 Coach Ravikant — Consultation Enquiries
              </span>
              <p className="text-xs text-gray-500">
                Discuss goals, tailored implementation support, and advisory fit.
              </p>
              <a
                href={`https://wa.me/${APP_CONFIG.CONSULTATION_WHATSAPP_NUMBER}?text=Hi%20Coach%20Ravikant%20Team!%20I%20would%20like%20to%20request%20a%20suitability%20discussion%20for%20implementation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#0A66C2] hover:text-[#084e96] pt-1 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {APP_CONFIG.CONSULTATION_WHATSAPP_FORMATTED}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#the-math" className="hover:text-gray-900 transition-colors">The Value Equation</a></li>
              <li><a href="#whats-inside" className="hover:text-gray-900 transition-colors">What's Inside</a></li>
              <li><a href="#activation" className="hover:text-gray-900 transition-colors">How Activation Works</a></li>
              <li><a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a></li>
              <li><a href="#checkout" className="text-[#0A66C2] font-semibold hover:underline">Claim Seat (₹3,999)</a></li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-gray-200 text-xs text-gray-400 space-y-3 leading-relaxed">
          <p>
            <strong className="text-gray-600">Legal Notice:</strong> © 2026 Coach Ravikant Rathor / Foxxy Digital Tools / CR Academy. All rights reserved. CLIC™ is used as a brand trademark; the ™ symbol does not claim registration. Independent educational publication. Not affiliated with, sponsored by, or endorsed by LinkedIn Corporation. LinkedIn and Sales Navigator are trademarks of LinkedIn Corporation. Your 1-month Sales Navigator Advanced subscription is a separate promotional benefit activated with assistance from our team.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-gray-400">
            <span>Published by Foxxy Digital Tools × CR Academy</span>
            <span>256-Bit SSL Encrypted Razorpay Checkout</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
