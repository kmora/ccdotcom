function Counter() {
	if ($('.counter-wraper').length > 0) {
		$('.counter-wraper').each(function(index) {
			var $this = $(this);
			var waypoint = $this.waypoint({
				handler: function(direction) {
					$this.find('.counter-digit:not(.counted)').countTo().addClass('counted');
				},
				offset: "90%"
			});
		});
	}
}
function Countdown() {
	if ($(".pl-clock").length > 0) {
		$(".pl-clock").each(function() {
			var time = $(this).attr("data-time");
			$(this).countdown(time, function(event) {
				var $this = $(this).html(event.strftime('' + '<div class="countdown-item"><div class="countdown-item-value">%D</div><div class="countdown-item-label">Days</div></div>' + '<div class="countdown-item"><div class="countdown-item-value">%H</div><div class="countdown-item-label">Hours</div></div>' + '<div class="countdown-item"><div class="countdown-item-value">%M</div><div class="countdown-item-label">Minutes</div></div>' + '<div class="countdown-item"><div class="countdown-item-value">%S</div><div class="countdown-item-label">Seconds</div></div>'));
			});
		});
	}
}
function ProgressBar() {
	$('.group-progressbar').each(function() {
		var $this = $(this);
		var waypoint = $this.waypoint({
			handler: function(direction) {
				$this.find('.progressbar').progressbar({ display_text: 'center' });
			},
			offset: "80%"
		});
	});
}
function MagnificPopup() {
	if ($(".gallery-item").length > 0) {
		$('.gallery-item').magnificPopup({
			gallery: {
				enabled: true
			}
		});
	}
	
	//Ajax popup
	if ($(".mfp-ajax").length > 0) {
		$('.mfp-ajax').magnificPopup({
			type: 'ajax',
			// Delay in milliseconds before popup is removed
			removalDelay: 300,

			// Class that is added to popup wrapper and background
			// make it unique to apply your CSS animations just to this exact popup
			mainClass: 'mfp-fade'
		});
	}
}
function Blog() {
	$('.blog-grid .blog-item').each(function() {
		var color = $(this).attr('data-color'),
			overlay = $(this).find('.blog-overlay').attr('data-color');
		$(this).find('.blog-overlay').css('background-color', overlay);
		$(this).find('.blog-thumbnail').css('border-top-color', color);
		$(this).find('.blog-cate a').css('color', color);
		
		
		$(this).find('a:not(.blog-cate > a)').mouseover(function() {
			$(this).css("color", color);
		}).mouseout(function() {
			$(this).css("color", "#27394A");
		});
	});
	
	$('.blog-list .blog-item').each(function() {
		var color = $(this).attr('data-color');
		$(this).find('.blog-createdby a').css('color', color);
		
		$(this).find('a:not(.blog-createdby > a)').mouseover(function() {
			$(this).css("color", color);
		}).mouseout(function() {
			$(this).css("color", "#27394A");
		});
	});
	
	$('.blog-modern .blog-item').each(function() {
		var color = $(this).attr('data-color'),
			overlay = $(this).find('.blog-overlay').attr('data-color');
		$(this).find('.blog-createdby a').css('color', color);
		$(this).find('.blog-overlay').css('background-color', overlay);
		
		$(this).find('.blog-image').css('background-image', 'url("' + $(this).find('.blog-image').attr("data-src") + '")');
		
		$(this).mouseover(function() {
			$(this).removeClass('inactive-hover').addClass('active-hover');
		}).mouseout(function() {
			$(this).removeClass('active-hover').addClass('inactive-hover');
		});
		
		$(this).find('a:not(.blog-createdby > a)').mouseover(function() {
			$(this).css("color", color);
		}).mouseout(function() {
			if($(this).parents('.blog-item').hasClass('active-hover')) {
				$(this).css("color", "#fff");
			} else {
				$(this).css("color", "#27394A");
			}
		});
	});
	
	$('.blog-isotope .blog-item').each(function() {
		var color = $(this).attr('data-color');
		$(this).find('.blog-createdby').css('color', color);
	});
}
function initRotationText() {
	if ($('#js-rotating').length > 0) {
		$("#js-rotating").Morphext({
			animation: "flipInX",
			// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
			separator: ",",
			// The delay between the changing of each phrase in milliseconds.
			speed: 2000,
			complete: function() {
				// Called after the entrance animation is executed.
			}
		});
	}
}

function introHeight() {
	var wh = $(window).height();
	$('.section-fullscreen').css({ height: wh });
	$('#fullscreen-banner').css({ height: wh });
}

function OwlCarousel() {
	if ($(".testimonials-slider").length > 0) {
		$(".testimonials-slider").each(function() {
			$(this).owlCarousel({
				navigation: false,
				slideSpeed: 600,
				pagination: true,
				paginationSpeed: 400,
				autoHeight: true,
				addClassActive: true,
				autoPlay: true,
				singleItem: true,
				transitionStyle : "backSlide",
			});
		});
	}
	
	//Product Carousel
	$(".products-ul-slider").each(function() {
		$(this).owlCarousel({
			items: 4,
			loop: true,
			mouseDrag: true,
			nav: false,
			dots: false,
			pagination: false,
			autoplay: true,
			autoplayTimeout: 5000,
			autoplayHoverPause: true,
			smartSpeed: 1000,
			autoplayHoverPause: true,
			navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
			itemsDesktop: [1199, 4],
			itemsDesktopSmall: [979, 3],
			itemsTablet: [768, 2],
			itemsMobile: [479, 1]
		});
	});
	
	//Twitter Slider
	if ($(".twitter-slider").length > 0) {
		$(".twitter-slider").each(function() {
			$(this).owlCarousel({
				navigation: true,
				slideSpeed: 600,
				pagination: false,
				paginationSpeed: 400,
				autoHeight: true,
				addClassActive: true,
				autoPlay: true,
				singleItem: true,
				navigationText: ['<i class="mdi-chevron-left"></i>', '<i class="mdi-chevron-right"></i>'],
			});
		});
	}
}

function GoogleMap() {
	// When the window has finished loading create our google map below
	var marker_image = "../images/marker.png";

	if ($('#map').length > 0) {
		if ($('#map').attr('data-marker-image') != undefined) {
			marker_image = $('#map').attr('data-marker-image')
		}
		google.maps.event.addDomListener(window, 'load', init);
	}

	function init() {
		// Basic options for a simple Google Map
		// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
		var mapOptions = {
			// How zoomed in you want the map to start at (always required)
			zoom: 11,
			scrollwheel: false,

			// The latitude and longitude to center the map (always required)
			center: new google.maps.LatLng(40.6700, -73.9400), // New York

			// How you would like to style the map.
			// This is where you would paste any style found on Snazzy Maps.
			styles: [{
				"featureType": "all",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"saturation": 36
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 40
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"visibility": "on"
					},
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "all",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "administrative",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					},
					{
						"weight": 1.2
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 20
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 21
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 29
					},
					{
						"weight": 0.2
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 18
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 16
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 19
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry",
				"stylers": [
					{
						"color": "#000000"
					},
					{
						"lightness": 17
					}
				]
			}]
		};

		// Get the HTML DOM element that will contain your map
		// We are using a div with id="map" seen below in the <body>
		var mapElement = document.getElementById('map');
		// Create the Google Map using our element and options defined above
		var map = new google.maps.Map(mapElement, mapOptions);

		// Let's also add a marker while we're at it
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(40.6000, -73.9400),
			map: map,
			title: 'Location 1',
			icon: marker_image
		});

		var marker2 = new google.maps.Marker({
			position: new google.maps.LatLng(40.6800, -73.8000),
			map: map,
			title: 'Location 2',
			icon: marker_image
		});

		var marker3 = new google.maps.Marker({
			position: new google.maps.LatLng(40.7300, -74.1280),
			map: map,
			title: 'Location 3',
			icon: marker_image
		});

	}
}
function Map() {
	$('.maps').on('click', function() {
		$('.maps iframe').css("pointer-events", "auto");
	});
	$('.maps').on('mouseleave', function() {
	  $('.maps iframe').css("pointer-events", "none"); 
	});
}
function Animation() {
	var wow = new WOW({
		boxClass: 'wow', // default
		animateClass: 'animated', // default
		offset: 0, // default
		mobile: true, // default
		live: true // default
	});
	wow.init();
}

function init_sidebar(sidebar_is_open) {
	$('.hidden-bar-toggle').on('click', function(e) {
		prk_toggle_sidebar(sidebar_is_open);
	});
	$('.sidebar_opener a').on('click', function(e) {
		e.preventDefault();
		prk_toggle_sidebar(sidebar_is_open);
	});
}
function hasParentClass(e, classname) {
	if (e === document) {
		return false;
	}
	if (classie.has(e, classname)) {
		return true;
	}
	return e.parentNode && hasParentClass(e.parentNode, classname);
}

function prk_toggle_sidebar(sidebar_is_open) {
	if (sidebar_is_open === false) {
		$('.hidden-bar-toggle').removeClass('hover_trigger');
		sidebar_is_open = true;
		$('body').addClass('prk_shifted');
		$('.hidden-bar').css({ 'visibility': 'visible' });
		setTimeout(function() {
			document.addEventListener("click", function(evt) {
				console.log(evt);
				if (evt === 'close_flag' || hasParentClass(evt.target, 'hider_flag')) {
					if (sidebar_is_open === true) {
						prk_toggle_sidebar(sidebar_is_open);
					}
				}
				if (evt.target.className.includes("onepage")) {
					if (sidebar_is_open === true) {
						prk_toggle_sidebar(sidebar_is_open);
					}
				}
			});
			$('#body_hider').addClass('prk_shifted_hider');
			$('body').addClass('showing_hidden_sidebar');
		}, 300);
	} else {
		sidebar_is_open = false;
		$('body').removeClass('prk_shifted');
		$('body').removeClass('showing_hidden_sidebar');
		$('#body_hider').removeClass('prk_shifted_hider');
		setTimeout(function() {
			document.addEventListener("click", function(evt) {
				if (evt === 'close_flag' || hasParentClass(evt.target, 'hider_flag')) {
					if (sidebar_is_open === true) {
						prk_toggle_sidebar(sidebar_is_open);
					}
				}
				if (evt.target.className.includes("onepage")) {
					if (sidebar_is_open === true) {
						prk_toggle_sidebar(sidebar_is_open);
					}
				}
			});
			$('.hidden-bar').css({ 'visibility': 'hidden' });
		}, 300);
	}
}

function RevolutionFullScreenInit() {
	$("#rev_slider_1").show().revolution({
		sliderType: "standard",
		sliderLayout: "fullscreen",
		dottedOverlay: "none",
		delay: 6000,
		navigation: {
			keyboardNavigation: "off",
			keyboard_direction: "horizontal",
			mouseScrollNavigation: "off",
			onHoverStop: "on",
			touch: {
				touchenabled: "on",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				swipe_direction: "horizontal",
				drag_block_vertical: false
			},
			arrows: {
				style: "hebe",
				enable: true,
				hide_onmobile: true,
				hide_under: 600,
				hide_onleave: true,
				hide_delay: 200,
				hide_delay_mobile: 1200,
				left: {
					h_align: "left",
					v_align: "center",
					h_offset: 0,
					v_offset: 0
				},
				right: {
					h_align: "right",
					v_align: "center",
					h_offset: 0,
					v_offset: 0
				}
			}
		},
		responsiveLevels: [1240, 1024, 778, 480],
		visibilityLevels: [1240, 1024, 778, 480],
		gridwidth: [1920, 1024, 778, 480],
		gridheight: [960, 768, 960, 720],
		lazyType: "none",
		shadow: 0,
		spinner: "spinner0",
		stopLoop: "off",
		stopAfterLoops: -1,
		stopAtSlide: -1,
		shuffle: "off",
		autoHeight: "off",
		fullScreenAutoWidth: "off",
		fullScreenAlignForce: "off",
		fullScreenOffsetContainer: "",
		fullScreenOffset: "",
		disableProgressBar: "on",
		hideThumbsOnMobile: "off",
		hideSliderAtLimit: 0,
		hideCaptionAtLimit: 0,
		hideAllCaptionAtLilmit: 0,
		debugMode: false,
		fallbacks: {
			simplifyAll: "off",
			nextSlideOnWindowFocus: "off",
			disableFocusListener: false,
		}
	});
}