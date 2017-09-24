'use strict';

const emailtaken = require('../handlers/emailtaken-handle');

module.exports.route = (server) => {

    server.route({
        method: ['GET'],
        path: '/emailtaken',
        config: {
            auth: false,
            handler: emailtaken
        }
    });

};