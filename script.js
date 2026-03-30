/* ============================================
   ROSEWAL ALMEIDA — PORTFOLIO SCRIPTS
   ============================================ */

// --- Live Dubai time in nav ---
function updateTime() {
    const now = new Date();
    const dubaiTime = now.toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Dubai',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    });
    const el = document.getElementById('navTime');
    if (el) el.textContent = dubaiTime;
}
updateTime();
setInterval(updateTime, 30000);

// --- Scroll Reveal ---
const revealEls = document.querySelectorAll(
    '.section-heading, .section-sub, .scroll-hint, ' +
    '.project-card, .about-text, ' +
    '.exp-row, .footer-top, .footer-blurb, .footer-email'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent ? parent.querySelectorAll('.reveal') : [];
            const idx = Array.from(siblings).indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 50}ms`;
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => observer.observe(el));

// --- Navbar subtle shadow on scroll ---
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        nav.style.boxShadow = '0 1px 12px rgba(0,0,0,0.06)';
    } else {
        nav.style.boxShadow = 'none';
    }
});
