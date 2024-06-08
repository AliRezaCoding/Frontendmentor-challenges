'use strict';

const navBar = document.querySelector('.nav');
const menuBar = document.querySelector('.nav__menu');
const btnOpenMenu = document.querySelector('.nav__icon-menu');
const overlay = document.querySelector('.overlay');
////////////////////////////////////

// Side bar
btnOpenMenu.addEventListener('click', ()=>{
    // Styles set hidden by default
    menuBar.classList.toggle('nav__menu--open');
    btnOpenMenu.classList.toggle('nav__icon-menu--close');
    overlay.classList.toggle('show');
});

// Drop down menu
navBar.addEventListener('click', e => {
    const target = e.target;
    if (!target.classList.contains('nav__link')) return;
    
    const submenuContainer = 
    target.closest('.nav__item-submenu');
    if(!submenuContainer) return;

    // nav__icon-arrow--up
    submenuContainer.querySelector('.nav__icon-arrow')
    .classList.toggle('nav__icon-arrow--up');

    submenuContainer.querySelector('.nav__submenu')
    .classList.toggle('nav__submenu--open');
});