'use strict';

const render = function () {
    let content = document.getElementById('content');
    let element = document.createElement('div');
    element.innerHTML = '';
    element.innerHTML = `<h1>My Contacts</h1>`;
    element.innerHTML += getDateTime();
    content.appendChild(element);
}

const getDateTime = function () {
    let date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    let year = date.getFullYear();

    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    let dateTime = `<b>${day}.${month}.${year} ${hours}:${minutes}:${seconds}</b>`;

    return dateTime;
}
