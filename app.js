'use strict';

const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();
server.connection({port: 3000, host: 'localhost'});

server.register([require('vision'), require('hapi-auth-cookie')], (err) => {

    if (err) {
        throw err;
    }

    const cache = server.cache({ segment: 'sessions', expiresIn: 24 * 60 * 60 * 1000 });
    server.app.cache = cache;

    server.auth.strategy('base', 'cookie', {
        password: 'supersecretpasswordthatnoonewilleverguessandisthirtytwocharacterslong', // cookie secret
        cookie: 'app-cookie', // cookie name
        // ttl: 24 * 60 * 60 * 1000 // 24h 60m 60s 1000ms
        redirectTo: '/signin',
        isSecure: false,
        validateFunc: function (request, session, callback) {

            cache.get(session.sid, (err, cached) => {

                if (err) {
                    return callback(err, false);
                }

                if (!cached) {
                    return callback(null, false);
                }

                return callback(null, true, cached.account);

            });

        }
    });

    server.auth.default({
        strategy: 'base'
    });

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: './views',
        partialsPath: './views/partials',
        // helpersPath: './templates/helpers',
        layoutPath: './views/layouts'
        // layout: 'default'
    });

    require('./controllers/controller').registerRoutes(server);

});

server.register({
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

    server.start((err) => {

        if (err) {
            throw err;
        }

        server.log('info', 'Server running at: ' + server.info.uri);

    });

});
