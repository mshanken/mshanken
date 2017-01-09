'use strict';

module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: 'www/',
      src: '{,*/}*.{png,jpg,jpeg}',
      dest: 'web/'
    }]
  }
};
