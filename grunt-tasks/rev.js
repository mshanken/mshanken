'use strict';

module.exports = {
  rev: {
    dist: {
      files: {
        src: [
          'web/js/build.min.js',
          'web/css/build.min.css',
          'web/css/img/{,*/}*.{png,jpg,jpeg,gif,webp}',
          'web/css/fonts/{,*/}*.*'
        ]
      }
    }
  }
};
