const slider = document.getElementById('range-slider');
const inputLeft = document.getElementById('input-left');
const inputRight = document.getElementById('input-right');
const thumbLeft = document.querySelector('.slider > .thumb.left');
const thumbRight = document.querySelector('.slider > .thumb.right');
const range = document.querySelector('.slider > .range');
const leftThumbAge = document.getElementById('left-thumb-age');
const rightThumbAge = document.getElementById('right-thumb-age');

const activeClass = 'active-dropdown';

slider.classList.add(activeClass);

const rangeSlider = () => {
  toggle();
  setLeftPosition();
  setRightPosition();
};

const toggle = () => {
  const sliderSelect = slider.firstElementChild;
  sliderSelect.addEventListener('click', () => {
    slider.classList.toggle(activeClass);
  });
};

const setLeftPosition = () => {
  const min = parseInt(inputLeft.min);
  const max = parseInt(inputLeft.max);

  const value = Math.min(parseInt(inputLeft.value), parseInt(inputRight.value));
  const percent = ((value - min) / (max - min)) * 100;

  inputLeft.value = value;
  leftThumbAge.innerHTML = value + ' лет';
  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}

const setRightPosition = () => {
  const min = parseInt(inputRight.min);
  const max = parseInt(inputRight.max);

  const value = Math.max(parseInt(inputRight.value), parseInt(inputLeft.value));
  const percent = ((value - min) / (max - min)) * 100;

  inputRight.value = value;
  rightThumbAge.innerHTML = value + ' лет';
  thumbRight.style.right = (100 - percent) + "%";
  range.style.right = (100 - percent) + "%";
}

inputLeft.addEventListener("input", setLeftPosition);
inputRight.addEventListener("input", setRightPosition);

inputLeft.addEventListener("mouseover", () => {
  thumbLeft.classList.add("thumb-hover");
});
inputLeft.addEventListener("mouseout", () => {
  thumbLeft.classList.remove("thumb-hover");
});
inputRight.addEventListener("mouseover", () => {
  thumbRight.classList.add("thumb-hover");
});
inputRight.addEventListener("mouseout", () => {
  thumbRight.classList.remove("thumb-hover");
});

export default rangeSlider;
