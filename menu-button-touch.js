$(document).ready(function(){
	$('#nav-mobile-btn').on('click', function(){
		$('#nav-mobile').fadeToggle(300);
		$('#nav-mobile-btn').toggleClass('rotate');
	});
});