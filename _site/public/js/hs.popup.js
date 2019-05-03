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
