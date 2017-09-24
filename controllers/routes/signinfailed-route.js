'use strict';

const signinfailed = require('../handlers/signinfailed-handle');

module.exports.route = (server) => {

    server.route({
        method: 'GET',
        path: '/signinfailed',
        handler: signinfailed
    });

};