'use strict';

const landing = require('../handlers/landing-handle');

module.exports.route = (server) => {

    server.route({
        method: 'GET',
        path: '/landing',
        handler: landing
    });

};