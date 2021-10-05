const form = document.querySelector(".form");
const message = document.querySelector("#message");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError"); 
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const content = document.querySelector("#content");
const contentError = document.querySelector("#contentError"); 

function submitForm(event) {
    event.preventDefault();

    if (checkLength(name.value, 4) === false) {
        nameError.style.display = "block";
        message.innerHTML = "";
    } else if (validateEmail(email.value) === false) {
        emailError.style.display = "block";
        message.innerHTML = "";
    } else if (checkLength(subject.value, 14) === false) {
        subjectError.style.display = "block";
        message.innerHTML = "";
    } else if (checkLength(content.value, 24) === false){
        contentError.style.display = "block";
        message.innerHTML = "";
    } else {
        nameError.style.display = "none";
        emailError.style.display = "none";
        subjectError.style.display = "none";
        contentError.style.display = "none";
        message.innerHTML = `<div class="message">Thank you for your message, you'll hear back from me as soon as possible!</div>`
    }

    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength (value, len) {
    if(value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}