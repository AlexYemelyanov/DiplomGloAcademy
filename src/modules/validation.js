'use strict';

const validation = () => {

  const footerForm = document.getElementById('footer_form');
  if (footerForm) {
    const footerLetoMozaika = document.getElementById('footer_leto_mozaika'),
      footerLetoSchelkovo = document.getElementById('footer_leto_schelkovo'),
      footerFormPhone = document.getElementById('callback_footer_form-phone');


    footerForm.addEventListener('submit', valid1);

    const elementFooterForm = [];

    for (const elem of footerForm.elements) {
      if (elem.tagName.toLowerCase() !== 'button' &&
        elem.type !== 'button') {
        elementFooterForm.push(elem);
      }
    };


    function valid1(event) {

      elementFooterForm.forEach((elem) => {
        if (!elem.value) {
          event.preventDefault();
        }
        if (!elem.checked) {
          event.preventDefault();
        }
      })
    };


    footerForm.addEventListener('input', (e) => {

      footerFormPhone.value = footerFormPhone.value.replace(/[^\+()\d]/ig, '')

    })
  }

  const form2 = document.getElementById('form2');
  if (form2) {
    const form2Name = document.getElementById('callback_form2-name'),
      form2Phone = document.getElementById('callback_form2-phone');

    const elementForm2 = [];

    for (const elem of form2.elements) {
      if (elem.tagName.toLowerCase() !== 'button' &&
        elem.type !== 'button') {
        elementForm2.push(elem);
      }
    };
    form2.addEventListener('submit', valid);


    function valid(event) {

      elementForm2.forEach((elem) => {

        if (!elem.value) {
          event.preventDefault();
        }
      })

    };


    form2.addEventListener('input', (e) => {

      form2Name.value = form2Name.value.replace(/[^А-Яа-яЁё\s]/ig, '');

      form2Phone.value = form2Phone.value.replace(/[^\+\d]/, '')

    })
  }

  const form1 = document.getElementById('form1');
  if (form1) {
    const formName = document.getElementById('callback_name'),
      formPhone = document.getElementById('callback_phone'),
      check = document.getElementById('check1');
    const elementForm1 = [];

    for (const elem of form1.elements) {
      if (elem.tagName.toLowerCase() !== 'button' &&
        elem.type !== 'button') {
        elementForm1.push(elem);
      }
    };
    form1.addEventListener('submit', valid);

    function valid(event) {

      elementForm1.forEach((elem) => {

        if (!elem.value) {
          event.preventDefault();
        }
        if (!elem.checked) {
          event.preventDefault();
        }
      })


    };
    form1.addEventListener('input', (e) => {

      formName.value = formName.value.replace(/[^А-Яа-яЁё\s]/ig, '');
      formPhone.value = formPhone.value.replace(/[^\+\d]/, '')

    })
  }


  const cardOrder = document.getElementById('card_order');
  if (cardOrder) {
    const cardLetoMozaika = document.getElementById('card_leto_mozaika'),
      cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),
      nameClubOrder = document.getElementById('name-club_order'),
      callbackFormPhone = document.getElementById('callback_form-phone'),
      promo = document.getElementById('promo');


    const elementFormCard = [];

    for (const elem of cardOrder.elements) {
      if (elem.tagName.toLowerCase() !== 'button' &&
        elem.type !== 'button') {
        elementFormCard.push(elem);
      }
    };

    function valid(event) {
      console.log(event)
      elementFormCard.forEach((elem) => {
        console.log(elem)
        if (!elem.value) {
          event.preventDefault();
        }

        if (elem === promo) {
          return;
        }
      })
    }
    cardOrder.addEventListener('input', (e) => {

      nameClubOrder.value = nameClubOrder.value.replace(/[^А-Яа-яЁё\s]/ig, '');
      callbackFormPhone.value = callbackFormPhone.value.replace(/[^\+\d]/, '')

    })
    cardOrder.addEventListener('submit', valid);
  }

  const bannerForm = document.getElementById('banner-form');
  if (bannerForm) {
    const phone = document.getElementById('phone'),
      bannerName = document.getElementById('banner-name'),
      check1 = document.getElementById('check1');
    const elementFormBanner = [];
    bannerForm.addEventListener('submit', valid);
    for (const elem of bannerForm.elements) {
      if (elem.tagName.toLowerCase() !== 'button' &&
        elem.type !== 'button') {
        elementFormBanner.push(elem);
      }
    };


    function valid(event) {

      elementFormBanner.forEach((elem) => {

        if (elem === phone) {
          if (!elem.value) {
            event.preventDefault();
          }
        }
        if (elem === bannerName) {
          if (!elem.value) {
            event.preventDefault();
          }
        }
      })
    }
    bannerForm.addEventListener('input', (e) => {

      bannerName.value = bannerName.value.replace(/[^А-Яа-яЁё\s]/ig, '');
      phone.value = phone.value.replace(/[^\+\d]/, '')

    })

  }

}
export default validation;