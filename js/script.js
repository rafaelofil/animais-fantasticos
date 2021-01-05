import SmoothScroll from './modules/smooth-scroll.js';
import initAnimationScroll from './modules/scroll-animation.js';
import Accordion from './modules/accordion.js';
import initTabNav from './modules/tab-nav.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initDropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initAnimateNumbers from './modules/animate-numbers.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

initAnimationScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initAnimateNumbers();
