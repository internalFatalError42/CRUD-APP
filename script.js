'use strict';


let names = ['Erica Mustermann', 'John Doe'],
    phoneNumbers = ['+49 123 456789', '+49 987 654321'];


const render = function () {
    let content = document.getElementById('content');
    let count = names?.length;
    content.innerHTML = '';
    content.innerHTML += `<h1>My Contacts</h1>`;
    content.innerHTML += `
        <div>
            <input type="text" id="name" placeholder="Name">
            <input type="tel" id="phone" placeholder="Telefon">
            <button id="add">Hinzufügen</button>
        </div>
    `;

    for (let i = 0; i < count; i++) {
        content.innerHTML += /*html*/ `
            <div class="card">
                <b>Name: </b> ${names[i]}<br>
                <b>Telefon: </b> ${phoneNumbers[i]} <br>
                <button onclick="deleteContact(${i})">Löschen</button> <br>
            </div>
        `;
    }

    document.getElementById('add').onclick = function () {
        let name = document.getElementById('name').value;
        let phone = document.getElementById('phone').value;
        
        if (name && phone) {
            names.push(name);
            phoneNumbers.push(phone);

            render();
            save();
        }
    };
}


const deleteContact = function (index) {
    names.splice(index, 1);
    phoneNumbers.splice(index, 1);

    render();
    save();
}


const save = function () {
    let nameAsText = JSON.stringify(names);
    let phoneAsText = JSON.stringify(phoneNumbers);

    localStorage.setItem('names', nameAsText);
    localStorage.setItem('phones', phoneAsText);  
};


const load = function () {
    let nameAsText = localStorage.getItem('names');
    let phoneAsText = localStorage.getItem('phones');

    if (nameAsText && phoneAsText) {
        names = JSON.parse(nameAsText);
        phoneNumbers = JSON.parse(phoneAsText);
    }
}

load();
