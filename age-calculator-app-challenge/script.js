"use strict";

// ELEMENTS
const inputDay = document.querySelector(".input__day");
const inputMonth = document.querySelector(".input__month");
const inputYear = document.querySelector(".input__year");

const btnSumbitDate = document.querySelector(".btn__submit");
//////////////////////////

// Index Of Month Days
const monthsDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

// VALIDATE INPUTS
const validateInputs = function (inputs) {
    const [inputDay, inputMonth, inputYear] = inputs;

    const day = inputDay.value;
    const month = inputMonth.value;
    const year = inputYear.value;

    let validated = true;
    const invalidInput = () => (validated = false);

    // For Empty Input Fields
    if (!day) {
        displayError("This field is required", inputDay);
        invalidInput();
    }

    if (!month) {
        displayError("This field is required", inputMonth);
        invalidInput();
    }

    if (!year) {
        displayError("This field is required", inputYear);
        invalidInput();
    }

    // For Days > Month Days
    if (day > monthsDays[month - 1]) {
        displayError("Must be a valid date", inputDay);
        invalidInput();
    }

    // For Inputs > / < Regular (day, month, year) Format
    if (day > 31 || day < 0 || day === 0) {
        displayError("Must be a valid day", inputDay);
        invalidInput();
    }

    // For Inputs > / < Regular (day, month, year) Format
    if (month > 12 || month < 0 || month === 0) {
        displayError("Must be a valid month", inputMonth);
        invalidInput();
    }

    // For Inputs > Regular (day, month, year) Format
    if (year > new Date().getFullYear()) {
        displayError("Must be in the past", inputYear);
        invalidInput();
    }

    // For Dates > Current Date (at all);
    // Months Are Zero Based
    if (new Date(year, month - 1, day) > new Date()) {
        displayError("Must be a valid date", inputDay);
        invalidInput();
    }

    return validated;
};

// CALCULATE AGE
const calculateAge = function (dob) {
    const now = new Date();
    const DOB = new Date(dob);

    let years = now.getFullYear() - DOB.getFullYear();
    // .getMonth() Returns Zero Based Month Number
    let months = now.getMonth() - DOB.getMonth();
    let days = now.getDate() - DOB.getDate();

    if (months < 0 || (months === 0 && now.getDate() < DOB.getDate())) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const prevMonth = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            DOB.getDate()
        );
        days = Math.floor((now - prevMonth) / (24 * 60 * 60 * 1000));
    }

    return { years, months, days };
};

// DISPLAY AGE IN DOM
const displayAge = function (age) {
    const resultYear = document.querySelector(".result__year");
    const resultMonth = document.querySelector(".result__month");
    const resultDay = document.querySelector(".result__day");

    // Display Age In DOM With Animation
    resultYear.textContent = "0";
    resultMonth.textContent = "0";
    resultDay.textContent = "0";

    const animateYear = () => {
        let domNum = +resultYear.textContent;
        age.years > domNum ? domNum++ : clearInterval(intervalYear);

        resultYear.textContent = domNum;
    };
    const animateMonth = () => {
        let domNum = +resultMonth.textContent;
        age.months > domNum ? domNum++ : clearInterval(intervalMonth);

        resultMonth.textContent = domNum;
    };
    const animateDay = () => {
        let domNum = +resultDay.textContent;
        age.days > domNum ? domNum++ : clearInterval(intervalDay);

        resultDay.textContent = domNum;
    };
    const intervalYear = setInterval(animateYear, 25);
    const intervalMonth = setInterval(animateMonth, 25);
    const intervalDay = setInterval(animateDay, 25);
};

// DISPLAY ERROR IN DOM
const displayError = (message, input) => {
    const inputLabel = input.previousElementSibling;
    const inputErrorLabel = input.nextElementSibling;

    inputErrorLabel.textContent = message;
    inputErrorLabel.classList.remove("hidden");

    input.classList.add("input__error");
    inputLabel.classList.add("label__error");
};

const removeErrors = () => {
    document
        .querySelectorAll("input")
        .forEach(input => input.classList.remove("input__error"));

    document
        .querySelectorAll(".label__input--invalid")
        .forEach(label => label.classList.add("hidden"));

    document
        .querySelectorAll(".label__input")
        .forEach(label => label.classList.remove("label__error"));
};

btnSumbitDate.addEventListener("click", function (e) {
    e.preventDefault();

    // IF Any Error Remove It
    removeErrors();

    // VALIDATION
    const validated = validateInputs([inputDay, inputMonth, inputYear]);

    if (!validated) return;

    const day = +inputDay.value;
    const month = +inputMonth.value;
    const year = +inputYear.value;

    const dateOfBirth = `${year}-${month}-${day}`;

    const age = calculateAge(dateOfBirth);
    displayAge(age);
});
