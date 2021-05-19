'use striict';

const gallerySlider = () => {
  const slide = document.querySelector('.gallery-slider').querySelectorAll('.slide'),
    slider = document.querySelector('.gallery-slider'),
    sliderId = document.getElementById('gallery');
  let currentSlide = 0,
    dot = document.querySelectorAll('.dot'),
    interval;

  let newArrowLeft = document.createElement('a');
  let newArrowRight = document.createElement('a');
  newArrowLeft.className = `slider-arrow prev`;

  newArrowRight.className = `slider-arrow next`;

  slider.append(newArrowLeft);
  slider.append(newArrowRight);

  let newParent = document.createElement('ul');
  newParent.classList.add('gallery-dots');
  slider.append(newParent);


  let addDot = () => {
    slide.forEach(() => {
      let parentDot = newParent;
      let newDot = document.createElement('li');
      newDot.classList.add(`dot`);
      parentDot.append(newDot)
    });

    if (dot === 0) {
      newDot.classList.add('slick-active');
    }

  };
  addDot();
  dot = document.querySelectorAll('.dot');



  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  }

  const autoPlaySlide = () => {

    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'slick-active');
    currentSlide++;
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'slick-active');

  };

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };


  const stoptSlide = () => {
    clearInterval(interval);
  };

  sliderId.addEventListener('click', (event) => {

    event.preventDefault();

    let target = event.target;

    if (!target.matches('.slider-arrow, .dot')) {
      return;
    }

    prevSlide(slide, currentSlide, 'slide-active');
    prevSlide(dot, currentSlide, 'slick-active');

    if (target.matches('.next')) {
      currentSlide++;
    } else if (target.matches('.prev')) {
      currentSlide--;
    } else if (target.matches('.dot')) {
      dot.forEach((elem, index) => {
        if (elem === target) {
          currentSlide = index;
        }
      });
    };
    if (currentSlide >= slide.length) {
      currentSlide = 0;
    } else if (currentSlide < 0) {
      currentSlide = slide.length - 1;
    }

    nextSlide(slide, currentSlide, 'slide-active');
    nextSlide(dot, currentSlide, 'slick-active');
  });

  slider.addEventListener('mouseover', (event) => {

    if (event.target.matches('.slider-arrow') ||
      event.target.matches('.dot')) {
      stoptSlide();
    }
  });
  slider.addEventListener('mouseout', (event) => {
    if (event.target.matches('.slider-arrow') ||
      event.target.matches('.dot')) {
      startSlide(1500);
    }

  })

  startSlide(1500);


};
export default gallerySlider;