'use strict';

const gift = () => {
  const fixedGift = document.querySelector('.fixed-gift');


  if (fixedGift) {
    const gift = document.getElementById('gift'),
      closeForm = gift.querySelector('.close-form'),
      btnOk = gift.querySelector('.close-btn');
    const showGift = () => {
      gift.style.display = 'block';
      fixedGift.style.display = 'none';
    };

    const closeGift = () => {
      gift.style.display = 'none';
    }

    gift.addEventListener('click', (event) => {

      let target = event.target;
      target = target.closest('.form-content');
      if (!target) {
        closeGift();
      }
      if (closeForm === !target) {
        closeGift()
      }
      if (btnOk === event.target) {

        closeGift()
      }
    })

    fixedGift.addEventListener('click', showGift)
  } else {
    return;
  }


};


export default gift;