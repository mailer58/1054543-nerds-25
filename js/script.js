var open = document.querySelector(".btn-message");
var popup = document.querySelector(".popup-window");
var close = popup.querySelector(".message-close");

var form = popup.querySelector("form");
var user_name = document.querySelector("#name-field");
var email = popup.querySelector("#email-field");
var text = popup.querySelector("#message-field");

var isStorageSupport = true;
var user_name_storage = "";
var email_storage = "";
var text_storage = "";

try {
  user_name_storage = localStorage.getItem("user_name");
  email_storage = localStorage.getItem("email");
  text_storage = localStorage.getItem("text");

} catch (err) {
  isStorageSupport = false;
}

open.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-window-show");
  if (user_name_storage || email_storage) {
    user_name.value = user_name_storage;
    email.value = email_storage;
  }
  if (user_name_storage) {
    text.focus();
  } else {
    user_name.focus();
  }


});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-window-show");
  popup.classList.remove("shake-error");
});

user_name.addEventListener("click", function(evt) {
  evt.preventDefault();
  user_name.classList.remove("warning");
});

email.addEventListener("click", function(evt) {
  evt.preventDefault();
  email.classList.remove("warning");
});

text.addEventListener("click", function(evt) {
  evt.preventDefault();
  text.classList.remove("warning");
});


form.addEventListener("submit", function(evt) {
  if (!user_name.value) {
    evt.preventDefault();

    user_name.classList.add("warning");
    popup.classList.remove("shake-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("shake-error");
    console.log(user_name.classList);
    console.log("Нужно ввести логин и пароль");
  }
  if (!email.value) {
    evt.preventDefault();
    email.classList.add("warning");
    popup.classList.remove("shake-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("shake-error");
    console.log(user_name.classList);
    console.log("Нужно ввести логин и пароль");
  }
  if (!text.value) {
    evt.preventDefault();

    text.classList.add("warning");
    popup.classList.remove("shake-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("shake-error");
    console.log(user_name.classList);
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("user_name", user_name.value);
      localStorage.setItem("email", email.value);
    }
  }
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("popup-window-show")) {
      popup.classList.remove("popup-window-show");
    }
    popup.classList.remove("shake-error");
  }
});
