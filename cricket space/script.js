/**
 * Safe Cricket Space - Interactive Cyber Audit & UI Engine
 * Features:
 * - Live forensic domain verification simulation
 * - Modal report generator for genuine vs duplicate checks
 * - WhatsApp routing with customized context
 * - Language switcher & smooth navigations
 * - Accordion controls & social proof alerts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNavigation();
  initWhatsAppTriggers();
  initFaqAccordions();
  initModalHandlers();
  initHeaderSearchAndLang();
  initLiveSocialProof();
});

/**
 * Mobile Navigation Drawer
 */
function initMobileNavigation() {
  const openBtn = document.getElementById('mobileMenuBtn');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawer = document.getElementById('mobileDrawer');
  const backdrop = document.getElementById('drawerBackdrop');

  if (!openBtn || !drawer || !backdrop) return;

  window.openDrawer = function() {
    drawer.classList.add('open');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeDrawer = function() {
    drawer.classList.remove('open');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  drawer.querySelectorAll('.drawer-link, .drawer-links a').forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });
}

/**
 * Modal Handling for Verification Audits
 */
function initModalHandlers() {
  const modal = document.getElementById('auditModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/**
 * Header Quick Search & Language Switcher
 */
function initHeaderSearchAndLang() {
  const searchBtn = document.getElementById('navSearchTrigger');
  const heroInput = document.getElementById('heroUrlInput');
  const langBtn = document.getElementById('langSwitchBtn');

  if (searchBtn && heroInput) {
    searchBtn.addEventListener('click', () => {
      heroInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => heroInput.focus(), 400);
    });
  }

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const hindiSec = document.getElementById('hindiAwareness');
      if (hindiSec) {
        hindiSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
}

/**
 * Global WhatsApp CTAs and Triggers
 */
function initWhatsAppTriggers() {
  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.wa-trigger, [data-wa-action]');
    if (!trigger) return;

    e.preventDefault();
    const actionType = trigger.getAttribute('data-wa-action') || 'default';
    const customText = trigger.getAttribute('data-wa-custom');
    
    let message = customText;
    if (!message) {
      if (SAFE_CRICKET_CONFIG.messages && SAFE_CRICKET_CONFIG.messages[actionType]) {
        message = SAFE_CRICKET_CONFIG.messages[actionType];
      } else {
        message = SAFE_CRICKET_CONFIG.messages.default;
      }
    }

    openWhatsApp(message);
  });
}

/**
 * Main Interactive Forensic Domain Audit Engine
 * Triggered by both hero and banner search forms
 */
const AUDIT_KNOWLEDGE_BASE = {
  // Known Verified Domains
  verified: [
    { domain: 'mylaser247.co', name: 'Laser247', ssl: 'Valid 256-Bit DigiCert', age: '3+ Years', license: 'Curaçao eGaming #365/JAZ', payouts: '5-15 Mins' },
    { domain: 'laser247.com', name: 'Laser247 Original', ssl: 'Valid Cloudflare SSL', age: '4+ Years', license: 'Official Gaming Authority', payouts: 'Instant' },
    { domain: 'reddybook.com', name: 'ReddyBook Club', ssl: 'Valid Sectigo SSL', age: '3.5 Years', license: 'Regulated Exchange', payouts: '10 Mins' },
    { domain: 'lotus365.in', name: 'Lotus365 Official', ssl: 'Valid Google Trust SSL', age: '5+ Years', license: 'Licensed Bookmaker', payouts: '5 Mins' },
    { domain: 'parimatch.com', name: 'PariMatch Global', ssl: 'Valid Let\'s Encrypt SSL', age: '10+ Years', license: 'International Gaming License', payouts: 'Instant' },
    { domain: '9winz.com', name: '9Winz Live', ssl: 'Valid GeoTrust SSL', age: '4 Years', license: 'Audited Sports License', payouts: '5 Mins' },
    { domain: 'jeetbuzz.com', name: 'JeetBuzz Official', ssl: 'Valid Sectigo SSL', age: '4.2 Years', license: 'Licensed Asian Exchange', payouts: 'Instant' }
  ],
  // Known Duplicate Scams
  duplicates: [
    { domain: 'mylaser247-co.in', mimic: 'Laser247', issue: 'Fake Clone Script', risk: 'Critical 99%', warning: 'Disables withdrawal gateway after deposit.' },
    { domain: 'cricketid.co', mimic: 'Generic Cricket ID', issue: 'Duplicate Mirror Domain', risk: 'High Risk', warning: 'Reported by 45+ users for blocked Telegram numbers.' },
    { domain: '11playwinz.in', mimic: '11Play / Winz', issue: 'Suspicious Fake UPI Gateway', risk: 'Critical Risk', warning: 'Demands advance 20% withdrawal GST fee.' },
    { domain: 'betroid365.com', mimic: 'Bet365', issue: 'Impersonation Clone APK', risk: 'Severe Fraud', warning: 'Pirated software stealing banking details.' },
    { domain: 'cricketking-id.in', mimic: 'Cricket King', issue: 'Recently Registered (14 days)', risk: 'High Risk', warning: 'Rogue operator cycling anonymous UPI IDs.' }
  ]
};

window.triggerAudit = function(rawQuery) {
  const query = (rawQuery || '').trim().toLowerCase().replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/.*$/, '');
  
  if (!query) {
    alert('Please enter a website URL or cricket exchange name to analyze (e.g. mylaser247.co).');
    const heroInput = document.getElementById('heroUrlInput');
    if (heroInput) heroInput.focus();
    return;
  }

  const modal = document.getElementById('auditModal');
  const content = document.getElementById('modalAuditContent');
  if (!modal || !content) return;

  // Show Modal in Loading / Scanning state
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  content.innerHTML = `
    <div style="text-align: center; padding: 20px 0;">
      <div style="width: 60px; height: 60px; border-radius: 50%; border: 4px solid rgba(0, 242, 254, 0.2); border-top-color: #00f2fe; animation: spin 0.8s linear infinite; margin: 0 auto 20px;"></div>
      <h3 style="font-size: 1.5rem; color: #fff; margin-bottom: 8px;">Analyzing "${query}"...</h3>
      <p style="color: #94a3b8; font-size: 0.95rem;" id="scanStageText">Connecting to Threat Intelligence Database...</p>
      
      <div style="background: rgba(255,255,255,0.06); height: 8px; border-radius: 99px; overflow: hidden; max-width: 320px; margin: 24px auto 0;">
        <div style="height: 100%; width: 0%; background: linear-gradient(90deg, #00f2fe, #10b981); transition: width 0.4s ease;" id="scanProgress"></div>
      </div>
    </div>
    <style>@keyframes spin { 100% { transform: rotate(360deg); } }</style>
  `;

  const stageText = document.getElementById('scanStageText');
  const progressBar = document.getElementById('scanProgress');

  setTimeout(() => {
    if (stageText) stageText.innerText = 'Validating 256-Bit SSL Certificate & Cryptographic Authority...';
    if (progressBar) progressBar.style.width = '35%';
  }, 450);

  setTimeout(() => {
    if (stageText) stageText.innerText = 'Checking WHOIS Domain Registration Age & Nameservers...';
    if (progressBar) progressBar.style.width = '70%';
  }, 900);

  setTimeout(() => {
    if (stageText) stageText.innerText = 'Cross-referencing 950+ Blacklisted Cricket Clone URLs...';
    if (progressBar) progressBar.style.width = '95%';
  }, 1350);

  setTimeout(() => {
    renderAuditResult(query);
  }, 1750);
};

function renderAuditResult(query) {
  const content = document.getElementById('modalAuditContent');
  if (!content) return;

  // Check verified list
  const verifiedMatch = AUDIT_KNOWLEDGE_BASE.verified.find(item => query.includes(item.domain) || item.domain.includes(query) || query.includes(item.name.toLowerCase()));
  
  // Check duplicate list
  const duplicateMatch = AUDIT_KNOWLEDGE_BASE.duplicates.find(item => query.includes(item.domain) || item.domain.includes(query) || (query.includes('laser247') && (query.includes('.in') || query.includes('-') || query.includes('id'))));

  if (verifiedMatch && !query.includes('-') && !query.includes('.in')) {
    // 100% ORIGINAL & SAFE RESULT
    content.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
          <span style="background: rgba(16, 185, 129, 0.15); color: #34d399; border: 1px solid rgba(16, 185, 129, 0.4); padding: 5px 14px; border-radius: 99px; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.5px;">
            <i class="fa-solid fa-circle-check"></i> AUDIT PASSED: SAFE PLATFORM
          </span>
          <span style="font-size: 0.82rem; color: #94a3b8; font-family: monospace;">ID: SCS-AUDIT-PASS</span>
        </div>

        <h3 style="font-size: 1.8rem; color: #fff; margin-bottom: 6px;">
          ${verifiedMatch.name} <span style="color: #34d399; font-size: 1.2rem;">(100% Genuine)</span>
        </h3>
        <p style="color: #94a3b8; font-size: 0.92rem; margin-bottom: 22px;">
          Domain: <strong style="color: #00f2fe;">${verifiedMatch.domain}</strong>
        </p>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 24px;">
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); padding: 12px 16px; border-radius: 12px;">
            <div style="font-size: 0.75rem; color: #94a3b8;">SSL Status</div>
            <div style="font-size: 0.92rem; font-weight: 700; color: #86efac; margin-top: 2px;"><i class="fa-solid fa-lock"></i> ${verifiedMatch.ssl}</div>
          </div>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); padding: 12px 16px; border-radius: 12px;">
            <div style="font-size: 0.75rem; color: #94a3b8;">Domain Lifespan</div>
            <div style="font-size: 0.92rem; font-weight: 700; color: #ffffff; margin-top: 2px;"><i class="fa-solid fa-calendar-check"></i> ${verifiedMatch.age} Established</div>
          </div>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); padding: 12px 16px; border-radius: 12px;">
            <div style="font-size: 0.75rem; color: #94a3b8;">Gaming License</div>
            <div style="font-size: 0.92rem; font-weight: 700; color: #facc15; margin-top: 2px;"><i class="fa-solid fa-award"></i> Verified Sovereign</div>
          </div>
          <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); padding: 12px 16px; border-radius: 12px;">
            <div style="font-size: 0.75rem; color: #94a3b8;">Withdrawal Speed</div>
            <div style="font-size: 0.92rem; font-weight: 700; color: #38bdf8; margin-top: 2px;"><i class="fa-solid fa-bolt"></i> ${verifiedMatch.payouts} Compliance</div>
          </div>
        </div>

        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 14px; margin-bottom: 24px; font-size: 0.88rem; color: #cbd5e1;">
          <strong style="color: #34d399;"><i class="fa-solid fa-shield-check"></i> Safe Cricket Space Verified:</strong> This domain is audited and safe. Always request the direct link through our official WhatsApp desk to bypass rogue mirror clones.
        </div>

        <button class="btn-yellow" id="btnModalGetWaLink" style="width: 100%; justify-content: center; padding: 14px 20px; font-size: 1.05rem;">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.3rem;"></i>
          <span>Get Verified Official Link on WhatsApp</span>
        </button>
      </div>
    `;

    document.getElementById('btnModalGetWaLink').addEventListener('click', () => {
      openWhatsApp(`Hello Safe Cricket Space! I verified "${verifiedMatch.name}" (${verifiedMatch.domain}) on your safety portal. Please provide me the official, direct WhatsApp link for instant safe withdrawals.`);
    });

  } else if (duplicateMatch || query.includes('-') || query.includes('fake') || query.includes('scam')) {
    // CRITICAL DUPLICATE SCAM RESULT
    const scamInfo = duplicateMatch || {
      domain: query,
      mimic: 'Popular Cricket Platform',
      issue: 'Unverified Copycat Domain',
      risk: 'Critical Fraud Risk',
      warning: 'This site exhibits all signs of clone fraud: anonymous servers, fake bonuses, and blocked payouts.'
    };

    content.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
          <span style="background: rgba(244, 63, 94, 0.2); color: #fca5a5; border: 1px solid rgba(244, 63, 94, 0.4); padding: 5px 14px; border-radius: 99px; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.5px;">
            ⚠️ CRITICAL ALERT: DUPLICATE / SCAM CLONE
          </span>
          <span style="font-size: 0.82rem; color: #f87171; font-family: monospace;">STATUS: HIGH RISK</span>
        </div>

        <h3 style="font-size: 1.7rem; color: #fff; margin-bottom: 6px;">
          Warning: Fake Clone Detected!
        </h3>
        <p style="color: #f87171; font-size: 0.95rem; font-family: monospace; margin-bottom: 20px;">
          Target: <strong>${scamInfo.domain}</strong>
        </p>

        <div style="background: rgba(30, 12, 18, 0.85); border: 1px solid rgba(244, 63, 94, 0.4); border-radius: 12px; padding: 18px; margin-bottom: 22px;">
          <div style="font-weight: 800; color: #fb7185; margin-bottom: 8px; font-size: 0.98rem;">
            <i class="fa-solid fa-triangle-exclamation"></i> Security Breach Factors:
          </div>
          <ul style="list-style: none; padding-left: 0; display: flex; flex-direction: column; gap: 8px; font-size: 0.88rem; color: #fecdd3;">
            <li><i class="fa-solid fa-circle-xmark" style="color: #f43f5e; margin-right: 6px;"></i> Impersonates genuine platform: <strong>${scamInfo.mimic}</strong></li>
            <li><i class="fa-solid fa-circle-xmark" style="color: #f43f5e; margin-right: 6px;"></i> Detection issue: <strong>${scamInfo.issue}</strong></li>
            <li><i class="fa-solid fa-circle-xmark" style="color: #f43f5e; margin-right: 6px;"></i> High probability of deposit theft and locked withdrawals</li>
          </ul>
        </div>

        <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 24px;">
          <strong>Do not deposit money or share OTPs on this link!</strong> Scammers create these clone links to steal your capital. Connect with our security team to obtain the authentic, verified master link.
        </p>

        <button class="btn-yellow" id="btnModalGetSafeAlternative" style="width: 100%; justify-content: center; padding: 14px 20px; font-size: 1.05rem;">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.3rem;"></i>
          <span>Get Verified Genuine Alternative on WhatsApp</span>
        </button>
      </div>
    `;

    document.getElementById('btnModalGetSafeAlternative').addEventListener('click', () => {
      openWhatsApp(`Hello Safe Cricket Space! I scanned "${query}" on your safety radar and it was flagged as a FAKE DUPLICATE CLONE. Please provide me with the 100% genuine, safe alternative link with guaranteed withdrawals.`);
    });

  } else {
    // UNVERIFIED DOMAIN (GENERIC SCAN AUDIT)
    content.innerHTML = `
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; flex-wrap: wrap; gap: 10px;">
          <span style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.4); padding: 5px 14px; border-radius: 99px; font-size: 0.8rem; font-weight: 800;">
            <i class="fa-solid fa-triangle-exclamation"></i> UNTESTED / UNVERIFIED DOMAIN
          </span>
          <span style="font-size: 0.82rem; color: #94a3b8; font-family: monospace;">AUDIT ADVISORY</span>
        </div>

        <h3 style="font-size: 1.65rem; color: #fff; margin-bottom: 6px;">
          Safety Report for: <span style="color: #38bdf8;">"${query}"</span>
        </h3>
        <p style="color: #94a3b8; font-size: 0.92rem; margin-bottom: 20px;">
          This domain is not yet indexed in our Certified Safe Database.
        </p>

        <div style="background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 16px; margin-bottom: 22px;">
          <div style="font-size: 0.92rem; font-weight: 700; color: #ffffff; margin-bottom: 8px;">
            Recommended Precaution Checklist:
          </div>
          <div style="font-size: 0.86rem; color: #cbd5e1; line-height: 1.6;">
            1. Ensure the URL starts with <strong>https://</strong> and displays a valid browser padlock.<br>
            2. Check if deposits are routed to verified corporate gateways rather than personal savings UPIs.<br>
            3. Never deposit on links received from random Telegram or WhatsApp message blasts.
          </div>
        </div>

        <button class="btn-yellow" id="btnModalRequestDeepAudit" style="width: 100%; justify-content: center; padding: 14px 20px; font-size: 1.05rem;">
          <i class="fa-brands fa-whatsapp" style="font-size: 1.3rem;"></i>
          <span>Ask Security Experts on WhatsApp (Free 60-Sec Audit)</span>
        </button>
      </div>
    `;

    document.getElementById('btnModalRequestDeepAudit').addEventListener('click', () => {
      openWhatsApp(`Hello Safe Cricket Space! I checked "${query}" on your portal. Please have an expert analyst review this domain and let me know if it is safe to play on.`);
    });
  }
}

/**
 * FAQ Accordion Handler
 */
window.toggleFaq = function(button) {
  const card = button.closest('.faq-item-card, .faq-card');
  if (!card) return;
  const isAlreadyActive = card.classList.contains('active');
  document.querySelectorAll('.faq-item-card, .faq-card').forEach(c => c.classList.remove('active'));
  if (!isAlreadyActive) {
    card.classList.add('active');
  }
};

function initFaqAccordions() {
  const cards = document.querySelectorAll('.faq-card, .faq-item-card');

  cards.forEach(card => {
    const trigger = card.querySelector('.faq-toggle-trigger, .faq-question-btn');
    if (!trigger) return;

    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const isAlreadyActive = card.classList.contains('active');
      cards.forEach(c => c.classList.remove('active'));
      if (!isAlreadyActive) {
        card.classList.add('active');
      }
    });
  });
}

/**
 * Live Activity Social Proof Toast Notifications
 */
function initLiveSocialProof() {
  const toast = document.getElementById('liveActivityToast');
  if (!toast) return;

  const names = [
    'Rohan S. (Mumbai)', 
    'Vikram P. (Delhi)', 
    'Amit K. (Bangalore)', 
    'Sunil M. (Jaipur)', 
    'Deepak G. (Indore)', 
    'Harish V. (Hyderabad)',
    'Karan T. (Ahmedabad)'
  ];
  
  const actions = [
    'Verified domain safety & avoided clone scam',
    'Received verified 100% genuine Cricket ID link',
    'Unlocked genuine instant withdrawal ID',
    'Reported a fake duplicate Telegram channel',
    'Saved funds by checking original vs duplicate'
  ];

  function showToast() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];

    const titleEl = toast.querySelector('.toast-title');
    const descEl = toast.querySelector('.toast-desc');

    if (titleEl && descEl) {
      titleEl.innerText = randomName;
      descEl.innerText = randomAction;
    }

    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // First toast after 3 seconds, then every 18 seconds
  setTimeout(() => {
    showToast();
    setInterval(showToast, 18000);
  }, 3000);
}
