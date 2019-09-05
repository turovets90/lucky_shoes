$(document).ready(function(){

    $('.mm_btn').on('click',function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.mm_close').on('click',function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });

    if($(window).innerWidth() < 767){
        $(document).on('click', function(e) {
            if (!$(e.target).closest(".main_menu.open").length) {
                $(".main_menu.open").removeClass('open');
                $("html").removeClass('page-noscroll');
            }
            e.stopPropagation();
        });
    }

    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            fade:true,
            //infinite:false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed:9000,
        });
    }


/*
    $('.main_menu .arrow').on('click',function () {
        $(this).toggleClass('rotate');
        $(this).next().slideToggle();
    });


    if($('.banners_slider > div').length >1){
        $('.banners_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:true,
            //fade:true,
            //infinite:false,
           // autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
        });
    }



    $('.tab-content .tab-pane').each(function(){
        var tab_content_slider = $(this).find('.tab_content_slider');
        var tab_content_slider_item = $(this).find('.tab_content_slider > div');
        if(tab_content_slider_item.length > 4){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
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
        }else if($(window).innerWidth() < 575 && tab_content_slider_item.length > 1){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 767 && tab_content_slider_item.length > 2){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 991 && tab_content_slider_item.length > 3){
            $(tab_content_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }

    });



    if($(".category_slider .item").length >7){
        $('.category_slider').slick({
            slidesToShow:7,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 575,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }



    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });

    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        asNavFor: '.product_slider',
        //vertical:true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow:2,
                }
            }
        ]
    });




    $('.amount .down').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.amount .up').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });




    /*


*/

    /*

    if($('.main_slider .slider_item').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            fade:true,
            infinite:false,
            autoplay: true,
            //speed: 1000,
            autoplaySpeed:9000,
        });
    }

    if($(".serv_slider > div").length >4){
        $('.serv_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
           // centerMode: true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        centerMode: false,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        dots:true,
                    }
                }
            ]
        });
    }


    $('.slick_btn_group .slick_prev').click(function(){
        $('.serv_slider').slick('slickPrev');
    });

    $('.slick_btn_group .slick_next').click(function(){
        $('.serv_slider').slick('slickNext');
    });


    $('.review_item').each(function(){
        var more=$(this).find('.more');
        var show_more=$(this).find('.show_more');
        $(show_more).on('click', function(){
            if($(more).is(':visible')){
                $(more).slideUp();
                $(show_more).text('Читать далее');
            }else{
                $(more).slideDown();
                $(show_more).text('Свернуть');
            }
        });
    });

    if($('.reviews_slider .review_item').length >1){
        $('.reviews_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:false,
            infinite:false,
            //speed: 1000,
            //autoplay: true,
            //autoplaySpeed: 2000,
            responsive: [

                {
                    breakpoint: 767,
                    settings: {
                        dots:true,
                    }
                }
            ]
        });
    }



    if($(".clients_slider > div").length >4){
        $('.clients_slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            infinite:false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,

                    }
                }
            ]
        });
    }



   if($(".team_slider > div").length >3){
        $('.team_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            //centerMode: true,
           //variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,

                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        dots:true,
                    }
                }
            ]
        });
    }


    if($(".other_offers_list > div").length >3){
        $('.other_offers_list').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            //centerMode: true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                       // dots:true,
                    }
                }
            ]
        });
    }



    $('#show_more').on('click', function(){
        if($('#more').is(':visible')){
            $('#more').slideUp();
            $(this).text('Читать далее');
        }else{
            $('#more').slideDown();
            $(this).text('Свернуть');
        }
    });




    if($('.k2_slider > div').length >1){
        $('.k2_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots:true,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        arrows: false,
                    }
                }
            ]
        });
    }



    if($(".programs_slider > div").length >3){
        $('.programs_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            //infinite:false,
            //centerMode: true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        // dots:true,
                    }
                }
            ]
        });
    }


    if($(".portfolio_slider > div").length >3){
        $('.portfolio_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            centerMode: true,
            centerPadding: '20%',
            //infinite:false,
            //centerMode: true,
            //variableWidth: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        centerMode: true,
                        centerPadding: '183px',
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: 0,
                        // dots:true,
                    }
                }
            ]
        });
    }


    $('.datepicker').datepicker({
        format: 'mm/dd/yyyy',
        language: 'ru'
    });


    if($(".page_gallery_slider > div").length >3){
        $('.page_gallery_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }


    $(window).resize(function(){
        var header = $('header').outerHeight();

        if($(this).innerWidth() > 991){
            $('#nav').css({
                'top':header+'px'
            });
        }
        $(window).scroll(function(){
            if ($(window).scrollTop() > header) {
                $('header').addClass('fixed');
                $('body').css({
                    'padding-top':header+'px'
                });
            } else {
                $('header').removeClass('fixed');
                $('body').css({
                    'padding-top':'0px'
                });
            }
        });
    });
    $(window).resize();

   */


});


