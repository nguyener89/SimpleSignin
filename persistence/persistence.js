'use strict';

var AWS = require('aws-sdk');

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
  dynamoAccess.putItem(params, function(err, data){
     if (err) {
         throw err;
     }
     else console.log(data);
  });
};