/*
Jeff  11/28/2022
toggle_menu.js 
*/

"use strict"


let toggleButton = document.getElementById('toggle-button');
let navlist = document.querySelector('.navbar-list');

toggleButton.addEventListener("click", () => {
    navlist.classList.toggle('active')
})



window.addEventListener("resize", () => {
    if (window.innerWidth > 930) {
        navlist.classList.remove('active')
    }
});