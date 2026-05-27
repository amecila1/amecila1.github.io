// Custom cursor with trail
const cursor = document.getElementById('cursor');

const trailColors = ['#7d8c3a', '#c9903a', '#b83030', '#7aaac8', '#8b5530'];

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top  = e.clientY + 'px';

  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const dot = document.createElement('div');
      const offset = () => (Math.random() - 0.5) * 20;
      dot.className             = 'cursor-dot';
      dot.style.left            = (e.clientX + offset()) + 'px';
      dot.style.top             = (e.clientY + offset()) + 'px';
      dot.style.backgroundColor = trailColors[Math.floor(Math.random() * trailColors.length)];
      document.body.appendChild(dot);
      setTimeout(() => dot.remove(), 600);
    }, i * 50);
  }
});

// Project carousel
const track = document.querySelector('.carousel-track');
if (track) {
  const window_ = document.querySelector('.carousel-window');
  const cards = track.querySelectorAll('.project-card');
  let current = 0;
  const max = cards.length - 2;

  const goTo = (index) => {
    current = Math.max(0, Math.min(index, max));
    const cardWidth = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${current * cardWidth}px)`;
  };

  document.querySelector('.carousel-prev').addEventListener('click', () => goTo(current - 1));
  document.querySelector('.carousel-next').addEventListener('click', () => goTo(current + 1));
}

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
