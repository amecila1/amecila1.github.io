// Custom cursor with trail
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';

  const dot = document.createElement('div');
  dot.className    = 'cursor-dot';
  dot.style.left   = e.clientX + 'px';
  dot.style.top    = e.clientY + 'px';
  document.body.appendChild(dot);
  setTimeout(() => dot.remove(), 400);
});

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
