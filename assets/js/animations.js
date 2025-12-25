/* ============================================
   ANIMATIONS - PORTFOLIO RÉMI GUERIN
   v3.0 - Support Modern Design
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer pour les animations au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        
        // Ajoute la classe 'visible' pour déclencher le CSS
        element.classList.add('visible');
        
        // Stop observing une fois animé
        observer.unobserve(element);
      }
    });
  }, observerOptions);

  // 1. Observer les éléments avec l'ancienne classe .animate-on-scroll (Accordéons)
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });

  // 2. Observer les éléments avec la nouvelle classe .fade-in-up (Titres, Grilles)
  document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
  });

  // 3. Gestion spécifique des Badges de compétences
  // On ne les cache plus brutalement via JS pour éviter les bugs.
  // On laisse le CSS gérer l'apparition globale du bloc parent.
  
  // Si on veut un effet cascade (stagger) sur les badges, on peut le faire ici optionnellement
  // mais pour l'instant on assure juste qu'ils soient visibles.
  document.querySelectorAll('.skill-badge').forEach(badge => {
    // Reset propre au cas où du vieux JS traînerait
    badge.style.opacity = ''; 
    badge.style.transform = '';
  });
});