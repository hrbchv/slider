'use strict';

$('.page__slider ').slick({
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
