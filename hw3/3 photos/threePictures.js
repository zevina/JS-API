'use strict';

/* 
Цель: Разработать веб-приложение, которое каждый день будет отображать 3 новых псевдослучайных изображения из коллекции Unsplash, 
давая пользователю возможность узнать больше о фотографе и сделать "лайк" изображению.

Разработка веб-приложения:
Создайте HTML-страницу с элементами: изображение, имя фотографа, кнопка "лайк", 
при нажатии на которую подсвечивается "лайкнутый" элемент
*/
let page = getRandomInt(1, 10001);
// let page = 1;

const ACCESS_KEY = 'YfaP1ksoAx1jRZljc_4wP9WYFr8_28K5Vi36xeAWEDA';
function addPictures(container) {
  fetch(`https://api.unsplash.com/photos?page=${page}&per_page=3`, {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${ACCESS_KEY}`,
    }
  })
    .then(response => response.json())
    .then((data) => {
      // console.log(data);
      data.forEach((picture) => {
        const photoContainer = document.createElement('div');
        photoContainer.classList.add('photo');

        const imgEl = document.createElement('img');
        imgEl.src = picture.urls.regular;

        const infoEl = document.createElement('div');
        infoEl.classList.add('photo-info');

        const authorEl = document.createElement('p');
        authorEl.textContent = picture.user.name;
        authorEl.classList.add('author');

        const likeBtnEl = document.createElement('button');
        likeBtnEl.textContent = 'Like';
        likeBtnEl.classList.add('like-btn');

        infoEl.appendChild(authorEl);
        infoEl.appendChild(likeBtnEl);
        photoContainer.appendChild(imgEl);
        photoContainer.appendChild(infoEl);
        container.appendChild(photoContainer);
      });
    })
    .catch(event => console.log(event));
}

const imageContainerEl = document.querySelector('.photo-container');
addPictures(imageContainerEl);

const photoEls = document.querySelectorAll('.photo');

photoEls.forEach(addEventListener('click', (event) => {
  const button = event.target;
  const currentPhoto = button.closest('.photo');

  if (button.tagName !== "BUTTON") {
    return;
  }
  if (button.textContent === 'Like') {
    button.textContent = 'Unlike';
    currentPhoto.classList.add('liked-photo');
  } else {
    button.textContent = 'Like';
    currentPhoto.classList.remove('liked-photo');
  }
}));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}