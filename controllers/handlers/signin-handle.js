'use strict';

const SignIn = require('../../models/signin-model');

module.exports = (request, reply) => {

    if (request.method === 'post') {

        var email = request.payload.email,
            password = request.payload.password;

        SignIn.SignIn(email, password, function(res) {
            if (res) {
                reply.view('landing', null, { layout: 'default' });
            }
            else {
                reply.view('signinfailed', null, { layout: 'default' });
            }
        });

    }
    else {

        reply.view('signin', null, { layout: 'default' });

    }

};