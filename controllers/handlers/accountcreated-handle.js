'use strict';

module.exports = (request, response) => {
    response.view('accountcreated', null, { layout: 'default' });
};