'use strict';

const form = document.querySelector('.form');
const inputCheckbox = document.querySelector('.form__input-checkbox');
const inputEmail = document.querySelector('.form__input-email');
const queryInputs = document.querySelectorAll('.form__input-query');
const otherInputs = document.querySelectorAll('.form__input');

//////////////////////////////

// Error Labels
const errLabelQuery = document.querySelector(
    '.form__control-queries'
).lastElementChild;
const errLabelCheckbox =
    inputCheckbox.closest('.label__container').nextElementSibling;

// Error Messages
const errMessageInput = 'This field is required';
const errMessageQuery = 'Please select a query type';
const errMessageCheckbox =
    'To submit this form, please consent to being contacted';
const errMessageEmail = 'Please enter a valid email address';

///////////////////////////////

const removeNearestErr = function (target) {
    const nearestErrContainer =
        target.closest('.form__control') ||
        target.closest('.form__control-queries');

    if (!nearestErrContainer) return;

    nearestErrContainer.querySelector('.label--error').classList.remove('show');
};

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validatng Inputs
    let validated = true;
    const selectedQuery = document.querySelector('.form__input-query:checked');

    otherInputs.forEach(input => {
        const errInput = input.nextElementSibling;
        if (!input.value) {
            validated = false;
            errInput.textContent = errMessageInput;
            errInput.classList.add('show');
        } else {
            errInput.classList.remove('show');
        }
    });

    if (!selectedQuery) {
        validated = false;
        errLabelQuery.textContent = errMessageQuery;
        errLabelQuery.classList.add('show');
    } else {
        errLabelQuery.classList.remove('show');
    }

    if (!inputCheckbox.checked) {
        validated = false;
        errLabelCheckbox.textContent = errMessageCheckbox;
        errLabelCheckbox.classList.add('show');
    } else {
        errLabelCheckbox.classList.remove('show');
    }
});

form.addEventListener('keydown', function (e) {
    removeNearestErr(e.target);
});

inputCheckbox.addEventListener('change', function (e) {
    removeNearestErr(e.target);
});

inputEmail.addEventListener('invalid', function (e) {
    e.preventDefault();

    const errLabel = e.target
        .closest('.form__control')
        .querySelector('.label--error');

    errLabel.textContent = errMessageEmail;
    errLabel.classList.add('show');
});

// Changing Query-Type Inputs Style While Changing
queryInputs.forEach(input => {
    input.addEventListener('change', function (e) {
        queryInputs.forEach(inp =>
            inp
                .closest('.form__query')
                .classList.remove('form__query--selected')
        );

        this.closest('.form__query').classList.add('form__query--selected');
        removeNearestErr(e.target);
    });
});
