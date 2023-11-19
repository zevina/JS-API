function Slider(selector) {
  this.sliderEl = document.querySelector(selector);
  if (!this.sliderEl) {
    throw new TypeError(`Wrong slider selector`);
  }
}

Slider.prototype.init = function () {

  // иконка загрузки
  this.loadIcon = document.createElement('i');
  this.loadIcon.classList.add('fas', 'fa-spinner', 'fa-spin');
  this.sliderEl.prepend(this.loadIcon);

  // левая стрелка
  this.leftArrow = document.createElement('i');
  this.leftArrow.classList.add('fas', 'fa-chevron-circle-left', 'slider-leftArrow');
  this.sliderEl.append(this.leftArrow);

  // правая стрелка
  this.rightArrow = document.createElement('i');
  this.rightArrow.classList.add('fas', 'fa-chevron-circle-right', 'slider-rightArrow');
  this.sliderEl.append(this.rightArrow);

  this.slides = document.querySelectorAll('.slider-item');
  this.slideIdx = 0;

  // навигационные точки
  this.dots = document.createElement('div');
  this.dots.classList.add('slider-dots');

  this.slides.forEach(() => {
    const dot = document.createElement('i');
    dot.classList.add('fas', 'fa-regular', 'fa-circle', 'slider-dot');
    this.dots.append(dot);
  });
  this.sliderEl.append(this.dots);
  this.dots = document.querySelectorAll('.slider-dot');


  // когда грузится весь контент
  window.addEventListener('load', () => {
    this.leftArrow.addEventListener('click', () => {
      this.setNextLeftImage();
    });
    this.rightArrow.addEventListener('click', () => {
      this.setNextRightImage();
    });
    // первый слайд и точка
    this.slides[this.slideIdx].classList.remove('hidden-slide');
    this.dots[this.slideIdx].classList.add('active-dot');
    // удаляем иконку загрузки
    this.loadIcon.remove();
    this.dots.forEach(item => {
      item.addEventListener('click', (event) => {
        this.setImageByDot(event);
      })
    })
  });
};

Slider.prototype.setNextLeftImage = function () {
  this.slides[this.slideIdx].classList.add("hidden-slide");
  this.dots[this.slideIdx].classList.remove('active-dot');
  this.slideIdx = this.slideIdx === 0
    ? this.slides.length - 1
    : this.slideIdx - 1;
  this.slides[this.slideIdx].classList.remove('hidden-slide');
  this.dots[this.slideIdx].classList.add('active-dot');
};

Slider.prototype.setNextRightImage = function () {
  this.slides[this.slideIdx].classList.add("hidden-slide");
  this.dots[this.slideIdx].classList.remove('active-dot');
  this.slideIdx = this.slideIdx === this.slides.length - 1
    ? 0
    : this.slideIdx + 1;
  this.slides[this.slideIdx].classList.remove('hidden-slide');
  this.dots[this.slideIdx].classList.add('active-dot');
};

Slider.prototype.setImageByDot = function (event) {
  this.slides[this.slideIdx].classList.add("hidden-slide");
  this.dots[this.slideIdx].classList.remove('active-dot');

  for (let i = 0; i < this.dots.length; i++) {
    if (this.dots[i] === event.target) {
      this.slideIdx = i;
      this.slides[this.slideIdx].classList.remove('hidden-slide');
      this.dots[this.slideIdx].classList.add('active-dot');
    }
  }
}