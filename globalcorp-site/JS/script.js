// script.js - GlobalCorp Interactivity

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Mobile nav toggle (optional future feature)
// const navToggle = document.querySelector('.nav-toggle');
// const navLinks = document.querySelector('.nav-links');
// navToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('open');
// });

// Placeholder for more interactivity like modals or sliders
console.log('GlobalCorp site loaded 🚀');
