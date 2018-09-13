var link = document.querySelector(".write-us-link");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelectorAll(".modal-close");

var mapLink = document.querySelector(".google-map");
var mapPopup = document.querySelector(".modal-map");

var cartLink = document.querySelectorAll(".buy");
var cartPopup = document.querySelector(".cart");

var isStorageSupport = true;
var storageUsername = storageEmail = "";
  
try {
  storageUsername = localStorage.getItem("username");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (popup) {
  var form = popup.querySelector("form");
  var username = popup.querySelector("[name=name]");
  var email = popup.querySelector("[name=email]");
  var letter = popup.querySelector("[name=letter]");

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
}

if (mapPopup) {
  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
  });
}

if (cartPopup) {
  for (i = 0; i < cartLink.length; i++) {
    cartLink[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cartPopup.classList.add("modal-show");
    });
  }
}

for (i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      this.parentNode.classList.remove("modal-show");
      this.parentNode.classList.remove("modal-error");
  });  
}


window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup && popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }

      if (mapPopup && mapPopup.classList.contains("modal-show")) {
        mapPopup.classList.remove("modal-show");
      }

      if (cartPopup && cartPopup.classList.contains("modal-show")) {
        cartPopup.classList.remove("modal-show");
      }
    }
});

/** слайдер верхний**/
var slides = document.querySelectorAll(".slider-radio");

if (slides.length > 0) {
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
console.log(slides);
  document.querySelector(".slider-buttons-next").addEventListener("click", function (evt) {
    evt.preventDefault();
    changeToNextSlide();
  });

  document.querySelector(".slider-buttons-previous").addEventListener("click", function (evt) {
    evt.preventDefault();
    changeToPrevSlide();
  });
}

/** слайдер нижний **/
var serviceSlides = document.querySelectorAll(".features li");

if (serviceSlides) {
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
}

