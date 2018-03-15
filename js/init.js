$(document).ready(function(){
  //CAROUSEL INIT
    $('.carousel').slick({
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed:6000,
      arrows:false,
      cssEase: "ease",
      fade:true
    });
  //ANIMATE SCROLL INIT
    AOS.init({
      offset: 150,
    duration: 600,
    easing: 'ease-in-quad',
    delay: 50
    });
  //LIGHTGALLERY init
  $('#lightgallery').lightGallery();

  //INIT DATEPICKER
  $(function () {
      $('#datetimepicker4').datetimepicker({
          format: 'L',
          locale:'fr'
      });
  });
});
