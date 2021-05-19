'use strict';

const headSlider = () => {
  const slides = document.querySelector('.main-slider').querySelectorAll('.slide');
  let currentSlide = 0;


  const prevSlide = (elem, index, styleSlide) => {
    elem[index].style.display = styleSlide;
  };

  const nextSlide = (elem, index, styleSlide) => {
    elem[index].style.display = styleSlide;
  }


  const autoPlaySlide = () => {

    prevSlide(slides, currentSlide, 'none');

    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, 'flex');


  };

  const startSlide = (time = 3000) => {
    setInterval(autoPlaySlide, time);
  };

  startSlide(3000);
};

export default headSlider;