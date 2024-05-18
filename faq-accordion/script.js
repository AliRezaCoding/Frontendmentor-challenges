"use strict";

const accordion = document.querySelector(".accordion");
///////////////////////////////

accordion.addEventListener("click", e => {
    if (!e.target.classList.contains("question")) return;

    e.target.nextElementSibling.classList.toggle("show");

    // Changing Icon
    const elIcon = e.target.querySelector(".icon-plus");

    elIcon.src =
        elIcon.getAttribute("src") === elIcon.dataset.plusUrl
            ? elIcon.dataset.minusUrl
            : elIcon.dataset.plusUrl;
});
