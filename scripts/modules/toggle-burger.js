const logo = "./assets/images/logo.png";
const logoWhite = "./assets/images/logo-white.png";

const toggleMenu = (trigger, className, selector) => {
  trigger.addEventListener('click', () => {
    selector.forEach(it => it.classList.toggle(className));
    toggleLogoImage(!selector[0].classList.contains(className));
  });
};

const toggleLogoImage = condition => {
  const logoImage = document.querySelector('.logo-link > img');
  logoImage.src = condition ? logo : logoWhite;
}

export default toggleMenu;
