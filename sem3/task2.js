'use strict';

/* 
Для создания бесконечной ленты с фотографиями с использованием Unsplash API, выполните следующие шаги:
Зарегистрируйтесь на Unsplash:
Перейдите на веб-сайт Unsplash (https://unsplash.com/).
Нажмите кнопку "Join" или "Регистрация", чтобы создать аккаунт, если у вас его еще нет.
Войдите в свой аккаунт Unsplash.
Создайте приложение:
После входа в аккаунт Unsplash, перейдите на страницу разработчика Unsplash (https://unsplash.com/developers).
Нажмите "New Application" (Новое приложение).
Заполните информацию о вашем приложении, такую как имя, описание и сайт (вы можете использовать http://localhost для тестового сайта).
После заполнения информации, нажмите "Create Application" (Создать приложение).
Получите API-ключ:
После создания приложения, вы получите API-ключ. Этот ключ будет отображаться в вашей панели управления приложением.
API-ключ представляет собой строку вида YOUR_ACCESS_KEY. Скопируйте его.
Измените код HTML и JavaScript:
Откройте вашу HTML-страницу в текстовом редакторе или интегрированной среде разработки.
Необходимо добавить ваш API-ключ
*/

const photoContainer = document.getElementById('photo-container');
let page = 1;

async function fetchPhotos() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=YfaP1ksoAx1jRZljc_4wP9WYFr8_28K5Vi36xeAWEDA`);
    const photos = await response.json();
    return photos;
  } catch (error) {
    console.error('Ошибка при загрузке фотографий:', error);
    return [];
  }
}



async function loadMorePhotos() {
  // создание контента
  const photos = await fetchPhotos(page);

  photos.forEach((photo) => {
    const photoItem = document.createElement('img');
    photoItem.src = photo.urls.small;
    photoItem.classList.add('photo');
    photoContainer.append(photoItem);
  });

  page += 1;
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMorePhotos();
  }
});

// Загрузка первой партии фотографий при загрузке страницы
loadMorePhotos();




// от Михаила Зверкова
/*

const ACCESS_KEY = 'YOU KEY';
function addPictures(container) {
  fetch(`https://api.unsplash.com/photos/`, {
    method: 'GET',
    headers: {
      'Authorization': `Client-ID ${ACCESS_KEY}`,
    }
  })
    .then(response => response.json())
    .then((data) => {
      data.forEach((pic) => {
        const imgEl = document.createElement('img');
        imgEl.src = pic.urls.regular;
        imgEl.classList.add('unsplash-img');
        container.appendChild(imgEl);
      });
    })
    .catch(e => console.log(e));
}

const imageContainerEl = document.querySelector('.img-container');
addPictures(imageContainerEl);

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    addPictures(imageContainerEl);
    console.log('addPictures')
  }
});

*/