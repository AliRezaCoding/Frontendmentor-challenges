'use strict';

const btnOpenMenu = document.querySelector('.btn__open--menu');
const btnCloseMenu = document.querySelector('.btn__close--menu');

const menuEl = document.querySelector('menu');
const overlay = document.querySelector('.overlay');

//////////////////

const openMenu = () => {
    menuEl.classList.remove('close');
    menuEl.classList.add('open');
    overlay.classList.remove('close');
};

const closeMenu = () => {
    menuEl.classList.remove('open');
    menuEl.classList.add('close');
    overlay.classList.add('close');
};

btnOpenMenu.addEventListener('click', openMenu)
btnCloseMenu.addEventListener('click', closeMenu)
overlay.addEventListener('click', closeMenu)