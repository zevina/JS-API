'use strict';

/*
Вы должны создать веб-страницу, которая позволяет пользователю динамически управлять элементами на странице.
Ниже приведены основные требования и функциональность:
На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент".
При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей.
Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу.
Все элементы имеют класс .box и стилизованы с помощью CSS (см. пример).
Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве.
*/

const contentEl = document.querySelector('.grid-box');

const addBtnEl = document.querySelector('.add');
const deleteBtnEl = document.querySelector('.delete');
const cloneBtnEl = document.querySelector('.clone');

addBtnEl.addEventListener('click', () => {
  const boxEl = document.createElement('div');
  boxEl.classList.add('box');
  boxEl.textContent = contentEl.children.length + 1;
  contentEl.appendChild(boxEl);
});

deleteBtnEl.addEventListener('click', () => {
  if (contentEl.children.length > 0) {
    const lastBox = contentEl.lastChild;
    contentEl.removeChild(lastBox);
  }
});

cloneBtnEl.addEventListener('click', () => {
  const lastBox = contentEl.lastChild;
  const cloneBox = lastBox.cloneNode(true);
  contentEl.appendChild(cloneBox);
});


// 2 version

/*
"use strict";
let selectedElement = null;
const contentEl = document.querySelector('.content');

let boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach((box) => {
    box.addEventListener('click', clickBoxListener);
});

function clickBoxListener(e) {
    activeReset();
    if (selectedElement === e.target) {
        e.target.classList.remove('box_active');
        selectedElement = null;
    } else {
        e.target.classList.add('box_active');
        selectedElement = e.target;
    }
}


function activeReset() {
    boxes.forEach((box) => {
        box.classList.remove('box_active');
    });
}

document.querySelector('.create-button').addEventListener('click', () => {
    const boxEl = document.createElement('div');
    boxEl.classList.add('box');
    boxEl.addEventListener('click', clickBoxListener);
    boxEl.textContent = String(contentEl.childElementCount + 1);
    contentEl.append(boxEl)
});

document.querySelector('.delete-button').addEventListener('click', () => {
    if (contentEl.childElementCount > 0) {
        if (selectedElement) {
            selectedElement.remove()
            selectedElement = null;
        } else {
            contentEl.lastChild.remove();
        }
    }

});

document.querySelector('.clone-button').addEventListener('click', () => {
    if (selectedElement) {
        const clone = selectedElement.cloneNode(true);
        clone.addEventListener('click', clickBoxListener);
        boxes.push(clone);
        selectedElement.after(clone);
    } else {
        contentEl.append(contentEl.lastElementChild.cloneNode(true));
    }
});
*/