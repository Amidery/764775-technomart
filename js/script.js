var link = document.querySelector(".write-us-link");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("username");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
console.log(storage);
	if (storage) {
      username.value = storage;
      email.focus();
    } else {
      username.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!username.value || !email.value || !letter.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("username", username.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
});

/** слайдер верхний**/
  var slides = document.querySelectorAll(".slider-radio");
  var counter = 0;

  var changeToNextSlide = function() {
      for (counter; counter <= slides.length; counter++) {
          if (slides[counter].hasAttribute("checked")) {
              if (counter == slides.length - 1) {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  counter = 0;
                  slides[counter].setAttribute("checked", "checked");
                  //slides[counter].checked = true;
                  break;
              } else {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  slides[counter+1].setAttribute("checked", "checked");
				          //slides[counter+1].checked = true;
                  break;
              }
          }
      }
      counter = 0;
  };

  var changeToPrevSlide = function() {
    for (counter; counter <= slides.length; counter++) { 
          if (slides[counter].hasAttribute("checked")) { 
              if (counter == 0) {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  counter = slides.length - 1;
                  slides[counter].setAttribute("checked", "checked");
                  //slides[counter].checked = true;
                  break;
              } else {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  slides[counter-1].setAttribute("checked", "checked");
                  //slides[counter-1].checked = true;
                  break;
              }
          }
      }
      counter = 0;
  }

  document.querySelector(".slider-buttons-next").addEventListener("click", function (evt) {
    evt.preventDefault();
    changeToNextSlide();
});

  document.querySelector(".slider-buttons-previous").addEventListener("click", function (evt) {
    evt.preventDefault();
    changeToPrevSlide();
});

/** слайдер нижний**/
/**  var slides = document.querySelectorAll(".slider-radio");
  var counter = 0;

  var changeToNextSlide = function() {
      for (counter; counter <= slides.length; counter++) {
          if (slides[counter].hasAttribute("checked")) {
              if (counter == slides.length - 1) {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  counter = 0;
                  slides[counter].setAttribute("checked", "checked");
                  //slides[counter].checked = true;
                  break;
              } else {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  slides[counter+1].setAttribute("checked", "checked");
                  //slides[counter+1].checked = true;
                  break;
              }
          }
      }
      counter = 0;
  };

  var changeToPrevSlide = function() {
    for (counter; counter <= slides.length; counter--) { 
          if (slides[counter].hasAttribute("checked")) { 
              if (counter == slides.length[0]) {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  counter = slides.length - 1;
                  slides[counter].setAttribute("checked", "checked");
                  //slides[counter].checked = true;
                  break;
              } else {
                  slides[counter].removeAttribute("checked");
                  //slides[counter].checked = false;
                  slides[counter-1].setAttribute("checked", "checked");
                  //slides[counter-1].checked = true;
                  break;
              }
          }
      }
      counter = 0;
  }

  document.querySelector(".slider-buttons-next").addEventListener("click", function (evt) {
    evt.preventDefault();
    changeToNextSlide();
});

  document.querySelector(".slider-buttons-previous").addEventListener("click", function (evt) {
    evt.preventDefault();
    changeToPrevSlide();
}); **/