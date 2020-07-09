/** Порядок подключения JS-модулей */

'use strict';

(function () {

  var link = document.querySelector(".main-nav__button");
  var menuOpen = document.querySelector(".main-nav--closed");

// Удаление класса, который открывает меню в случае если JS отключен.
  menuOpen.classList.remove("main-nav--nojs");

// Работа меню
  link.addEventListener("click", function () {
    if (menuOpen.classList.contains("main-nav--closed")) {
      menuOpen.classList.remove("main-nav--closed");
      menuOpen.classList.add("main-nav--opened");
    } else {
      menuOpen.classList.remove("main-nav--opened");
      menuOpen.classList.add("main-nav--closed");
    }
  });

})();

'use strict';

(function () {
  var slider = document.querySelector(".slider");

  if (slider) {
    var sliderImages = slider.querySelectorAll(".slider__image");
    var buttonsWrapper = slider.querySelector(".slider__buttons-wrapper");
    var buttonPrev = slider.querySelector(".slider__button--prev");
    var buttonNext = slider.querySelector(".slider__button--next");

    // При работающем JS появляется блок с кнопками слайдера.
    buttonsWrapper.classList.remove("slider__buttons-wrapper--nojs");

    var sliderIndex = 0;

    var getPrevPhoto = function() {
      if (sliderIndex > 0) {
        sliderIndex -= 1;
        sliderImages[sliderIndex].classList.add("slider__hover");
        sliderImages[sliderIndex + 1].classList.remove("slider__hover");
      } else {
        sliderIndex = sliderImages.length - 1;
        sliderImages[0].classList.remove("slider__hover");
        sliderImages[sliderImages.length - 1].classList.add("slider__hover");
      }
    };

    var getNextPhoto = function() {
      if (sliderIndex < sliderImages.length - 1) {
        sliderIndex += 1;
        sliderImages[sliderIndex].classList.add("slider__hover");
        sliderImages[sliderIndex - 1].classList.remove("slider__hover");
      } else {
        sliderIndex = 0;
        sliderImages[sliderImages.length - 1].classList.remove("slider__hover");
        sliderImages[sliderIndex].classList.add("slider__hover");
      }
    };

    buttonPrev.addEventListener("click", getPrevPhoto);
    buttonNext.addEventListener("click", getNextPhoto);
  }

})();

'use strict';

(function () {
  // Кнопка якорь вверх
  var buttonUp = document.querySelector(".button-up");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
      buttonUp.style = "display: block";
    }
    if (window.pageYOffset < 80) {
      buttonUp.style = "display: none";
    }
  });

})();

