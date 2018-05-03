(function () {
  "use strict";

  // initialization of scroll animation
  $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');
  // initialization of popups
  $.HSCore.components.HSPopup.init('.js-fancybox');
  
})($);

  
$(window).on('load', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#js-header'));
  $.HSCore.helpers.HSHamburgers.init('.hamburger');
  // initialization of popups
  $.HSCore.components.HSPopup.init('.js-fancybox');
  $('.loading').fadeOut().remove();
});
