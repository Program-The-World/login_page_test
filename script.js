const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
const error1 = document.getElementById('error1');
const error2 = document.getElementById('error2');
const button = document.getElementById('login-button');


username.addEventListener('input', focusUsername);
function focusUsername() {
    username.style.border = "1px solid #f3e8e8";
    error1.innerText = "";
}

password.addEventListener('input', focusPassword);
function focusPassword() {
    password.style.border = "1px solid #f3e8e8";
    error2.innerText = "";
}

username.addEventListener('blur', checkUsername);
password.addEventListener('blur', checkPassword);


button.addEventListener('click', validate);

function validate() {
    checkUsername();
    checkPassword();
}

function checkUsername() {
    if (username.value === "" || username.value == null) {
        username.style.border = "1px solid #db330d";
        error1.innerText = "* this field is required";
        error1.style.color = "#db330d";
        error1.style.fontSize = "12px";
        error1.style.float = "left";
        error1.style.marginLeft = "6px";
    }
}

function checkPassword() {
    if (password.value === "" || password.value == null) {
        password.style.border = "1px solid #db330d";
        error2.innerText = "* this field is required";
        error2.style.color = "#db330d";
        error2.style.fontSize = "12px";
        error2.style.float = "left";
        error2.style.marginLeft = "6px";
    }
}
