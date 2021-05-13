'use strict';
const mediaForBurger = window.matchMedia("(max-width:767px)");
const menuButton = document.querySelector('.menu-button'),
  topMenu = document.querySelector('.top-menu'),
  popupMenu = document.querySelector('.popup-menu'),
  wrap = document.querySelector('#wrap'),
  closeMenuBtn = document.querySelector('.close-menu-btn');

const firstMenu = wrap.cloneNode(true);

const burgMenu = (e) => {

  if (e.matches) {
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

    const scrolMenu = () => {
      let a = document.querySelector('.top-menu'),
        b = null;
      window.addEventListener('scroll', Ascroll, false);
      document.body.addEventListener('scroll', Ascroll, false);

      function Ascroll() {
        if (b == null) {
          let Sa = getComputedStyle(a, ''),
            s = '';
          for (let i = 0; i < Sa.length; i++) {
            if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
              s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
            }
          }
          b = document.createElement('div');
          b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
          a.insertBefore(b, a.firstChild);
          let l = a.childNodes.length;
          for (let i = 1; i < l; i++) {
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + 'px';
          a.style.padding = '0';
          a.style.border = '0';
        }
        if (a.getBoundingClientRect().top <= 0) {
          b.className = 'menu-fix';
        } else {
          b.className = '';
        }
        window.addEventListener('resize', function () {
          a.children[0].style.width = getComputedStyle(a, '').width
        }, false);
      }
    };


    scrolMenu();
    menuButton.addEventListener('click', handlerMenu)
  } else {


    //topMenu.firstChild.classList.remove('menu-fix');

    //topMenu.firstChild.remove();
    //topMenu.appendChild(firstMenu);

  }



};
burgMenu(mediaForBurger);
mediaForBurger.addEventListener('change', burgMenu, false)




export default burgMenu;