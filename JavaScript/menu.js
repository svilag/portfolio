var menuButton = document.getElementById("menu");
var menuContent = document.getElementById("menu-content");

function menuLoadFunction() {
    console.log("menu script loaded");
}

function menuFunction() {
    menuContent.classList.toggle("menu-visible");
    console.log("menu toggled");
}

window.onclick = function(event) {
    if (!event.target.matches("#menu")) {
        if (menuContent.classList.contains("menu-visible")) {
            menuContent.classList.remove('menu-visible');
            console.log("menu hidden");
        }
    }
}