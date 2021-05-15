'use strict';

const chooseClub = () => {
  const clubSelect = document.querySelector('.club-select'),
    clubList = document.querySelector('.clubs-list').querySelector('ul');
  clubSelect.addEventListener('click', (e) => {
    if (clubList.style.display !== 'block') {
      clubList.style.display = 'block';
    } else {
      clubList.style.display = 'none';
    }
  })
};

export default chooseClub;