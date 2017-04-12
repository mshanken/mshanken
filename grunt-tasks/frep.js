'use strict';

module.exports = {
  promo: {
    options: {
      replacements: '<%= config.replacements.scss %>'
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.dev.style %>/_vendor',
        src: ['bootstrap.scss'],
        dest: '<%= config.dev.style %>/_vendor',
        ext: '.scss'
      }
    ]
  }
};  