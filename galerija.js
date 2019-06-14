

$(document).ready(function(){


		/* SLIDE GALLERY */
			  $('.cell__4').on('click', function(e){
					  var sWidth = $(this).innerWidth();
					  var sOffset = $(this).offset();
					  var x = e.pageX - sOffset.left;
					  var currentActive = $(this).children('.active-s');
					  var prev = currentActive.prev();
					  var next = currentActive.next();
			  
					  if (sWidth / 2 > x) {
					    if (prev.length > 0) {
					          currentActive.removeClass('active-s');
					          prev.addClass('active-s');

					        }
					    }
					    else {
					      if (next.length > 0) {
					            currentActive.removeClass('active-s');
					            next.addClass('active-s');
					          }
					    }
			});


		/*STRELICE HOVER */
			  	var elementHalfWidth = $('body').width() / 2;

					$('.cell__4').on('mousemove', function (e) {
					    if (e.pageX < elementHalfWidth) {

					        $(this).css( 'cursor', 'w-resize' );
					    }
					    else {

					        $(this).css( 'cursor', 'e-resize' );
					    }

			}); 


		/* COUNTER */

				$('.cell__4').on('click', function(e){
						  var sWidth = $(this).innerWidth();
						  var sOffset = $(this).offset();
						  var x = e.pageX - sOffset.left;
						  var currentActive = $('.slider-number').children('.active-counter');
						  var prev = currentActive.prev();
						  var next = currentActive.next();
						  
						  if (sWidth / 2 > x) {
						    if (prev.length > 0) {
						          currentActive.removeClass('active-counter');
						          prev.addClass('active-counter');

						        }
						    }
						    else {
						      if (next.length > 0) {
						            currentActive.removeClass('active-counter');
						            next.addClass('active-counter');
						          }
						    }
			});

});