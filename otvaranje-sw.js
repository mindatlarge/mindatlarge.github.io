$(document).ready(function() {
		$('.cell, .cell-v').magnificPopup({		
  delegate: 'a',
  type: 'image',
  fixedContentPos: true,
  closeBtnInside: false,
  closeOnContentClick: true,
  gallery: {
  	enabled: true
  },
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
}

	});
});