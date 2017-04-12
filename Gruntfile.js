'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var options = {
    config : {
      src: 'grunt-tasks/*.js',
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

  // load all grunt tasks
  // require('load-grunt-tasks')(grunt,{pattern: ['grunt-*', 'assemble']},{scope: 'devDependencies'});
  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);
  
  grunt.initConfig(configs);

  // grunt.registerTask('build', ['concat','uglify','less']);
  // grunt.registerTask('default', ['bower', 'jquery']);
  grunt.registerTask('server', [
    'harp:server'
  ]);
  grunt.registerTask('static', [
    'harp:staticserver'
  ]);
  grunt.registerTask('compile', [
    // 'harp:dist',
    // 'concat',
    'uglify'
  ]);
  grunt.registerTask('gh-pages', [
    // 'harp:dist',
    // 'concat',
    'uglify',
    'htmlmin',
    // 'cssmin',
    'copy:ghpages'
  ]);
  grunt.registerTask('start', [
    'bower',
    'frep',
  ]);
  grunt.registerTask('lint', [
    'jscs',
    'jshint',
    'csslint'
  ]);
  grunt.registerTask('min', [
    'useminPrepare',
    // 'imagemin',
    'htmlmin',
    'cssmin',
    'concat',
    'uglify',
    'rev',
    'usemin'
  ]);
};
