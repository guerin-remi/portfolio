/* ============================================
   MODERN INTERACTIONS - PORTFOLIO RÉMI GUERIN
   Scroll Progress, Smooth Scroll, Modern Features
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ===== SCROLL PROGRESS BAR =====
  const scrollProgress = document.querySelector('.scroll-progress');

  if (scrollProgress) {
    function updateScrollProgress() {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      scrollProgress.style.width = scrolled + '%';
    }

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();
  }

  // ===== SMOOTH SCROLL TO CONTENT =====
  const scrollIndicator = document.querySelector('.scroll-indicator');

  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
      const contentSection = document.querySelector('.content-section');
      if (contentSection) {
        contentSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  // ===== HERO CTA SMOOTH SCROLL =====
  const heroCta = document.querySelector('.hero-cta');

  if (heroCta) {
    heroCta.addEventListener('click', function(e) {
      e.preventDefault();
      const projectsSection = document.querySelector('#projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  }

  // ===== FADE IN ON SCROLL =====
  const fadeElements = document.querySelectorAll('.fade-in-up');

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  fadeElements.forEach(el => fadeObserver.observe(el));

  // ===== PROJECT CARDS CLICK =====
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Si on ne clique pas directement sur un lien
      if (e.target.tagName !== 'A') {
        const link = this.querySelector('.project-card-link');
        if (link) {
          window.location.href = link.getAttribute('href');
        }
      }
    });

    // Effet de hover 3D subtil
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      this.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // ===== TYPING EFFECT (optionnel pour le titre hero) =====
  const typingElement = document.querySelector('.typing-text');

  if (typingElement) {
    const text = typingElement.getAttribute('data-text') || typingElement.textContent;
    typingElement.textContent = '';
    typingElement.style.opacity = '1';

    let charIndex = 0;

    function typeChar() {
      if (charIndex < text.length) {
        typingElement.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeChar, 50);
      }
    }

    setTimeout(typeChar, 500);
  }

  // ===== COUNTER ANIMATION (pour stats) =====
  const counters = document.querySelectorAll('.counter');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += increment;
          if (current < target) {
            entry.target.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
          } else {
            entry.target.textContent = target;
            entry.target.classList.add('counted');
          }
        };

        updateCounter();
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

});
