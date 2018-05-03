
$(document).ready(function() {
	//mobile
	if ($(window).width() > 575 ) {
		// CARLIER_GEBAUER DESKTOP
	$('.otvori-cg').on('click', function(){ 
		$('.dropdown-container-cg').fadeToggle(100);
    	$('#container').addClass('pozadina-galerija');
    	$('.dropdown-container-cg').slick('setPosition');
    	$('.close-btn').fadeToggle();
	});
		// SAATCHI DESKTOP
	$('.otvori-saat').on('click', function(){    
    	$('.dropdown-container-saat').fadeToggle(100);
    	$('#container').addClass('pozadina-galerija');
    	$('.dropdown-container-saat').slick('setPosition');
    	$('.close-btn').toggle();
	});

		// ZATVORI GALERIJU DESKTOP
	$('.close-btn').on('click', function(){
		$('.dropdown-container-cg, .dropdown-container-saat, .close-btn').fadeOut(200);
		$('#container').removeClass('pozadina-galerija');
	});


		} else {


	$('.otvori-cg').on('click', function(){
		$('.dropdown-container-cg').fadeToggle(100);
		$('#container').hide();
		$('.close-btn-m').show();
	});

	$('.otvori-saat').on('click', function(){
		$('.dropdown-container-saat').css('display', 'block');
		$('#container').hide();
		$('.close-btn-m').show();
	});
			// ZATVORI GALERIJU MOB
	$('.zatvori-m').on('click', function(){
		$('.dropdown-container-cg, .dropdown-container-saat').fadeOut(100);
		$('#container').fadeIn(200);
	});

	}
});












