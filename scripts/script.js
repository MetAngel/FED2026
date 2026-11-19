// JavaScript Document
console.log("hi");

// // DE MENU BUTTON OPENEN EN SLUITEN

const menuButton = document.querySelector(".navHead > button");
const deNav = document.querySelector(".navGrid");

console.log(menuButton);
console.log(deNav);

menuButton.addEventListener("click", openMenu);

function openMenu(){
    deNav.classList.toggle("toonMenu");
    menuButton.classList.toggle("toonMenu");
    document.body.classList.toggle("menu-open");
    console.log("Menu geopend of gesloten!");
}

/* bonus: menu sluiten met escape */
window.onkeydown = handleKeydown;

function handleKeydown(event) {
  if (event.key == "Escape") {
    deNav.classList.remove("toonMenu");
    menuButton.classList.remove("toonMenu");
  }
}
