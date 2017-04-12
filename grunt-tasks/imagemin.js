'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '_site/public',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: 'web/'
    }]
  }
};
