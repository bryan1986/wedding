(function($) {
	"use strict"; // Start of use strict
	

	/*OWL Intro Slider*/

	if ($('.gla_slider_carousel .gla_slider').length>1) {
		
		if($('#video_background').length==1) {
			$(".gla_slider_carousel").owlCarousel({
		 		navigation : true, 
		 		pagination: false,
		 		responsive: true, 
		 		responsiveRefreshRate : 200, 
		 		responsiveBaseElement:window, 
		 		slideSpeed : 200, 
		 		addClassActive:true,
				paginationSpeed : 200, 
				rewindSpeed : 200,
				items:1,
				autoPlay : false, 
				touchDrag:true,
				singleItem:true,
				navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>'],
				transitionStyle:"fade",
				afterAction: function(current) {
		        current.find('video').get(0).play();
		    }
			});
		}else {
			$(".gla_slider_carousel").owlCarousel({
		 		navigation : true, 
		 		pagination: false,
		 		responsive: true, 
		 		responsiveRefreshRate : 200, 
		 		responsiveBaseElement:window, 
		 		slideSpeed : 200, 
		 		addClassActive:true,
				paginationSpeed : 200, 
				rewindSpeed : 200,
				items:1,
				autoPlay : false, 
				touchDrag:true,
				singleItem:true,
				navigationText:['<i class="ti ti-angle-left"></i>','<i class="ti ti-angle-right"></i>'],
				transitionStyle:"fade",
			});
		}
	}




	/* Section Background */
	$('.gla_image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		var height = $(this).attr('data-height');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (blend){
			$(this).css('background-blend-mode', blend);	
		}
		if (position){
			$(this).css('background-position', position);	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (height){
			$(this).css('height', height);	
		}

	});



	/* Over */
	$('.gla_over, .gla_head_bck').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		var gradient = $(this).attr('data-gradient');
		if (gradient){
			$(this).css('background-image', gradient);	
		}
		if (color){
			$(this).css('background-color', color);	
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
		if (opacity){
			$(this).css('opacity', opacity);	
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);	
		}
	});

	$('img.gla_img_shadow').each(function(){
		var color = $(this).attr('data-shadow');
		if (color){
			$(this).css('filter', color);	
		}
	});
	$('.gla_page').each(function(){
		var border = $(this).attr('data-border');
		if (border){
			$('.gla_border_top, .gla_border_bottom, .gla_border_left, .gla_border_right, .gla_sml_abs_title').css('background', border);	
			$('.gla_bordered_block').css('border-left-color', border);
			$('.gla_border').css('border-bottom-color', border).css('border-top-color', border);
			$('.gla_team_simple .gla_bordered_block').css('border-top-color', border);	
		}
	});
	
	

	$('.gla_countdown').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({until: new Date(year,month-1,day)});

	});

	$('.gla_countdown_gold').each(function(){
		var year = $(this).attr('data-year');
		var month = $(this).attr('data-month');
		var day = $(this).attr('data-day');
		$(this).countdown({
			until: new Date(year,month-1,day),
			layout: '<span class="countdown-row countdown-show3"><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_day gla_image{d100}"></span><span class="gla_image{d10}"></span><span class="gla_image{d1}"></span></span><span class="countdown-period">Days</span></span><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_hours gla_image{h10}"></span><span class="gla_image{h1}"></span></span><span class="countdown-period">Hours</span></span><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_minutes gla_image{m10}"></span><span class="gla_image{m1}"></span></span><span class="countdown-period">Minutes</span></span><span class="countdown-section"><span class="countdown-amount"><span class="gla_image_sec gla_image{s10}"></span><span class="gla_image{s1}"></span></span><span class="countdown-period">Seconds</span></span></span>	'
		});

	});




	/*Animation Block Delay*/
	
	$('div[data-animation=animation_blocks]').each(function(){
	var i = 0;	
		$(this).find('.gla_icon_box, .skill-bar-content, .gla_anim_box').each(function(){
			$(this).css('transition-delay','0.'+i+'s');
			i++;
		})
	})



	/* Fixed for Parallax */
	$(".gla_fixed").css("background-attachment","fixed");



	/* Music */
	$('.gla_music_icon').on('click',function(){
		$('.gla_music_icon_cont').fadeToggle();	
	}); 


	$(document).ready(function(){

    $.LoadingOverlay("show");

	});
	


	$(window).load(function(){
		
			// Page loader
	        
	    $("body").imagesLoaded(function(){
	        $(".gla_page_loader div").fadeOut();
	    	$(".gla_page_loader").delay(200).fadeOut("slow");
	    	$.LoadingOverlay("hide");
	    });


		

	 	/*Masonry*/
		var $grid = $('.grid').isotope({
		  itemSelector: '.grid-item',
		  percentPosition: true,
		  stagger: 0,
		  transitionDuration: '0',
		  isAnimated: true,
		  masonry: {
		    columnWidth: '.grid-item',
		    
		  }	  
		});
		$grid.imagesLoaded().progress( function() {
		  $grid.isotope('layout');
		});


		/*SkroolR*/
		//if( !device.tablet() && !device.mobile() ) {
			var s = skrollr.init({
				forceHeight: false,
			});
		//}
		



		$('.masonry').masonry({
			itemSelector: '.masonry-item',
		});


		

		// if( !device.tablet() && !device.mobile() ) {
				$(window).stellar({
				 	horizontalScrolling: false,
					responsive: true,
					verticalOffset: 50
			 	});
			// }


		/*Boxes AutoHeight*/
		function setEqualHeight(columns)
		{
			var tallestcolumn = 0;
			columns.each(
				function()
				{
					$(this).css('height','auto');
					var currentHeight = $(this).height();
					if(currentHeight > tallestcolumn)
						{
						tallestcolumn = currentHeight;
						}
				}
			);
		columns.height(tallestcolumn);
		}	

		/* Block Autheight */
		// if( !device.tablet() && !device.mobile() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		// }
		// if( device.tablet() && device.landscape() ) {
			$('.gla_auto_height').each(function(){
				setEqualHeight($(this).find('> div[class^="col"]'));
			});
		// }

		
	});

	
	
})(jQuery);





