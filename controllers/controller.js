'use strict';

const index = require('./routes/index-route'),
    signin = require('./routes/signin-route'),
    createaccount = require('./routes/createaccount-route'),
    forgotpassword = require('./routes/forgotpassword-route'),
    emailtaken = require('./routes/emailtaken-route'),
    accountcreated = require('./routes/accountcreated-route'),
    css = require('./routes/css-route');

module.exports.registerRoutes = (server) => {

    css.route(server);
    index.route(server);
    signin.route(server);
    createaccount.route(server);
    forgotpassword.route(server);
    emailtaken.route(server);
    accountcreated.route(server);

};
