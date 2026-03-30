/* TECH TABS */
function showTech(tab) {
document.querySelectorAll('.tech-content').forEach(el => {
el.classList.remove('active');
});
document.getElementById(tab).classList.add('active');
}

/* SCROLL REVEAL */
const elements = document.querySelectorAll('.hero, .featured, .card, .tech');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('show');
}
});
}, { threshold: 0.1 });

elements.forEach(el => observer.observe(el));

/* ACTIVE NAV */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop - 100;
if (scrollY >= sectionTop) {
current = section.getAttribute("id");
}
});

navLinks.forEach(a => {
a.classList.remove("active");
if (a.getAttribute("href") === "#" + current) {
a.classList.add("active");
}
});
});
