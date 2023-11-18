'use strict';

/*
Отслеживание изменения ориентации экрана:
Напишите код, который отслеживает изменение ориентации экрана устройства (с портретной на ландшафтную и наоборот) 
и выводит сообщение об этом на веб-странице.
*/

const orientationMessageEl = document.querySelector('.orientation-msg');

screen.orientation.addEventListener("change", (event) => {
  const type = event.target.type;
  if (type === 'landscape-primary') {
    orientationMessageEl.textContent = "Ориентации экрана изменена на: Ландшафтная";
  } else {
    orientationMessageEl.textContent = "Ориентации экрана изменена на: Портретная";
  }
});