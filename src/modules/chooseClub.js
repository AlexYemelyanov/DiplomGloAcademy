'use strict';

const chooseClub = () => {
  const headMain = document.querySelector('.head-main'),
    club = headMain.querySelector('.clubs-list'),
    clubSelect = club.querySelector('p'),
    clubList = club.querySelector('ul');
  club.addEventListener('click', (e) => {
    if (e.target === clubSelect) {

      clubList.style.display = 'block';
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