document.addEventListener("DOMContentLoaded", function () {
  const hero = document.querySelector('.hero');
  let animated = false;

  function animateHero() {
    if (animated) return;
    const rect = hero.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      hero.classList.add('animate');
      animated = true;
    }
  }

  window.addEventListener('scroll', animateHero);
  window.addEventListener('pageshow', animateHero);
  animateHero();
});