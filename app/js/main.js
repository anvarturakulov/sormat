
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
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    dots:true,
    arrows:true,
    speed:1000
  });

  $(".slider__about").slick({
    slidesToShow: 1,
    dots:true,
    speed:1000,
    arrows:true,
    autoplay:true
  });

  $(".slider__patent").slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    dots:true,
    arrows:true,
    speed:1000
  });


  $(".slider__header").slick({
    slidesToShow: 1,
    dots:true,
    speed:1000,
    arrows:true,
    autoplay:true
  });

});


