import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form');
const inputPassword = inputForm.querySelector("textarea");
const inputEmail = inputForm.querySelector("input");

let getInputs = localStorage.getItem("feedback-form-state");
let localInputs = JSON.parse(getInputs);


if (localInputs) {
    inputEmail.value = parsedInputs.email;
    inputPassword.value = parsedInputs.password;
}
inputForm.addEventListener("input", throttle(enterInput, 500));
inputForm.addEventListener("submit", enterSubmit);
function enterInput() {
    const obj = {
        email: inputForm.elements.email.value,
        password: inputForm.elements.password.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}
function enterSubmit(e) {
    e.preventDefault();
    getInputs = localStorage.getItem("feedback-form-state");
    localInputs = JSON.parse(getInputs);
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
    }