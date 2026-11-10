import React, { useState } from 'react';
import { APP_CONFIG } from '../config';

export function FoxxyLogo({ className = "h-9" }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError && APP_CONFIG.FOXXY_LOGO_URL) {
    return (
      <img
        src={APP_CONFIG.FOXXY_LOGO_URL}
        alt="Foxxy Digital Tools"
        className={`${className} w-auto object-contain rounded-md`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-[#241B68] border border-[#6366F1]/50 shadow-sm ${className}`}>
      <svg viewBox="0 0 64 64" fill="none" className="w-6 h-6 text-white flex-shrink-0">
        <path d="M12 16L24 28L18 36L12 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 16L40 28L46 36L52 16Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M24 28L32 20L40 28L44 42L32 54L20 42L24 28Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="26" cy="33" r="1.5" fill="currentColor" />
        <circle cx="38" cy="33" r="1.5" fill="currentColor" />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="font-extrabold tracking-[0.2em] text-white text-xs sm:text-sm font-sans">FOXXY</span>
        <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.25em] text-indigo-200 uppercase -mt-0.5">DIGITAL TOOLS</span>
      </div>
    </div>
  );
}

export function CRAcademyBadge({ className = "h-8" }) {
  const [imgError, setImgError] = useState(false);

  if (!imgError && APP_CONFIG.CR_ACADEMY_LOGO_URL) {
    return (
      <img
        src={APP_CONFIG.CR_ACADEMY_LOGO_URL}
        alt="CR Academy"
        className={`${className} w-auto object-contain rounded-lg border border-gray-200 shadow-sm`}
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-xl bg-[#D4FF00] text-black border border-lime-400 font-sans shadow-sm ${className}`}>
      <div className="w-5 h-5 rounded-full bg-black flex items-center justify-center text-[#D4FF00] text-[10px] font-black">CR</div>
      <div className="flex flex-col leading-none">
        <span className="text-[9px] uppercase font-bold tracking-wider text-gray-800">Coach Ravikant</span>
        <span className="text-xs font-black tracking-tight text-black">CR ACADEMY</span>
      </div>
    </div>
  );
}
