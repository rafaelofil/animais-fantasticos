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
