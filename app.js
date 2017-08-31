'use strict';

const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.register(require('vision'), (err) => {

    if (err) {
        throw err;
    }

    server.views({
       engines: {
           html: require('handlebars')
       },
        relativeTo: __dirname,
        path: './templates',
        partialsPath: './templates/partials',
        // helpersPath: './templates/helpers',
        layoutPath: './templates',
        layout: 'default'
    });

    require('./routes').registerRoutes(server);

});

server.register ( {
    register: Good,
    options: {
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    response: '*',
                    log: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, (err) => {

    if (err) {
        throw err; // something bad happened loading the plugin
    }

    server.start ((err) => {

        if (err) {
            throw err;
        }

        server.log('info', 'Server running at: ' + server.info.uri);

    });

});
