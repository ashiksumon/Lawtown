(function($) {

    "use strict";

    // caching selectors
    var mainWindow           = $(window),
        mainHeader           = $('header'),
        mainBody             = $('body'),
        mainStatus           = $('#status'),
        mainPreloader        = $('#preloader'),
        miuContainer         = $('#mix-container'),
        slideCarousel        = $('.slide-carousel'),
        teacherCarousel      = $('.teacher-carousel'),
        newsCarousel         = $('.news-carousel'),
        clientCarousel       = $('.client-carousel'),
        testimonialCarousel  = $('.testimonial-wrapper'),
        partnerCarousel      = $('.partner-carousel'),
        galleryCarousel      = $('.gallery-carousel'),
        slickNavMenu         = $('#menu'),
        sfMenuExample        = jQuery("#sf-example"),
        galleryPhoto         = $('.gallery-photo'),
        scrollUp             = $('.scrollup'),
        mainCounter          = $('.counter'),
        dtPicker             = $('.datepicker'),
        videoPlay            = $('.video-play-btn')


    mainWindow.on('load', function() {

        // Datepicker
        dtPicker.datepicker({
            format: 'dd/mm/yyyy',
            startDate: '-3d'
        });

        // Preloader
        mainStatus.fadeOut();
        mainPreloader.delay(350).fadeOut('slow');
        mainBody.delay(350).css({
            'overflow': 'visible'
        });

        // Mix It Up
        miuContainer.mixItUp();

        // Slider
        slideCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            dots: false,
            responsiveClass: true,
            mouseDrag: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });


        slideCarousel.on('translate.owl.carousel', function () {
            $('.this-item h2').removeClass('fadeInUp animated').hide();
            $('.this-item h3').removeClass('fadeInUp animated').hide();
            $('.this-item p').removeClass('fadeInUp animated').hide();
        });

        slideCarousel.on('translated.owl.carousel', function () {
            $('.this-item h2').addClass('fadeInUp animated').show();
            $('.this-item h3').addClass('fadeInUp animated').show();
            $('.this-item p').addClass('fadeInUp animated').show();
        });


        // About section video
        videoPlay.magnificPopup({type:'video'});

        // Client Carousel
        clientCarousel.owlCarousel({
            items: 5,
            loop: true,
            margin: 15,
            autoplay: true,
            animateIn: true,
            responsiveClass: true,
            dots: false,
            responsive: {
                0: {
                    items: 2
                },
                500: {
                    items: 3
                },
                767:{
                    items: 4
                },
                1000: {
                    items: 5
                }
            }
        });

        // Testimonial Carousel
        testimonialCarousel.owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            animateIn: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>" , "<i class='fa fa-angle-right'></i>"],
            margin: 30,
            responsiveClass: true,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        // Carousel - Gallery
        galleryCarousel.owlCarousel({
            loop: true,
            autoplay: true,
            margin: 15,
            dots: false,
            animateIn: true,
            responsiveClass: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 1,
                    nav: true
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                }
            }
        });


        slickNavMenu.slicknav();


        // Superfish Menu
        sfMenuExample.superfish({
            pathLevels: 1,
            delay: 1000,
            animation: {opacity: 'show'},
            animationOut: {opacity: 'hide'},
            speed: 'fast',
            speedOut: 'fast',
            cssArrows: true,
            disableHI: false,
        });

        // Magnific Popup
        galleryPhoto.magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });

        // Scroll to Top
        mainWindow.on("scroll", function() {
            if ($(this).scrollTop() > 98){
                mainHeader.addClass("sticky");
                mainBody.addClass("sticky");
                scrollUp.show();
            }
            else{
                mainHeader.removeClass("sticky");
                mainBody.removeClass("sticky");
                scrollUp.hide();
            }

        });

        // Click event to scroll to top
        scrollUp.on("click", function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        });

        // Counter
        mainCounter.counterUp({
            delay: 10,
            time: 1000
        });

    });

})(jQuery);