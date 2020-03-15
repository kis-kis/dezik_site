$(function(){

    $('.header__slider-inner').slick({
        dots: true,
        arrows: false,
    });

    $(".product-stars").rateYo({
        rating: 5,
        starWidth: "13px",
        readOnly: true,
      });

      $('.products__inner').slick({
        // infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      });

    // $(".rate-star").rateYo({
    //     rating: 5,
    //     starWidth: "12px",
    //     readOnly: true
    //   });

    // $('.product-slider__inner').slick({
    //     dots: true,
    //     arrows: false,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    // });

    // var mixer = mixitup('.products__inner-box');
    
});