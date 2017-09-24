'use strict';

module.exports = (request, response) => {
    response.view('signin', null, { layout: 'default' });
};