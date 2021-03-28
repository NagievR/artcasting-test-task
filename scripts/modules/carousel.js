const prevArrow = document.querySelector('.arrow.prev');
const nextArrow = document.querySelector('.arrow.next');
const carousel = document.querySelector('.candidates-carousel');
const strip = document.querySelector('.strip');
const carouselList = document.querySelector('.carousel-list');

const card = carouselList.firstElementChild;
const cardMarginRight = parseFloat(getComputedStyle(card).marginRight);
const itemsLength = carouselList.querySelectorAll('li').length;
const listPadding = 10;
const directions = {
  prev: 'previous',
  next: 'next',
};

const setupCarousel = quantity => {
  const cardWidth = card.offsetWidth + cardMarginRight;
  const settings = {
    shiftPx: 0,
    shiftDirection: cardWidth,
    visibleQuantity: quantity,
  };

  carousel.style.width = 
    settings.shiftDirection * settings.visibleQuantity + 'px';

  strip.style.width =
    settings.shiftDirection * settings.visibleQuantity - listPadding + 'px';

  prevArrow.addEventListener('click', () => slide(directions.prev, settings));
  nextArrow.addEventListener('click', () => slide(directions.next, settings));
};

const slide = (to, settings) => {
  let { shiftDirection, visibleQuantity } = settings;

  const slideToNext = () => {
    shiftDirection *= -1;
    const tail = 
      itemsLength * shiftDirection - (visibleQuantity * shiftDirection);

    if (settings.shiftPx === tail) {
      settings.shiftPx = 0;
    } else {
      settings.shiftPx += shiftDirection;
    }
  };

  const slideToPrev = () => {
    shiftDirection *= 1;
    const tail = 
      itemsLength * shiftDirection - (visibleQuantity * shiftDirection);

    if (settings.shiftPx === 0) {
      settings.shiftPx = tail * -1;
    } else {
      settings.shiftPx += shiftDirection;
    }
  };

  if (to === directions.next) {
    slideToNext();
  }
  if (to === directions.prev) {
    slideToPrev();
  }

  carouselList.style.marginLeft = settings.shiftPx + 'px';
}

export const defineCardsAmount = () => {
  const currWidth = document.documentElement.clientWidth;

  if (currWidth > 1250) {
    setupCarousel(6);
  } else if (currWidth > 1000) {
    setupCarousel(5);
  } else if (currWidth > 800) {
    setupCarousel(4);
  } else if (currWidth > 630) {
    setupCarousel(3);
  } else {
    setupCarousel(2);
  }
};

window.addEventListener('resize', () => defineCardsAmount());
