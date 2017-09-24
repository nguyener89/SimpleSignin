'use strict';

const SignIn = require('../../models/signin-model');

let uuid = 1;

module.exports = (request, reply) => {

    if (request.method === 'post') {

        var email = request.payload.email,
            password = request.payload.password;

        SignIn.SignIn(email, password, function(user) {
            if (user) {
                var account = user;
                const sid = String(++uuid);
                request.server.app.cache.set(sid, { account: account }, 0, (err) => {
                    if (err) {
                        reply(err);
                    }
                    request.cookieAuth.set({ sid: sid });
                    console.log('setting cookie');
                    console.log(user);
                    // reply.view('landing', null, { layout: 'default' });
                    reply.redirect('/landing');
                });
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