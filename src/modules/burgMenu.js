'use strict';

const menuButton = document.querySelector('.menu-button'),
  topMenu = document.querySelector('.top-menu'),
  popupMenu = document.querySelector('.popup-menu'),
  closeMenuBtn = document.querySelector('.close-menu-btn');



const burgMenu = () => {

  window.addEventListener('resize', (e) => {
    console.log(e.target.screen.width)
    if (e.target.screen.width < 767) {
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
          closeMenu();
        }
        if (closeMenuBtn === event.target)
          console.log(closeMenuBtn)
        closeMenu();
      })

      document.addEventListener('scroll', () => {
        if (topMenu.getBoundingClientRect().top <= 0) {
          closeMenuBtn.style.display = 'block';
          topMenu.classList.add('menu-fix')
        }
        if (pageYOffset === 0) {
          closeMenuBtn.style.display = 'none';
          topMenu.classList.remove('menu-fix');
        }
      })

      menuButton.addEventListener('click', handlerMenu)
    } else {
      document.addEventListener('scroll', () => {
        topMenu.classList.remove('menu-fix');
      })
    }
  })

};




export default burgMenu;