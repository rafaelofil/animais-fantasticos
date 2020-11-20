export default function initSmoothScroll() {
  const linksInt = document.querySelectorAll(
    '[data-menu="smooth"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const top = section.offsetTop;

    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
  }

  linksInt.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}
