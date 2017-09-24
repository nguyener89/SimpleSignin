'use strict';

var persistence = require('../persistence/persistence');

function CheckEmail(email, callback) {

    persistence.GetEmail(email, function (response) {
        var data = JSON.stringify(response);
        var parsedData = JSON.parse(data);
        console.log(parsedData.Item);
        if (!parsedData.Item) {
            console.log('falsedata' + data);
            callback(false);
        } else {
            console.log('truedata: ' + parsedData.Item.password.S);
            callback(parsedData.Item.password.S);
        }
    });

}

module.exports.SignIn = (email, password, callback) => {

    console.log('Sending email: ' + email);

    CheckEmail(email, function (res) {
        if (res) {
            console.log('Email correct');
            if (res === password) {
                console.log('Email and password correct');
                callback(true);

            }
            else {
                console.log('Password incorrect');
                callback(false);
            }
        } else {
            console.log('Email incorrect');
            callback(false);
        }
    });

};