let inputs = document.querySelectorAll("input");
let afterLogin = document.getElementById("after-login");
let nameValidation = /[A-Za-z0-9]{6,}$/;
// let emailValidation = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let un = 1;
let pa = 1;
function logindata() {
    if (!nameValidation.test(inputs[0].value)) {
        alert("Invalid Username");
        un = 0;
    }
    if (!nameValidation.test(inputs[1].value)) {
        alert("Invalid Password");
        pa = 0;
    }
    if (un == 1 && pa == 1)
        return true;
    else
        return false;

}