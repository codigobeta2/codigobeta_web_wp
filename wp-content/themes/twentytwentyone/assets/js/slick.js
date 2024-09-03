(function($) {
    function initializeSlick($slider, options) {
        $slider.each(function() {
            var $this = $(this);

            // Desinicializar si ya está inicializado
            if ($this.hasClass('slick-initialized')) {
                $this.slick('unslick');
            }

            // Inicializar el slider
            $this.slick(options);

            // Ocultar spinner y mostrar el slider
            $this.on('init', function() {
                $(this).closest('.slider-container').find('.spinner').hide();
                $(this).removeClass('u-hidden');
            });

            // Agregar listeners pasivos a los eventos touchstart y touchmove
            this.addEventListener('touchstart', function() {}, { passive: true });
            this.addEventListener('touchmove', function() {}, { passive: true });
        });
    }

    // Opciones del slider v1
    var sliderOptionsV1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                }
            }
        ]
    };

    // Opciones del slider v2 (puedes personalizar estas opciones)
    var sliderOptionsV2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                }
            }
        ]
    };

    var sliderOptionsV3 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                }
            }
        ]
    };

    var sliderOptionsV4 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    autoplaySpeed: 3000,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplaySpeed: 4000,
                }
            }
        ]
    };


    function refreshSliders() {
        // Inicializar los sliders v1 y v2
        initializeSlick($('.slider-v1'), sliderOptionsV1);
        initializeSlick($('.slider-v2'), sliderOptionsV2);
        initializeSlick($('.slider-v3'), sliderOptionsV3);
        initializeSlick($('.slider-v4'), sliderOptionsV4);
    }

    // Inicializar sliders al cargar la página
    $(window).on('load', function() {
        refreshSliders();
    });

    // Manejar eventos en Elementor para reinicializar sliders cuando se agrega un nuevo widget o se realizan cambios
    $(window).on('elementor/frontend/init', function() {
        // Hook para cuando un nuevo elemento se añade al editor
        elementorFrontend.hooks.addAction('frontend/element_ready/widget', function($scope) {
            var $sliderV1 = $scope.find('.slider-v1');
            if ($sliderV1.length > 0) {
                initializeSlick($sliderV1, sliderOptionsV1);
            }

            var $sliderV2 = $scope.find('.slider-v2');
            if ($sliderV2.length > 0) {
                initializeSlick($sliderV2, sliderOptionsV2);
            }

            var $sliderV3 = $scope.find('.slider-v3');
            if ($sliderV3.length > 0) {
                initializeSlick($sliderV3, sliderOptionsV3);
            }

            var $sliderV4 = $scope.find('.slider-v4');
            if ($sliderV4.length > 0) {
                initializeSlick($sliderV4, sliderOptionsV4);
            }
        });

        // Hook para cuando el contenido en el editor cambia
        elementorFrontend.hooks.addAction('frontend/element_ready/global', function($scope) {
            refreshSliders();
        });
    });

    // Delegar eventos de botones de navegación
    $('body').on('click', '.prev', function() {
        $(this).closest('.slider-container').find('.slider').slick('slickPrev');
    });

    $('body').on('click', '.next', function() {
        $(this).closest('.slider-container').find('.slider').slick('slickNext');
    });

})(jQuery);