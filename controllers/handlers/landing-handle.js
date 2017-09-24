'use strict';

module.exports = (request, response) => {
    response.view('landing', null, { layout: 'default' });
};