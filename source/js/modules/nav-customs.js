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
