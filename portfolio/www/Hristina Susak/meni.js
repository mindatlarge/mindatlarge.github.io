$(document).ready(function() {
	$('#btn').on('click', function(){
		$('.container_landing').hide();
		$('.container_meni').show();
	})



	$('#btn_close').on('click', function(){
		$('.container_landing').show();
		$('.container_meni').hide();
	})



});