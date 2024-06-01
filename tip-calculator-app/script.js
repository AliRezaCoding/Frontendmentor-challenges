'use strict';

const inputBill = document.querySelector('.form__input--bill');
const inputPeople = document.querySelector('.form__input--people');
const containerTips = document.querySelector('.form__tip');
const inputTips = Array.from(document.querySelectorAll('.form__option-value'));
const inputTipCustom = document.querySelector('.form__option-custom');

const resultAmount = document.querySelector('.result__value-amount');
const resultTotal = document.querySelector('.result__value-total');

const btnReset = document.querySelector('.btn--reset');

const labelErrorPeople = document.querySelector('.label--error');
///////////////////////////////////////////

// CALCULATION

const handleCalculation = function (e) {
    if (!inputsValidated()) {
        btnReset.disabled = true;
        return;
    }
    btnReset.disabled = false;

    const { amount, total } = calculateTip();

    // Display result in DOM
    resultAmount.textContent = amount.toFixed(2);
    resultTotal.textContent = total.toFixed(2);
};

const inputsValidated = function () {
    const selectedOption = inputTips.find(input => {
        if (input.checked) return input;
    });

    let isValid = false;
    let checkBill = false;
    let checkRatio = false;
    let checkPeople = false;

    if (inputBill.value && !(+inputBill.value === 0)) checkBill = true;
    if (inputPeople.value && !(+inputPeople.value === 0)) {
        checkRatio = true;
        labelErrorPeople.classList.remove('show');
    } else {
        labelErrorPeople.classList.add('show');
    }
    if (
        selectedOption ||
        (inputTipCustom.value && !(+inputTipCustom.value === 0))
    )
        checkPeople = true;

    if (checkBill && checkRatio && checkPeople) isValid = true;

    return isValid;
};

const calculateTip = function () {
    const selectedOption = inputTips.find(input => {
        if (input.checked) return input;
    });

    const billNumber = +inputBill.value;
    const numOfPeople = +inputPeople.value;
    const tipRatio = +selectedOption?.value || +inputTipCustom.value / 100;

    const billForPerson = billNumber / numOfPeople;

    const amount = billForPerson * tipRatio;
    const total = billForPerson + amount;

    return {
        amount,
        total,
    };
};

inputBill.addEventListener('keyup', handleCalculation);
inputPeople.addEventListener('keyup', handleCalculation);
inputTipCustom.addEventListener('keyup', handleCalculation);
inputTips.forEach(input => input.addEventListener('change', handleCalculation));

// OTHER
const preventNegativeNum = e => {
    if (e.code === 'Equal' || e.code === 'Minus') e.preventDefault();
};

inputBill.addEventListener('keydown', preventNegativeNum);
inputPeople.addEventListener('keydown', preventNegativeNum);
inputTipCustom.addEventListener('keydown', preventNegativeNum);

// form__option--hover
// form__option--selected
containerTips.addEventListener('mouseover', e => {
    const target = e.target;
    if (!target.classList.contains('form__option')) return;
    target.classList.add('form__option--hover');
});

containerTips.addEventListener('mouseout', e => {
    const target = e.target;
    if (!target.classList.contains('form__option')) return;
    target.classList.remove('form__option--hover');
});

const unCheckInputTips = () => {
    inputTips.forEach(input => {
        input.checked = false;
        // Input Label (option)
        input.nextElementSibling.classList.remove('form__option--selected');
    });
};

containerTips.addEventListener('click', e => {
    const target = e.target;
    if (!target.classList.contains('form__option')) return;

    // Clear custom tip input field
    inputTipCustom.value = '';
    unCheckInputTips();

    target.checked = true;
    target.classList.add('form__option--selected');
});

inputTipCustom.addEventListener('focus', unCheckInputTips);

btnReset.addEventListener('click', () => {
    inputBill.value = inputTipCustom.value = '';

    inputPeople.value = '1';

    resultAmount.textContent = resultTotal.textContent = '0.00';

    unCheckInputTips();

    btnReset.disabled = true;
});
