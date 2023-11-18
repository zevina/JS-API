'use strict';

/*
Управление историей переходов:
Используйте объект history для управления историей переходов на веб-странице. 
Создайте кнопки "Назад" и "Вперед" для перемещения по истории.
*/


let backButtonEL = document.querySelector('.back-btn');
backButtonEL.addEventListener('click', function () {
  history.back();
});


let forwardButtonEl = document.querySelector('.forward-btn');
forwardButtonEl.addEventListener('click', function () {
  history.forward();
});
