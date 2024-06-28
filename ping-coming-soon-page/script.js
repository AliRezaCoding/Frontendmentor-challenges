'use strict';

const form = document.querySelector('.form');
const inputEmail = document.querySelector('.form__input-email');
const errorEmail = document.querySelector('.label--error');
//////////////////////////////

form.addEventListener('submit', e => {
    if (!inputEmail.value) {
        e.preventDefault();
        
        errorEmail.textContent =
            '"Whoops! It looks like you forgot to add your email"';
        errorEmail.classList.add('label--error--active');

        inputEmail.classList.add('form__input--error');
    }
});

inputEmail.addEventListener('invalid', (e) => {
    e.preventDefault();

    errorEmail.textContent = '"Please provide a valid email address"';
    errorEmail.classList.add('label--error--active');

    inputEmail.classList.add('form__input--error');
});

inputEmail.addEventListener('input', ()=>{
    errorEmail.classList.remove('label--error--active');
    inputEmail.classList.remove('form__input--error');
});

// form__control
// form__input-email
// form__input--error
// label--error