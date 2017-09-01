'use strict';

const Inert = require('inert');

module.exports.route = (server) => {

    server.register(Inert, () => {
    });

    server.route({
        method: 'GET',
        path: '/resources/{param*}',
        handler: {
            directory: {
                path: 'resources',
            }
        }
    });

};
