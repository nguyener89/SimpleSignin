'use strict';

var AWS = require('aws-sdk');

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
  dynamoAccess.putItem(params, function(err, data){
     if (err) {
         throw err;
     }
     else console.log(data);
  });
};