'use strict';

const inputEmail = document.querySelector('.form__input-email');
const iconError = document.querySelector('.icon__error');
const labelError = document.querySelector('.label--error');
////////////////////

inputEmail.addEventListener('invalid', (e)=>{
    e.preventDefault();
    iconError.classList.remove('hidden');
    labelError.classList.remove('hidden');
});

inputEmail.addEventListener('input', ()=>{
    iconError.classList.add('hidden');
    labelError.classList.add('hidden');
})