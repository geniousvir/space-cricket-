/**
 * Safe Cricket Space - Global Configuration
 * Central configuration for client WhatsApp numbers, messages, and platform metadata.
 * 
 * TO CHANGE YOUR WHATSAPP NUMBER:
 * Just edit 'whatsappNumber' below with your 10 or 12 digit phone number (country code included, no '+').
 * E.g., for India: "919876543210"
 */
const SAFE_CRICKET_CONFIG = {
  // Update your WhatsApp number here:
  whatsappNumber: "919876543210",

  // Brand Information
  brandName: "Safe Cricket Space",
  tagline: "Verify Before You Trust • Cricket ID Safety Platform",
  subTagline: "Get 100% Genuine Cricket ID Master Links directly on WhatsApp",

  // Pre-filled WhatsApp messages for different conversion triggers
  messages: {
    default: "Hello Safe Cricket Space! I want the 100% genuine and verified Cricket ID link (such as MyLaser247). Please send me the official website link on WhatsApp.",
    verifySite: "Hello Safe Cricket Space! I want to verify a Cricket ID website link to check whether it is original or a fake clone. Please assist.",
    getPlatform: "Hello! Please send me the 100% verified official master link for MyLaser247 directly on WhatsApp.",
    reportScam: "Hello Safe Cricket Space! I want to report a fraudulent duplicate cricket ID website / scammer agent.",
    instantWithdrawal: "Hello! Please provide me with the official Cricket ID link that supports instant 5-minute withdrawals."
  },

  // Support details
  support: {
    hours: "24/7 Live WhatsApp Assistance",
    responseTime: "Under 30 seconds",
    email: "support@safecricketspace.com",
    telegram: "https://t.me/safecricketspace",
    instagram: "https://instagram.com/safecricketspace"
  }
};

/**
 * Global helper to generate WhatsApp URL with custom pre-filled message
 * @param {string} customMsg - Optional custom message or key from config
 * @returns {string} Fully encoded WhatsApp URL
 */
function getWhatsAppUrl(customMsg) {
  const number = SAFE_CRICKET_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
  let text = customMsg || SAFE_CRICKET_CONFIG.messages.default;
  
  // If a known message key was passed
  if (SAFE_CRICKET_CONFIG.messages[customMsg]) {
    text = SAFE_CRICKET_CONFIG.messages[customMsg];
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Open WhatsApp in a new tab
 * @param {string} customMsg 
 */
function openWhatsApp(customMsg) {
  window.open(getWhatsAppUrl(customMsg), '_blank');
}
