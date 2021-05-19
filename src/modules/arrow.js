'use strict';

const arrow = () => {
  const arrowIco = document.getElementById('totop'),
    clubs = document.getElementById('clubs'),
    mozaika = document.getElementById('leto-mozaika');

  arrowIco.style.display = 'none';

  document.addEventListener('scroll', () => {
    if (clubs) {
      if (clubs.getBoundingClientRect().top <= 0) {
        arrowIco.style.display = 'block';
      }
      if (clubs.getBoundingClientRect().top > 0) {
        arrowIco.style.display = 'none';
      }
    }
    if (mozaika) {
      if (mozaika.getBoundingClientRect().top <= 0) {
        arrowIco.style.display = 'block';
      }
      if (mozaika.getBoundingClientRect().top > 0) {
        arrowIco.style.display = 'none';
      }
    }


  });

  arrowIco.addEventListener('click', (e) => {
    e.preventDefault();
    if (clubs) {
      let href = arrowIco.getAttribute('href').substring(1);


      const scrollTarget = document.querySelector(`.${href}`);
      const topOffset = 0;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    if (mozaika) {
      let href = arrowIco.getAttribute('href').substring(1);


      const scrollTarget = document.querySelector(`.${href}`);
      const topOffset = 0;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

  })
};
export default arrow;