'use strict';

module.exports = (request, response) => {
    response.view('signinfailed', null, { layout: 'default' });
};