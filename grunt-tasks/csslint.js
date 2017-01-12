'use strict';

module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  src: ['<%= config.prod.style %>/*.css', '<%= config.prod.style %>/*.scss']
}