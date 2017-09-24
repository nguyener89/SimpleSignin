'use strict';

const signin = require('../handlers/signin-handle');

module.exports.route = (server) => {

    server.route({
        method: ['GET', 'POST'],
        path: '/signin',
        config: {
            auth: false,
            handler: signin
        }
    });

};