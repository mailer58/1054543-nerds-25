
var open = document.querySelector(".btn-message");
var popup = document.querySelector(".popup-window");
var close = popup.querySelector(".message-close");
var name = popup.querySelector("[name=name-field]");

open.addEventListener("click", function (evt) {
evt.preventDefault();
popup.classList.add("popup-window-show");
name.focus();
  });

  close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("popup-window-show");
 });
