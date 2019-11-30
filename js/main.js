$(function(){
   $('.slider').slick({
     slidesToShow:3,
     slidesToScroll:1,
     dots:false,
     arrows:true,
     prevArrow: '.prev-arrow',
     nextArrow: '.next-arrow',
     responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
   });
   $('.members__dropdown').click(function(){
   	$('.members__list').toggleClass('members__dropdown-show');
   });
   $('.menu-btn').click(function(){
      $('.header-top__nav').toggleClass('show-menu');
   });
});