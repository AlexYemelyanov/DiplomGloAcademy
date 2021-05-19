'use strict';

const chooseClub = () => {
  const headMain = document.querySelector('.head-main'),
    body = document.querySelector('body'),
    club = headMain.querySelector('.clubs-list'),
    clubSelect = club.querySelector('p'),
    clubList = club.querySelector('ul');
  club.addEventListener('click', (e) => {
    if (e.target === clubSelect) {

      clubList.style.display = 'block';
    }

  })
  body.addEventListener('click', (e) => {

    let target = e.target;
    target = target.closest('.head-main');
    if (!target) {

      clubList.style.display = 'none';
    }
  })
  headMain.addEventListener('click', (e) => {

    let target = e.target;
    target = target.closest('.clubs-list');
    if (!target) {

      clubList.style.display = 'none';
    }
  })





};

export default chooseClub;