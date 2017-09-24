'use strict';

const Inert = require('inert');

module.exports.route = (server) => {

    server.register(Inert, () => {
    });

    server.route({
        method: 'GET',
        path: '/resources/{param*}',
        config: {
            auth: false,
            handler: {
                directory: {
                    path: 'resources',
                }
            }
        }

    });

};
