export default function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animationScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add('active');
        }
      });
    }
    animationScroll();
    window.addEventListener('scroll', animationScroll);
  }
}
