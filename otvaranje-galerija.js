$(document).ready(function() {
	
	/* DOK IMA JEDNA GALERIJA U SOLO */
	$('.otvori-cg').on('click', function(){ 
		$('.dropdown-container-cg').fadeToggle(100);
    	$('#container').addClass('pozadina-galerija');
    	$('.dropdown-container-cg').slick('setPosition');
    	$('.close-btn').fadeToggle();
	});

	/* DOK IMA JEDNA GALERIJA U GROUP */
	$('.otvori-saat').on('click', function(){    
    	$('.dropdown-container-saat').fadeToggle(100);
    	$('#container').addClass('pozadina-galerija');
    	$('.dropdown-container-saat').slick('setPosition');
    	$('.close-btn').toggle();
	});
	$('.close-btn').on('click', function(){
		$('.dropdown-container-cg, .dropdown-container-saat, .close-btn').fadeOut(200);
		$('#container').removeClass('pozadina-galerija');
	});
});