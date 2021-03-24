import toggleMenu from "./modules/toggle-menu.js";

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
toggleMenu(burger, 'active', header);
