'use strict';

const accountcreated = require('../handlers/accountcreated-handle');

module.exports.route = (server) => {

    server.route({
        method: ['GET'],
        path: '/accountcreated',
        config: {
            auth: false,
            handler: accountcreated
        }
    });

};