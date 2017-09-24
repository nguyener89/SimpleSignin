'use strict';

module.exports = (request, response) => {
    response.view('forgotpassword', null, { layout: 'default' });
};