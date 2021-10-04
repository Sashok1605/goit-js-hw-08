import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form');
const inputEmail = inputForm.querySelector("input");
const inputMassage = inputForm.querySelector("textarea");


let valueInputs = {
    email: '',
    message: ''
};

let getInputs = localStorage.getItem("feedback-form-state");

if (getInputs) {
    valueInputs = JSON.parse(getInputs);
    inputEmail.value = valueInputs.email;
    inputMassage.value = valueInputs.massage;
}

inputForm.addEventListener("input", throttle(enterInput, 500));
inputForm.addEventListener("submit", enterSubmit);
function enterInput() {
    const obj = {
        email: inputForm.elements.email.value,
        message: inputForm.elements.message.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}
function enterSubmit(e) {
    e.preventDefault();
    getInputs = localStorage.getItem("feedback-form-state");
    if(getInputs) {
    valueInputs = JSON.parse(getInputs);
    inputEmail.value = valueInputs.email;
    inputMassage.value = valueInputs.massage;
    }
    console.log(valueInputs);
    
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
}