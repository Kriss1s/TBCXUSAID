import Carousel from './carousel.min';
import Questions from './question.min';
import HamburgerMenu from './humburgerMenu.min';

const url =
  'https://api.jsonsilo.com/public/d2101e93-3f41-48fd-85eb-9a7abbb79b2e';

const hamburgerMenu = new HamburgerMenu();
const carousel = new Carousel('.carousel-container', {
  interval: 2000,
});
const faqSection = new Questions('.faq-questions-wrapper', url, 3);

hamburgerMenu.init();
carousel.init();
faqSection.init();
