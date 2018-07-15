(function ($) {
	"use strict";

	jQuery(document).ready(function ($) {
    
		$('.homepage-slides').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,		    
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:3
	        },
	        1000:{
	            items:1
	        }
	    }
		})
    
  });
}(jQuery));
