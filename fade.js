$(window).on("load",function() {
  if (window.matchMedia('(min-width: 412px').matches) {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".cell").each(function() {

      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      if (objectBottom < windowBottom) { 
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { 
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll();
} else {
  $('.cell').css('opacity', '1');
}
});