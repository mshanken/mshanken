'use strict';

module.exports = {
  gruntfile: {
    files: 'Gruntfile.js',
    tasks: ['jshint'],
  },
	js: {
    files: 'web/js/**/*.js',
    tasks: ['jshint'],
    options: {
      debounceDelay: 250,
    },
  },
  css: {
    files: 'web/css/**/*.css',
    tasks: ['csslint'],
    options: {
      livereload: true,
    },
  }
};