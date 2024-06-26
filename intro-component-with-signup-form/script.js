'use strict';

const form = document.querySelector('.form');
const allInputs = Array.from(document.querySelectorAll('.form__input'));
const inputEmail = document.querySelector('.form__input-email');
///////////////////////////////

// form__row
// icon--error
// icon--error-active
// label--error
// label--error-active

form.addEventListener('submit', e => {
    allInputs.forEach(input => {
        if (!input.value) {
            e.preventDefault();

            const parentEl = input.closest('.form__row');
            const labelError = parentEl.querySelector('.label--error');
            const iconError = parentEl.querySelector('.icon--error');
            const inputName = input.getAttribute('placeholder');

            iconError.classList.add('icon--error-active');
            labelError.textContent = `${inputName} cannot be empty`;
            labelError.classList.add('label--error-active');

            input.classList.add('form__input--error');
        }
    });
});

allInputs.forEach(input => {
    input.addEventListener('input', ()=> {
        const parentEl = input.closest('.form__row');
        parentEl.querySelector('.label--error')
        .classList.remove('label--error-active');
        parentEl.querySelector('.icon--error')
        .classList.remove('icon--error-active');
        
        input.classList.remove('form__input--error');
    })
});

inputEmail.addEventListener('invalid', (e)=>{
    e.preventDefault();
    const parentEl = inputEmail.closest('.form__row');
            const labelError = parentEl.querySelector('.label--error');
            const iconError = parentEl.querySelector('.icon--error');

            iconError.classList.add('icon--error-active');
            labelError.textContent = `Looks like this is not an email`;
            labelError.classList.add('label--error-active');
            inputEmail.classList.remove('form__input--error');
})