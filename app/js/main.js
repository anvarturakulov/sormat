
$(function(){
  $('.vacancy__glbox').click(function(event){
    
    $('vacancy__glbox').not($(this)).removeClass('active');
    $('.vacancy__footerbox').not($(this).next()).slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);
    
  });

  $('.quest__glbox').click(function(event){
    $('.quest__glbox').not($(this)).removeClass('active');
    $('.quest__footerbox').not($(this).next()).slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);
  });

  $(".clients__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    //dots: true,
    arrows:true,
  });

  
  $(".sertif__slider").slick({
    // centerMode: true,
    // centerPadding: '0px',
    slidesToShow: 3,
    dots:true
  });

  
  // $(".slider__index").slick({
  //   slidesToShow: 1,
  //   // slidesToScroll: 1,
  //   dots: true,
  //   arrows:true,
  // });
    
});


