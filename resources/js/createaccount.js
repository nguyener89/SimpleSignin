'use strict';

function validateFields() {
    var password = document.getElementById("password"),
        confirmpassword = document.getElementById("confirmpassword");

    if (password.value !== confirmpassword.value) {
        confirmpassword.setCustomValidity("Passwords don't match");
    } else {
        confirmpassword.setCustomValidity('');
    }

}
