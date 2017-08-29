'use strict';

var index = require('./handlers/index'),
    signin = require('./handlers/signin');

module.exports.registerRoutes = (server) => {

    server.route({
        method: 'GET',
        path: '/',
        handler: index
    });
    server.route({
        method: 'GET',
        path: '/signin',
        handler: signin
    });

};