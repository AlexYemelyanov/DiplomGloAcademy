(()=>{"use strict";var e=document.querySelector(".menu-button"),t=document.querySelector(".top-menu"),n=document.querySelector(".popup-menu"),o=document.querySelector(".close-menu-btn");function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){u=!0,l=e},f:function(){try{c||null==n.return||n.return()}finally{if(u)throw l}}}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function l(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,a=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw a}}}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var u,i,s,d,f,m,y,v,p,h,g;window.addEventListener("resize",(function(r){if(r.target.screen.width<767){var a=function(){n.style.display="none"};n.addEventListener("click",(function(e){var t=e.target;(t=t.closest("a"))&&a(),o===e.target&&a()})),document.addEventListener("scroll",(function(){t.getBoundingClientRect().top<=0&&(o.style.display="block",t.classList.add("menu-fix")),0===pageYOffset&&(o.style.display="none",t.classList.remove("menu-fix"))})),e.addEventListener("click",(function(){n.style.display="flex"}))}else document.addEventListener("scroll",(function(){t.classList.remove("menu-fix")}))})),y=document.querySelector(".head-main"),v=document.querySelector("body"),p=y.querySelector(".clubs-list"),h=p.querySelector("p"),g=p.querySelector("ul"),p.addEventListener("click",(function(e){e.target===h&&(g.style.display="block")})),v.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".head-main"))||(g.style.display="none")})),y.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".clubs-list"))||(g.style.display="none")})),d=document.querySelector(".main-slider").querySelectorAll(".slide"),f=0,m=function(){d[f].style.display="none",++f>=d.length&&(f=0),d[f].style.display="flex"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(m,e)}(3e3),function(){var e=document.querySelector(".fixed-gift");if(e){var t=document.getElementById("gift"),n=t.querySelector(".close-form"),o=t.querySelector(".close-btn"),r=function(){t.style.display="none"};t.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".form-content"))||r(),n===!t&&r(),o===e.target&&r()})),e.addEventListener("click",(function(){t.style.display="block",e.style.display="none"}))}}(),function(){var e=document.querySelector(".head-main"),t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form"),o=t.querySelector(".close-form"),r=n.querySelector(".close-form"),a=document.getElementById("thanks"),l=a.querySelector(".close-form"),c=a.querySelector(".close-btn"),u=t.querySelector(".close-btn"),i=n.querySelector(".close-btn"),s=document.getElementById("form2"),d=document.getElementById("form1"),f=function(){t.style.display="none"},m=function(){n.style.display="none"},y=function(){a.style.display="none"};t.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".form-content"))||(f(),s.reset()),o===!t&&(f(),s.reset()),u===e.target&&(f(),s.reset())})),a.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".form-content"))||y(),l===!t&&y(),c===e.target&&y()})),n.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".form-content"))||(m(),d.reset()),r===!t&&(m(),d.reset()),c===e.target&&(i(),d.reset())})),e.addEventListener("click",(function(e){e.target.matches(".open-popup")&&(t.style.display="block"),e.target.matches(".callback-btn")&&(n.style.display="flex")}))}(),u=document.getElementById("totop"),i=document.getElementById("clubs"),s=document.getElementById("leto-mozaika"),u.style.display="none",document.addEventListener("scroll",(function(){i&&(i.getBoundingClientRect().top<=0&&(u.style.display="block"),i.getBoundingClientRect().top>0&&(u.style.display="none")),s&&(s.getBoundingClientRect().top<=0&&(u.style.display="block"),s.getBoundingClientRect().top>0&&(u.style.display="none"))})),u.addEventListener("click",(function(e){if(e.preventDefault(),i){var t=u.getAttribute("href").substring(1),n=document.querySelector(".".concat(t)).getBoundingClientRect().top-0;window.scrollBy({top:n,behavior:"smooth"})}if(s){var o=u.getAttribute("href").substring(1),r=document.querySelector(".".concat(o)).getBoundingClientRect().top-0;window.scrollBy({top:r,behavior:"smooth"})}})),function(){var e,t=document.querySelector(".gallery-slider").querySelectorAll(".slide"),n=document.querySelector(".gallery-slider"),o=document.getElementById("gallery"),r=0,a=document.querySelectorAll(".dot"),l=document.createElement("a"),c=document.createElement("a");l.className="slider-arrow prev",c.className="slider-arrow next",n.append(l),n.append(c);var u=document.createElement("ul");u.classList.add("gallery-dots"),n.append(u),t.forEach((function(){var e=u,t=document.createElement("li");t.classList.add("dot"),e.append(t)})),0===a&&newDot.classList.add("slick-active"),a=document.querySelectorAll(".dot");var i=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},d=function(){i(t,r,"slide-active"),i(a,r,"slick-active"),++r>=t.length&&(r=0),s(t,r,"slide-active"),s(a,r,"slick-active")},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(d,t)};o.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".slider-arrow, .dot")&&(i(t,r,"slide-active"),i(a,r,"slick-active"),n.matches(".next")?r++:n.matches(".prev")?r--:n.matches(".dot")&&a.forEach((function(e,t){e===n&&(r=t)})),r>=t.length?r=0:r<0&&(r=t.length-1),s(t,r,"slide-active"),s(a,r,"slick-active"))})),n.addEventListener("mouseover",(function(t){(t.target.matches(".slider-arrow")||t.target.matches(".dot"))&&clearInterval(e)})),n.addEventListener("mouseout",(function(e){(e.target.matches(".slider-arrow")||e.target.matches(".dot"))&&f(1500)})),f(1500)}(),function(){var e=document.getElementById("card_order").querySelector(".cards-types");e&&e.querySelectorAll("input").forEach((function(e){e.checked=!1,e.addEventListener("click",(function(e){e.target.checked=!0}))}));var t=document.querySelector(".time");if(t){var n=t.querySelectorAll("input"),o=document.getElementById("card_order"),r=document.getElementById("card_leto_mozaika"),a=document.getElementById("card_leto_schelkovo"),l=o.querySelectorAll(".club"),c=document.getElementById("price-total"),u=o.querySelector(".price").querySelector("input"),i=o.querySelector(".price");i.addEventListener("input",(function(e){e.target.matches("input")&&(e.target.value=e.target.value.replace(/[^А-ЯЁ\d]/gi,""))})),c.textContent="",n.forEach((function(e){e.checked=!1})),l.forEach((function(e){e.querySelector("input").checked=!1,e.addEventListener("click",(function(e){var o=e.target;n.forEach((function(e){e.checked=!1})),c.textContent="",u.value="",o===r&&(o.checked=!0,t.addEventListener("click",(function(e){var t=e.target;n.forEach((function(e){t.id===e.id&&(m1&&(m1.value=1990),m2&&(m2.value=9900),m3&&(m3.value=13900),m4&&(m4.value=19900)),i.addEventListener("input",(function(e){e.target.matches("input")&&(e.target.value=e.target.value.replace(/[^А-ЯЁ\d]/gi,"")),"ТЕЛО2021"===e.target.value?c.textContent=t.value-Math.round(.3*t.value):c.textContent=t.value})),"ТЕЛО2021"===u.value?c.textContent=t.value-Math.round(.3*t.value):c.textContent=t.value}))}))),o===a&&(o.checked=!0,t.addEventListener("click",(function(e){var t=e.target;n.forEach((function(e){t.id===e.id&&(m1&&(m1.value=2999),m2&&(m2.value=14990),m3&&(m3.value=21990),m4&&(m4.value=24990)),i.addEventListener("input",(function(e){e.target.matches("input")&&(e.target.value=e.target.value.replace(/[^А-ЯЁ\d]/gi,"")),"ТЕЛО2021"===e.target.value?c.textContent=t.value-Math.round(.3*t.value):c.textContent=t.value})),"ТЕЛО2021"===u.value?c.textContent=t.value-Math.round(.3*t.value):c.textContent=t.value}))})))}))}))}}(),function(){var e=document.getElementById("footer_form");if(e){document.getElementById("footer_leto_mozaika"),document.getElementById("footer_leto_schelkovo");var t=document.getElementById("callback_footer_form-phone");e.addEventListener("submit",(function(e){o.forEach((function(t){t.value||e.preventDefault()}))}));var n,o=[],a=r(e.elements);try{for(a.s();!(n=a.n()).done;){var l=n.value;"button"!==l.tagName.toLowerCase()&&"button"!==l.type&&o.push(l)}}catch(e){a.e(e)}finally{a.f()}e.addEventListener("input",(function(e){t.value=t.value.replace(/[^\+()\d]/gi,"")}))}var c=document.getElementById("form2");if(c){var u,i=document.getElementById("callback_form2-name"),s=document.getElementById("callback_form2-phone"),d=[],f=r(c.elements);try{for(f.s();!(u=f.n()).done;){var m=u.value;"button"!==m.tagName.toLowerCase()&&"button"!==m.type&&d.push(m)}}catch(e){f.e(e)}finally{f.f()}c.addEventListener("submit",(function(e){d.forEach((function(t){t.value||e.preventDefault()}))})),c.addEventListener("input",(function(e){i.value=i.value.replace(/[^А-Яа-яЁё\s]/gi,""),s.value=s.value.replace(/[^\+\d]/,"")}))}var y=document.getElementById("form1");if(y){var v,p=document.getElementById("callback_name"),h=document.getElementById("callback_phone"),g=(document.getElementById("check1"),[]),E=r(y.elements);try{for(E.s();!(v=E.n()).done;){var b=v.value;"button"!==b.tagName.toLowerCase()&&"button"!==b.type&&g.push(b)}}catch(e){E.e(e)}finally{E.f()}y.addEventListener("submit",(function(e){g.forEach((function(t){t.value||e.preventDefault(),t.checked||e.preventDefault()}))})),y.addEventListener("input",(function(e){p.value=p.value.replace(/[^А-Яа-яЁё\s]/gi,""),h.value=h.value.replace(/[^\+\d]/,"")}))}var k=document.getElementById("card_order");if(k){document.getElementById("card_leto_mozaika"),document.getElementById("card_leto_schelkovo");var L,S=document.getElementById("name-club_order"),w=document.getElementById("callback_form-phone"),B=(document.getElementById("promo"),[]),I=r(k.elements);try{for(I.s();!(L=I.n()).done;){var q=L.value;"button"!==q.tagName.toLowerCase()&&"button"!==q.type&&B.push(q)}}catch(e){I.e(e)}finally{I.f()}k.addEventListener("input",(function(e){S.value=S.value.replace(/[^А-Яа-яЁё\s]/gi,""),w.value=w.value.replace(/[^\+\d]/,"")})),k.addEventListener("submit",(function(e){B.forEach((function(t){t.value||e.preventDefault()}))}))}var _=document.getElementById("banner-form");if(_){var x=document.getElementById("phone"),C=document.getElementById("banner-name"),D=(document.getElementById("check1"),[]);_.addEventListener("submit",(function(e){D.forEach((function(t){t===x&&(t.value||e.preventDefault()),t===C&&(t.value||e.preventDefault())}))}));var A,T=r(_.elements);try{for(T.s();!(A=T.n()).done;){var N=A.value;"button"!==N.tagName.toLowerCase()&&"button"!==N.type&&D.push(N)}}catch(e){T.e(e)}finally{T.f()}_.addEventListener("input",(function(e){C.value=C.value.replace(/[^А-Яа-яЁё\s]/gi,""),x.value=x.value.replace(/[^\+\d]/,"")}))}}(),function(){var e=document.getElementById("form2"),t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form"),o=document.getElementById("footer_form"),r=document.getElementById("form1"),a=document.getElementById("thanks"),c=a.querySelector(".form-content"),u=document.getElementById("card_order"),i=document.getElementById("banner-form");if(u.querySelector(".cards-types")){var s=document.getElementById("card_check"),d=[];u.addEventListener("submit",(function(e){e.preventDefault();var t,n=l(u.elements);try{for(n.s();!(t=n.n()).done;){var o=t.value;"button"!==o.tagName.toLowerCase()&&"button"!==o.type&&d.push(o)}}catch(e){n.e(e)}finally{n.f()}d.forEach((function(e){if(e===s)if(!0===e.checked){var t=new FormData(u),n={};t.forEach((function(e,t){n[t]=e})),p(n).then((function(e){if(200!==e.status)throw new Error("Status network is not 200!");a.style.display="flex"})).catch((function(e){a.style.display="flex",c.innerHTML='<h4>Извините!</h4>\n                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>\n                <button class="btn close-btn">OK</button>',c.querySelector(".close-btn").addEventListener("click",(function(){a.style.display="none"})),console.log(e)})).finally((function(){u.reset(),setTimeout((function(){a.style.display="none"}),3e3)}))}else alert("Пожалуйста, дайте согласие на обработку личных данных")}))}))}var f=[];i.addEventListener("submit",(function(e){e.preventDefault();var t,n=l(i.elements);try{for(n.s();!(t=n.n()).done;){var o=t.value;"button"!==o.tagName.toLowerCase()&&"button"!==o.type&&f.push(o)}}catch(e){n.e(e)}finally{n.f()}f.forEach((function(e){if(e===check1)if(!0===e.checked){var t=new FormData(i),n={};t.forEach((function(e,t){n[t]=e})),p(n).then((function(e){if(200!==e.status)throw new Error("Status network is not 200!");a.style.display="flex"})).catch((function(e){a.style.display="flex",c.innerHTML='<h4>Извините!</h4>\n                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>\n                <button class="btn close-btn">OK</button>',c.querySelector(".close-btn").addEventListener("click",(function(){a.style.display="none"})),console.log(e)})).finally((function(){i.reset(),setTimeout((function(){a.style.display="none"}),3e3)}))}else alert("Пожалуйста, дайте согласие на обработку личных данных")}))}));var m=[];e.addEventListener("submit",(function(n){var o=document.getElementById("check2");n.preventDefault();var r,u=l(e.elements);try{for(u.s();!(r=u.n()).done;){var i=r.value;"button"!==i.tagName.toLowerCase()&&"button"!==i.type&&m.push(i)}}catch(e){u.e(e)}finally{u.f()}m.forEach((function(n){if(n===o)if(!0===n.checked){var r=new FormData(e),l={};r.forEach((function(e,t){l[t]=e})),p(l).then((function(e){if(200!==e.status)throw new Error("Status network is not 200!");a.style.display="flex",t.style.display="none"})).catch((function(e){a.style.display="flex",c.innerHTML='<h4>Извините!</h4>\n                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>\n                <button class="btn close-btn">OK</button>',c.querySelector(".close-btn").addEventListener("click",(function(){a.style.display="none"})),console.log(e)})).finally((function(){e.reset(),setTimeout((function(){a.style.display="none"}),3e3)}))}else alert("Пожалуйста, дайте согласие на обработку личных данных")}))}));var y=[];r.addEventListener("submit",(function(e){var t=document.getElementById("check1");e.preventDefault();var o,u=l(r.elements);try{for(u.s();!(o=u.n()).done;){var i=o.value;"button"!==i.tagName.toLowerCase()&&"button"!==i.type&&y.push(i)}}catch(e){u.e(e)}finally{u.f()}y.forEach((function(e){if(e===t)if(!0===e.checked){var o=new FormData(r),l={};o.forEach((function(e,t){l[t]=e})),p(l).then((function(e){if(200!==e.status)throw new Error("Status network is not 200!");a.style.display="flex",n.style.display="none"})).catch((function(e){a.style.display="flex",n.style.display="none",c.innerHTML='<h4>Извините!</h4>\n                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>\n                <button class="btn close-btn">OK</button>',c.querySelector(".close-btn").addEventListener("click",(function(){a.style.display="none"})),console.log(e)})).finally((function(){r.reset(),setTimeout((function(){a.style.display="none"}),3e3)}))}else alert("Пожалуйста, дайте согласие на обработку личных данных")}))}));var v=[];u.addEventListener("submit",(function(e){var t=document.getElementById("card_check");e.preventDefault();var n,o=l(u.elements);try{for(o.s();!(n=o.n()).done;){var r=n.value;"button"!==r.tagName.toLowerCase()&&"button"!==r.type&&v.push(r)}}catch(e){o.e(e)}finally{o.f()}v.forEach((function(e){if(e===t)if(!0===e.checked){var n=new FormData(u),o={};n.forEach((function(e,t){o[t]=e})),p(o).then((function(e){if(200!==e.status)throw new Error("Status network is not 200!");a.style.display="flex"})).catch((function(e){a.style.display="flex",c.innerHTML='<h4>Извините!</h4>\n                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>\n                <button class="btn close-btn">OK</button>',c.querySelector(".close-btn").addEventListener("click",(function(){a.style.display="none"})),console.log(e)})).finally((function(){u.reset(),setTimeout((function(){a.style.display="none"}),3e3)}))}else alert("Пожалуйста, дайте согласие на обработку личных данных")}))})),o.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(o),n={};t.forEach((function(e,t){n[t]=e})),p(n).then((function(e){if(200!==e.status)throw new Error("Status network is not 200!");a.style.display="flex"})).catch((function(e){a.style.display="flex",c.innerHTML='<h4>Извините!</h4>\n                <p>Ваша заявка не отправлена. <br> Утрачена связь с сервером!.</p>\n                <button class="btn close-btn">OK</button>',c.querySelector(".close-btn").addEventListener("click",(function(){a.style.display="none"})),console.log(e)})).finally((function(){o.reset(),setTimeout((function(){a.style.display="none"}),3e3)}))}));var p=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"aplication/json"},body:JSON.stringify(e)})}}()})();