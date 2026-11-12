// JavaScript Document
console.log("hi");

// // DE MENU BUTTON OPENEN

const menuButton = document.querySelector(".navHead > button");
const deNav = document.querySelector(".navGrid");

console.log(menuButton);
console.log(deNav);

menuButton.addEventListener("click", openMenu);

function openMenu(){
    deNav.classList.add("toonMenu");
    console.log("Menu geopend!");
}