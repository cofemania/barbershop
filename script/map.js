var mapLink = document.querySelector(".adress");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = document.querySelector(".map-content-close");
var mapShadow = document.querySelector(".modal-overlay");

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