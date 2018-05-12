
$(document).ready(function() {
	//mobile
	if ($(window).width() > 767 && ($(window).height() > 414)) {
		//CARLIER-GEBAUER
		$('.otvori-cg').magnificPopup({
			items: [{
				src: 'exhibitions/CGEBAUER-W/CGEBAUER-1.jpg',
				title: 'Exhibition view at carlier | gebauer, 2017. Courtesy of the artist and carlier | gebauer. Photo: Trevor Good.'},
			{	src: 'exhibitions/CGEBAUER-W/CGEBAUER-2.jpg',
				title: 'Exhibition view at carlier | gebauer, 2017. Courtesy of the artist and carlier | gebauer. Photo: Trevor Good.'},
			{	src: 'exhibitions/CGEBAUER-W/CGEBAUER-3.jpg',
				title: 'Exhibition view at carlier | gebauer, 2017. Courtesy of the artist and carlier | gebauer. Photo: Trevor Good.'},
			{	src: 'exhibitions/CGEBAUER-W/CGEBAUER-4.jpg',
				title: 'Exhibition view at carlier | gebauer, 2017. Courtesy of the artist and carlier | gebauer. Photo: Trevor Good.'},
			{	src: 'exhibitions/CGEBAUER-W/CGEBAUER-5.jpg',
				title: 'Exhibition view at carlier | gebauer, 2017. Courtesy of the artist and carlier | gebauer. Photo: Trevor Good.'},
		],
		gallery: {enabled: true},
		callbacks: {
	        change: function() {
        var mfp = $.magnificPopup.instance;
        var container = $(mfp.container);

        if (mfp.index >= mfp.items.length - 1) container.addClass('mfp-last');
        else container.removeClass('mfp-last');
        if (mfp.index == 0) container.addClass('mfp-first');
        else container.removeClass('mfp-first');
    },
    open: function() {
        var mfp = $.magnificPopup.instance;
        var proto = $.magnificPopup.proto;

        // extend function that moves to next item
        mfp.next = function() {

            // if index is not last, call parent method
            if(mfp.index < mfp.items.length - 1) {
                proto.next.call(mfp);
            } else {
               // otherwise do whatever you want, e.g. hide "next" arrow
            }
        };

        // same with prev method
        mfp.prev = function() {
            if(mfp.index > 0) {
                proto.prev.call(mfp);
            }
        };

    }
},
		type: 'image'
		});

		} else {
			// MOBILNA
	$('.otvori-cg').on('click', function(){
		$('.dropdown-container-cg').fadeToggle(100);
		$('#container').hide();
	});

	$('.otvori-saat').on('click', function(){
		$('.dropdown-container-saat').fadeToggle(100);
		$('#container').hide();
	});
			// ZATVORI GALERIJU MOB
	$('.zatvori-m').on('click', function(){
		$('.dropdown-container-cg, .dropdown-container-saat').fadeOut(100);
		$(window).scrollTop(0);
		$('#container').fadeIn(200);

	});
	}


});












