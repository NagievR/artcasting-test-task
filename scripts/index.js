import { defineCardsAmount } from "./modules/carousel.js";
import dropdownToggle from "./modules/dropdown-toggle.js";
import rangeSlider from "./modules/range-slider.js";
import toggleMenu from "./modules/toggle-menu.js";

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');

toggleMenu(burger, 'active', header);
dropdownToggle();
rangeSlider();
defineCardsAmount();

console.log('upd...');
