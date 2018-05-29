(function (window, document, $) {
	"use strict";

	window.$ = window.$ = $;

    $(window).on('load', function() {
		"use strict";
		
		$(".noo-spinner").fadeOut('slow').remove();

        var sidebar_is_open = false;
		
		//init slider
		if ($("#rev_slider_1").length > 0) {
			RevolutionFullScreenInit();
		}
		
		//Init sidebar
		init_sidebar(sidebar_is_open);
		
		//Scrolling Animation
		if ($('.wow').length > 0) Animation();
		
		//Toggle Search
		$('.sidebar-search, #top-form-close, .overlay-menu, .hidden-menu .onepage').on('click', function() {
			$('body').toggleClass('show-search');
		});
		
		//Onepage navigation
		var offset = $('.main-nav').attr('data-offset');
		var anchor_offset = $('#anchor').attr('data-offset');
		if ($('.main-nav').length > 0) $('.main-nav').singlePageNav({ 'offset': offset, 'filter': '.onepage' });
		if ($('#anchor, .anchor').length > 0) $('#anchor, .anchor').singlePageNav({ 'offset': anchor_offset, 'filter': '.onepage' });
		
		if (($("body, html").scrollTop() == 0) && ($(".main-nav .onepage").length > 0)) {
			$('.main-nav').find('li').children('a').removeClass('current');
			$('.main-nav').children('li').first().children('a').addClass('current');
		}
		
		//Portfolio set attributes
		$('.portfolio-grid .portfolio-masonry-item').each(function() {
			var color = $(this).find('.grid-overlay').attr('data-color'),
				overlay = $(this).find('.grid-overlay');
			overlay.css('background-color', color);
		});
		
		//Blog set attributes
		Blog();
		
		//Counter
		Counter();
		
		//Countdown Timer
		Countdown();
		
		//ProgressBar
		ProgressBar();
		
		//fitvids
		if ($('.media').length > 0) $('.media').fitVids();
		
		//Magnific popup
		MagnificPopup();
		
		//Fullscreen Background
		$('.section-fullscreen').each(function() {
			$(this).css('background-image', 'url("' + $(this).attr("data-src") + '")');
		});
		
		//Box Banner Background
		$('.box-info').each(function() {
			$(this).parents('.section').find('.box-banner').css('background-image', 'url("' + $(this).parents('.section').find('.box-banner').attr("data-src") + '")');
		});
		
		//Equal Heights
		if ($('.equalheight').length > 0) $('.equalheight').equalHeights();
		
		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
		/* Fullscreen Banner Height  */
		/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
	
		introHeight();
		$(window).bind('resize', function() {
			//Update slider height on resize
			introHeight();
		});
		
		OwlCarousel();
		
		//Toggle Accordion
		$(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function(e) {
			var $target = $(e.target)
			if (e.type == 'show')
				$target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
			if (e.type == 'hide')
				$(this).find('.accordion-toggle').not($target).removeClass('active');
		});
		
		//Datetime Picker
		if ($('#datetimepicker').length > 0) {
			$('#datetimepicker').datetimepicker({
				format: 'DD/MM/YYYY'
			});
		}
		
		//Disable or Enable zoom on scroll
		Map();
		
		$(window).scroll(function() {
			if ($(this).scrollTop() > 80) {
				$('.header').addClass('scrolling-menu');
			} else {
				$('.header').removeClass('scrolling-menu');
			}
			if ($(this).scrollTop() > 500) {
				$(".go-to-top").addClass("on");
			} else {
				$(".go-to-top").removeClass("on");
			}
		});
		
		$('body').on('click', '.go-to-top', function() {
			$("html, body").animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		
		initRotationText();
		
		$(document).ajaxComplete(function(event, request, settings) {
			//Scrolling Animation
			if ($('.wow').length > 0) Animation();
										  
			//Ajax popup
			MagnificPopup();
			
			/* pretty photo */
			/*
			$("a[data-rel^='prettyPhoto']").prettyPhoto();
			$("a.prettyphoto").prettyPhoto();
			$("a[data-rel^='prettyPhoto']").prettyPhoto({ hook: "data-rel", social_tools: !1, theme: "pp_default", horizontal_padding: 20, opacity: .8, deeplinking: !1 });
			*/
			
			introHeight();
			
			//Fullscreen Background
			$('.section-fullscreen').each(function() {
				$(this).css('background-image', 'url("' + $(this).attr("data-src") + '")');
			});
			
			$('.masonry-grid-post').each(function() {
				var $this = $(this);
				var $filter = $this.parent().find('.masonry-filter');
				$this.imagesLoaded(function() {
					$this.isotope({
						itemSelector: '.masonry-item'
					});
				});
		
				$filter.find('a').on("click", function(e) {
					e.preventDefault();
					$filter.find("a").removeClass('active');
					$(this).addClass('active');
					var data_filter = $(this).data('filter');
					$this.isotope({
						filter: data_filter
					});
				});
			});
			
			Map();
		});
	});
	
	
	$(document).ready(function () {
		//Load Google Map
		GoogleMap();
	});

})(window, document, jQuery);