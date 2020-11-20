function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

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
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );
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
initSmoothScroll();

function initAnimationScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const halfWindow = window.innerHeight * 0.6;

    function animationScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        isSectionVisible = sectionTop - halfWindow < 0;
        if (isSectionVisible) {
          section.classList.add('active');
        }
      });
    }
    animationScroll();
    window.addEventListener('scroll', animationScroll);
  }
}
initAnimationScroll();
