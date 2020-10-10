$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });


    $('.heroes_slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/slider-arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/slider-arrow-right.png" alt="next"></button>',
        responsive: [
            {
              breakpoint: 769,
              settings: {
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
        ],
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes_slider-img',
        fade: true,
        arrows: false,
      });
});