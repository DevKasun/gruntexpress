(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away

		var gridWidth = $('.home-grid-wrap .gid-item').width();


		$('.home-grid-wrap .gid-item').height(((gridWidth * 85) / 100) / 2);

		$('.home-grid-wrap .big').height((gridWidth * 85) / 100);

		var revapi;
	    revapi = $('.tp-banner').revolution(
	    {
		    delay:15000,
	        startwidth:1170,
	        startheight:800,
	        hideThumbs:10,
	        fullWidth:"off",
	        fullScreen:"on",
	        fullScreenOffsetContainer: ""
     	});




	});
	
})(jQuery, this);


