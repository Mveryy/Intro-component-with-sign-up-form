let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let submit = document.querySelector("#form");
let firstNameError = document.querySelector("#firstName-error");
let lastNameError = document.querySelector("#lastName-error");
let emailError = document.querySelector("#email-error");
let emptyPasswordError = document.querySelector("#empty-password-error");
let passwordError = document.querySelector("#password-error");
let txtErrors = Object.values(document.querySelectorAll(".txt-error"));
let inputs = Object.values(document.getElementsByTagName("input"));
let imgErrors = Object.values(document.querySelectorAll(".img-error"));
let formSubmit = true;

// "Submit" only when all inputs is correct, otherwise "submit" isn't send
submit.addEventListener("submit", (e) => {
    if (formSubmit == true) {
        verify(e);
        if (formSubmit == false) {
            e.preventDefault();
            formSubmit = true;
        }
    }
});

inputs.map((input, i) => {
    input.addEventListener("click", () => {
        input.classList.remove("inputError");
        input.nextElementSibling.classList.add("d-none");
        txtErrors[i].classList.add("d-none");
        passwordError.classList.add("d-none");
    });
});

const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validatePassword = (password) => {
    return password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
};

function verify(input) {
    if (firstName.value.length == 0) {
        firstName.classList.add("inputError");
        firstNameError.classList.remove("d-none");
        firstName.nextElementSibling.classList.remove("d-none");
        formSubmit = false;
    }

    if (lastName.value.length == 0) {
        lastName.classList.add("inputError");
        lastNameError.classList.remove("d-none");
        lastName.nextElementSibling.classList.remove("d-none");
        formSubmit = false;
    }

    if (!validateEmail(email.value)) {
        email.classList.add("inputError");
        emailError.classList.remove("d-none");
        email.nextElementSibling.classList.remove("d-none");
        formSubmit = false;
    }

    if (password.value.length == 0) {
        password.classList.add("inputError");
        emptyPasswordError.classList.remove("d-none");
        password.nextElementSibling.classList.remove("d-none");
        formSubmit = false;
        return;
    }

    if (!validatePassword(password.value)) {
        password.classList.add("inputError");
        passwordError.classList.remove("d-none");
        password.nextElementSibling.classList.remove("d-none");
        formSubmit = false;
    }
}
