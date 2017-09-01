'use strict';

const createaccount = require('../handlers/createaccount-handle');

module.exports.route = (server) => {

    server.route({
        method: 'GET',
        path: '/createaccount',
        handler: createaccount
    });

};