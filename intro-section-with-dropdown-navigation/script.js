'use strict';

const menuBar = document.querySelector('.nav__menu');
const btnOpenMenu = document.querySelector('.nav__icon-menu');
const overlay = document.querySelector('.overlay');
////////////////////////////////////

btnOpenMenu.addEventListener('click', ()=>{
    // Styles set hidden by default
    menuBar.classList.toggle('nav__menu--open');
    btnOpenMenu.classList.toggle('nav__icon-menu--close');
    overlay.classList.toggle('show');
});