/* ============================================
   SCRIPTS PRINCIPAUX - PORTFOLIO RÉMI GUERIN
   v3.1 - Robust Navbar & Anchor Logic
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  
  // --- 1. Gestion de la Smart Navbar ---
  const navbar = document.querySelector('.navbar-scroll');
  
  if (navbar) {
    const checkScroll = () => {
      // Seuil adaptatif : 600px sur Desktop, 200px sur Mobile
      const threshold = window.innerWidth < 768 ? 200 : 600;

      // Condition 1 : Scroll > Seuil
      // Condition 2 : Ancre présente dans l'URL (Force l'affichage)
      const hasAnchor = window.location.hash === '#projects-section';
      
      // Si on a l'ancre, on affiche. Sinon, on dépend du scroll.
      if (window.scrollY > threshold) {
        navbar.classList.add('visible');
      } else {
        navbar.classList.remove('visible');
      }
    };

    // Vérification initiale
    checkScroll();

    // Écouteur de scroll optimisé
    window.addEventListener('scroll', checkScroll, { passive: true });
  }

  // --- 2. Gestion de l'ancre au chargement (Navigation "Retour au CV") ---
  if (window.location.hash === '#projects-section') {
    // A l'initialisation seulement, si on est censé être en bas, on peut pré-afficher
    // Mais le checkScroll() ci-dessus s'en chargera dès que le scrollIntoView partira.
    
    // On scrolle vers la section après un court délai
    setTimeout(() => {
      const projectsSection = document.getElementById('projects-section');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  } else {
    // Si pas d'ancre, on remonte en haut (pour la propreté)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }

  // --- 3. Gestion de l'accordéon (Ouvrir/Fermer tout) ---
  const openAllBtn = document.getElementById('openAll');
  const closeAllBtn = document.getElementById('closeAll');
  const accordionItems = document.querySelectorAll('.accordion-collapse');

  if (openAllBtn && closeAllBtn) {
    // Ouvrir toutes les sections avec effet cascade
    openAllBtn.addEventListener('click', function () {
      accordionItems.forEach((item, index) => {
        if (!item.classList.contains('show')) {
          setTimeout(() => {
            const bsCollapse = new bootstrap.Collapse(item, { show: true });
          }, index * 100);
        }
      });
    });

    // Fermer toutes les sections avec effet cascade
    closeAllBtn.addEventListener('click', function () {
      accordionItems.forEach((item, index) => {
        setTimeout(() => {
          const bsCollapse = bootstrap.Collapse.getInstance(item);
          if (bsCollapse) {
            bsCollapse.hide();
          } else {
            item.classList.remove('show');
          }
        }, index * 50);
      });
    });
  }

});