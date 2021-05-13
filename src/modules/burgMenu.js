'use strict';

const burgMenu = () => {

  const menuButton = document.querySelector('.menu-button'),
    popupMenu = document.querySelector('.popup-menu'),
    closeMenuBtn = document.querySelector('.close-menu-btn');
  const handlerMenu = () => {
    popupMenu.style.display = 'flex';
  }
  const closeMenu = () => {
    popupMenu.style.display = 'none';
  }

  popupMenu.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('a');
    if (target) {
      console.log(target)
      closeMenu();
    }
    if (closeMenuBtn === event.target)
      console.log(closeMenuBtn)
    closeMenu();
  })


  menuButton.addEventListener('click', handlerMenu)

};


burgMenu();


//export default burgMenu;