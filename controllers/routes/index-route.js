'use strict';

const index = require('../handlers/index-handle');

module.exports.route = (server) => {

    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: false,
            handler: index
        }
    });
};