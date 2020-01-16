$(document).ready(function(){

    $('.main-slider').slick({
     // setting-name: setting-value
     dots: true
    });

    $('.main-slider1').slick({
        // по три шт
        slidesToShow: 3,
        dots: true,
        slidesToScroll: 1
       });

       $('.a1').click(function(){ 
       $('.list-close').fadeToggle(500); 
        });


  });