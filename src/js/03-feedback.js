import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const FORM_STATE = "feedback-form-state";

form.addEventListener("input", throttle(saveInputElements, 500));
form.addEventListener("submit", save);
function save (e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem(FORM_STATE)));
    localStorage.removeItem(FORM_STATE);
}
function saveInputElements() {
    const inputElements = {
        "email": "email.value",
        "message": "message.value"
    };
    localStorage.setItem(FORM_STATE, JSON.stringify(inputElements));
}
function loadInputElements() {
    const loadElements = JSON.parse(localStorage.getItem(FORM_STATE));
    if (loadElements) {
        email.value = loadElements.email;
        message.value = loadElements.message;
      }
}


