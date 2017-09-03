'use strict';

var persistence = require('../persistence/persistence');

module.exports.CreateAccount = (email, username, password, question, answer) => {
    persistence.CreateAccount(email, username, password, question, answer);
};

module.exports.CheckIfEmailIsAvailable = (email) => {
    var existingEmail = persistence.GetEmail(email);
    console.log('existing email: ' + existingEmail);
    if (existingEmail.item) {
        return true;
    } else {
        return false;
    }
};