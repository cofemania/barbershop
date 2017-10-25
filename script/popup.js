var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var shadow = document.querySelector(".modal-overlay");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password");
var form = popup.querySelector("form");
var storage = localStorage.getItem("login");
var mapLink = document.querySelector(".adress");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".map-content-close");
var mapShadow = document.querySelector(".modal-overlay");

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
mapLink.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.add("map-show");
    mapShadow.classList.add("modal-overlay-show");
});
mapClose.addEventListener("click", function(event){
    event.preventDefault();
    mapPopup.classList.remove("map-show");
    mapShadow.classList.remove("modal-overlay-show");
});
mapShadow.addEventListener("click", function(event) {
    event.preventDefault();
    mapPopup.classList.remove("map-show");
    mapShadow.classList.remove("modal-overlay-show");
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (mapPopup.classList.contains("map-show")) {
            mapPopup.classList.remove("map-show");
            mapShadow.classList.remove("modal-overlay-show");
        };
    }
});