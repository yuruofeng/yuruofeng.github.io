// ══════════════════════════════════════
// JENNA'S TECH SPACE — Main JS
// ══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Particles ──
  const pc = document.getElementById('particles');
  if (pc) {
    for (let i = 0; i < 25; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = Math.random() * 100 + '%';
      p.style.animationDuration = (8 + Math.random() * 12) + 's';
      p.style.animationDelay = Math.random() * 10 + 's';
      const size = (1 + Math.random() * 2) + 'px';
      p.style.width = size;
      p.style.height = size;
      pc.appendChild(p);
    }
  }

  // ── Scroll Reveal ──
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(el => observer.observe(el));
  }

  // ── Nav scroll border ──
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.borderBottomColor = window.scrollY > 50
        ? 'rgba(0, 229, 255, 0.1)'
        : '';
    });
  }

  // ── Mobile Nav Toggle ──
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('show');
    });
  }

  // ── Tag Filtering ──
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('[data-tags]');

  if (filterBtns.length && filterItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active state
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        filterItems.forEach(item => {
          if (filter === 'all') {
            item.style.display = '';
            return;
          }
          const tags = item.getAttribute('data-tags').split(',');
          item.style.display = tags.includes(filter) ? '' : 'none';
        });
      });
    });
  }
});
