const logoImage = document.querySelector('.logo-link > img');
const logo = "./assets/images/logo.png";
const logoWhite = "./assets/images/logo-white.png";
const mobileDeviceMaxWidth = 710;

const toggleMenu = (trigger, className, selector) => {

  // close menu and set default logo image when screen
  // becoming bigger than mobile device max width
  window.addEventListener('resize', e => {
    if (e.target.innerWidth > mobileDeviceMaxWidth) {
      selector.classList.remove(className);
      logoImage.src = logo;
    }
  });

  trigger.addEventListener('click', () => {
    selector.classList.toggle(className);
    toggleLogoImage(logoImage, !selector.classList.contains(className));
  });
};

const toggleLogoImage = (elem, condition) => {
  if (condition) {
    elem.src = logo;
    document.body.style.overflow = 'visible';
  } else {
    elem.src = logoWhite;
    document.body.style.overflow = 'hidden';
  }
}

export default toggleMenu;
