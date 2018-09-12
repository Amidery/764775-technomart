var link = document.querySelector(".write-us-link");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");

var form = popup.querySelector("form");
var username = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var letter = popup.querySelector("[name=letter]");

var isStorageSupport = true;
var storageUsername = storageEmail = "";
  
  try {
    storageUsername = localStorage.getItem("username");
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
  if (storageUsername && storageEmail) {
    username.value = storageUsername;
    email.value = storageEmail;
    letter.focus();
  } else if (storageUsername) {
    username.value = storageUsername;
    email.focus();
  } else if (storageEmail) {
    email.value = storageEmail;
    username.focus();
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
        localStorage.setItem("email", email.value);
      }
    }
});

/** карта **/
  var mapLink = document.querySelector(".google-map");
  var mapPopup = document.querySelector(".modal-map");
  var mapClose = mapPopup.querySelector(".modal-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
  });

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }

      if (mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
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
                  slides[counter].checked = false;
                  counter = 0;
                  slides[counter].setAttribute("checked", "checked");
                  slides[counter].checked = true;
                  break;
              } else {
                  slides[counter].removeAttribute("checked");
                  slides[counter].checked = false;
                  slides[counter+1].setAttribute("checked", "checked");
				          slides[counter+1].checked = true;
                  break;
              }
          } else {
            // 
          }
      }
      counter = 0;
  };

  var changeToPrevSlide = function() {
    for (counter; counter <= slides.length; counter++) { 
          if (slides[counter].hasAttribute("checked")) { 
              if (counter == 0) {
                  slides[counter].removeAttribute("checked");
                  slides[counter].checked = false;
                  counter = slides.length - 1;
                  slides[counter].setAttribute("checked", "checked");
                  slides[counter].checked = true;
                  break;
              } else {
                  slides[counter].removeAttribute("checked");
                  slides[counter].checked = false;
                  slides[counter-1].setAttribute("checked", "checked");
                  slides[counter-1].checked = true;
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

/** слайдер нижний **/
  var serviceSlides = document.querySelectorAll(".features li");
  var serviceDescription = document.querySelectorAll(".features-description li");
  var tab = [], index;
        
    for(var i = 0; i < serviceSlides.length; i++){
       tab.push(serviceSlides[i].innerHTML);
     }
    
    for(var i = 0; i < serviceSlides.length; i++)
    {
        serviceSlides[i].onclick = function(){
           
          index = tab.indexOf(this.innerHTML);

          for(var j = 0; j < serviceSlides.length; j++)
          {
            if (index == j) {
              serviceSlides[j].classList.add("features-current");
            } else {
              serviceSlides[j].classList.remove("features-current");
            }
          }       

          for(var j = 0; j < serviceDescription.length; j++)
          {
              if (index == j) {
                serviceDescription[j].classList.add("visible");                
              } else {
                serviceDescription[j].classList.remove("visible");
              }
          };
        };
    }