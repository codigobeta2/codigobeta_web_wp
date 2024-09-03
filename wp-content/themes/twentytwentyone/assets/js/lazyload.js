jQuery(document).ready(function($) {
    $.fn.customLazyLoad = function(options) {
        var settings = $.extend({
            effect: 'fadeIn',
            threshold: 0,
            loadingPlaceholder: 'https://www.codigobeta.es/wp-content/uploads/2024/08/loading-black.gif',
            loadingClass: 'loading'
        }, options);

        // Función para cargar una imagen
        function loadImage($img) {
            var imgSrc = $img.attr('data-original');
            if (imgSrc) {
                var img = new Image();
                img.src = imgSrc;
                $(img).on('load', function() {
                    // Cambiar la fuente de la imagen de cargando a la real y quitar la clase `loading`
                    $img.attr('src', imgSrc)
                        .removeClass(settings.loadingClass)
                        .addClass('loaded')
                        .css('visibility', 'visible'); // Hacer visible la imagen real
                }).on('error', function() {
                    console.error('Error loading image', imgSrc);
                });
            } else {
                console.error('No data-original attribute found for image', $img);
            }
        }

        // Función para verificar si la imagen está en el viewport
        function checkImages() {
            var windowHeight = $(window).height();
            var windowTop = $(window).scrollTop();
            var windowBottom = windowTop + windowHeight;

            $(this).each(function() {
                var $this = $(this);
                var imageTop = $this.offset().top;
                var imageBottom = imageTop + $this.height();

                // Cargar la imagen solo si está en el viewport
                if ($this.is(':visible') && (imageBottom >= windowTop - settings.threshold) && (imageTop <= windowBottom + settings.threshold)) {
                    loadImage($this);
                }
            });
        }

        // Inicializar las imágenes visibles al cargar la página
        checkImages.call(this);

        // Monitorizar el scroll para cargar imágenes cuando estén cerca de la vista
        $(window).on('scroll', function() {
            checkImages.call($('.lazy'));
        });

        // Detectar cuando el documento se redimensiona
        $(window).on('resize', function() {
            checkImages.call($('.lazy'));
        });
    };

    // Inicializar lazy load
    $('img.lazy').customLazyLoad({
        effect: 'fadeIn'
    });
});