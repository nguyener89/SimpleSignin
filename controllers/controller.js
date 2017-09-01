'use strict';

const index = require('./routes/index-route'),
    signin = require('./routes/signin-route'),
    css = require('./routes/css-route');

module.exports.registerRoutes = (server) => {

    css.route(server);
    index.route(server);
    signin.route(server);

};
