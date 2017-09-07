'use strict';

var persistence = require('../persistence/persistence');

function CheckIfEmailIsAvailable (email, callback) {
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
    CheckIfEmailIsAvailable(email, function (response) {
        if (response) {
            persistence.CreateAccount(email, username, password, question, answer);
            console.log('truecreate');
            callback(true);
        } else {
            console.log('falsecreate');
            callback(false);
        }
    });


};