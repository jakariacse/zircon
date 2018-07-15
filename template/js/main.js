(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {

		jQuery('#mobile-menu').meanmenu({
			meanScreenWidth: "767",
			meanMenuContainer: '.mobile-menu-active'
		});
    
		$('.homepage-slides').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,		    
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        767:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
		})
    
  });
}(jQuery));
