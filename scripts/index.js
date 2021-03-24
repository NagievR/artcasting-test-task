import toggleBurger from "./modules/toggle-burger.js";

const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');

toggleBurger(burger, 'active', [burger, navigation, header]);
