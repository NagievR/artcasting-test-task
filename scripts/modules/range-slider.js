const slider = document.getElementById('range-slider');
const activeClass = 'active-dropdown';

const rangeSlider = () => {
  const sliderSelect = slider.firstElementChild;

  sliderSelect.addEventListener('click', () => {
    slider.classList.toggle(activeClass);
  });
};

export default rangeSlider;
