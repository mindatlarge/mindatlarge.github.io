// $('.gallery').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   fade: true,
//   cssEase: 'linear',
//   adaptiveHeight: false
// });


var $status = $('.pagingInfo');
var $slickElement = $('.gallery');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '-' + slick.slideCount);
});

$slickElement.slick({
  dots: false,
  infinite: false,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});

