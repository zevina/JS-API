'use strict';

/* 
Вы разрабатываете интернет-магазин и хотите добавить функциональность динамического фильтрации товаров по категориям. У вас есть форма с выпадающим списком (select), в котором пользователь может выбрать категорию товаров. При выборе категории товаров, необходимо динамически обновлять список отображаемых товаров на странице, чтобы пользователь видел только товары из выбранной категории.
Создайте интерфейс веб-страницы, который включает в себя следующие элементы:
Выпадающий список (select) с категориями товаров.
Список товаров, который будет отображать товары в соответствии с выбранной категорией.
Каждый товар в списке должен содержать название и категорию.
Используйте JavaScript для обработки событий:
При выборе категории товаров в выпадающем списке, форма должна следить за изменениями.
Динамически обновите список товаров на странице, чтобы отображать только товары из выбранной категории.
Создайте объекты товаров и их категорий для имитации данных магазина.
Стилизуйте элементы интерфейса с помощью CSS для улучшения внешнего вида.
*/

const photos = [
  {
    id: 1,
    name: "Ноутбук",
    category: "Электроника",
  },
  {
    id: 2,
    name: "Смартфон",
    category: "Электроника",
  },
  {
    id: 3,
    name: "Кофемашина",
    category: "Бытовая техника",
  },
  {
    id: 4,
    name: "Фотокамера",
    category: "Электроника",
  },
  {
    id: 5,
    name: "Микроволновая печь",
    category: "Бытовая техника",
  },
  {
    id: 6,
    name: "Книга",
    category: "Книги",
  },
  {
    id: 7,
    name: "Футболка",
    category: "Одежда",
  },
  {
    id: 8,
    name: "Шапка",
    category: "Одежда",
  },
  {
    id: 9,
    name: "Стул",
    category: "Мебель",
  },
  {
    id: 10,
    name: "Стол",
    category: "Мебель",
  },
];

const categorySelect = document.querySelector('#category-select');


displayProducts('');

categorySelect.addEventListener('change', () => {
  displayProducts(categorySelect.value);
});

function displayProducts(category) {
  const productsList = document.getElementById('products-list');
  productsList.innerHTML = '';

  photos.forEach((product) => {
    if (category === '' || product.category === category) {
      const listItem = document.createElement('li');
      listItem.textContent = product.name;
      productsList.appendChild(listItem);
    }
  });
}
