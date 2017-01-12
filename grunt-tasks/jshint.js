'use strict';

module.exports = {
	options:{
		jshintrc: true
	},
	all: ['Gruntfile.js', '<%= config.prod.scripts %>/*.js']
};