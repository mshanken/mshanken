'use strict';

module.exports = {
  web: {
    expand: true,
    cwd: '<%= config.prod.root %>',
    src: '**/*.*',
    dest: 'web/'
  },
  ghpages: {
    expand: true,
    cwd: '<%= config.prod.root %>',
    src: '**/*.*',
    dest: './'
  }
};
// http://fettblog.eu/blog/2014/05/27/undocumented-features-rename/