$(document).ready(function() {

			$('.link1').hover(function(){
				$('.container_meni').removeClass('normal').addClass('link1_color');
			},
				function() {
					$('.container_meni').removeClass('link1_color').addClass('normal');
			});




			$('.link2').hover(function(){
				$('.container_meni').removeClass('normal').addClass('link2_color');
			},
				function() {
					$('.container_meni').removeClass('link2_color').addClass('normal');
			});




			$('.link3').hover(function(){
				$('.container_meni').removeClass('normal').addClass('link3_color');
			},
				function() {
					$('.container_meni').removeClass('link3_color').addClass('normal');
			});






			$('.link4').hover(function(){
				$('.container_meni').removeClass('normal').addClass('link4_color');
			},
				function() {
					$('.container_meni').removeClass('link4_color').addClass('normal');
			});

});

