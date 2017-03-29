'use strict';

$('.page__slider').on('init', function(event, slick){
  setTimeout(function() {
    $('.slider__item-layout').css('visibility', 'visible');
  }, 1000);
});

$('.page__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 300,
  centerMode: true,
  variableWidth: true,
  dots: false,
  infinite: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next")
});
