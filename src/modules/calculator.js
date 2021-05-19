'use strict';

const calculator = () => {
  const cardTypes = document.getElementById('card_order').querySelector('.cards-types')
  if (cardTypes) {
    const cardTypesInputs = cardTypes.querySelectorAll('input');
    cardTypesInputs.forEach((elem) => {
      elem.checked = false;
      elem.addEventListener('click', (e) => {
        e.target.checked = true;
      })
    })
  }

  const time = document.querySelector('.time');
  if (time) {
    const timeElems = time.querySelectorAll('input'),
      cardOrder = document.getElementById('card_order'),
      cardLetoMozaika = document.getElementById('card_leto_mozaika'),
      cardLetoSchelkovo = document.getElementById('card_leto_schelkovo'),
      club = cardOrder.querySelectorAll('.club'),
      priceTotal = document.getElementById('price-total'),
      priceText = cardOrder.querySelector('.price').querySelector('input'),
      price = cardOrder.querySelector('.price');

    price.addEventListener('input', (e) => {
      if (e.target.matches('input')) {
        e.target.value = e.target.value.replace(/[^А-ЯЁ\d]/ig, '');
      }
    })

    priceTotal.textContent = '';
    timeElems.forEach((elem) => {
      elem.checked = false;
    })

    club.forEach((elem) => {
      elem.querySelector('input').checked = false;

      elem.addEventListener('click', (e) => {
        let target = e.target;
        timeElems.forEach((elem) => {
          elem.checked = false;
        });

        priceTotal.textContent = '';
        priceText.value = '';
        if (target === cardLetoMozaika) {
          target.checked = true;
          time.addEventListener('click', (e) => {
            let target = e.target;

            timeElems.forEach((el) => {

              if (target.id === el.id) {
                if (m1) {
                  m1.value = 1990;
                }
                if (m2) {
                  m2.value = 9900;
                }
                if (m3) {
                  m3.value = 13900;
                }
                if (m4) {
                  m4.value = 19900;
                }
              }
              price.addEventListener('input', (e) => {
                if (e.target.matches('input')) {
                  e.target.value = e.target.value.replace(/[^А-ЯЁ\d]/ig, '');
                }
                if (e.target.value === 'ТЕЛО2021') {
                  priceTotal.textContent = target.value - Math.round(target.value * 0.3);
                } else {
                  priceTotal.textContent = target.value;
                }
              })

              if (priceText.value === 'ТЕЛО2021') {
                priceTotal.textContent = target.value - Math.round(target.value * 0.3);
              } else {
                priceTotal.textContent = target.value;
              }

            })
          });

        }
        if (target === cardLetoSchelkovo) {
          target.checked = true;
          time.addEventListener('click', (e) => {
            let target = e.target;

            timeElems.forEach((el) => {
              if (target.id === el.id) {
                if (m1) {
                  m1.value = 2999;
                }
                if (m2) {
                  m2.value = 14990;
                }
                if (m3) {
                  m3.value = 21990;
                }
                if (m4) {
                  m4.value = 24990;
                }
              }
              price.addEventListener('input', (e) => {
                if (e.target.matches('input')) {
                  e.target.value = e.target.value.replace(/[^А-ЯЁ\d]/ig, '');
                }
                if (e.target.value === 'ТЕЛО2021') {
                  priceTotal.textContent = target.value - Math.round(target.value * 0.3);
                } else {
                  priceTotal.textContent = target.value;
                }
              })

              if (priceText.value === 'ТЕЛО2021') {
                priceTotal.textContent = target.value - Math.round(target.value * 0.3);
              } else {
                priceTotal.textContent = target.value;
              }

            })
          });
        }
      })
    })
  } else {
    return;
  }


};

export default calculator;