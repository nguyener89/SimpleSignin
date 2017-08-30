'use strict';

const index = require('./routes/index-route'),
    signin = require('./routes/signin-route');

module.exports.registerRoutes = (server) => {

    index.route(server);
    signin.route(server);

};