'use strict';


const sendForm = () => {
  const form2 = document.getElementById('form2'),
    freeVisit = document.getElementById('free_visit_form'),
    callback = document.getElementById('callback_form'),
    footerForm = document.getElementById('footer_form'),
    form1 = document.getElementById('form1'),
    thanks = document.getElementById('thanks'),
    thanksFormCOntent = thanks.querySelector('.form-content'),
    cardOrder = document.getElementById('card_order'),
    bannerForm = document.getElementById('banner-form'),
    cardTypes = cardOrder.querySelector('.cards-types');
  if (cardTypes) {

    const cardTypesInputs = cardTypes.querySelectorAll('input');

  }






  bannerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(bannerForm);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200!')
        }
        thanks.style.display = 'flex';

      })
      .catch((error) => {
        thanks.style.display = 'flex';
        thanksFormCOntent.innerHTML = `<h4>Извините!</h4>
                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>
                <button class="btn close-btn">OK</button>`;
        console.log(error);
      })
      .finally(() => {
        bannerForm.reset();
        setTimeout(() => {
          thanks.style.display = 'none';
        }, 3000);
      });
  });

  form2.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form2);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200!')
        }
        thanks.style.display = 'flex';
        freeVisit.style.display = 'none';

      })
      .catch((error) => {
        thanks.style.display = 'flex';
        thanksFormCOntent.innerHTML = `<h4>Извините!</h4>
                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>
                <button class="btn close-btn">OK</button>`;
        console.log(error);
      })
      .finally(() => {
        form2.reset();
        setTimeout(() => {
          thanks.style.display = 'none';
        }, 3000);
      });
  });

  form1.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form1);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200!')
        }
        thanks.style.display = 'flex';
        callback.style.display = 'none';

      })
      .catch((error) => {
        thanks.style.display = 'flex';
        callback.style.display = 'none';
        thanksFormCOntent.innerHTML = `<h4>Извините!</h4>
                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>
                <button class="btn close-btn">OK</button>`;

        console.log(error);
      })
      .finally(() => {
        form1.reset();
        setTimeout(() => {
          thanks.style.display = 'none';
        }, 3000);
      });
  });

  cardOrder.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(cardOrder);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200!')
        }
        thanks.style.display = 'flex';
        cardTypesInputs.forEach((elem) => {
          elem.checked = false;
        })

      })
      .catch((error) => {
        thanks.style.display = 'flex';
        thanksFormCOntent.innerHTML = `<h4>Извините!</h4>
                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>
                <button class="btn close-btn">OK</button>`;
        cardTypesInputs.forEach((elem) => {
          elem.checked = false;
        })
        console.log(error);
      })
      .finally(() => {
        cardOrder.reset();
        cardTypesInputs.forEach((elem) => {
          elem.checked = false;
        })
        setTimeout(() => {
          thanks.style.display = 'none';
        }, 3000);
      });
  });

  footerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(footerForm);

    let body = {};

    formData.forEach((val, key) => {
      body[key] = val;
    });

    postData(body)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error('Status network is not 200!')
        }
        thanks.style.display = 'flex';


      })
      .catch((error) => {
        thanks.style.display = 'flex';
        thanksFormCOntent.innerHTML = `<h4>Извините!</h4>
                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>
                <button class="btn close-btn">OK</button>`;

        console.log(error);
      })
      .finally(() => {
        footerForm.reset();

        setTimeout(() => {
          thanks.style.display = 'none';
        }, 3000);
      });
  });


  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(body)
    });
  }
}



export default sendForm;