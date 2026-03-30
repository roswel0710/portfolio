/* ============================================
   ROSWEL ALMEIDA — PORTFOLIO SCRIPTS
   ============================================ */

// --- Mobile Navigation ---
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// --- Resume Modal ---
const resumeModal = document.getElementById('resumeModal');
const modalClose = document.getElementById('modalClose');
const resumeBtn = document.getElementById('resumeBtn');
const viewResumeBtn = document.getElementById('viewResumeBtn');
const resumeBtnMobile = document.getElementById('resumeBtnMobile');

function openModal() {
    resumeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    mobileMenu.classList.remove('active');
}

function closeModal() {
    resumeModal.classList.remove('active');
    document.body.style.overflow = '';
}

resumeBtn.addEventListener('click', openModal);
viewResumeBtn.addEventListener('click', openModal);
resumeBtnMobile.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

resumeModal.addEventListener('click', (e) => {
    if (e.target === resumeModal) closeModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// --- Scroll Reveal ---
const revealElements = document.querySelectorAll(
    '.section-title, .section-subtitle, .section-icon, ' +
    '.toolkit-card, .project-card, ' +
    '.dashboard-header, .kpi-card, .chart-card, ' +
    '.contact-card'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger animation for grid items
            const siblings = entry.target.parentElement.querySelectorAll('.reveal');
            const index = Array.from(siblings).indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 60}ms`;
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => observer.observe(el));

// --- Bar chart animation on scroll ---
const barFills = document.querySelectorAll('.bar-fill');
const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = entry.target.style.width;
            entry.target.style.width = '0%';
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    entry.target.style.width = width;
                });
            });
        }
    });
}, { threshold: 0.3 });

barFills.forEach(bar => barObserver.observe(bar));

// --- Dashboard filter buttons (visual toggle) ---
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

// --- Navbar shadow on scroll ---
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        nav.style.borderBottomColor = 'rgba(255,255,255,0.06)';
        nav.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
        nav.style.borderBottomColor = '';
        nav.style.boxShadow = '';
    }
});

// --- Active nav link highlight ---
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 100;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#00C896';
        }
    });
});
