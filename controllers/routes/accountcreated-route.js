'use strict';

const accountcreated = require('../handlers/accountcreated-handle');

module.exports.route = (server) => {

    server.route({
        method: ['GET'],
        path: '/accountcreated',
        handler: accountcreated
    });

};