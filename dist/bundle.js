(()=>{"use strict";var e=document.querySelector(".menu-button"),t=document.querySelector(".top-menu"),n=document.querySelector(".popup-menu"),l=document.querySelector(".close-menu-btn");var o,c,i,r,s,a,d,u,m,y,f,v,g,p,E;window.addEventListener("resize",(function(o){if(console.log(o.target.screen.width),o.target.screen.width<767){var c=function(){n.style.display="none"};n.addEventListener("click",(function(e){var t=e.target;(t=t.closest("a"))&&c(),l===e.target&&console.log(l),c()})),document.addEventListener("scroll",(function(){t.getBoundingClientRect().top<=0&&(l.style.display="block",t.classList.add("menu-fix")),0===pageYOffset&&(l.style.display="none",t.classList.remove("menu-fix"))})),e.addEventListener("click",(function(){n.style.display="flex"}))}else document.addEventListener("scroll",(function(){t.classList.remove("menu-fix")}))})),p=document.querySelector(".club-select"),E=document.querySelector(".clubs-list").querySelector("ul"),p.addEventListener("click",(function(e){"block"!==E.style.display?E.style.display="block":E.style.display="none"})),f=document.querySelector(".main-slider").querySelectorAll(".slide"),v=0,g=function(){f[v].style.display="none",++v>=f.length&&(v=0),f[v].style.display="flex"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(g,e)}(3e3),function(){var e=document.querySelector(".fixed-gift");if(e){var t=document.getElementById("gift"),n=t.querySelector(".close-form"),l=t.querySelector(".close-btn"),o=function(){t.style.display="none"};t.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".form-content"))||o(),n===!t&&o(),l===e.target&&o()})),e.addEventListener("click",(function(){t.style.display="block",e.style.display="none"}))}}(),r=document.querySelector(".head-main"),s=document.getElementById("free_visit_form"),a=document.getElementById("callback_form"),d=s.querySelector(".close-form"),u=s.querySelector(".close-form"),m=function(){s.style.display="none"},y=function(){a.style.display="none"},s.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".form-content"))||m(),d===!t&&m()})),a.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".form-content"))||y(),u===!t&&y()})),r.addEventListener("click",(function(e){e.target.matches(".open-popup")&&(s.style.display="block"),e.target.matches(".callback-btn")&&(a.style.display="flex")})),o=document.getElementById("totop"),c=document.getElementById("clubs"),i=document.getElementById("leto-mozaika"),o.style.display="none",document.addEventListener("scroll",(function(){c&&(c.getBoundingClientRect().top<=0&&(o.style.display="block"),c.getBoundingClientRect().top>0&&(o.style.display="none")),i&&(i.getBoundingClientRect().top<=0&&(o.style.display="block"),i.getBoundingClientRect().top>0&&(o.style.display="none"))})),o.addEventListener("click",(function(e){if(e.preventDefault(),c){var t=o.getAttribute("href").substring(1),n=document.querySelector(".".concat(t)).getBoundingClientRect().top-0;window.scrollBy({top:n,behavior:"smooth"})}if(i){var l=o.getAttribute("href").substring(1),r=document.querySelector(".".concat(l)).getBoundingClientRect().top-0;window.scrollBy({top:r,behavior:"smooth"})}})),function(){var e,t=document.querySelector(".gallery-slider").querySelectorAll(".slide"),n=document.querySelector(".gallery-slider"),l=document.getElementById("gallery"),o=0,c=document.querySelectorAll(".dot"),i=document.createElement("a"),r=document.createElement("a");i.className="slider-arrow prev",r.className="slider-arrow next",n.append(i),n.append(r);var s=document.createElement("ul");s.classList.add("gallery-dots"),n.append(s),t.forEach((function(){var e=s,t=document.createElement("li");t.classList.add("dot"),e.append(t)})),0===c&&newDot.classList.add("slick-active"),c=document.querySelectorAll(".dot");var a=function(e,t,n){e[t].classList.remove(n)},d=function(e,t,n){e[t].classList.add(n)},u=function(){a(t,o,"slide-active"),a(c,o,"slick-active"),++o>=t.length&&(o=0),d(t,o,"slide-active"),d(c,o,"slick-active")},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(u,t)};l.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".slider-arrow, .dot")&&(a(t,o,"slide-active"),a(c,o,"slick-active"),n.matches(".next")?o++:n.matches(".prev")?o--:n.matches(".dot")&&c.forEach((function(e,t){e===n&&(o=t)})),o>=t.length?o=0:o<0&&(o=t.length-1),d(t,o,"slide-active"),d(c,o,"slick-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".slider-arrow")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&m(1500)})),m(1500)}()})();