'use strict';

const forgotpassword = require('../handlers/forgotpassword-handle');

module.exports.route = (server) => {

    server.route({
        method: 'GET',
        path: '/forgotpassword',
        handler: forgotpassword
    });

};