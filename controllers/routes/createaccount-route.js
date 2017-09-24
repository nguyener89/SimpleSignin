'use strict';

const createaccount = require('../handlers/createaccount-handle');

module.exports.route = (server) => {

    server.route({
        method: ['GET', 'POST'],
        path: '/createaccount',
        config: {
            auth: false,
            handler: createaccount
        }
    });

};