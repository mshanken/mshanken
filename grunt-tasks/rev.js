'use strict';

module.exports = {
  rev: {
    dist: {
      files: {
        src: [
          'www/js/build.min.js',
          'www/css/build.min.css',
          'www/css/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
          'www/css/fonts/{,*/}*.*'
        ]
      }
    }
  }
};
