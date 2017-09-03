'use strict';

const AWS = require('aws-sdk'),
    Boom = require('boom');

AWS.config.update({
    region: "us-east-2",
    endpoint: "https://dynamodb.us-east-2.amazonaws.com"
});

var dynamoAccess = new AWS.DynamoDB();

module.exports.CreateAccount = (email, user, password, question, answer) => {
    var params = {
        Item: {
            "email": {
                S: email
            },
            "username": {
                S: user
            },
            "password": {
                S: password
            },
            "question": {
                S: question
            },
            "answer": {
                S: answer
            }
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "simple-signin-account"
    };
    dynamoAccess.putItem(params, function (err, data) {
        if (err) {
            throw Boom.serverUnavailable(err);
        }
        else console.log(data);
    });
};

module.exports.GetEmail = (email) => {
    var params = {
        Key: {
            "email": {
                S: email
            }
        },
        TableName: "simple-signin-account"
    };
    dynamoAccess.getItem(params, function(err, data) {
        if (err) {
            throw Boom.serverUnavailable(err);
        }
        else return data;
    });
};