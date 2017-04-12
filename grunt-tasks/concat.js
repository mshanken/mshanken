'use strict';

module.exports = {
  js: {
    src: [
      '<%= config.prod.script %>/vendor/jquery*.js',
      '<%= config.prod.script %>/vendor/tether.js',
      '<%= config.prod.script %>/vendor/*.js',
      '<%= config.prod.script %>/app.js',
      '!<%= config.prod.script %>/vendor/modernizr.js',
      '!<%= config.prod.script %>/vendor/html5shiv.js',
      '!<%= config.prod.script %>/vendor/respond.src.js'
    ],
    dest: '<%= config.prod.script %>/build.js'
  }/*,
  css: {
    src: [
      '<%= config.prod.style %>/theme.css'
    ],
    dest: '<%= config.prod.style %>/build.min.css'
  }*/
} ;