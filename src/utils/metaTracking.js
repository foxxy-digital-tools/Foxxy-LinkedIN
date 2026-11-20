/**
 * Meta Pixel & Conversions API (CAPI) Tracking Utilities for Foxxy-LinkedIN
 * Standardized per Meta Parameter Builder Library specifications
 * Target Dataset / Pixel ID: 1600255045122847
 */

/**
 * Retrieve cookie value by name
 */
export function getCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
  return match ? decodeURIComponent(match[3]) : null;
}

/**
 * Set a first-party cookie with expiry in days
 */
export function setCookie(name, value, days = 90) {
  if (typeof document === 'undefined') return;
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

/**
 * Get or generate standard Meta _fbp (Browser ID)
 * Format: fb.1.<creation_timestamp_ms>.<10_digit_random>
 * Ensures 100% _fbp coverage even before external fbevents.js script executes
 */
export function getOrCreateFbp() {
  if (typeof window === 'undefined') return null;

  // 1. Check existing cookie
  const cookieFbp = getCookie('_fbp');
  if (cookieFbp) {
    try {
      localStorage.setItem('_fbp', cookieFbp);
    } catch {
      // storage fallback
    }
    return cookieFbp;
  }

  // 2. Check localStorage fallback
  try {
    const storedFbp = localStorage.getItem('_fbp');
    if (storedFbp) {
      setCookie('_fbp', storedFbp, 90);
      return storedFbp;
    }
  } catch {
    // storage fallback
  }

  // 3. Generate standard compliant Meta _fbp
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 8999999999 + 1000000000);
  const newFbp = `fb.1.${timestamp}.${randomNum}`;

  setCookie('_fbp', newFbp, 90);
  try {
    localStorage.setItem('_fbp', newFbp);
  } catch {
    // storage fallback
  }

  return newFbp;
}

/**
 * Get or construct Meta _fbc click identifier (Cookie -> localStorage -> URL fbclid)
 * Format: fb.1.<creation_timestamp_ms>.<fbclid>
 */
export function getOrCreateFbc() {
  if (typeof window === 'undefined') return null;

  // 1. Check active URL for fbclid first
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');
    if (fbclid) {
      const fbc = `fb.1.${Date.now()}.${fbclid}`;
      setCookie('_fbc', fbc, 90);
      try {
        localStorage.setItem('_fbc', fbc);
      } catch {
        // storage fallback
      }
      return fbc;
    }
  } catch {
    // URL parsing unavailable
  }

  // 2. Check 1st-party Cookie
  const cookieFbc = getCookie('_fbc');
  if (cookieFbc) {
    try {
      localStorage.setItem('_fbc', cookieFbc);
    } catch {
      // storage fallback
    }
    return cookieFbc;
  }

  // 3. Check localStorage fallback
  try {
    const storedFbc = localStorage.getItem('_fbc');
    if (storedFbc) {
      setCookie('_fbc', storedFbc, 90);
      return storedFbc;
    }
  } catch {
    // storage fallback
  }

  return null;
}

/**
 * Get tracking parameters payload to forward to backend API
 */
export function getMetaTrackingParams() {
  const fbp = getOrCreateFbp();
  const fbc = getOrCreateFbc();

  const params = {};
  if (fbp) params.fbp = fbp;
  if (fbc) params.fbc = fbc;

  return params;
}
