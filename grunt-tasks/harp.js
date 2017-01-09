'use strict';

module.exports = {
  server: {
  	server: true,
  	source: '_site'
  },
  staticserver: {
    server:true,
    source: 'www',
    port: 8800
  },
  dist: {
    source: '_site',
    dest: 'www'
  }
};