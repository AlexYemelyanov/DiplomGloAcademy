'use strict';

const popup = () => {
  const headMain = document.querySelector('.head-main'),
    freeVisit = document.getElementById('free_visit_form'),
    callback = document.getElementById('callback_form'),
    closeFormFree = freeVisit.querySelector('.close-form'),
    closeFormCall = callback.querySelector('.close-form'),
    thanks = document.getElementById('thanks'),
    closeThanksForm = thanks.querySelector('.close-form'),
    btnOkThanks = thanks.querySelector('.close-btn'),
    btnOkVisit = freeVisit.querySelector('.close-btn'),
    btnOkCall = callback.querySelector('.close-btn'),
    form2 = document.getElementById('form2'),
    form1 = document.getElementById('form1');


  const freeOpen = () => {
    freeVisit.style.display = 'block';
  }
  const callbackOpen = () => {
    callback.style.display = 'flex';
  }

  const closeFree = () => {
    freeVisit.style.display = 'none';
  }

  const closeCallback = () => {
    callback.style.display = 'none';
  }

  const closeThanks = () => {
    thanks.style.display = 'none';
  }

  freeVisit.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.form-content');
    if (!target) {
      closeFree();
      form2.reset();
    }
    if (closeFormFree === !target) {

      closeFree();
      form2.reset();
    }
    if (btnOkVisit === event.target) {
      closeFree();
      form2.reset();
    }

  })

  thanks.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.form-content');
    if (!target) {
      closeThanks();

    }
    if (closeThanksForm === !target) {
      closeThanks();
    }
    if (btnOkThanks === event.target) {
      closeThanks();
    }
  })

  callback.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.form-content');
    if (!target) {
      closeCallback();
      form1.reset();
    }
    if (closeFormCall === !target) {
      closeCallback();
      form1.reset();
    }
    if (btnOkThanks === event.target) {
      btnOkCall();
      form1.reset();
    }
  })







  headMain.addEventListener('click', (e) => {

    if (e.target.matches('.open-popup')) {

      freeOpen();
    }
    if (e.target.matches('.callback-btn')) {


      callbackOpen();
    }
  })
};
export default popup;