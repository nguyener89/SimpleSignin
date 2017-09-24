'use strict';

var persistence = require('../persistence/persistence');

function CheckIfEmailIsAvailable(email, callback) {

    persistence.GetEmail(email, function (response) {
        var data = JSON.stringify(response);
        var parsedData = JSON.parse(data);
        console.log(parsedData.Item);
        if (!parsedData.Item) {
            console.log('falsedata' + data);
            callback(true);
        } else {
            console.log('truedata: ' + data);
            callback(false);
        }
    });

}


module.exports.CreateAccount = (email, username, password, question, answer, callback) => {

    persistence.CreateAccount(email, username, password, question, answer, function (res) {
        if (res) {
            console.log("create account: " + res);
            callback(true);
        }
        else {
            console.log("account not created: " + res);
            callback(false);
        }
    });

};

module.exports.IsEmailAvailable = (email, callback) => {

    CheckIfEmailIsAvailable(email, function (res) {
        if (res) {
            console.log('Email available');
            callback(true);
        } else {
            console.log('Email not available');
            callback(false);
        }
    });

};