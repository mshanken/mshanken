'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var options = {
    config : {
      src: ['grunt-tasks/uglify.js', 'grunt-tasks/copy.js', 'grunt-tasks/concat.js'],
      pkg: grunt.file.readJSON('package.json'),
      replacements: require('./grunt-tasks/replacements'), // Regex for refactor task.
      dev: {
        root:   './_site/public',
        style:  './_site/public/css',
        images: './_site/public/images',
        script: './_site/public/js',
        font:   './_site/public/fonts'
      },
      prod: {
        root:   'www',
        style:  'www/css',
        images: 'www/images',
        script: 'www/js',
        font:   'www/fonts'
      }
    }
  };

  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);
  
  grunt.initConfig(configs);

  grunt.registerTask('server', [
    'harp:server'
  ]);
  grunt.registerTask('static', [
    'harp:staticserver'
  ]);
  grunt.registerTask('compile', [
    'uglify'
  ]);
  grunt.registerTask('gh-pages', [
    'uglify',
    'copy:ghpages'
  ]);
};
