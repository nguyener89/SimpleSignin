'use strict';

module.exports = (request, response) => {
    response.view('index', null, { layout: 'default' });
};