function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabContent = document.querySelectorAll('.js-tab-content section');

  if (tabMenu.length && tabContent) {
    tabContent[0].classList.add('active');
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('active');
      });
      tabContent[index].classList.add('active');
    }

    tabMenu.forEach((elementMenu, index) => {
      elementMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  const active = 'active';

  if (accordionList.length) {
    accordionList[0].classList.add(active);
    accordionList[0].nextElementSibling.classList.add(active);

    function activeAccordion() {
      this.classList.toggle(active);
      this.nextElementSibling.classList.toggle(active);
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordion();

function initSmoothScroll() {
  const linksInt = document.querySelectorAll('.js-menu a[href^="#"]');

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
initSmoothScroll();
