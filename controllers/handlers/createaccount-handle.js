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
            var email = request.payload.email, username = request.payload.username,
                password = request.payload.password, question = request.payload.question,
                answer = request.payload.answer;

            CreateAccount.IsEmailAvailable(email, function (res) {
                if(res) {
                    CreateAccount.CreateAccount(email, username, password,
                        question, answer, function (resp) {
                            if (resp) {
                                return response.redirect('/accountcreated');
                            } else {
                                return response(Boom.serverUnavailable(err));
                            }
                        });
                } else {
                    return response.redirect('/emailtaken');
                }
            });


        });

    }
    else {
        return response.view('createaccount', null, { layout: 'default' });
    }

};