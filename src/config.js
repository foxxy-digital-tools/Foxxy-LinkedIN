// Foxxy Digital Tools × CR Academy Configuration
export const APP_CONFIG = {
  // Razorpay API Key. Pulls from Vercel / .env.local via Vite (VITE_RAZORPAY_KEY_ID)
  // Falls back to your test key if .env is unset.
  RAZORPAY_KEY_ID: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_TQ78ZwFX9rTUuv",
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api/v1",
  AMOUNT_IN_PAISE: 399900, // ₹3,999.00
  PRICE_FORMATTED: "₹3,999",
  ORIGINAL_PRICE_FORMATTED: "₹15,000",
  CURRENCY: "INR",

  // Dual-mode Hero Configuration
  HERO_MODE_DEFAULT: "INTERACTIVE_GRAPHIC", // Options: "INTERACTIVE_GRAPHIC" | "VIDEO"
  HERO_VIDEO_URL: "", // Paste your MP4 / YouTube / Vimeo / Cloudflare Stream URL here when ready

  // PDF Asset URLs (Stored in /public)
  PLAYBOOK_1_PDF_URL: "/CLIC_LinkedIn_Foundation_Playbook_Digital_Release_2026.pdf",
  PLAYBOOK_2_PDF_URL: "/CLIC_Sales_Navigator_Accelerator_7_Day_Quick_Start.pdf",

  // Image Asset URLs (Stored in /public)
  FOXXY_LOGO_URL: "/Foxxy_Video_AI.png",
  CR_ACADEMY_LOGO_URL: "/cr_academy_logo.jpg",
  COACH_RAVIKANT_COVER_URL: "/coach_ravikant_cover.jpg",
  COACH_RAVIKANT_HEADSHOT_URL: "/coach_ravikant_headshot.jpg",

  // Official Support WhatsApp Numbers
  WHATSAPP_SUPPORT_NUMBER: "919918991805",
  WHATSAPP_SUPPORT_FORMATTED: "+91 9918991805",
  CONSULTATION_WHATSAPP_NUMBER: "918595109750",
  CONSULTATION_WHATSAPP_FORMATTED: "+91 8595109750",

  // Cohort Urgency Settings
  TOTAL_SEATS: 100,
  CLAIMED_SEATS_INITIAL: 89,
};

export const VSL_TRANSCRIPT = [
  {
    timestamp: "0:00",
    speaker: "Coach Ravikant",
    text: "LinkedIn Sales Navigator Advanced costs $159.99 every single month. That is more than ₹15,000 out of your pocket every thirty days. But here is the brutal truth: 90% of B2B professionals who buy it end up with blank search screens, zero replies, and an empty pipeline."
  },
  {
    timestamp: "0:24",
    speaker: "Coach Ravikant",
    text: "Software alone does not create trust. It does not write your connection notes or close your deals. What actually works is a proven system: a framework for content, leads, influence, and converting those into real clients."
  },
  {
    timestamp: "0:45",
    speaker: "Coach Ravikant",
    text: "Today, we are eliminating the risk entirely. When you grab our LinkedIn Growth Toolkit — the Foundation Playbook and the Sales Navigator Accelerator Workbook — for just ₹3,999, our team at Foxxy Digital Tools sponsors your first full month of LinkedIn Sales Navigator Advanced 100% FREE."
  },
  {
    timestamp: "1:03",
    speaker: "Coach Ravikant",
    text: "That is ₹11,001 in instant software savings plus the exact playbooks tested across 10,000+ professionals. Zero password required — our team sends your official seat invitation directly to your LinkedIn email. Claim one of the remaining seats right now before this offer closes."
  }
];
