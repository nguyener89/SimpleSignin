'use strict';

const Joi = require('joi'),
    Boom = require('boom'),
    CreateAccount = require('../../models/createaccount');

module.exports = (request, response) => {

    const schema = Joi.object().keys({
        email: Joi.string().email(),
        username: Joi.string().alphanum().min(3).required(),
        password: Joi.string().min(3).max(30).required(),
        confirmpassword: Joi.string().min(3).max(30).required(),
        question: Joi.string().min(3).max(30).required(),
        answer: Joi.string().min(3).max(30).required()
    });

    if (request.method === 'post') {
        Joi.validate(request.payload, schema, (err, val) => {
        if (err) return reply(Boom.badRequest(err));

        CreateAccount.CreateAccount(request.payload.email, request.payload.username, request.payload.password,
            request.payload.question, request.payload.answer);
        });

    }
    else {
       return response.view('createaccount');
    }

};