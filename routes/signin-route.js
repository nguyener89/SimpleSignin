'use strict';

const signin = require('../handlers/signin-handle');

module.exports.route = (server) => {

    server.route({
        method: 'GET',
        path: '/signin',
        handler: signin
    });

};