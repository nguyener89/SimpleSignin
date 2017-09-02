'use strict';

var password = document.getElementById("password"),
    confirmpassword = document.getElementById("confirmpassword");

function validatePassword() {
    if(password.value != confirmpassword.value) {
        confirmpassword.setCustomValidity("Passwords don't match");
    } else {
        confirmpassword.setCustomValidity('');
    }
}

password.onchange = validatePassword();
confirmpassword.onkeyup = validatePassword();