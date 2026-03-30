/* Rosewal Almeida — Portfolio Scripts */

// Dubai live clock
function updateTime() {
    const el = document.getElementById('navTime');
    if (!el) return;
    el.textContent = new Date().toLocaleTimeString('en-GB', {
        timeZone: 'Asia/Dubai', hour: '2-digit', minute: '2-digit', hour12: false
    });
}
updateTime();
setInterval(updateTime, 30000);

// Scroll reveal with stagger
const els = document.querySelectorAll(
    '.section-title, .section-sub, .hero-badge, .hero-title, .hero-sub, .hero-ctas, ' +
    '.hero-card, .hero-tagline, .pcard, ' +
    '.about-right, .exp-row, .cert-card, ' +
    '.footer-head, .footer-text, .footer-email'
);
els.forEach(e => e.classList.add('reveal'));

const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const p = entry.target.parentElement;
            const siblings = p ? Array.from(p.querySelectorAll('.reveal')) : [];
            const i = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${Math.max(0, i) * 60}ms`;
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

els.forEach(e => obs.observe(e));

// Nav shadow
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    nav.style.boxShadow = window.scrollY > 30
        ? '0 1px 12px rgba(0,0,0,0.05)' : 'none';
});
