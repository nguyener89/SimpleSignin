'use strict';

module.exports = (request, response) => {
    response.view('emailtaken', null, { layout: 'default' });
};