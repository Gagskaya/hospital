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
   let header = $('.header');
   let videoTop=header.offset().top;
   $(window).bind('scroll',function(){
     let windowTop = $(this).scrollTop();
     if(windowTop > videoTop) {
      $('.appeal').html('<iframe width="1110" height="665" src="https://www.youtube.com/embed/RfjWv-UEX4w" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')
       $(window).unbind('scroll');
     }
   });
});