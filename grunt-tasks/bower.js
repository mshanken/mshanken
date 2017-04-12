'use strict';

module.exports = {
  dev: {
    dest        : '<%= config.dev.root %>',
    images_dest : '<%= config.dev.images %>',
    fonts_dest  : '<%= config.dev.font %>',
    js_dest     : '<%= config.dev.script %>/vendor',
    css_dest    : '<%= config.dev.style %>/_vendor',
    less_dest   : '<%= config.dev.style %>/_vendor',
    scss_dest   : '<%= config.dev.style %>/_vendor',
    options: {
      keepExpandedHierarchy: false,
      ignorePackages: ['jquery','modernizr']
    }
  }
};
