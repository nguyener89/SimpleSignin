'use strict';

var persistence = require('../persistence/persistence');

module.exports.CreateAccount = (email, username, password, question, answer) => {
    persistence.CreateAccount(email, username, password, question, answer);
};