'use strict';

const chooseClub = () => {
  const clubSelect = document.querySelector('.club-select'),
    clubList = document.querySelector('.club-list');
  clubSelect.addEventListener('click', () => {
    clubList.style.display = 'block';
  })
};

export default chooseClub;