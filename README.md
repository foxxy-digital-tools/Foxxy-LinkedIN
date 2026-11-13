# Foxxy Digital Tools × CR Academy: LinkedIn Growth Toolkit & Sales Navigator Advanced Landing Page

A complete, production-ready, high-converting B2B SaaS & Executive Academy landing page, interactive pre-checkout form, Razorpay payment gateway integration, and post-purchase confirmation/activation dashboard.

---

## ⚡ Quick Start & Development

### 1. Install Dependencies & Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 3. Standalone Single-File Version
If you prefer running a single self-contained HTML file without Node.js or a build step:
- Simply double-click `standalone.html` in your file explorer or deploy it to any static web server / S3 / Netlify / Vercel.

---

## 🛠️ Configuration Guide (`src/config.js`)

All essential variables, pricing, video URL, Razorpay keys, and PDF links are centralized in `src/config.js`:

```javascript
export const APP_CONFIG = {
  // 1. Razorpay Key ID
  // Paste your live key (e.g. 'rzp_live_...') here. If left as placeholder,
  // the app automatically activates the interactive Demo Payment Simulator!
  RAZORPAY_KEY_ID: "rzp_live_YOUR_KEY_HERE",
  AMOUNT_IN_PAISE: 399900, // ₹3,999.00
  PRICE_FORMATTED: "₹3,999",
  ORIGINAL_PRICE_FORMATTED: "₹15,000",
  CURRENCY: "INR",

  // 2. Dual-Mode Hero Video Toggle
  HERO_MODE_DEFAULT: "INTERACTIVE_GRAPHIC", // or "VIDEO"
  HERO_VIDEO_URL: "", // Paste your MP4 / YouTube / Vimeo embed URL here

  // 3. Digital Asset URLs
  PLAYBOOK_1_PDF_URL: "/CLIC_LinkedIn_Foundation_Playbook_Digital_Release_2026.pdf",
  PLAYBOOK_2_PDF_URL: "/CLIC_Sales_Navigator_Accelerator_7_Day_Quick_Start.pdf",

  // 4. WhatsApp Support Number (From PDF)
  WHATSAPP_SUPPORT_NUMBER: "919918991805",      // Sales & Seat Activation Support

  // 5. Cohort Urgency Settings
  TOTAL_SEATS: 100,
  CLAIMED_SEATS_INITIAL: 89,
};
```

---

## 📦 What's Included & Architectural Blueprint

1. **Dual-Mode Hero Section:**
   - **Mode A (Default):** Interactive 3D Card Stack featuring the glowing titanium VIP Sales Navigator Advanced Pass, 3D book covers, and real-time floating telemetry.
   - **Mode B (VSL Mode):** 75s Video Player frame with custom chapter markers and a 1-click drawer containing the full VSL transcript.
2. **Coded Interactive Motion Graphic #1:**
   - The B2B Arbitrage Engine with dynamic calculations highlighting ₹11,001 saved (73% arbitrage) vs ₹15,000/mo ($159.99).
3. **Coded Interactive Motion Graphic #2:**
   - The CLIC™ Prospecting Radar with animated SVG data beams connecting the 3 inputs to the central CLIC engine and qualified B2B conversation outputs.
4. **Deep-Dive Section: 67-Page CLIC™ Playbook:**
   - 6-chapter bento grid with direct takeaways, quotes, and 1-click copyable ChatGPT & Claude AI prompts.
5. **Deep-Dive Section: 7-Day Sales Nav Accelerator:**
   - Day-by-day interactive stepper with Boolean search recipes, 10-lead shortlist strategy, and the 30-minute daily schedule table.
6. **Zero-Password 4-Step Activation Flow:**
   - Clear visual roadmap reassuring users that LinkedIn credentials are never shared.
7. **Social Proof & Coach Ravikant Authority:**
   - Official credentials, photo, CLIC philosophy, and realistic B2B practitioner case studies.
8. **Integrated Pre-Checkout Form & Razorpay Gateway:**
   - Full Name, 10-digit Indian mobile, LinkedIn email, and LinkedIn profile URL validation.
   - Razorpay prefill & metadata notes payload (`notes: { linkedin_email, linkedin_profile_url, whatsapp_number, full_name, offer }`).
9. **Post-Purchase Confirmation / Thank-You View:**
   - Instant Confetti burst.
   - Instant 1-click download of both PDF playbooks.
   - 1-Click WhatsApp Priority Activation trigger with pre-populated message.
   - Step-by-step onboarding checklist.

---

## 🔒 Security & Compliance
- **Zero-Password Security Guarantee:** Seat is activated exclusively via official invitation link sent to the user's LinkedIn email.
- **Official Disclaimers:** Fully compliant with LinkedIn trademark guidelines and educational fair-use principles.

