$(document).ready(function(){


	var controller = new ScrollMagic.Controller();


	var ourScene = new ScrollMagic.Scene({
		triggerElement: '.about',
		triggerHook: 0
	})
	
	.setClassToggle('.dropdown-header', 'prikazi')
	.addTo(controller);

});