const shareMenu = document.querySelector('.share-menu');
const btnOpenShareMenu = document.querySelector('.card__bottom-icon');

btnOpenShareMenu.addEventListener('click', ()=>{
    shareMenu.classList.toggle('share-menu--open');
})