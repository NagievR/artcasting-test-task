const toggleBurger = (selector, className) => {

  selector.addEventListener('click', () => {
    selector.classList.toggle(className);
  })
};

export default toggleBurger;