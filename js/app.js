
(function ($) {
  "use strict";

  // initialization of scroll animation
  $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');
  
})(jQuery);

 $ = jQuery; 
$(window).on('load', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#js-header'));
  $.HSCore.helpers.HSHamburgers.init('.hamburger');
  // initialization of popups
  // don't have popups in this template, but you can change it if you need
  // $.HSCore.components.HSPopup.init('.js-fancybox');
  $('.loading').fadeOut().remove();
});
