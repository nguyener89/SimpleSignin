'use strict';

const Joi = require('joi'),
    Boom = require('boom'),
    CreateAccount = require('../../models/createaccount');

module.exports = (request, response) => {

    const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        username: Joi.string().alphanum().min(3).required(),
        password: Joi.string().min(3).max(30).required(),
        question: Joi.string().min(3).max(30).required(),
        answer: Joi.string().min(3).max(30).required()
    });

    if (request.method === 'post') {
        Joi.validate(request.payload, schema, (err) => {
            if (err) return response(Boom.badRequest(err));

            CreateAccount.CreateAccount(request.payload.email, request.payload.username, request.payload.password,
                request.payload.question, request.payload.answer, function (res) {
                    if (res) {
                        return response.redirect('/signin');
                    } else {
                        return response(Boom.serverUnavailable(err));
                    }
                });

        });

    }
    else {
        return response.view('createaccount');
    }

};