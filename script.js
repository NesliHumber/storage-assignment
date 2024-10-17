let username = document.getElementById('username');
let saveButton = document.getElementById('save-btn');
let clearButton = document.getElementById('clear-btn');
let displayName = document.getElementById('display-name');

function saveName() {
    let name = username.value;
    if (name) {
        localStorage.setItem('username', name);
        displaySavedName();
    }
}

function displaySavedName() {
    let savedName = localStorage.getItem('username');
    if (savedName) {
        displayName.textContent = `Saved Name: ${savedName}`;
    } else {
        displayName.textContent = '';
    }
}

function clearName() {
    localStorage.removeItem('username');
    username.value = '';
    displayName.textContent = '';
}

saveButton.addEventListener('click', saveName);
clearButton.addEventListener('click', clearName);

document.addEventListener('DOMContentLoaded', displaySavedName);

