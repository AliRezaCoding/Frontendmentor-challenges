'use strict';
const unreadMessages = document.querySelectorAll('.noti__unread');
const unreadCountEl = document.querySelector('.noti__count');
const btnReadAll = document.querySelector('.btn__read--all');

/////////////////////////////////////
let unread = unreadMessages.length;

const markAsRead = function () {
    this.classList.remove('noti__unread');
    unread > 0 ? unread-- : unread = 0;
    unreadCountEl.textContent = unread;
}

// Here I Changed This Keyword Of Function To Message Element Using .bind() method
unreadMessages.forEach(message => message.addEventListener('click', markAsRead.bind(message)));

btnReadAll.addEventListener('click', () => {
    unreadMessages.forEach(message => markAsRead.bind(message)());
});


