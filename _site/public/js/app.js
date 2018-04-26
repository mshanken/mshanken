(function () {
  "use strict";

  console.log("loaded...");
  $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');
  $(document).on('ready', function () {
    // initialization of scroll animation
    
  });
})($);


  
$(window).on('load', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#js-header'));
  $.HSCore.helpers.HSHamburgers.init('.hamburger');
  $.HSCore.components.HSHeaderSide.init($('#sideNav'));
});
  