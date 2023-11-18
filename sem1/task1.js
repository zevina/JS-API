'use strict';

/*
Определение текущего размера окна браузера:
Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.
*/


const widthEl = document.querySelector('.window-width');
const heightEl = document.querySelector('.window-height');

window.addEventListener("resize", () => {
  widthEl.textContent = window.innerWidth;
  heightEl.textContent = window.innerHeight;
});
