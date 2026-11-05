/* ============================================
   SCRIPTS PRINCIPAUX - PORTFOLIO RÉMI GUERIN
   v3.1 - Robust Navbar & Anchor Logic
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {
  
  const openAllBtn = document.getElementById('openAll');
  const closeAllBtn = document.getElementById('closeAll');
  const accordionItems = document.querySelectorAll('.accordion-collapse');

  if (openAllBtn && closeAllBtn) {
    openAllBtn.addEventListener('click', () => {
      accordionItems.forEach(item => bootstrap.Collapse.getOrCreateInstance(item, { toggle: false }).show());
    });
    closeAllBtn.addEventListener('click', () => {
      accordionItems.forEach(item => bootstrap.Collapse.getOrCreateInstance(item, { toggle: false }).hide());
    });
  }
});