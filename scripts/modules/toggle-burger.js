const toggleBurger = (trigger, className, selector) => {
  trigger.addEventListener('click', () => {
    selector.forEach(it => it.classList.toggle(className));
  })
};

export default toggleBurger;