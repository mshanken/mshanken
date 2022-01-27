(function () {
  "use strict";

  // initialization of scroll animation
  $.HSCore.components.HSOnScrollAnimation.init('[data-animation]');
  
})($);

  
$(window).on('load', function () {
  // initialization of header
  $.HSCore.components.HSHeader.init($('#js-header'));
  $.HSCore.helpers.HSHamburgers.init('.hamburger');
  // initialization of popups
  $.HSCore.components.HSPopup.init('.js-fancybox');
  $('.loading').fadeOut().remove();
});

/**
 * HSCore -
 *
 * @author HtmlStream
 * @version 1.0
 */
;
(function ($) {

  'use strict';

  $.HSCore = {

    /**
     *
     *
     * @param
     *
     * @return
     */
    init: function () {

      $(document).ready(function (e) {
        // Botostrap Tootltips
        $('[data-toggle="tooltip"]').tooltip();

        // Set Background Image Dynamically
        if ($('[data-bg-img-src]').length) $.HSCore.helpers.bgImage($('[data-bg-img-src]'));

        // Extends jQuery
        $.HSCore.helpers.extendjQuery();

        // Detect Internet Explorer (IE)
        $.HSCore.helpers.detectIE();

        // Bootstrap Navigation Options
        $.HSCore.helpers.bootstrapNavOptions.init();

      });

      $(window).on('load', function (e) {

      });

    },

    /**
     *
     *
     * @var
     */
    components: {},

    /**
     *
     *
     * @var
     */
    helpers: {

        Math: {

          getRandomValueFromRange: function(startPoint, endPoint, fixed) {

            var fixedInner = fixed ? fixed : false;

            Math.random();

            return fixedInner ? (Math.random() * (endPoint - startPoint) + startPoint) : (Math.floor(Math.random() * (endPoint - startPoint + 1)) + startPoint);

          }

      },

      /**
       * Sets background-image dynamically.
       *
       * @param jQuery collection
       *
       * @return jQuery|undefined
       */
      bgImage: function (collection) {

        if (!collection || !collection.length) return;

        return collection.each(function (i, el) {

          var $el = $(el),
            bgImageSrc = $el.data('bg-img-src');

          if (bgImageSrc) $el.css('background-image', 'url(' + bgImageSrc + ')');

        });

      },

      /**
       * Extends basic jQuery functionality
       *
       * @return undefined
       */
      extendjQuery: function () {

        $.fn.extend({

          /**
           * Runs specified function after loading of all images.
           *
           * @return Deferred
           */
          imagesLoaded: function () {

            var $imgs = this.find('img[src!=""]');

            if (!$imgs.length) {
              return $.Deferred().resolve().promise();
            }

            var dfds = [];

            $imgs.each(function () {
              var dfd = $.Deferred();
              dfds.push(dfd);
              var img = new Image();
              img.onload = function () {
                dfd.resolve();
              };
              img.onerror = function () {
                dfd.resolve();
              };
              img.src = this.src;
            });

            return $.when.apply($, dfds);

          }

        });

      },


      /**
       * Detect Internet Explorer (IE)
       *
       * @return version of IE or false, if browser is not Internet Explorer
       */

      detectIE: function() {

          var ua = window.navigator.userAgent;

          var trident = ua.indexOf('Trident/');
          if (trident > 0) {
              // IE 11 => return version number
              var rv = ua.indexOf('rv:');
              var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
              document.querySelector('body').className += ' IE';
          }

          var edge = ua.indexOf('Edge/');
          if (edge > 0) {
             // IE 12 (aka Edge) => return version number
             var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
              document.querySelector('body').className += ' IE';
          }

          // other browser
          return false;

      },


      /**
       * Bootstrap navigation options
       *
       */
      bootstrapNavOptions: {
        init: function () {
          this.mobileHideOnScroll();
        },

        mobileHideOnScroll: function () {
          var $collection = $('.navbar');
          if (!$collection.length) return;

          var $w = $(window),
            breakpointsMap = {
              'sm': 576,
              'md': 768,
              'lg': 992,
              'xl': 1200
            };

          $('body').on('click.HSMobileHideOnScroll', '.navbar-toggler', function (e) {
            var $navbar = $(this).closest('.navbar');

            if ($navbar.length) {
              $navbar.data('mobile-menu-scroll-position', $w.scrollTop());
            }
            e.preventDefault();
          });

          $w.on('scroll.HSMobileHideOnScroll', function (e) {
            $collection.each(function (i, el) {
              var $this = $(el), $toggler, $nav, offset, $hamburgers, breakpoint;
              if ($this.hasClass('navbar-expand-xl')) breakpoint = breakpointsMap['xl'];
              else if ($this.hasClass('navbar-expand-lg')) breakpoint = breakpointsMap['lg'];
              else if ($this.hasClass('navbar-expand-md')) breakpoint = breakpointsMap['md'];
              else if ($this.hasClass('navbar-expand-xs')) breakpoint = breakpointsMap['xs'];

              if ($w.width() > breakpoint) return;

              $toggler = $this.find('.navbar-toggler');
              $nav = $this.find('.navbar-collapse');

              if (!$nav.data('mobile-scroll-hide')) return;

              if ($nav.length) {
                offset = $this.data('mobile-menu-scroll-position');

                if (Math.abs($w.scrollTop() - offset) > 40 && $nav.hasClass('show')) {
                  $toggler.trigger('click');
                  $hamburgers = $toggler.find('.is-active');
                  if ($hamburgers.length) {
                    $hamburgers.removeClass('is-active');
                  }
                }
              }
            });
          });
        }
      }

    },

    /**
     *
     *
     * @var
     */
    settings: {
      rtl: false
    }

  };

  $.HSCore.init();

})(jQuery);
/**
 * Hamburgers plugin helper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires hamburgers.min.css
 *
 */
;(function($){
	'use strict';

	$.HSCore.helpers.HSHamburgers = {

		/**
		 * Initialize 'hamburgers' plugin.
		 * 
		 * @param String selector
		 *
		 * @return undefined;
		 */
		init: function(selector) {

			if( !selector || !$(selector).length ) return;

		  var hamburgers = $(selector),
		  		timeoutid;

		  hamburgers.each(function(i, el){

		  	var $this = $(this);

		  	if($this.closest('button').length) {
		  		$this.closest('button').get(0).addEventListener('click', function(e){

		  			var $self = $(this),
		  					$hamburger = $self.find(selector);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$hamburger.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}
		  	else {
		  		$this.get(0).addEventListener('click', function(e){

		  			var $self = $(this);

		  			if(timeoutid) clearTimeout(timeoutid);
		  			timeoutid = setTimeout(function(){

		  				$self.toggleClass('is-active');

		  			}, 10);
		  			e.preventDefault();
		  		}, false);
		  	}

		  });

		}
		

	};

})(jQuery);
/**
 * HSHeaderSide Component.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires HSScrollBar component (hs.scrollbar.js v1.0.0), jQuery(v2.0.0)
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSHeaderSide = {

    /**
     * Base configuration.
     *
     * @private
     */
    _baseConfig: {
      headerBreakpoint: null,
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      },
      afterOpen: function(){},
      afterClose: function(){}
    },

    /**
     * Contains collection of all initialized items on the page.
     * 
     * @private
     */
    _pageCollection: $(),

    /**
     * Initializtion of the component.
     * 
     * @param {jQuery} collection
     * @param {Object} config
     *
     * @public
     * @returns {jQuery}
     */
    init: function(collection, config) {

      var _self = this;

      if(!collection || !collection.length) return $();

      this.$w = $(window);

      config = config && $.isPlainObject(config) ? config : {};

      this._bindGlobalEvents();

      return collection.each(function(i, el){

        var $this = $(el),
            itemConfig = $.extend(true, {}, _self._baseConfig, config, $this.data());

        if( $this.data('HSHeaderSide') ) return;

        $this.data('HSHeaderSide', _self._factoryMethod( $this, itemConfig ) );

        _self._pageCollection = _self._pageCollection.add($this);

      });

    },

    /**
     * Binds necessary global events.
     * 
     * @private 
     */
    _bindGlobalEvents: function() {

      var _self = this;

      this.$w.on('resize.HSHeaderSide', function(e){

        if(_self.resizeTimeoutId) clearTimeout(_self.resizeTimeoutId);

        _self.resizeTimeoutId = setTimeout(function(){

          _self._pageCollection.each(function(i, el){

            var HSHeaderSide = $(el).data('HSHeaderSide');

            if(!HSHeaderSide.config.headerBreakpoint) return;

            if(_self.$w.width() < HSHeaderSide.config.breakpointsMap[HSHeaderSide.config.headerBreakpoint] && HSHeaderSide.isInit()) {
              HSHeaderSide.destroy();
            }
            else if(_self.$w.width() >= HSHeaderSide.config.breakpointsMap[HSHeaderSide.config.headerBreakpoint] && !HSHeaderSide.isInit()) {
              HSHeaderSide.init();
            }

          });

        }, 10);

      });

      $(document).on('keyup.HSHeaderSide', function(e){

        if(e.keyCode && e.keyCode === 27) {

          _self._pageCollection.each(function(i,el){

            var HSHeaderSide = $(el).data('HSHeaderSide'),
                hamburgers = HSHeaderSide.invoker;

            if(!HSHeaderSide) return;
            if(hamburgers.length && hamburgers.find('.is-active').length) hamburgers.find('.is-active').removeClass('is-active');
            HSHeaderSide.hide();

          });

        }

      });

    },

    /**
     * Returns an object which would be describe the Header behavior.
     * 
     * @private 
     * @returns {HSHeaderSide*} 
     */
    _factoryMethod: function(element, config) {

      // static
      if( !config.headerBehavior ) {
        return new (config['headerPosition'] == "left" ? HSHeaderSideStaticLeft : HSHeaderSideStaticRight)(element, config);
      }
      
      // overlay
      if( config.headerBehavior && config.headerBehavior == 'overlay' ) {
        return new (config['headerPosition'] == "left" ? HSHeaderSideOverlayLeft : HSHeaderSideOverlayRight)(element, config); 
      }

      // push
      if( config.headerBehavior && config.headerBehavior == 'push' ) {
        return new (config['headerPosition'] == "left" ? HSHeaderSidePushLeft : HSHeaderSidePushRight)(element, config); 
      }

    }

  }

  /**
   * Provides an abstract interface for the side header.
   * 
   * @param {jQuery} element
   * @param {Object} config
   * 
   */
  function _HSHeaderSideAbstract(element, config) {

    /**
     * Contains link to the current element.
     * 
     * @public
     */
    this.element = element;

    /**
     * Contains configuration object.
     * 
     * @public
     */
    this.config = config;


    /**
     * Contains link to the window object.
     * 
     * @public
     */
    this.$w = $(window);

    /**
     * Contains name of methods which should be implemented in derived class. 
     * Each of these methods except 'isInit' must return link to the current object.
     * 
     * @private
     */
    this._abstractMethods = ['init', 'destroy', 'show', 'hide', 'isInit'];


    /**
     * Runs initialization of the object.
     * 
     * @private 
     */
    this._build = function() {

      if( !this.config.headerBreakpoint ) return this.init();

      if( this.config.breakpointsMap[ this.config.headerBreakpoint ] <= this.$w.width() ) {
        return this.init();
      }
      else {
        return this.destroy();
      }
    };


    /**
     * Checks whether derived class implements necessary abstract events.
     * 
     * @private 
     */
    this._isCorrectDerrivedClass = function() {

      var _self = this;

      this._abstractMethods.forEach(function(method){

        if(!(method in _self) || !$.isFunction(_self[method])) {

          throw new Error("HSHeaderSide: Derived class must implement " + method + " method.");

        }

      });

      this._build();

    };

    setTimeout(this._isCorrectDerrivedClass.bind(this), 10);

  };

  /**
   * HSHeaderSide constructor function.
   * 
   * @extends _HSHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSHeaderSideStaticLeft( element, config ) {

    _HSHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.u-header__sections-container');
      }
    });

    this.body = $('body');

  };


  /**
   * Initialization of the HSHeaderSideStaticLeft instance.
   * 
   * @public
   * @returns {HSHeaderSideStaticLeft}
   */
  HSHeaderSideStaticLeft.prototype.init = function() {

    this.body.addClass('u-body--header-side-static-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    return this;

  };

  /**
   * Destroys the HSHeaderSideStaticLeft instance.
   * 
   * @public
   * @returns {HSHeaderSideStaticLeft}
   */
  HSHeaderSideStaticLeft.prototype.destroy = function() {

    this.body.removeClass('u-body--header-side-static-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   * 
   * @public
   * @returns {Boolean}
   */
  HSHeaderSideStaticLeft.prototype.isInit = function() {

    return this.body.hasClass('u-body--header-side-static-left');

  };

  /**
   * Shows the Header.
   * 
   * @public
   * @returns {HSHeaderSideStaticLeft}
   */
  HSHeaderSideStaticLeft.prototype.show = function() {
    return this;
  };

  /**
   * Hides the Header.
   * 
   * @public
   * @returns {HSHeaderSideStaticLeft}
   */
  HSHeaderSideStaticLeft.prototype.hide = function() {
    return this;
  };

  /**
   * HSHeaderSide constructor function.
   * 
   * @extends _HSHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSHeaderSideStaticRight( element, config ) {

    _HSHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.u-header__sections-container');
      }
    });

    this.body = $('body');

  };


  /**
   * Initialization of the HSHeaderSideStaticRight instance.
   * 
   * @public
   * @returns {HSHeaderSideStaticRight}
   */
  HSHeaderSideStaticRight.prototype.init = function() {

    this.body.addClass('u-body--header-side-static-right');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    return this;

  };

  /**
   * Destroys the HSHeaderSideStaticRight instance.
   * 
   * @public
   * @returns {HSHeaderSideStaticRight}
   */
  HSHeaderSideStaticRight.prototype.destroy = function() {

    this.body.removeClass('u-body--header-side-static-right');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   * 
   * @public
   * @returns {Boolean}
   */
  HSHeaderSideStaticRight.prototype.isInit = function() {

    return this.body.hasClass('u-body--header-side-static-right');

  };

  /**
   * Shows the Header.
   * 
   * @public
   * @returns {HSHeaderSideStaticRight}
   */
  HSHeaderSideStaticRight.prototype.show = function() {
    return this;
  };

  /**
   * Hides the Header.
   * 
   * @public
   * @returns {HSHeaderSideStaticRight}
   */
  HSHeaderSideStaticRight.prototype.hide = function() {
    return this;
  };

  /**
   * HSHeaderSide constructor function.
   * 
   * @extends _HSHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSHeaderSideOverlayLeft( element, config ) {

    _HSHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.u-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('u-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the HSHeaderSideOverlayLeft instance.
   * 
   * @public
   * @returns {HSHeaderSideOverlayLeft}
   */
  HSHeaderSideOverlayLeft.prototype.init = function() {

    var _self = this;

    this.body.addClass('u-body--header-side-overlay-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.HSHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'u-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.HSHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);

    return this;

  };

  /**
   * Destroys the HSHeaderSideOverlayLeft instance.
   * 
   * @public
   * @returns {HSHeaderSideOverlayLeft}
   */
  HSHeaderSideOverlayLeft.prototype.destroy = function() {

    this.body.removeClass('u-body--header-side-overlay-left');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    if(this.invoker.length) {
      this.invoker.off('click.HSHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.HSHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   * 
   * @public
   * @returns {Boolean}
   */
  HSHeaderSideOverlayLeft.prototype.isInit = function() {

    return this.body.hasClass('u-body--header-side-overlay-left');

  };

  /**
   * Shows the Header.
   * 
   * @public
   * @returns {HSHeaderSideOverlayLeft}
   */
  HSHeaderSideOverlayLeft.prototype.show = function() {

    this.body.addClass('u-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   * 
   * @public
   * @returns {HSHeaderSideOverlayLeft}
   */
  HSHeaderSideOverlayLeft.prototype.hide = function() {

    // var hamburgers = this.invoker.length ? this.invoker.find('.is-active') : $();
    // if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass('u-body--header-side-opened');

    return this;
  };

  /**
   * HSHeaderSide constructor function.
   * 
   * @extends _HSHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSHeaderSidePushLeft( element, config ) {

    _HSHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.u-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('u-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    Object.defineProperty(this, 'bodyClasses', {
      get: function() {
        return this.element.data('header-body-classes') ? this.element.data('header-body-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the HSHeaderSidePushLeft instance.
   * 
   * @public
   * @returns {HSHeaderSidePushLeft}
   */
  HSHeaderSidePushLeft.prototype.init = function() {

    var _self = this;

    this.body.addClass('u-body--header-side-push-left');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.HSHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'u-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.HSHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);
    this.body.addClass(this.bodyClasses);

    return this;

  };

  /**
   * Destroys the HSHeaderSidePushLeft instance.
   * 
   * @public
   * @returns {HSHeaderSidePushLeft}
   */
  HSHeaderSidePushLeft.prototype.destroy = function() {

    this.body.removeClass('u-body--header-side-push-left');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    this.body.removeClass(this.bodyClasses);
    if(this.invoker.length){
      this.invoker.off('click.HSHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.HSHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   * 
   * @public
   * @returns {Boolean}
   */
  HSHeaderSidePushLeft.prototype.isInit = function() {

    return this.body.hasClass('u-body--header-side-push-left');

  };

  /**
   * Shows the Header.
   * 
   * @public
   * @returns {HSHeaderSidePushLeft}
   */
  HSHeaderSidePushLeft.prototype.show = function() {

    this.body.addClass('u-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   * 
   * @public
   * @returns {HSHeaderSidePushLeft}
   */
  HSHeaderSidePushLeft.prototype.hide = function() {

    this.body.removeClass('u-body--header-side-opened');

    return this;
  };

  /**
   * HSHeaderSide constructor function.
   * 
   * @extends _HSHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSHeaderSideOverlayRight( element, config ) {

    _HSHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.u-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('u-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the HSHeaderSideOverlayRight instance.
   * 
   * @public
   * @returns {HSHeaderSideOverlayRight}
   */
  HSHeaderSideOverlayRight.prototype.init = function() {

    var _self = this;

    this.body.addClass('u-body--header-side-overlay-right');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.HSHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'u-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.HSHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);

    return this;

  };

  /**
   * Destroys the HSHeaderSideOverlayRight instance.
   * 
   * @public
   * @returns {HSHeaderSideOverlayRight}
   */
  HSHeaderSideOverlayRight.prototype.destroy = function() {

    this.body.removeClass('u-body--header-side-overlay-right');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    if(this.invoker.length) {
      this.invoker.off('click.HSHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.HSHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   * 
   * @public
   * @returns {Boolean}
   */
  HSHeaderSideOverlayRight.prototype.isInit = function() {

    return this.body.hasClass('u-body--header-side-overlay-right');

  };

  /**
   * Shows the Header.
   * 
   * @public
   * @returns {HSHeaderSideOverlayRight}
   */
  HSHeaderSideOverlayRight.prototype.show = function() {

    this.body.addClass('u-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   * 
   * @public
   * @returns {HSHeaderSideOverlayRight}
   */
  HSHeaderSideOverlayRight.prototype.hide = function() {

    // var hamburgers = this.invoker.length ? this.invoker.find('.is-active') : $();
    // if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass('u-body--header-side-opened');

    return this;
  };

  /**
   * HSHeaderSide constructor function.
   * 
   * @extends _HSHeaderSideAbstract
   *
   * @param {jQuery} element
   * @param {Object} config
   *
   * @constructor
   */
  function HSHeaderSidePushRight( element, config ) {

    _HSHeaderSideAbstract.call(this, element, config);

    Object.defineProperty(this, 'scrollContainer', {
      get: function() {
        return this.element.find('.u-header__sections-container');
      }
    });

    Object.defineProperty(this, 'isShown', {
      get: function() {
        return this.body.hasClass('u-body--header-side-opened');
      }
    });

    Object.defineProperty(this, 'overlayClasses', {
      get: function() {
        return this.element.data('header-overlay-classes') ? this.element.data('header-overlay-classes') : '';
      }
    });

    Object.defineProperty(this, 'headerClasses', {
      get: function() {
        return this.element.data('header-classes') ? this.element.data('header-classes') : '';
      }
    });

    Object.defineProperty(this, 'bodyClasses', {
      get: function() {
        return this.element.data('header-body-classes') ? this.element.data('header-body-classes') : '';
      }
    });

    this.body = $('body');
    this.invoker = $('[data-target="#'+this.element.attr('id')+'"]');

  };


  /**
   * Initialization of the HSHeaderSidePushRight instance.
   * 
   * @public
   * @returns {HSHeaderSidePushRight}
   */
  HSHeaderSidePushRight.prototype.init = function() {

    var _self = this;

    this.body.addClass('u-body--header-side-push-right');

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.init( this.scrollContainer );
    }

    if(this.invoker.length) {
      this.invoker.on('click.HSHeaderSide', function(e){

        if(_self.isShown) {
          _self.hide();
        }
        else {
          _self.show();
        }

        e.preventDefault();
      }).css('display', 'block');
    }

    if(!this.overlay) {

      this.overlay = $('<div></div>', {
        class: 'u-header__overlay ' + _self.overlayClasses
      });

    }

    this.overlay.on('click.HSHeaderSide', function(e){
      var hamburgers = _self.invoker.length ? _self.invoker.find('.is-active') : $();
      if(hamburgers.length) hamburgers.removeClass('is-active');
      _self.hide();
    });

    this.element.addClass(this.headerClasses).append(this.overlay);
    this.body.addClass(this.bodyClasses);

    return this;

  };

  /**
   * Destroys the HSHeaderSidePushRight instance.
   * 
   * @public
   * @returns {HSHeaderSidePushRight}
   */
  HSHeaderSidePushRight.prototype.destroy = function() {

    this.body.removeClass('u-body--header-side-push-right');
    this.hide();

    if( $.HSCore.components.HSScrollBar && this.scrollContainer.length ) {
      $.HSCore.components.HSScrollBar.destroy( this.scrollContainer );
    }

    this.element.removeClass(this.headerClasses);
    this.body.removeClass(this.bodyClasses);
    if(this.invoker.length){
      this.invoker.off('click.HSHeaderSide').css('display', 'none');
    }
    if(this.overlay) {
      this.overlay.off('click.HSHeaderSide');
      this.overlay.remove();
      this.overlay = null;
    }

    return this;

  };

  /**
   * Checks whether instance has been initialized.
   * 
   * @public
   * @returns {Boolean}
   */
  HSHeaderSidePushRight.prototype.isInit = function() {

    return this.body.hasClass('u-body--header-side-push-right');

  };

  /**
   * Shows the Header.
   * 
   * @public
   * @returns {HSHeaderSidePushRight}
   */
  HSHeaderSidePushRight.prototype.show = function() {

    this.body.addClass('u-body--header-side-opened');

    return this;
  };

  /**
   * Hides the Header.
   * 
   * @public
   * @returns {HSHeaderSidePushRight}
   */
  HSHeaderSidePushRight.prototype.hide = function() {

    // var hamburgers = this.invoker.length ? this.invoker.find('.is-active') : $();
    // if(hamburgers.length) hamburgers.removeClass('is-active');

    this.body.removeClass('u-body--header-side-opened');

    return this;
  };

})(jQuery);
/**
 * Header Component.
 *
 * @author Htmlstream
 * @version 1.0
 *
 */
;(function ($) {
  'use strict';

  $.HSCore.components.HSHeader = {

    /**
     * Base configuration.
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      headerFixMoment: 0,
      headerFixEffect: 'slide',
      breakpointsMap: {
        'md': 768,
        'sm': 576,
        'lg': 992,
        'xl': 1200
      }
    },

    /**
     * Initializtion of header.
     *
     * @param jQuery element
     *
     * @return jQuery
     */
    init: function( element ) {

      if( !element || element.length !== 1 || element.data('HSHeader')) return;

      var self = this;

      this.element = element;
      this.config = $.extend(true, {}, this._baseConfig, element.data());

      this.observers = this._detectObservers();
      this.fixMediaDifference( this.element );
      this.element.data('HSHeader', new HSHeader(this.element, this.config, this.observers ) );

      $(window)
        .on('scroll.uHeader', function(e){

          element
            .data('HSHeader')
            .notify();

        })
        .on('resize.uHeader', function(e){

          if( self.resizeTimeOutId ) clearTimeout( self.resizeTimeOutId );

          self.resizeTimeOutId = setTimeout( function(){

            element
              .data('HSHeader')
              .checkViewport()
              .update();

          }, 100 );

        })
        .trigger('scroll.uHeader');

      return this.element;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    _detectObservers: function() {

      if(!this.element || !this.element.length) return;

      var observers = {
        'xs': [],
        'sm': [],
        'md': [],
        'lg': [],
        'xl': []
      };

      /* ------------------------ xs -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element') ) {
          observers['xs'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top') ) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section') ) {

            observers['xs'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating') ) {

          observers['xs'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable') ) {
          observers['xs'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom') ) {

          if(this.element.hasClass('u-header--change-appearance')) {
            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top') || this.element.hasClass('u-header--static')) {

          if( this.element.hasClass('u-header--show-hide') ) {

            observers['xs'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom') || this.element.hasClass('u-header--abs-top-2nd-screen') ) {

          observers['xs'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance') ) {

            observers['xs'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo') ) {

            observers['xs'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ sm -------------------------*/

        // Sticky top

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--sm') ) {
          observers['sm'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        if( this.element.hasClass('u-header--sticky-top--sm') ) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--sm') ) {

            observers['sm'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--sm') ) {

          observers['sm'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--sm') ) {
          observers['sm'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--sm') ) {

          if(this.element.hasClass('u-header--change-appearance--sm')) {
            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--sm') || this.element.hasClass('u-header--static--sm')) {

          if( this.element.hasClass('u-header--show-hide--sm') ) {

            observers['sm'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--sm') || this.element.hasClass('u-header--abs-top-2nd-screen--sm') ) {

          observers['sm'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--sm') ) {

            observers['sm'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ md -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--md') ) {
          observers['md'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--md') ) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--md') ) {

            observers['md'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--md') ) {

          observers['md'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--md') ) {
          observers['md'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--md') ) {

          if(this.element.hasClass('u-header--change-appearance--md')) {
            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--md') || this.element.hasClass('u-header--static--md')) {

          if( this.element.hasClass('u-header--show-hide--md') ) {

            observers['md'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--md') || this.element.hasClass('u-header--abs-top-2nd-screen--md') ) {

          observers['md'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--md') ) {

            observers['md'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--md') ) {

            observers['md'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      /* ------------------------ lg -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--lg') ) {
          observers['lg'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--lg') ) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--lg') ) {

            observers['lg'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--lg') ) {

          observers['lg'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        if( this.element.hasClass('u-header--invulnerable--lg') ) {
          observers['lg'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--lg') ) {

          if(this.element.hasClass('u-header--change-appearance--lg')) {
            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--lg') || this.element.hasClass('u-header--static--lg')) {

          if( this.element.hasClass('u-header--show-hide--lg') ) {

            observers['lg'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--lg') || this.element.hasClass('u-header--abs-top-2nd-screen--lg') ) {

          observers['lg'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--lg') ) {

            observers['lg'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }

      /* ------------------------ xl -------------------------*/

        // Has Hidden Element
        if( this.element.hasClass('u-header--has-hidden-element--xl') ) {
          observers['xl'].push(
            new HSHeaderHasHiddenElement( this.element )
          );
        }

        // Sticky top

        if( this.element.hasClass('u-header--sticky-top--xl') ) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderMomentShowHideObserver( this.element )
            );

          }
          else if( this.element.hasClass('u-header--toggle-section--xl') ) {

            observers['xl'].push(
              new HSHeaderHideSectionObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Floating

        if( this.element.hasClass('u-header--floating--xl') ) {

          observers['xl'].push(
            new HSHeaderFloatingObserver( this.element )
          );

        }

        // Sticky bottom

        if( this.element.hasClass('u-header--invulnerable--xl') ) {
          observers['xl'].push(
            new HSHeaderWithoutBehaviorObserver( this.element )
          );
        }

        // Sticky bottom

        if( this.element.hasClass('u-header--sticky-bottom--xl') ) {

          if(this.element.hasClass('u-header--change-appearance--xl')) {
            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );
          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

        }

        // Abs top & Static

        if( this.element.hasClass('u-header--abs-top--xl') || this.element.hasClass('u-header--static--xl')) {

          if( this.element.hasClass('u-header--show-hide--xl') ) {

            observers['xl'].push(
              new HSHeaderShowHideObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element )
            );

          }

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element )
            );

          }

        }

        // Abs bottom & Abs top 2nd screen

        if( this.element.hasClass('u-header--abs-bottom--xl') || this.element.hasClass('u-header--abs-top-2nd-screen--xl') ) {

          observers['xl'].push(
            new HSHeaderStickObserver( this.element )
          );

          if( this.element.hasClass('u-header--change-appearance--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeAppearanceObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

          if( this.element.hasClass('u-header--change-logo--xl') ) {

            observers['xl'].push(
              new HSHeaderChangeLogoObserver( this.element, {
                fixPointSelf: true
              } )
            );

          }

        }


      return observers;

    },

    /**
     *
     *
     * @param
     *
     * @return
     */
    fixMediaDifference: function(element) {

      if(!element || !element.length || !element.filter('[class*="u-header--side"]').length) return;

      var toggleable;

      if(element.hasClass('u-header--side-left--xl') || element.hasClass('u-header--side-right--xl')) {

        toggleable = element.find('.navbar-expand-xl');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-xl')
            .addClass('navbar-expand-lg');
        }

      }
      else if(element.hasClass('u-header--side-left--lg') || element.hasClass('u-header--side-right--lg')) {

        toggleable = element.find('.navbar-expand-lg');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-lg')
            .addClass('navbar-expand-md');
        }

      }
      else if(element.hasClass('u-header--side-left--md') || element.hasClass('u-header--side-right--md')) {

        toggleable = element.find('.navbar-expand-md');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-md')
            .addClass('navbar-expand-sm');
        }

      }
      else if(element.hasClass('u-header--side-left--sm') || element.hasClass('u-header--side-right--sm')) {

        toggleable = element.find('.navbar-expand-sm');

        if(toggleable.length) {
          toggleable
            .removeClass('navbar-expand-sm')
            .addClass('navbar-expand');
        }

      }

    }

  }

  /**
   * HSHeader constructor function.
   *
   * @param jQuery element
   * @param Object config
   * @param Object observers
   *
   * @return undefined
   */
  function HSHeader( element, config, observers ) {

    if( !element || !element.length ) return;

    this.element = element;
    this.config = config;

    this.observers = observers && $.isPlainObject( observers ) ? observers : {};

    this.viewport = 'xs';
    this.checkViewport();

  }

  /**
   *
   *
   * @return Object
   */
  HSHeader.prototype.checkViewport = function() {

    var $w = $(window);

    if( $w.width() > this.config.breakpointsMap['sm'] && this.observers['sm'].length ){
      this.prevViewport = this.viewport;
      this.viewport = 'sm';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['md'] && this.observers['md'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'md';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['lg'] && this.observers['lg'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'lg';
      return this;
    }

    if( $w.width() > this.config.breakpointsMap['xl'] && this.observers['xl'].length ) {
      this.prevViewport = this.viewport;
      this.viewport = 'xl';
      return this;
    }


    if(this.prevViewport) this.prevViewport = this.viewport;
    this.viewport = 'xs';


    return this;

  }

  /**
   * Notifies all observers.
   *
   * @return Object
   */
  HSHeader.prototype.notify = function(){

    if( this.prevViewport ) {
      this.observers[this.prevViewport].forEach(function(observer){
        observer.destroy();
      });
      this.prevViewport = null;
    }

    this.observers[this.viewport].forEach(function(observer){
      observer.check();
    });

    return this;

  }

  /**
   * Reinit all header's observers.
   *
   * @return Object
   */
  HSHeader.prototype.update = function() {

    // if( this.prevViewport ) {
    //   this.observers[this.prevViewport].forEach(function(observer){
    //     observer.destroy();
    //   });
    //   this.prevViewport = null;
    // }

    for(var viewport in this.observers) {

      this.observers[viewport].forEach(function(observer){
        observer.destroy();
      });

    }

    this.prevViewport = null;

    this.observers[this.viewport].forEach(function(observer){
      observer.reinit();
    });

    return this;

  }

  /**
   * Abstract constructor function for each observer.
   *
   * @param jQuery element
   *
   * @return Boolean|undefined
   */
  function HSAbstractObserver(element) {
    if( !element || !element.length ) return;

    this.element = element;
    this.defaultState = true;

    this.reinit = function() {

      this
        .destroy()
        .init()
        .check();
    }

    return true;
  }

  /**
   * Header's observer which is responsible for 'sticky' behavior.
   *
   * @param jQuery element
   */
  function HSHeaderStickObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.init = function() {
    this.defaultState = true;
    this.offset = this.element.offset().top;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if(docScrolled < this.offset && !this.defaultState){
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.changeState = function() {

    this.element.addClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderStickObserver.prototype.toDefaultState = function() {

    this.element.removeClass('js-header-fix-moment');
    this.defaultState = !this.defaultState;

    return this;

  }


  /**
   * Header's observer which is responsible for 'show/hide' behavior which is depended on scroll direction.
   *
   * @param jQuery element
   */
  function HSHeaderMomentShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.init = function() {
    this.direction = 'down';
    this.delta = 0;
    this.defaultState = true;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') != 0 ? this.element.data('header-fix-moment') : 5;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.checkDirection = function() {

    if( $(window).scrollTop() > this.delta ) {
      this.direction = 'down';
    }
    else {
      this.direction = 'up';
    }

    this.delta = $(window).scrollTop();

    return this;

  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.toDefaultState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.changeState = function() {

    switch( this.effect ) {
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @return Object
   */
  HSHeaderMomentShowHideObserver.prototype.check = function() {

    var docScrolled = $(window).scrollTop();
    this.checkDirection();


    if( docScrolled >= this.offset && this.defaultState && this.direction == 'down' ) {
      this.changeState();
    }
    else if ( !this.defaultState && this.direction == 'up') {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderShowHideObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.init = function() {
    if(!this.defaultState && $(window).scrollTop() > this.offset) return this;

    this.defaultState = true;
    this.transitionDuration = parseFloat( getComputedStyle( this.element.get(0) )['transition-duration'], 10 ) * 1000;

    this.offset = isFinite( this.element.data('header-fix-moment') ) && this.element.data('header-fix-moment') > this.element.outerHeight() ? this.element.data('header-fix-moment') : this.element.outerHeight() + 100;
    this.effect = this.element.data('header-fix-effect') ? this.element.data('header-fix-effect') : 'show-hide';

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderShowHideObserver.prototype.destroy = function() {
    if( !this.defaultState && $(window).scrollTop() > this.offset ) return this;

    this.element.removeClass('u-header--untransitioned');
    this._removeCap();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._insertCap = function() {

    this.element.addClass('js-header-fix-moment u-header--untransitioned');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', this.element.outerHeight() );

    }

    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;

      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;

      default :
        this.element.addClass('u-header--invisible')
    }

    this.capInserted = true;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype._removeCap = function() {

    var self = this;

    this.element.removeClass('js-header-fix-moment');

    if( this.element.hasClass('u-header--static') ) {

      $('html').css('padding-top', 0 );

    }

    if(this.removeCapTimeOutId) clearTimeout(this.removeCapTimeOutId);

    this.removeCapTimeOutId = setTimeout(function() {
      self.element.removeClass('u-header--moved-up u-header--faded u-header--invisible');
    }, 10);

    this.capInserted = false;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.check = function() {

    var $w = $(window);

    if( $w.scrollTop() > this.element.outerHeight() && !this.capInserted ) {
      this._insertCap();
    }
    else if($w.scrollTop() <= this.element.outerHeight() && this.capInserted) {
      this._removeCap();
    }

    if( $w.scrollTop() > this.offset && this.defaultState)  {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }



  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.changeState = function() {

    this.element.removeClass('u-header--untransitioned');

    if( this.animationTimeoutId ) clearTimeout( this.animationTimeoutId );

    switch( this.effect ) {
      case 'fade' :
        this.element.removeClass('u-header--faded');
      break;

      case 'slide' :
        this.element.removeClass('u-header--moved-up');
      break;

      default:
        this.element.removeClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderShowHideObserver.prototype.toDefaultState = function() {

    var self = this;

    this.animationTimeoutId = setTimeout(function(){
      self.element.addClass('u-header--untransitioned');
    }, this.transitionDuration );


    switch( this.effect ) {
      case 'fade' :
        this.element.addClass('u-header--faded');
      break;
      case 'slide' :
        this.element.addClass('u-header--moved-up');
      break;
      default:
        this.element.addClass('u-header--invisible');
    }

    this.defaultState = !this.defaultState;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeLogoObserver( element, config ) {

    if( !HSAbstractObserver.call( this, element ) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }
    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 0;
    }
    if(this.hasFixedClass) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.imgs = this.element.find('.u-header__logo-img');
    this.defaultState = true;

    this.mainLogo = this.imgs.filter('.u-header__logo-img--main');
    this.additionalLogo = this.imgs.not('.u-header__logo-img--main');

    if( !this.imgs.length ) return this;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.destroy = function() {
    this.toDefaultState();

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.check = function() {

    var $w = $(window);

    if( !this.imgs.length ) return this;

    if( $w.scrollTop() > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( $w.scrollTop() <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.changeState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.removeClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.addClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeLogoObserver.prototype.toDefaultState = function() {

    if(this.mainLogo.length) {
      this.mainLogo.addClass('u-header__logo-img--main');
    }
    if(this.additionalLogo.length) {
      this.additionalLogo.removeClass('u-header__logo-img--main');
    }

    this.defaultState = !this.defaultState;

    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHideSectionObserver( element ) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return Object
   */
  HSHeaderHideSectionObserver.prototype.init = function() {

    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.section = this.element.find('.u-header__section--hidden');
    this.defaultState = true;

    this.sectionHeight = this.section.length ? this.section.outerHeight() : 0;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.destroy = function() {

    if( this.section.length ) {

      this.element.css({
        'margin-top': 0
      });

    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.check = function() {

    if(!this.section.length) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.changeState = function() {

    var self = this;

    this.element.stop().animate({
      'margin-top': self.sectionHeight * -1 - 1 // last '-1' is a small fix
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHideSectionObserver.prototype.toDefaultState = function() {

    this.element.stop().animate({
      'margin-top': 0
    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderChangeAppearanceObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      fixPointSelf: false
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.init = function() {

    if(this.element.hasClass('js-header-fix-moment')) {
      this.hasFixedClass = true;
      this.element.removeClass('js-header-fix-moment');
    }

    if( this.config.fixPointSelf ) {
      this.offset = this.element.offset().top;
    }
    else {
      this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    }

    if( this.hasFixedClass ) {
      this.hasFixedClass = false;
      this.element.addClass('js-header-fix-moment');
    }

    this.sections = this.element.find('[data-header-fix-moment-classes]');

    this.defaultState = true;


    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.check = function() {

    if( !this.sections.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.changeState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.addClass( classes + ' js-header-change-moment');
      $this.removeClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderChangeAppearanceObserver.prototype.toDefaultState = function() {

    this.sections.each(function(i,el){

      var $this = $(el),
          classes = $this.data('header-fix-moment-classes'),
          exclude = $this.data('header-fix-moment-exclude');

      if( !classes && !exclude ) return;

      $this.removeClass( classes + ' js-header-change-moment' );
      $this.addClass( exclude );

    });

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderHasHiddenElement(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = {
      animated: true
    }

    if( config && $.isPlainObject(config) ) this.config = $.extend(true, {}, this.config, config);

    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.init = function() {
    this.offset = isFinite( this.element.data('header-fix-moment') ) ? this.element.data('header-fix-moment') : 5;
    this.elements = this.element.find('.u-header--hidden-element');
    this.defaultState = true;
    return this;
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.check = function() {

    if( !this.elements.length ) return this;

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.changeState = function() {

    if(this.config.animated) {
      this.elements.stop().slideUp();
    }
    else {
      this.elements.hide();
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderHasHiddenElement.prototype.toDefaultState = function() {

    if(this.config.animated) {
      this.elements.stop().slideDown();
    }
    else {
      this.elements.show();
    }

    this.defaultState = !this.defaultState;
    return this;

  }





  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderFloatingObserver(element, config) {
    if( !HSAbstractObserver.call(this, element) ) return;

    this.config = config && $.isPlainObject(config) ? $.extend(true, {}, this.config, config) : {};
    this.init();
  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.init = function() {

    this.offset = this.element.offset().top;
    this.sections = this.element.find('.u-header__section');

    this.defaultState = true;

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.destroy = function() {

    this.toDefaultState();

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.check = function() {

    var $w = $(window),
        docScrolled = $w.scrollTop();

    if( docScrolled > this.offset && this.defaultState) {
      this.changeState();
    }
    else if( docScrolled <= this.offset && !this.defaultState ) {
      this.toDefaultState();
    }

    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.changeState = function() {

    this.element
        .addClass('js-header-fix-moment')
        .addClass( this.element.data('header-fix-moment-classes') )
        .removeClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.addClass( $section.data('header-fix-moment-classes') )
                .removeClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }

  /**
   *
   *
   * @param
   *
   * @return
   */
  HSHeaderFloatingObserver.prototype.toDefaultState = function() {

    this.element
        .removeClass('js-header-fix-moment')
        .removeClass( this.element.data('header-fix-moment-classes') )
        .addClass( this.element.data('header-fix-moment-exclude') );

    if( this.sections.length ) {
      this.sections.each(function(i, el){

        var $section = $(el);

        $section.removeClass( $section.data('header-fix-moment-classes') )
                .addClass( $section.data('header-fix-moment-exclude') );

      });
    }

    this.defaultState = !this.defaultState;
    return this;

  }


  /**
   *
   *
   * @param
   *
   * @return
   */
  function HSHeaderWithoutBehaviorObserver( element ) { if( !HSAbstractObserver.call(this, element) ) return; }

  HSHeaderWithoutBehaviorObserver.prototype.check = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.init = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.destroy = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.changeState = function() {
    return this;
  }

  HSHeaderWithoutBehaviorObserver.prototype.toDefaultState = function() {
    return this;
  }


})(jQuery);
/**
 * Wrapper for creating animation when an element appear in the screen.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires appear.js 
 *
 */
;
(function($) {
  'use strict';

  $.HSCore.components.HSOnScrollAnimation = {

    /**
     * Base configuration.
     *
     * @var Object _baseConfig
     */
    _baseConfig: {
      bounds: -100,
      debounce: 50,
      inViewportClass: 'u-in-viewport',
      animation: 'fadeInUp',
      animationOut: false,
      animationDelay: 0,
      animationDuration: 1000,
      afterShow: function(){},
      onShown: function(){},
      onHidded: function(){}
    },

    /**
     * Collection of all instances of the page.
     *
     * @var jQuery _pageCollection
     */
    _pageCollection: $(),


    /**
     * Initialization of animation.
     *
     * @param jQuery selector (optional)
     * @param Object config (optional)
     *
     * @return jQuery _pageCollection - collection of initialized items.
     */
    init: function(selector, config) {

      if( !selector || !$(selector).length ) return;

      var self = this;

      this.config = config && $.isPlainObject(config) ? $.extend(true, {}, this._baseConfig, config) : this._baseConfig;

      appear({
        bounds: self.config['bounds'],
        reappear: false,
        debounce: self.config['debounce'],
        elements: function(){
          return document.querySelectorAll(selector);
        },
        init: function() {
          $(selector).each(function(i, el){

            var $this = $(el);

            if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) {
              if (!$this.data('HSAnimationElement')) {
                $this.data('HSAnimationElement', new HSAnimationElement($this, self.config));

                self._pageCollection = self._pageCollection.add($this);
              }
            } else {
              $this.addClass(self.config.inViewportClass);
            }

          });
        },
        appear: function(el) {
          var $el = $(el);

          if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent))) {
            if (!$el.hasClass(self.config.inViewportClass)) {
              $el.data('HSAnimationElement').show();
            }
          }
        }

      });

      return this._pageCollection;

    }

  }

  /**
   * HSAnimationElement constructor function.
   * 
   * @param jQuery element
   * @param Object config
   *
   * @return undefined
   */
  function HSAnimationElement(element, config) {

    if( !element || !element.length ) return;

    var self = this;

    this.element = element;
    this.config = config && $.isPlainObject(config) ? $.extend(true, {}, config, element.data()) : element.data();

    if( !isFinite( this.config.animationDelay ) ) this.config.animationDelay = 0;
    if( !isFinite( this.config.animationDuration ) ) this.config.animationDuration = 1000;

    element.css({
      'animation-duration': self.config.animationDuration + 'ms'
    });

  }

  /**
   * Shows element.
   * 
   * @return undefined
   */
  HSAnimationElement.prototype.show = function() {

    var self = this;

    if(this.config.animationDelay) {
      this.timeOutId = setTimeout( function(){

        self.element
            .removeClass(self.config.animationOut)
            .addClass(self.config.animation + ' ' + self.config.inViewportClass);
        self.config.afterShow.call( self.element );

        self.callbackTimeoutId = setTimeout( function(){
          self.config.onShown.call( self.element );
        }, self.config.animationDuration );

      }, this.config.animationDelay );
    }
    else {
      this.element
          .removeClass(this.config.animationOut)
          .addClass(this.config.animation + ' ' + this.config.inViewportClass);
      this.config.afterShow.call( this.element );

      this.callbackTimeoutId = setTimeout( function(){
        self.config.onShown.call( self.element );
      }, this.config.animationDuration );
    }

  }

  /**
   * Hides element.
   * 
   * @return undefined
   */
  HSAnimationElement.prototype.hide = function() {

    var self = this;

    if( !this.element.hasClass(this.config.inViewportClass) ) return;

    if( this.config.animationOut ) {

      this.element
        .removeClass( this.config.animation )
        .addClass( this.config.animationOut );

      this.callbackTimeoutId = setTimeout(function(){

        self.element.removeClass(self.config.inViewportClass);
        self.config.onHidded.call( self.element );

      }, this.config.animationDuration);

    }
    else {

      this.element.removeClass(this.config.inViewportClass + ' ' + this.config.animation);
      this.config.onHidded.call( this.element );
    }

  }

})(jQuery);

/**
 * Fancybox wrapper.
 *
 * @author Htmlstream
 * @version 1.0
 * @requires
 *
 */
;
(function($) {
	'use strict';

	$.HSCore.components.HSPopup = {
		/**
		 *
		 *
		 * @var Object _baseConfig
		 */
		_baseConfig: {
			parentEl: 'html',
			baseClass: 'u-fancybox-theme',
			slideClass: 'u-fancybox-slide',
			speed: 1000,
			slideSpeedCoefficient: 1,
			infobar: false,
			fullScreen: true,
			thumbs: true,
			closeBtn: true,
			baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
				'<div class="fancybox-content">' +
				'<div class="fancybox-bg"></div>' +
				'<div class="fancybox-controls" style="position: relative; z-index: 99999;">' +
				'<div class="fancybox-infobar">' +
				'<div class="fancybox-infobar__body">' +
				'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
				'</div>' +
				'</div>' +
				'<div class="fancybox-toolbar">{{BUTTONS}}</div>' +
				'</div>' +
				'<div class="fancybox-slider-wrap">' +
				'<button data-fancybox-prev class="fancybox-arrow fancybox-arrow--left" title="Previous"></button>' +
				'<button data-fancybox-next class="fancybox-arrow fancybox-arrow--right" title="Next"></button>' +
				'<div class="fancybox-stage"></div>' +
				'</div>' +
				'<div class="fancybox-caption-wrap">' +
				'<div class="fancybox-caption"></div>' +
				'</div>' +
				'</div>' +
				'</div>',
			animationEffect: 'fade',
			/**
			 * Added by EL
			 * @type {Object}
			 */
			media: {
				brightcove : {
		            params  : {
		                autoplay : 1,
		                autohide : 1,
		                fs  : 1,
		                rel : 0,
		                hd  : 1,
		                wmode : 'transparent',
		                enablejsapi : 1,
		                html5 : 1
		            },
		            matcher: /^.+brightcove.net\/([\d]+)([\w\.\?\/]+)(=[\d]+)/,
		            type    : 'iframe',
		            url     : '//players.brightcove.net/$1$2$3'
		        },
		        jwplayer : {
		            params  : {
		                autoplay : 1,
		                autohide : 1,
		                fs  : 1,
		                rel : 0,
		                hd  : 1,
		                wmode : 'transparent',
		                enablejsapi : 1,
		                html5 : 1
		            },
		            matcher: /(^.+jwplatform.com\/players\/)([\d\w]+)(-)([\d\w]+)(.html)/,
		            type    : 'iframe',
		            url     : 'https://jwp.io/s/eAO1zyxk'
		        }
		    }
		},

		/**
		 *
		 *
		 * @var jQuery pageCollection
		 */
		pageCollection: $(),

		/**
		 * Initialization of Fancybox wrapper.
		 *
		 * @param String selector (optional)
		 * @param Object config (optional)
		 *
		 * @return jQuery pageCollection - collection of initialized items.
		 */

		init: function(selector, config) {
			if (!selector) return;

			var $collection = $(selector);

			if (!$collection.length) return;

			config = config && $.isPlainObject(config) ? $.extend(true, {}, this._baseConfig, config) : this._baseConfig;

			this.initPopup(selector, config);
		},

		initPopup: function(el, conf) {
			var $fancybox = $(el);

			$fancybox.on('click', function() {
				var $this = $(this),
					animationDuration = $this.data('speed'),
					isGroup = $this.data('fancybox'),
					isInfinite = Boolean($this.data('is-infinite')),
					slideShowSpeed = $this.data('slideshow-speed');

				$.fancybox.defaults.animationDuration = animationDuration;

				if (isInfinite == true) {
					$.fancybox.defaults.loop = true;
				}

				if (isGroup) {
					$.fancybox.defaults.transitionEffect = 'slide';
					$.fancybox.defaults.slideShow.speed = slideShowSpeed;
				}
			});

			$fancybox.fancybox($.extend(true, {}, conf, {
				beforeShow: function(instance, slide) {
					var $fancyModal = $(instance.$refs.container),
						$fancyOverlay = $(instance.$refs.bg[0]),
						$fancySlide = $(instance.current.$slide),

						animateIn = instance.current.opts.$orig[0].dataset.animateIn,
						animateOut = instance.current.opts.$orig[0].dataset.animateOut,
						speed = instance.current.opts.$orig[0].dataset.speed,
						overlayBG = instance.current.opts.$orig[0].dataset.overlayBg,
						overlayBlurBG = instance.current.opts.$orig[0].dataset.overlayBlurBg;

					if (animateIn && $('body').hasClass('u-first-slide-init')) {
						var $fancyPrevSlide = $(instance.slides[instance.prevPos].$slide);

						$fancySlide.addClass('has-animation');

						$fancyPrevSlide.addClass('animated ' + animateOut);

						setTimeout(function() {
							$fancySlide.addClass('animated ' + animateIn);
						}, speed / 2);
					} else if (animateIn) {
						var $fancyPrevSlide = $(instance.slides[instance.prevPos].$slide);

						$fancySlide.addClass('has-animation');

						$fancySlide.addClass('animated ' + animateIn);

						$('body').addClass('u-first-slide-init');
					}

					if (speed) {
						$fancyOverlay.css('transition-duration', speed + 'ms');
					} else {
						$fancyOverlay.css('transition-duration', '1000ms');
					}

					if (overlayBG) {
						$fancyOverlay.css('background-color', overlayBG);
					}

					if (overlayBlurBG) {
						$('body').addClass('g-blur-30');
					}
				},

				beforeClose: function(instance, slide) {
					var $fancyModal = $(instance.$refs.container),
						$fancySlide = $(instance.current.$slide),

						animateIn = instance.current.opts.$orig[0].dataset.animateIn,
						animateOut = instance.current.opts.$orig[0].dataset.animateOut,
						overlayBlurBG = instance.current.opts.$orig[0].dataset.overlayBlurBg;

					if (animateOut) {
						$fancySlide.removeClass(animateIn).addClass(animateOut);
						$('body').removeClass('u-first-slide-init')
					}

					if (overlayBlurBG) {
						$('body').removeClass('g-blur-30')
					}
				}
			}));
		}
	}
})(jQuery);
