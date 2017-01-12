'use strict';

module.exports = {
  promo: {
    options: {
      replacements: '<%= config.replacements.less %>'
    },
    files: [
      {
        expand: true,
        cwd: '<%= config.dev.style %>/vendor',
        src: ['bootstrap.less'],
        dest: '<%= config.dev.style %>/vendor',
        ext: '.less'
      }
    ]
  }
};  