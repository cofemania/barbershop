var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var shadow = document.querySelector(".modal-overlay");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
    shadow.classList.add("modal-overlay-show");
});
close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    shadow.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login", login.value);                }
});
shadow.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    shadow.classList.remove("modal-overlay-show");
    popup.classList.remove("modal-error"); 
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal-content-show")) {
            popup.classList.remove("modal-content-show");
            shadow.classList.remove("modal-overlay-show");
            popup.classList.remove("modal-error");
        };
    }
});