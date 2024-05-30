'use strict';

const ratingCard = document.querySelector('.rating-card');
const messageCard = document.querySelector('.message-card');
const returnCard = document.querySelector('.card__sub-title');
const cardOptions = document.querySelector('.card__options');
const selectedNum = document.querySelector('.selected-number');
const btnRate = document.querySelector('.card__btn');
////////////////////////////////////

let selectedRate;


// card__number-hover
// card__number-select

cardOptions.addEventListener('mouseover', e => {
    if (!e.target.classList.contains('card__number')) return;
    e.target.classList.add('card__number-hover');
});

cardOptions.addEventListener('mouseout', e => {
    if (!e.target.classList.contains('card__number')) return;
    e.target.classList.remove('card__number-hover');
});

cardOptions.addEventListener('click',  (e) =>{
    const element = e.target;
    if (!element.classList.contains('card__number')) return;

    cardOptions.querySelectorAll('.card__number')
    .forEach(el => el.classList.remove('card__number-select'));

    element.classList.add('card__number-select');
    
    selectedRate = +element.textContent;
});


btnRate.addEventListener('click', e => {
    if(!selectedRate) return;

    ratingCard.classList.add('hidden');
    messageCard.classList.remove('hidden');

    selectedNum.textContent = selectedRate;
});

returnCard.addEventListener('click', e => {
    ratingCard.classList.remove('hidden');
    messageCard.classList.add('hidden');
})
